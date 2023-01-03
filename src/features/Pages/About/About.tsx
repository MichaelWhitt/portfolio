import generateEdgeBtnTitle from '../../../utils/generateEdgeBtnTitle'
const About = (props) => {

    return(
        <>
            <div 
                id='about' 
                className='page'
                style={{
                    transition: props.slide.third ? 'transform 300ms ease-in-out .5s' : 'transform 300ms ease-in-out .1s',
                    transform: props.slide.third ? 'translateX(-88%)' : 'translateX(0%)'
                }}
            >   
                <div 
                    className='edgeContainer' 
                    onClick={() => props.handleSlide('third')}
                    style={props.activePage ==='third' || props.slide.third ? {justifyContent: 'flex-end', paddingBottom: 40} : {}}
                >
                    {generateEdgeBtnTitle('ABOUT')}
                </div>
            </div>
        </>
    )
}
export default About