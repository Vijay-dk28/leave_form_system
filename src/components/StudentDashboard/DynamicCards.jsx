import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import '../asserts/css/Main.css'

const dynamicCardsData = [
  { id: 1, title: 'Total Leaves', description: '10' },
  { id: 2, title: 'Leaves Applied', description: ' 02' },  
  { id: 3, title: 'Leaves Approved', description: ' 02' }, 
  { id: 4, title: 'Leaves Remaining', description: ' 08' }, 
];

const DynamicCards = () => {
  const cardBackgroundColor = '#f4f4f4';
  return (
    <Row className="justify-content-center my-4" >
    {dynamicCardsData.map(card => (
      <Col key={card.id} sm={6} md={4} lg={2} className="mb-4 mx-2 ">
        <Card style={{ backgroundColor: cardBackgroundColor }}>
          <Card.Body className='pb-5  cardcon '>
            <Card.Title>{card.title}</Card.Title>
            <Card.Text className='pt-5'>{card.description}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
  );
};

export default DynamicCards;
