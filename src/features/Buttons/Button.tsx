import { useSpring, animated } from 'react-spring'

interface ButtonInterface {
    onClick: Function,
    text: string,
    id?: string,
    style?: object,
    delay?: {
      lag: number
    },
    link?: string
}

const Button = (props: ButtonInterface) => {
    const [fadeIn] = useSpring(() => ({
        from: {
            opacity: 0
        },
        to: {
            opacity: 1
        },
        delay: props.delay ? props.delay.lag : null
    }))

    const [animation, api] = useSpring(() => ({
        from: { 
            borderRadius: '12px 12px 12px 12px'
        }
      }))

      const handleEnter = () => {
        api.start({
          to: {
            borderRadius: '50px 0px 50px 0px'
          }
        })
      }

      const handleLeave = () => {
        api.start({
          to: {
            borderRadius: '12px 12px 12px 12px'
          }
        })
      }

      if (props.link) {
        return(
          <animated.div 
            id={props.id || ''} 
            className={'button'} 
            style={{minWidth: 140, height: 60, border:'2px solid #a0d6b4', background: '#0A2647', ...props.style,  ...animation, ...fadeIn}} 
            onClick={() => props.onClick()}
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
        >
            <a 
              href={props.link} 
              target='_blank' 
              rel="noopener noreferrer" 
              style={{ display: 'flex', height: '100%', justifyContent: 'center', alignItems: 'center', color: '#a0d6b4', textDecoration: 'none'}}
            >
              {props.text}
            </a>
        </animated.div>
        )
      }
      

    return(
        <animated.button 
            id={props.id || ''} 
            className={'button'} 
            style={{minWidth: 140, height: 60, border:'2px solid #a0d6b4', background: '#0A2647', ...props.style,  ...animation, ...fadeIn}} 
            onClick={() => props.onClick()}
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
        >
            <span style={{fontSize: 18, fontWeight: 600, color: '#a0d6b4'}}>
                {props.text}
            </span>
        </animated.button>
    )
}
export default Button