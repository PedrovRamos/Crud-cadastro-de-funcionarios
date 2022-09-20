import React from 'react'
import FormPositionDialog from './positionDialog'

function PositionsDescription (props: { positionName: string, positionDesc: string, positionsList: any, setPositionsList: any, id: number }) {
  const [open, setOpen] = React.useState(false)
  const { positionName, positionDesc, positionsList, setPositionsList, id } = props

  const handleClickCard = () => {
    setOpen(true)
  }
  return (
        <>
          <FormPositionDialog open={open} positionsList={positionsList} setOpen={setOpen} positionName={positionName} positionDesc={positionDesc} setPositionsList={setPositionsList} id={id} />
          <div className="col" onClick={() => {
            handleClickCard()
          }}>
            <div style={{ cursor: 'pointer' }} className="shadow card mb-3">
                <div className="row g-0">
                      <div className="card-header">
                        <h5 className="card-title">{positionName}</h5>
                      </div>

                    <div className="col-md-8">
                    <div className="card-body">
                        <p className="card-text">{positionDesc}</p>
                    </div>
                    </div>
                </div>
            </div>
          </div>
        </>
  )
}
export default PositionsDescription
