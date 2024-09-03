import React, { useState } from 'react';
import Form from './components/Form';
import List from './components/List';

function App() {
  const [editingTarefa, setEditingTarefa] = useState(null);

  function handleEdit(tarefa) {
    setEditingTarefa(tarefa);
  }

  function handleSave() {
    setEditingTarefa(null);
  }

  return (
    <div>
      <h1>Gerenciamento de Tarefas</h1>
      <Form editingTarefa={editingTarefa} onSave={handleSave} />
      <List onEdit={handleEdit} />
    </div>
  );
}

export default App;
