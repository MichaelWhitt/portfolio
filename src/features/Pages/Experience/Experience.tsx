import generateEdgeBtnTitle from '../../../utils/generateEdgeBtnTitle'
import NavWidget from '../../Nav/NavWidget'
import XPContainer from './XPContainer'

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
                </div>
                <NavWidget handleSlide={props.handleSlide} />
            </div>
        </>
    )
}
export default Experience