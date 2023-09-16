import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>

      <div className='cards__container'>
        <div className='cards__wrapper'>
          <h1 className='event'>Project Presentation</h1>
          <br />
          <ul className='cards__items'>

            <CardItem
              src='images/img-9.jpg'
              text='Techno Think : '
              label='Technical'
              path='/services'
            />
          </ul>
          <h1 className='event'>Technical Events</h1>
          <br />
          <ul className='cards__items'>

            <CardItem
              src='images/img-9.jpg'
              text='Code N Tackle : Dive into the unknown at our Coding'
              label='Technical'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Tech Fusion : Where Knowledge Meets the Unexpected'
              label='Technical'
              path='/services'
            />
          </ul>
          <h1 className='event'> Non-Technical Events</h1>
          <br />
          <ul className='cards__items'>

            <CardItem
              src='images/img-9.jpg'
              text='Film Fiesta : Dive into the Magic of Kollywood'
              label='Non-Technical'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Riddle ARcade : A Fusion of Mind and Adventure'
              label='Non-Technical'
              path='/services'
            />
            {/* /* <CardItem
            src='images/img-3.jpg'
            text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
            label='Mystery'
            path='/services'
          />
          <CardItem
            src='images/img-4.jpg'
            text='Experience Football on Top of the Himilayan Mountains'
            label='Adventure'
            path='/products'
          />  */}
            {/* <CardItem
            src='images/img-8.jpg'
            text='Ride through the Sahara Desert on a guided camel tour'
            label='Adrenaline'
            path='/sign-up'
          /> */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;