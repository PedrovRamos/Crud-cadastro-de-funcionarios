import React from 'react'

interface MyProps {
  onChange: any
  handleClick: any
  state: any
  positionsList: any
}

class RegistrationForm extends React.Component<MyProps> {
  render (): JSX.Element {
    console.log(this.props.positionsList)
    return (
        <div className="container-sm mt-5">
          <div className="input-group mb-3">
            <input value={ this.props.state.name } onChange={this.props.onChange} name="name" type="text" className="form-control" placeholder="Nome" />
            <input value={ this.props.state.lastName } onChange={this.props.onChange} name="lastName" type="text" className="form-control" placeholder="Sobrenome" />
          </div>

          <div className="input-group mb-3">
            <select value={ this.props.state.select }onChange={this.props.onChange} name="select" className="form-select" id="inputGroupSelect01">
              <option defaultValue="true" >Selecione o cargo</option>
              {this.props.positionsList.map((position: any) => (
                <option key={position.id} value={position.position_name}>{position.position_name}</option>
              ))}
            </select>
          </div>

          <div className="input-group mb-3">
            <input value={ this.props.state.birthDate } onChange={this.props.onChange} name="birthDate" type="text" className="form-control" placeholder="Data de Nascimento (xx/xx/xxxx)" />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text">R$</span>
            <input value={ this.props.state.salary }onChange={this.props.onChange} name="salary" type="text" className="form-control" placeholder="Salário" />
            <span className="input-group-text">,00</span>
            <button onClick={this.props.handleClick} className="btn btn-outline-success" type="button">Adicionar Funcionário</button>
          </div>

        </div>
    )
  }
}
export default RegistrationForm
