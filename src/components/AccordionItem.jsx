import React from 'react'
import { Accordion } from 'react-bootstrap'
import style from '../style/accordion.module.css'
import AccordionCardLarge from './AccordionCardLarge'
import img1 from '../assets/images/domine.png'
import img2 from '../assets/images/acc2.jpg'
import img3 from '../assets/images/acc3.jpg'

function AccordionItem() {
  const accordionData = [
    {
      title:'Explore Fly Fishing',
      body:'Proin nibh nisl condimentum id venenatis a condimentum vitae sapien. Tellus in metus vulputate eu sc',
      image:img1
    },
    {
      title:'Fly Fishing Experiences',
      body:'Proin nibh nisl condimentum id venenatis a condimentum vitae sapien. Tellus in metus vulputate eu sc',
      image:img2
    },
    {
      title:'Gear Up and Catch More',
      body:'Proin nibh nisl condimentum id venenatis a condimentum vitae sapien. Tellus in metus vulputate eu sc',
      image:img3
    }
  ]
  return (
    <Accordion defaultActiveKey={[0]} className={style.accordion_container}>
   

    {accordionData.map((item,index)=>{
      return(
        <Accordion.Item key={index} eventKey={index} >
        <Accordion.Header><span className='fs-5'>{item.title}</span></Accordion.Header>
        <Accordion.Body>
         <AccordionCardLarge title={item.title} image={item.image} body={item.body} />
        </Accordion.Body>
      </Accordion.Item>
      )
    })}
  </Accordion>
  )
}

export default AccordionItem