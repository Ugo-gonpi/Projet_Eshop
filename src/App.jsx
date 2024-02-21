import { useState } from 'react'
import './App.css'

import Card from './components/Card/Card'
import Sidebar from './components/Sidebar/Sidebar'
import Data from './assets/data.json'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'

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
import Bin from './assets/img/bin.png'
//!----------------------------------------------------



function App() {

  let imgs = [Alien, Django, Donnie, Matrix, Nightcrawler, BluesBrothers, PulpFiction, KillBill, DarkKnight, Saw, TaxiDriver, Whiplash]
  let counter = 0

  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)
  const [balance, setBalance] = useState(500)


  let addToCart = (a, x, y, z) => {
    
    setTotal(total + y)
    balance - y >= 0 ? setBalance(balance - y) : setBalance(balance)
    

    setCart(cart => {
      const matchingItems = cart.find(item => item.title === x)
      if (matchingItems) {
        const updatedItem = {
          ...matchingItems,
          nbr: matchingItems.nbr +  1,
          quantity: matchingItems.quantity - 1,
          priceCount: matchingItems.price * (matchingItems.nbr +  1),
          outOfStock: matchingItems.quantity -  1 <=  0
        }
        
        const newCart = cart.filter(item => item.title !== x)
        newCart.push(updatedItem)
        return newCart
      } else {

        return [...cart, {"title": x, "price": y, "quantity": z, "priceCount":  y, "nbr":  1, "outOfStock": false}]
      }
    })

  }

  let remove = (x, y, z) => {
    setTotal(total - z)
    setBalance(balance + z)
      setCart(cart => {
        const matchingItems = cart.find(item => item.title === x)
        if (matchingItems) {
          const updatedItem = {
            ...matchingItems,
            nbr: matchingItems.nbr -  1,
            quantity: matchingItems.quantity - 1,
            priceCount: matchingItems.price * (matchingItems.nbr +  1),
            outOfStock: matchingItems.quantity -  1 <=  0
          }
          if (updatedItem.nbr > 0) {
            const newCart = cart.filter(item => item.title !== x)
            newCart.push(updatedItem)
            return newCart
          } else {
            const newCart = cart.filter((item) => item.title !== x);
            setCart(newCart)
          }
          
        }
      })
  }

  return (

    <div className='App flex justify-center w-screen'>
      <Navbar/>
      <Sidebar cart={cart} total={total} balance={balance} remove={remove} Bin={Bin}/>
      <div className='flex justify-between flex-wrap w-[70%] h-[auto] mt-[100px]'>
        {
          Data.map((element, key) => {
            let title = element.title
            let price = element.price
            let quantity = element.quantity
            let unclickable = false

            
            if (cart && cart.length>0) {
              const matchingItems = cart.find(item => item.title === title)
              if (matchingItems){
                quantity = quantity - matchingItems.nbr
                if (quantity < 1) {
                  unclickable = true
                }
              } else {
              }
            }
           

            let link = imgs[counter]
            counter ++
            return(
              <Card cart={cart} title={title} price={price} link={link} quantity={quantity} addToCart={addToCart} balance={balance} unclickable={unclickable} />
            )
          })
        }
      </div> 
      <Footer/>
    </div>
  )
}

export default App