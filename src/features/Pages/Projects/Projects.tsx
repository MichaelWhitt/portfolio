import generateEdgeBtnTitle from '../../../utils/generateEdgeBtnTitle'
import NavWidget from '../../Nav/NavWidget'
import Animate from '../../AnimateWrapper'
import briefIcon from '../../../assets/briefcase.png'
import ProjectTile from './ProjectTile'

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
                    <div id='page-title'>
                        Recent Projects
                    </div>
                    <Animate 
                        from={{y: 2600}} 
                        to={{y: 0}} 
                        style={{height: 100, width: 2, borderLeft: '1px solid #a0d6b4', position: 'absolute', left: '10%', top: 25}} 
                    />
                    <Animate 
                        from={{x: 3600}} 
                        to={{x: 0}} 
                        style={{height: 2, width: 100, borderTop: '1px solid #a0d6b4', position: 'absolute', left: '10%', top: 25}} 
                    />
                    <div id='project-tiles-container'>
                        <ProjectTile name='Portfolio' />
                        <ProjectTile name='Show Tracker'/>
                        <ProjectTile name='Raid Codex'/>
                        <ProjectTile name='Can We Listen?'/>
                    </div>
                </div>
                <div 
                    className='edgeContainer' 
                    onClick={() => props.handleSlide('third')}
                    style={props.activePage ==='third' ? {fontWeight: 800, fontSize: 28} : {transitionDuration: '.3s'}}
                >
                    {generateEdgeBtnTitle('PROJECTS')}
                    <Animate 
                        from={{y: 2600}} 
                        to={{y: 0}}
                        style={{marginTop: 'auto', marginBottom: 20, marginRight: 4, width: '100%', textAlign: 'center'}}
                    >
                        <img src={briefIcon} width={40} height={40}/>
                    </Animate>
                </div>
                <NavWidget handleSlide={props.handleSlide} />
            </div>
        </>
    )
}
export default Projects