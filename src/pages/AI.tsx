import Nav from '../component/nav'
import First__long from '../component/first_long'
import Second_long from  '../component/second_long'
import Third_long from '../component/third_long'
import Head from '../component/sub_learning/sub_learning_head'
import Img from '../assets/aii.png'
import Footer from '../component/footer'
import PartA from '../component/aiA'
import PartB from '../component/aiB'
import PartC from '../component/aiC'
 
function AI() {
    
  return (
    <>
        <Nav />
        <Head course="Artificial Intelligence / Machine Learning (AI/ML)" note="This program introduces participants to the world of AI and ML. Learners explore fundamental algorithms, data processing techniques, and model building, applying AI/ML to real-world challenges. With a focus on practical applications in industries such as healthcare, finance, and transportation, this training is ideal for aspiring AI professionals." img={Img} />
        <First__long />
        <PartA />
        <Second_long/>
        <PartB />
        <Third_long/>
        <PartC />
        <Footer/>
    </>
  )
}

export default AI
