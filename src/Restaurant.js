import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import "./Restaurant.css";
import { Link } from "react-router-dom";

function Restaurant() {
  const [restList, setRest] = useState([]);

  // api to  access data
  const getData = async () => {
    const result = await fetch("/restaurants.json");
    result.json().then((data) => setRest(data.restaurants));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h4 className="text-center text-sm mt-5">
        Discover culinary excellence near you
      </h4>
      <Row className="ms-5 mb-5 p-2">
        {restList.map((rest) => (
          <Col id="c1" key={rest.name} className="p-2" lg={4} md={6}>
            <Link id="l1" to={`viewRest/${rest.id}`}>
              <Card
                className="mt-5 ms-5"
                style={{ width: "18rem", height: "400px" }}
              >
                <Card.Img
                  variant="top"
                  src={rest.photograph}
                  style={{ height: "250px" }}
                />
                <Card.Body>
                  <Card.Title>{rest.name}</Card.Title>
                  <Card.Text style={{ color: "white" }}>
                    {rest.address}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Restaurant;
