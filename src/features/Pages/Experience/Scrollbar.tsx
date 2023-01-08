
const Scrollbar = ({chosen}) => {

    let position = chosen * 10
  
    return(
      <div style={{
        height: 600,
        width: 0,
        background: '#afa',
        marginRight: 30
      }}>
        <div className='thumb' style={{top: position +'%'}} />
      </div>
    )
  }

  export default Scrollbar