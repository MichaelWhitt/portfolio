import c from '../../../assets/c2.png'
import nc from '../../../assets/nc.png'
import a from '../../../assets/astraphos.png'
import d from '../../../assets/dream2.png'
import unnc from '../../../assets/unnc.png'
import unl from '../../../assets/unl.png'
import pku from '../../../assets/pku.png'


const Scrollbar = ({chosenIndex}) => {

    let position = chosenIndex * 10
    let src = ''
    switch(chosenIndex) {
      case 1: 
        src = c
        break
      case 2: 
        src = nc
        break
      case 3: 
        src = a
        break
      case 4: 
        src = d
        break
      case 6: 
        src = nc
        break
      case 7: 
        src = unnc
        break
      case 8: 
        src = unl
        break
      case 9: 
        src = pku
        break
    }
  
    return(
      <div style={{
        height: 600,
        width: 0,
        background: '#afa',
        marginRight: 30
      }}>
        {/* <div className='thumb' style={{top: position +'%'}} /> */}
        <img className='thumb' src={src} style={{top: position +'%', width: 40, height: 40}} />
      </div>
    )
  }

  export default Scrollbar