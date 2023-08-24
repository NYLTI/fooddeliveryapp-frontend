import React, {  useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ReviewForm from "./ReviewForm";

function Reviews({ reviews }) {

  const revText = useRef();
 
  const addReview = async (e) => {
    e.preventDefault();

  };
  return (
    <Container>
      <Row>
        <Col>
          <h3>Reviews</h3>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col>
          <img src='food1.jpg'/>
        </Col>
        <Col>
          {
            <>
              <Row>
                <Col>
                  <ReviewForm
                    handleSubmit={addReview}
                    revText={revText}
                    labelText="Write a Review"
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <hr />
                </Col>
              </Row>
            </>
          }
          {reviews.map((r) => {
            return (
              <>
                <Row>
                  <Col>123</Col>
                </Row>
              </>
            );
          })}
        </Col>
      </Row>
    </Container>
  );
}

export default Reviews;
