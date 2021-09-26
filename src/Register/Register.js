import React from 'react';
import { useState, useRef } from 'react';
import Botao from '../Botao/Botao';
import Titulo from '../Titulo/Titulo';
import { NavLink } from 'react-router-dom';
import './Register.css';
import Header from '../Home/Header';

const Register = () => {
  const foco = useRef();

  const [endereco, setEndereco] = useState({
    cep: '',
    rua: '',
    numero: '',
    bairro: '',
    cidade: '',
  });

  const [erro, setErro] = useState(false);

  const atualizaForm = (item, valor) => {
    setEndereco({
      ...endereco,
      [item]: valor,
    });
  };

  const atualizarEndereco = (veioDaApi) => {
    setEndereco({
      ...endereco,
      rua: veioDaApi.logradouro,
      bairro: veioDaApi.bairro,
      cidade: veioDaApi.localidade,
    });
  };

  const buscaCep = async (e, cepDigitado) => {
    e.preventDefault();
    if (cepDigitado) {
      const response = await fetch(
        `https://viacep.com.br/ws/${cepDigitado}/json/`,
      );
      const json = await response.json();
      atualizarEndereco(json);
      foco.current.focus();
    } else {
      setErro(true);
    }
  };

  return (
    <div>
      <div className="container">
        <Header />

        <Titulo h2>Register</Titulo>
        <form className="Input-container">
          <div className="linha">
            <label>Nome</label>
            <input className={'inputform'} autoFocus></input>
          </div>

          <div className="linha">
            <label>Data de nascimento</label>
            <input className={'inputform'}></input>
          </div>

          <div className="linha">
            <label>CPF</label>
            <input className={'inputform'}></input>
          </div>

          <div className="linha">
            <label>Cep</label>
            <input
              className={'inputform'}
              value={endereco.cep}
              onChange={(e) => atualizaForm('cep', e.target.value)}
              onBlur={(e) => buscaCep(e, endereco.cep)}
            ></input>
          </div>

          <div className="linha">
            <label>Rua</label>
            <input
              className={'inputform'}
              value={endereco.rua}
              onChange={(e) => atualizaForm('rua', e.target.value)}
              disabled={!(!endereco.rua && endereco.cidade)}
            ></input>
          </div>

          <div className="linha">
            <label>Bairro</label>
            <input
              className={'inputform'}
              value={endereco.bairro}
              onChange={(e) => atualizaForm('bairro', e.target.value)}
              disabled
            ></input>
          </div>

          <div className="linha">
            <label>Cidade</label>
            <input
              className={'inputform'}
              value={endereco.cidade}
              disabled
            ></input>
          </div>

          <div className="linha">
            <label>Numero</label>
            <input
              className={'inputform'}
              value={endereco.numero}
              ref={foco}
              onChange={(e) => atualizaForm('numero', e.target.value)}
            ></input>
          </div>
        </form>
        <Botao label={'CONFIRM'} />
      </div>
    </div>
  );
};

export default Register;
