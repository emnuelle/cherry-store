import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardComponent(props) {
  const textColor = '#FFFFFF'; 
  const linkStyle = {
    textDecoration: 'none', 
    color: textColor,
  };

  return (
    <Card style={{ width: '15rem', height: 'auto', background: '#842138', padding: '10px' }}>
      <div>
        <a href={props.link} style={linkStyle}>
          <Card.Img variant="top" src={props.imageUrl} />
          <Card.Body>
            <Card.Title style={{ color: textColor }}>{props.title}</Card.Title>
            <Card.Text style={{ color: textColor }}>{props.description}</Card.Text>
            <Button className='p-1' variant='light' style={{ background: '#C07486', padding: '10px', color: textColor }}>
              R${props.valor}
            </Button>
          </Card.Body>
        </a>
      </div>
    </Card>
  );
}

export default CardComponent;
