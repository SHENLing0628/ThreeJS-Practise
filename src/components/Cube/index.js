import React from  'react';
import * as THREE from 'three';
import Orbitcontrols from 'three-orbitcontrols';
import './index.scss';

export default class Cube extends React.Component {
  // constructor (props) {
  //   super(props);
  //   this.state = {}
  // }

  componentDidMount() {
    this.initThree();
  }

  initThree = () => {

    let camera, scene, renderer;
    let group;
    let container = document.getElementById('cube');
    let width = container.clientWidth,height = container.clientHeight;

    init();
    animate();
    
    function init() {
      //create scene
      scene = new THREE.Scene();
      scene.background = new THREE.Color(0x515151);

      group = new THREE.Group();
      scene.add(group);

      //create camera
      camera = new THREE.PerspectiveCamera( 60, window.innerWidth/window.innerHeight, 1, 2000 );
			camera.position.x = -10;
      camera.position.y = 15;
			camera.position.z = 500;

      //create the cube
      let geometry = new THREE.BoxGeometry(100, 100, 100); //create BoxGeometry object
      let material = new THREE.MeshBasicMaterial({ color: 0xffffff}); //set the material of the cube
      let cube = new THREE.Mesh( geometry, material); //Mesh contains the cube and the material, we can push the mesh object into our scenerio, and make it moves freely in the scene
      group.add(cube);

      //create renderer
      renderer = new THREE.WebGLRenderer();
      renderer.setClearColor( 0xffffff );
			renderer.setPixelRatio( window.devicePixelRatio );
      renderer.setSize( window.innerWidth, window.innerHeight);//渲染器大小尺寸
      container.appendChild( renderer.domElement );

    }

    function animate () {
      requestAnimationFrame(animate);
      group.rotation.x += 0.01;
      group.rotation.y += 0.01;

      renderer.render( scene, camera);
    }

    

  }

  render () {
    return (
      <div id='cube'/>
    )
  }
}
