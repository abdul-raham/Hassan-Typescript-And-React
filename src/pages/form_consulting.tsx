import Nav from '../component/nav'
import Footer from '../component/footer'
 
function ConsultingForm() {
    
  return (
    <>
        <Nav />
        <section className='consulting-col-page  p-3'>
            <section className='text-center'>
                <b className='text-capitalize '>consulting application</b>
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
                  <label htmlFor="p_text-capitalize number">Phone Number</label>
                  <input className='w-100 form-control' type="number" name="" id="" placeholder='Enter Phone Number' />
                  <section className='text-center'>
                      <input type="submit" value="submit" className='bg-danger text-white px-4 py-2 border-0 text-capitalize m-3' />
                  </section>
                  
                </form>
            </section> 
        </section> 
        <Footer />
    </>
  )
}

export default ConsultingForm
