import generateEdgeBtnTitle from '../../../utils/generateEdgeBtnTitle'
import NavWidget from '../../Nav/NavWidget'
import XPContainer from './XPContainer'
import Animate from '../../AnimateWrapper'
import xpIcon from '../../../assets/experience.png'

const Experience = (props) => {

    return(
        <>
            <div 
                id='xp' 
                className='page'
                style={{
                    transition: 'transform 300ms ease-in-out .3s',
                    transform: props.slide.second ? 'translateX(-92%)' : 'translateX(0%)'
                }}
            >   
                <div id='xp-content'>
                    <XPContainer />
                </div>
                <div 
                    className='edgeContainer' 
                    onClick={() => props.handleSlide('second')}
                    style={props.activePage ==='second' ? {fontWeight: 800, fontSize: 28} : {transitionDuration: '.3s'}}
                >
                    {generateEdgeBtnTitle('Experience')}
                    <Animate 
                        from={{y: 2600}} 
                        to={{y: 0}}
                        style={{marginTop: 'auto', marginBottom: 20, marginRight: 8, width: '100%', textAlign: 'center'}}
                    >
                        <img src={xpIcon} width={40} height={40}/>
                    </Animate>
                </div>
                <NavWidget handleSlide={props.handleSlide} />
            </div>
        </>
    )
}
export default Experience