import { Box, Container, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import productApi from '../../../api/productApi';
import ProductSkeletonList from '../components/ProductSkeletonList';

const useStyles = makeStyles((theme) => ({
  root: {},
  left: {
    width: '250px',
  },
  right: {
    flex: '1 1 auto',
  },
}));

function ListPage(props) {
  const classes = useStyles();
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await productApi.getAll({ _page: 1, _limit: 10 });
        setProductList(data);
      } catch (error) {
        console.log('Falled to fetch product list: ', error);
      }

      setLoading(false);
    })();
  }, []);

  console.log('product list', productList);

  return (
    <Box>
      <Container>
        <Grid container spacing={1}>
          <Grid item className={classes.left}>
            <Paper elevation={0}>Left column</Paper>
          </Grid>
          <Grid item className={classes.right}>
            <Paper elevation={0}>
              {loading ? (
                <ProductSkeletonList />
              ) : (
                <Typography> product list cheohocheohv </Typography>
              )}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ListPage;
