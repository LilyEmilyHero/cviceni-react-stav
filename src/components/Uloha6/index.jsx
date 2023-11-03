import React from 'react';
import { useState } from 'react';
import './ukol.css';

// Zadání 1: Pomocí `map` vypiš v seznamu `ul` všechny úkoly pomocí komponenty `Ukol`.
// Zadání 2: V komponentě Ukol si nachystej proměnnou s hodnotou `false`. Klikem na tlačítko ji změň na `true` pro splněný úkol.
// Zadání 3: Pokud je úkol splněný, nerenderuj tlačítko a `li` přidej navíc třídu `ukol--splnen`.

// Bonus: Nastav jednotlivým položkám ve výpisu `key`, aby vývojářské nástroje v prohlížeči nezobrazovaly varování. Nápověda: Key musí být v seznamu unikátní. Použij název úkolu.

const Ukol = ({ nazev }) => {
  const [splneno, setSplneno] = useState(false);
  return (
    <li className={`ukol ${splneno ? 'ukol--splnen' : null}`}>
      <span className="ukol__nazev">{nazev}</span>
      {splneno ? null : (
        <button className="ukol__akce" onClick={() => setSplneno(true)}>
          splnit
        </button>
      )}
    </li>
  );
};

export const Uloha6 = () => {
  const ukoly = ['Zamést', 'Pověsit prádlo', 'Umýt okna', 'Vynést koš'];

  return (
    <ul>
      {ukoly.map((ukol) => (
        <Ukol key={ukol} nazev={ukol} />
      ))}
    </ul>
  );
};
