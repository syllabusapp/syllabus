import {Field, FieldProps} from 'formik';
import React from 'react';
import {InputFeedback} from './InputFeedback';

export interface SelectInputProps {
  children?: React.ReactNode;
  label: string;
  name: string;
}
// @TODO create test
export const SelectInput: React.SFC<SelectInputProps> = ({
  children,
  label,
  name,
  ...props
}) => (
  <Field name={name} type='select'>
    {({field}: FieldProps) => (
      <>
        <label htmlFor={name}>
          <span>{label}</span>
        </label>
        <select
          id={name}
          name={name}
          aria-describedby={name + 'help'}
          {...field}
          {...props}
        >
          <option value='' />
          {children}
        </select>
        <InputFeedback data-testid='error' name={name} />
      </>
    )}
  </Field>
);
