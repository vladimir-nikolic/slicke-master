import axios from "axios";

const API_URL = "http://localhost:8000/api/signup";


// register user

const register= async (userData) => {
  const response = await axios.post(API_URL, userData);

  console.log(response.data)

  if (response.data){
    console.log(response)
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data

}

const authService = {
  register,
}

export default authService