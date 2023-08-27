import React from 'react';
import './styles.css';
import { FaBook, FaCalendarAlt, FaUsers } from 'react-icons/fa';

const ServicesPage = () => {
  return (
    <div className="services-container">
      <h1 className="services-title">Nossos Serviços</h1>
      <div className="service">
        <div className="service-text">
          <h2>Bloco de Notas</h2>
          <p>Organize suas notas com facilidade e eficiência.</p>
        </div>
        <div className="service-icon"><FaBook /></div>
      </div>
      <div className="service">
        <div className="service-text">
          <h2>Planejador de Estudos</h2>
          <p>Planeje seus estudos e mantenha-se no caminho certo.</p>
        </div>
        <div className="service-icon"><FaCalendarAlt /></div>
      </div>
      <div className="service">
        <div className="service-text">
          <h2>Colaboração em Equipe</h2>
          <p>Colabore com colegas de classe em projetos e estudos.</p>
        </div>
        <div className="service-icon"><FaUsers /></div>
      </div>
    </div>
  );
};

export default ServicesPage;
