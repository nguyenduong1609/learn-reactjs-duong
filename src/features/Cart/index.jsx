import { Box, Container, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from '../../constants';
import { formatPrice } from '../../utils';
import { removeFromCart } from './cartSlice';
import { cartTotalSelector } from './selectors';

const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: 'center',
  },
  left: {
    width: '150px',
    height: '150px',
    padding: theme.spacing(1.5),
    borderRight: `1px solid ${theme.palette.grey[300]}`,
  },
  name: {
    width: '150px',
    fontSize: theme.typography.h5.fontSize,
    fontWeight: 'bold',
    padding: theme.spacing(1.5),
  },
  right: {
    flex: '1 1 0',
    padding: theme.spacing(1.5),
  },
  originalPrice: {
    marginRight: theme.spacing(2),
    textDecoration: 'line-through',
  },
}));

function CartFeature(props) {
  const classes = useStyles();
  const cartTotal = useSelector(cartTotalSelector);
  const render = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  // const render = (state) => state.cart.cartItems;
  console.log('render: ', render);

  const handleDelete = (id) => {
    const action = removeFromCart(id);
    console.log('id: ', id);
    dispatch(action);
  };

  return (
    <Container>
      {render.map((x, index) => (
        <Box padding={1} key={index}>
          <Paper elevation={0}>
            <Grid container className={classes.root}>
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

              <Grid item className={classes.name}>
                <Typography variant="h6"> {x.product.category.name}</Typography>
              </Grid>

              <Grid item className={classes.right}>
                <Typography variant="body2">
                  <Box component="span" fontSize="16px" fontWeight="bold" mr={1}>
                    {formatPrice(x.product.salePrice)}
                  </Box>

                  {x.product.promotionPercent > 0 && (
                    <>
                      <Box component="span" className={classes.originalPrice}>
                        {formatPrice(x.product.originalPrice)}
                      </Box>

                      <Box component="span">{`-${x.product.promotionPercent}%`}</Box>
                    </>
                  )}
                </Typography>
              </Grid>
              <Grid item className={classes.name}>
                <Typography variant="h6">Số Lượng: {x.quantity}</Typography>
              </Grid>

              <Grid item className={classes.name}>
                <Delete onClick={() => handleDelete(x.id)} />
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
