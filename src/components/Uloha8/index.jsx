import React from 'react';
import { useState } from 'react';

// Zadání 1: Vytvoř stavovou proměnnou s výchozí hodnotou `'možná'`.
// Zadání 2: Proměnnou vypiš místo `ano/ne/možná`.
// Zadání 3: Po kliknutí na tlačítko změň `možná` na `ano`, `ano` na `ne`, případně `ne` na `možná`.

export const Uloha8 = () => {
  const [hodnota, setHodnota] = useState('možná');

  const handleClick = () => {
    if (hodnota === 'možná') {
      setHodnota('ano');
    } else if (hodnota === 'ano') {
      setHodnota('ne');
    } else {
      setHodnota('možná');
    }
  };
  return (
    <>
      <h3>Prší v Brně: {hodnota}</h3>
      <button onClick={handleClick}>změnit</button>
    </>
  );
};
