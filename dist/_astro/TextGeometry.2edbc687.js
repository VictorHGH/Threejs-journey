import{x as f,y as T,z as v,H as k}from"./three.module.300dcea1.js";class q extends f{constructor(t){super(t)}load(t,e,n,r){const h=this,s=new T(this.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(t,function(c){const u=h.parse(JSON.parse(c));e&&e(u)},n,r)}parse(t){return new F(t)}}class F{constructor(t){this.isFont=!0,this.type="Font",this.data=t}generateShapes(t,e=100){const n=[],r=S(t,e,this.data);for(let h=0,s=r.length;h<s;h++)n.push(...r[h].toShapes());return n}}function S(d,t,e){const n=Array.from(d),r=t/e.resolution,h=(e.boundingBox.yMax-e.boundingBox.yMin+e.underlineThickness)*r,s=[];let c=0,u=0;for(let l=0;l<n.length;l++){const p=n[l];if(p===`
`)c=0,u-=h;else{const a=w(p,r,c,u,e);c+=a.offsetX,s.push(a.path)}}return s}function w(d,t,e,n,r){const h=r.glyphs[d]||r.glyphs["?"];if(!h){console.error('THREE.Font: character "'+d+'" does not exists in font family '+r.familyName+".");return}const s=new v;let c,u,l,p,a,y,b,x;if(h.o){const i=h._cachedOutline||(h._cachedOutline=h.o.split(" "));for(let o=0,g=i.length;o<g;)switch(i[o++]){case"m":c=i[o++]*t+e,u=i[o++]*t+n,s.moveTo(c,u);break;case"l":c=i[o++]*t+e,u=i[o++]*t+n,s.lineTo(c,u);break;case"q":l=i[o++]*t+e,p=i[o++]*t+n,a=i[o++]*t+e,y=i[o++]*t+n,s.quadraticCurveTo(a,y,l,p);break;case"b":l=i[o++]*t+e,p=i[o++]*t+n,a=i[o++]*t+e,y=i[o++]*t+n,b=i[o++]*t+e,x=i[o++]*t+n,s.bezierCurveTo(a,y,b,x,l,p);break}}return{offsetX:h.ha*t,path:s}}class C extends k{constructor(t,e={}){const n=e.font;if(n===void 0)super();else{const r=n.generateShapes(t,e.size);e.depth=e.height!==void 0?e.height:50,e.bevelThickness===void 0&&(e.bevelThickness=10),e.bevelSize===void 0&&(e.bevelSize=8),e.bevelEnabled===void 0&&(e.bevelEnabled=!1),super(r,e)}this.type="TextGeometry"}}export{q as F,C as T};
