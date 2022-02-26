import * as React from 'react';
import Debug from '../Debug';
import {
  ALIGN,
  HeaderNavigation,
  StyledNavigationItem,
  StyledNavigationList
  } from 'baseui/header-navigation';
import { Button } from 'baseui/button';
import { FC } from 'react';
import { FieldConfig, useField } from 'formik';
import { FormControl } from 'baseui/form-control';
import { Input } from 'baseui/input';
import { StyledLink } from 'baseui/link';

type IProps = {
  label: string;
  caption?: string;
} & Pick<React.ComponentProps<'input'>, 'name' | 'type' | 'placeholder' | 'id' | 'type'>;

export const FormInput: FC<IProps> = ({ label, caption, ...props }) => {
  const [field, meta] = useField(props.name as string);

  return (
    <>
      <FormControl error={meta.error} /* positive="Positive caption" */ label={() => label} caption={caption}>
        <Input
          {...field}
          {...props}
          id={props.id}
          error={meta.touched && Boolean(meta.error)}
          /*       onChange={() => field.onChange}
          onBlur={() => field.onBlur} */
        />
      </FormControl>
      {/* <Debug field={field} meta={meta} /> */}
    </>
  );
};
