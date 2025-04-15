import { Link } from 'react-router-dom'
function Carear_comp() {
    return (
        <>
            <div className="row">
              <div className="col-md-8 col-sm-12">
                <b>data analysis</b><br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ab eum magnam minima delectus vitae quis. Delectus quis maxime fugiat at ad voluptatum minus.</p>
              </div>
              <div className="col">
                <Link to={'/Job'} className='btn px-5  bg-white text-danger'>apply</Link>
              </div>
            </div>
            <hr />
       
        </>
    )
}
export default Carear_comp