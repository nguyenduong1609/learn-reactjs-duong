import { Box, FormHelperText, makeStyles, Typography } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { AddCircleOutline, RemoveCircleOutline } from '@material-ui/icons';
import PropTypes from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';

QuantityField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
};

const useStyles = makeStyles((theme) => ({
  box: {
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    maxWidth: '200px',
  },
}));

function QuantityField(props) {
  const classes = useStyles();
  const { form, name, label, disabled } = props;
  const { control, setValue } = form;

  return (
    <div>
      <Controller
        name={name}
        control={control}
        render={({
          field: { onChange, onBlur, value, name },
          fieldState: { invalid, error, isTouched },
        }) => (
          <FormControl
            error={isTouched && invalid}
            fullWidth
            margin="normal"
            variant="outlined"
            size="small"
          >
            <Typography>{label}</Typography>
            <Box className={classes.box}>
              <IconButton
                onClick={() =>
                  setValue(name, Number.parseInt(value) ? Number.parseInt(value) - 1 : 1)
                }
              >
                <RemoveCircleOutline />
              </IconButton>
              <OutlinedInput
                id={name}
                type="number"
                value={value}
                onBlur={onBlur}
                onChange={onChange}
                disabled={disabled}
              />
              
              <IconButton
                onClick={() =>
                  setValue(name, Number.parseInt(value) ? Number.parseInt(value) + 1 : 1)
                }
              >
                <AddCircleOutline />
              </IconButton>
            </Box>
            <FormHelperText error={invalid}>{error?.message}</FormHelperText>
          </FormControl>
        )}
      />
    </div>
  );
}

export default QuantityField;
