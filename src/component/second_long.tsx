import F_img from '../assets/img01.png'
import S_img from '../assets/img2.png'
import T_img from '../assets/img3.png'
function Second_long(){
    return(
        <>
            <div className="container-fluid muted">
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <div className="col">
                                <img src={F_img} />{/* image */}
                            </div>
                            <div className="col-8">
                                <p className='mt-3'>Intermediate</p>
                            </div>
                        </div>
                    </div> 

                    <div className="col">
                        <div className="row">
                            <div className="col">
                                <img src={S_img}/>{/* image */}
                            </div>
                            <div className="col-8">
                                <p className='mt-3'>11 weeks</p>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="row">
                            <div className="col">
                                <img src={T_img} />{/* image */}
                            </div>
                            <div className="col-8">
                                <ul>
                                    <li>Onsite</li>
                                    <li>Hybrid</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
export default Second_long