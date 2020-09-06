import React, { FC } from 'react';
import styled from 'styled-components'
import styles from './Input.styles'

interface Props {
  placeholder: string;
  [x: string]: any;
}

const Input: FC<Props> = (props) => {
  const { placeholder, ...otherProps } = props;

  return (
    <input placeholder={placeholder} {...otherProps} />
  )
}

export default styled(Input)`${styles}`

