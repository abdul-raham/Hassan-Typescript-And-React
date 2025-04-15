import Nav from '../component/nav'
 
 
function Error() {
    
  return (
    <>
        <Nav />
        <div className="container text-center">
          <p className='bg-danger text-capitalize fs-3 m-3 p-2 text-white'>this is an error page because this page does not exist.</p>
        </div>
    </>
  )
}

export default Error
