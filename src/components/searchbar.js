// Barra de Busqueda

import { useState, useCallback, useMemo } from "react";
import Results from "./results";

import styled from "styled-components";

// este componente está asignado a un <div>
const SearchBarContainer = styled.div`
  position: relative;
  width: 400px;
  margin: 0 auto;
`;

// este componente está asignado a un <input>
const StyledInput = styled.input`
  padding: 10px;
  border-radius: 5px;
  min-width: 400px;
  box-sizing: border-box;
  border: solid 1px #222;
  outline: none;
`;
                // items = todo el conjunto de datos
export default function SearchBar({ items, onItemSelected }) {

  const [query, setQuery] = useState("mi");// esto sirve para manejar la busqueda

  const [results, setResults] = useState([]);// esto sirve para manejar los resultados de la busqueda

  function handleOnChange(e) {
    const value = e.target.value;// sacamos el valor
    setQuery(value);// realizamos la busqueda
  }

  function handleResults(items) {
    setResults(items);// mostramos los resultados ya filtrados
  }

  return (
    // <div> = <SearchBarContainer>
    <SearchBarContainer>
      {results && <div>{results.length} results</div>}
      
      {/* <input> =  <StyledInput> */}
      <StyledInput
        type={"text"}
        onChange={handleOnChange}
        value={query}
      ></StyledInput>
      {/* </input> = </StyledInput> */}

      <Results
        items={items}
        query={query}
        onItemSelected={onItemSelected}
        onResultsCalculated={handleResults}
      />
    </SearchBarContainer>
    // </div> = <SearchBarContainer>
  );
}
