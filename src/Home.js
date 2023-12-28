// Home.js
import React from 'react'
import "./Home.css"
import ProductPage from './ProductPage'

function Home() {
  let products = [
    {
      title:"Redmi 80cm 32 inches HD Ready Smart LED Fire TV",
      id:1313123,
      price:199.45,
      image:"https://m.media-amazon.com/images/I/71RxCmvnrbL._AC_SS250_.jpg",
      rating:3
    },
    {
      title:"Redmi 80cm 32 inches HD Ready Smart LED Fire TV",
      id:1313123,
      price:199.45,
      image:"https://m.media-amazon.com/images/I/71RxCmvnrbL._AC_SS250_.jpg",
      rating:3
    },
    {
      title:"Redmi 80cm 32 inches HD Ready Smart LED Fire TV",
      id:1313123,
      price:199.45,
      image:"https://m.media-amazon.com/images/I/71RxCmvnrbL._AC_SS250_.jpg",
      rating:3
    },
    {
      title:"Redmi 80cm 32 inches HD Ready Smart LED Fire TV",
      id:1313123,
      price:199.45,
      image:"https://m.media-amazon.com/images/I/71RxCmvnrbL._AC_SS250_.jpg",
      rating:3
    },
    {
      title:"Redmi 80cm 32 inches HD Ready Smart LED Fire TV",
      id:1313123,
      price:199.45,
      image:"https://m.media-amazon.com/images/I/71RxCmvnrbL._AC_SS250_.jpg",
      rating:3
    },
    // ... other products
  ]

  return (
    <div className='home'>
      <div className='home__container'>
        <img className='home__image' src="https://images-eu.ssl-images-amazon.com/images/G/31/OHL_HSS/3000x1200-heroUnrec._CB570990004_.jpg"/>
        <div className='home__row'>
            {products.map(product => (
                <ProductPage key={product.id} {...product} />
            ))}
        </div>
      </div>
    </div>
  )
}

export default Home
