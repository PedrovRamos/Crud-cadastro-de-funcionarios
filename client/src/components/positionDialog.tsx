import * as React from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Axios from 'axios'

export default function FormPositionDialog (props: { setOpen: (arg0: boolean) => void, open: any, positionName: string, positionDesc: string, setPositionsList: any, id: number, positionsList: any }) {
  const [editValues, setEditValues] = React.useState({
    id: props.id,
    positionName: props.positionName,
    positionDesc: props.positionDesc
  })

  const handleEditPosition = () => {
    Axios.put('http://localhost:3001/edit_position', {
      id: editValues.id,
      position_name: editValues.positionName,
      position_desc: editValues.positionDesc
    }).then(() => {
      props.setPositionsList(
        props.positionsList.map((value: any) => {
          return value.id === editValues.id
            ? {
                id: editValues.id,
                position_name: editValues.positionName,
                position_desc: editValues.positionDesc
              }
            : value
        })
      )
    })
    handleClose()
  }

  const handleDeletePosition = () => {
    Axios.delete(`http://localhost:3001/delete_position/${editValues.id}`).then(() => {
      props.setPositionsList(
        props.positionsList.filter((value: any) => {
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
            id="positionName"
            label="Nome"
            onChange={handleChangeValues}
            defaultValue={props.positionName}
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="positionDesc"
            label="Descrição"
            onChange={handleChangeValues}
            defaultValue={props.positionDesc}
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleDeletePosition}>Remover</Button>
          <Button onClick={handleEditPosition}>Salvar</Button>
        </DialogActions>
      </Dialog>
  )
}
