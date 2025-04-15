import Rows from '../assets/Healthtech 1.png'
import Redarrow from '../assets/redarrow.jpg'
import WhiteArrow from '../assets/whitearrow.jpg'
import {Link} from "react-router-dom"
import Arrow from '../assets/arrow2.jpg'
function Forth(){
    return (
        <>
                <div className="container text-center m-4"> 
    <Link to='/'><button type="button" className='bg-danger text-white border-0 px-4 py-1 text-capitalize mt-4'>learn more<img src={Arrow} alt="logo" width={'40px'} className='p-1'/>  </button></Link>
    </div>
    
    <div className="container down_banner text-white"> {/* background image */}
        <p className='edited_margin fs-3'>Explore careers where you can make a difference </p>
        <p className='fs-5'>Unlock Your Future. Innovate, Learn, Lead with ATIRC</p>
    </div> 

    <div className="container text-center my-5">
      <p className='fs-3'> <b>get updated news on trending technology</b></p>
      <p className='fs-5'>get updated news on trending technology</p>
    </div>

    <div className="container">
      <div className="row">

          <div className="col-md-4 col-sm-12 border border-3 border rounded">{/* add border */}  {/* this is a card */}
              <img src={Rows} alt="" className='img-fluid p-1'  /> {/* add image  and width of 100*/}
              <div className="row">
                <div className="col-10"><p>updated on october 17, 2024</p></div>
                <div className="col">128</div>
              </div>
              <div className="row">
                <div className="col-9"><p>Revolutionizing Security and Decentralizatio Transforming Industries with Artificial Intelligencen</p></div>
                <div className="col">
                  <Link to={'/'}>
                  <span className='text-danger'><b>more </b><img src={Redarrow} alt="" width={'20px'} /> </span>
                  </Link>
                
                  </div> 
              </div>
          </div>

          <div className="col-md-4 col-sm-12 border border-3 border rounded">{/* add border */}  {/* this is a card */}
              <img src={Rows} alt="" className='img-fluid p-1'  /> {/* add image  and width of 100*/}
              <div className="row">
                <div className="col-10"><p>updated on october 17, 2024</p></div>
                <div className="col">128</div>
              </div>
              <div className="row">
                <div className="col-9"><p>Revolutionizing Security and Decentralizatio Transforming Industries with Artificial Intelligencen</p></div>
                <div className="col">
                  <Link to={'/'}>
                  <span className='text-danger'><b>more </b><img src={Redarrow} alt="" width={'20px'} /> </span>
                  </Link>
                
                  </div> 
              </div>
          </div>

          <div className="col-md-4 col-sm-12 border border-3 border rounded">{/* add border */}  {/* this is a card */}
              <img src={Rows} alt="" className='img-fluid p-1'  /> {/* add image  and width of 100*/}
              <div className="row">
                <div className="col-10"><p>updated on october 17, 2024</p></div>
                <div className="col">128</div>
              </div>
              <div className="row">
                <div className="col-9"><p>Revolutionizing Security and Decentralizatio Transforming Industries with Artificial Intelligencen</p></div>
                <div className="col">
                  <Link to={'/'}>
                  <span className='text-danger'><b>more </b><img src={Redarrow} alt="" width={'20px'} /> </span>
                  </Link>
                
                  </div> 
              </div>
          </div>
          
         

      </div>
    </div>

    <div className="container text-center bg-danger p-3   text-white mt-3 mb-3">
        <p className='fs-3'>Explore careers where you can make a difference </p>
        <p className='fs-5'>Unlock Your Future. Innovate, Learn, Lead with ATIRC.</p>
        <Link to='/'><button type="button" className='bg-white text-danger border-0 px-4 py-1 text-capitalize mt-4'><b>learn more</b><img src={WhiteArrow} alt="logo" width={'40px'} className='p-1'/>  </button></Link>
    </div>

        </>
    )
}
export default Forth