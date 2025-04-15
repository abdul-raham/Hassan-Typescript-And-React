import Logo from '../assets/logo.png'
import {Link} from "react-router-dom"
/* import Facebook from '../assets/foo_face.png'
import Instagram from '../assets/foo_insta.png'
import Xa from '../assets/foo_x.png'
import Linkin from '../assets/foo_linkin.png'
import Tictok from '../assets/foo_tic.png'
import Youtube from '../assets/foo_you.png' */
function Footer() {
    
  return (
    <>  
        <div className="container-fluid footer001 p-4">
            <div className="row">
                <div className="col-3">
                    <img src={Logo} alt="logo" className='img-fluid m-2' width={'20px'} />
                    <b className='text-capitalize m-1'>ATIRC</b><br />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate maxime distinctio, recusandae maiores saepe at.</p>
                    <div className="row">
                        {/* this side is for the icons  */}
                        {/* <div className="col-2 p-1 "><a href="#"><img src={Facebook} alt="" /></a></div>
                        <div className="col-2 p-1 "><a href="#"><img src={Instagram} alt="" /></a></div>
                        <div className="col-2 p-1 "><a href="#"><img src={Xa} alt="" /></a></div>
                        <div className="col-2 p-1 "><a href="#"><img src={Linkin} alt="" /></a></div>
                        <div className="col-2 p-1 "><a href="#"><img src={Tictok} alt="" /></a></div>
                        <div className="col-2 p-1 "><a href="#"><img src={Youtube} alt="" /></a></div> */}
                    </div>
                </div>
                <div className="col">
                    <b className='text-capitalize m-1'>Product</b><br />
                    <Link className='text-black text-capitalize text-decoration-none' to='/Who'>who we are</Link><br />
                    <Link className='text-black text-capitalize text-decoration-none' to='/News'>News</Link>  <br />
                    <Link className='text-black text-capitalize text-decoration-none' to='/Carear'>carear</Link><br />
                    <Link className='text-black text-capitalize text-decoration-none' to='/Contact'> contact</Link>
                </div>
                <div className="col">
                    <b className='text-capitalize m-1'>company</b><br />
                    <Link className='text-black text-capitalize text-decoration-none' to=''>about</Link><br />
                    <Link className='text-black text-capitalize text-decoration-none' to=''>FAQs</Link><br />
                    <Link className='text-black text-capitalize text-decoration-none' to='/news'>News</Link>  <br />
                </div>
                <div className="col">
                    <b className='text-capitalize m-1'>legal</b><br />
                    <Link className='text-black text-capitalize text-decoration-none' to='/'>terms</Link><br />
                    <Link className='text-black text-capitalize text-decoration-none' to='/'>privacy</Link><br />
                    <Link className='text-black text-capitalize text-decoration-none' to='/'>security</Link>  <br />
                </div>
                <div className="col-3">
                    <b className='text-capitalize m-1'>contact</b>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse dist </p>
                    <p>contact@ATRIC.com</p>
                    <p>+234 700 001 000</p>
                </div>
                 
            </div>
        </div>
         
    </>
  )
}

export default Footer
