import Nav from '../component/nav'
import Head from '../component/sub_learning/sub_learning_head'
import Ui_img from '../assets/ui.png'
import First__long from '../component/first_long'
import Second_long from  '../component/second_long'
import Third_long from '../component/third_long'
import Footer from '../component/footer'
import PartA from '../component/ui_partA'
import PartB from '../component/ui_partB'
import Partc from '../component/ui_partC'

function UI() {
    
  return (
    <>
        <Nav />
        <Head course="UI/UX + GRAPHICS DESIGN" note="This program focuses on the principles of user interface (UI) and user experience (UX) design, along with graphic design. Students learn to create intuitive, aesthetically pleasing interfaces while optimizing user interactions. The course also covers visual design techniques, empowering learners to design impactful and functional digital experiences for web and mobile platforms." img={Ui_img} />
        <First__long />    
        <PartA  />     
        <Second_long />
        <PartB />
        <Third_long />
        <Partc />
        <Footer />
    </>
  )
}

export default UI
