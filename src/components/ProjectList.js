import React from 'react';

const projects = [
  { id: 1, title: "Botella de agua ecológica", category: "Ecología", funding: 15000, goal: 20000 },
  { id: 2, title: "Jardín de casa inteligente", category: "Tecnología", funding: 50000, goal: 100000 },
  { id: 3, title: "Juego educativo de realidad virtual", category: "Educación", funding: 30000, goal: 40000 },
  { id: 4, title: "Línea de Moda Sostenible", category: "Moda", funding: 25000, goal: 50000 },
  { id: 5, title: "Proyecto de arte comunitario", category: "Arte", funding: 5000, goal: 10000 },
];

function ProjectList() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="title is-2 has-text-centered mb-6">Lista de Proyectos</h1>
        <div className="table-container">
          <table className="table is-fullwidth is-striped is-hoverable">
            <thead>
              <tr>
                <th>Título</th>
                <th>Categoría</th>
                <th>Financiación</th>
                <th>Progreso</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {projects.map(project => (
                <tr key={project.id}>
                  <td>{project.title}</td>
                  <td><span className="tag is-primary is-light">{project.category}</span></td>
                  <td>{`$${project.funding.toLocaleString()} / $${project.goal.toLocaleString()}`}</td>
                  <td>
                    <progress className="progress is-primary is-small" value={project.funding} max={project.goal}>
                      {(project.funding / project.goal * 100).toFixed(0)}%
                    </progress>
                  </td>
                  <td>
                    <div className="buttons are-small">
                      <button className="button is-primary is-outlined hover-effect">Ver</button>
                      <button className="button is-link is-outlined hover-effect">Apoyar</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default ProjectList;