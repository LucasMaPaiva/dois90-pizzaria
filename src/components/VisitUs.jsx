import React, { useState } from 'react';
import './VisitUs.css';

const units = [
  {
    id: 'pizzaria-aeroporto',
    name: 'Pizzaria dois90 - Aeroporto',
    address: 'R. Yeyê Coelho, 580A - Aeroporto, Boa Vista - RR',
    mapUrl: 'https://www.google.com/maps?q=Pizzaria%20Dois90%20Aeroporto%20Boa%20Vista%20RR&t=&z=15&ie=UTF8&iwloc=&output=embed'
  },
  {
    id: 'pizzaria-cacari',
    name: 'Pizzaria dois90 - Caçari',
    address: 'Av. Ville Roy, 2185 - Caçari, Boa Vista - RR',
    mapUrl: 'https://www.google.com/maps?q=Pizzaria%20Dois90%20Caçari%20Boa%20Vista%20RR&t=&z=15&ie=UTF8&iwloc=&output=embed'
  },
  {
    id: 'gelateria-aeroporto',
    name: 'Gelateria dois90 - Aeroporto',
    address: 'R. Yeyê Coelho, 580A - Aeroporto, Boa Vista - RR',
    mapUrl: 'https://www.google.com/maps?q=Gelateria%20Dois90%20Aeroporto%20Boa%20Vista%20RR&t=&z=15&ie=UTF8&iwloc=&output=embed'
  },
  {
    id: 'gelateria-aparecida',
    name: 'Gelateria dois90 - Aparecida',
    address: 'R. José Bonifácio, 504 - Aparecida, Boa Vista - RR',
    mapUrl: 'https://www.google.com/maps?q=Gelatos%20Dois90%20Aparecida%20Boa%20Vista%20RR&t=&z=15&ie=UTF8&iwloc=&output=embed'
  }
];

export default function VisitUs() {
  const [activeUnit, setActiveUnit] = useState(units[0]);

  return (
    <section className="visit-us-section" id="visit-us">
      <div className="visit-header">
        <div className="e_linha_horizontal"></div>
        <h2><span>Venha nos </span><i>visitar</i></h2>
      </div>

      <div className="visit-content">
        <div className="visit-buttons">
          {units.map((unit) => (
            <button
              key={unit.id}
              className={`visit-btn ${activeUnit.id === unit.id ? 'active' : ''}`}
              onClick={() => setActiveUnit(unit)}
            >
              <span>{unit.name}</span>
              {activeUnit.id === unit.id && <span>→</span>}
            </button>
          ))}
        </div>
        
        <div className="visit-map">
          <iframe 
            src={activeUnit.mapUrl}
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title={`Mapa para ${activeUnit.name}`}
          ></iframe>
        </div>
      </div>
    </section>
  );
}
