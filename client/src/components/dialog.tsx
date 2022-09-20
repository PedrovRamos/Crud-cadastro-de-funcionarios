import * as React from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Axios from 'axios'

export default function FormDialog (props: { setOpen: (arg0: boolean) => void, open: any, name: string, position: string, birthDate: string, salary: string, setEmployeesList: any, id: number, employeesList: any }) {
  const [editValues, setEditValues] = React.useState({
    id: props.id,
    name: props.name,
    position: props.position,
    birthDate: props.birthDate,
    salary: props.salary
  })

  const handleEditEmployee = () => {
    Axios.put('http://localhost:3001/edit', {
      id: editValues.id,
      full_name: editValues.name,
      position: editValues.position,
      birth_date: editValues.birthDate,
      salary: editValues.salary
    }).then(() => {
      props.setEmployeesList(
        props.employeesList.map((value: any) => {
          return value.id === editValues.id
            ? {
                id: editValues.id,
                full_name: editValues.name,
                position: editValues.position,
                birth_date: editValues.birthDate,
                salary: editValues.salary
              }
            : value
        })
      )
    })
    handleClose()
  }

  const handleDeleteEmployee = () => {
    Axios.delete(`http://localhost:3001/delete/${editValues.id}`).then(() => {
      props.setEmployeesList(
        props.employeesList.filter((value: any) => {
          return value.id !== editValues.id
        })
      )
    })
    handleClose()
  }

  const handleClose = () => {
    props.setOpen(false)
  }

  const handleChangeValues = (value: { target: { id: any, value: any } }) => {
    setEditValues((prevValues: any) => ({
      ...prevValues,
      [value.target.id]: value.target.value
    }))
  }

  return (
      <Dialog open={props.open} onClose={handleClose}>
        <DialogTitle>Editar</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Nome"
            onChange={handleChangeValues}
            defaultValue={props.name}
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="birthDate"
            label="Data de aniversário"
            onChange={handleChangeValues}
            defaultValue={props.birthDate}
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="salary"
            label="Salário"
            onChange={handleChangeValues}
            defaultValue={props.salary}
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleDeleteEmployee}>Remover</Button>
          <Button onClick={handleEditEmployee}>Salvar</Button>
        </DialogActions>
      </Dialog>
  )
}
