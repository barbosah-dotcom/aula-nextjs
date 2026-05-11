'use client'

import { useState } from 'react';
import styles from './page.module.css';

export default function Atividade04() {
  const [produto, setProduto] = useState('');
  const [lista, setLista] = useState([]);
  const [editandoId, setEditandoId] = useState(null);

  function adicionar(e) {
    e.preventDefault();

    if (produto === '') return;

    const novo = {
      id: Date.now(),
      produto: produto,
    };

    setLista([...lista, novo]);

    setProduto('');
  }

  function excluir(id) {
    const novaLista = lista.filter(item => item.id !== id);
    setLista(novaLista);
  }

  function editar(id){
    const item = lista.find(item => item.id === id);
    setProduto(item.produto);
    setEditandoId(id);
  }

  function adicionar(e) {
  e.preventDefault();

  if (produto === '') return;

  if (editandoId) {
    const novaLista = lista.map(item =>
      item.id === editandoId
        ? { ...item, produto }
        : item
    );

    setLista(novaLista);
    setEditandoId(null);
  } else {
    const novo = {
      id: Date.now(),
      produto: produto,
    };

    setLista([...lista, novo]);
  }

  setProduto('');
}

  return (
    <div className={styles.container}>
      <h1>Atividade - 5 Lista Editável</h1>

      <form onSubmit={adicionar} className={styles.form}>

        <input
          className={styles.input}
          type="text"
          placeholder="Produto"
          value={produto}
          onChange={(e) => setProduto(e.target.value)}
        />

        <button className={styles.botao} type="submit">
          Adicionar
        </button>
      </form>

      <ul className={styles.lista}>
        {lista.map((item) => (
          <li key={item.id} className={styles.linha}>{item.produto}

            <button type="button" className={styles.botaoExcluir} onClick={() => excluir(item.id)}>
            🗑️
            </button>
            <button type="button" className={styles.botaoEditar} onClick={() => editar(item.id)} >
            ✏️
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
