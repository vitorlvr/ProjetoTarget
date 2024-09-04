import React, { useState, useEffect } from 'react';
import { getTarefas, deleteTarefa } from '../api';
import './List.css';

function List({ onEdit }) {
  const [tarefas, setTarefas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    loadTarefas();
  }, []); // Dependência vazia para carregar apenas na montagem

  async function loadTarefas() {
    try {
      const data = await getTarefas();
      setTarefas(data);
    } catch (err) {
      setError('Erro ao carregar as tarefas.');
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete(id) {
    if (window.confirm('Tem certeza de que deseja excluir esta tarefa?')) {
      try {
        await deleteTarefa(id);
        loadTarefas(); // Atualiza a lista de tarefas após deletar
      } catch (err) {
        setError('Erro ao excluir a tarefa.');
      }
    }
  }

  if (loading) {
    return <p>Carregando tarefas...</p>;
  }

  return (
    <div className="list-container">
      <h2>Tarefas</h2>
      {error && <p className="error-message">{error}</p>}
      {tarefas.length === 0 ? (
        <p>Nenhuma tarefa encontrada.</p>
      ) : (
        <ul>
          {tarefas.map((tarefa) => (
            <li key={tarefa.id} className="tarefa-item">
              <div className="tarefa-details">
                <strong>{tarefa.titulo}</strong>: {tarefa.descricao} [{tarefa.status}]
              </div>
              <div className="tarefa-actions">
                <button className="edit-button" onClick={() => onEdit(tarefa)}>Editar</button>
                <button className="delete-button" onClick={() => handleDelete(tarefa.id)}>Deletar</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default List;
