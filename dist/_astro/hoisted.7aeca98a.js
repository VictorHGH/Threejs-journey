import{S as J,F as K,k as Q,R as c,G as W,M as a,B as I,l as g,m as O,n as V,o as q,p as X,q as Y,D as Z,r as T,P as _,W as $,s as ee,C as te}from"./three.module.fce46361.js";import{O as oe}from"./OrbitControls.282dc705.js";import{G as se}from"./lil-gui.esm.1e0f7d72.js";const f=new se,B=document.querySelector("canvas.webgl"),o=new J,ae=new K("#262837",1,15);o.fog=ae;const e=new Q,ne=e.load("/textures/door/color.jpg"),re=e.load("/textures/door/alpha.jpg"),ie=e.load("/textures/door/AO.jpg"),de=e.load("/textures/door/height.jpg"),he=e.load("/textures/door/normal.jpg"),ce=e.load("/textures/door/metalness.jpg"),pe=e.load("/textures/door/roughness.jpg"),we=e.load("/textures/bricks/color.jpg"),ue=e.load("/textures/bricks/AO.jpg"),ge=e.load("/textures/bricks/normal.jpg"),le=e.load("/textures/bricks/roughness.jpg"),z=e.load("/textures/grass/color.jpg"),v=e.load("/textures/grass/AO.jpg"),j=e.load("/textures/grass/normal.jpg"),A=e.load("/textures/grass/roughness.jpg");z.repeat.set(8,8);v.repeat.set(8,8);j.repeat.set(8,8);A.repeat.set(8,8);z.wrapS=c;v.wrapS=c;j.wrapS=c;A.wrapS=c;z.wrapT=c;v.wrapT=c;j.wrapT=c;A.wrapT=c;const l=new W;o.add(l);const w=new a(new I(4,2.5,4),new g({map:we,aoMap:ue,normalMap:ge,roughnessMap:le}));w.geometry.setAttribute("uv2",new O(w.geometry.attributes.uv.array,2));w.position.y=1.25;l.add(w);const F=new a(new V(3.5,1,4),new g({color:"#b35f45"}));F.position.y=2.5+.5;F.rotation.y=Math.PI*.25;l.add(F);const u=new a(new q(20,20),new g({map:z,aoMap:v,normalMap:j,roughnessMap:A}));u.geometry.setAttribute("uv2",new O(u.geometry.attributes.uv.array,2));u.rotation.x=-Math.PI*.5;u.position.y=0;o.add(u);const b=new a(new q(2,2,100,100),new g({map:ne,transparent:!0,alphaMap:re,aoMap:ie,displacementMap:de,displacementScale:.1,normalMap:he,metalnessMap:ce,roughnessMap:pe}));b.geometry.setAttribute("uv2",new O(b.geometry.attributes.uv.array,2));b.position.z=2+.01;b.position.y=1;l.add(b);const P=new X(1,16,16),k=new g({color:"#89c854"}),C=new a(P,k);C.scale.set(.5,.5,.5);C.position.set(.8,.2,2.2);const G=new a(P,k);G.scale.set(.25,.25,.25);G.position.set(1.4,.1,2.1);const L=new a(P,k);L.scale.set(.4,.4,.4);L.position.set(-.8,.1,2.2);const R=new a(P,k);R.scale.set(.15,.15,.15);R.position.set(-1,.05,2.6);l.add(C,G,L,R);const D=new W;o.add(D);const me=new I(.6,.8,.2),xe=new g({color:"#b2b6b1"});for(let t=0;t<50;t++){const x=Math.random()*Math.PI*2,M=3+Math.random()*6,y=Math.sin(x)*M,U=Math.cos(x)*M,S=new a(me,xe);S.position.set(y,.3,U),S.rotation.y=(Math.random()-.5)*.4,S.rotation.z=(Math.random()-.5)*.4,S.castShadow=!0,D.add(S)}const H=new Y("#b9d5ff",.12);f.add(H,"intensity").min(0).max(1).step(.001);o.add(H);const p=new Z("#b9d5ff",.12);p.position.set(4,5,-2);f.add(p,"intensity").min(0).max(1).step(.001);f.add(p.position,"x").min(-5).max(5).step(.001);f.add(p.position,"y").min(-5).max(5).step(.001);f.add(p.position,"z").min(-5).max(5).step(.001);o.add(p);const m=new T("#ff7d46",1,7);m.position.set(0,2.2,2.7);l.add(m);const n=new T("#ff00ff",2,3);o.add(n);const r=new T("#00ffff",2,3);o.add(r);const i=new T("#ffff00",2,3);o.add(i);const s={width:window.innerWidth,height:window.innerHeight};window.addEventListener("resize",()=>{s.width=window.innerWidth,s.height=window.innerHeight,d.aspect=s.width/s.height,d.updateProjectionMatrix(),h.setSize(s.width,s.height),h.setPixelRatio(Math.min(window.devicePixelRatio,2))});const d=new _(75,s.width/s.height,.1,100);d.position.x=4;d.position.y=2;d.position.z=5;o.add(d);const N=new oe(d,B);N.enableDamping=!0;const h=new $({canvas:B});h.setSize(s.width,s.height);h.setPixelRatio(Math.min(window.devicePixelRatio,2));h.setClearColor("#262837");h.shadowMap.enabled=!0;h.shadowMap.type=ee;p.castShadow=!0;m.castShadow=!0;n.castShadow=!0;r.castShadow=!0;i.castShadow=!0;w.castShadow=!0;C.castShadow=!0;G.castShadow=!0;L.castShadow=!0;R.castShadow=!0;u.receiveShadow=!0;w.recieveShadow=!0;m.shadow.mapSize.width=256;m.shadow.mapSize.height=256;m.shadow.camera.far=7;n.shadow.mapSize.width=256;n.shadow.mapSize.height=256;n.shadow.camera.far=7;r.shadow.mapSize.width=256;r.shadow.mapSize.height=256;r.shadow.camera.far=7;i.shadow.mapSize.width=256;i.shadow.mapSize.height=256;i.shadow.camera.far=7;const Me=new te,E=()=>{const t=Me.getElapsedTime(),x=t*.5;n.position.x=Math.cos(x)*4,n.position.z=Math.sin(x)*4,n.position.y=Math.sin(t*3);const M=-t*.32;r.position.x=Math.cos(M)*5,r.position.z=Math.sin(M)*5,r.position.y=Math.sin(t*4)+Math.sin(t*2.5);const y=-t*.18;i.position.x=Math.cos(y)*(7+Math.sin(t*.32)),i.position.z=Math.sin(y)*(7+Math.sin(t*.5)),i.position.y=Math.sin(t*4)+Math.sin(t*2.5),N.update(),h.render(o,d),window.requestAnimationFrame(E)};E();