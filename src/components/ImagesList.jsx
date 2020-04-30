import React from 'react'
import PropTypes from 'prop-types';

import Image from './Image';

const ImagesList = ({ images }) => {

  if (images.length === 0) return null;

  return (  
    <div className="col-12 p-5 row">
      {images.map((image)=> (
        <Image
          key={image.id}
          {...image}
        />
      ))}
    </div>

  );
}

ImagesList.propTypes ={
  images: PropTypes.array,
};
 
export default ImagesList;