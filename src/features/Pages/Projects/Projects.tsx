import generateEdgeBtnTitle from '../../../utils/generateEdgeBtnTitle'
const Projects = (props) => {

    return(
        <>
            <div 
                id='projects' 
                className='page'
                style={{
                    transition: 'transform 300ms ease-in-out .3s',
                    transform: props.slide.second ? 'translateX(-92%)' : 'translateX(0%)'
                }}
            >   
                <div 
                    className='edgeContainer' 
                    onClick={() => props.handleSlide('second')}
                    style={props.activePage ==='second' ? {fontWeight: 800, fontSize: 28} : {}}
                >
                    {generateEdgeBtnTitle('PROJECTS')}
                </div>
            </div>
        </>
    )
}
export default Projects