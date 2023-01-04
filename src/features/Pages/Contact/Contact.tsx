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
                    style={props.activePage ==='fourth' ? {fontWeight: 800, fontSize: 28} : {transitionDuration: '.3s'}}
                >
                    {generateEdgeBtnTitle('CONTACT')}
                </div>
            </div>
        </>
    )
}
export default Contact