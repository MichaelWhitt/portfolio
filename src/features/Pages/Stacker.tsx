import {useState, useEffect} from 'react'
import Landing from "./Landing/Landing"
import Contact from "./Contact/Contact"
import About from "./About/About"
import Projects from "./Projects/Projects"
const Stacker = () => {
    const [stack, setStack] = useState<React.ReactElement[]>([])

    const manipulateStack = (current: string) => {
        const l = <Landing changeOrder={manipulateStack} stack={stack} />
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
        <Landing changeOrder={manipulateStack} stack={stack}/>, 
        <Projects changeOrder={manipulateStack} stack={stack}/>, 
        <About changeOrder={manipulateStack} stack={stack}/>, 
        <Contact changeOrder={manipulateStack} stack={stack}/>
    ]


    useEffect(() => {
        setStack(arrayOfComponents)
    }, [])

    return(
        <div id='stackParent'>
            <div id='stack0' className='stackItem'>{stack[0]}</div>
            <div id='stack1' className='stackItem'>{stack[1]}</div>
            <div id='stack2' className='stackItem'>{stack[2]}</div>
            <div id='stack3' className='stackItem'>{stack[3]}</div>
        </div>
    )
}
export default Stacker