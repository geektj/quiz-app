import React from "react";
import { Button } from "./Button/button";
import "../App.scss";

const Home = () => {

    const handleSubmit = () => {
        console.log('_handlesubmit')
    }
  return (
    <div className="home-container">
      <div className="home-box">
        <div className="home-title">Quiz App</div>
        <div className="form-box">
          <div className="input-box">
            <label className="form-label">Name</label>
            <input type="text" name="name" value="" className="form-input" />
          </div>
          <div className="input-box">
            <label className="form-label">Email</label>
            <input type="email" name="email" value="" className="form-input" />
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
