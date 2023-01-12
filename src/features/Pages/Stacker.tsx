import {useState, createContext, useEffect} from 'react'
import Landing from "./Landing/Landing"
import Contact from "./Contact/Contact"
import Experience from "./Experience/Experience"
import Projects from "./Projects/Projects"
import Nav from '../Nav/Nav'


//TODO Responsive design, especially where there is text (1,2,4 page still need)
//TODO Add archive to projects
//TODO Add animations to project screen, possibly video hover to preview
//TODO (optional) Add archived projects to projects
//TODO (optional) Add zindex to edgecontainer
export const PageAnimationContext = createContext({
    visitedContext:{first: true, second: false, third: false, fourth: false},
    setVisitedContext: () => {}
})

const Stacker = () => {
    const [visitedContext, setVisitedContext] = useState({
        first: true,
        second: false,
        third: false,
        fourth: false
    })
    const getWindowWidth = () => {
        return window.innerWidth
    }
    const [windowWidth, setWindowWidth] = useState(getWindowWidth())

    useEffect(() => {
        const handleResize = () => setWindowWidth(getWindowWidth())
    
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])
       
    
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
                    setVisitedContext(s => ({...s, second: true}))
                    slide.second ? setSlide({...slide, second: false, third: false}) : setSlide({...slide, first: true})
                    return
                case 'third': 
                    setVisitedContext(s => ({...s, third: true}))
                    slide.third ? setSlide({...slide, third: false}) : setSlide({...slide, first: true, second: true})
                    return
                case 'fourth':
                    setVisitedContext(s => ({...s, fourth: true}))
                    setSlide({first: true, second: true, third: true})
            }
    }

    return(
        <PageAnimationContext.Provider value={{visitedContext, setVisitedContext: Function}}>
            <div id='stackParent'>
                <Landing slide={slide} handleSlide={handleSlide} activePage={activePage} windowWidth={windowWidth} />
                <Experience slide={slide} handleSlide={handleSlide} activePage={activePage} windowWidth={windowWidth} />
                <Projects slide={slide} handleSlide={handleSlide} activePage={activePage} windowWidth={windowWidth} />
                <Contact slide={slide} handleSlide={handleSlide} activePage={activePage} windowWidth={windowWidth} />
                <Nav slide={slide} handleSlide={handleSlide} activePage={activePage} windowWidth={windowWidth} />
            </div>
            
        </PageAnimationContext.Provider>
    )
}
export default Stacker