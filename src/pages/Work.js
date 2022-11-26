import React from "react";
import SidebarLayout from "../comps/SidebarLayout";
import { Row, Col, Container } from "react-bootstrap";
import { motion } from "framer-motion";

export const Work = () => {
  return (
    <SidebarLayout>
      <Container>
        <motion.div
          animate={{ x: [0, 100, 0], opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.5,
            ease: [0.5, 0.71, 1, 1.5],
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
                paddingTop: 160,
              }}
            >
              <h4>Work</h4>
              <Col
                xs
                md={12}
                style={{
                  paddingTop: 10,
                  paddingBottom: 10,
                  paddingRight: 0,
                }}
              >
                <h5>September, 2022 - Ongoing</h5>
                <Col md={{ span: 5, offset: 7 }} className="p-0">
                  <h5>TekSwipe</h5>
                  <h6>Web Developer</h6>
                  <h6>
                    - HTML, CSS, Javascript, Next.js, Firebase - Mentor for my
                    employee in the Philippines
                  </h6>
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
                  paddingBottom: 30,
                  paddingRight: 0,
                }}
              >
                <h5>September, 2021 - February, 2022</h5>
                <Col md={{ span: 5, offset: 7 }} className="p-0">
                  <h5>CreativeX</h5>
                  <h6>
                    Evaluation of images for tags/identifiers - Picasso Labs,
                    Inc.
                  </h6>
                  <h6>
                    - Tagging objects found in an image to improve search or
                    advertising targeting Audit uploaded images or videos to
                    moderate content Quality assurance to ensure client
                    guidelines are met Evaluation of images/videos for certain
                    tags/themes
                  </h6>
                </Col>
              </Col>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </SidebarLayout>
  );
};
