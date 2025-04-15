import Person from '../assets/contact_person.png'
function Contact_contact (){
    return (
        <>
             <div className="container-fluid  muted">
          <section className='row p-5'>
              <div className="col bg-white ">
                <h2>send message</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem nulla consequuntur magni deleniti facilis .</p>
                <form action="" method="post">
                    <div className="row">
                      <div className="col m-2">
                        <input type="text" name="" id="" placeholder='Full Name'  className='form-control'/>
                      </div>
                      <div className="col">
                      <input type="text" name="" id="" placeholder='Last Name'  className='form-control'/>
                      </div>
                    </div>
                    <input type="email" name="" id="" placeholder='Email'  className='form-control m-2'/>
                    <textarea name="" id="" placeholder='message' className='form-control m-2'></textarea>
                    <input type="submit" value="submit" className='btn btn-danger px-5 border-0 rounded-0 m-2' />
                </form>
               
              </div>
              <div className="col">
                <img src={Person} alt=""  className='img-fluid w-100'/>
              </div>
          </section>
        </div>
        </>
    )
}
export default Contact_contact