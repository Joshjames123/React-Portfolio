import React from "react";
import SidebarLayout from "../comps/SidebarLayout";
import { Row, Col, Container } from "react-bootstrap";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  CardHeader,
} from "@mui/material";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function Project() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <SidebarLayout>
      <Box sx={{ width: "100%" }}>
        <Col>
          <h3>Project</h3>
        </Col>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            <Tab label="Project-1" {...a11yProps(0)} />
            <Tab label="Project-2" {...a11yProps(1)} />
            <Tab label="Project-3" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Container fluid>
            <Row>
              <Col
                style={{
                  display: "flex",
                  justifyContent: "center",
                  padding: 0,
                  marginRight: 0,
                  marginLeft: 0,
                }}
              >
                <Card
                  sx={{
                    maxWidth: "100%",
                  }}
                >
                  <CardHeader style={{ backgroundColor: "Black" }}></CardHeader>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="300"
                      image={require("./Sample.jpg")}
                      //image="/Sample.jpg"
                    />
                    <CardContent style={{ backgroundColor: "black" }}>
                      <Typography variant="h6" component="div" color="white">
                        P1
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Col>
            </Row>
          </Container>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Container fluid>
            <Row>
              <Col
                style={{
                  display: "flex",
                  justifyContent: "center",
                  padding: 0,
                  marginRight: 0,
                  marginLeft: 0,
                }}
              >
                <Card
                  sx={{
                    maxWidth: "100%",
                  }}
                >
                  <CardHeader style={{ backgroundColor: "Black" }}></CardHeader>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="300"
                      image={require("./Sample.jpg")}
                      //image="/Sample.jpg"
                    />
                    <CardContent style={{ backgroundColor: "black" }}>
                      <Typography variant="h6" component="div" color="white">
                        P2
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Col>
            </Row>
          </Container>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Container fluid>
            <Row>
              <Col
                style={{
                  display: "flex",
                  justifyContent: "center",
                  padding: 0,
                  marginRight: 0,
                  marginLeft: 0,
                }}
              >
                <Card
                  sx={{
                    maxWidth: "100%",
                  }}
                >
                  <CardHeader style={{ backgroundColor: "Black" }}></CardHeader>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="300"
                      image={require("./Sample.jpg")}
                      //image="/Sample.jpg"
                    />
                    <CardContent style={{ backgroundColor: "black" }}>
                      <Typography variant="h6" component="div" color="white">
                        P3
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Col>
            </Row>
          </Container>
        </TabPanel>
      </Box>
      {/* <Container fluid>
        <Col>
          <h3>Project</h3>
        </Col>
        <Row>
          <Col
            style={{
              display: "flex",
              justifyContent: "center",
              padding: 0,
            }}
          >
            <Card
              sx={{
                maxWidth: "100%",
              }}
            >
              <CardHeader style={{ backgroundColor: "Black" }}></CardHeader>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="300"
                  image={require("./Sample.jpg")}
                  //image="/Sample.jpg"
                />
                <CardContent style={{ backgroundColor: "black" }}>
                  <Typography variant="h6" component="div" color="white">
                    Lizard
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Col>
        </Row>
      </Container> */}
    </SidebarLayout>
  );
}

export default Project;
