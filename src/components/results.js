import { useEffect, useMemo, useState } from "react";
import MarkedItem from "./markedItem";

import styled from "styled-components";

// este componente está asignado a un <div>
const ResultsContainer = styled.div`
  position: absolute;
  width: 400px;
  background: white;
  border: solid 1px #222;
  border-top: solid 1px transparent;
  margin-top: -3px;
  box-sizing: border-box;
  border-radius: 0 0 5px 5px;
`;

export default function Results({
  // aplicamos varias operaciones a estos props

  items, // los elementos (opciones)

  onItemSelected, 
  // cuando demos click a un resultado vamos a mandar llamar a esta prop como 
  // un método (función)

  query, // el texto que estamos introduciendo (la busqueda) en el input

  onResultsCalculated, 
  // cantidad de resultados encontrados de la busqueda, esta prop la vamos 
  // a manejar como un evento
}) {
  const [results, setResults] = useState([]);
  // está vacío porque lo vamos a ir llenando con los resultados de la busqueda
  
  const filteredItems = useMemo(() => findMatch(items, query), [items, query]);
  // con esto hacemos el cálculo (algoritmo de busqueda), useMemo es un hook de memorización
  // el cual va almacenar (guardar) el resultado (valor) de esta función y solamente va volver
  // a ejecutar a ese método cuando exista un cierto cambio.

  useEffect(() => {
  // esto es un callback, cada vez que hacemos una consulta (busqueda)
  // nos dice el número de resultados filtrados
    onResultsCalculated(results);
  }, [results]);// cada vez que se actualize: results voy a mandar llamar onResultsCalculated()

  function findMatch(items, query) {
    const res = items.filter((q) => {// q = query = los elementos (items)
      return ( // res continene lo valores de la busqueda
        q.title.toLowerCase().indexOf(query) >= 0 &&
        query.length > 0 &&
        query !== ""
      );
    });
    setResults(res);

    return res;
  }
  return (
    // <div> = <ResultsContainer> 
    <ResultsContainer> 
      {query !== ""
        ? filteredItems.map((item) => (
            <MarkedItem
              key={item.id}
              item={item}
              query={query}
              onClick={onItemSelected}
            />
          ))
        : ""}
    </ResultsContainer>
    // </div> = </ResultsContainer> 
  );
}
