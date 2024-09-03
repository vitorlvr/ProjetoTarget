import React, { useState, useEffect } from 'react';
import { createTarefa, updateTarefa } from '../api';

function Form({ editingTarefa, onSave }) {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [status, setStatus] = useState('pendente');

  useEffect(() => {
    if (editingTarefa) {
      setTitulo(editingTarefa.titulo);
      setDescricao(editingTarefa.descricao);
      setStatus(editingTarefa.status);
    }
  }, [editingTarefa]);

  async function handleSubmit(event) {
    event.preventDefault();
    const tarefa = { titulo, descricao, status };

    if (editingTarefa) {
      await updateTarefa(editingTarefa.id, tarefa);
    } else {
      await createTarefa(tarefa);
    }

    onSave(); // Atualiza a lista de tarefas após salvar
    setTitulo('');
    setDescricao('');
    setStatus('pendente');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Título"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        required
      />
      <textarea
        placeholder="Descrição"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
      />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="pendente">Pendente</option>
        <option value="concluida">Concluída</option>
      </select>
      <button type="submit">{editingTarefa ? 'Atualizar' : 'Criar'}</button>
    </form>
  );
}

export default Form;
