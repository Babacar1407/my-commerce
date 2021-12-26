import React, { Children } from 'react'
import Head from 'next/head'
import NextLink from 'Next/link'
import { AppBar, Container, Toolbar, Typography,Link } from '@material-ui/core'
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
                <NextLink href="/" passHref>
                    <Link>
                    <Typography className={classes.brand}>
                        My Commerce
                    </Typography>
                    </Link>
                    </NextLink>
                    <div className={classes.grow}></div>
                    <div>
                        <NextLink href="/cart" passHref>
                            <Link className={classes.brand}>cart</Link>
                        </NextLink>
                        
                        <NextLink href="/login" passHref>
                            <Link className={classes.brand}>login</Link>
                        </NextLink>
                    </div>
                </Toolbar>
            </AppBar>
            <Container className= {classes.main}>
                {children}
            </Container>
            <footer className={classes.footer}>
                <Typography>All right reserved</Typography>
            </footer>
        </div>
    )
}