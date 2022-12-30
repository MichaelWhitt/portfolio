import generateEdgeBtnTitle from '../../../utils/generateEdgeBtnTitle'
const Landing = (props) => {

    return(
        <>
            <div id='landing' className='page'>   
                <div className='edgeContainer' onClick={() => props.changeOrder('Landing')}>
                    {generateEdgeBtnTitle('LANDING')}
                </div>
            </div>
        </>
    )
}
export default Landing