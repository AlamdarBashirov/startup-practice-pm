import React from 'react'
import style from './HomeCard.module.scss'

const HomeCard = ({item}) => {
  return (
    <div className={style.card}>
        <img src={item.thumbnail} alt="" />
        <p>{item.title}</p>
        <p>{item.price}</p>
        <div className={style.buttons}>
            <button>Add Basket</button>
            <button>Add Wishlist</button>
        </div>
    </div>
  )
}

export default HomeCard