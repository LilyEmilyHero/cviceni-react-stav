import React from 'react';
import { useCasVSekundach } from './hodiny';

// Zadání: Pomocí předchystané stavové proměnné, která se mění každou sekundu, zobraz aktuální čas ve formátu 7:49:05. hh:mm:ss

// Nápověda: Pokud je v `casVSekundach` nula, pak je 0:00:00. Pokud je v `casVSekundach` 60, pak je 0:01:00. Pokud je v `casVSekundach` 67, pak je 0:01:07.

const formatujCas = (cas) => {
  // hh:mm:ss
  const sekundy = String(cas % 60).padStart(2, '0');
  const minuty = String(Math.floor((cas / 60) % 60)).padStart(2, '0');
  const hodiny = Math.floor(cas / 3600);

  return `${hodiny}:${minuty}:${sekundy}`;
};

export const ZaverecnyBonus3 = () => {
  const casVSekundach = useCasVSekundach();

  return (
    <>
      Čas právě teď: <b>{formatujCas(casVSekundach)}</b>
    </>
  );
};
