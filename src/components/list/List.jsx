import { ArrowBackIosNewOutlined, ArrowForwardIosOutlined } from '@mui/icons-material'
import ListItem from '../listItem/ListIttem'
import './list.scss'
import { useCallback, useEffect, useRef, useState } from 'react'
import { Hidden } from '@mui/material'

export default function List() {
  const [translation, setTranslation] = useState(0)
  const [SlideNum, setSlideNum] = useState(0)
  const [IsMoved,setIsMoved] = useState(false)

  const ListRef = useRef(null)

  const handleClick = (direction) => {
    const itemWidth = 230
    setIsMoved(true)

    if (direction === 'left' && SlideNum<8) {
      setSlideNum(SlideNum+1)
      setTranslation((prevTranslation) => prevTranslation - itemWidth)
    } else if (direction === 'right'&& SlideNum>0) {
      setSlideNum(SlideNum-1)
      setTranslation((prevTranslation) => prevTranslation + itemWidth)
    }
  }

  return (
    <div className="list">
      <span className="listTitle">Continue to watch</span>
      <div className="wrapper">
        <ArrowBackIosNewOutlined 
            className='arrow left' 
            onClick = {()=>handleClick('right')} 
            style = {{display: !IsMoved && 'none' }} 
        />
        <div className="container" ref={ListRef} style={{transform: `translateX(${translation}px)`}}>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
        </div>
        <ArrowForwardIosOutlined className='arrow right' onClick = {()=>handleClick('left')}/>
      </div>
    </div>
  )
}
