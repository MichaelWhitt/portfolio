import Animate from '../../AnimateWrapper'

const IntroName = () => {

    const animateName = () => {
        const first = 'MICHAEL'
        const last = 'WHITT'
        const fArray = first.split('')
        const lArray = last.split('')
        return(
            <div style={{display: 'flex', gap: 20, marginTop: 10}}>
                <div style={{display: 'flex'}}>
                    {fArray.map((char, idx) => {
                        return(
                            <Animate from={{y: -20, opacity: 0}} to={{y: 0, opacity: 1}} delay={1000 + (idx * 150)}>
                                <span style={{fontWeight: char === 'M' ? 600 : 300, color: '#a0d6b4', fontSize: 40}}>{char}</span>
                            </Animate>
                        )
                    })}
                </div>
                <div style={{display: 'flex'}}>
                    {lArray.map((char, idx) => {
                        return(
                            <Animate from={{y: 20, opacity: 0}} to={{y: 0, opacity: 1}} delay={2000 + (idx * 150)}>
                                <span style={{fontWeight: char === 'W' ? 600 : 300, color: '#a0d6b4', fontSize: 40}}>{char}</span>
                            </Animate>
                        )
                    })}
                </div>
                <Animate 
                    from={{x: -2200}} 
                    to={[{x: 0, y: 10}, {y:-5}]}
                    delay={2500}
                    style={{height: 2, width: 100, borderBottom: '1px solid #a0d6b4', position: 'relative', left: -200, top: 60}} 
                />
                <Animate 
                    from={{x: -2200}} 
                    to={[{x: 0, y: 10}, {y:-5}]}
                    delay={2900}
                    style={{height: 2, width: 100, borderBottom: '1px solid #a0d6b4', position: 'relative', left: -280, top: 70}} 
                />
            </div>
        )
    }

    return(
        <>
            <Animate from={{x: -2600}} to={{x: 0}} style={{color: '#a0d6b4', fontSize: 16}}>
                <span>Hello, my name is</span>
            </Animate>
            {animateName()}
        </>
    )
}

export default IntroName