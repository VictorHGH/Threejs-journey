import{S as h,e as m,g as l,a as g,M as p,P as u,W as P,C as f}from"./three.module.fce46361.js";import{O as M}from"./OrbitControls.282dc705.js";const s=document.querySelector("canvas.webgl"),a=new h,r=new m,c=500,w=new Float32Array(c*3*3);for(let o=0;o<c*3*3;o++)w[o]=(Math.random()-.5)*3;const b=new l(w,3);r.setAttribute("position",b);const x=new g({color:16711680,wireframe:!0}),A=new p(r,x);a.add(A);const e={width:window.innerWidth,height:window.innerHeight};window.addEventListener("resize",()=>{e.width=window.innerWidth,e.height=window.innerHeight,t.aspect=e.width/e.height,t.updateProjectionMatrix(),n.setSize(e.width,e.height),n.setPixelRatio(Math.min(window.devicePixelRatio,2))});const t=new u(75,e.width/e.height,.1,100);t.position.z=3;a.add(t);const i=new M(t,s);i.enableDamping=!0;i.screenSpacePanning=!1;i.minDistance=2;i.maxDistance=5;i.maxPolarAngle=Math.PI/2;const n=new P({canvas:s});n.setSize(e.width,e.height);n.setPixelRatio(Math.min(window.devicePixelRatio,2));const v=new f,d=()=>{v.getElapsedTime(),i.update(),n.render(a,t),window.requestAnimationFrame(d)};d();
