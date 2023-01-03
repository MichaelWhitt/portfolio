import {useState, useEffect, useRef} from 'react'
import Landing from "./Landing/Landing"
import Contact from "./Contact/Contact"
import About from "./About/About"
import Projects from "./Projects/Projects"
const Stacker = () => {
    // const ref = useRef([])
    const [stack, setStack] = useState<React.ReactElement[]>([])
    const [animate, setAnimate] = useState('none')

    // useEffect(() => {
    //     ref.current = stack // cache current value for the next render
    //   })
      //const prevValue = ref.current; // get prev value from last render

    const manipulateStack = (current: string) => {
        setAnimate('start')
        
        const l = <Landing changeOrder={manipulateStack} stack={stack} /> //change this, dry code
        const p = <Projects changeOrder={manipulateStack} stack={stack} />
        const a = <About changeOrder={manipulateStack} stack={stack} />
        const c = <Contact changeOrder={manipulateStack} stack={stack} />
        
        switch(current) {
            case 'Landing':
                setTimeout(() => {
                    setAnimate('done')
                    setStack([l, p, a, c])
                }, 1000)
                return
            case 'Projects':
                setTimeout(() =>{
                    setAnimate('done')
                    setStack([p, a, c, l])
                }, 1000)
                return
            case 'About':
                setTimeout(() => {
                    setAnimate('done')
                    setStack([a, c, l, p])
                }, 1000)
                return
            case 'Contact':
                setTimeout(() => {
                    setAnimate('done')
                    setStack([c, l, p, a])
                }, 1000)
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
                <div id={`stack${i}`} className={`stackItem animate-${stackItem === stack[0] ? animate : 'none'}`} key={i}>
                    {stackItem}
                </div>
            ))}
            
        </div>
    )
}
export default Stacker