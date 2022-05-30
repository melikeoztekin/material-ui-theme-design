import { Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { Cart } from "../components/Cart";
import { Deposits } from "../components/Deposits";
import { Orders } from "../components/Orders";

const Content = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} lg={9}>
        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            height: 240,
          }}
        >
          <Cart />
        </Paper>
      </Grid>
      <Grid item xs={12} lg={3}>
        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            height: 240,
          }}
        >
          <Deposits />
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            height: 240,
          }}
        >
          <Orders />
        </Paper>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          p: 2,
          backgroundColor: "transparent",
        }}
      >
        <Typography variant="body2" color="text.secondary" align="center">
          Copyright © Your Website
        </Typography>
      </Grid>
    </Grid>
  );
};

export { Content };
