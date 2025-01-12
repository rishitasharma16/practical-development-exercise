import React from 'react'
// import img from '../assets/images/acc2.jpg'
import style from '../style/accordion.module.css'
import { Button } from 'react-bootstrap'

function AccordionCard({img,title,body}) {
  return (
    <div style={{background:`linear-gradient(rgba(241, 236, 225, 0.7),rgba(241, 236, 225, 0.7)),url(${img})`}} className={style.accordion_card} >
     <div className={style.accordion_text}>
      <h1>{title}</h1>
      <p>{body}</p>
      <Button>Learn more</Button>
     </div>
    </div>
  )
}

export default AccordionCard