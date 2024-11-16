import React from 'react';

function SubmitProject() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="title is-2 has-text-centered mb-6">Presentar un Proyecto</h1>
        <div className="columns is-centered">
          <div className="column is-half">
            <div className="box">
              <form>
                <div className="field">
                  <label className="label">Título del Proyecto</label>
                  <div className="control">
                    <input className="input is-medium" type="text" placeholder="Ingrese el título de su proyecto" />
                  </div>
                </div>

                <div className="field">
                  <label className="label">Descripción</label>
                  <div className="control">
                    <textarea className="textarea is-medium" placeholder="Describa su proyecto" rows="5"></textarea>
                  </div>
                </div>

                <div className="field">
                  <label className="label">Categoría</label>
                  <div className="control">
                    <div className="select is-fullwidth is-medium">
                      <select>
                        <option>Tecnología</option>
                        <option>Arte</option>
                        <option>Música</option>
                        <option>Cine</option>
                        <option>Ecología</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="field">
                  <label className="label">Meta de Financiación</label>
                  <div className="control has-icons-left">
                    <input className="input is-medium" type="number" placeholder="Ingrese la cantidad objetivo" />
                    <span className="icon is-left">
                      <i className="fas fa-dollar-sign"></i>
                    </span>
                  </div>
                </div>

                <div className="field">
                  <label className="label">Imagen del Proyecto</label>
                  <div className="file has-name is-fullwidth is-medium">
                    <label className="file-label">
                      <input className="file-input" type="file" name="resume" />
                      <span className="file-cta">
                        <span className="file-icon">
                          <i className="fas fa-upload"></i>
                        </span>
                        <span className="file-label">
                          Seleccionar archivo
                        </span>
                      </span>
                      <span className="file-name">
                        No se ha seleccionado archivo
                      </span>
                    </label>
                  </div>
                </div>

                <div className="field mt-5">
                  <div className="control">
                    <button className="button is-primary is-fullwidth is-medium hover-effect">Enviar Proyecto</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SubmitProject;