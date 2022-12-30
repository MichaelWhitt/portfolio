import generateEdgeBtnTitle from '../../../utils/generateEdgeBtnTitle'
const Contact = (props) => {

    return(
        <>
            <div id='contact' className='page'>   
                <div className='edgeContainer' onClick={() => props.changeOrder('Contact')}>
                    {generateEdgeBtnTitle('CONTACT')}
                </div>
            </div>
        </>
    )
}
export default Contact