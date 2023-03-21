import React, { PropsWithChildren } from 'react';
import style from './Botao.module.scss';

type Props = {
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: () => void;
};

export default function Botao(props: PropsWithChildren<Props>) {
  const { onClick, type } = props;

  return (
    <button type={type} className={style.botao} onClick={onClick}>
      {props.children}
    </button>
  );
}
