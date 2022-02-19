import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchSimple } from '../../helpers/fetch';
import { AuthContext } from '../../reducer/authContext';
import { types } from '../../types/inedex';

export const LoginScreen = () => {

  const navigate = useNavigate();
  const { dispatch } = useContext( AuthContext);

  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });

  const { firstName, lastName, email } = formState

  useEffect(() => {

  }, [formState])

  const handleLogin = async() => {

    // console.log('formState', firstName);
    // const resp = await fetchSimple(`user/create`,formState,'POST');
    // const dataUser = await resp.json();
    // if(dataUser.data.id || dataUser.data.email === 'Email already used'){
    //   const action = {
    //     type: types.login
    //   }
    //   dispatch(action);

    //   navigate('/users', {
    //     replace: true
    //   });
    // } else {
    //   alert('No se pudo realizar el registro');
    // }

    const action = {
      type: types.login
    }
    dispatch(action);
    navigate('/users', {
      replace: true
    });
  }

  const handleInputChange = ({target}) => {
    setFormState({
      ...formState,
      [target.name]: target.value
    })
  };

  return (
    <div className="container login-container">
      <div className="row">
      <div className="col-md-3"></div>
        <div className="col-md-6">
          <div className="col-md-12 login-form-1 text-center p-5">
            <h3>Ingreso</h3>
            <form>
              <div className="form-group">
                <input 
                  type="text"
                  className="form-control"
                  placeholder="Nombre"
                  name="firstName"
                  value={firstName}
                  onChange={ handleInputChange }
                />
              </div>
              <div className="form-group">
                <input 
                  type="text"
                  className="form-control"
                  placeholder="Apellido"
                  name="lastName"
                  value={lastName}
                  onChange={ handleInputChange }
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Correo"
                  name="email"
                  value={email}
                  onChange={ handleInputChange }
                />
              </div>
                <div className="form-group pt-5">
                  <button 
                    type="submit"
                    className="btnSubmit"
                    onClick={handleLogin}
                  >Inciar</button>
                </div>
            </form>
          </div>
        </div>   
      <div className="col-md-3"></div>     
      </div>
    </div>
  )
}
