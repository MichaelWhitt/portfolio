import {useState, createContext} from 'react'
import Landing from "./Landing/Landing"
import Contact from "./Contact/Contact"
import Experience from "./Experience/Experience"
import Projects from "./Projects/Projects"

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
                <Landing slide={slide} handleSlide={handleSlide} activePage={activePage} />
                <Experience slide={slide} handleSlide={handleSlide} activePage={activePage} />
                <Projects slide={slide} handleSlide={handleSlide} activePage={activePage} />
                <Contact slide={slide} handleSlide={handleSlide} activePage={activePage} />
            </div>
        </PageAnimationContext.Provider>
    )
}
export default Stacker