import React, { useState, useEffect } from 'react';
import { getTarefas, deleteTarefa } from '../api';

function List({ onEdit }) {
  const [tarefas, setTarefas] = useState([]);

  useEffect(() => {
    loadTarefas();
  }, []);

  async function loadTarefas() {
    const data = await getTarefas();
    setTarefas(data);
  }

  async function handleDelete(id) {
    await deleteTarefa(id);
    loadTarefas(); // Atualiza a lista de tarefas após deletar
  }

  return (
    <div>
      <h2>Tarefas</h2>
      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa.id}>
            <strong>{tarefa.titulo}</strong>: {tarefa.descricao} [{tarefa.status}]
            <button onClick={() => onEdit(tarefa)}>Editar</button>
            <button onClick={() => handleDelete(tarefa.id)}>Deletar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;