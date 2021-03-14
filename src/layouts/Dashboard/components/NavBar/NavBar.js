import {
  Drawer,
  Hidden,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Paper,
} from "@material-ui/core";
import { Home } from "@material-ui/icons";
import clsx from "clsx";
import React from "react";
import { Fragment } from "react";
import AppsIcon from "@material-ui/icons/Apps";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    overflowY: "auto",
  },
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
}));

function NavBar(props) {
  const { openMenu, closeMenu, className, ...rest } = props;
  const classes = useStyles();
  return (
    <Fragment>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          variant="temporary"
          onClose={closeMenu}
          open={openMenu}
        >
          <div {...rest} className={clsx(classes.root, className)}></div>
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Paper
          {...rest}
          className={clsx(classes.root, className)}
          elevation={1}
          square
        >
          <List>
            <ListItem>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText>Home</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <AppsIcon />
              </ListItemIcon>
              <ListItemText>Data Table</ListItemText>
            </ListItem>{" "}
          </List>
        </Paper>
      </Hidden>
    </Fragment>
  );
}

export default NavBar;
