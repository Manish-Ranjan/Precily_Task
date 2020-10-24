import React from 'react'
import {CssBaseline,ListItemText,ListItem} from "@material-ui/core";
import {makeStyles,} from '@material-ui/core'
const useStyles =makeStyles((theme) => ({

}))
const SideBar =()=>{
   const classes =useStyles();

  return(
    <>
    <CssBaseline />
    <main className={classes}>
      <div>
      <ListItem button>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button>
      <ListItemText primary="Orders" />
    </ListItem>
    <ListItem button>
      <ListItemText primary="Customers" />
    </ListItem>
    <ListItem button>
      <ListItemText primary="Reports" />
    </ListItem>
    <ListItem button>
      <ListItemText primary="Integrations" />
    </ListItem>
      </div>
    </main>
    </>
  );

}
export default SideBar;