import c from '../../../assets/c2.png'
import nc from '../../../assets/nc.png'
import a from '../../../assets/astraphos.png'
import d from '../../../assets/dream2.png'
import unnc from '../../../assets/unnc.png'
import unl from '../../../assets/unl.png'
import pku from '../../../assets/pku.png'
import {useContext} from 'react'
import Animate from '../../AnimateWrapper'
import { PageAnimationContext } from '../Stacker'


const Scrollbar = ({chosenIndex}) => {
  const {visitedContext} = useContext(PageAnimationContext)

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
        {visitedContext.second && (
          <Animate from={{y: 500, x: -25} } to={[{y: 0}, {x:0}]} delay={500} config={{duration: 600}} style={{height: '100%'}} >
            <img className='thumb' src={src} style={{top: position + '%', width: 40, height: 40}} />
          </Animate>
        )}
      </div>
    )
  }

  export default Scrollbar