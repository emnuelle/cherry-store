import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Carrossel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <a href="/"><img src="./public/slide-1.png" alt="Promo1" className="d-block w-100" /></a>
      </Carousel.Item>
      <Carousel.Item>
        <a href="/"><img src="./public/slide-2.png" alt="Promo2" className="d-block w-100" /></a>
      </Carousel.Item>
      <Carousel.Item>
        <a href="/"><img src="./public/slide-3.png" alt="Promo3" className="d-block w-100" /></a>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrossel;
