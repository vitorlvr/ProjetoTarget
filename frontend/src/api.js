const API_URL = 'http://127.0.0.1:5000/';

export async function getTarefas() {
  const response = await fetch(`${API_URL}/tarefas`);
  return response.json();
}

export async function createTarefa(tarefa) {
  const response = await fetch(`${API_URL}/tarefa`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(tarefa)
  });
  return response.json();
}

export async function updateTarefa(id, tarefa) {
  const response = await fetch(`${API_URL}/tarefa/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(tarefa)
  });
  return response.json();
}

export async function deleteTarefa(id) {
  await fetch(`${API_URL}/tarefa/${id}`, {
    method: 'DELETE'
  });
}

export async function registerUsuario(usuario) {
  const response = await fetch(`${API_URL}/usuarios`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(usuario)
  });
  return response.json();
}

export async function loginUsuario(credentials) {
  const response = await fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  });
  return response.json();
}
