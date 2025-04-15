import Nav from '../component/nav' 
import Head from '../component/sub_learning/sub_learning_head'
import SD_img from '../assets/software.png'
import First__long from '../component/first_long'
import Second_long from  '../component/second_long'
import Third_long from '../component/third_long'
import PartA from '../component/sd_partA'
import PartB from '../component/sd_partB'
import PartC from '../component/sd_partC'
import Footer from '../component/footer'
 
function Software() {
    
  return (
    <>
        <Nav />
        <Head course="SOFTWARE DEVELOPER" note=" In this course, participants gain a deep understanding of software development methodologies like Agile and Waterfall. The training covers the entire software development lifecycle (SDLC), from design and coding to testing and deployment. Learners also build proficiency in Full Stack Development, handling both backend and frontend programming tasks" img={SD_img} />
        <First__long />
        <PartA />
        <Second_long />
        <PartB />
        <Third_long />
        <PartC />   
        <Footer />      
    </>
  )
}

export default Software
