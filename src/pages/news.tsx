import Nav from '../component/nav'
import Footer from '../component/footer'
import News_comp from '../component/news_comp'
import Arrow from '../assets/whitearrow.jpg'
 
function News() {
    
  return (
    <>
        <Nav />
        <div className="container-fluid general-banner3">  
          <h1 className='edited_margin2 text-white px-5'>news</h1>  
          <p   className='text-white px-5'>
            home  <img src={Arrow} alt="" className='m-2 img-fluid'  width={'20px'}/>
            news
          </p>
        </div>

        <section className='container text-center m-4'>
            <h4><b>NEWS</b></h4>
            <p className='mb-5'>get updated news on trending technology</p>
             
             <div className="row">
              <div className="col">
                <select name="" id="" className='form-control'>
                  <option value="">All Topics</option>
                  <option value="">--------</option>
                  <option value="">--------</option>
                  <option value="">--------</option>
                </select>
              </div>
              <div className="col">
                <select name="" id="" className='form-control'>
                  <option value="">All Types</option>
                  <option value="">--------</option>
                  <option value="">--------</option>
                  <option value="">--------</option>
                </select>
              </div>
              <div className="col">
                <select name="" id="" className='form-control'>
                  <option value="">All Dates</option>
                  <option value="">--------</option>
                  <option value="">--------</option>
                  <option value="">--------</option>
                </select>
              </div>
             </div>
        </section>

        <div className="container p-5 pt-1">
          <div className="row">
            <News_comp />
            <News_comp />
            <News_comp />
            <News_comp />
            <News_comp />
            <News_comp />
            <News_comp />
            <News_comp />
            <News_comp />
            <News_comp />
            <News_comp />
            <News_comp />
          </div>
        </div>

        <Footer />
    </>
  )
}

export default News
