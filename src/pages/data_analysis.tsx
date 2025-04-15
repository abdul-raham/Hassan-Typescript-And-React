import Nav from '../component/nav'
import First__long from '../component/first_long'
import Second_long from  '../component/second_long'
import Third_long from '../component/third_long'
import Head from '../component/sub_learning/sub_learning_head'
import Img from '../assets/data_ana.png'
import Footer from '../component/footer'
import PartA from '../component/dataA'
import PartB from '../component/dataB'
import PartC from '../component/dataC'
 
function Data() {
    
  return (
    <>
        <Nav /> 
        <Head course="Data Analytics" note="Professionals interested in learning how to use data to inform decisions and propel company success are the target audience for this course. This program will give you the abilities and information required to transform data into insights that will assist your company in reaching its objectives, regardless of your career goals as a business analyst, marketer, data scientist, or management. This curriculum, which emphasizes useful, real-world applications, will help you develop into a competent and self-assured data analyst who can handle challenging data problems with ease" img={Img} />
        <First__long/>
        <PartA/>
        <Second_long/>
        <PartB/>
        <Third_long/>
        <PartC/>
        <Footer/>
    </>
  )
}

export default Data
