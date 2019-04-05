import {Field, FieldProps} from 'formik';
import React from 'react';
import {InputFeedback} from './InputFeedback';

export interface TextInputProps {
  children?: React.ReactNode;
  disabled?: boolean;
  label: string;
  name: string;
  placeholder?: string;
  type?: string;
}
// @TODO create test
export const TextInput: React.SFC<TextInputProps> = ({
  children,
  label,
  name,
  placeholder,
  type = 'text',
  ...props
}) => (
  <Field name={name}>
    {({field, form: {errors, touched}}: FieldProps) => (
      <>
        <label htmlFor={name}>
          <span className='pull-left'>{label}</span>
          {children}
        </label>
        <input
          type={type}
          id={name}
          name={name}
          className='form-control'
          placeholder={placeholder}
          aria-describedby={name + 'help'}
          {...field}
          {...props}
        />
        <InputFeedback data-testid='error' name={name} />
      </>
    )}
  </Field>
);
