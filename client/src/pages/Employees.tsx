import React, { ChangeEventHandler } from 'react'
import Header from '../components/Header'
import RegistrationForm from '../components/RegistrationForm'
import EmployeeCard from '../components/EmployeeCard'

interface MyProps {
  onChange: ChangeEventHandler<HTMLInputElement>
  handleClick: any
  employeesList: any
  setEmployeesList: any
  state: object
  positionsList: object
}

class Employees extends React.Component<MyProps> {
  render (): React.ReactNode {
    const { onChange, handleClick, employeesList, setEmployeesList, state, positionsList } = this.props
    return (
            <div>
              <Header
                linkTo="/cargos"
                linkTitle="Cargos"
                headerTitle="Cadastramento de funcionários"
              />

              <RegistrationForm positionsList={positionsList} state={ state } handleClick={ handleClick } onChange={onChange} />

              <div className="row row-cols-1 row-cols-md-4 g-4 mt-5 px-5">
                {employeesList?.map((employee: { full_name: string, position: string, birth_date: string, salary: string, id: number }) => (
                    <EmployeeCard
                    employeesList={employeesList}
                    key={employee.full_name}
                    name={employee.full_name}
                    id={employee.id}
                    position={employee.position}
                    birthDate={employee.birth_date}
                    salary={employee.salary}
                    setEmployeesList={setEmployeesList}
                />
                ))}
              </div>

            </div>
    )
  }
}

export default Employees
