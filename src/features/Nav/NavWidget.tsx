import { useSpring, animated } from '@react-spring/web'
import {useState} from 'react'
import emailIcon from '../../assets/email.png'
import githubIcon from '../../assets/github.png'
import linkedIcon from '../../assets/linked.png'
import contactIcon from '../../assets/contact.png'

const NavWidget = (props) => {
    const [navText, setNavText] = useState('')
    const [springs, api] = useSpring(() => ({
        from: { y: 0 }
      }))

      const handleEnter = () => {
        api.start({
          from: {
            y: 50,
          },
          to: {
            y: 0,
          },
        })
      }

      const handleLeave = () => {
        api.start({
            from: {
              y: 0
            },
            to: {
              y: 50
            },
          })
      }

      const onMouseEnter = (icon: string) => {
        switch(icon) {
            case 'github':
                setNavText('See My Projects')
                break
            case 'linkedin':
                setNavText('Connect with Me')
                break
            case 'email':
                setNavText('connect@michaeldwhitt.com')
                break
            case 'contact':
                setNavText('Other Contact Methods')            
        }
        handleEnter()
      }
    
      const onMouseLeave = () => {
        handleLeave()
      }

return(
    <div id='navWidget' style={{width: 300, height: 40, borderBottom: '1px solid #a0d6b4', position: 'absolute', right: '10%', bottom: 30}}>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20}}>
            <a className='navIcon' href='https://github.com/MichaelWhitt' target='_blank' rel="noopener noreferrer" onMouseEnter={() => onMouseEnter('github')} onMouseLeave={onMouseLeave}>
                <img src={githubIcon} width={30} />
            </a>
            <a className='navIcon' href='https://www.linkedin.com/in/michaeldwhitt/' target='_blank' rel="noopener noreferrer" onMouseEnter={() => onMouseEnter('linkedin')} onMouseLeave={onMouseLeave}>
                <img src={linkedIcon} width={30} />
            </a>
            <a className='navIcon' href='mailto:connect@michaeldwhitt.com' target='_blank' rel="noopener noreferrer" onMouseEnter={() => onMouseEnter('email')} onMouseLeave={onMouseLeave}>
                <img src={emailIcon} width={30} />
            </a>
            <span className='navIcon' onClick={() => props.handleSlide('fourth')} onMouseEnter={() => onMouseEnter('contact')} onMouseLeave={onMouseLeave}>
                <img src={contactIcon} width={30} />
            </span>
        </div>
        {/* add left to right animation based on mouse location, remove transDuration */}
        <animated.div style={{color: '#a0d6b4', textAlign: 'center', marginTop: 10, ...springs}}>
            {navText}
        </animated.div>
    </div>
)
}
export default NavWidget