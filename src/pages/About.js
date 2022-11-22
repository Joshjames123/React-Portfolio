import React from "react";
import SidebarLayout from "../comps/SidebarLayout";
import { Row, Col, Container } from "react-bootstrap";
import Stack from "@mui/material/Stack";
import LinearProgress from "@mui/material/LinearProgress";
import { motion } from "framer-motion";

function About() {
  return (
    <SidebarLayout>
      <Container>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ rotate: 720, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 10,
            duration: 20,
            delay: 0.5,
          }}
        >
          <Row>
            <Col md={{ span: 10, offset: 1 }}>
              <Stack sx={{ width: "100%", color: "grey.1000" }} spacing={1}>
                <LinearProgress color="inherit" />
              </Stack>
            </Col>

            <Col
              xs
              md={{ span: 10, offset: 1 }}
              style={{
                height: 500,
                borderWidth: 5,
                borderColor: "black",
                borderStyle: "dashed double dashed",
                borderWidth: "",
              }}
            >
              <h4
                style={{
                  marginTop: 100,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                About Me
              </h4>
              <Col>
                <h6
                  style={{
                    marginTop: 50,
                    display: "flex",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                >
                  A Fullstack Developer specializing in Github & Gitlab, Version
                  Control System, HTML5, Bootstrap, and Cascading Style Sheets
                  CSS, Node.js, Express.js, CRUD & REST APIs, JS library
                  React.js, Nosql MongoDB, Firebase. Looking for online jobs to
                  further develop my skills while giving quality services to my
                  clients. And to be productive in IT community.
                </h6>
              </Col>
            </Col>
            <Col md={{ span: 10, offset: 1 }}>
              <Stack sx={{ width: "100%", color: "grey.1000" }} spacing={1}>
                <LinearProgress color="inherit" />
              </Stack>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </SidebarLayout>
  );
}

export default About;
