import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section className="hero is-fullheight-with-navbar has-background-primary-light">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column is-6">
              <h1 className="title is-1 has-text-weight-bold has-text-primary">
                Bienvenido a YONDA Crowdfunding
              </h1>
              <h2 className="subtitle is-3 has-text-primary-dark">
                Apoya proyectos innovadores y haz realidad tus ideas
              </h2>
              <div className="buttons are-large mt-6">
                <Link to="/projects" className="button is-primary is-outlined hover-effect">
                  Explorar Proyectos
                </Link>
                <Link to="/submit" className="button is-primary hover-effect">
                  Presentar un Proyecto
                </Link>
              </div>
            </div>
            <div className="column is-6 has-text-centered">
              <figure className="image  mx-auto">
                <img src="https://www.atulhost.com/wp-content/uploads/2018/11/crowdfunding.jpg" alt="Crowdfunding illustration" className="has-shadow is-rounded" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;