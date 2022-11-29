import React from "react";
import SidebarLayout from "../comps/SidebarLayout";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  CardHeader,
  Grid,
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
        <Box sx={{ pl: 1, pb: 4 }}>
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
        <Grid sx={{ m: 2 }}>
          <h3>Project</h3>
        </Grid>
        <Box>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            paddingBottom={1}
          >
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
          </Grid>
        </Box>

        <TabPanel value={value} index={0}>
          <motion.div
            className="box"
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1.2,
              delay: 1,
              ease: [1, 0.71, 0.2, 1.01],
            }}
          >
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Card
                sx={{
                  maxWidth: "100%",
                  padding: 0,
                }}
              >
                <CardHeader style={{ backgroundColor: "Black" }}></CardHeader>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="300"
                    src={require("../pages/pics/p1.gif")}
                    sx={{ objectFit: "fill" }}
                  />
                  <CardContent style={{ backgroundColor: "black" }}>
                    <Typography variant="body1" component="div" color="white">
                      Portfolio
                    </Typography>
                    <Typography variant="body2" component="div" color="white">
                      First Capstone while I'm in bootcamp.
                    </Typography>
                    <Typography variant="caption" color="white">
                      Tools: HTML, CSS, Bootstrap
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </motion.div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <motion.div
            className="box"
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1.2,
              delay: 1,
              ease: [1, 0.71, 0.2, 1.01],
            }}
          >
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Card
                sx={{
                  maxWidth: "100%",
                  padding: 0,
                }}
              >
                <CardHeader style={{ backgroundColor: "Black" }}></CardHeader>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="300"
                    image={require("../pages/pics/p2.gif")}
                    sx={{ objectFit: "fill" }}
                  />
                  <CardContent style={{ backgroundColor: "black" }}>
                    <Typography variant="body1" component="div" color="white">
                      Task for my first Client
                    </Typography>
                    <Typography variant="body2" component="div" color="white">
                      Mentoring employee of my client
                    </Typography>
                    <Typography variant="caption" color="white">
                      Tools: HTML, CSS, Reactjs, Next.js
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </motion.div>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <motion.div
            className="box"
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1.2,
              delay: 1,
              ease: [1, 0.71, 0.2, 1.01],
            }}
          >
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Card
                sx={{
                  maxWidth: "100%",
                  padding: 0,
                }}
              >
                <CardHeader style={{ backgroundColor: "Black" }}></CardHeader>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="300"
                    image={require("../pages/pics/p3.gif")}
                    sx={{ objectFit: "fill" }}
                  />
                  <CardContent style={{ backgroundColor: "black" }}>
                    <Typography variant="body1" component="div" color="white">
                      Ecommerce Web Site
                    </Typography>
                    <Typography variant="body2" component="div" color="white">
                      Last Capstone while I'm in bootcamp.
                    </Typography>
                    <Typography variant="caption" color="white">
                      Tools: HTML, CSS, React-Bootstrap, React.js, Nodejs,
                      Heroku, MongoDB
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </motion.div>
        </TabPanel>
      </Box>
    </SidebarLayout>
  );
}

export default Project;
