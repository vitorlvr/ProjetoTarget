import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Form from './components/Form';
import List from './components/List';
import Login from './components/Login';

function App() {
  const [editingTarefa, setEditingTarefa] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  function handleEdit(tarefa) {
    setEditingTarefa(tarefa);
  }

  function handleSave() {
    setEditingTarefa(null);
  }

  function handleLogin() {
    setIsAuthenticated(true);
  }

  function handleLogout() {
    setIsAuthenticated(false);
  }

  return (
    <Router>
      <div>
        <h1>Gerenciamento de Tarefas</h1>
        <Routes>
          <Route 
            path="/" 
            element={isAuthenticated ? <Navigate to="/tarefas" /> : <Login onLogin={handleLogin} />} 
          />
          <Route 
            path="/tarefas" 
            element={
              isAuthenticated ? (
                <div>
                  <button onClick={handleLogout}>Logout</button>
                  <Form editingTarefa={editingTarefa} onSave={handleSave} />
                  <List onEdit={handleEdit} />
                </div>
              ) : (
                <Navigate to="/" />
              )
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
