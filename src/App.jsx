import { useState } from 'react'
import './App.css'
import Card from './components/Card/Card'
import Data from './assets/data.json'

//! IMAGES IMPORT: -----------------------------------
import Alien from './assets/img/AlienPoste.jpeg'
import Django from './assets/img/DjangoPoster.jpeg'
import Donnie from './assets/img/DonniedarkoPoster.jpeg'
import Matrix from './assets/img/matrixPoster.jpg'
import Nightcrawler from './assets/img/NightcrawlerPoster.jpeg'
import BluesBrothers from './assets/img/poster1.jpg'
import PulpFiction from './assets/img/poster2.jpg'
import KillBill from './assets/img/poster4.jpg'
import DarkKnight from './assets/img/poster5.jpg'
import Saw from './assets/img/poster6.jpg'
import TaxiDriver from './assets/img/TaxidriverPoster.jpeg'
import Whiplash from './assets/img/WhiplashPoster.jpeg'
//!----------------------------------------------------

function App() {

  let imgs = [Alien, Django, Donnie, Matrix, Nightcrawler, BluesBrothers, PulpFiction, KillBill, DarkKnight, Saw, TaxiDriver, Whiplash]
  let counter = 0

  return (
    <div className='App flex justify-center w-screen'>
      <div className='flex justify-between flex-wrap w-[70%] h-[auto] mt-[100px]'>
        {
          Data.map((element, key) => {
            let title = element.title
            let price = element.price
            let quantity = element.quantity
            let link = imgs[counter]
            counter ++
            return(
              <Card title={title} price={price} link={link} quantity={quantity} />
            )
          })
        }
      </div>
    </div>
  )
}

export default App
