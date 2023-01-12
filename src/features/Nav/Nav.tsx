import landingIcon from '../../assets/hello.png'

const Nav = (props) => {


    return(
        <div id='nav'>
            <div id='nav-item' onClick={() => props.handleSlide('first')}>
                <img src={landingIcon} width={40} height={40}/>
            </div>
            <div id='nav-item' onClick={() => props.handleSlide('second')}>
                <img src={landingIcon} width={40} height={40}/>
            </div>
            <div id='nav-item' onClick={() => props.handleSlide('third')}>
                <img src={landingIcon} width={40} height={40}/>
            </div>
            <div id='nav-item' onClick={() => props.handleSlide('fourth')}>
                <img src={landingIcon} width={40} height={40}/>
            </div>
        </div>
    )
}
export default Nav