import { useState } from "react";

function Mensajero(props) {
  const {
    titulo,
    inputValue,
    mensajes_enviados,
    writeMessage,
    addMessage,
    removeMessage,
    readMessage,
  } = props;

  return (
    <li className="messenger">
      <h2 className="messenger__name">{titulo}</h2>
      <div className="messenger__inputs">
        <input
          className="messenger__text"
          value={inputValue}
          onChange={writeMessage}
          type="text"
        />
        <input type="submit" onClick={addMessage} className="messenger__send" />
      </div>
      <div className="messenger__messages">
        <h3 className="messenger__title">Mensajes enviados:</h3>
        <ul className="messenger__list">
          {mensajes_enviados &&
            mensajes_enviados.map((mensaje, i) => (
              <li key={"mensaje_" + i} className="messenger__message">
                <p className="messenger__text">{mensaje.texto}</p>
                <i
                  onClick={removeMessage(i)}
                  className="messenger__icon fas fa-bomb"
                ></i>
                <i
                  onClick={readMessage(i)}
                  className="messenger__icon far fa-eye"
                ></i>
              </li>
            ))}
        </ul>
      </div>
    </li>
  );
}

export default Mensajero;
