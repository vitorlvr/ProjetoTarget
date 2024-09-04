import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Form from './components/Form';
import List from './components/List';
import Login from './components/Login';
import './App.css';

function App() {
  const [editingTarefa, setEditingTarefa] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [reloadKey, setReloadKey] = useState(0); // Chave para forçar atualização

  function handleEdit(tarefa) {
    setEditingTarefa(tarefa);
  }

  function handleSave() {
    setEditingTarefa(null);
    // Atualiza a lista de tarefas ao salvar
    setReloadKey(prevKey => prevKey + 1);
  }

  function handleLogin() {
    setIsAuthenticated(true);
  }

  function handleLogout() {
    setIsAuthenticated(false);
  }

  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route
            path="/"
            element={
              isAuthenticated ? (
                <Navigate to="/tarefas" />
              ) : (
                <Login onLogin={handleLogin} />
              )
            }
          />
          <Route
            path="/tarefas"
            element={
              isAuthenticated ? (
                <div className="tarefas-container">
                  <Form editingTarefa={editingTarefa} onSave={handleSave} />
                  <List key={reloadKey} onEdit={handleEdit} />
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
