import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton';
import Sushi from '../components/Sushi';

const renderSushisList = (props) => {
  return props.sushis.map(sushi => <Sushi addToTable={props.addToTable} sushi={sushi} />)
}

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {renderSushisList(props)}
        <MoreButton onClick={props.handleMore} />
      </div>
    </Fragment>
  )
}

export default SushiContainer