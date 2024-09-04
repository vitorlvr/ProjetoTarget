import React, { useState, useEffect } from 'react';
import { createTarefa, updateTarefa } from '../api';
import './Form.css';

function Form({ editingTarefa, onSave }) {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [status, setStatus] = useState('pendente');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    if (editingTarefa) {
      setTitulo(editingTarefa.titulo);
      setDescricao(editingTarefa.descricao);
      setStatus(editingTarefa.status);
    }
  }, [editingTarefa]);

  async function handleSubmit(event) {
    event.preventDefault();
    setError('');
    setSuccess('');
    const tarefa = { titulo, descricao, status };

    try {
      if (editingTarefa) {
        await updateTarefa(editingTarefa.id, tarefa);
        setSuccess('Tarefa atualizada com sucesso!');
      } else {
        await createTarefa(tarefa);
        setSuccess('Tarefa criada com sucesso!');
      }
      onSave(); // Atualiza a lista de tarefas após salvar ou atualizar
      setTitulo('');
      setDescricao('');
      setStatus('pendente');
    } catch (err) {
      setError('Erro ao salvar a tarefa.');
    }
  }

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            placeholder="Título"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <textarea
            placeholder="Descrição"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />
        </div>
        <div className="input-group">
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="pendente">Pendente</option>
            <option value="concluida">Concluída</option>
          </select>
        </div>
        <button type="submit">{editingTarefa ? 'Atualizar' : 'Criar'}</button>
        {error && <div className="error-message">{error}</div>}
        {success && <div className="success-message">{success}</div>}
      </form>
    </div>
  );
}

export default Form;
