import generateEdgeBtnTitle from '../../../utils/generateEdgeBtnTitle'
const Contact = (props) => {

    return(
        <>
            <div 
                id='contact' 
                className='page'
            >   
                <div 
                    className='edgeContainer' 
                    onClick={() => props.handleSlide('fourth')}
                    style={props.activePage ==='fourth' || props.slide.fourth ? {justifyContent: 'flex-end', paddingBottom: 40} : {}}
                >
                    {generateEdgeBtnTitle('CONTACT')}
                </div>
            </div>
        </>
    )
}
export default Contact