import generateEdgeBtnTitle from '../../../utils/generateEdgeBtnTitle'
const About = (props) => {

    return(
        <>
            <div id='about' className='page'>   
                <div className='edgeContainer' onClick={() => props.changeOrder('About')}>
                    {generateEdgeBtnTitle('ABOUT')}
                </div>
            </div>
        </>
    )
}
export default About