import {Link } from 'react-router-dom'
import WhiteArrow from '../assets/whitearrow.jpg'

function PartA (){
    return (
        <>
            <div className="container p-3">
                <div className="row">
                    <div className="col">
                        <h2>course overview</h2>
                        <p>ATIRC’s data-focused training covers techniques for extracting valuable insights from large datasets. Students learn how to apply data analytics, data science, and mining methods to drive business decisions. The course also emphasizes Big Data tools and platforms, enabling participants to work with complex data sets and uncover patterns</p>
                        <Link to={'/'} className='text-danger text-decoration-none' >download  <img src={WhiteArrow} alt="" className='img-fluid' width={"20px"}/></Link>
                    </div>
                    <div className="col">
                    <div className="row">
                        <div className="col"> <h2>#100,000</h2></div>
                        <div className="col"><del>#200,000</del></div>
                    </div>
                    <p><b>Curriculum</b></p>
                    <ul className='list'>
                        <li>Introduction to Excel for Data Analysis</li>
                        <li>Intermediate Excel for Data Analysis</li>
                        <li>Pivot Tables for data analysis</li>
                        <li>Advanced Excel for Data Analysis</li>
                        <li>-Excel Knowledge Application</li>
                        <li>SQL for Data Analysis</li>
                    </ul>
                        <Link to={'/'} className='text-danger text-decoration-none'>register <img src={WhiteArrow} alt="" className='img-fluid' width={"20px"}/></Link> {/* confirm the link to register */}
                    </div>
                </div>
            </div>
        </>
    )
}
export default PartA