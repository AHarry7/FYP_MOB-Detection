import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import MobIcon from "../assets/lifebuoy.png";

function ResponsiveAppBar() {
  return (
    <AppBar position="static" sx={{ marginBottom: 3 }}>
      <Container maxWidth="xl">
        <Toolbar className="flex flex-row place-content-between" disableGutters>
          <div className="flex flex-row space-x-5♠ p-2">
            <img src={MobIcon} alt="Logo" style={{ height: 30 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "block", md: "flex" },
                fontFamily: "calibri",
                fontWeight: 700,
                letterSpacing: ".0rem",
                color: "inherit",
                marginLeft: 3,
                textDecoration: "none",
              }}
            >
              Man Overboard Detection System
            </Typography>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
