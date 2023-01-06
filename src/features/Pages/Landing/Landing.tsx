import generateEdgeBtnTitle from '../../../utils/generateEdgeBtnTitle'
import {useState, useEffect} from 'react'
import LandingNav from './LandingNav'
import {useSpring, animated} from 'react-spring'
import Animate from '../../AnimateWrapper'


// TODO: Clear timeout if active page switches for writing function

const Landing = (props) => {
    const paragraphText = `I am a software engineer who has worked on projects of all sizes and from teams located around the world. I thrive in environments
    with creative thinkers + diversity, and love to learn new tech.`
    const [text, setText] = useState('')
    
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
                    <Animate 
                        from={{y: 2600}} 
                        to={{y: 0}} 
                        style={{height: 100, width: 2, borderLeft: '1px solid #a0d6b4', position: 'absolute', left: '2%', top: 25}} 
                    />
                    <Animate 
                        from={{x: 3600}} 
                        to={{x: 0}} 
                        style={{height: 1, width: 100, borderTop: '1px solid #a0d6b4', position: 'absolute', left: '2%', top: 25}} 
                    />
                
                    <Animate from={{x: -2600}} to={{x: 0}} style={{color: '#a0d6b4', fontSize: 16}}>
                        <span>Hello, my name is</span>
                    </Animate>
                    <Animate from={{x: -2600}} to={{x: 0}} delay={350} style={{fontSize: 50, color: '#a0d6b4'}}>
                        <span>MICHAEL WHITT</span>
                    </Animate>
                    <p style={{fontSize: 30, marginTop: 40, color: '#aaa', width: '70%', fontWeight: 600}}>
                        {text}{text.length !== paragraphText.length ? '_' : ''}
                    </p>
                    <Animate from={{opacity: 0}} to={{opacity: 1}} config={{duration: 1000}} delay={7000} style={{fontSize: 40, marginTop: 10, color: '#ff0011'}}>
                        <span>I build web and mobile apps.</span>
                    </Animate>
                </div>
                <div 
                    className='edgeContainer' 
                    onClick={() => props.handleSlide('first')} 
                    style={props.activePage ==='first' ? {fontWeight: 800, fontSize: 28} : {transitionDuration: '.3s'}}
                >
                    {generateEdgeBtnTitle('Greetings')}
                </div>
                <LandingNav handleSlide={props.handleSlide} />
            </div>
        </>
    )
}
export default Landing