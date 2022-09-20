import React, { useState, useEffect } from 'react';
import Employees from './pages/Employees';
import Positions from './pages/Positions';
import PageNotFound from './pages/PageNotFound';
import { Routes, Route } from 'react-router-dom';
import Axios from "axios";

type State = {
  name: string,
  lastName: string,
  birthDate: string,
  salary: string,
  select: string,
}

type positionState = {
  positionName: string,
  positionDesc: string,
}

function App() {

  // CONFIGURANDO CRUD DE CADASTRAMENTO DE FUNCIONÁRIOS

    const [state, setState] = useState<State>({
      name: '',
      lastName: '',
      birthDate: '',
      salary: '',
      select: '',
    })

    const [ employeesList, setEmployeesList ] = React.useState<any[]>([]);

    console.log(employeesList)

    function handleChange(evt: { target: { value: any; name: any; }; }) {
      const value = evt.target.value;
      setState({
        ...state,
        [evt.target.name]: value
      });
    }

    function handleClickButton(this: any) {
      Axios.post("http://localhost:3001/register", {
        full_name: `${state.name} ${state.lastName}`,
        birth_date: state.birthDate,
        salary: state.salary,
        position: state.select
      }).then(() => {
        Axios.post("http://localhost:3001/search", {
          full_name: `${state.name} ${state.lastName}`,
          birth_date: state.birthDate,
          salary: state.salary,
          position: state.select,
        }).then((response) => {
          setEmployeesList([
            ...employeesList,
            {
              id: response.data[0].id,
              full_name: `${state.name} ${state.lastName}`,
              birth_date: state.birthDate,
              salary: state.salary,
              position: state.select
            }
          ])
        })
        setState({
          name: '',
          lastName: '',
          birthDate: '',
          salary: '',
          select: '',
        })
      });
    };


    useEffect(() => {
      Axios.get("http://localhost:3001/getEmployees").then((response) => {
        setEmployeesList(response.data);
    });
    }, []);

    // CONFIGURANDO CRUD DE CADASTRAMENTO DE CARGOS

    const [positionState, setPositionState] = useState<positionState>({
      positionName: '',
      positionDesc: '',
    })

    const [positionsList, setPositionsList] = React.useState<any[]>([]);

    console.log(positionsList)


    function handlePositionChange(evt: { target: { value: any; name: any; }; }) {
      const value = evt.target.value;
      setPositionState({
        ...positionState,
        [evt.target.name]: value
      });
    }

    function handlePositionClickButton(this: any) {
      Axios.post("http://localhost:3001/register_position", {
        position_name: positionState.positionName,
        position_desc: positionState.positionDesc,
      }).then(() => {
        Axios.post("http://localhost:3001/search_position", {
          position_name: positionState.positionName,
          position_desc: positionState.positionDesc,
        }).then((response) => {
          setPositionsList([
            ...positionsList,
            {
              id: response.data[0].id,
              position_name: positionState.positionName,
              position_desc: positionState.positionDesc,
            }
          ])
        })
        setPositionState({
          positionName: '',
          positionDesc: '',
        })
      });
    };

    useEffect(() => {
      Axios.get("http://localhost:3001/get_positions").then((response) => {
        setPositionsList(response.data);
    });
    }, []);

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Employees positionsList={positionsList} state={state} employeesList={ employeesList } setEmployeesList={ setEmployeesList } handleClick={handleClickButton} onChange={ handleChange } /> } />
        <Route path='/cargos' element={ <Positions setPositionsList={setPositionsList} handlePositionClickButton={handlePositionClickButton} positionsList={positionsList} positionState={positionState} handlePositionChange={handlePositionChange} /> } />
        <Route path='*' element={ <PageNotFound /> } />
      </Routes>
    </div>
  );

}

export default App;
