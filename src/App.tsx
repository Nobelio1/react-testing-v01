import './App.css'

function App() {
  return (
    <div className="container">
      <div className="container_form">
        <p className="container__title">Encuesta #1</p>
        <form className="form">
          <div className="form__input">
            <label htmlFor="name">Nombres:</label>
            <input type="text" id="name" name="name" placeholder="Escribe tu nombre"/>
          </div>

          <div className="form__input">
            <label htmlFor="lastname">Apellidos:</label>
            <input type="text" id="lastname" name="lastname" placeholder="Escribe tus apellidos"/>
          </div>

          <div className="form__input_other">
            <div className="form__input">
              <label htmlFor="date_b">Fecha de nacimiento:</label>
              <input type="date" id="date_b" name="date_b"/>
            </div>

            <div className="form__input">
              <label htmlFor="type_doc">Tipo documento:</label>
              <select id="type_doc" name="type_doc">
                <option value="dni">DNI</option>
                <option value="passport">Pasaporte</option>
                <option value="other">Otro</option>
              </select>
            </div>

            <div className="form__input">
              <label htmlFor="doc">Documento de Identidad:</label>
              <input type="number" id="doc" name="doc" placeholder="XXXXXX"/>
            </div>
          </div>

          <div className="form__input">
            <label htmlFor="address">Dirección:</label>
            <input type="text" id="address" name="address" placeholder="Escribe tu dirección"/>
          </div>

          <button type="submit" className="form__button">Enviar</button>

        </form>
      </div>
    </div>
  )
}

export default App