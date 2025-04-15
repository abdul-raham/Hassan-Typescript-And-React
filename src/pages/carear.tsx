import Nav from '../component/nav'
import Job from '../assets/car_job.png'
import Intend from '../assets/car_intenship.png'
import Template from '../component/learning_template'
import Carear_comp from '../component/career_comp'
import Footer from '../component/footer'
import Arrow from '../assets/whitearrow.jpg'

 
function Carear() {
    
  return (
    <>
        <Nav />
        <div className="container-fluid general-banner2 ">   
          <h1  className='edited_margin2 text-white px-5'>career</h1>   
          <p className='text-white px-5'>
            home <img src={Arrow} alt="" className='m-2 img-fluid'  width={'20px'}/>
            career
          </p>
        </div>
        
        <div className="container text-center">
          <h2><b>make your move towards a new career path</b></h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In sunt itaque natus voluptatem eveniet vel ab ipsa culpa debitis? Deserunt soluta facili</p>
        </div>

        <div className="container ">
          <div className="row">
          <Template img={Intend} course='internship application' note="Lorem, ipsum dolor sit amet consectetur adipisicing elit. In sunt itaque natus voluptatem eveniet vel ab ipsa culpa debitis? Deserunt soluta facilir" page={'/Intend'} />

          <Template img={Job} course="job application" note="Lorem, ipsum dolor sit amet consectetur adipisicing elit. In sunt itaque natus voluptatem eveniet vel ab ipsa culpa debitis? Deserunt soluta facili" page={'/Job'} />
          </div>
        </div>

        <div className="container-fluid muted p-5">
            <div className="container  m-3 p-3 text-center">
              <h2><b>we're hiring</b></h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In sunt itaque natus voluptatem eveniet vel ab ipsa culpa debitis? Deserunt soluta facili</p>
            </div>

            <Carear_comp />
            <Carear_comp />
            <Carear_comp />
            <Carear_comp />
            <Carear_comp />
          </div>
          
          
          <Footer/>
        
    </>
  )
}

export default Carear
