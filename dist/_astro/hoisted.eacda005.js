import{S as c,B as w,a as m,M as h,P as p,W as l,C as g}from"./three.module.fce46361.js";import{O as x}from"./OrbitControls.282dc705.js";import{g as u}from"./index.10963069.js";import{G as v}from"./lil-gui.esm.1e0f7d72.js";const t=new v,M={spin:()=>{u.to(i.rotation,{duration:1,y:i.rotation.y+10})}},s=document.querySelector("canvas.webgl"),a=new c,P=new w(1,1,1),S=new m({color:16711680}),i=new h(P,S);a.add(i);t.add(i.position,"y").min(-3).max(3).step(.01).name("position Y");t.add(i.position,"x").min(-3).max(3).step(.01).name("position X");t.add(i.position,"z",-3,3,.01).name("position Z");t.add(i,"visible");t.add(i.material,"wireframe");t.addColor(i.material,"color");t.add(M,"spin");const e={width:window.innerWidth,height:window.innerHeight};window.addEventListener("resize",()=>{e.width=window.innerWidth,e.height=window.innerHeight,n.aspect=e.width/e.height,n.updateProjectionMatrix(),o.setSize(e.width,e.height),o.setPixelRatio(Math.min(window.devicePixelRatio,2))});const n=new p(75,e.width/e.height,.1,100);n.position.z=3;a.add(n);const r=new x(n,s);r.enableDamping=!0;const o=new l({canvas:s});o.setSize(e.width,e.height);o.setPixelRatio(Math.min(window.devicePixelRatio,2));const y=new g,d=()=>{y.getElapsedTime(),r.update(),o.render(a,n),window.requestAnimationFrame(d)};d();