import generateEdgeBtnTitle from '../../../utils/generateEdgeBtnTitle'
import Animate from '../../AnimateWrapper'
import linkedIcon from '../../../assets/linked.png'
import contactIcon from '../../../assets/contactHollow.png'
import Button from '../../Buttons/Button'
import {useContext, useState} from 'react'
import { PageAnimationContext } from '../Stacker'

const Contact = (props) => {
    const [msg, setMsg] = useState(['R', 'E', 'A', 'C', 'H', ' ', 'O', 'U', 'T'])
    const {visitedContext} = useContext(PageAnimationContext)

    const handleMouseEnter = (idx: number) => {
        
        const newArr = [...msg]
        switch(idx) {
            case 0:
                newArr.splice(idx, 1, 'T' )
                break
            case 1:
                newArr.splice(idx, 1, 'H' )
                break
            case 2:
                newArr.splice(idx, 1, 'A' )
                break
            case 3:
                newArr.splice(idx, 1, 'N' )
                break
            case 4:
                newArr.splice(idx, 1, 'K' )
                break
            case 6:
                newArr.splice(idx, 1, 'Y' )
                break
            case 7:
                newArr.splice(idx, 1, 'O' )
                break
            case 8:
                newArr.splice(idx, 1, 'U' )
                break        
        }
        setMsg(newArr)
    }

    const generateMsg = () => {
        return msg.map((item, idx) => {
            return(
                <Animate
                    key={idx} 
                    textContent={item} 
                    from={{y: -20, opacity: 0}} 
                    to={{y: 0, opacity: 1}} 
                    delay={500 + (idx * 150)} 
                    style={{
                        whiteSpace: 'pre', 
                        background: idx !== 5 ? `rgb(${Math.floor(Math.random() * 155 + 100)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 155 + 100)})` : null
                    }}
                    className={idx !== 5 ? 'animated-item-text' : 'prevent-animated-item-text'}
                    mouseEnter={handleMouseEnter}
                    index={idx}
                />
            )
        })
    }

    return(
        <>
            <div 
                id='contact' 
                className='page'
            >  
                <div id='contact-content'>
                    <div id='page-title' style={{left: '15%'}}>
                        Touch Base
                    </div>
                    <Animate 
                        from={{y: 2600}} 
                        to={{y: 0}} 
                        style={{height: 100, width: 2, borderLeft: '1px solid #a0d6b4', position: 'absolute', left: '14%', top: 25}} 
                    />
                    <Animate 
                        from={{x: 3600}} 
                        to={{x: 0}} 
                        style={{height: 2, width: 100, borderTop: '1px solid #a0d6b4', position: 'absolute', left: '14%', top: 25}} 
                    />
                   <div>
                   <div style={{display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)'}}>
                            {visitedContext.fourth && generateMsg()}
                        </div>
                        <div style={{width: 200, margin: '0 auto', marginTop: 50, display: 'flex', gap: 10, alignItems: 'center', height: 60}}>
                            <Button text={'Email Me'} link={'mailto:connect@michaeldwhitt.com'} onClick={() => {}} />
                            <a href='https://www.linkedin.com/in/michaeldwhitt/' target='_blank' rel="noopener noreferrer" style={{height: '100%', width: '100%', background: '#0A2647', borderRadius: 12, border: '2px solid #a0d6b4'}}>
                                <img src={linkedIcon} width={60} height={60} />
                            </a>
                        </div>
                   </div>
                </div>
                
                <div 
                    className='edgeContainer bg-lighter-blue' 
                    onClick={() => props.handleSlide('fourth')}
                    style={visitedContext.fourth ? {fontWeight: 800, fontSize: 28} : {transitionDuration: '.3s'}}
                >
                    {props.windowWidth > 770 ? generateEdgeBtnTitle('CONTACT') : null}
                    <Animate 
                        from={{y: 2600}} 
                        to={{y: 0}}
                        style={{marginTop: 'auto', marginBottom: 20, width: '100%', textAlign: 'center'}}
                    >
                        <img src={contactIcon} width={40} height={40}/>
                    </Animate>
                </div>
                
            </div>
        </>
    )
}
export default Contact