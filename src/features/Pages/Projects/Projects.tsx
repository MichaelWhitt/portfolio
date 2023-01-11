import generateEdgeBtnTitle from '../../../utils/generateEdgeBtnTitle'
import NavWidget from '../../Nav/NavWidget'
import Animate from '../../AnimateWrapper'
import briefIcon from '../../../assets/briefcase.png'

const Projects = (props) => {

    return(
        <>
            <div 
                id='projects' 
                className='page'
                style={{
                    transition: props.slide.third ? 'transform 300ms ease-in-out .5s' : 'transform 300ms ease-in-out .1s',
                    transform: props.slide.third ? 'translateX(-88%)' : 'translateX(0%)'
                }}
            >
                <div id='projects-content'>
                    asdasd
                </div>
                <div 
                    className='edgeContainer' 
                    onClick={() => props.handleSlide('third')}
                    style={props.activePage ==='third' ? {fontWeight: 800, fontSize: 28} : {transitionDuration: '.3s'}}
                >
                    {generateEdgeBtnTitle('PROJECTS')}
                </div>
                <NavWidget handleSlide={props.handleSlide} />
                <Animate 
                    from={{y: 2600}} 
                    to={{y: 0}}
                    style={{position: 'absolute', right: 11, bottom: 0}} 
                >
                    <img src={briefIcon} width={40} height={40}/>
                </Animate>
            </div>
        </>
    )
}
export default Projects