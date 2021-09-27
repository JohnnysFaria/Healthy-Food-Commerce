import React from 'react';
import { useState, useRef } from 'react';
import Titulo from '../Titulo/Titulo';
import './Register.css';
import Header from '../Home/Header';
import Footer from '../Footer/Footer';

const Register = () => {
  const foco = useRef();

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
  };

  return (
    <div>
      <Header />
      <div className="register-container">
        <Titulo h2>Register</Titulo>
        <form className="Input-container" onSubmit={(e) => handleSubmit(e)}>
          <div className="linha">
            <label>Nome</label>
            <input
              className={'inputform'}
              onChange={(e) => atualizaForm('nome', e.target.value)}
              autoFocus
            ></input>
            {erro.nome && <p className={'erro'}>{erro.nome}</p>}
          </div>

          <div className="linha">
            <label>Data de nascimento</label>
            <input
              className={'inputform'}
              onChange={(e) => atualizaForm('datadenascimento', e.target.value)}
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
            ></input>
            {erro.bairro && <p className={'erro'}>{erro.bairro}</p>}
          </div>

          <div className="linha">
            <label>Cidade</label>
            <input
              className={'inputform'}
              value={endereco.cidade}
              disabled
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
            ></input>
            {erro.numero && <p className={'erro'}>{erro.numero}</p>}
          </div>
          <button type="submit" className={'btn-enviar'}>
            Enviar
          </button>
        </form>
        {enviado && <p>Cadastro enviado</p>}
      </div>
      <Footer />
    </div>
  );
};

export default Register;
