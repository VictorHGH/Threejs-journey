import{S as b,e as x,q as f,o as w,r as M,s as P,t as v,P as A,W as y,C as z}from"./three.module.300dcea1.js";import{O as C}from"./OrbitControls.d7fb872a.js";import{G}from"./lil-gui.esm.1e0f7d72.js";new G;const l=document.querySelector("canvas.webgl"),c=new b,R=new x,S=R.load("/textures/particles/2.png"),n=new f(1,32,32),s=2e3,h=new Float32Array(s*3),p=new Float32Array(s*3);for(let i=0;i<s*3;i++)h[i]=(Math.random()-.5)*10,p[i]=Math.random();n.setAttribute("position",new w(h,3));n.setAttribute("color",new w(p,3));const t=new M;t.size=.1;t.sizeAttenuation=!0;t.transparent=!0;t.alphaMap=S;t.vertexColors=!0;t.depthWrite=!1;t.blending=P;const W=new v(n,t);c.add(W);const e={width:window.innerWidth,height:window.innerHeight};window.addEventListener("resize",()=>{e.width=window.innerWidth,e.height=window.innerHeight,o.aspect=e.width/e.height,o.updateProjectionMatrix(),r.setSize(e.width,e.height),r.setPixelRatio(Math.min(window.devicePixelRatio,2))});const o=new A(75,e.width/e.height,.1,100);o.position.z=3;c.add(o);const u=new C(o,l);u.enableDamping=!0;const r=new y({canvas:l});r.setSize(e.width,e.height);r.setPixelRatio(Math.min(window.devicePixelRatio,2));const L=new z,m=()=>{const i=L.getElapsedTime();for(let a=0;a<s;a++){const d=a*3,g=n.attributes.position.array[d];n.attributes.position.array[d+1]=Math.sin(i+g)}n.attributes.position.needsUpdate=!0,u.update(),r.render(c,o),window.requestAnimationFrame(m)};m();
