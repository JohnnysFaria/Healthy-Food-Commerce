import React from 'react';
import { useState, useRef } from 'react';
import Titulo from '../Titulo/Titulo';
import './Register.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { setCookie } from '../setCookie';
import Modal from '../Modal/Modal';

const Register = () => {
  const foco = useRef();
  const [modalVisible, setModalVisible] = useState(false);
  const [endereco, setEndereco] = useState({
    nome: '',
    datadenascimento: '',
    cpf: '',
    cep: '',
    rua: '',
    numero: '',
    bairro: '',
    cidade: '',
  });

  const [enviado, setEnviado] = useState(false);
  const [erro, setErro] = useState({
    nome: '',
    datadenascimento: '',
    cpf: '',
    cep: '',
    rua: '',
    numero: '',
    bairro: '',
    cidade: '',
  });

  const atualizaForm = (item, valor) => {
    setEndereco({
      ...endereco,
      [item]: valor,
    });
  };

  const atualizarEndereco = (end) => {
    setEndereco({
      ...endereco,
      rua: end.logradouro,
      bairro: end.bairro,
      cidade: end.localidade,
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

  function saveStorage(name, value) {
    localStorage[name] = value;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('cadastro', JSON.stringify(endereco));
    setEnviado(true);

    setEndereco({
      nome: '',
      datadenascimento: '',
      cpf: '',
      cep: '',
      rua: '',
      numero: '',
      bairro: '',
      cidade: '',
    });
    setCookie('nome', endereco.nome);
    setCookie('datadenascimento', endereco.datadenascimento);
    setCookie('cpf', endereco.cpf);
    setCookie('cep', endereco.cep);
    setCookie('rua', endereco.rua);
    setCookie('numero', endereco.numero);
    setCookie('bairro', endereco.bairro);
    setCookie('cidade', endereco.cidade);
  };

  return (
    <div>
      <Header />
      <div className="register-container">
        <Titulo h2>Register</Titulo>
        <form
          id={'form'}
          className="Input-container"
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className="linha">
            <label htmlFor="nome">Nome</label>
            <input
              className={'inputform'}
              name="nome"
              onChange={(e) => atualizaForm('nome', e.target.value)}
              onBlur={(e) => saveStorage('nome', e.target.value)}
              required
              autoFocus
            ></input>
            {erro.nome && <p className={'erro'}>{erro.nome}</p>}
          </div>

          <div className="linha">
            <label>Data de nascimento</label>
            <input
              className={'inputform'}
              type={'date'}
              onChange={(e) => atualizaForm('datadenascimento', e.target.value)}
              required
            ></input>
            {erro.datadenascimento && (
              <p className={'erro'}>{erro.datadenascimento}</p>
            )}
          </div>

          <div className="linha">
            <label>CPF</label>
            <input
              className={'inputform'}
              onChange={(e) => atualizaForm('cpf', e.target.value)}
              required
            ></input>
            {erro.cpf && <p className={'erro'}>{erro.cpf}</p>}
          </div>

          <div className="linha">
            <label>Cep</label>
            <input
              className={'inputform'}
              value={endereco.cep}
              onChange={(e) => atualizaForm('cep', e.target.value)}
              onBlur={(e) => buscaCep(e, endereco.cep)}
              required
            ></input>
            {erro.cep && <p className={'erro'}>{erro.cep}</p>}
          </div>

          <div className="linha">
            <label>Rua</label>
            <input
              className={'inputform'}
              value={endereco.rua}
              onChange={(e) => atualizaForm('rua', e.target.value)}
              disabled={!(!endereco.rua && endereco.cidade)}
              required
            ></input>
            {erro.rua && <p className={'erro'}>{erro.rua}</p>}
          </div>

          <div className="linha">
            <label>Bairro</label>
            <input
              className={'inputform'}
              value={endereco.bairro}
              onChange={(e) => atualizaForm('bairro', e.target.value)}
              disabled
              required
            ></input>
            {erro.bairro && <p className={'erro'}>{erro.bairro}</p>}
          </div>

          <div className="linha">
            <label>Cidade</label>
            <input
              className={'inputform'}
              value={endereco.cidade}
              disabled
              required
            ></input>
            {erro.cidade && <p className={'erro'}>{erro.cidade}</p>}
          </div>

          <div className="linha">
            <label>Numero</label>
            <input
              className={'inputform'}
              value={endereco.numero}
              ref={foco}
              onChange={(e) => atualizaForm('numero', e.target.value)}
              required
            ></input>
            {erro.numero && <p className={'erro'}>{erro.numero}</p>}
          </div>
          <button
            onClick={() => setModalVisible(true)}
            type="submit"
            className={'btn-enviar'}
          >
            Enviar
          </button>
        </form>
        {enviado && modalVisible ? (
          <Modal onClose={() => setModalVisible(false)} />
        ) : null}
      </div>
      <Footer />
    </div>
  );
};

export default Register;
