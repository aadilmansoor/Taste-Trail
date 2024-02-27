import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import Operatinghours from "./Operatinghours";
import Review from "./Review";

function Restview() {
  //object create for useParams
  const params = useParams();

  const [restList, setRest] = useState([]);

  // api to  access data
  const getData = async () => {
    const result = await fetch("/restaurants.json");
    result.json().then((data) => setRest(data.restaurants));
  };

  //find single restaurant data
  const singleRest = restList.find((i) => i.id === params.id);

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {singleRest ? (
        <Row>
          <Col lg={6} md={6}>
            <img
              className="w-75 container py-5 ps-5"
              style={{ height: "700px" }}
              src={singleRest.photograph}
              alt=""
            />
          </Col>
          <Col lg={6} md={6} className="fs-5 mt-5 pe-5">
            <ListGroup className="w-100 container">
              <ListGroup.Item>
                <h2 className="text-warning">{singleRest.name}</h2>
              </ListGroup.Item>
              <ListGroup.Item>Address: {singleRest.address}</ListGroup.Item>
              <ListGroup.Item>
                Neighbourhood: {singleRest.neighborhood}
              </ListGroup.Item>
              <ListGroup.Item>
                Cusine Type: {singleRest.cuisine_type}
              </ListGroup.Item>
              <ListGroup.Item>
                <Operatinghours workingTime={singleRest.operating_hours} />
              </ListGroup.Item>
              <ListGroup.Item>
                <Review reviewList={singleRest.reviews} />
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      ) : (
        ""
      )}
    </>
  );
}

export default Restview;
