import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

//
const user = JSON.parse(localStorage.getItem("user"));
const token = JSON.parse(localStorage.getItem("token"));

const initialState = {
  user: user? user : null,
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

//Create user
export const register = createAsyncThunk(
  "auth/register",
  async (data, thunkAPI) => {

    try {
      return await authService.register(data);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (data, thunkAPI) => {
    try {
      return await authService.login(data);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);


export const logout = createAsyncThunk('auth/logout', async () => {
  authService.logout();
})

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(register.pending, (state) => {state.isLoading = true})
    .addCase(register.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.user = action.payload
    })
    .addCase(register.rejected, (state, action) =>{
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
      state.user = null
    })
    .addCase(logout.fulfilled, (state) => {
      state.user = null
    })
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
