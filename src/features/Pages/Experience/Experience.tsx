import generateEdgeBtnTitle from '../../../utils/generateEdgeBtnTitle'
import NavWidget from '../../Nav/NavWidget'
import XPContainer from './XPContainer'
import Animate from '../../AnimateWrapper'
import xpIcon from '../../../assets/experience.png'
import resumeIcon from '../../../assets/resumeIcon.png'
import resumePDF from '../../../assets/Michael-Whitt-Resume-2023.pdf'

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
                    <div style={{position: 'absolute', top: 20, right: 80, justifyContent: 'center', alignItems: 'center'}}>
                        <a href={resumePDF} download='michael-whitt-resume-2023'>
                            <img src={resumeIcon} width={60} height={60} />
                        </a>
                    </div>
                    <div id='page-title' style={{left: '7%'}}>
                        Work & Education
                    </div>
                    <Animate 
                        from={{y: 2600}} 
                        to={{y: 0}} 
                        style={{height: 100, width: 2, borderLeft: '1px solid #a0d6b4', position: 'absolute', left: '6%', top: 25}} 
                    />
                    <Animate 
                        from={{x: 3600}} 
                        to={{x: 0}} 
                        style={{height: 2, width: 100, borderTop: '1px solid #a0d6b4', position: 'absolute', left: '6%', top: 25}} 
                    />
                    <XPContainer />
                </div>
                <div 
                    className='edgeContainer bg-blue' 
                    onClick={() => props.handleSlide('second')}
                    style={props.activePage ==='second' ? {fontWeight: 800, fontSize: 28} : {transitionDuration: '.3s'}}
                >
                    {props.windowWidth > 770 ? generateEdgeBtnTitle('EXPERIENCE') : null}
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