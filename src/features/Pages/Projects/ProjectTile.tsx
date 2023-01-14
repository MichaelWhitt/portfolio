import reactLogo from '../../../assets/reactlogo.svg'
import typescriptLogo from '../../../assets/typescriptlogo.png'
import javascriptLogo from '../../../assets/jslogo.png'
import cssLogo from '../../../assets/csslogo.png'
import reduxLogo from '../../../assets/reduxlogo.png'
import faunaLogo from '../../../assets/Fauna_Logo.svg'
import netlifyLogo from '../../../assets/netlifylogo.png'
import bootstrapLogo from '../../../assets/bootstraplogo.png'
import reactspringLogo from '../../../assets/reactspringlogo.png'
import githubLogo from '../../../assets/github.png'
import eyeLogo from '../../../assets/eye.png'
import showTVid from '/Development/portfolio2023/src/assets/showVid.mp4'
import raidVid from '../../../assets/raidVid.mp4'
import portVid from '../../../assets/portVid.mp4'
import cwlVid from '../../../assets/canwelistenVid.mp4'



const ProjectTile = (props) => {
    let src = ''
    let tools: string[] = []
    let viewLink = ''
    let githubLink = ''

    switch(props.name) {
        case 'Portfolio': 
            src = portVid
            tools = ['react', 'netlify', 'typescript', 'react-spring']
            githubLink = ''
            viewLink = 'https://michaeldwhitt.com'
            break
        case 'Show Tracker': 
            src = showTVid
            tools = ['react', 'redux', 'fauna', 'netlify', 'javascript']
            githubLink = 'https://github.com/MichaelWhitt/show-tracker'
            viewLink = 'https://mwmovies.netlify.app/'
            break
        case 'Raid Codex':
            src = raidVid
            tools = ['react', 'fauna', 'netlify', 'javascript']
            githubLink = 'https://github.com/MichaelWhitt/rsl-shard-tracker'
            viewLink = 'https://rsl-codex.netlify.app/'
            break
        case 'Can We Listen?':
            src = cwlVid
            tools = ['react', 'bootstrap', 'javascript', 'netlify']
            githubLink = 'https://github.com/MichaelWhitt/CanWeListen2.0'
            viewLink = 'https://canwelisten.netlify.app/'
            break
    }

    const includesReact = tools.includes('react')
    const includesRedux = tools.includes('redux')
    const includesFauna = tools.includes('fauna')
    const includesNetlify = tools.includes('netlify')
    const includesTS = tools.includes('typescript')
    const includesJS = tools.includes('javascript')
    const includesBootstrap = tools.includes('bootstrap')
    const includesReactSpring = tools.includes('react-spring')

    return(
        <div id='project-tile'>
            <div id='project-left-sidebar'>
                { includesReact && (
                    <div className='center'>
                        <div className='tooltip'>
                            <span className='tooltiptext'>React</span>
                        </div>
                        <img src={reactLogo} width={40} height={40}/>
                    </div>
                )}
                {includesRedux && (
                    <div className='center'>
                        <div className='tooltip'>
                            <span className='tooltiptext'>Redux</span>
                        </div>
                        <img src={reduxLogo} width={40} height={40}/>
                    </div>
                )}
                {includesTS ? (
                    <div className='center'>
                        <div className='tooltip'>
                            <span className='tooltiptext'>Typescript</span>
                        </div>
                        <img src={typescriptLogo} width={40} height={40}/>
                    </div>
                    ) : (
                        <div className='center'>
                            <div className='tooltip'>
                                <span className='tooltiptext'>Javascript</span>
                            </div>
                            <img src={javascriptLogo} width={40} height={40}/>
                        </div> 
                )}
                {includesBootstrap ? (
                    <div className='center'>
                        <div className='tooltip'>
                            <span className='tooltiptext'>Bootstrap</span>
                         </div>
                        <img src={bootstrapLogo} width={40} height={40}/>
                    </div>
                    ) : (
                        <div className='center'>
                            <div className='tooltip'>
                                <span className='tooltiptext'>CSS 3</span>
                            </div>
                            <img src={cssLogo} width={40} height={40}/>
                        </div> 
                )}
                {includesFauna && (
                    <div className='center'>
                        <div className='tooltip'>
                            <span className='tooltiptext'>Fauna DB</span>
                        </div>
                        <img src={faunaLogo} width={40} height={40}/>
                    </div>
                )}
                {includesNetlify && (
                    <div className='center'>
                        <div className='tooltip'>
                            <span className='tooltiptext'>Netlify</span>
                        </div>
                        <img src={netlifyLogo} width={30} height={30}/>
                    </div>
                )}
                {includesReactSpring && (
                    <div className='center'>
                        <div className='tooltip'>
                            <span className='tooltiptext'>React Spring</span>
                        </div>
                        <img src={reactspringLogo} width={30} height={30}/>
                    </div>
                )}
            </div>
            <div id='project-name-and-pic'>
                <div id='project-tile-name'>
                    {props.name} 
                    <a href={githubLink} target='_blank' rel='noopener noreferrer'>
                        <img src={githubLogo} style={{filter: 'brightness(0%)'}} width={30} />
                    </a>
                    <a href={viewLink} target='_blank' rel='noopener noreferrer'>
                        <img src={eyeLogo} width={30} />
                    </a>
                </div>
                <div id='project-tile-inner'>
                    <div id='project-pic'>
                        {/* <img src={src} width={'100%'} height={'100%'} style={{borderRadius: 12}} /> */}
                        <video 
                            width={'100%'} 
                            height={'100%'} 
                            src={src} 
                            onMouseOver={e => e.currentTarget.play()}
                            onMouseOut={e => e.currentTarget.pause()}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProjectTile