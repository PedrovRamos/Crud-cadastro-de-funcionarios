import React from 'react'
import Header from '../components/Header'
import DescriptionForm from '../components/DescriptionForm'
import PositionsDescription from '../components/PositionsDescription'

interface MyProps {
  handlePositionChange: any
  positionState: any
  positionsList: any
  handlePositionClickButton: any
  setPositionsList: any
}

class Positions extends React.Component<MyProps> {
  render (): React.ReactNode {
    const { handlePositionChange, positionState, positionsList, handlePositionClickButton, setPositionsList } = this.props
    return (
            <div>
                <Header linkTo="/" linkTitle="Funcionários" headerTitle="Descrição dos cargos da empresa" />
                <DescriptionForm handlePositionClickButton={handlePositionClickButton} positionState={positionState} handlePositionChange={handlePositionChange} />

                  <div className="px-5 container-sm mt-5">
                    {positionsList.map((position: any) => (
                        <PositionsDescription setPositionsList={setPositionsList} positionsList={positionsList} id={position.id} key={position.id} positionName={position.position_name} positionDesc={position.position_desc} />
                    ))}
                  </div>
            </div>
    )
  }
}

export default Positions
