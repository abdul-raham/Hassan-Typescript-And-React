import Nav from '../component/nav'
import {Link} from "react-router-dom"
import Footer from '../component/footer'
import Pic from '../assets/consu_person.png'
import Arrow from '../assets/arrow2.jpg'
import Arrow2 from '../assets/arrow3.jpg'
import News_comp from '../component/news_comp'
import White_arrow from '../assets/whitearrow.jpg'

function Who() {
    
  return (
    <>
        <Nav />
        <div className="container-fluid general-banner4"> 
          <p className='ed_padding text-white fs-2 w-50 '>Igniting Innovation, Empowering Africa's Tech Future</p>
          <p className='text-white w-75'>to become africa's leading edtech and technology research center, driving innovation and empowering the next generation to lead in global markets. through research, community building and collaboration with industry partners. ATRIC is creating a foundation for lasting impact in africa's technological landscape</p>
          <Link to='/'><button className='bg-danger text-white text-capitalize px-4 py-1 border-0 rounded' type="button">learn more <img src={Arrow} className='img-fluid m-2' width={'25px'}/></button></Link>
        </div>
          
        <div className="container   p-3">
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <img src={Pic} alt="" className='img-fluid border rounded w-100'/>
              </div>
              <div className="col">
                <p className='text-danger fs-4'><b>who we are</b> </p>
                <p className='fs-5'><b> Igniting Innovation, Empowering Africa's Tech Future </b></p>
                <p><b>advanced technology incubation and research center (ATRIC)</b> is a technological research and incubation center with the mission to empower africa's young minds, ignite innovation across the continent and dispel the myth that world-class tech solutions can't emerge from african soil. founded with a vision to bridge the gap between raw talent and global opportunities. ATRIC stands as a beacon to hope the aspiring tech enthusiasts, entrepreneurs and researchers aged 15 to 35. our vision is to become africa's leading technology incubation and research center, driving advancements in emerging technologies and providing a platform for young innovators to thrive.</p>
                <Link to='/'><button className='bg-danger text-white text-capitalize px-4 py-3 border-0 rounded' type="button">learn more <img src={Arrow} className='img-fluid m-2' width={'25px'}/></button></Link>
              </div>
            </div>
        </div>

        <div className="container text-center">
          <p className='text-danger fs-4'><b>what we do</b></p>
          <p className='fs-5'><b>Igniting Innovation, Empowering Africa's Tech Future</b></p>
          <p>We offer state-of-the-art research facilities, upskilling programs, and incubation services to cultivate the next generation of African tech leaders. Through our commitment to innovation, collaboration, and global impact, we are reshaping Africa’s technological future and empowering youth to contribute meaningfully to the world’s digital economy</p>
        </div>

        <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-12 border rounded p-2">
              <img src={Pic} alt="" className='img-fluid border rounded w-100'/>
                <div className="row">
                  <div className="col-9">
                    <p className='fs-4'><b>learning</b></p>
                    <p>The Learning Component of ATIRC is designed to equip students and professionals with the essential IT skills needed to thrive in today’s rapidly evolving digital landscape. We focus on emerging technologies and provide cutting-edge training</p>
                  </div>
                  <div className="col-3">
                    <img src={Arrow2} alt="" width={'30px'} className='img-fluid  arrow__spp'/>  
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-sm-12 border rounded p-2">
                <img src={Pic} alt="" className='img-fluid border rounded w-100'/>
                <div className="row">
                  <div className="col-9">
                    <p>Research</p>
                    <p>ATIRC aims to be a leader in applied research across multiple cutting-edge fields. ATIRC will prioritize research initiatives in several cutting-edge fields. This focus seeks to foster innovation and address pressing challenges across various sectors.</p>
                  </div>
                  <div className="col-3">
                  <img src={Arrow2} alt="" width={'30px'} className='img-fluid  arrow__spp'/> 
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-sm-12 border rounded p-2">
                <img src={Pic} alt="" className='img-fluid border rounded w-100'/>
                <div className="row">
                  <div className="col-9">
                    <p>Incubation</p>
                    <p>The incubation component of ATIRC is designed to support startups and entrepreneurs in transforming innovative ideas into viable businesses. The center provides a nurturing environment that fosters growth and development.</p>
                  </div>
                  <div className="col-3">
                    <img src={Arrow2} alt="" width={'30px'} className='img-fluid  arrow__spp'/> 
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-sm-12 border rounded p-2">
                <img src={Pic} alt="" className='img-fluid border rounded w-100'/>
                <div className="row">
                  <div className="col-9">
                    <p>Consulting</p>
                    <p>The consulting arm of ATIRC provides expert advice and solutions to organizations looking to enhance their technological capabilities and operational efficiencies. We are dedicated to delivering expert IT consulting services that empower organizations to enhance their technological capabilities and operational efficiency.</p>
                  </div>
                  <div className="col-3">
                    <img src={Arrow2} alt="" width={'30px'} className='img-fluid  arrow__spp'/> 
                  </div>
                </div>
              </div>

            </div>
        </div>

        <div className="container text-center m-5"> 
          <Link to='/'><button className='bg-danger text-white text-capitalize px-4 py-3 border-0 rounded' type="button">learn more <img src={Arrow} className='img-fluid m-2' width={'25px'}/></button></Link>
        </div>

        <div className="container-fluid general-banner5">  
            <p className='text-white fs-3 edited_margin w-75'>Exolore careers where you can make a difference</p>
            <p className='text-white w-50'>unlock your future, Innovate, learn, lead, with ATRIC</p>
        </div>

        <div className="container text-center p-3">
      <p className='fs-2'> <b>get updated news on trending technology</b></p>
      <p className='fs-5'>get updated news on trending technology</p>
    </div>

    <div className="container p-5 pt-1">
      <div className="row">
        <News_comp />
        <News_comp />
        <News_comp />
      </div>
    </div>

    <div className="container bg-danger p-3 text-center mb-2 text-white">
        <p className='fs-4'>Explore careers where you can make a difference </p>
        <p>Unlock Your Future. Innovate, Learn, Lead with ATIRC.</p>
        <Link to='/'><button className='bg-white text-danger text-capitalize px-4 py-2 border-0 rounded' type="button">learn more <img src={White_arrow} className='img-fluid m-2' width={'25px'}/></button></Link>
    </div>

    <Footer/>

    </>
  )
}

export default Who
