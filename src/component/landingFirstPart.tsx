import Logo from '../assets/logo.png'
import {Link} from "react-router-dom"
import Arrow from '../assets/arrow2.jpg'
function First(){
    return(
        <>
            <section className='container-fluid bg-image'>  
          <div className='text-end pt-5'> 
            <img src={Logo} alt="logo" width={'50px'} /> 
            <span className='text-white efs-1'><b>ATRIC</b></span>
          </div>

          <div className='text-white text-center pt-5'> 
            <p className='fs-2'>Igniting Innovation, Empowering Africa's Tech Future</p>
            <p className='fs-5 epx-5'>to become africa's leading edtech and technology research center, driving innovation and empowering the next generation to lead in global markets. through research, community building and collaboration with industry partners. ATRIC is creating a foundation for lasting impact in africa's technological landscape</p>
             <Link to='/'><button type="button" className='bg-danger text-white border-0 px-4 py-1 text-capitalize mt-4'>learn more<img src={Arrow} alt="logo" width={'40px'} className='p-1'/>  </button></Link>
          </div>
        </section>
        </>
    )
}
export default First