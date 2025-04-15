import Nav from '../component/nav'
import Contact_contact from '../component/contact_comp'
import Map from '../assets/contact_map.png'
import Footer from '../component/footer'
import Arrow from '../assets/whitearrow.jpg'

function Contact() {
    
  return (
    <>
        <Nav />
        <div className="container-fluid general-banner">   
          <h1 className='edited_margin2 text-white px-5'>contact us</h1> {/* add margin top */}
          <p className='text-white px-5'>
            home <img src={Arrow} alt="" className='m-2 img-fluid'  width={'20px'}/> {/* for arrow */}
            contact us
          </p>
        </div>

        <Contact_contact/>
          

        <div className="container-fluid text-center m-3">
            <h2>find us on google map</h2> 
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quod ab aliquid voluptate optio consequatur soluta illum aliquam </p> 
            <img src={Map} alt=""  className='img-fluid w-75' />
        </div>  

        <Footer />
    </>
  )
}

export default Contact
