import generateEdgeBtnTitle from '../../../utils/generateEdgeBtnTitle'
import {useState, useEffect} from 'react'
import LandingNav from './LandingNav'
import {useSpring, animated, easings} from 'react-spring'


// TODO: Clear timeout if active page switches for writing function

const Landing = (props) => {
    const paragraphText = `I am a software engineer who has worked on projects of all sizes and from teams located around the world. I thrive in environments
    with creative thinkers + diversity, and love to learn new tech.`
    const [text, setText] = useState('')
    const [slide] = useSpring(() => 
        ({
            from: {
                x: -2600
            },
            to: {
                x: 0
            }
        })
    )

    const [slideSlower] = useSpring(() => 
        ({
            from: {
                x: -2600
            },
            to: {
                x: 0
            },
            delay: 350
        })
    )

    const [slideUp] = useSpring(() => 
        ({
            from: {
                y: -2600
            },
            to: {
                y: 0
            }
        })
    )

    const [slideLeft] = useSpring(() => 
        ({
            from: {
                x: 3600
            },
            to: {
                x: 0
            }
        })
    )

    const [fadeIn] = useSpring(() => 
        ({
            from: {
                opacity: 0
            },
            to: {
                opacity: 1
            },
            delay: 1500,
           
            config: { 
                duration: 1000
              }
        })
    )
    
  useEffect(() => {
    const typeOut = () => {
      for (let i = 0; i < paragraphText.length; i++) {
        setTimeout(() => {
          setText((prevText) => prevText + paragraphText.charAt(i))
        }, Math.floor(Math.random() + 35) * i)
      }
    }
    typeOut()
  }, [])

    return(
        <>
            <div 
                id='landing' 
                className='page' 
                style={{
                    transition: props.slide.first ? 'transform 300ms ease-in-out .1s' : 'transform 300ms ease-in-out .5s',
                    transform: props.slide.first ? 'translateX(-96%)' : 'translateX(0%)'
                }}
            > 
                <div id='landing-content'>
                    <animated.span style={{height: 100, width: 2, borderLeft: '1px solid #a0d6b4', position: 'absolute', left: '2%', top: 25, ...slideUp}}/>
                    <animated.span style={{height: 1, width: 100, borderTop: '1px solid #a0d6b4', position: 'absolute', left: '2%', top: 25, ...slideLeft}}/>
                
                    <animated.h1 style={{color: '#a0d6b4', fontSize: 16, ...slide}}>Hello, my name is</animated.h1>
                    <animated.h2 style={{fontSize: 50, marginTop: -10, color: '#a0d6b4', ...slideSlower}}>MICHAEL WHITT.</animated.h2>
                    <animated.h3 style={{fontSize: 40, marginTop: -10, color: '#ff0011', ...fadeIn}}>I build web and mobile apps.</animated.h3>
                    <p style={{fontSize: 30, marginTop: -10, color: '#aaa', width: '70%', fontWeight: 600}}>
                        {text}{text.length !== paragraphText.length ? '_' : ''}
                    </p>
                </div>
                <div 
                    className='edgeContainer' 
                    onClick={() => props.handleSlide('first')} 
                    style={props.activePage ==='first' ? {fontWeight: 800, fontSize: 28} : {transitionDuration: '.3s'}}
                >
                    {generateEdgeBtnTitle('Greetings')}
                </div>
                <LandingNav handleSlide={props.handleSlide}/>
            </div>
        </>
    )
}
export default Landing