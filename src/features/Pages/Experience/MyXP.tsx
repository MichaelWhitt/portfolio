import {useState} from 'react'
import Scrollbar
 from './Scrollbar'
const MyXP = () => {
    const [chosen, setChosen] = useState('ClearC2')

    const work = ['ClearC2', 'Astraphos', 'Dreamland', 'Mosaic']
    const school = ['NC', 'UNNC', 'UNL', 'PKU']
    return(
        <div style={{display: 'flex'}}>
            <Scrollbar chosen={[0, ...work, 5, ...school].indexOf(chosen)} />
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
            <div className='xp-container'>
                
            </div>
        </div>
    )
}

export default MyXP