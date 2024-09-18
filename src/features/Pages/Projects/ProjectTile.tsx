import reactLogo from '../../../assets/reactlogo.svg'
import typescriptLogo from '../../../assets/typescriptlogo.png'
import javascriptLogo from '../../../assets/jslogo.png'
import cssLogo from '../../../assets/csslogo.png'
import reduxLogo from '../../../assets/reduxlogo.png'
import faunaLogo from '../../../assets/Fauna_Logo.svg'
import netlifyLogo from '../../../assets/netlifylogo.png'
import bootstrapLogo from '../../../assets/bootstraplogo.png'
import reactspringLogo from '../../../assets/reactspringlogo.png'
import firebaseLogo from '../../../assets/firebaselogo.png'
import tailwindLogo from '../../../assets/tailwindlogo.png'
import eyeLogo from '../../../assets/eye.png'
import mqVid from './mqvid.mp4'
import raidVid from './raidvid.mp4'
import tdVid from './terrordenvid.mp4'
import cwlVid from './canwelistenvid.mp4'



const ProjectTile = (props) => {
    let src = ''
    let tools: string[] = []
    let viewLink = ''
    let githubLink = ''

    switch(props.name) {
        case 'Terror Den': 
            src = tdVid
            tools = ['react', 'firebase', 'typescript', 'tailwind']
            viewLink = 'https://terrorden.com/'
            break
        case 'Movie Conquest': 
            src = mqVid
            tools = ['react', 'firebase', 'typescript', 'tailwind']
            viewLink = 'https://movieconquestapp.web.app/'
            break
        case 'Raid Codex':
            src = raidVid
            tools = ['react', 'fauna', 'netlify', 'javascript']
            viewLink = 'https://rsl-codex.netlify.app/'
            break
        case 'Can We Listen?':
            src = cwlVid
            tools = ['react', 'bootstrap', 'javascript', 'netlify']
            viewLink = 'https://canwelisten.netlify.app/'
            break
    }

    const includesReact = tools.includes('react')
    const includesRedux = tools.includes('redux')
    const includesFauna = tools.includes('fauna')
    const includesNetlify = tools.includes('netlify')
    const includesTS = tools.includes('typescript')
    const includesBootstrap = tools.includes('bootstrap')
    const includesReactSpring = tools.includes('react-spring')
    const includesFirebase = tools.includes('firebase')
    const includesTailwind = tools.includes('tailwind')

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
                    ) : includesTailwind ? (
                            <div className='center'>
                                <div className='tooltip'>
                                    <span className='tooltiptext'>Tailwind</span>
                                </div>
                                <img src={tailwindLogo} width={40} height={30}/>
                            </div>
                    )
                    : (
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
                {includesFirebase && (
                    <div className='center'>
                        <div className='tooltip'>
                            <span className='tooltiptext'>Firebase</span>
                        </div>
                        <img src={firebaseLogo} width={50} height={50}/>
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
                    {/* <a href={githubLink} target='_blank' rel='noopener noreferrer'>
                        <img src={githubLogo} style={{filter: 'brightness(0%)'}} width={30} />
                    </a> */}
                    <a href={viewLink} target='_blank' rel='noopener noreferrer' style={{marginLeft: 10}}>
                        <img src={eyeLogo} width={30} />
                    </a>
                </div>
                <div id='project-tile-inner'>
                    <div id='project-pic'>
                        <video 
                            width={'100%'} 
                            height={'95%'}
                            muted
                            src={src}
                            style={{borderRadius: 12, marginTop: 'auto', marginBottom: 'auto'}}
                            onClick={e => e.currentTarget.play()}
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