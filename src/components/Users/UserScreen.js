import React from 'react'
import { useFetchUser } from '../../hooks/useFetchUser';

export const UserScreen = () => {

  const {loading, data:users} = useFetchUser();

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">Avatar</th>
          </tr>
        </thead>
        <tbody>
          {
            (
              users.map(user => (
                <tr>
                  <th scope="row">{user.id}</th>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td><img src={user.picture} alt={user.firstName} width="30"/></td>
                </tr>
              ))
            )
          }
        </tbody>
      </table>
    </div>
  )
}