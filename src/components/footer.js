export default function Footer() {
    return (
        <div className="footer container-fluid">
            <div className="newsLetter">
            <form className="d-md-flex justify-content-center align-items-center gap-3">
                <label style={{color:"white",fontSize:"20px"}}>
                  Санал, хүсэлт
                </label>
                <div className="d-flex">
                <input className="form-control" type="text" name="name" style={{borderRadius:"50px",height:"50px",width:"300px",paddingRight:"50px",border:"none"}}>
                </input>
                <button className="btn btn-primary" style={{borderRadius:"100%",marginLeft:"-40px"}}><i class="bi bi-send-fill"></i></button>
                </div>
              </form>
            </div>
            <div className="contact d-flex flex-column justify-content-center align-items-center gap-4">
              <ul className="list-unstyled d-sm-flex gap-5">
                <li style={{color:"white"}}>Home</li>
                <li style={{color:"white"}}>About us</li>
                <li style={{color:"white"}}>News</li>
                <li style={{color:"white"}}>Jobs</li>
                <li style={{color:"white"}}>Contact</li>
                <li style={{color:"white"}}>Experience</li>
              </ul>
              <div className="d-sm-flex gap-4 justify-content-sm-center align-items-center">
                <a href="https://www.facebook.com/ErchGrand/"><div className="d-flex justify-content-start align-items-center gap-4">
                  <i className="bi bi-facebook" style={{color:"white",fontSize:"2rem"}}></i>
                  <div style={{color:"white",fontSize:"1rem"}}>Facebook</div>
                </div></a>
                <a href="https://www.google.com/maps/place/Erch+Grand+Auto+Center/@47.9261268,106.9949846,15.52z/data=!4m5!3m4!1s0x0:0x8ad7d17f9ec5e69!8m2!3d47.9239032!4d106.9924384"><div className="d-flex justify-content-start align-items-center gap-4">
                  <i className="bi bi-geo-alt" style={{color:"white",fontSize:"2rem"}}></i>
                  <div style={{color:"white",fontSize:"1rem"}}>Газрын зураг</div>
                </div></a>
                <a><div className="d-flex justify-content-start align-items-center gap-4">
                  <i class="bi bi-telephone" style={{color:"white",fontSize:"1.5rem"}}></i>
                  <div style={{color:"white",fontSize:"1rem"}}>+976 91118781</div>
                </div></a>
              </div>
            <div style={{color:"whitesmoke"}}>© Зохиогчийн бүх эрх Эрч Грандад
              харьяалагдана. 2023 он</div>
            </div>
        </div>
    )
}