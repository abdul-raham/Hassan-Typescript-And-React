import Nav from '../component/nav'
import Arrow from '../assets/whitearrow.jpg'
import Light from '../assets/consu_light.png'
import Person from '../assets/consu_person.png'
import Bulb from '../assets/cobsu_bulb.png'
import Contact_contact from '../component/contact_comp'
import Footer from '../component/footer'
 
function Consulting() {
    
  return (
    <>
        <Nav />
        <div className="container-fluid general-banner">  
          <h1  className='edited_margin2 text-white px-5'>consulting</h1>  
          <p className='text-white px-5'>
            home  <img src={Arrow} alt="" className='m-2 img-fluid'  width={'20px'}/>    
            consulting
          </p>
        </div>

        <div className="container text-center p-2">
          <h2><b>get in touch with us</b></h2>
          <p>ATIRC’s IT consulting services offer strategic guidance to organizations looking to optimize their technological infrastructure. Consultants assist in IT strategy development, systems integration, cybersecurity, and cloud computing solutions. The goal is to help businesses enhance their operational efficiencies and stay ahead of technological trends through customized, innovative solutions.
          </p>
        </div>

        <div className="container">
          <div className="row">
            <div className="col">
              <h2><b>Our story</b></h2>
              <p>At <b>ATIRC</b>, we believe that Africa’s greatest asset is its youth. With limitless potential and untapped talent, the next generation of tech innovators, leaders, and entrepreneurs is ready to emerge. Yet, the path to success has often been clouded by limited access to resources, training, and global opportunities. That's where we come in. <br />
Founded with a bold mission to <b>empower Africa's young minds,</b>  ATIRC stands as a beacon of transformation. Our <b>Advanced Technological Incubation and Research Center </b> is not just a physical space—it's a vibrant ecosystem designed to <b>ignite innovation</b>  and <b>nurture talent</b> . <br />
From <b>cutting-edge research labs</b>  to <b>world-class incubation programs, </b> ATIRC provides a platform where <b>creativity</b>  meets <b>collaboration</b> , and where ideas transform into impactful solutions. Our story is one of vision, passion, and empowerment. We are on a mission to redefine what is possible for African youth in tech. The future of technology is <b>African</b>, and at ATIRC, we’re giving today’s youth the tools to lead tomorrow’s digital revolution.</p>
            </div>
            <div className="col">
              <img src={Person} alt=""  className='img-fluid w-100 rounded border'/>  
            </div>
          </div>
        </div>

        <div className="container-fluid muted2 p-5">
          <div className="row">
            <div className="col-md-8 col-sm-6">
              <h2 className='text-danger'><b>HOW WE DO IT</b></h2>
              <p className='fs-3'><b>Bridge the gap of innovation and Research </b>  </p>
            </div>
            <div className="col">
              <img src={Bulb} alt="" className='img-fluid rounded border'/>  
            </div>
          </div>

          <div className="row p-4">
            <div className="col">
               <img src={Light} alt="" className='img-fluid rounded border'/> 
              <h2><b>Accessibility</b></h2>
              <p>We strive to make our programs, resources, and mentorship accessible to young tech enthusiasts across Africa, breaking down barriers to entry in the tech world.</p>
            </div>
            <div className="col">
               <img src={Light} alt="" className='img-fluid rounded border'/> 
              <h2><b>Accessibility</b></h2>
              <p>We strive to make our programs, resources, and mentorship accessible to young tech enthusiasts across Africa, breaking down barriers to entry in the tech world.</p>
            </div>
            <div className="col">
               <img src={Light} alt="" className='img-fluid rounded border'/> 
              <h2><b>Accessibility</b></h2>
              <p>We strive to make our programs, resources, and mentorship accessible to young tech enthusiasts across Africa, breaking down barriers to entry in the tech world.</p>
            </div>
          </div>
        </div>


        <Contact_contact />

         <Footer />
          
    </>
  )
}

export default Consulting
