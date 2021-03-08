import { makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden'
    }
}));

function Dashboard() {

    return (
        <div className={classes.root}>
            
        </div>
    )
}

export default Dashboard;
