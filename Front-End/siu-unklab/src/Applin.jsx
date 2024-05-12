
import './App.css'

const App = () => {
  return (
    <div className="login-container">
      <div className="login-form">
        <div className="logo-container">
          <img src="./" alt="Logo" className="logo" />
        </div>
        <input type="text" placeholder="Registration Number" className="input-field" />
        <input type="password" placeholder="Password" className="input-field" />
        <a href="home.jsx"><button className="login-button">Login</button></a>
        <a href="#" className="forgot-password">Reset Session?</a>
      </div>
    </div>
  );
};

export default App
