import { InfoOutlined, PlayArrow } from '@mui/icons-material'
import './features.scss'

export default function Features({type}) {
  return (
    <div className='features'>
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option value="">--Select--</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
        <img 
          src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
          alt="image" 
        />
        <div className='info'>
          <img 
            src="https://images.unsplash.com/photo-1682687220198-88e9bdea9931?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="" 
          />
          <span className='desc'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus impedit, laboriosam modi reiciendis cumque nulla quidem accusamus harum minima, vero nemo veritatis adipisci ducimus corrupti, laudantium natus? Illum, voluptates earum!
            Ea quis, repudiandae beatae tempora ex aspernatur quo? Aliquid nostrum beatae quidem dolorem, esse voluptas sed fuga repellat, odit nisi tempore? Explicabo dolorem libero delectus deserunt saepe nisi possimus dignissimos!
          </span>
          <div className='buttons'>
            <button className="play">
              <PlayArrow/>
              <span>Play</span>
            </button>
            <button className="more">
              <InfoOutlined/>
              <span>Info</span>
            </button>
          </div>
        </div>
    </div>
  )
}
