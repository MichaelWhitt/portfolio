import generateEdgeBtnTitle from '../../../utils/generateEdgeBtnTitle'
import {useState, useEffect} from 'react'

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
                        <h1>Hello, my name is</h1>
                        <h2 style={{fontSize: 50, marginTop: -10}}>MICHAEL WHITT.</h2>
                        <h3 style={{fontSize: 40, marginTop: -10, color: '#ff0011'}}>I build web and mobile apps.</h3>
                        <p style={{fontSize: 30, marginTop: -10, color: '#ccc', width: '70%', fontWeight: 600}}>
                            {text}{text.length !== paragraphText.length ? '_' : ''}
                        </p>
                </div>
                <div 
                    className='edgeContainer' 
                    onClick={() => props.handleSlide('first')} 
                    style={props.activePage ==='first' ? {fontWeight: 800, fontSize: 28} : {transitionDuration: '.3s'}}
                >
                    {generateEdgeBtnTitle('Hello')}
                </div>
            </div>
        </>
    )
}
export default Landing