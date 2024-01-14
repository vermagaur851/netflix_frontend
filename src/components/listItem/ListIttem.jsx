import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@mui/icons-material'
import './listItem.scss'

export default function ListItem() {
  return (
    <div className="listItem">
        <img src="https://imgs.search.brave.com/rn6e3jBxZdHIW8ZN3TRVvrm3gZaww3QCGoqwlj8TR5A/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/Y25ldC5jb20vYS9p/bWcvcmVzaXplLzg5/MmFhNDZiZjUzMWU1/NGYzMDdmMWFkM2Ri/MzcwNTVmNjk2NGJi/MmUvaHViLzIwMjMv/MDIvMTkvNzJjMDI4/NGYtMGNiYy00Nzlh/LTk1ZmMtNDBkYmM2/ZWI3MWM4L3RoZS1t/YXJ2ZWxzLmpwZz9h/dXRvPXdlYnAmZml0/PWNyb3AmaGVpZ2h0/PTY3NSZwcmVjcm9w/PTEwNzgsNjA2LHgw/LHk3NDQmd2lkdGg9/MTIwMA" 
          alt="" 
        />
        <div className='itemInfo'>
        <div className="icons">
            <PlayArrow/>
            <Add/>
            <ThumbUpAltOutlined/>
            <ThumbDownAltOutlined/>
          </div>
          <div className="Info">
            <span><strong>1 hour 14 mins</strong></span>
            <span className='limit'>    +16</span> <br/>
            <span className='release'>2023</span>
          </div>
          <div className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa itaque odit architecto labore eum, aut rerum veritatis accusantium, accusamus nesciunt a, illum earum ab enim vel dicta illo pariatur quo!
          </div>
          <div className="genre">
            <strong>Action</strong>
          </div>
        </div>
    </div>
  )
}
