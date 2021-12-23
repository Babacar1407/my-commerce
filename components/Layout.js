import React, { Children } from 'react'
import Head from 'next/head'
import { AppBar, Container, Toolbar, Typography } from '@material-ui/core'
import useStyle from '../utils/Style'

export default function Layout({children}){
    
    const classes = useStyle()
    
    return(
        <div>
            <Head>
                <title>
                    My Commerce
                </title>
            </Head>
            <AppBar position = "static" className = {classes.navbar}>
                <Toolbar>
                    <Typography>
                        My Commerce
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container className= {classes.main}>
                {children}
            </Container>
            <footer className={classes.footer}>
                <Typography>All right reseerved</Typography>
            </footer>
        </div>
    )
}