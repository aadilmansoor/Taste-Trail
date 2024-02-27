import React from "react";
import Accordion from "react-bootstrap/Accordion";

function Review({ reviewList }) {
  return (
    <div>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Reviews</Accordion.Header>
          <Accordion.Body>
            {reviewList.map((i) => (
              <div key={i.name}>
                <div>
                  <p>Name: {i.name}</p>
                  <p>Date: {i.date}</p>
                  <p>Rating: {i.rating}/5</p>
                  <p>
                    Comments: <br />
                    {i.comments}
                  </p>
                </div>
                <hr />
              </div>
            ))}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default Review;
