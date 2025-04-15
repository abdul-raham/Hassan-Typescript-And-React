import Nav from '../component/nav'
import Footer from '../component/footer'

function ResearchForm() {
    
  return (
    <>
        <Nav />
        <section className='consulting-col-page  p-3'>
            <section className='text-center'>
                <b className='text-capitalize '>research application</b>
            </section>

            <section className='bg-white m-4 p-4'>
                <div className='  m-4 text-center'>
                  <span className='text-capitalize  '>fill your information appropraitely</span>
                </div>
                <form action="" method="post">
                  <div className="row">
                    <div className="col">
                      <label className='text-capitalize form-label' htmlFor="firstName">first name</label>
                      <input className='w-100 form-control' type="text" name="" id="" placeholder='first name' />
                    </div>
                    <div className="col">
                      <label className='text-capitalize form-label' htmlFor="lastname">last name</label>
                      <input className='w-100 form-control' type="text" name="" id="" placeholder='last name' />
                    </div>
                  </div>

                  <label className='text-capitalize form-label' htmlFor="email">email</label> <br />
                  <input className='w-100 form-control' type="email" name="" id=""  placeholder='Email'/>

                  <label className='text-capitalize form-label' htmlFor="job">job position</label><br />
                  <select name="" id="" className='w-100 form-control'>
                    <option value="">position A</option>
                    <option value="">position B</option>
                    <option value="">position C</option>
                  </select>
                  <br />
                  <div className="row">
                    <div className="col">
                      <label className='text-capitalize form-label' htmlFor="phone">phone</label>
                      <input className='w-100 form-control' type="text" name="" id="" placeholder='phone' />
                    </div>
                  </div>
                  <label htmlFor="text-capitalize form-label">Address</label>
                  <input className='w-100 form-control' type="text" name="" id="" placeholder='Enter address' />

                  <label htmlFor="resume"  className='text-capitalize form-label'>upload resume</label><br />
                  <div className='text-center upload_class'>
                    <p className='text-capitalize'>drag file here or click the button below</p>
                    <input type="file" name="" id="" />
                  </div>

                  <label htmlFor="resume"  className='text-capitalize form-label'>upload application letter</label><br />
                  <section className='text-center upload_class'>
                    <p className='text-capitalize'>drag file here or click the button below</p>
                    <input type="file" name="" id="" />
                  </section>

                  <section className='text-center'>
                      <input type="submit" value="Apply" className='bg-danger text-white px-4 py-2 border-0 text-capitalize m-3' />
                  </section>
                  
                </form>
            </section> 
        </section> 
        <Footer/>
 
    </>
  )
}

export default ResearchForm
