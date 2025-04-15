import F_img from '../assets/img01.png'
import S_img from '../assets/img2.png'
import T_img from '../assets/img3.png'

function First__long(){
    return (
        <>
            <div className="container-fluid p-3 muted">
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <div className="col">
                                <img src={F_img} alt="" />  
                            </div>
                            <div className="col-8">
                                <ul>
                                    <li>Beginner- Level</li>
                                    <li>Intermediate-Level</li>
                                    <li>Advanced-Level </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="row">
                            <div className="col">
                                <img src={S_img} alt="" />  
                            </div>
                            <div className="col-8">
                                <ul>
                                    <li>6- 7 weeks</li>
                                    <li>10- 11 weeks</li>
                                    <li>12- 19 weeks </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="row">
                            <div className="col">
                                <img src={T_img} alt="" />  
                            </div>
                            <div className="col-8">
                                <ul>
                                    <li>Hybrid</li>
                                    <li>Onsite</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                     
                </div>
            </div>
        </>
    )
}
export default First__long