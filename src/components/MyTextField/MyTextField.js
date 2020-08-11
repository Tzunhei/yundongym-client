import React from 'react';
import { useField } from 'formik';
import { TextField } from '@material-ui/core';

const MyTextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <TextField
        label={label}
        {...field}
        {...props}
        error={meta.touched && meta.error}
        helperText={meta.touched && meta.error}
      />
    </>
  );
};

export default MyTextField;
