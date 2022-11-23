import React from "react";
import SidebarLayout from "../comps/SidebarLayout";
import { motion } from "framer-motion";
import { Box, Grid, TextField } from "@mui/material";
import { border, borderColor } from "@mui/system";

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
          <Box
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
          </Box>
        </Grid>
      </Box>
    </SidebarLayout>
  );
}

export default Contact;
