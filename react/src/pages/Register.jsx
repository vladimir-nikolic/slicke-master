import { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    confEmail: "",
    password: "",
    country: "",
  });

  const onChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const { name, email, confEmail, password, country } = formData;
  return (
    <>
      <section className="heading">
        <h1>
          <FaUser /> Register
        </h1>
        <p>Please create an account</p>
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={name}
              placeholder="Enter your name"
              onChange={onChange}
            />
          </div>{" "}
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="confEmail"
              name="confEmail"
              value={confEmail}
              placeholder="Confirm Email"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={password}
              placeholder="Create password"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="country"
              name="country"
              value={country}
              placeholder="Enter country"
              onChange={onChange}
            />
          </div>
          <div className="form-control">
            <button type="submit" className="btn btn-block">
              Submit
            </button>
          </div>
          <div className="form-control">
            <span>All Ready User ?</span>
            <Link to="/login">
              <span className="button"> Log In </span>
            </Link>
          </div>
        </form>
      </section>
    </>
  );
}

export default Register;
