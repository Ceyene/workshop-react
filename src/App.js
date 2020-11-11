import { useState } from "react";
import "./App.css";
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
import Mensajero from "./Mensajero";
import Mensajes from "./Mensajes";

function App() {
  const [mensajeros, setMensajeros] = useState([
    {
      titulo: "izquierda",
      inputValue: "",
      mensajes_enviados: [{ texto: "hola" }, { texto: "que tal" }],
    },
    {
      titulo: "asdawdwad",
      inputValue: "",
      mensajes_enviados: [{ texto: "como estan" }, { texto: "bienvenidos" }],
    },
    {
      titulo: "dasdadwdwazxczxc",
      inputValue: "",
      mensajes_enviados: [{ texto: "buen dia" }, { texto: "como andan" }],
    },
  ]);

  const writeMessage = (i) => {
    return (e) => {
      const copiaDeMensajeros = [...mensajeros];
      copiaDeMensajeros[i].inputValue = e.target.value;
      setMensajeros(copiaDeMensajeros);
    };
  };

  const addMessage = (i) => {
    return (e) => {
      const copiaDeMensajeros = [...mensajeros];

      // Agregar un mensaje
      copiaDeMensajeros[i].mensajes_enviados.push({
        texto: copiaDeMensajeros[i].inputValue,
        leido: false,
      });

      // Limpiar el input
      copiaDeMensajeros[i].inputValue = "";

      setMensajeros(copiaDeMensajeros);
    };
  };

  const removeMessage = (i) => {
    return (index) => {
      return () => {
        const copiaDeMensajeros = [...mensajeros];

        // Quitar un mensaje
        copiaDeMensajeros[i].mensajes_enviados.splice(index, 1);

        setMensajeros(copiaDeMensajeros);
      };
    };
  };

  const readMessage = (i) => {
    return (index) => {
      return () => {
        const copiaDeMensajeros = [...mensajeros];

        // Leer un mensaje
        copiaDeMensajeros[i].mensajes_enviados[index].leido = true;

        setMensajeros(copiaDeMensajeros);
      };
    };
  };

  return (
    <div className="app">
      <Mensajes
        titulo="Mensajes recibidos"
        mensajes_enviados={[
          ...mensajeros[0].mensajes_enviados,
          ...mensajeros[1].mensajes_enviados,
          ...mensajeros[2].mensajes_enviados,
        ]}
      />
      <ul className="app__messengers">
        {mensajeros.map((mensajero, i) => (
          <Mensajero
            titulo={mensajero.titulo}
            inputValue={mensajero.inputValue}
            mensajes_enviados={mensajero.mensajes_enviados}
            writeMessage={writeMessage(i)}
            addMessage={addMessage(i)}
            removeMessage={removeMessage(i)}
            readMessage={readMessage(i)}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
