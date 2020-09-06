import React, { FC } from 'react';
import styled from 'styled-components'
import styles from './Button.styles'

interface Props {
  label: string;
  [x: string]: any;
}


const Button: FC<Props> = (props) => {
  const { label, ...otherProps } = props;


  return (
    <button {...otherProps}>{label}</button>
  )
}


export default styled(Button)`${styles}`

