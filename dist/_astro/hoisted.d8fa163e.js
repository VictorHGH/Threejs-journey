import{e as l,N as w,S as g,B as h,a as m,M as p,P as u,W as x,L as M,C as P}from"./three.module.300dcea1.js";import{O as j}from"./OrbitControls.d7fb872a.js";const r=new M;r.onStart=()=>{console.log("onStart")};r.onLoad=()=>{console.log("onLoad")};r.onProgress=()=>{console.log("onProgress")};r.onError=()=>{console.log("onError")};const t=new l(r),a=t.load("/textures/door/color.jpg");t.load("/textures/door/alpha.jpg");t.load("/textures/door/height.jpg");t.load("/textures/door/normal.jpg");t.load("/textures/door/AO.jpg");t.load("/textures/door/metalness.jpg");t.load("/textures/door/roughness.jpg");a.magFilter=w;const s=document.querySelector("canvas.webgl"),i=new g,L=new h(1,1,1),S=new m({map:a}),v=new p(L,S);i.add(v);const e={width:window.innerWidth,height:window.innerHeight};window.addEventListener("resize",()=>{e.width=window.innerWidth,e.height=window.innerHeight,o.aspect=e.width/e.height,o.updateProjectionMatrix(),n.setSize(e.width,e.height),n.setPixelRatio(Math.min(window.devicePixelRatio,2))});const o=new u(75,e.width/e.height,.1,100);o.position.x=1;o.position.y=1;o.position.z=1;i.add(o);const d=new j(o,s);d.enableDamping=!0;const n=new x({canvas:s});n.setSize(e.width,e.height);n.setPixelRatio(Math.min(window.devicePixelRatio,2));const z=new P,c=()=>{z.getElapsedTime(),d.update(),n.render(i,o),window.requestAnimationFrame(c)};c();
