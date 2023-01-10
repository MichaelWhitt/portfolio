import {useState, useContext} from 'react'
import { PageAnimationContext } from '../Stacker'
import Scrollbar from './Scrollbar'
import XPTile from './XPTile'

const XPContainer = () => {
    const [chosen, setChosen] = useState('ClearC2')

    const work = ['ClearC2', 'NuCamp', 'Astraphos', 'Dreamland']
    const school = ['NC', 'UNNC', 'UNL', 'PKU']
    const context = useContext(PageAnimationContext)

    return(
        <div style={{height: '100%', paddingTop: 200, width: '100%'}}>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <Scrollbar chosenIndex={[0, ...work, 5, ...school].indexOf(chosen)} />
                <div className='xp-sidebar'>
                    <div className='center xp-title'>
                        Work
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
                        Education
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