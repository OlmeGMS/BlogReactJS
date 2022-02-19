import React from 'react';
import ReactDOM from 'react-dom';
import { BlogApp } from './BlogApp';
import './styles/styles.scss';
const App_Id = process.env.APP_ID;
console.log('App_Id', App_Id);

ReactDOM.render(
  <BlogApp />,
  document.getElementById('root')
);

