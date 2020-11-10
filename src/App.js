import "./App.css";
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";

function App() {
  return (
    <div className="app">
      <header className="app__header">
        <h1 className="app__title">Mensajes recibidos</h1>
        <ul className="messages">
          <li className="messages__message messages__message--readed">hola</li>
          <li className="messages__message messages__message--readed">
            que tal
          </li>
          <li className="messages__message">como estan</li>
          <li className="messages__message messages__message--readed">
            bienvenidos
          </li>
          <li className="messages__message">buen dia</li>
          <li className="messages__message">como andan</li>
        </ul>
      </header>
      <ul className="app__messengers">
        <li className="messenger">
          <h2 className="messenger__name">izquierda</h2>
          <div className="messenger__inputs">
            <input className="messenger__text" type="text" />
            <input type="submit" className="messenger__send" />
          </div>
          <div className="messenger__messages">
            <h3 className="messenger__title">Mensajes enviados:</h3>
            <ul className="messenger__list">
              <li className="messenger__message">
                <p className="messenger__text">hola</p>
                <i className="messenger__icon fas fa-bomb"></i>
                <i className="messenger__icon far fa-eye"></i>
              </li>
              <li className="messenger__message">
                <p className="messenger__text">que tal</p>
                <i className="messenger__icon fas fa-bomb"></i>
                <i className="messenger__icon far fa-eye"></i>
              </li>
            </ul>
          </div>
        </li>
        <li className="messenger">
          <h2 className="messenger__name">centro</h2>
          <div className="messenger__inputs">
            <input className="messenger__text" type="text" />
            <input type="submit" className="messenger__send" />
          </div>
          <div className="messenger__messages">
            <h3 className="messenger__title">Mensajes enviados:</h3>
            <ul className="messenger__list">
              <li className="messenger__message">
                <p className="messenger__text">como estan</p>
                <i className="messenger__icon fas fa-bomb"></i>
                <i className="messenger__icon far fa-eye"></i>
              </li>
              <li className="messenger__message">
                <p className="messenger__text">bienvenidos</p>
                <i className="messenger__icon fas fa-bomb"></i>
                <i className="messenger__icon far fa-eye"></i>
              </li>
            </ul>
          </div>
        </li>
        <li className="messenger">
          <h2 className="messenger__name">derecha</h2>
          <div className="messenger__inputs">
            <input className="messenger__text" type="text" />
            <input type="submit" className="messenger__send" />
          </div>
          <div className="messenger__messages">
            <h3 className="messenger__title">Mensajes enviados:</h3>
            <ul className="messenger__list">
              <li className="messenger__message">
                <p className="messenger__text">buen dia</p>
                <i className="messenger__icon fas fa-bomb"></i>
                <i className="messenger__icon far fa-eye"></i>
              </li>
              <li className="messenger__message">
                <p className="messenger__text">como andan</p>
                <i className="messenger__icon fas fa-bomb"></i>
                <i className="messenger__icon far fa-eye"></i>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default App;
