import React, { useState } from 'react';
import { Container, Row, Col, Button, Dropdown, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import SapiensImg from '../assets/sapiens_2.png';


const WBMain = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    navigate(`/WeatherFetch/${searchQuery}`);
  };

  return (
    <Container className="my-5">
      <Row className="text-center text-lg-start d-flex align-items-center justify-content-between my-4">
        <Col>
          <div className="d-flex gap-3 align-items-center my-2">
            <h1 className="d-inline">Welcome to WeatherBuds!</h1>
          </div>
        </Col>
        <Col>
          <div className="d-flex gap-1 justify-content-end">
          <Dropdown className="d-inline">
              <Dropdown.Toggle variant="outline" id="dropdown-basic">
                EN
              </Dropdown.Toggle>
              <Dropdown.Menu className="dropdown-menu">
                <Dropdown.Item href="#">IT</Dropdown.Item>
                <Dropdown.Item href="#">ES</Dropdown.Item>
                <Dropdown.Item href="#">FR</Dropdown.Item>
                <Dropdown.Item href="#">DE</Dropdown.Item>
                <Dropdown.Item href="#">JA</Dropdown.Item>
                <Dropdown.Item href="#">ZH</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Button variant="outline">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-grid-fill"
                viewBox="0 0 16 16"
              >
                <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5z" />
              </svg>
            </Button>
          </div>
        </Col>
      </Row>
      <div className="my-5">
        <p>Stay ahead of the forecast with real-time weather updates for any location. Whether you're planning your day or preparing for an adventure, WeatherBuds has you covered. Enter your city and discover what the skies have in store for you!</p>
      </div>
      <Form onSubmit={handleSearchSubmit} className="d-flex gap-1 my-3">
        <Form.Control
          type="text"
          placeholder="Enter city name"
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
        <Button type="submit" className="search">
          Search
        </Button>
      </Form>
      <img src={SapiensImg} alt="avatar" />
    </Container>
  );
};

export default WBMain;
