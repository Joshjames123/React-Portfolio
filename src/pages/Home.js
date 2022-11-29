import React from "react";
import SidebarLayout from "../comps/SidebarLayout";
import "../App.css";
import { Row, Col, Container } from "react-bootstrap";
import { motion } from "framer-motion";

function Home() {
  return (
    <SidebarLayout>
      <Container fluid>
        <Row className="justify-content-md-center">
          <Col md={6} xs lg="2">
            <motion.div
              className="box"
              initial={{ opacity: 0, scale: 1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1.5,
                delay: 1,
                ease: [1, 0.71, 0.2, 1.01],
              }}
            >
              <h1>Hi there!</h1>
              <h1>I'm Joshua</h1>
              <h4>Fullstack Web Developer</h4>
            </motion.div>
          </Col>
          <motion.h1
            animate={{ x: [50, 150, 50], opacity: 1, scale: 1 }}
            transition={{
              duration: 2,
              delay: 0.1,
              ease: [0.5, 0.71, 1, 1.5],
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            whileHover={{ scale: 1.2 }}
          >
            <Col md="auto">
              <img
                className="rounded-circle img-thumbnail"
                src={require("../pages/pics/jimg_gray.png")}
                width={380}
                height={300}
              />
            </Col>
          </motion.h1>
        </Row>
      </Container>
    </SidebarLayout>
  );
}

export default Home;
