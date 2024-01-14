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
          <ListItem index={0} 
            banner={"https://images.thedirect.com/media/photos/Untitled-1_0002_Layer_5.jpg"}
            trailer = 'https://upload.wikimedia.org/wikipedia/commons/7/73/Superhero_Skyfall_2018.ogv'
          />
          <ListItem index={1} 
            banner={'https://images.thedirect.com/media/photos/Guardians_vol_1.jpg'}
            trailer = "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761"
          />
          <ListItem index={2} banner={'https://images.thedirect.com/media/photos/Untitled-1_0016_marvel-cinematic-universe-spiderman-far-from-home-movie-poster.jpg'} trailer = "https://upload.wikimedia.org/wikipedia/commons/6/6b/River_flowing.webm"/>
          <ListItem index={3} banner='https://images.thedirect.com/media/photos/Untitled-1_0006_Layer_1.jpg'/>
          <ListItem index={4} banner={'https://images.thedirect.com/media/photos/Untitled-1_0015_marvel-cinematic-universe-spiderman-homecoming-movie-poster.jpg'}/>
          <ListItem index={5} banner={'https://images.thedirect.com/media/photos/Untitled-1_0009_marvel-cinematic-universe-thor-dark-world-movie-poster.jpg'}/>
          <ListItem index={6} banner={'https://images.thedirect.com/media/photos/Untitled-1_0003_Layer_4.jpg'}/>
          <ListItem index={7} banner={'https://images.thedirect.com/media/photos/Untitled-1_0019_marvel-cinematic-universe-iron-man-2-movie-poster.jpg'}/>
          <ListItem index={8} banner={'https://images.thedirect.com/media/photos/Untitled-1_0023_marvel-cinematic-universe-captain-marvel-movie-poster.jpg'}/>
          <ListItem index={9} banner={'https://images.thedirect.com/media/photos/Untitled-1_0018_marvel-cinematic-universe-iron-man-3-movie-poster.jpg'}/>
          <ListItem index={10} banner={'https://images.thedirect.com/media/photos/Untitled-1_0029_marvel-cinematic-universe-ant-man-movie-poster.jpg'}/>
          <ListItem index={11} banner={'https://images.thedirect.com/media/photos/Untitled-1_0014_marvel-cinematic-universe-the-avengers-age-of-ultron-movie-poster.jpg'}/>
          <ListItem index={12} banner={'https://images.thedirect.com/media/photos/Untitled-1_0017_marvel-cinematic-universe-iron-man-movie-poster.jpg'}/>
          <ListItem index={13} banner={'https://images.thedirect.com/media/photos/Untitled-1_0005_Layer_2.jpg'}/>
        </div>
        <ArrowForwardIosOutlined className='arrow right' onClick = {()=>handleClick('left')}/>
      </div>
    </div>
  )
}
