import {useState, useEffect, useRef} from 'react'
import Landing from "./Landing/Landing"
import Contact from "./Contact/Contact"
import About from "./About/About"
import Projects from "./Projects/Projects"
const Stacker = () => {
    const [stack, setStack] = useState<React.ReactElement[]>([])
    const [animate, setAnimate] = useState(false)

    const manipulateStack = (current: string) => {
        setAnimate(s => true)
        
        const l = <Landing changeOrder={manipulateStack} stack={stack} /> //change this, dry code
        const p = <Projects changeOrder={manipulateStack} stack={stack} />
        const a = <About changeOrder={manipulateStack} stack={stack} />
        const c = <Contact changeOrder={manipulateStack} stack={stack} />
        
        switch(current) {
            case 'Landing': 
                setStack([l, p, a, c])
                return
            case 'Projects':
                setStack([p, a, c, l])
                return
            case 'About':
                setStack([a, c, l, p])
                return
            case 'Contact':
                setStack([c, l, p, a])
                return
        }
    }

    const arrayOfComponents = [
        <Landing changeOrder={manipulateStack} stack={stack} />, 
        <Projects changeOrder={manipulateStack} stack={stack} />, 
        <About changeOrder={manipulateStack} stack={stack} />, 
        <Contact changeOrder={manipulateStack} stack={stack} />
    ]


    useEffect(() => {
        setStack(arrayOfComponents)
    }, [])

    return(
        <div id='stackParent'>
            {stack.map((stackItem, i) => (
                <div id={`stack${i}`} className={`stackItem animate-${stack[0] ? animate : null}`} key={i}>
                    {stackItem}
                </div>
            ))}
            
        </div>
    )
}
export default Stacker