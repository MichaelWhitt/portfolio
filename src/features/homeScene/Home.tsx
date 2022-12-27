import * as THREE from 'three'
import moon from '../../assets/Carbon_normal.png'

const Home = () => {
// === THREE.JS CODE START ===

    var scene = new THREE.Scene();
    
    var camera = new THREE.PerspectiveCamera( 30, window.innerWidth/window.innerHeight, 0.1, 1000 );
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement);
    const geometry = new THREE.TorusGeometry( 10, 2, 2, 6 );
    const moonTexture = new THREE.TextureLoader().load(moon)
    const material = new THREE.MeshBasicMaterial( { map: moonTexture } );
    const torus = new THREE.Mesh( geometry, material );
    scene.add( torus );
    camera.position.z = 50;
    camera.position.y = 18;
    
    torus.rotation.z = 0//rotate the initial object -> 2.094 radians per hex spin
    
    var animate = function () {
      requestAnimationFrame( animate );
      //torus.rotation.x -= 0.01;
      //torus.rotation.y += 0.01;
      //torus.rotation.z -= 0.005
      renderer.render( scene, camera );
      
    };
    
    animate();

    const spin = (direction) => {
        let interval = 150
        for (let i = 0; i < 4; i++){
            setTimeout(() => {
                direction === 'left' ? torus.rotation.z += 0.26175 : torus.rotation.z -= 0.26175
            }, interval * i)
        }
    }



// === THREE.JS EXAMPLE CODE END ===

const btnStyle = {marginRight: 5, background: '#9fa', color: '#313131', fontWeight: 700}
    return(
        <div style={{position: 'absolute', zIndex: 5, bottom: 10, left: window.innerWidth /2 - 56}}>
            <button style={btnStyle} onClick={() => spin('left')}>
                {'<-'}
            </button>
            <button style={btnStyle} onClick={() => spin('right')}>
                {'->'}
            </button>
        </div>
    )
}
export default Home