import {useState} from 'react'
const MyXP = () => {
    const [chosen, setChosen] = useState('ClearC2')

    const work = ['ClearC2', 'Astraphos', 'Dreamland', 'Mosaic']
    const school = ['NC', 'UNNC', 'UNL', 'PKU']
    return(
        <div className='xp-container'>
            <div className='xp-sidebar'>
                <div className='center xp-title' style={{borderRadius: '12px 0 0 0 '}}>
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
                            style={{borderRadius: item === school.slice(-1)[0] ? '0 0 0 12px' : ''}}
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MyXP