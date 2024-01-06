import { useMemo } from "react";
import styled from "styled-components";

// este componente está asignado a un <span>
const StyledMarker = styled.span`
  background-color: yellow;
  font-weight: bolder;
  border-radius: 2px;
`;

// esta componente está asigando a un <a>
const StyledItem = styled.a`
  color: black;
  display: block;
  padding: 10px;
  text-decoration: none;

  &:hover {
    background-color: #4c91ba;
    color: white;
  }

  &:hover span {
    color: black;
  }
`;

export default function MarkedItem({ item, onClick, query }) {
  const { left, center, right } = useMemo(
    () => getPositions(item, query),
    [item, query]
  );

  function getPositions(item, query) {
    const index = item.title.toLowerCase().indexOf(query);
    // esto nos dice la posición de la coincidencia que está dentro del texto

    // dividimos la longitud del texto en 3 partes; izquierda - centro - derecha
    const left = item.title.slice(0, index);
    const center = item.title.slice(index, index + query.length);
    const right = item.title.slice(index + query.length);

    return {
      left,
      center,
      right,
    };
  }

  function handleClick(e) {
    onClick(item);
  }

  return (
    <StyledItem href="#" onClick={handleClick}>
      {left}
      <StyledMarker>{center}</StyledMarker>
      {right}
    </StyledItem>
  );
}
