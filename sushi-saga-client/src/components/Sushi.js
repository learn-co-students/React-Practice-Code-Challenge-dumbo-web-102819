import React, { Fragment } from 'react'



const Sushi = (props) => {
  //console.log("Inside Sushi", props)
  return (
    <div className="sushi">
      <div className="plate"
           onClick={() => {
             props.buySushi(props.id, props.price)}}>
        {
          /* Tell me if this sushi has been eaten! */

          props.eaten ?
            null
          :
            <img src={props.url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {props.name} - ${props.price}
      </h4>
    </div>
  )
}

export default Sushi
