import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import * as SkeletonUtils from 'three/addons/utils/SkeletonUtils.js';

function variate(baseValue, maxVariation){
    return baseValue + (Math.random()-0.5) * 2 * maxVariation;
}

var settings = {
    sun: {
        color: 0xa4bfff,
        position: new THREE.Vector3(-6, 10, 10),
        shadow: {
            size: 40
        }
    },
    ambient: {
        color: 0x999999
    },
    scene: {
        background: 0x455ebd
    },
    wind: {
        minRot: 3,
        maxRot: 11,
        period: 15,
        axis: new THREE.Vector3(1, 0, 1)
    },
    fishes: {
        spawnCount: 6,
        spawnPoint: new THREE.Vector3(-1, 4, -30),
        maxSpawnTimeWait: 4,
        endPoint: new THREE.Vector3(-1, 4, 30),
        distStep: new THREE.Vector3(1.5, 0, 0),
        speed: 2,
        maxSpeedVar: 1,
        scale: 0.9,
        maxScaleVar: 0.4,
        maxHeightVar: 2,
        animTimeScale: 4,
    }
}

//#region Scene init
function getWidth(){
    return window.innerWidth;
}

function getHeight(){
    return window.innerHeight;
}

const scene = new THREE.Scene();
scene.background = new THREE.Color(settings.scene.background);

const camera = new THREE.PerspectiveCamera(50, getWidth()/getHeight(), 0.1, 1000);
camera.position.set(0, 0, -5);

const renderer = new THREE.WebGLRenderer({
    antialias: true,
    canvas: document.querySelector("#renderer")
});
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

window.addEventListener("resize", () => {
    onResize();
});

const controls = new OrbitControls(camera, renderer.domElement);
//#endregion

//#region Elements
const loader = new GLTFLoader();

let algees = [];
let fishPrefab = null;
let fishClip = null;

function loadScene(){
    const ALGEE_SKELETON_PREFIX = "Algee_Skeleton";
    const ALGEE_BONE_PREFIX = "Bone";
    const CAMERA_NODE_NAME = "CameraNode";
    const FISH_PREFAB_NAME = "Fish_Skeleton";
    const FISH_ANIM_NAME = "FishWaving";

    algees = [];

    loader.load("/assets/scene.glb", (imported) => {
        scene.add(imported.scene);  
        
        imported.animations.forEach(clip => {
            if(clip.name === FISH_ANIM_NAME){
                fishClip = clip;
            }
        });

        scene.traverse(obj => {
            if(obj.name.startsWith(ALGEE_SKELETON_PREFIX)){
                let algee = {
                    obj: obj,
                    bones: []
                };

                let bone_root = obj;
                while(bone_root){
                    bone_root = bone_root.children.filter(e => e.name.startsWith(ALGEE_BONE_PREFIX))[0];
                    if(bone_root) algee.bones.push(bone_root);
                }

                algees.push(algee);
            }

            else if(obj.name === CAMERA_NODE_NAME){
                camera.position.copy(obj.position)
                camera.rotation.copy(obj.rotation);
            }

            else if(obj.name === FISH_PREFAB_NAME){
                fishPrefab = obj;
            }
        });

        fishPrefab.parent.remove(fishPrefab);
        createFishes();
        toggleShadow(true);
        updateAlgees();
    });
}

loadScene();

const ambient_light = new THREE.AmbientLight(settings.ambient.color);
scene.add(ambient_light);

const sun = new THREE.DirectionalLight(settings.sun.color, 1);
sun.position.set(
    settings.sun.position.x,
    settings.sun.position.y,
    settings.sun.position.z
);
sun.shadow.camera.left = -settings.sun.shadow.size;
sun.shadow.camera.top = -settings.sun.shadow.size;
sun.shadow.camera.right = settings.sun.shadow.size;
sun.shadow.camera.bottom = settings.sun.shadow.size;
sun.shadow.mapSize = new THREE.Vector2(1024, 1024);
sun.shadow.bias = -0.0005;
scene.add(sun);

function toggleShadow(enabled){
    scene.traverse(c => {
        if(c.isMesh || (c.isLight && c.type != "AmbientLight")) c.castShadow = enabled;
        if(c.isMesh) c.receiveShadow = enabled;
    });
}

//#endregion

//#region Events
let delta = 0;

let windTime = 0;
let windRot = 0;
let clock = new THREE.Clock();

function updateWind(){
    let min = settings.wind.minRot;
    let max = settings.wind.maxRot;
    let period = settings.wind.period;

    windTime += delta;
    windRot = (Math.sin(windTime / period * Math.PI*2)+1)/2
        * (max-min) + min;
}

function updateAlgees(){
    algees.forEach(({obj, bones}) => {
        bones.forEach(b => {
            b.rotation.set(0, 0, 0);
            b.rotateOnAxis(
                settings.wind.axis,
                Math.PI/180*windRot
            );
        });
    });
}

let fishes = [];

function createFishes(){
    for(let i = 0; i < settings.fishes.spawnCount; i++){
        let fish = SkeletonUtils.clone(fishPrefab);
        let step = settings.fishes.distStep.clone().multiplyScalar(i);

        fish.fish_spawnPoint = settings.fishes.spawnPoint.clone().add(step);
        fish.fish_endPoint = settings.fishes.endPoint.clone().add(step);
        fish.fish_dir = fish.fish_endPoint.clone().sub(fish.fish_spawnPoint).normalize();
        fish.fish_timewait = settings.fishes.maxSpawnTimeWait * Math.random();

        fish.fish_mixer = new THREE.AnimationMixer(fish);
        fish.fish_anim = fish.fish_mixer.clipAction(fishClip);
        fish.fish_anim.play();

        scene.add(fish);
        fishes.push(fish);
        resetFish(fish);
    }
}

function resetFish(fish){
    let heightOffset = variate(0, settings.fishes.maxHeightVar);
    fish.position.copy(fish.fish_spawnPoint.clone().add(new THREE.Vector3(0, heightOffset, 0)));
    fish.lookAt(fish.fish_endPoint);

    let scale = variate(settings.fishes.scale, settings.fishes.maxScaleVar);
    let speed = variate(settings.fishes.speed, settings.fishes.maxSpeedVar);

    fish.fish_speed = speed;
    fish.scale.set(scale, scale, scale);
    fish.fish_mixer.timeScale = settings.fishes.animTimeScale * speed / settings.fishes.speed;
}

function updateFishes(){
    fishes.forEach(fish => {
        fish.fish_mixer.update(delta);

        if(fish.fish_timewait > 0){
            fish.fish_timewait -= delta;
            return;
        }

        let newPos = fish.position.clone().add(fish.fish_dir.clone().multiplyScalar(delta * fish.fish_speed));
        fish.position.copy(newPos);

        // Flemme de squared
        if(fish.position.distanceTo(fish.fish_spawnPoint) > fish.fish_endPoint.distanceTo(fish.fish_spawnPoint)){
            resetFish(fish);
        }
    });
}

function animate(){
    delta = clock.getDelta();
    controls.update();
    renderer.render(scene, camera);
    updateWind();
    updateAlgees();
    updateFishes();
    requestAnimationFrame(animate);
}

function onResize(){
    camera.aspect = getWidth() / getHeight();
    camera.updateProjectionMatrix();
    renderer.setSize(getWidth(), getHeight());
}

onResize();
animate();
//#endregion