function Mensajes(props) {
  const { titulo, mensajes_enviados } = props;

  return (
    <header className="app__header">
      <h1 className="app__title">{titulo}</h1>
      <ul className="messages">
        {mensajes_enviados &&
          mensajes_enviados.map((mensaje) => (
            <li
              className={`messages__message ${
                mensaje.leido ? "messages__message--readed" : ""
              }`}
            >
              {mensaje.texto}
            </li>
          ))}
      </ul>
    </header>
  );
}

export default Mensajes;
