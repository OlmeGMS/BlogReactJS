import React from 'react'
import { Link } from 'react-router-dom';

export const Article = ( props ) => {

    const article = props.article;

  return (
    <>
        <div className="row col-8">             
            <div className="entry__thumb">
                <div  className="entry__thumb-link col-12" >
                    <img src={article.image} alt={article.owner.firstName}/>
                </div>
            </div>

            
            <div className="entry__text col-12">
                <div className="entry__header">
                    <Link to={`/comment/${article.id}`}>
                    <h2 className="entry__title">
                        {article.text}
                        
                    </h2>
                    </Link>
                    <div className="entry__meta">
                        <span className="entry__meta-date">
                            {article.publishDate}
                        </span>
                    </div>
                    
                </div>
                <div className="entry__excerpt">
                    <p>
                    Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua...
                    </p>
                </div>
            </div>
        </div>
    </>
  )
}