import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const createSushiDiv = (sushis, buySushi) => {
  //console.log("div", sushis)
  return sushis.map((sushi) =>{ //console.log("eachSushi: ",sushi);
    return <Sushi
                                  name={sushi.name}
                                  url={sushi.img_url}
                                  price={sushi.price}
                                  id={sushi.id}
                                  buySushi={buySushi}
                                  eaten={sushi.eaten}
                                />})

}
const SushiContainer = (props) => {


  return (
    <Fragment>
      <div className="belt">
        {createSushiDiv(props.fourSushis, props.buySushi)}
        <MoreButton buttonAction={props.moreSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer
