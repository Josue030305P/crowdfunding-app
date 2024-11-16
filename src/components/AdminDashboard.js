import React from 'react';

const projects = [
  { id: 1, title: "Botella de agua ecológica", status: "Aprobado" },
  { id: 2, title: "Jardín de casa inteligente", status: "Pendiente" },
  { id: 3, title: "Juego educativo de realidad virtual", status: "Rechazado" },
  { id: 4, title: "Línea de Moda Sostenible", status: "Aprobado" },
  { id: 5, title: "Proyecto de arte comunitario", status: "Pendiente" },
];

function AdminDashboard() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="title is-2 has-text-centered mb-6">Panel de Administración</h1>
        <div className="table-container">
          <table className="table is-fullwidth is-striped is-hoverable">
            <thead>
              <tr>
                <th>ID</th>
                <th>Título del Proyecto</th>
                <th>Estado</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {projects.map(project => (
                <tr key={project.id}>
                  <td>{project.id}</td>
                  <td>{project.title}</td>
                  <td>
                    <span className={`tag ${
                      project.status === 'Aprobado' ? 'is-success' :
                      project.status === 'Pendiente' ? 'is-warning' :
                      'is-danger'
                    }`}>
                      {project.status}
                    </span>
                  </td>
                  <td>
                    <div className="buttons are-small">
                      <button className="button is-primary is-outlined">Ver</button>
                      <button className="button is-success">Aprobar</button>
                      <button className="button is-danger">Rechazar</button>
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

export default AdminDashboard;