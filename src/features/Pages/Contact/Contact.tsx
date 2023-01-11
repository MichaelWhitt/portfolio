import generateEdgeBtnTitle from '../../../utils/generateEdgeBtnTitle'
import Animate from '../../AnimateWrapper'
import NavWidget from '../../Nav/NavWidget'
import contactIcon from '../../../assets/contactHollow.png'
const Contact = (props) => {

    return(
        <>
            <div 
                id='contact' 
                className='page'
            >   
                <div id='contact-content'>
                    <Animate 
                        from={{y: 2600}} 
                        to={{y: 0}} 
                        style={{height: 100, width: 2, borderLeft: '1px solid #a0d6b4', position: 'absolute', left: '14%', top: 25}} 
                    />
                    <Animate 
                        from={{x: 3600}} 
                        to={{x: 0}} 
                        style={{height: 2, width: 100, borderTop: '1px solid #a0d6b4', position: 'absolute', left: '14%', top: 25}} 
                    />
                </div>
                
                <div 
                    className='edgeContainer' 
                    onClick={() => props.handleSlide('fourth')}
                    style={props.activePage ==='fourth' ? {fontWeight: 800, fontSize: 28} : {transitionDuration: '.3s'}}
                >
                    {generateEdgeBtnTitle('CONTACT')}
                    <Animate 
                        from={{y: 2600}} 
                        to={{y: 0}}
                        style={{marginTop: 'auto', marginBottom: 20, width: '100%', textAlign: 'center'}}
                    >
                        <img src={contactIcon} width={40} height={40}/>
                    </Animate>
                </div>
                <NavWidget handleSlide={props.handleSlide} />
                
            </div>
        </>
    )
}
export default Contact