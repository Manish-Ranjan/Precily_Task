import React from 'react'
import SignInSide from "./SignInSide";
import Album from "./Album";
import SideBar from "./SideBar";
import { Grid, Paper, Card } from '@material-ui/core';

const index = () => {

    return (
        <>
            <Grid container component="main" spacing={2}>
                <Grid item xs={3} >
                    <Card>
                        <SideBar />
                        <SideBar />
                        <SideBar />
                        <SideBar />
                        <SideBar />
                    </Card>
                </Grid>
                <Grid item xs={9} >
                    <Paper>
                        <Album />
                    </Paper>
                </Grid>
                <Grid item xs={12} >
                    <Paper>
                        <SignInSide />
                    </Paper>
                </Grid>

            </Grid>

        </>
    )
}

export default index;
