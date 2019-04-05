import {ErrorMessage} from 'formik';
import React from 'react';

export interface InputFeedbackProps {
  name: string;
}
// @TODO create test
export const InputFeedback: React.SFC<InputFeedbackProps> = ({name}) => (
  <ErrorMessage name={name} />
);
