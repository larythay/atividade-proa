import React from 'react';

function UserDetails({ nome, idade, profissao }) {
  let variavel 
  if( idade >= 18) {
    variavel = <p>Você pode tirar habilitação.</p>
  }
  else{
    variavel = <p>Você não pode tirar habilitação.</p>
    }
  return (
    <div>
      <h2>Detalhes do Usuário</h2>
      <p>Nome: {nome}</p>
      <p>Idade: {idade}</p>
      <p>Profissão: {profissao}</p>
      {variavel}
    </div>
  );
}

export default UserDetails;