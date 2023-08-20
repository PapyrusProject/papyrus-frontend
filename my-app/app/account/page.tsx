import React from 'react';
import './styles.css';

const BlankPage = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Register</h1>
        <form>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default BlankPage;
