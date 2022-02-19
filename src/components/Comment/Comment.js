import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetchComment } from '../../hooks/useFetchComment';

export const Comment = () => {

    const {idPost} = useParams();
    const {loading, data:comments} = useFetchComment(idPost);

  return (
    <>  
        {
            loading && <p>Cargando ...</p>
        }
        {
            (
                comments.map( (comment) => (
                    <div className="row col-8 text-center pt-5" key={comment.id}>  
                        <h5>{comment.message}</h5>           
                        <p>{comment.firstName} {comment.lastName}</p>
                    </div>
                ))
            )
        }

    </>
  )
}
