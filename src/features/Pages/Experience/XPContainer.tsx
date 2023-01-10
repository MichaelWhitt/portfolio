import {useState, useContext} from 'react'
import { PageAnimationContext } from '../Stacker'
import Scrollbar from './Scrollbar'
import XPTile from './XPTile'
import Animate from '../../AnimateWrapper'
import grad from '../../../assets/grad.png'
import workspace from '../../../assets/workspace.png'

const XPContainer = () => {
    const [chosen, setChosen] = useState('ClearC2')

    const work = ['ClearC2', 'NuCamp', 'Astraphos', 'Dreamland']
    const school = ['NC', 'UNNC', 'UNL', 'PKU']
    const {visitedContext} = useContext(PageAnimationContext)

    return(
        <div style={{height: '100%', paddingTop: 200, width: '100%'}}>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <Scrollbar chosenIndex={[0, ...work, 5, ...school].indexOf(chosen)} />
                <div className='xp-sidebar'>
                    <div className='center xp-title'>
                        {visitedContext.second && (
                            <Animate from={{x: -250}} to={{x: 0}} delay={300}>
                                <img src={workspace} width={50} height={50}/>
                            </Animate>
                        )}
                    </div>
                    <div className='xp-list'>
                        {work.map(item => (
                            <div 
                                key={item} 
                                className={`center xp-item${item === chosen ? ' active' : ''}`}
                                onClick={() => setChosen(item)}
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                    <div className='center xp-title'>
                        {visitedContext.second && (
                            <Animate from={{x: -250}} to={{x: 0}} delay={300}>
                                <img src={grad} width={50} height={50}/>
                            </Animate>
                        )}
                    </div>
                    <div className='xp-list'>
                        {school.map(item => (
                            <div 
                                key={item} 
                                className={`center xp-item${item === chosen ? ' active' : ''}`}
                                onClick={() => setChosen(item)}
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
                <div className='xp-display'>
                    <XPTile chosen={chosen} />
                </div>
            </div>
        </div>
    )
}

export default XPContainer