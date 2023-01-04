import generateEdgeBtnTitle from '../../../utils/generateEdgeBtnTitle'
const Landing = (props) => {

    return(
        <>
            <div 
                id='landing' 
                className='page' 
                style={{
                    transition: props.slide.first ? 'transform 300ms ease-in-out .1s' : 'transform 300ms ease-in-out .5s',
                    transform: props.slide.first ? 'translateX(-96%)' : 'translateX(0%)'
                }}
            >   
                <div 
                    className='edgeContainer' 
                    onClick={() => props.handleSlide('first')} 
                    style={props.activePage ==='first' ? {fontWeight: 800, fontSize: 28} : {}}
                >
                    {generateEdgeBtnTitle('Landing')}
                </div>
            </div>
        </>
    )
}
export default Landing