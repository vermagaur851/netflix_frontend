import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@mui/icons-material'
import './listItem.scss'
import { useState } from 'react'

export default function ListItem({index,banner,trailer}) {
  const [isHovered,setIsHovered] = useState(false)
  return (
    <div 
      className="listItem" 
      style={{left: isHovered && (index*227.5) - 50}}
      onMouseEnter={()=>setIsHovered(true)} 
      onMouseLeave={()=>setIsHovered(false)}
    >
        <img src={banner}
          alt="" 
        />
        {isHovered && (
          <div>
            <video src={trailer} autoPlay={true} loop/>
            <div className='itemInfo'>
              <div className="icons">
                <PlayArrow className='icon'/>
                <Add className='icon'/>
                <ThumbUpAltOutlined className='icon'/>
                <ThumbDownAltOutlined className='icon'/>
              </div>
              <div className="itemInfoTop">
                <span><strong>1 hour 14 mins</strong></span>
                <span className='limit'> +16</span>
                <span className='release'>2023</span>
              </div>
              <div className="desc">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit doloribus error et nulla facilis impedit nisi.
              </div>
              <div className="genre">
                <strong>Action</strong>
              </div>
            </div>
          </div>
        )}
    </div>
  )
}
