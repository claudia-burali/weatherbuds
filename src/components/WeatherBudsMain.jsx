import React, { useState } from 'react';
import { Container, Row, Col, Button, Dropdown, Form } from 'react-bootstrap';
/*import { useNavigate } from 'react-router-dom';*/
import WeatherFetch from './WeatherFetch';


const WBMain = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [city, setCity] = useState();
  /*const navigate = useNavigate();*/

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    setCity(searchQuery);
    /*navigate('/WeatherFetch');*/
  };

  return (
    <Container className="my-3">
      <Row className="text-center text-lg-start d-flex align-items-center justify-content-between my-4">
        <Col>
          <div className="d-flex gap-3 align-items-center">
            <h1 className="d-inline">Hi UserName</h1>
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
          </div>
        </Col>
        <Col>
          <div className="d-flex gap-1 justify-content-end">
            <Button variant="outline">
            <svg xmlns="http://www.w3.org/2000/svg" width="16"
                height="16"
                fill="currentColor"
                className="bi bi-grid-fill"
                viewBox="0 0 16 16"><path d="M172.3 501.7C27 291 0 269.4 0 192 0 86 86 0 192 0s192 86 192 192c0 77.4-27 99-172.3 309.7-9.5 13.8-29.9 13.8-39.5 0zM192 272c44.2 0 80-35.8 80-80s-35.8-80-80-80-80 35.8-80 80 35.8 80 80 80z"/></svg>
            </Button>
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
      
      <Form onSubmit={handleSearchSubmit} className="d-flex">
        <Form.Control
          type="text"
          placeholder="Enter city name"
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
        <Button type="submit" variant="outline">
          Search
        </Button>
      </Form>
      <WeatherFetch searchQ={city}/>
    </Container>
  );
};

export default WBMain;