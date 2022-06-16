import {loadGLTF, loadTexture, loadTextures, loadVideo  } from "/libs/loader.js";
import { CSS3DObject } from '/libs/three.js-r132/examples/jsm/renderers/CSS3DRenderer.js';
import {mockWithVideo, mockWithImage} from '/libs/camera-mock.js';
import {createChromaMaterial} from '/libs/chroma-video.js';

const THREE = window.MINDAR.IMAGE.THREE;

document.addEventListener('DOMContentLoaded', () => {
  const start = async() => {
    const mindarThree = new window.MINDAR.IMAGE.MindARThree({
      container: document.body,
      imageTargetSrc: '/asset/targets.mind',
      maxTrack: 3,
    });
    const {renderer, cssRenderer, scene, cssScene, camera} = mindarThree;

    const light = new THREE.HemisphereLight( 0xffffff, 0xbbbbff, 1 );
    scene.add(light);

    //***********************************************new */
    const [
      cardTexture,
      emailTexture,
      locationTexture,
      webTexture,
      profileTexture,
          phoneTexture,
      instagramTexture,
      whatsappTexture,
      linkedinTexture,
      githubTexture,
      chatTexture,
      codeTexture,
      timelineTexture,
    ] = await loadTextures([
      '/asset/targets/card.png',
      '/asset/portfolio/icons/email.png',
      '/asset/portfolio/icons/location.png',
      '/asset/portfolio/icons/web.png',
      '/asset/portfolio/icons/profile.png',
    
      '/asset/portfolio/icons/phone.png',
      '/asset/portfolio/icons/instagram.png',
      '/asset/portfolio/icons/whatsapp.png',
      '/asset/portfolio/icons/linkedin.png',
      '/asset/portfolio/icons/github.png',
      '/asset/portfolio/icons/chat.png',
      '/asset/portfolio/icons/code.png',
      '/asset/portfolio/icons/timeline.png',

    ]);
    const planeGeometry = new THREE.PlaneGeometry(1, 0.552);
    const cardMaterial = new THREE.MeshBasicMaterial({map: cardTexture});
    // const cardMaterial = createChromaMaterial(cardTexture, 0xFFFFFF);

    const card = new THREE.Mesh(planeGeometry, cardMaterial);

    const iconGeometry = new THREE.CircleGeometry(0.075, 32);
    //**********************************************************************************************icon */
    const emailMaterial = new THREE.MeshBasicMaterial({map: emailTexture});
    // const emailMaterial = createChromaMaterial(emailTexture, 0x0094c6);
     const webMaterial = new THREE.MeshBasicMaterial({map: webTexture});
    // const webMaterial = createChromaMaterial(webTexture, 0x0094c6);
    const profileMaterial = new THREE.MeshBasicMaterial({map: profileTexture});
    // const profileMaterial = createChromaMaterial(profileTexture, 0x0094c6);
    const locationMaterial = new THREE.MeshBasicMaterial({map: locationTexture});
    // const locationMaterial = createChromaMaterial(locationTexture, 0x0094c6);

    const phoneMaterial = new THREE.MeshBasicMaterial({map: phoneTexture});
    // const emailMaterial = createChromaMaterial(emailTexture, 0x0094c6);
     const instagramMaterial = new THREE.MeshBasicMaterial({map: instagramTexture});
    // const webMaterial = createChromaMaterial(webTexture, 0x0094c6);
    const whatsappMaterial = new THREE.MeshBasicMaterial({map: whatsappTexture});
    // const profileMaterial = createChromaMaterial(profileTexture, 0x0094c6);
    const linkedinMaterial = new THREE.MeshBasicMaterial({map: linkedinTexture});
    // const locationMaterial = createChromaMaterial(locationTexture, 0x0094c6);
    const githubMaterial = new THREE.MeshBasicMaterial({map: githubTexture});
    // const emailMaterial = createChromaMaterial(emailTexture, 0x0094c6);
     const chatMaterial = new THREE.MeshBasicMaterial({map: chatTexture});
    // const webMaterial = createChromaMaterial(webTexture, 0x0094c6);
    const codeMaterial = new THREE.MeshBasicMaterial({map: codeTexture});
    // const profileMaterial = createChromaMaterial(profileTexture, 0x0094c6);
    const timelineMaterial = new THREE.MeshBasicMaterial({map: timelineTexture});
    // const locationMaterial = createChromaMaterial(locationTexture, 0x0094c6);

    //**********************************************************************************************icon */

    // const leftMaterial = new THREE.MeshBasicMaterial({map: leftTexture});
    // const rightMaterial = new THREE.MeshBasicMaterial({map: rightTexture});

    
    const emailIcon = new THREE.Mesh(iconGeometry, emailMaterial);
    const webIcon = new THREE.Mesh(iconGeometry, webMaterial);
    const profileIcon = new THREE.Mesh(iconGeometry, profileMaterial);
    const locationIcon = new THREE.Mesh(iconGeometry, locationMaterial);
    // const leftIcon = new THREE.Mesh(iconGeometry, leftMaterial);
    // const rightIcon = new THREE.Mesh(iconGeometry, rightMaterial);

    const phoneIcon = new THREE.Mesh(iconGeometry, phoneMaterial);
    const instagramIcon = new THREE.Mesh(iconGeometry, instagramMaterial);
    const whatsappIcon = new THREE.Mesh(iconGeometry, whatsappMaterial);
    const linkedinIcon = new THREE.Mesh(iconGeometry, linkedinMaterial);
    const githublIcon = new THREE.Mesh(iconGeometry, githubMaterial);
    const chatIcon = new THREE.Mesh(iconGeometry, chatMaterial);
    const codeIcon = new THREE.Mesh(iconGeometry, codeMaterial);
    const timelineIcon = new THREE.Mesh(iconGeometry, timelineMaterial);


    // const portfolioItem0Video = await loadVideo("/asset/portfolio/portfolio/paintandquest.mp4");
    // portfolioItem0Video.muted = true;
    // const portfolioItem0VideoTexture = new THREE.VideoTexture(portfolioItem0Video);
    // const portfolioItem0VideoMaterial = new THREE.MeshBasicMaterial({map: portfolioItem0VideoTexture});
    // const portfolioItem0Material = new THREE.MeshBasicMaterial({map: portfolioItem0Texture});
    // const portfolioItem1Material = new THREE.MeshBasicMaterial({map: portfolioItem1Texture});
    // const portfolioItem2Material = new THREE.MeshBasicMaterial({map: portfolioItem2Texture});

    // const portfolioItem0V = new THREE.Mesh(planeGeometry, portfolioItem0VideoMaterial); 
    // const portfolioItem0 = new THREE.Mesh(planeGeometry, portfolioItem0Material); 
    // const portfolioItem1 = new THREE.Mesh(planeGeometry, portfolioItem1Material); 
    // const portfolioItem2 = new THREE.Mesh(planeGeometry, portfolioItem2Material); 

    profileIcon.position.set(-0.42, -0.5, 0);
    webIcon.position.set(-0.14, -0.65, 0);
    emailIcon.position.set(0.14, -0.65, 0);
    locationIcon.position.set(0.42, -0.5, 0);

    phoneIcon.position.set(-0.57, -0.22, 0);
    instagramIcon.position.set(-0.57, 0.06, 0);
    whatsappIcon.position.set(-0.42, 0.34, 0);

    linkedinIcon.position.set(0.57, -0.22, 0);
    githublIcon.position.set(0.57, 0.06, 0);
    chatIcon.position.set(0.42, 0.34, 0);

    codeIcon.position.set(0.14, 0.49, 0);
    timelineIcon.position.set(-0.14, 0.49, 0);

    // const portfolioGroup = new THREE.Group();
    // portfolioGroup.position.set(0, 0, -0.01);
    // portfolioGroup.position.set(0, 0.6, -0.01);

    // portfolioGroup.add(portfolioItem0);
    // portfolioGroup.add(leftIcon);
    // portfolioGroup.add(rightIcon);
    // leftIcon.position.set(-0.7, 0, 0);
    // rightIcon.position.set(0.7, 0, 0);

    // const avatar = await loadGLTF('/asset/robot/RobotExpressive.glb');
    // avatar.scene.scale.set(0.04, 0.04, 0.04);
    // avatar.scene.position.set(0, -0.25, -0.3);

    const anchor = mindarThree.addAnchor(1);
    // anchor.group.add(avatar.scene);
    anchor.group.add(card);
    anchor.group.add(emailIcon);
    anchor.group.add(webIcon);
    anchor.group.add(profileIcon);
    anchor.group.add(locationIcon);
    // anchor.group.add(portfolioGroup);

    anchor.group.add(phoneIcon);
    anchor.group.add(instagramIcon);
    anchor.group.add(whatsappIcon);
    anchor.group.add(linkedinIcon);
    anchor.group.add(githublIcon);
    anchor.group.add(chatIcon);
    anchor.group.add(codeIcon);
    anchor.group.add(timelineIcon);

    const textElement = document.createElement("div");
    const textObj = new CSS3DObject(textElement);
    textObj.position.set(0, -1000, 0);
    textObj.visible = false;
    textElement.style.background = "#FFFFFF";
    textElement.style.padding = "30px";
    textElement.style.fontSize = "60px";

    const cssAnchor = mindarThree.addCSSAnchor(0);
    cssAnchor.group.add(textObj);

    // // handle buttons
    // leftIcon.userData.clickable = true;
    // rightIcon.userData.clickable = true;
    emailIcon.userData.clickable = true;
    webIcon.userData.clickable = true;
    profileIcon.userData.clickable = true;
    locationIcon.userData.clickable = true;
    // portfolioItem0.userData.clickable = true;
    // portfolioItem0V.userData.clickable = true;

    phoneIcon.userData.clickable = true;
    instagramIcon.userData.clickable = true;
    whatsappIcon.userData.clickable = true;
    linkedinIcon.userData.clickable = true;
    githublIcon.userData.clickable = true;
    chatIcon.userData.clickable = true;
    codeIcon.userData.clickable = true;
    timelineIcon.userData.clickable = true;

    // const portfolioItems = [portfolioItem0, portfolioItem1, portfolioItem2]; 
    // let currentPortfolio = 0;
    document.body.addEventListener('click', (e) => {
       
      const mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      const mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
      const mouse = new THREE.Vector2(mouseX, mouseY);
      const raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(scene.children, true);
      // console.log("click" + intersects.length);
      if (intersects.length > 0) {
	let o = intersects[0].object; 
 	while (o.parent && !o.userData.clickable) {
	  o = o.parent;
	}
	if (o.userData.clickable) {
    // console.log("clickable");
	  if (o === webIcon) {
      // console.log("web");
	    textObj.visible = true;
	    textElement.innerHTML = "https://github.com/masoud-bakhshi";
      window.open("http://www.devcodebase.com/", "_blank");
	  } else if (o === emailIcon) {
	    textObj.visible = true;
	    textElement.innerHTML = "masoud.main [at] gmail";
	  } else if (o === profileIcon) {
	    textObj.visible = true;
	    textElement.innerHTML = "http://devcodebase.cpm";
	  } else if (o === locationIcon) {
	    textObj.visible = true;
	    textElement.innerHTML = "Tehran, Iran";
    } 
    else if (o === phoneIcon) {
	    textObj.visible = true;
	    textElement.innerHTML = "http://devcodebase.cpm";
    } else if (o === instagramIcon) {
	    textObj.visible = true;
	    textElement.innerHTML = "http://devcodebase.cpm";
    } else if (o === whatsappIcon) {
	    textObj.visible = true;
	    textElement.innerHTML = "http://devcodebase.cpm";
    } else if (o === linkedinIcon) {
	    textObj.visible = true;
	    textElement.innerHTML = "http://devcodebase.cpm";
    } else if (o === githublIcon) {
	    textObj.visible = true;
	    textElement.innerHTML = "http://devcodebase.cpm";
    } else if (o === chatIcon) {
	    textObj.visible = true;
	    textElement.innerHTML = "http://devcodebase.cpm";
    } else if (o === codeIcon) {
	    textObj.visible = true;
	    textElement.innerHTML = "http://devcodebase.cpm";
    } else if (o === timelineIcon) {
	    textObj.visible = true;
	    textElement.innerHTML = "http://devcodebase.cpm";
	  }
	}
      }
    });

    //***********************************************new */
///**************************************************** */
// const video = await loadVideo("/asset/DeveloperCodeBaseVideo.mp4");
// const texture = new THREE.VideoTexture(video);


// // const geometry = new THREE.PlaneGeometry(1, 204/480);
//    const geometry = new THREE.PlaneGeometry(1, 1080/1920);

// // const material = new THREE.MeshBasicMaterial({map: texture});
// const material = createChromaMaterial(texture, 0x00ff00);
// const plane = new THREE.Mesh(geometry, material);
// // plane.rotation.x = Math.PI/2;
// //     plane.position.y = 0.7;
//     plane.scale.multiplyScalar(6);
// const anchor = mindarThree.addAnchor(1);
//     anchor.group.add(plane);

//     anchor.onTargetFound = () => {
//       video.play();
//     }
//     anchor.onTargetLost = () => {
//       video.pause();
//     }
//     video.addEventListener( 'play', () => {
//       video.currentTime = 0;
//     });
///***************************************************** */

    const raccoon = await loadGLTF('/asset/musicband-raccoon/scene.gltf');
    raccoon.scene.scale.set(0.1, 0.1, 0.1);
    raccoon.scene.position.set(0, -0.4, 0);

    const bear = await loadGLTF('/asset/musicband-bear/scene.gltf');
    bear.scene.scale.set(0.1, 0.1, 0.1);
    bear.scene.position.set(0, -0.4, 0);
//*************************************** */
    // const robot = await loadGLTF('/asset/robot/RobotExpressive.glb');
    // robot.scene.scale.set(0.1, 0.1, 0.1);
    // robot.scene.position.set(0, -0.4, 0);
//********************************************************************** */
    const raccoonAnchor = mindarThree.addAnchor(0);
    raccoonAnchor.group.add(raccoon.scene);

    const bearAnchor = mindarThree.addAnchor(2);
    bearAnchor.group.add(bear.scene);

    // const robotAnchor = mindarThree.addAnchor(1);
    // robotAnchor.group.add(robot.scene);
    
//************* */
    const raconmixer = new THREE.AnimationMixer(raccoon.scene);
    const raconaction = raconmixer.clipAction(raccoon.animations[0]);
    raconaction.play();

    const bearmixer = new THREE.AnimationMixer(bear.scene);
    const bearaction = bearmixer.clipAction(bear.animations[0]);
    bearaction.play();

    // const robotmixer = new THREE.AnimationMixer(robot.scene);
    // const robotaction = robotmixer.clipAction(robot.animations[0]);
    // robotaction.play();
    
    
    

    const clock = new THREE.Clock();
//***************** */
    await mindarThree.start();
    // renderer.setAnimationLoop(() => {
    //   renderer.render(scene, camera);
    // });
    renderer.setAnimationLoop(() => {
      const delta = clock.getDelta();
      raccoon.scene.rotation.set(0, raccoon.scene.rotation.y+delta, 0);
      bear.scene.rotation.set(0, bear.scene.rotation.y+delta, 0);
      // robot.scene.rotation.set(0, robot.scene.rotation.y+delta, 0);

      raconmixer.update(delta);
      bearmixer.update(delta);
      // robotmixer.update(delta);
//***********************************************************new */
const elapsed = clock.getElapsedTime();
const iconScale = 1 + 0.2 * Math.sin(elapsed*5);
[webIcon, emailIcon, profileIcon, locationIcon , phoneIcon, instagramIcon, whatsappIcon,linkedinIcon,githublIcon,chatIcon,codeIcon,timelineIcon].forEach((icon) => {
icon.scale.set(iconScale, iconScale, iconScale);
});

// const avatarZ = Math.min(0.3, -0.3 + elapsed * 0.5);
// avatar.scene.position.set(0, -0.25, avatarZ);
//**************************************************************neww */
      renderer.render(scene, camera);
      cssRenderer.render(cssScene, camera);

    });
  }
  start();
});
