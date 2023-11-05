import React from 'react';
import PropTypes from 'prop-types'; 

import Image from 'react-bootstrap/Image';

function CustomImage({ src, alt, fluid }) {
  return <Image src={src} alt={alt} fluid={fluid} />;
}

CustomImage.propTypes = {
  src: PropTypes.string.isRequired, 
  alt: PropTypes.string.isRequired, 
  fluid: PropTypes.bool,
};

export default CustomImage;
