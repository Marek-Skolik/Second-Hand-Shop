import React from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleProduct = ({ product }) => {
  const { id, name, price, photo } = product;

  return (
    <Card className="mb-4">
      <div
        style={{
          position: 'relative',
          paddingBottom: '75%',
          overflow: 'hidden',
          backgroundColor: '#f8f8f8',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        >
          <Card.Img
            variant="top"
            src={`./uploads/photos/${photo}`}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
            }}
          />
        </div>
      </div>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>Cena: {price} zł</Card.Text>
        <Form>
          <Form.Group>
            <Form.Label>Ilość:</Form.Label>
            <Form.Control
              className="my-3"
              style={{ width: '5rem' }}
              type="number"
              min="1"
              max="20"
            />
          </Form.Group>
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center">
            <Button className="my-2 max-2" variant="dark">
              Dodaj do koszyka
            </Button>
            <Button as={Link} to={`/productPage/${id}`} variant="secondary" className="my-2">
              Pokaż
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default SingleProduct;