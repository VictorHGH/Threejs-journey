import{S as h,G as l,M as s,B as a,a as r,j as p,P as m,W as u}from"./three.module.fce46361.js";const n=new h,e=new l;e.position.y=1;e.scale.y=2;e.rotation.y=1;n.add(e);const g=new s(new a(1,1,1),new r({color:"red"}));e.add(g);const i=new s(new a(1,1,1),new r({color:"blue"}));i.position.x=-2;e.add(i);const d=new s(new a(1,1,1),new r({color:"green"}));d.position.x=2;e.add(d);const y=new a(1,1,1),b=new r({color:16711680}),o=new s(y,b);o.position.set(.7,-.6,1);o.scale.set(2,.5,.5);o.rotation.reorder("YXZ");o.rotation.x=Math.PI*.25;o.rotation.y=Math.PI*.25;n.add(o);const x=new p(2);n.add(x);const t={width:600,height:400},c=new m(75,t.width/t.height);c.position.z=3;n.add(c);const M=document.querySelector(".webgl"),w=new u({canvas:M});w.setSize(t.width,t.height);w.render(n,c);