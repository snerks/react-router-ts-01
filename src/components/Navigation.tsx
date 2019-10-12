import React from "react";
import { NavLink } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "30px 30px"
  },
  navLink: {
    padding: "15px"
  }
});

const Navigation = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <NavLink className={classes.navLink} to="/persistentdrawerleft">
        PersistentDrawerLeft
      </NavLink>
      <NavLink className={classes.navLink} to="/clippeddrawer">
        ClippedDrawer
      </NavLink>
      <NavLink className={classes.navLink} to="/myform">
        My Form!!!
      </NavLink>
      <NavLink className={classes.navLink} to="/">
        Home
      </NavLink>
      <NavLink className={classes.navLink} to="/about">
        About
      </NavLink>
      <NavLink className={classes.navLink} to="/contact">
        Contact
      </NavLink>
    </div>
  );
};

export default Navigation;
