import React from "react";
import SidebarLayout from "../comps/SidebarLayout";
import { Row, Col, Container } from "react-bootstrap";
import { motion } from "framer-motion";

export const Education = () => {
  return (
    <SidebarLayout>
      <Container>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 3, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <Row>
            <Col
              style={{
                height: 20,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                paddingBottom: 100,
                paddingTop: 25,
                paddingLeft: 0,
              }}
            >
              <h4>Education</h4>
              <Col
                xs
                md={12}
                style={{
                  paddingTop: 40,
                  paddingBottom: 20,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Col md={4} className="p-0 ml-2">
                  <h5>Full-Stack Web Developer - 2022</h5>
                </Col>
                <Col md={{ span: 6, offset: 2 }}>
                  <h5>Zuitt Learning Institute Incorporated</h5>
                  <h6>95% Percentage</h6>
                </Col>
              </Col>
              <Col
                style={{
                  borderColor: "black",
                  borderStyle: " Solid none none ",
                  borderWidth: "",
                  paddingBottom: 20,
                }}
              ></Col>
              <Col
                xs
                md={12}
                style={{
                  paddingBottom: 20,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Col md={4} className="p-0 ml-2">
                  <h5>Computer Technology - 2013</h5>
                </Col>
                <Col md={{ span: 6, offset: 2 }}>
                  <h5>Asian Institute of Computer Studies</h5>
                  <h6>89% Percentage</h6>
                </Col>
              </Col>
              <Col
                style={{
                  borderColor: "black",
                  borderStyle: " Solid none none ",
                  borderWidth: "",
                  paddingBottom: 20,
                }}
              ></Col>
              <Col
                xs
                md={12}
                style={{
                  paddingBottom: 0,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Col md={4} className="p-0 ml-2">
                  <h5>OLRA Colloage Foundation - 2010</h5>
                </Col>
                <Col md={{ span: 6, offset: 2 }}>
                  <h5>High School</h5>
                  <h6>Graduate</h6>
                </Col>
              </Col>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </SidebarLayout>
  );
};
