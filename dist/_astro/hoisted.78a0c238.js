import{S as a,B as o,a as r,M as c,P as i,W as h}from"./three.module.fce46361.js";const s=new a,d=new o(1,1,1),w=new r({color:16711680}),m=new c(d,w);s.add(m);const e={width:600,height:400},t=new i(75,e.width/e.height);t.position.z=3;s.add(t);const g=document.querySelector(".webgl"),n=new h({canvas:g});n.setSize(e.width,e.height);n.render(s,t);