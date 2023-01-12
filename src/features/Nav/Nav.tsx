import landingIcon from '../../assets/hello.png'
import briefIcon from '../../assets/briefcase.png'
import xpIcon from '../../assets/experience.png'
import contactIcon from '../../assets/contactHollow.png'

const Nav = (props) => {

    return(
        <div id='nav'>
            <div id='nav-item' onClick={() => props.handleSlide('first')}>
                <img src={landingIcon} width={40} height={40}/>
            </div>
            <div id='nav-item' onClick={() => props.handleSlide('second')}>
                <img src={xpIcon} width={40} height={40}/>
            </div>
            <div id='nav-item' onClick={() => props.handleSlide('third')}>
                <img src={briefIcon} width={40} height={40}/>
            </div>
            <div id='nav-item' onClick={() => props.handleSlide('fourth')}>
                <img src={contactIcon} width={40} height={40}/>
            </div>
        </div>
    )
}
export default Nav