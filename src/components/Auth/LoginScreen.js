import React from 'react';
import { useNavigate } from 'react-router-dom';

export const LoginScreen = () => {

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/users', {
      replace: true
    });
  }

  return (
    <div className="container login-container">
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-6 login-form-1 text-center pb-5">
          <h3>Ingreso</h3>
          <form>
            <div className="form-group">
              <input 
                type="text"
                className="form-control"
                placeholder="Correo"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Contraseña"
              />
            </div>
              <div className="form-group pt-5">
                <input 
                  type="submit"
                  className="btnSubmit"
                  value="Login" 
                  onClick={handleLogin}
                />
              </div>
          </form>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  )
}
