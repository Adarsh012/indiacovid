import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';
import clean from '../clean.png'
import disinfect from '../disinfect.png'
import safety from '../safety.png'
export default class Car extends Component {
  state = {
    items: [
      {id: 1, image: clean},
      {id: 3, image: disinfect},
      {id: 4, image: safety}
      
    ]
  }

  render () {
    const { items } = this.state;
    return (
      <div id ="row">  
      <Carousel>
        {items.map(item => 
        <div key={item.id} class="col-md-12" width="50%" >
            <img class="d-block w-100" src={item.image}></img>
        </div>)}
      </Carousel>
      </div>
    )
  }
}
