import React, { useContext } from "react";
import { Button } from "./Button/button";
import { context } from "../context/index";
import { useNavigate } from 'react-router-dom';
import "../App.scss";

const Home = () => {
  const { name, email, setName, setEmail } = useContext(context);
  const navigate = useNavigate();

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = () => {
    if(name && email){
        navigate("/quiz");
    }else {
        alert("please fill name and email");
    }
    
  };
  return (
    <div className="home-container">
      <div className="home-box">
        <div className="home-title">Quiz App</div>
        <div className="form-box">
          <div className="input-box">
            <label className="form-label">Name</label>
            <input
              type="text"
              name="name"
              value={name}
              className="form-input"
              onChange={handleNameChange}
              required
            />
          </div>
          <div className="input-box">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              className="form-input"
              onChange={handleEmailChange}
              required
            />
          </div>
        </div>
        <div className="form-button">
          <Button label="Start Quiz" onClick={handleSubmit} />
        </div>
      </div>
    </div>
  );
};
export default Home;
