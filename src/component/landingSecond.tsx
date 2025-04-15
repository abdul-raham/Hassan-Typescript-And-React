import FineGirl from '../assets/first-img-index.png'
import {Link} from "react-router-dom"
import Arrow from '../assets/arrow2.jpg'
function Second() {
    return(
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                    <img src={FineGirl} alt="finegirl"  className='img-fluid'/>  
                    </div>
                    <div className="col-md-6 col-sm-12 p-2">
                        <p className='text-danger  '><b>WHO WE ARE</b> </p>
                        <p className='fs-4'><b>Igniting Innovation, Empowering Africa's Tech Future</b></p>
                        <p><strong>Advanced Technological Incubation and Research Center (ATIRC),</strong> is a technological research and incubation center with the mission to empower Africa’s Young Minds, ignite innovation across the continent and dispel the myth that world-class tech solutions can’t emerge from African Soil. Founded with a vision to bridge the gap between raw talent and global opportunities   ATIRC stands as a beacon of hope for aspiring tech enthusiasts, entrepreneurs, and researchers aged 15 to 35. Our vision is to become Africa's leading technology incubation and research center, driving advancements in emerging technologies and providing a platform for young innovators to thrive</p>
                        <Link to='/'><button type="button" className='bg-danger text-white border-0 px-4 py-1 text-capitalize'>learn more<img src={Arrow} alt="logo" width={'40px'} className='p-1'/>  </button></Link>
                    </div>
                </div>
            </div>

            <div className="container my-3 text-center">
                <div className="row">
                    <div className="col">
                        <p className="text-danger"><b>WHAT WE DO</b>  </p>
                        <p className='fs-4'><b>Igniting Innovation, Empowering Africa's Tech Future</b> </p>
                        <p>We offer state-of-the-art research facilities, upskilling programs, and incubation services to cultivate the next generation of African tech leaders. Through our commitment to innovation, collaboration, and global impact, we are reshaping Africa’s technological future and empowering youth to contribute meaningfully to the world’s digital economy</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Second 