import React, { useState } from 'react';
import './Login.css'; // Certifique-se de criar este arquivo CSS

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulação de autenticação
    if (email === 'admin@exemplo.com' && senha === '12345') {
      onLogin();
    } else {
      setError('Credenciais inválidas');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Bem-vindo ao sistema Target</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="login-input"
          />
          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
            className="login-input"
          />
          <button type="submit" className="login-button">Entrar</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
