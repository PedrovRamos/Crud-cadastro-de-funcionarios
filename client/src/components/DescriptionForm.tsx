import React from 'react'

interface MyProps {
  handlePositionChange: any
  positionState: any
  handlePositionClickButton: any
}

class DescriptionForm extends React.Component<MyProps> {
  render (): JSX.Element {
    const { handlePositionChange, positionState, handlePositionClickButton } = this.props
    return (
        <div className="container-sm mt-5">
          <div className="input-group mb-3">
            <input value={positionState.positionName} onChange={handlePositionChange} name="positionName" type="text" className="form-control" placeholder="Nome do cargo" />
          </div>

          <div className="input-group mb-3">
            <textarea value={positionState.positionDesc} onChange={handlePositionChange} name="positionDesc" className="form-control" placeholder="Descrição do cargo"/>
            <button onClick={handlePositionClickButton} className="btn btn-outline-success" type="button">Adicionar Cargo</button>
          </div>
        </div>
    )
  }
}
export default DescriptionForm
