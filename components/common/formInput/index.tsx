import {
  FieldError,
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister
} from 'react-hook-form';

export type InputProps = {
  name: Path<FieldValues>;
  rules?: RegisterOptions;
  errors?: FieldError;
  register?: UseFormRegister<FieldValues>;
} & React.InputHTMLAttributes<HTMLInputElement>;

import React from 'react';
import { FormInputContainer } from './style';

const FormInput = ({
  name,
  rules,
  errors,
  register,
  ...inputProps
}: InputProps) => {
  return (
    <>
      <FormInputContainer
        name={name}
        errors={errors}
        {...(register && register(name, rules))}
        {...inputProps}
      />
      {errors && <span color="red">{errors.message}</span>}
    </>
  );
};

export default FormInput;
