import generateEdgeBtnTitle from '../../../utils/generateEdgeBtnTitle'

const Experience = (props) => {

    return(
        <>
            <div 
                id='xp' 
                className='page'
                style={{
                    transition: 'transform 300ms ease-in-out .3s',
                    transform: props.slide.second ? 'translateX(-92%)' : 'translateX(0%)'
                }}
            >   
                <div id='xp-content'>
                        stuff goes in here
                </div>
                
                <div 
                    className='edgeContainer' 
                    onClick={() => props.handleSlide('second')}
                    style={props.activePage ==='second' ? {fontWeight: 800, fontSize: 28} : {transitionDuration: '.3s'}}
                >
                    {generateEdgeBtnTitle('Experience')}
                </div>
            </div>
        </>
    )
}
export default Experience