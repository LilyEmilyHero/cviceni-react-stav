import React from 'react';
import { useState } from 'react';

// Zadání: Pomocí dvou stavových proměnných s výchozí hodnotou 0, které se budou měnit podle vstupních políček, vypiš do `<output></output>` jejich součet.

export const ZaverecnyBonus4 = () => {
  const [cisloA, setCisloA] = useState(0);
  const [cisloB, setCisloB] = useState(0);
  const cisloC = cisloA + cisloB;
  return (
    <>
      <input
        type="number"
        defaultValue="0"
        onChange={(event) => setCisloA(event.target.valueAsNumber)}
      />{' '}
      +{' '}
      <input
        type="number"
        defaultValue="0"
        onChange={(event) => setCisloB(event.target.valueAsNumber)}
      />{' '}
      = <output>{isNaN(cisloC) ? null : cisloC}</output>
    </>
  );
};
