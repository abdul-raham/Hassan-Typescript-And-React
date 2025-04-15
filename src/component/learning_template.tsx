import {Link } from 'react-router-dom'
import WhiteArrow from '../assets/whitearrow.jpg'
function Template (props){
    return(
        <>
            <div className="col-md-6 col-sm-12 p-1 border rounded">
                <img src={props.img} alt="" className='img-fluid rounded w-100' />
                <h2 className='p-3'>{props.course}</h2>
                <p className='p-2'>{props.note}</p>
                <Link to={props.page} className='text-danger p-2 text-decoration-none'><b>Apply here </b><img src={WhiteArrow} alt="arrow" width={'20px'} className='m-1'/></Link>  
            </div>
        </>
    )
}
export default Template