import NewArrow from '../assets/arrow3.jpg'
import {Link} from "react-router-dom"
function Third(){
    return (
        <>
            <div className="container">
      <div className="row">
        <div className="col-md-6 col-sm-12 img1 border border-3" > {/* background image  and margin top*/}
            <div className="row">
              <div className="col-10 edited-margin">
                <p className='text-white fs-4'><b>Learning</b></p>
                <p className='text-white'>The Learning Component of ATIRC is designed to equip students and professionals with the essential IT skills needed to thrive in today’s rapidly evolving digital landscape. We focus on emerging technologies and provide cutting-edge training</p>
              </div>
              <div className="col">
                <Link to={'/'}><img src={NewArrow} alt="" width={'30px'}  className='newarrow'/></Link>
              </div>
            </div>
        </div>
        
        <div className="col-md-6 col-sm-12 img2 border border-3"> {/* background image  and margin top*/}
            <div className="row">
              <div className="col-10 edited-margin">
                <p className='text-white fs-4'><b>Research</b></p>
                <p className='text-white'>LATIRC aims to be a leader in applied research across multiple cutting-edge fields. ATIRC will prioritize research initiatives in several cutting-edge fields. This focus aims to foster innovation and address pressing challenges across various sectors.</p>
              </div>
              <div className="col">
               <Link to={'/'}><img src={NewArrow} alt="" width={'30px'}  className='newarrow'/></Link>
              </div>
            </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 col-sm-12 img3 border border-3"> {/* background image  and margin top*/}
            <div className="row">
              <div className="col-10 edited-margin">
                <p className='text-white fs-4'><b>Incubator</b></p>
                <p className='text-white'>The incubation component of ATIRC is designed to support startups and entrepreneurs in transforming innovative ideas into viable businesses. The center provides a nurturing environment that fosters growth and development.</p>
              </div>
              <div className="col">
               <Link to={'/'}><img src={NewArrow} alt="" width={'30px'}  className='newarrow'/></Link>
              </div>
            </div>
        </div>
        
        <div className="col-md-6 col-sm-12 img4 border border-3"> {/* background image  and margin top*/}
            <div className="row">
              <div className="col-10 edited-margin">
                <p className='text-white fs-4'><b>Consulting</b> </p>
                <p className='text-white'>The consulting arm of ATIRC provides expert advice and solutions to organizations looking to enhance their technological capabilities and operational efficiencies. We are dedicated to delivering expert IT consulting services that empower organizations to enhance their technological capabilities and operational efficiency.</p>
              </div>
              <div className="col">
               <Link to={'/'}><img src={NewArrow} alt="" width={'30px'}  className='newarrow'/></Link>
              </div>
            </div>
        </div>
      </div>
    </div>
        </>
    )
}
export default Third