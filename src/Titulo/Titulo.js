import React from 'react';
import './Titulo.css';

const Titulo = ({ h1, h2, h3, p, span, children }) => {
  if (h1) return <h1 className={'tituloh1'}>{children}</h1>;
  if (h2) return <h2 className={'tituloh2'}>{children}</h2>;
  if (h3) return <h3 className={'tituloh3'}>{children}</h3>;
  if (p) return <p className={'subtitulo'}>{children}</p>;
  if (span) return <span className={'copy'}>{children}</span>;

  return null;
};

export default Titulo;
