import generateEdgeBtnTitle from '../../../utils/generateEdgeBtnTitle'
import Animate from '../../AnimateWrapper'
import NavWidget from '../../Nav/NavWidget'
import contactIcon from '../../../assets/contactHollow.png'
const Contact = (props) => {

    return(
        <>
            <div 
                id='contact' 
                className='page'
            >   
                <div id='contact-content'>
                        stuff goes in here
                </div>
                
                <div 
                    className='edgeContainer' 
                    onClick={() => props.handleSlide('fourth')}
                    style={props.activePage ==='fourth' ? {fontWeight: 800, fontSize: 28} : {transitionDuration: '.3s'}}
                >
                    {generateEdgeBtnTitle('CONTACT')}
                </div>
                <NavWidget handleSlide={props.handleSlide} />
                <Animate 
                    from={{y: 2600}} 
                    to={{y: 0}}
                    style={{position: 'absolute', right: 11, bottom: 0}} 
                >
                    <img src={contactIcon} width={40} height={40}/>
                </Animate>
            </div>
        </>
    )
}
export default Contact