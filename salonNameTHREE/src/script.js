import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'dat.gui'
import typefaceFont from 'three/examples/fonts/helvetiker_regular.typeface.json'


// Debug
// const gui = new dat.GUI()

//import from canvas
const canvas = document.querySelector('canvas.mycanvas')

//we always need a scene
const scene = new THREE.Scene()

//load the textures
const textureLoader = new THREE.TextureLoader()
const matcapTexture = textureLoader.load('textures/matcaps/purple.jpeg')
const matcapTexture2 = textureLoader.load('textures/matcaps/pink.png')

//use font 
const fontLoader = new THREE.FontLoader()

fontLoader.load(
    '/fonts/helvetiker_regular.typeface.json',
    (font) =>
    {
        // Material
        const material = new THREE.MeshMatcapMaterial({ matcap: matcapTexture })
        const material2 = new THREE.MeshMatcapMaterial({ matcap: matcapTexture2 })

        // Text
        const textGeometry = new THREE.TextBufferGeometry(
            'Colorful',
            {
                font: font,
                size: 0.3,
                height: 0.2,
                curveSegments: 15,
                bevelEnabled: true,
                bevelThickness: 0.03,
                bevelSize: 0.02,
                bevelOffset: 0,
                bevelSegments: 5
            }
        )

        const textGeometry2 = new THREE.TextBufferGeometry(
            'Nail Salon',
            {
                font: font,
                size: 0.3,
                height: 0.2,
                curveSegments: 15,
                bevelEnabled: true,
                bevelThickness: 0.03,
                bevelSize: 0.02,
                bevelOffset: 0,
                bevelSegments: 5
            }
        )



    // move object use translate function learned from class
        textGeometry.translate(-1.75,0,0)
        textGeometry2.translate(-0.15,0,0)



    // create mesh
        const text = new THREE.Mesh(textGeometry, material);
        const text2 = new THREE.Mesh(textGeometry2, material2);

    // grouping 

        const group = new THREE.Group();
        group.add(text);
        group.add(text2);


        // scene.add(text)
        // scene.add(text2)
        // add to the scene 
        scene.add(group);

        // use animation function learned form the class
        var animate = function () {
            requestAnimationFrame( animate );
            group.rotation.y += 0.005;
         //  redrawObject();

            // renderer.render( scene);
          renderer.render(scene);
        };

        animate();

    
    }
)

// get full screen 
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

// resize 
window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

// camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 2
camera.position.y = 0
camera.position.z = 2
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

// renderer 
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

// set up clock
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()