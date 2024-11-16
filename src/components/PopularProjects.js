import React from 'react';

const popularProjects = [
  { id: 1, title: "Botella de agua ecológica", description: "Una botella de agua reutilizable que purifica el agua mientras bebes", funding: 15000, goal: 20000, image: "https://i.etsystatic.com/19158602/r/il/038b0e/1987516664/il_fullxfull.1987516664_dtmw.jpg" },
  { id: 2, title: "Jardín de casa inteligente", description: "Un jardín inteligente que se cuida solo", funding: 50000, goal: 100000, image: "https://www.topdomo.com/wp-content/uploads/casa-inteligentes.jpg" },
  { id: 3, title: "Juego educativo de realidad virtual", description: "Un juego de realidad virtual para aprender historia", funding: 30000, goal: 40000, image: "https://images.prismic.io/invelon-website/ba07615c-6450-4f24-8b6c-6b4caebf8959_realidad-virtual-en-educacion-invelon.jpg?auto=format%2Ccompress&fit=max&q=50&w=1200&h=801" },
];

function PopularProjects() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="title is-2 has-text-centered mb-6">Proyectos Populares</h1>
        <div className="columns is-multiline">
          {popularProjects.map(project => (
            <div key={project.id} className="column is-4">
              <div className="card hover-effect">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src={project.image} alt={project.title} />
                  </figure>
                </div>
                <div className="card-content hover-effect">
                  <p className="title is-4">{project.title}</p>
                  <p className="subtitle is-6">{project.description}</p>
                  <progress className="progress is-primary" value={project.funding} max={project.goal}>
                    {(project.funding / project.goal * 100).toFixed(0)}%
                  </progress>
                  <p className="has-text-right">{`$${project.funding.toLocaleString()} recaudados de $${project.goal.toLocaleString()}`}</p>
                </div>
                <footer className="card-footer">
                  <a href="#" className="card-footer-item">Ver más</a>
                  <a href="#" className="card-footer-item">Apoyar</a>
                </footer>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PopularProjects;