import generateEdgeBtnTitle from '../../../utils/generateEdgeBtnTitle'
import {useState, useEffect} from 'react'
import LandingNav from './LandingNav'
import Animate from '../../AnimateWrapper'
import myPhoto from '../../../assets/me.jpg'
import IntroName from '../../Landing/IntroName'
import Button from '../../Buttons/Button'


// TODO: Clear timeout if active page switches for writing function

const Landing = (props) => {
    const paragraphText = `I am a software engineer who has worked on projects of all sizes and with teams located around the world. I thrive in environments
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
                    <IntroName />
                    <p style={{fontSize: 30, marginTop: 40, color: '#aaa', width: '60%', fontWeight: 600}}>
                        {text}{text.length !== paragraphText.length ? '_' : ''}
                    </p>
                    <div style={{position: 'absolute', bottom: '5%', left: '10%'}}>
                        <Button onClick={() => props.handleSlide('second')} text={'Explore'} />
                    </div>
                    
                </div>
                <div 
                    className='edgeContainer' 
                    onClick={() => props.handleSlide('first')} 
                    style={props.activePage ==='first' ? {fontWeight: 800, fontSize: 28} : {transitionDuration: '.3s'}}
                >
                    {generateEdgeBtnTitle('Greetings')}
                </div>
                <LandingNav handleSlide={props.handleSlide} />
                <Animate from={{opacity: 0}} to={{opacity: 1}} delay={7000} config={{duration: 2000}} style={{position: 'absolute', right: '15%', top: '20%'}}>
                    <img src={myPhoto} width={150} height={150} style={{borderRadius: '50%'}} />
                </Animate>
            </div>
        </>
    )
}
export default Landing