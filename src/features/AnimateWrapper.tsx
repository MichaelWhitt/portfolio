import {useSpring, animated } from 'react-spring'

interface AnimateProps {
    from: {},
    to: {},
    delay?: number,
    config?: {
        duration: number
    },
    textContent?: string,
    children?: JSX.Element,
    style?: {},
    id?: string,
    className?: string
}

const Animate = (props: AnimateProps) => {

    const {from, to, delay, config, textContent, children, style, className, id} = props

    const [animation] = useSpring(() => ({
        from, 
        to,
        delay,
        config: {
            duration: config?.duration
        }
    }))

    return (
        <animated.div style={{...style, ...animation}} className={className} id={id}>
            {children ? children : textContent}
        </animated.div>
    )
}

export default Animate