import React from "react";
import SidebarLayout from "../comps/SidebarLayout";
import { motion } from "framer-motion";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7cwcq24",
        "template_0nhvgl1",
        form.current,
        "U3GCVsTmItqgnV8eM"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
    toast.success("Message Sent, Thank you", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    sleep(4000).then(() => {
      window.location.reload();
    });
  };

  return (
    <>
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
                  <Form ref={form} on onSubmit={sendEmail}>
                    <Form.Group
                      className="mb-2"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Control
                        size="sm"
                        type="text"
                        placeholder="Your Name"
                        name="user_name"
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
                            name="user_email"
                          />
                        </Col>
                        <Col md={5}>
                          <Form.Control
                            size="sm"
                            type="text"
                            placeholder="Phone Number"
                            name="user_number"
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
                        placeholder="Subject"
                        name="user_subject"
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
                        name="message"
                      />
                    </Form.Group>
                    <Col
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        background: "dark",
                      }}
                    >
                      <Button
                        variant="light"
                        type="submit"
                        size="sm"
                        value="Send"
                      >
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
      <ToastContainer />
    </>
  );
}

export default Contact;
