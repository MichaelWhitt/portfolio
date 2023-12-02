import generateEdgeBtnTitle from '../../../utils/generateEdgeBtnTitle'
import NavWidget from '../../Nav/NavWidget'
import Animate from '../../AnimateWrapper'
import briefIcon from '../../../assets/briefcase.png'
import ProjectTile from './ProjectTile'
import githubIcon from '../../../assets/github.png'

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
                    <div id='page-title' style={{left: '11%'}}>
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
                        <ProjectTile name='Blog Template' />
                        <ProjectTile name='Show Tracker'/>
                        <ProjectTile name='Raid Codex'/>
                        <ProjectTile name='Can We Listen?'/>
                        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <a href='https://github.com/MichaelWhitt' className='center' style={{textDecoration: 'none', fontSize: 20, color: '#a0d6b4'}} target='_blank' rel='noopener noreferrer'>
                                <span style={{marginRight: 10}}>
                                    See More
                                </span>
                                <img src={githubIcon} width={50} height={50} />
                            </a>
                        </div>
                    </div>
                </div>
                <div 
                    className='edgeContainer bg-light-blue' 
                    onClick={() => props.handleSlide('third')}
                    style={props.activePage ==='third' ? {fontWeight: 800, fontSize: 28} : {transitionDuration: '.3s'}}
                >
                    {props.windowWidth > 770 ? generateEdgeBtnTitle('PROJECTS') : null}
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