import { useSpring, animated } from 'react-spring'

interface ButtonInterface {
    onClick: Function,
    text: string,
    id?: string,
    style?: object
}

const Button = (props: ButtonInterface) => {

    const [left] = useSpring(() => ({
        from: {
            x: -400
        },
        to: {
            x: 0
        },
        delay: 5000
      }))

      const [top] = useSpring(() => ({
        from: {
            y: -11400
        },
        to: {
            y: 0
        },
        delay: 5200
      }))

      const [right] = useSpring(() => ({
        from: {
            x: 4400
        },
        to: {
            x: 0
        },
        delay: 5400
      }))

      const [bottom] = useSpring(() => ({
        from: {
            y: 400
        },
        to: {
            y: 0
        },
        delay: 5600
      }))

    const [fadeIn] = useSpring(() => ({
        from: {
            opacity: 0
        },
        to: {
            opacity: 1
        },
        delay: 5000
    }))

    const [animation, api] = useSpring(() => ({
        from: { 
            border: '2px solid transparent',
            borderRadius: '12px 12px 12px 12px'
        }
      }))

      const handleEnter = () => {
        api.start({
          to: {
            border: '2px solid #a0d6b4',
            borderRadius: '50px 0px 50px 0px'
          }
        })
      }

      const handleLeave = () => {
        api.start({
          to: {
            border: '2px solid transparent',
            borderRadius: '12px 12px 12px 12px'
          }
        })
      }

    return(
        <animated.button 
            id={props.id || ''} 
            className={'button'} 
            style={{minWidth: 140, height: 60, background: '#0A2647', ...props.style,  ...animation, ...fadeIn}} 
            onClick={() => props.onClick()}
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
        >
            <animated.span style={{borderLeft: '1px solid #a0d6b4', height: 16, position: 'absolute', left: 0, bottom: 0, ...left}} />
            <animated.span style={{borderTop: '1px solid #a0d6b4',  width: 90, position: 'absolute', top: 0, right: 0, ...top}} />
            <animated.span style={{borderRight: '1px solid #a0d6b4', height: 16, position: 'absolute', right: 0, top: 0, ...right}} />
            <animated.span style={{borderBottom: '1px solid #a0d6b4', width: 90, position: 'absolute', bottom: 0, left: 0, ...bottom}} />

            <span style={{fontSize: 18, fontWeight: 600, color: '#a0d6b4'}}>
                {props.text}
            </span>
        </animated.button>
    )
}
export default Button