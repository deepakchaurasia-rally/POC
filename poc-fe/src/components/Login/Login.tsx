import React, { FC } from 'react';
import styled from 'styled-components'
import { useHistory } from "react-router-dom";
import styles from './Login.style'
import Input from '../atoms/Input';
import Button from '../atoms/Button';

interface Props {
  className: string;
}

const Login: FC<Props> = (props): JSX.Element => {
  const history = useHistory();
  const { className } = props

  const redirectTSRP = () => {
    history.push('/hcp-search');
  }

  return (
    <div className={className}>
      <div className="login-wrpr">
        <h2>LOGIN</h2>
        <Input placeholder={'ID'} />
        <Input placeholder={'Email'} />
        <Input placeholder={'Password'} />
        <Button label={'Login'} onClick={redirectTSRP} />
      </div>
    </div>
  )
}

export default styled(Login)`${styles}`

