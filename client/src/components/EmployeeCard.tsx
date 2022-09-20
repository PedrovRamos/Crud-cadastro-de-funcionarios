import React, { useState } from 'react'
import FormDialog from './dialog'

function EmployeeCard (props: { name: string, position: string, birthDate: string, salary: string, setEmployeesList: any, id: number, employeesList: any }): JSX.Element {
  const [open, setOpen] = useState(false)
  const { name, position, birthDate, salary, setEmployeesList, id, employeesList } = props

  function handleClickCard (): void {
    setOpen(true)
  }

  return (
        <>
          <FormDialog open={open} employeesList={employeesList} setOpen={setOpen} name={name} position={position} birthDate={birthDate} salary={salary} setEmployeesList={setEmployeesList} id={id} />
          <div className="col" onClick={() => {
            handleClickCard()
          }}>
              <div style={{ cursor: 'pointer' }} className="card shadow " >
                <div className="card-header">
                      <h5 className="card-title">{name}</h5>
                </div>
                  <div className="card-body">
                      <ul className="list-group list-group-flush">
                          <li className="list-group-item">{position}</li>
                          <li className="list-group-item">{birthDate}</li>
                          <li className="list-group-item">{`R$${salary},00`}</li>
                      </ul>
                  </div>
              </div>
          </div>
        </>
  )
}
export default EmployeeCard
