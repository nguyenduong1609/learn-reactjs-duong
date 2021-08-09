import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Grid,
  makeStyles,
  Paper,
  Typography
} from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from '../../constants';
import { formatPrice } from '../../utils';
import { removeFromCart, setQuantity } from './cartSlice';
import { cartTotalSelector } from './selectors';

const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: 'center',
  },
  left: {
    width: '120px',
    padding: theme.spacing(0.5),
    borderRight: `1px solid ${theme.palette.grey[300]}`,
    '&:hover': {
      cursor: 'pointer',
    },
  },
  name: {
    width: '150px',
    fontSize: theme.typography.h5.fontSize,
    fontWeight: 'bold',
    padding: theme.spacing(1.5),
    '&:hover': {
      color: theme.palette.primary.dark,
      cursor: 'pointer',
    },
  },
  right: {
    width: '220px',
    padding: theme.spacing(1.5),
  },
  originalPrice: {
    marginRight: theme.spacing(2),
    textDecoration: 'line-through',
  },
  quantity: {
    flex: '1 1 0',
  },

  delete: {
    marginRight: theme.spacing(2),
    '&:hover': {
      color: theme.palette.primary.dark,
      cursor: 'pointer',
    },
  },
  buy: {
    alignItems: 'center',
    display: 'flex',
    padding: theme.spacing(1.5),
  },
  totalmoney: {
    alignItems: 'center',
    width: '350px',
  },
  buttonmoney: {
    padding: theme.spacing(1.5),
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

  const handleMinusQuantity = (x, id) => {
    if (x <= 1) return;
    if (x > 1) {
      const quantity = x - 1;
    const action = setQuantity({id, quantity});
      dispatch(action);
    }
  };

  const handleAddQuantity = (x, id) => {
   
    if (x >= 1) {
      const quantity = x + 1;
      const action = setQuantity({id, quantity});
      dispatch(action);
    }
  };

  const history = useHistory();
  const handleCartClick = (id) => {
    history.push(`/products/${id}`);
  };

  return (
    <Container>
      {render.map((x, index) => (
        <Box padding={1} key={index}>
          <Paper elevation={0}>
            <Grid container className={classes.root}>
              <Grid item className={classes.left} onClick={() => handleCartClick(x.id)}>
                <Box padding={1} minHeight={40}>
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

              <Grid item className={classes.name} onClick={() => handleCartClick(x.id)}>
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
              <Grid item className={classes.quantity}>
                <Box component="span" fontSize="16px" fontWeight="bold">
                  {/* Số Lượng: {x.quantity} */}
                  <ButtonGroup size="small" aria-label="small outlined button group">
                    <Button
                      onClick={
                        () => handleMinusQuantity(x.quantity, x.id)
                        // setValue(Number.parseInt(value) ? Number.parseInt(value) - 1 : 1)
                      }
                    >
                      -
                    </Button>
                    <Button>{x.quantity}</Button>
                    <Button
                      onClick={
                        () => handleAddQuantity(x.quantity, x.id)
                        // setValue(name, Number.parseInt(value) ? Number.parseInt(value) + 1 : 1)
                      }
                    >
                      +
                    </Button>
                  </ButtonGroup>
                </Box>
              </Grid>

              <Grid item className={classes.delete}>
                <Delete onClick={() => handleDelete(x.id)} />
              </Grid>
            </Grid>
          </Paper>
        </Box>
      ))}

      <Grid padding={1} className={classes.buy}>
        <Grid className={classes.totalmoney}>
          <Typography variant="h6">Số tiền bạn cần thanh toán: {formatPrice(cartTotal)}</Typography>
        </Grid>

        <Grid className={classes.buttonmoney}>
          <Button
            type="submit"
            // className={classes.submit}
            variant="contained"
            color="primary"
            fullWidth
            style={{ width: '200px' }}
            size="medium"
          >
            Thanh Toán
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default CartFeature;
