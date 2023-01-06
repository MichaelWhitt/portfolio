import {useState} from 'react'
import Landing from "./Landing/Landing"
import Contact from "./Contact/Contact"
import Experience from "./Experience/Experience"
import Projects from "./Projects/Projects"
const Stacker = () => {
    const [slide, setSlide] = useState({
        first: false,
        second: false,
        third: false
    })
    const [activePage, setActivePage] = useState('first')

    const handleSlide = (position) => {
            setActivePage(position)
            switch(position) {
                case 'first': 
                    slide.first ? setSlide({...slide, first: false, second: false, third: false}) : setSlide({...slide})
                    return
                case 'second': 
                    slide.second ? setSlide({...slide, second: false, third: false}) : setSlide({...slide, first: true})
                    return
                case 'third': 
                    slide.third ? setSlide({...slide, third: false}) : setSlide({...slide, first: true, second: true})
                    return
                case 'fourth':
                    setSlide({first: true, second: true, third: true})
            }
    }

    return(
        <div id='stackParent'>
            <Landing slide={slide} handleSlide={handleSlide} activePage={activePage} />
            <Experience slide={slide} handleSlide={handleSlide} activePage={activePage} />
            <Projects slide={slide} handleSlide={handleSlide} activePage={activePage} />
            <Contact slide={slide} handleSlide={handleSlide} activePage={activePage} />
        </div>
    )
}
export default Stacker