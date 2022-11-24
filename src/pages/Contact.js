import React from "react";
import SidebarLayout from "../comps/SidebarLayout";
import { motion } from "framer-motion";
import { Row, Col, Container, Form, Button } from "react-bootstrap";

function Contact() {
  return (
    <SidebarLayout>
      <Container>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 10,
            duration: 20,
            delay: 0.5,
          }}
        >
          <Row>
            <Col
              xs
              md={{ span: 10, offset: 1 }}
              style={{
                height: 500,
                borderWidth: 5,
                borderColor: "black",
                borderStyle: "dashed double dashed",
                borderWidth: "",
                background: "black",
                color: "white",
                padding: 0,
              }}
            >
              <h4
                style={{
                  marginTop: 60,
                  marginBottom: 20,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                Contact
              </h4>
              <Col
                sm="12"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  padding: 0,
                }}
              >
                <Form>
                  <Form.Group
                    className="mb-2"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Control
                      size="sm"
                      type="text"
                      placeholder="Your Name"
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Row>
                      <Col md={7}>
                        <Form.Control
                          size="sm"
                          type="text"
                          placeholder="Your Email"
                        />
                      </Col>
                      <Col md={5}>
                        <Form.Control
                          size="sm"
                          type="text"
                          placeholder="Phone Number"
                        />
                      </Col>
                    </Row>
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Control
                      size="sm"
                      type="text"
                      placeholder="Your Name"
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Control
                      type="text"
                      size="sm"
                      as="textarea"
                      rows={4}
                      placeholder="Your Message"
                    />
                  </Form.Group>
                  <Col
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      background: "dark",
                    }}
                  >
                    <Button variant="light" type="text" size="sm">
                      SEND
                    </Button>
                  </Col>
                </Form>
              </Col>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </SidebarLayout>
  );
}

export default Contact;
