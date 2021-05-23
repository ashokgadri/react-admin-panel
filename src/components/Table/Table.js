import {
  makeStyles,
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import React, { useEffect } from "react";
import { Page } from "../Page";
import { Table as MuiTable } from "@material-ui/core";
import { connect } from "react-redux";
import { userActions } from "../../actions";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
  },
  tableContainer: {
    marginTop: theme.spacing(3),
  },
  table: {
    minWidth: "700px",
  },
}));

function Table(props) {
  const { users } = props;
  const classes = useStyles();

  useEffect(() => {
    users();
  }, [users]);

  return (
    <Page title="Table" className={classes.root}>
      <Typography variant="h2">Table with pagination and sorting</Typography>
      <TableContainer component={Paper} className={classes.tableContainer}>
        <div className={classes.table}>
          <MuiTable>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>1</TableCell>
                <TableCell>Ashok Gadri</TableCell>
              </TableRow>
            </TableBody>
          </MuiTable>
        </div>
      </TableContainer>
    </Page>
  );
}

const mapDispatchToProps = {
  users: userActions.users,
};

const mapStateToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(Table);
