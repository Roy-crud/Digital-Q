import './App.css';
import { Login } from './Components/Login/Loginpage'


function App() {
  return (
    <div className="login-page">
      <div className="container mt-3">
        <div className='row'>
          <div className='col-md-5'>
            <Login />
          </div>


        </div>

      </div>
    </div>
  );
}

export default App;
