import React from 'react'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'
import data from '../../utils/data'
import Layout from '../../components/Layout'
import NextLink from 'next/link'
import { Button, Card, Grid, Link, List, ListItem, Typography } from '@material-ui/core'
import Image from 'next/image'
import useStyles from '../../utils/Style'

export default function ProductScreen() {
    const classes = useStyles()

    const router = useRouter()
    const {slug} = router.query
    const product = data.products.find((a)=>a.slug===slug)

    if(!product){
        return(<div>
            product not found
        </div>)
    }

    return (
        <Layout title={product.name}>
            <div className={classes.section}>
                <NextLink href="/" passHref>
                    <Link>back to products </Link>
                </NextLink>
            </div>
            <Grid container spacing={1}>
                <Grid item md={6} xs={12}>
                    <Image 
                    src = {product.image}
                    alt={product.name}
                    width = {540}
                    height = {540}
                    layout = "responsive">

                    </Image>
                </Grid>
                <Grid item md={3} xs={12}>
                    <List>
                    <ListItem><Typography component = "h1">{product.name}</Typography></ListItem>
                        <ListItem>categorie : <Typography>{product.categorie}</Typography></ListItem>
                        <ListItem>brand : <Typography>{product.brand}</Typography></ListItem>
                        <ListItem>Rating : <Typography>{product.rating} stars ({product.numReviews} reviews)</Typography></ListItem>
                        <ListItem>categorie : 
                            <Typography>{product.description}</Typography>
                        </ListItem>
                    </List>

                </Grid>
                <Grid item md={3} xs={12}>
                    <Card>
                    <List>
                        <ListItem>
                            <Grid container>
                                <Grid item xs={6}><Typography>Price :</Typography></Grid>
                                <Grid item xs={6}><Typography>{product.price}</Typography></Grid>
                            </Grid>
                        </ListItem>
                        <ListItem>
                            <Grid container>
                                <Grid item xs={6}><Typography>Status :</Typography></Grid>
                                <Grid item xs={6}><Typography>{product.countInStock?'InStock':'Unvailaible'}</Typography></Grid>
                            </Grid>
                        </ListItem>
                        <ListItem>
                            <Button fullWidth variant="contained" color="primary">ADD TO CARD</Button>
                        </ListItem>
                    </List>
                    </Card>
                </Grid>
            </Grid>

        </Layout>
    )
}





