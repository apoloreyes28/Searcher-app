// import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import SearchBar from "./components/searchbar";

import styled from "styled-components";

// creamos un componente <StyledButton /> 
// y lo asignamos a un elemento (etiqueta) HTML:
const StyledButton = styled.button`
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: white;
  border: solid 2px #ccc;
  cursor: pointer;

  &:hover {
    background-color: #efefef;
  }

  .activated{
    background-color: #00366
    color: white;
    border: solid 2px #26aeff;
  }
`;

// arreglo de objetos 'esto es como una Base de Datos'
const emails = [
  {
    id: "email-01",
    title: "Reporte de resultados",
  },
  {
    id: "email-02",
    title: "Requisitos para cambio",
  },
  {
    id: "email-03",
    title: "Estatus de funcionalidad",
  },
  {
    id: "email-04",
    title: "Próximos eventos",
  },
  {
    id: "email-05",
    title: "Participa en la encuesta",
  },
];

// -------------------------------------

const calendar = [
  {
    id: "calendar-01",
    title: "Sesión de seguimiento",
  },
  {
    id: "calendar-02",
    title: "Revisión de propuestas",
  },
  {
    id: "calendar-03",
    title: "Evento para donar juguetes",
  },
  {
    id: "calendar-04",
    title: "Junta semanal de equipo",
  },
  {
    id: "calendar-05",
    title: "Revisión de pendientes con cliente",
  },
];

// -----------------------------------

const people = [
  {
    id: "people-01",
    title: "Juan Perez",
  },
  {
    id: "people-02",
    title: "Marcos Rivas",
  },
  {
    id: "people-03",
    title: "Sergio Martinez",
  },
  {
    id: "people-04",
    title: "Laura Jimenez",
  },
  {
    id: "people-05",
    title: "Horario Martinez",
  },
];

// definimos una interfaz que nos permita cambiar entre la selección del conjunto de datos
function App() {
  const [data, setData] = useState([...people, ...emails, ...calendar]);
  // aquí le decimos que ...people vamos a tener acceso a toda (seleccionamos todo) la información

  const [selection, setSelection] = useState(null);// es null porque no selecciona nada
  const [currentOption, setCurrentOption] = useState("all");
  // el estado actual van a ser 'todas' las opciones: people, calendar, emails

  function handleClick(e) {
    const location = e.target.name;
    //     opcion             nombre

    // cuando presionemos un botón, este condicional elegirá la respectiva opción
    switch (location) {
      case "all":
        setData([...people, ...emails, ...calendar]);// aquí estamos seleccionando todas las opciones
        setCurrentOption("all");// actualizamos el estado
        break;

      case "people":
        setData([...people]);
        setCurrentOption("people");
        break;

      case "emails":
        setData([...emails]);
        setCurrentOption("emails");
        break;

      case "calendar":
        setData([...calendar]);
        setCurrentOption("calendar");
        break;
    }
  }

  function handleOnItemSelected(item) {
    setSelection(item);
  }

  return (
    <div className="App">
      <StyledButton name="all" onClick={handleClick}> 
      {/* vamos a utilizar el mismo método para reconocer todos los botones ya que
          cuando demos click en cualquier botón vamos a cambiar setCurrentOption */}
        Search in All
      </StyledButton>
      <StyledButton name="emails" onClick={handleClick}>
        Search in Emails
      </StyledButton>
      <StyledButton name="calendar" onClick={handleClick}>
        Search in Calendar
      </StyledButton>
      <StyledButton name="people" onClick={handleClick}>
        Search in People
      </StyledButton>
      {selection ? <div>You selected: {selection.title}</div> : ""}
      <SearchBar items={data} onItemSelected={handleOnItemSelected} />
    </div>
  );
}

export default App;
