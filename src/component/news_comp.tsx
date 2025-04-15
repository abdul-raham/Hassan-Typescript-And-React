import View from '../assets/news_view-icon.png'
import Image from '../assets/news_img.png'
import { Link } from 'react-router-dom'
import Arrow from '../assets/redarrow.jpg'
function News_comp (){
    return(
        <>
            <div className="col-md-4 col-sm-12 p-1 border rounded">
                <img src={Image} alt="" className='img-fluid rounded w-100'  />
                <div className="row">
                    <div className="col-9">
                        <p className='p-1'>updated on october 17, 2024</p>
                    </div>
                    <div className="col">
                        <img src={View} alt=""  className='img-fluid rounded w-50' />
                        <span>128</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col-8">
                        <p className='p-1'><b>revolutionizing security and decentralization transforming industries with artifitial intelligence</b></p>
                    </div>
                    <div className="col">
                        <Link to={'/'} className='text-decoration-none text-danger'><b>more </b><img src={Arrow} alt="" className='img-fluid rounded w-25 m-1' /></Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default News_comp