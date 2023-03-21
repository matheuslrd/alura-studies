import React, { useState } from 'react';
import { ITarefa } from '../../types/tarefa';
import Botao from '../Botao';
import style from './Formulario.module.scss';
import { v4 as uuidv4 } from 'uuid';

type Props = {
  setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>;
};

export default function Formulario2(props: Props) {
  const [tarefa, setTarefa] = useState({
    tarefa: '',
    tempo: '00:00',
  });

  function adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    props.setTarefas((tarefasAntigas) => [
      ...tarefasAntigas,
      {
        ...tarefa,
        selecionado: false,
        completado: false,
        id: uuidv4(),
      },
    ]);
    setTarefa({
      tarefa: '',
      tempo: '00:00',
    });
  }

  return (
    <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
      <div className={style.inputContainer}>
        <label htmlFor="tarefa">Adicione um novo estudo</label>
        <input
          type="text"
          name="tarefa"
          id="tarefa"
          value={tarefa.tarefa}
          onChange={(evento) => setTarefa({ ...tarefa, tarefa: evento.target.value })}
          placeholder="O que você quer estudar"
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="tempo">Tempo</label>
        <input
          type="time"
          step="1"
          name="tempo"
          value={tarefa.tempo}
          onChange={(evento) => setTarefa({ ...tarefa, tempo: evento.target.value })}
          id="tempo"
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>
      <Botao type="submit">Adicionar</Botao>
    </form>
  );
}
