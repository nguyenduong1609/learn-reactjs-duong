import { Box, Container, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from '../../constants';
import { formatPrice } from '../../utils';
import { cartTotalSelector } from './selectors';

const useStyles = makeStyles((theme) => ({
  root: {},
  left: {
    width: '150px',
    height: '150px',
    padding: theme.spacing(1.5),
    borderRight: `1px solid ${theme.palette.grey[300]}`,
  },
  right: {
    flex: '1 1 0',
    padding: theme.spacing(1.5),
  },
}));

function CartFeature(props) {
  const classes = useStyles();
  const cartTotal = useSelector(cartTotalSelector);
  const render = useSelector((state) => state.cart.cartItems);

  // const render = (state) => state.cart.cartItems;
  console.log('render: ', render);

  return (
    <Container>
      {render.map((x, index) => (
        <Box padding={1} key={index}>
          <Paper elevation={0}>
            <Grid container>
              <Grid item className={classes.left}>
                <Box padding={1} minHeight={100}>
                  <img
                    src={
                      x.product.thumbnail
                        ? `${STATIC_HOST}${x.product.thumbnail?.url}`
                        : THUMBNAIL_PLACEHOLDER
                    }
                    alt={x.product.category.name}
                    width="100%"
                  />
                </Box>
              </Grid>

              <Grid item className={classes.right}>
                <Typography variant="body2"> {x.product.category.name}</Typography>
                <Typography variant="body2">
                  <Box component="span" fontSize="16px" fontWeight="bold" mr={1}>
                    {formatPrice(x.product.salePrice)}
                  </Box>
                  {x.product.promotionPercent > 0 ? ` -${x.product.promotionPercent}%` : ''}
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      ))}
      <h4>Số tiền bạn cần thanh toán: {formatPrice(cartTotal)}</h4>
    </Container>
  );
}

export default CartFeature;
