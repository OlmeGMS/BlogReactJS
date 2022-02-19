import React from 'react';
import { fetchSimple } from '../../helpers/fetch';

const getBlogs = async() => {
  const resp = await fetchSimple('/post',null,'GET');
  const data = await resp.json();
  console.log('res', data);
}

getBlogs();

export const PostScreen = () => {
  return (
    <div>
        <h1>Post screen</h1>
    </div>
  )
}
