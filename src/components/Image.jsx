import React from 'react'
import PropTypes from 'prop-types';

const Image = ({ largeImageURL, likes, previewURL, tags, views }) => (
 
    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
      <div className="card">
        <img 
          src={previewURL} 
          alt={tags} 
          className="card-img-top"

        />

        <div className="card-body">
          <p 
          className="card-text"
          >
            {likes}
            {' '}
            Me gusta
            </p>
            <p 
          className="card-text"
          >
            {views}
            {' '}
            Vistas
            </p>
        </div>

        <div className="card-footer">
          <a 
          href={largeImageURL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary btn-block"
          
          >
            Ver Imagen
          </a>
        </div>
      </div>
    </div>
   );

   Image.propTypes ={
    largeImageURL: PropTypes.string,
    likes: PropTypes.number,
    previewURL: PropTypes.string,
    tags: PropTypes.string,
    views: PropTypes.number,
   };
 
export default Image;