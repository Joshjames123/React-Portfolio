import React from "react";
import SidebarLayout from "../comps/SidebarLayout";
import { motion } from "framer-motion";
import { Box, Grid, Button } from "@mui/material";

function Contact() {
  return (
    <SidebarLayout>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          backgroundColor: "black",
          color: "white",
        }}
      >
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <h1>Contact</h1>
          <Box>
            <Grid
              container
              direction="column"
              justifyContent="space-around"
              alignItems="center"
            >
              <h5>
                <input type="text" size="51" placeholder="Your name" />
              </h5>
              <h5>
                <Grid container spacing={2}>
                  <Grid item xs={6} md={7}>
                    <input type="text" size="27" placeholder="Your Email" />
                  </Grid>
                  <Grid item xs={6} md={5}>
                    <input type="text" size="17" placeholder="Contact Number" />
                  </Grid>
                </Grid>
              </h5>
              <h5>
                <input type="text" size="51" placeholder="Subject" />
              </h5>
              <h5>
                <textarea
                  type="text"
                  rows="5"
                  cols="54"
                  placeholder="Your Message"
                />
              </h5>
              <h5>
                <button variant="contained">SEND</button>
              </h5>
            </Grid>
          </Box>
          {/* <Box
            sx={{
              width: 500,
              maxWidth: "100%",
            }}
          >
            <TextField
              fullWidth
              focused
              sx={{
                "& .MuiInputLabel-root": { color: "white" },
                border: "1px solid white",
                borderRadius: 1,
                input: { color: "white" },
              }}
              InputProps={{ disableUnderline: true }}
              label="Full Name"
              variant="standard"
            />
            <Grid container spacing={13}>
              <Grid item xs={6}>
                <TextField
                  focused
                  sx={{
                    input: { color: "white" },
                    "& .MuiInputLabel-root": { color: "white" },
                    border: "1px solid white",
                    borderRadius: 1,
                  }}
                  InputProps={{ disableUnderline: true }}
                  label="Full Name"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  focused
                  sx={{
                    input: { color: "white" },
                    "& .MuiInputLabel-root": { color: "white" },
                    border: "1px solid white",
                    borderRadius: 1,
                  }}
                  InputProps={{ disableUnderline: true }}
                  label="Full Name"
                  variant="standard"
                />
              </Grid>
            </Grid>
            <TextField
              fullWidth
              focused
              sx={{
                "& .MuiInputLabel-root": { color: "white" },
                border: "1px solid white",
                borderRadius: 1,
                input: { color: "white" },
              }}
              InputProps={{ disableUnderline: true }}
              label="Full Name"
              variant="standard"
            />
            <TextField
              fullWidth
              focused
              rows={4}
              sx={{
                "& .MuiInputLabel-root": { color: "white" },
                border: "1px solid white",
                borderRadius: 1,
                input: { color: "white" },
              }}
              InputProps={{ disableUnderline: true }}
              label="Full Name"
              variant="standard"
            />
          </Box> */}
        </Grid>
      </Box>
    </SidebarLayout>
  );
}

export default Contact;
