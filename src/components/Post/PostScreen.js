import React, { useEffect, useState } from 'react';
import { useFetchBlog } from '../../hooks/useFetchBlog';
import { Article } from '../Article/Article';

export const PostScreen = () => {
  
  const {loading, data:articles} = useFetchBlog();

  return (
    <>
      <div className="s-content">
        <div className="masonry-wrap">
          <div className="masonry">
            <div className="grid-sizer"></div>
            {
              loading && <p>Cargando ...</p>
            }
            {
              (
                articles.map((article) => (
                  <Article key={article.id} article={article} />
                )) 
              )
              
            }
            
          </div>
        </div>
      </div>
    </>
  )
}
