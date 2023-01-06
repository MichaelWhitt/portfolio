import generateEdgeBtnTitle from '../../../utils/generateEdgeBtnTitle'
import {useState, useEffect} from 'react'
import LandingNav from './LandingNav'


// TODO: Clear timeout if active page switches for writing function

const Landing = (props) => {
    const paragraphText = `I am a software engineer who has worked on projects of all sizes. I thrive in environments
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
                    <span style={{height: 100, width: 2, borderLeft: '1px solid #a0d6b4', position: 'absolute', left: '2%', top: 25}}/>
                    <span style={{height: 1, width: 100, borderTop: '1px solid #a0d6b4', position: 'absolute', left: '2%', top: 25}}/>
                
                    <h1 style={{color: '#a0d6b4', fontSize: 16}}>Hello, my name is</h1>
                    <h2 style={{fontSize: 50, marginTop: -10, color: '#a0d6b4'}}>MICHAEL WHITT.</h2>
                    <h3 style={{fontSize: 40, marginTop: -10, color: '#ff0011'}}>I build web and mobile apps.</h3>
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