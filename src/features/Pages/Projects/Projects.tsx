import generateEdgeBtnTitle from '../../../utils/generateEdgeBtnTitle'
const Projects = (props) => {

    return(
        <>
            <div id='projects' className='page'>   
                <div className='edgeContainer' onClick={() => props.changeOrder('Projects')}>
                    {generateEdgeBtnTitle('PROJECTS')}
                </div>
            </div>
        </>
    )
}
export default Projects