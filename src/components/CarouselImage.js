import React from 'react'
// import img from "../resources/bg.jpg"
import { Image } from 'react-bootstrap'

const CarouselImage = ({text, image}) => {
  return (
    <Image src={image} alt={text} fluid />
  )
}

export default CarouselImage