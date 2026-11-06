(()=>{var $u="169";var u0=0,Dd=1,f0=2;var Vp=1,Ku=2,zi=3,mr=0,je=1,di=2,ur=0,Os=1,Nd=2,Ud=3,Od=4,d0=5,zr=100,p0=101,m0=102,g0=103,_0=104,x0=200,y0=201,v0=202,M0=203,Rh=204,Ph=205,S0=206,b0=207,w0=208,T0=209,E0=210,A0=211,C0=212,R0=213,P0=214,Ih=0,Lh=1,Dh=2,ks=3,Nh=4,Uh=5,Oh=6,Fh=7,Hp=0,I0=1,L0=2,fr=0,D0=1,N0=2,U0=3,Qu=4,O0=5,F0=6,B0=7;var Gp=300,Vs=301,Hs=302,Bh=303,zh=304,ql=306,Lo=1e3,Hr=1001,kh=1002,dn=1003,z0=1004;var Ra=1005;var pi=1006,Yc=1007;var Gr=1008;var Gi=1009,Wp=1010,Xp=1011,Do=1012,ju=1013,Wr=1014,Vi=1015,qo=1016,tf=1017,ef=1018,Gs=1020,Yp=35902,qp=1021,Zp=1022,mi=1023,Jp=1024,$p=1025,Fs=1026,Ws=1027,Zl=1028,nf=1029,Kp=1030,rf=1031;var sf=1033,nl=33776,il=33777,rl=33778,sl=33779,Vh=35840,Hh=35841,Gh=35842,Wh=35843,Xh=36196,Yh=37492,qh=37496,Zh=37808,Jh=37809,$h=37810,Kh=37811,Qh=37812,jh=37813,tu=37814,eu=37815,nu=37816,iu=37817,ru=37818,su=37819,ou=37820,au=37821,ol=36492,lu=36494,cu=36495,Qp=36283,hu=36284,uu=36285,fu=36286;var ll=2300,du=2301,qc=2302,Fd=2400,Bd=2401,zd=2402;var k0=3200,V0=3201;var jp=0,H0=1,hr="",un="srgb",xr="srgb-linear",of="display-p3",Jl="display-p3-linear",cl="linear",be="srgb",hl="rec709",ul="p3";var vs=7680;var kd=519,G0=512,W0=513,X0=514,tm=515,Y0=516,q0=517,Z0=518,J0=519,Vd=35044;var Hd="300 es",Hi=2e3,fl=2001,gr=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}},cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Zc=Math.PI/180,pu=180/Math.PI;function Ks(){let r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(cn[r&255]+cn[r>>8&255]+cn[r>>16&255]+cn[r>>24&255]+"-"+cn[t&255]+cn[t>>8&255]+"-"+cn[t>>16&15|64]+cn[t>>24&255]+"-"+cn[e&63|128]+cn[e>>8&255]+"-"+cn[e>>16&255]+cn[e>>24&255]+cn[n&255]+cn[n>>8&255]+cn[n>>16&255]+cn[n>>24&255]).toLowerCase()}function Qe(r,t,e){return Math.max(t,Math.min(e,r))}function $0(r,t){return(r%t+t)%t}function Jc(r,t,e){return(1-e)*r+e*t}function vo(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ln(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var mt=class r{constructor(t=0,e=0){r.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Qe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Yt=class r{constructor(t,e,n,i,s,o,a,l,c){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c)}set(t,e,n,i,s,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=i[0],p=i[3],m=i[6],M=i[1],x=i[4],y=i[7],C=i[2],T=i[5],S=i[8];return s[0]=o*_+a*M+l*C,s[3]=o*p+a*x+l*T,s[6]=o*m+a*y+l*S,s[1]=c*_+h*M+u*C,s[4]=c*p+h*x+u*T,s[7]=c*m+h*y+u*S,s[2]=d*_+f*M+g*C,s[5]=d*p+f*x+g*T,s[8]=d*m+f*y+g*S,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*s,f=c*s-o*l,g=e*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=u*_,t[1]=(i*c-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=d*_,t[4]=(h*e-i*l)*_,t[5]=(i*s-a*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*s)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply($c.makeScale(t,e)),this}rotate(t){return this.premultiply($c.makeRotation(-t)),this}translate(t,e){return this.premultiply($c.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},$c=new Yt;function em(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function dl(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function K0(){let r=dl("canvas");return r.style.display="block",r}var Gd={};function al(r){r in Gd||(Gd[r]=!0,console.warn(r))}function Q0(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function j0(r){let t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function t_(r){let t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Wd=new Yt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Xd=new Yt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Mo={[xr]:{transfer:cl,primaries:hl,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r,fromReference:r=>r},[un]:{transfer:be,primaries:hl,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Jl]:{transfer:cl,primaries:ul,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.applyMatrix3(Xd),fromReference:r=>r.applyMatrix3(Wd)},[of]:{transfer:be,primaries:ul,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.convertSRGBToLinear().applyMatrix3(Xd),fromReference:r=>r.applyMatrix3(Wd).convertLinearToSRGB()}},e_=new Set([xr,Jl]),de={enabled:!0,_workingColorSpace:xr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!e_.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,t,e){if(this.enabled===!1||t===e||!t||!e)return r;let n=Mo[t].toReference,i=Mo[e].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this._workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this._workingColorSpace)},getPrimaries:function(r){return Mo[r].primaries},getTransfer:function(r){return r===hr?cl:Mo[r].transfer},getLuminanceCoefficients:function(r,t=this._workingColorSpace){return r.fromArray(Mo[t].luminanceCoefficients)}};function Bs(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Kc(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var Ms,mu=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ms===void 0&&(Ms=dl("canvas")),Ms.width=t.width,Ms.height=t.height;let n=Ms.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ms}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=dl("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Bs(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Bs(e[n]/255)*255):e[n]=Bs(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},n_=0,pl=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:n_++}),this.uuid=Ks(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Qc(i[o].image)):s.push(Qc(i[o]))}else s=Qc(i);n.url=s}return e||(t.images[this.uuid]=n),n}};function Qc(r){return typeof HTMLImageElement!="undefined"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&r instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&r instanceof ImageBitmap?mu.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var i_=0,Dn=class r extends gr{constructor(t=r.DEFAULT_IMAGE,e=r.DEFAULT_MAPPING,n=Hr,i=Hr,s=pi,o=Gr,a=mi,l=Gi,c=r.DEFAULT_ANISOTROPY,h=hr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:i_++}),this.uuid=Ks(),this.name="",this.source=new pl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new mt(0,0),this.repeat=new mt(1,1),this.center=new mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Gp)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Lo:t.x=t.x-Math.floor(t.x);break;case Hr:t.x=t.x<0?0:1;break;case kh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Lo:t.y=t.y-Math.floor(t.y);break;case Hr:t.y=t.y<0?0:1;break;case kh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Dn.DEFAULT_IMAGE=null;Dn.DEFAULT_MAPPING=Gp;Dn.DEFAULT_ANISOTROPY=1;var ge=class r{constructor(t=0,e=0,n=0,i=1){r.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let x=(c+1)/2,y=(f+1)/2,C=(m+1)/2,T=(h+d)/4,S=(u+_)/4,P=(g+p)/4;return x>y&&x>C?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=T/n,s=S/n):y>C?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=T/i,s=P/i):C<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(C),n=S/s,i=P/s),this.set(n,i,s,e),this}let M=Math.sqrt((p-g)*(p-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(p-g)/M,this.y=(u-_)/M,this.z=(d-h)/M,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},gu=class extends gr{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ge(0,0,t,e),this.scissorTest=!1,this.viewport=new ge(0,0,t,e);let i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let s=new Dn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new pl(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Wi=class extends gu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ml=class extends Dn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=dn,this.minFilter=dn,this.wrapR=Hr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var _u=class extends Dn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=dn,this.minFilter=dn,this.wrapR=Hr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var _r=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=s[o+0],f=s[o+1],g=s[o+2],_=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==d||c!==f||h!==g){let p=1-a,m=l*d+c*f+h*g+u*_,M=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){let C=Math.sqrt(x),T=Math.atan2(C,m*M);p=Math.sin(p*T)/C,a=Math.sin(a*T)/C}let y=a*M;if(l=l*p+d*y,c=c*p+f*y,h=h*p+g*y,u=u*p+_*y,p===1-a){let C=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=C,c*=C,h*=C,u*=C}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[o],d=s[o+1],f=s[o+2],g=s[o+3];return t[e]=a*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-a*f,t[e+2]=c*g+h*f+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(s/2),d=l(n/2),f=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(o-i)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(s-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Qe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,s=this._z,o=this._w,a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*s+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},G=class r{constructor(t=0,e=0,n=0){r.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Yd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Yd.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-s*i),u=2*(s*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-s*u,this.z=i+l*u+s*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return jc.copy(this).projectOnVector(t),this.sub(jc)}reflect(t){return this.sub(jc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Qe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},jc=new G,Yd=new _r,Xr=class{constructor(t=new G(1/0,1/0,1/0),e=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(hi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(hi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=hi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,hi):hi.fromBufferAttribute(s,o),hi.applyMatrix4(t.matrixWorld),this.expandByPoint(hi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Pa.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Pa.copy(n.boundingBox)),Pa.applyMatrix4(t.matrixWorld),this.union(Pa)}let i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,hi),hi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(So),Ia.subVectors(this.max,So),Ss.subVectors(t.a,So),bs.subVectors(t.b,So),ws.subVectors(t.c,So),rr.subVectors(bs,Ss),sr.subVectors(ws,bs),Lr.subVectors(Ss,ws);let e=[0,-rr.z,rr.y,0,-sr.z,sr.y,0,-Lr.z,Lr.y,rr.z,0,-rr.x,sr.z,0,-sr.x,Lr.z,0,-Lr.x,-rr.y,rr.x,0,-sr.y,sr.x,0,-Lr.y,Lr.x,0];return!th(e,Ss,bs,ws,Ia)||(e=[1,0,0,0,1,0,0,0,1],!th(e,Ss,bs,ws,Ia))?!1:(La.crossVectors(rr,sr),e=[La.x,La.y,La.z],th(e,Ss,bs,ws,Ia))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,hi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(hi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Di),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Di=[new G,new G,new G,new G,new G,new G,new G,new G],hi=new G,Pa=new Xr,Ss=new G,bs=new G,ws=new G,rr=new G,sr=new G,Lr=new G,So=new G,Ia=new G,La=new G,Dr=new G;function th(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Dr.fromArray(r,s);let a=i.x*Math.abs(Dr.x)+i.y*Math.abs(Dr.y)+i.z*Math.abs(Dr.z),l=t.dot(Dr),c=e.dot(Dr),h=n.dot(Dr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var r_=new Xr,bo=new G,eh=new G,Xs=class{constructor(t=new G,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):r_.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;bo.subVectors(t,this.center);let e=bo.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(bo,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(eh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(bo.copy(t.center).add(eh)),this.expandByPoint(bo.copy(t.center).sub(eh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ni=new G,nh=new G,Da=new G,or=new G,ih=new G,Na=new G,rh=new G,gl=class{constructor(t=new G,e=new G(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ni)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ni.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ni.copy(this.origin).addScaledVector(this.direction,e),Ni.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){nh.copy(t).add(e).multiplyScalar(.5),Da.copy(e).sub(t).normalize(),or.copy(this.origin).sub(nh);let s=t.distanceTo(e)*.5,o=-this.direction.dot(Da),a=or.dot(this.direction),l=-or.dot(Da),c=or.lengthSq(),h=Math.abs(1-o*o),u,d,f,g;if(h>0)if(u=o*l-a,d=o*a-l,g=s*h,u>=0)if(d>=-g)if(d<=g){let _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(nh).addScaledVector(Da,d),f}intersectSphere(t,e){Ni.subVectors(t.center,this.origin);let n=Ni.dot(this.direction),i=Ni.dot(Ni)-n*n,s=t.radius*t.radius;if(i>s)return null;let o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(s=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Ni)!==null}intersectTriangle(t,e,n,i,s){ih.subVectors(e,t),Na.subVectors(n,t),rh.crossVectors(ih,Na);let o=this.direction.dot(rh),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;or.subVectors(this.origin,t);let l=a*this.direction.dot(Na.crossVectors(or,Na));if(l<0)return null;let c=a*this.direction.dot(ih.cross(or));if(c<0||l+c>o)return null;let h=-a*or.dot(rh);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ce=class r{constructor(t,e,n,i,s,o,a,l,c,h,u,d,f,g,_,p){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c,h,u,d,f,g,_,p)}set(t,e,n,i,s,o,a,l,c,h,u,d,f,g,_,p){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/Ts.setFromMatrixColumn(t,0).length(),s=1/Ts.setFromMatrixColumn(t,1).length(),o=1/Ts.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){let d=o*h,f=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-_*c,e[9]=-a*l,e[2]=_-d*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,g=c*h,_=c*u;e[0]=d+_*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=_+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,g=c*h,_=c*u;e[0]=d-_*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*h,f=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,f=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-_*u}else if(t.order==="XZY"){let d=o*l,f=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=o*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(s_,t,o_)}lookAt(t,e,n){let i=this.elements;return Hn.subVectors(t,e),Hn.lengthSq()===0&&(Hn.z=1),Hn.normalize(),ar.crossVectors(n,Hn),ar.lengthSq()===0&&(Math.abs(n.z)===1?Hn.x+=1e-4:Hn.z+=1e-4,Hn.normalize(),ar.crossVectors(n,Hn)),ar.normalize(),Ua.crossVectors(Hn,ar),i[0]=ar.x,i[4]=Ua.x,i[8]=Hn.x,i[1]=ar.y,i[5]=Ua.y,i[9]=Hn.y,i[2]=ar.z,i[6]=Ua.z,i[10]=Hn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],p=n[10],m=n[14],M=n[3],x=n[7],y=n[11],C=n[15],T=i[0],S=i[4],P=i[8],z=i[12],v=i[1],w=i[5],F=i[9],X=i[13],Y=i[2],K=i[6],V=i[10],W=i[14],k=i[3],ht=i[7],U=i[11],dt=i[15];return s[0]=o*T+a*v+l*Y+c*k,s[4]=o*S+a*w+l*K+c*ht,s[8]=o*P+a*F+l*V+c*U,s[12]=o*z+a*X+l*W+c*dt,s[1]=h*T+u*v+d*Y+f*k,s[5]=h*S+u*w+d*K+f*ht,s[9]=h*P+u*F+d*V+f*U,s[13]=h*z+u*X+d*W+f*dt,s[2]=g*T+_*v+p*Y+m*k,s[6]=g*S+_*w+p*K+m*ht,s[10]=g*P+_*F+p*V+m*U,s[14]=g*z+_*X+p*W+m*dt,s[3]=M*T+x*v+y*Y+C*k,s[7]=M*S+x*w+y*K+C*ht,s[11]=M*P+x*F+y*V+C*U,s[15]=M*z+x*X+y*W+C*dt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],_=t[7],p=t[11],m=t[15];return g*(+s*l*u-i*c*u-s*a*d+n*c*d+i*a*f-n*l*f)+_*(+e*l*f-e*c*d+s*o*d-i*o*f+i*c*h-s*l*h)+p*(+e*c*u-e*a*f-s*o*u+n*o*f+s*a*h-n*c*h)+m*(-i*a*h-e*l*u+e*a*d+i*o*u-n*o*d+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],_=t[13],p=t[14],m=t[15],M=u*p*c-_*d*c+_*l*f-a*p*f-u*l*m+a*d*m,x=g*d*c-h*p*c-g*l*f+o*p*f+h*l*m-o*d*m,y=h*_*c-g*u*c+g*a*f-o*_*f-h*a*m+o*u*m,C=g*u*l-h*_*l-g*a*d+o*_*d+h*a*p-o*u*p,T=e*M+n*x+i*y+s*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let S=1/T;return t[0]=M*S,t[1]=(_*d*s-u*p*s-_*i*f+n*p*f+u*i*m-n*d*m)*S,t[2]=(a*p*s-_*l*s+_*i*c-n*p*c-a*i*m+n*l*m)*S,t[3]=(u*l*s-a*d*s-u*i*c+n*d*c+a*i*f-n*l*f)*S,t[4]=x*S,t[5]=(h*p*s-g*d*s+g*i*f-e*p*f-h*i*m+e*d*m)*S,t[6]=(g*l*s-o*p*s-g*i*c+e*p*c+o*i*m-e*l*m)*S,t[7]=(o*d*s-h*l*s+h*i*c-e*d*c-o*i*f+e*l*f)*S,t[8]=y*S,t[9]=(g*u*s-h*_*s-g*n*f+e*_*f+h*n*m-e*u*m)*S,t[10]=(o*_*s-g*a*s+g*n*c-e*_*c-o*n*m+e*a*m)*S,t[11]=(h*a*s-o*u*s-h*n*c+e*u*c+o*n*f-e*a*f)*S,t[12]=C*S,t[13]=(h*_*i-g*u*i+g*n*d-e*_*d-h*n*p+e*u*p)*S,t[14]=(g*a*i-o*_*i-g*n*l+e*_*l+o*n*p-e*a*p)*S,t[15]=(o*u*i-h*a*i+h*n*l-e*u*l-o*n*d+e*a*d)*S,this}scale(t){let e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,u=a+a,d=s*c,f=s*h,g=s*u,_=o*h,p=o*u,m=a*u,M=l*c,x=l*h,y=l*u,C=n.x,T=n.y,S=n.z;return i[0]=(1-(_+m))*C,i[1]=(f+y)*C,i[2]=(g-x)*C,i[3]=0,i[4]=(f-y)*T,i[5]=(1-(d+m))*T,i[6]=(p+M)*T,i[7]=0,i[8]=(g+x)*S,i[9]=(p-M)*S,i[10]=(1-(d+_))*S,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,s=Ts.set(i[0],i[1],i[2]).length(),o=Ts.set(i[4],i[5],i[6]).length(),a=Ts.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],ui.copy(this);let c=1/s,h=1/o,u=1/a;return ui.elements[0]*=c,ui.elements[1]*=c,ui.elements[2]*=c,ui.elements[4]*=h,ui.elements[5]*=h,ui.elements[6]*=h,ui.elements[8]*=u,ui.elements[9]*=u,ui.elements[10]*=u,e.setFromRotationMatrix(ui),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o,a=Hi){let l=this.elements,c=2*s/(e-t),h=2*s/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i),f,g;if(a===Hi)f=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===fl)f=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=Hi){let l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(o-s),d=(e+t)*c,f=(n+i)*h,g,_;if(a===Hi)g=(o+s)*u,_=-2*u;else if(a===fl)g=s*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Ts=new G,ui=new Ce,s_=new G(0,0,0),o_=new G(1,1,1),ar=new G,Ua=new G,Hn=new G,qd=new Ce,Zd=new _r,Si=class r{constructor(t=0,e=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Qe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return qd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(qd,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Zd.setFromEuler(this),this.setFromQuaternion(Zd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Si.DEFAULT_ORDER="XYZ";var _l=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},a_=0,Jd=new G,Es=new _r,Ui=new Ce,Oa=new G,wo=new G,l_=new G,c_=new _r,$d=new G(1,0,0),Kd=new G(0,1,0),Qd=new G(0,0,1),jd={type:"added"},h_={type:"removed"},As={type:"childadded",child:null},sh={type:"childremoved",child:null},pn=class r extends gr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:a_++}),this.uuid=Ks(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let t=new G,e=new Si,n=new _r,i=new G(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ce},normalMatrix:{value:new Yt}}),this.matrix=new Ce,this.matrixWorld=new Ce,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _l,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Es.setFromAxisAngle(t,e),this.quaternion.multiply(Es),this}rotateOnWorldAxis(t,e){return Es.setFromAxisAngle(t,e),this.quaternion.premultiply(Es),this}rotateX(t){return this.rotateOnAxis($d,t)}rotateY(t){return this.rotateOnAxis(Kd,t)}rotateZ(t){return this.rotateOnAxis(Qd,t)}translateOnAxis(t,e){return Jd.copy(t).applyQuaternion(this.quaternion),this.position.add(Jd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis($d,t)}translateY(t){return this.translateOnAxis(Kd,t)}translateZ(t){return this.translateOnAxis(Qd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ui.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Oa.copy(t):Oa.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),wo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ui.lookAt(wo,Oa,this.up):Ui.lookAt(Oa,wo,this.up),this.quaternion.setFromRotationMatrix(Ui),i&&(Ui.extractRotation(i.matrixWorld),Es.setFromRotationMatrix(Ui),this.quaternion.premultiply(Es.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(jd),As.child=t,this.dispatchEvent(As),As.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(h_),sh.child=t,this.dispatchEvent(sh),sh.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ui.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ui.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ui),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(jd),As.child=t,this.dispatchEvent(As),As.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wo,t,l_),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wo,c_,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};pn.DEFAULT_UP=new G(0,1,0);pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var fi=new G,Oi=new G,oh=new G,Fi=new G,Cs=new G,Rs=new G,tp=new G,ah=new G,lh=new G,ch=new G,hh=new ge,uh=new ge,fh=new ge,kr=class r{constructor(t=new G,e=new G,n=new G){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),fi.subVectors(t,e),i.cross(fi);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){fi.subVectors(i,e),Oi.subVectors(n,e),oh.subVectors(t,e);let o=fi.dot(fi),a=fi.dot(Oi),l=fi.dot(oh),c=Oi.dot(Oi),h=Oi.dot(oh),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return s.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Fi)===null?!1:Fi.x>=0&&Fi.y>=0&&Fi.x+Fi.y<=1}static getInterpolation(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,Fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Fi.x),l.addScaledVector(o,Fi.y),l.addScaledVector(a,Fi.z),l)}static getInterpolatedAttribute(t,e,n,i,s,o){return hh.setScalar(0),uh.setScalar(0),fh.setScalar(0),hh.fromBufferAttribute(t,e),uh.fromBufferAttribute(t,n),fh.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(hh,s.x),o.addScaledVector(uh,s.y),o.addScaledVector(fh,s.z),o}static isFrontFacing(t,e,n,i){return fi.subVectors(n,e),Oi.subVectors(t,e),fi.cross(Oi).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return fi.subVectors(this.c,this.b),Oi.subVectors(this.a,this.b),fi.cross(Oi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return r.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return r.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return r.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return r.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return r.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,s=this.c,o,a;Cs.subVectors(i,n),Rs.subVectors(s,n),ah.subVectors(t,n);let l=Cs.dot(ah),c=Rs.dot(ah);if(l<=0&&c<=0)return e.copy(n);lh.subVectors(t,i);let h=Cs.dot(lh),u=Rs.dot(lh);if(h>=0&&u<=h)return e.copy(i);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Cs,o);ch.subVectors(t,s);let f=Cs.dot(ch),g=Rs.dot(ch);if(g>=0&&f<=g)return e.copy(s);let _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Rs,a);let p=h*g-f*u;if(p<=0&&u-h>=0&&f-g>=0)return tp.subVectors(s,i),a=(u-h)/(u-h+(f-g)),e.copy(i).addScaledVector(tp,a);let m=1/(p+_+d);return o=_*m,a=d*m,e.copy(n).addScaledVector(Cs,o).addScaledVector(Rs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},nm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},lr={h:0,s:0,l:0},Fa={h:0,s:0,l:0};function dh(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}var Qt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=un){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,de.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=de.workingColorSpace){return this.r=t,this.g=e,this.b=n,de.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=de.workingColorSpace){if(t=$0(t,1),e=Qe(e,0,1),n=Qe(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=dh(o,s,t+1/3),this.g=dh(o,s,t),this.b=dh(o,s,t-1/3)}return de.toWorkingColorSpace(this,i),this}setStyle(t,e=un){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=un){let n=nm[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Bs(t.r),this.g=Bs(t.g),this.b=Bs(t.b),this}copyLinearToSRGB(t){return this.r=Kc(t.r),this.g=Kc(t.g),this.b=Kc(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=un){return de.fromWorkingColorSpace(hn.copy(this),t),Math.round(Qe(hn.r*255,0,255))*65536+Math.round(Qe(hn.g*255,0,255))*256+Math.round(Qe(hn.b*255,0,255))}getHexString(t=un){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=de.workingColorSpace){de.fromWorkingColorSpace(hn.copy(this),e);let n=hn.r,i=hn.g,s=hn.b,o=Math.max(n,i,s),a=Math.min(n,i,s),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=de.workingColorSpace){return de.fromWorkingColorSpace(hn.copy(this),e),t.r=hn.r,t.g=hn.g,t.b=hn.b,t}getStyle(t=un){de.fromWorkingColorSpace(hn.copy(this),t);let e=hn.r,n=hn.g,i=hn.b;return t!==un?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(lr),this.setHSL(lr.h+t,lr.s+e,lr.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(lr),t.getHSL(Fa);let n=Jc(lr.h,Fa.h,e),i=Jc(lr.s,Fa.s,e),s=Jc(lr.l,Fa.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},hn=new Qt;Qt.NAMES=nm;var u_=0,Xi=class extends gr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:u_++}),this.uuid=Ks(),this.name="",this.type="Material",this.blending=Os,this.side=mr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rh,this.blendDst=Ph,this.blendEquation=zr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qt(0,0,0),this.blendAlpha=0,this.depthFunc=ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vs,this.stencilZFail=vs,this.stencilZPass=vs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Os&&(n.blending=this.blending),this.side!==mr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Rh&&(n.blendSrc=this.blendSrc),this.blendDst!==Ph&&(n.blendDst=this.blendDst),this.blendEquation!==zr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ks&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==kd&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==vs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==vs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(e){let s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},jn=class extends Xi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.combine=Hp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var He=new G,Ba=new mt,Qn=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Vd,this.updateRanges=[],this.gpuType=Vi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ba.fromBufferAttribute(this,e),Ba.applyMatrix3(t),this.setXY(e,Ba.x,Ba.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyMatrix3(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyMatrix4(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyNormalMatrix(t),this.setXYZ(e,He.x,He.y,He.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.transformDirection(t),this.setXYZ(e,He.x,He.y,He.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=vo(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ln(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=vo(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ln(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=vo(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ln(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=vo(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ln(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=vo(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ln(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ln(e,this.array),n=Ln(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Ln(e,this.array),n=Ln(n,this.array),i=Ln(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=Ln(e,this.array),n=Ln(n,this.array),i=Ln(i,this.array),s=Ln(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Vd&&(t.usage=this.usage),t}};var xl=class extends Qn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var yl=class extends Qn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ie=class extends Qn{constructor(t,e,n){super(new Float32Array(t),e,n)}},f_=0,Kn=new Ce,ph=new pn,Ps=new G,Gn=new Xr,To=new Xr,Ke=new G,Ge=class r extends gr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:f_++}),this.uuid=Ks(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(em(t)?yl:xl)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Yt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Kn.makeRotationFromQuaternion(t),this.applyMatrix4(Kn),this}rotateX(t){return Kn.makeRotationX(t),this.applyMatrix4(Kn),this}rotateY(t){return Kn.makeRotationY(t),this.applyMatrix4(Kn),this}rotateZ(t){return Kn.makeRotationZ(t),this.applyMatrix4(Kn),this}translate(t,e,n){return Kn.makeTranslation(t,e,n),this.applyMatrix4(Kn),this}scale(t,e,n){return Kn.makeScale(t,e,n),this.applyMatrix4(Kn),this}lookAt(t){return ph.lookAt(t),ph.updateMatrix(),this.applyMatrix4(ph.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ps).negate(),this.translate(Ps.x,Ps.y,Ps.z),this}setFromPoints(t){let e=[];for(let n=0,i=t.length;n<i;n++){let s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ie(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xr);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let s=e[n];Gn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ke.addVectors(this.boundingBox.min,Gn.min),this.boundingBox.expandByPoint(Ke),Ke.addVectors(this.boundingBox.max,Gn.max),this.boundingBox.expandByPoint(Ke)):(this.boundingBox.expandByPoint(Gn.min),this.boundingBox.expandByPoint(Gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(t){let n=this.boundingSphere.center;if(Gn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];To.setFromBufferAttribute(a),this.morphTargetsRelative?(Ke.addVectors(Gn.min,To.min),Gn.expandByPoint(Ke),Ke.addVectors(Gn.max,To.max),Gn.expandByPoint(Ke)):(Gn.expandByPoint(To.min),Gn.expandByPoint(To.max))}Gn.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)Ke.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Ke));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ke.fromBufferAttribute(a,c),l&&(Ps.fromBufferAttribute(t,c),Ke.add(Ps)),i=Math.max(i,n.distanceToSquared(Ke))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qn(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<n.count;P++)a[P]=new G,l[P]=new G;let c=new G,h=new G,u=new G,d=new mt,f=new mt,g=new mt,_=new G,p=new G;function m(P,z,v){c.fromBufferAttribute(n,P),h.fromBufferAttribute(n,z),u.fromBufferAttribute(n,v),d.fromBufferAttribute(s,P),f.fromBufferAttribute(s,z),g.fromBufferAttribute(s,v),h.sub(c),u.sub(c),f.sub(d),g.sub(d);let w=1/(f.x*g.y-g.x*f.y);isFinite(w)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(w),p.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(w),a[P].add(_),a[z].add(_),a[v].add(_),l[P].add(p),l[z].add(p),l[v].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let P=0,z=M.length;P<z;++P){let v=M[P],w=v.start,F=v.count;for(let X=w,Y=w+F;X<Y;X+=3)m(t.getX(X+0),t.getX(X+1),t.getX(X+2))}let x=new G,y=new G,C=new G,T=new G;function S(P){C.fromBufferAttribute(i,P),T.copy(C);let z=a[P];x.copy(z),x.sub(C.multiplyScalar(C.dot(z))).normalize(),y.crossVectors(T,z);let w=y.dot(l[P])<0?-1:1;o.setXYZW(P,x.x,x.y,x.z,w)}for(let P=0,z=M.length;P<z;++P){let v=M[P],w=v.start,F=v.count;for(let X=w,Y=w+F;X<Y;X+=3)S(t.getX(X+0)),S(t.getX(X+1)),S(t.getX(X+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Qn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new G,s=new G,o=new G,a=new G,l=new G,c=new G,h=new G,u=new G;if(t)for(let d=0,f=t.count;d<f;d+=3){let g=t.getX(d+0),_=t.getX(d+1),p=t.getX(d+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,p),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ke.fromBufferAttribute(t,e),Ke.normalize(),t.setXYZ(e,Ke.x,Ke.y,Ke.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let m=0;m<h;m++)d[g++]=c[f++]}return new Qn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new r,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,n);e.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let s=t.morphAttributes;for(let c in s){let h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},ep=new Ce,Nr=new gl,za=new Xs,np=new G,ka=new G,Va=new G,Ha=new G,mh=new G,Ga=new G,ip=new G,Wa=new G,le=class extends pn{constructor(t=new Ge,e=new jn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(s&&a){Ga.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=a[l],u=s[l];h!==0&&(mh.fromBufferAttribute(u,t),o?Ga.addScaledVector(mh,h):Ga.addScaledVector(mh.sub(e),h))}e.add(Ga)}return e}raycast(t,e){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),za.copy(n.boundingSphere),za.applyMatrix4(s),Nr.copy(t.ray).recast(t.near),!(za.containsPoint(Nr.origin)===!1&&(Nr.intersectSphere(za,np)===null||Nr.origin.distanceToSquared(np)>(t.far-t.near)**2))&&(ep.copy(s).invert(),Nr.copy(t.ray).applyMatrix4(ep),!(n.boundingBox!==null&&Nr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Nr)))}_computeIntersections(t,e,n){let i,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let p=d[g],m=o[p.materialIndex],M=Math.max(p.start,f.start),x=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let y=M,C=x;y<C;y+=3){let T=a.getX(y),S=a.getX(y+1),P=a.getX(y+2);i=Xa(this,m,t,n,c,h,u,T,S,P),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{let g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){let M=a.getX(p),x=a.getX(p+1),y=a.getX(p+2);i=Xa(this,o,t,n,c,h,u,M,x,y),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let p=d[g],m=o[p.materialIndex],M=Math.max(p.start,f.start),x=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let y=M,C=x;y<C;y+=3){let T=y,S=y+1,P=y+2;i=Xa(this,m,t,n,c,h,u,T,S,P),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{let g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){let M=p,x=p+1,y=p+2;i=Xa(this,o,t,n,c,h,u,M,x,y),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}};function d_(r,t,e,n,i,s,o,a){let l;if(t.side===je?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side===mr,a),l===null)return null;Wa.copy(a),Wa.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(Wa);return c<e.near||c>e.far?null:{distance:c,point:Wa.clone(),object:r}}function Xa(r,t,e,n,i,s,o,a,l,c){r.getVertexPosition(a,ka),r.getVertexPosition(l,Va),r.getVertexPosition(c,Ha);let h=d_(r,t,e,n,ka,Va,Ha,ip);if(h){let u=new G;kr.getBarycoord(ip,ka,Va,Ha,u),i&&(h.uv=kr.getInterpolatedAttribute(i,a,l,c,u,new mt)),s&&(h.uv1=kr.getInterpolatedAttribute(s,a,l,c,u,new mt)),o&&(h.normal=kr.getInterpolatedAttribute(o,a,l,c,u,new G),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new G,materialIndex:0};kr.getNormal(ka,Va,Ha,d.normal),h.face=d,h.barycoord=u}return h}var Yi=class r extends Ge{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};let a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new ie(c,3)),this.setAttribute("normal",new ie(h,3)),this.setAttribute("uv",new ie(u,2));function g(_,p,m,M,x,y,C,T,S,P,z){let v=y/S,w=C/P,F=y/2,X=C/2,Y=T/2,K=S+1,V=P+1,W=0,k=0,ht=new G;for(let U=0;U<V;U++){let dt=U*w-X;for(let Lt=0;Lt<K;Lt++){let Ht=Lt*v-F;ht[_]=Ht*M,ht[p]=dt*x,ht[m]=Y,c.push(ht.x,ht.y,ht.z),ht[_]=0,ht[p]=0,ht[m]=T>0?1:-1,h.push(ht.x,ht.y,ht.z),u.push(Lt/S),u.push(1-U/P),W+=1}}for(let U=0;U<P;U++)for(let dt=0;dt<S;dt++){let Lt=d+dt+K*U,Ht=d+dt+K*(U+1),O=d+(dt+1)+K*(U+1),N=d+(dt+1)+K*U;l.push(Lt,Ht,N),l.push(Ht,O,N),k+=6}a.addGroup(f,k,z),f+=k,d+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ys(r){let t={};for(let e in r){t[e]={};for(let n in r[e]){let i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Mn(r){let t={};for(let e=0;e<r.length;e++){let n=Ys(r[e]);for(let i in n)t[i]=n[i]}return t}function p_(r){let t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function im(r){let t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:de.workingColorSpace}var m_={clone:Ys,merge:Mn},g_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,__=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,bi=class extends Xi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=g_,this.fragmentShader=__,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ys(t.uniforms),this.uniformsGroups=p_(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},vl=class extends pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ce,this.projectionMatrix=new Ce,this.projectionMatrixInverse=new Ce,this.coordinateSystem=Hi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},cr=new G,rp=new mt,sp=new mt,fn=class extends vl{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=pu*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Zc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return pu*2*Math.atan(Math.tan(Zc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){cr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(cr.x,cr.y).multiplyScalar(-t/cr.z),cr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(cr.x,cr.y).multiplyScalar(-t/cr.z)}getViewSize(t,e){return this.getViewBounds(t,rp,sp),e.subVectors(sp,rp)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Zc*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Is=-90,Ls=1,xu=class extends pn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new fn(Is,Ls,t,e);i.layers=this.layers,this.add(i);let s=new fn(Is,Ls,t,e);s.layers=this.layers,this.add(s);let o=new fn(Is,Ls,t,e);o.layers=this.layers,this.add(o);let a=new fn(Is,Ls,t,e);a.layers=this.layers,this.add(a);let l=new fn(Is,Ls,t,e);l.layers=this.layers,this.add(l);let c=new fn(Is,Ls,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,l]=e;for(let c of e)this.remove(c);if(t===Hi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===fl)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Ml=class extends Dn{constructor(t,e,n,i,s,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Vs,super(t,e,n,i,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},yu=class extends Wi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Ml(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:pi}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Yi(5,5,5),s=new bi({name:"CubemapFromEquirect",uniforms:Ys(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:je,blending:ur});s.uniforms.tEquirect.value=e;let o=new le(i,s),a=e.minFilter;return e.minFilter===Gr&&(e.minFilter=pi),new xu(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}},gh=new G,x_=new G,y_=new Yt,ki=class{constructor(t=new G(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=gh.subVectors(n,e).cross(x_.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(gh),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||y_.getNormalMatrix(t),i=this.coplanarPoint(gh).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ur=new Xs,Ya=new G,No=class{constructor(t=new ki,e=new ki,n=new ki,i=new ki,s=new ki,o=new ki){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Hi){let n=this.planes,i=t.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],f=i[8],g=i[9],_=i[10],p=i[11],m=i[12],M=i[13],x=i[14],y=i[15];if(n[0].setComponents(l-s,d-c,p-f,y-m).normalize(),n[1].setComponents(l+s,d+c,p+f,y+m).normalize(),n[2].setComponents(l+o,d+h,p+g,y+M).normalize(),n[3].setComponents(l-o,d-h,p-g,y-M).normalize(),n[4].setComponents(l-a,d-u,p-_,y-x).normalize(),e===Hi)n[5].setComponents(l+a,d+u,p+_,y+x).normalize();else if(e===fl)n[5].setComponents(a,u,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ur.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ur.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ur)}intersectsSprite(t){return Ur.center.set(0,0,0),Ur.radius=.7071067811865476,Ur.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ur)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Ya.x=i.normal.x>0?t.max.x:t.min.x,Ya.y=i.normal.y>0?t.max.y:t.min.y,Ya.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Ya)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function rm(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function v_(r){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(r.bindBuffer(c,a),u.length===0)r.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let _=u[f];r.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(r.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var Yr=class r extends Ge{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,d=e/l,f=[],g=[],_=[],p=[];for(let m=0;m<h;m++){let M=m*d-o;for(let x=0;x<c;x++){let y=x*u-s;g.push(y,-M,0),_.push(0,0,1),p.push(x/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<a;M++){let x=M+c*m,y=M+c*(m+1),C=M+1+c*(m+1),T=M+1+c*m;f.push(x,y,T),f.push(y,C,T)}this.setIndex(f),this.setAttribute("position",new ie(g,3)),this.setAttribute("normal",new ie(_,3)),this.setAttribute("uv",new ie(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.widthSegments,t.heightSegments)}},M_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,S_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,b_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,w_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,T_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,E_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,A_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,C_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,R_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,P_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,I_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,L_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,D_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,N_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,U_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,O_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,F_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,B_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,z_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,k_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,V_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,H_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,G_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,W_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,X_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Y_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,q_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Z_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,J_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,K_="gl_FragColor = linearToOutputTexel( gl_FragColor );",Q_=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,j_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,tx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ex=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,nx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ix=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,rx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ox=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ax=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,cx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ux=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,dx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,px=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_x=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,yx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,vx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Mx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Sx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ex=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ax=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Cx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Rx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Px=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ix=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Lx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Dx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Nx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ux=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ox=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Fx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,zx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,kx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Gx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Wx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Xx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Yx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Jx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,$x=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Kx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ty=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ey=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ny=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,iy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ry=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,sy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,oy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ay=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ly=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cy=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,hy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,uy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,py=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,my=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,gy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_y=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,yy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,vy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,My=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,by=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ty=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ey=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ay=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Cy=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ry=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Py=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Iy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ly=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Dy=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ny=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Uy=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Oy=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fy=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,By=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,zy=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ky=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Vy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Hy=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wy=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Xy=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yy=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zy=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Jy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$y=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ky=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qy=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Kt={alphahash_fragment:M_,alphahash_pars_fragment:S_,alphamap_fragment:b_,alphamap_pars_fragment:w_,alphatest_fragment:T_,alphatest_pars_fragment:E_,aomap_fragment:A_,aomap_pars_fragment:C_,batching_pars_vertex:R_,batching_vertex:P_,begin_vertex:I_,beginnormal_vertex:L_,bsdfs:D_,iridescence_fragment:N_,bumpmap_pars_fragment:U_,clipping_planes_fragment:O_,clipping_planes_pars_fragment:F_,clipping_planes_pars_vertex:B_,clipping_planes_vertex:z_,color_fragment:k_,color_pars_fragment:V_,color_pars_vertex:H_,color_vertex:G_,common:W_,cube_uv_reflection_fragment:X_,defaultnormal_vertex:Y_,displacementmap_pars_vertex:q_,displacementmap_vertex:Z_,emissivemap_fragment:J_,emissivemap_pars_fragment:$_,colorspace_fragment:K_,colorspace_pars_fragment:Q_,envmap_fragment:j_,envmap_common_pars_fragment:tx,envmap_pars_fragment:ex,envmap_pars_vertex:nx,envmap_physical_pars_fragment:dx,envmap_vertex:ix,fog_vertex:rx,fog_pars_vertex:sx,fog_fragment:ox,fog_pars_fragment:ax,gradientmap_pars_fragment:lx,lightmap_pars_fragment:cx,lights_lambert_fragment:hx,lights_lambert_pars_fragment:ux,lights_pars_begin:fx,lights_toon_fragment:px,lights_toon_pars_fragment:mx,lights_phong_fragment:gx,lights_phong_pars_fragment:_x,lights_physical_fragment:xx,lights_physical_pars_fragment:yx,lights_fragment_begin:vx,lights_fragment_maps:Mx,lights_fragment_end:Sx,logdepthbuf_fragment:bx,logdepthbuf_pars_fragment:wx,logdepthbuf_pars_vertex:Tx,logdepthbuf_vertex:Ex,map_fragment:Ax,map_pars_fragment:Cx,map_particle_fragment:Rx,map_particle_pars_fragment:Px,metalnessmap_fragment:Ix,metalnessmap_pars_fragment:Lx,morphinstance_vertex:Dx,morphcolor_vertex:Nx,morphnormal_vertex:Ux,morphtarget_pars_vertex:Ox,morphtarget_vertex:Fx,normal_fragment_begin:Bx,normal_fragment_maps:zx,normal_pars_fragment:kx,normal_pars_vertex:Vx,normal_vertex:Hx,normalmap_pars_fragment:Gx,clearcoat_normal_fragment_begin:Wx,clearcoat_normal_fragment_maps:Xx,clearcoat_pars_fragment:Yx,iridescence_pars_fragment:qx,opaque_fragment:Zx,packing:Jx,premultiplied_alpha_fragment:$x,project_vertex:Kx,dithering_fragment:Qx,dithering_pars_fragment:jx,roughnessmap_fragment:ty,roughnessmap_pars_fragment:ey,shadowmap_pars_fragment:ny,shadowmap_pars_vertex:iy,shadowmap_vertex:ry,shadowmask_pars_fragment:sy,skinbase_vertex:oy,skinning_pars_vertex:ay,skinning_vertex:ly,skinnormal_vertex:cy,specularmap_fragment:hy,specularmap_pars_fragment:uy,tonemapping_fragment:fy,tonemapping_pars_fragment:dy,transmission_fragment:py,transmission_pars_fragment:my,uv_pars_fragment:gy,uv_pars_vertex:_y,uv_vertex:xy,worldpos_vertex:yy,background_vert:vy,background_frag:My,backgroundCube_vert:Sy,backgroundCube_frag:by,cube_vert:wy,cube_frag:Ty,depth_vert:Ey,depth_frag:Ay,distanceRGBA_vert:Cy,distanceRGBA_frag:Ry,equirect_vert:Py,equirect_frag:Iy,linedashed_vert:Ly,linedashed_frag:Dy,meshbasic_vert:Ny,meshbasic_frag:Uy,meshlambert_vert:Oy,meshlambert_frag:Fy,meshmatcap_vert:By,meshmatcap_frag:zy,meshnormal_vert:ky,meshnormal_frag:Vy,meshphong_vert:Hy,meshphong_frag:Gy,meshphysical_vert:Wy,meshphysical_frag:Xy,meshtoon_vert:Yy,meshtoon_frag:qy,points_vert:Zy,points_frag:Jy,shadow_vert:$y,shadow_frag:Ky,sprite_vert:Qy,sprite_frag:jy},At={common:{diffuse:{value:new Qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new Qt(16777215)},opacity:{value:1},center:{value:new mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},Mi={basic:{uniforms:Mn([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.fog]),vertexShader:Kt.meshbasic_vert,fragmentShader:Kt.meshbasic_frag},lambert:{uniforms:Mn([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new Qt(0)}}]),vertexShader:Kt.meshlambert_vert,fragmentShader:Kt.meshlambert_frag},phong:{uniforms:Mn([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new Qt(0)},specular:{value:new Qt(1118481)},shininess:{value:30}}]),vertexShader:Kt.meshphong_vert,fragmentShader:Kt.meshphong_frag},standard:{uniforms:Mn([At.common,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.roughnessmap,At.metalnessmap,At.fog,At.lights,{emissive:{value:new Qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag},toon:{uniforms:Mn([At.common,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.gradientmap,At.fog,At.lights,{emissive:{value:new Qt(0)}}]),vertexShader:Kt.meshtoon_vert,fragmentShader:Kt.meshtoon_frag},matcap:{uniforms:Mn([At.common,At.bumpmap,At.normalmap,At.displacementmap,At.fog,{matcap:{value:null}}]),vertexShader:Kt.meshmatcap_vert,fragmentShader:Kt.meshmatcap_frag},points:{uniforms:Mn([At.points,At.fog]),vertexShader:Kt.points_vert,fragmentShader:Kt.points_frag},dashed:{uniforms:Mn([At.common,At.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Kt.linedashed_vert,fragmentShader:Kt.linedashed_frag},depth:{uniforms:Mn([At.common,At.displacementmap]),vertexShader:Kt.depth_vert,fragmentShader:Kt.depth_frag},normal:{uniforms:Mn([At.common,At.bumpmap,At.normalmap,At.displacementmap,{opacity:{value:1}}]),vertexShader:Kt.meshnormal_vert,fragmentShader:Kt.meshnormal_frag},sprite:{uniforms:Mn([At.sprite,At.fog]),vertexShader:Kt.sprite_vert,fragmentShader:Kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Kt.background_vert,fragmentShader:Kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:Kt.backgroundCube_vert,fragmentShader:Kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Kt.cube_vert,fragmentShader:Kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Kt.equirect_vert,fragmentShader:Kt.equirect_frag},distanceRGBA:{uniforms:Mn([At.common,At.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Kt.distanceRGBA_vert,fragmentShader:Kt.distanceRGBA_frag},shadow:{uniforms:Mn([At.lights,At.fog,{color:{value:new Qt(0)},opacity:{value:1}}]),vertexShader:Kt.shadow_vert,fragmentShader:Kt.shadow_frag}};Mi.physical={uniforms:Mn([Mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new Qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new Qt(0)},specularColor:{value:new Qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag};var qa={r:0,b:0,g:0},Or=new Si,tv=new Ce;function ev(r,t,e,n,i,s,o){let a=new Qt(0),l=s===!0?0:1,c,h,u=null,d=0,f=null;function g(M){let x=M.isScene===!0?M.background:null;return x&&x.isTexture&&(x=(M.backgroundBlurriness>0?e:t).get(x)),x}function _(M){let x=!1,y=g(M);y===null?m(a,l):y&&y.isColor&&(m(y,1),x=!0);let C=r.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function p(M,x){let y=g(x);y&&(y.isCubeTexture||y.mapping===ql)?(h===void 0&&(h=new le(new Yi(1,1,1),new bi({name:"BackgroundCubeMaterial",uniforms:Ys(Mi.backgroundCube.uniforms),vertexShader:Mi.backgroundCube.vertexShader,fragmentShader:Mi.backgroundCube.fragmentShader,side:je,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,T,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Or.copy(x.backgroundRotation),Or.x*=-1,Or.y*=-1,Or.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Or.y*=-1,Or.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(tv.makeRotationFromEuler(Or)),h.material.toneMapped=de.getTransfer(y.colorSpace)!==be,(u!==y||d!==y.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,u=y,d=y.version,f=r.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new le(new Yr(2,2),new bi({name:"BackgroundMaterial",uniforms:Ys(Mi.background.uniforms),vertexShader:Mi.background.vertexShader,fragmentShader:Mi.background.fragmentShader,side:mr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=de.getTransfer(y.colorSpace)!==be,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,f=r.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function m(M,x){M.getRGB(qa,im(r)),n.buffers.color.setClear(qa.r,qa.g,qa.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(M,x=1){a.set(M),l=x,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,m(a,l)},render:_,addToRenderList:p}}function nv(r,t){let e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null),s=i,o=!1;function a(v,w,F,X,Y){let K=!1,V=u(X,F,w);s!==V&&(s=V,c(s.object)),K=f(v,X,F,Y),K&&g(v,X,F,Y),Y!==null&&t.update(Y,r.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,y(v,w,F,X),Y!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function l(){return r.createVertexArray()}function c(v){return r.bindVertexArray(v)}function h(v){return r.deleteVertexArray(v)}function u(v,w,F){let X=F.wireframe===!0,Y=n[v.id];Y===void 0&&(Y={},n[v.id]=Y);let K=Y[w.id];K===void 0&&(K={},Y[w.id]=K);let V=K[X];return V===void 0&&(V=d(l()),K[X]=V),V}function d(v){let w=[],F=[],X=[];for(let Y=0;Y<e;Y++)w[Y]=0,F[Y]=0,X[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:F,attributeDivisors:X,object:v,attributes:{},index:null}}function f(v,w,F,X){let Y=s.attributes,K=w.attributes,V=0,W=F.getAttributes();for(let k in W)if(W[k].location>=0){let U=Y[k],dt=K[k];if(dt===void 0&&(k==="instanceMatrix"&&v.instanceMatrix&&(dt=v.instanceMatrix),k==="instanceColor"&&v.instanceColor&&(dt=v.instanceColor)),U===void 0||U.attribute!==dt||dt&&U.data!==dt.data)return!0;V++}return s.attributesNum!==V||s.index!==X}function g(v,w,F,X){let Y={},K=w.attributes,V=0,W=F.getAttributes();for(let k in W)if(W[k].location>=0){let U=K[k];U===void 0&&(k==="instanceMatrix"&&v.instanceMatrix&&(U=v.instanceMatrix),k==="instanceColor"&&v.instanceColor&&(U=v.instanceColor));let dt={};dt.attribute=U,U&&U.data&&(dt.data=U.data),Y[k]=dt,V++}s.attributes=Y,s.attributesNum=V,s.index=X}function _(){let v=s.newAttributes;for(let w=0,F=v.length;w<F;w++)v[w]=0}function p(v){m(v,0)}function m(v,w){let F=s.newAttributes,X=s.enabledAttributes,Y=s.attributeDivisors;F[v]=1,X[v]===0&&(r.enableVertexAttribArray(v),X[v]=1),Y[v]!==w&&(r.vertexAttribDivisor(v,w),Y[v]=w)}function M(){let v=s.newAttributes,w=s.enabledAttributes;for(let F=0,X=w.length;F<X;F++)w[F]!==v[F]&&(r.disableVertexAttribArray(F),w[F]=0)}function x(v,w,F,X,Y,K,V){V===!0?r.vertexAttribIPointer(v,w,F,Y,K):r.vertexAttribPointer(v,w,F,X,Y,K)}function y(v,w,F,X){_();let Y=X.attributes,K=F.getAttributes(),V=w.defaultAttributeValues;for(let W in K){let k=K[W];if(k.location>=0){let ht=Y[W];if(ht===void 0&&(W==="instanceMatrix"&&v.instanceMatrix&&(ht=v.instanceMatrix),W==="instanceColor"&&v.instanceColor&&(ht=v.instanceColor)),ht!==void 0){let U=ht.normalized,dt=ht.itemSize,Lt=t.get(ht);if(Lt===void 0)continue;let Ht=Lt.buffer,O=Lt.type,N=Lt.bytesPerElement,L=O===r.INT||O===r.UNSIGNED_INT||ht.gpuType===ju;if(ht.isInterleavedBufferAttribute){let E=ht.data,nt=E.stride,at=ht.offset;if(E.isInstancedInterleavedBuffer){for(let et=0;et<k.locationSize;et++)m(k.location+et,E.meshPerAttribute);v.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=E.meshPerAttribute*E.count)}else for(let et=0;et<k.locationSize;et++)p(k.location+et);r.bindBuffer(r.ARRAY_BUFFER,Ht);for(let et=0;et<k.locationSize;et++)x(k.location+et,dt/k.locationSize,O,U,nt*N,(at+dt/k.locationSize*et)*N,L)}else{if(ht.isInstancedBufferAttribute){for(let E=0;E<k.locationSize;E++)m(k.location+E,ht.meshPerAttribute);v.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let E=0;E<k.locationSize;E++)p(k.location+E);r.bindBuffer(r.ARRAY_BUFFER,Ht);for(let E=0;E<k.locationSize;E++)x(k.location+E,dt/k.locationSize,O,U,dt*N,dt/k.locationSize*E*N,L)}}else if(V!==void 0){let U=V[W];if(U!==void 0)switch(U.length){case 2:r.vertexAttrib2fv(k.location,U);break;case 3:r.vertexAttrib3fv(k.location,U);break;case 4:r.vertexAttrib4fv(k.location,U);break;default:r.vertexAttrib1fv(k.location,U)}}}}M()}function C(){P();for(let v in n){let w=n[v];for(let F in w){let X=w[F];for(let Y in X)h(X[Y].object),delete X[Y];delete w[F]}delete n[v]}}function T(v){if(n[v.id]===void 0)return;let w=n[v.id];for(let F in w){let X=w[F];for(let Y in X)h(X[Y].object),delete X[Y];delete w[F]}delete n[v.id]}function S(v){for(let w in n){let F=n[w];if(F[v.id]===void 0)continue;let X=F[v.id];for(let Y in X)h(X[Y].object),delete X[Y];delete F[v.id]}}function P(){z(),o=!0,s!==i&&(s=i,c(s.object))}function z(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:P,resetDefaultState:z,dispose:C,releaseStatesOfGeometry:T,releaseStatesOfProgram:S,initAttributes:_,enableAttribute:p,disableUnusedAttributes:M}}function iv(r,t,e){let n;function i(c){n=c}function s(c,h){r.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(r.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}function l(c,h,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_];for(let _=0;_<d.length;_++)e.update(g,n,d[_])}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function rv(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let S=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(S){return!(S!==mi&&n.convert(S)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(S){let P=S===qo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(S!==Gi&&n.convert(S)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&S!==Vi&&!P)}function l(S){if(S==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(d===!0){let S=t.get("EXT_clip_control");S.clipControlEXT(S.LOWER_LEFT_EXT,S.ZERO_TO_ONE_EXT)}let f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),M=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),x=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,T=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:M,maxVaryings:x,maxFragmentUniforms:y,vertexTextures:C,maxSamples:T}}function sv(r){let t=this,e=null,n=0,i=!1,s=!1,o=new ki,a=new Yt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,_=u.clipIntersection,p=u.clipShadows,m=r.get(u);if(!i||g===null||g.length===0||s&&!p)s?h(null):c();else{let M=s?0:n,x=M*4,y=m.clippingState||null;l.value=y,y=h(g,d,x,f);for(let C=0;C!==x;++C)y[C]=e[C];m.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){let _=u!==null?u.length:0,p=null;if(_!==0){if(p=l.value,g!==!0||p===null){let m=f+_*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(p===null||p.length<m)&&(p=new Float32Array(m));for(let x=0,y=f;x!==_;++x,y+=4)o.copy(u[x]).applyMatrix4(M,a),o.normal.toArray(p,y),p[y+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function ov(r){let t=new WeakMap;function e(o,a){return a===Bh?o.mapping=Vs:a===zh&&(o.mapping=Hs),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Bh||a===zh)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new yu(l.height);return c.fromEquirectangularTexture(r,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}var Sl=class extends vl{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ns=4,op=[.125,.215,.35,.446,.526,.582],Vr=20,_h=new Sl,ap=new Qt,xh=null,yh=0,vh=0,Mh=!1,Br=(1+Math.sqrt(5))/2,Ds=1/Br,lp=[new G(-Br,Ds,0),new G(Br,Ds,0),new G(-Ds,0,Br),new G(Ds,0,Br),new G(0,Br,-Ds),new G(0,Br,Ds),new G(-1,1,-1),new G(1,1,-1),new G(-1,1,1),new G(1,1,1)],qs=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){xh=this._renderer.getRenderTarget(),yh=this._renderer.getActiveCubeFace(),vh=this._renderer.getActiveMipmapLevel(),Mh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=up(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(xh,yh,vh),this._renderer.xr.enabled=Mh,t.scissorTest=!1,Za(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Vs||t.mapping===Hs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),xh=this._renderer.getRenderTarget(),yh=this._renderer.getActiveCubeFace(),vh=this._renderer.getActiveMipmapLevel(),Mh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:pi,minFilter:pi,generateMipmaps:!1,type:qo,format:mi,colorSpace:xr,depthBuffer:!1},i=cp(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cp(t,e,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=av(s)),this._blurMaterial=lv(s,t,e)}return i}_compileMaterial(t){let e=new le(this._lodPlanes[0],t);this._renderer.compile(e,_h)}_sceneToCubeUV(t,e,n,i){let a=new fn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(ap),h.toneMapping=fr,h.autoClear=!1;let f=new jn({name:"PMREM.Background",side:je,depthWrite:!1,depthTest:!1}),g=new le(new Yi,f),_=!1,p=t.background;p?p.isColor&&(f.color.copy(p),t.background=null,_=!0):(f.color.copy(ap),_=!0);for(let m=0;m<6;m++){let M=m%3;M===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):M===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));let x=this._cubeSize;Za(i,M*x,m>2?x:0,x,x),h.setRenderTarget(i),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===Vs||t.mapping===Hs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=up()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hp());let s=i?this._cubemapMaterial:this._equirectMaterial,o=new le(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;let l=this._cubeSize;Za(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,_h)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let s=1;s<i;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=lp[(i-s-1)%lp.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,i,s){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new le(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Vr-1),_=s/g,p=isFinite(s)?1+Math.floor(h*_):Vr;p>Vr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Vr}`);let m=[],M=0;for(let S=0;S<Vr;++S){let P=S/_,z=Math.exp(-P*P/2);m.push(z),S===0?M+=z:S<p&&(M+=2*z)}for(let S=0;S<m.length;S++)m[S]=m[S]/M;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;let y=this._sizeLods[i],C=3*y*(i>x-Ns?i-x+Ns:0),T=4*(this._cubeSize-y);Za(e,C,T,3*y,2*y),l.setRenderTarget(e),l.render(u,_h)}};function av(r){let t=[],e=[],n=[],i=r,s=r-Ns+1+op.length;for(let o=0;o<s;o++){let a=Math.pow(2,i);e.push(a);let l=1/a;o>r-Ns?l=op[o-r+Ns-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,p=2,m=1,M=new Float32Array(_*g*f),x=new Float32Array(p*g*f),y=new Float32Array(m*g*f);for(let T=0;T<f;T++){let S=T%3*2/3-1,P=T>2?0:-1,z=[S,P,0,S+2/3,P,0,S+2/3,P+1,0,S,P,0,S+2/3,P+1,0,S,P+1,0];M.set(z,_*g*T),x.set(d,p*g*T);let v=[T,T,T,T,T,T];y.set(v,m*g*T)}let C=new Ge;C.setAttribute("position",new Qn(M,_)),C.setAttribute("uv",new Qn(x,p)),C.setAttribute("faceIndex",new Qn(y,m)),t.push(C),i>Ns&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function cp(r,t,e){let n=new Wi(r,t,e);return n.texture.mapping=ql,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Za(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function lv(r,t,e){let n=new Float32Array(Vr),i=new G(0,1,0);return new bi({name:"SphericalGaussianBlur",defines:{n:Vr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:af(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ur,depthTest:!1,depthWrite:!1})}function hp(){return new bi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:af(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ur,depthTest:!1,depthWrite:!1})}function up(){return new bi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:af(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ur,depthTest:!1,depthWrite:!1})}function af(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function cv(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Bh||l===zh,h=l===Vs||l===Hs;if(c||h){let u=t.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new qs(r)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return c&&f&&f.height>0||h&&f&&i(f)?(e===null&&(e=new qs(r)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function i(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function hv(r){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&al("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function uv(r,t,e,n){let i={},s=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let _=d.morphAttributes[g];for(let p=0,m=_.length;p<m;p++)t.remove(_[p])}d.removeEventListener("dispose",o),delete i[d.id];let f=s.get(d);f&&(t.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)t.update(d[g],r.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let _=f[g];for(let p=0,m=_.length;p<m;p++)t.update(_[p],r.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,g=u.attributes.position,_=0;if(f!==null){let M=f.array;_=f.version;for(let x=0,y=M.length;x<y;x+=3){let C=M[x+0],T=M[x+1],S=M[x+2];d.push(C,T,T,S,S,C)}}else if(g!==void 0){let M=g.array;_=g.version;for(let x=0,y=M.length/3-1;x<y;x+=3){let C=x+0,T=x+1,S=x+2;d.push(C,T,T,S,S,C)}}else return;let p=new(em(d)?yl:xl)(d,1);p.version=_;let m=s.get(u);m&&t.remove(m),s.set(u,p)}function h(u){let d=s.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function fv(r,t,e){let n;function i(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,f){r.drawElements(n,f,s,d*o),e.update(f,n,1)}function c(d,f,g){g!==0&&(r.drawElementsInstanced(n,f,s,d*o,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,g);let p=0;for(let m=0;m<g;m++)p+=f[m];e.update(p,n,1)}function u(d,f,g,_){if(g===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<d.length;m++)c(d[m]/o,f[m],_[m]);else{p.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,_,0,g);let m=0;for(let M=0;M<g;M++)m+=f[M];for(let M=0;M<_.length;M++)e.update(m,n,_[M])}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function dv(r){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function pv(r,t,e){let n=new WeakMap,i=new ge;function s(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let z=function(){S.dispose(),n.delete(a),a.removeEventListener("dispose",z)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],x=0;f===!0&&(x=1),g===!0&&(x=2),_===!0&&(x=3);let y=a.attributes.position.count*x,C=1;y>t.maxTextureSize&&(C=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let T=new Float32Array(y*C*4*u),S=new ml(T,y,C,u);S.type=Vi,S.needsUpdate=!0;let P=x*4;for(let v=0;v<u;v++){let w=p[v],F=m[v],X=M[v],Y=y*C*4*v;for(let K=0;K<w.count;K++){let V=K*P;f===!0&&(i.fromBufferAttribute(w,K),T[Y+V+0]=i.x,T[Y+V+1]=i.y,T[Y+V+2]=i.z,T[Y+V+3]=0),g===!0&&(i.fromBufferAttribute(F,K),T[Y+V+4]=i.x,T[Y+V+5]=i.y,T[Y+V+6]=i.z,T[Y+V+7]=0),_===!0&&(i.fromBufferAttribute(X,K),T[Y+V+8]=i.x,T[Y+V+9]=i.y,T[Y+V+10]=i.z,T[Y+V+11]=X.itemSize===4?i.w:1)}}d={count:u,texture:S,size:new mt(y,C)},n.set(a,d),a.addEventListener("dispose",z)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function mv(r,t,e,n){let i=new WeakMap;function s(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function o(){i=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}var bl=class extends Dn{constructor(t,e,n,i,s,o,a,l,c,h=Fs){if(h!==Fs&&h!==Ws)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Fs&&(n=Wr),n===void 0&&h===Ws&&(n=Gs),super(null,i,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:dn,this.minFilter=l!==void 0?l:dn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},sm=new Dn,fp=new bl(1,1),om=new ml,am=new _u,lm=new Ml,dp=[],pp=[],mp=new Float32Array(16),gp=new Float32Array(9),_p=new Float32Array(4);function Qs(r,t,e){let n=r[0];if(n<=0||n>0)return r;let i=t*e,s=dp[i];if(s===void 0&&(s=new Float32Array(i),dp[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function Ye(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function qe(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function $l(r,t){let e=pp[t];e===void 0&&(e=new Int32Array(t),pp[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function gv(r,t){let e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function _v(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;r.uniform2fv(this.addr,t),qe(e,t)}}function xv(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ye(e,t))return;r.uniform3fv(this.addr,t),qe(e,t)}}function yv(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;r.uniform4fv(this.addr,t),qe(e,t)}}function vv(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ye(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),qe(e,t)}else{if(Ye(e,n))return;_p.set(n),r.uniformMatrix2fv(this.addr,!1,_p),qe(e,n)}}function Mv(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ye(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),qe(e,t)}else{if(Ye(e,n))return;gp.set(n),r.uniformMatrix3fv(this.addr,!1,gp),qe(e,n)}}function Sv(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ye(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),qe(e,t)}else{if(Ye(e,n))return;mp.set(n),r.uniformMatrix4fv(this.addr,!1,mp),qe(e,n)}}function bv(r,t){let e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function wv(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;r.uniform2iv(this.addr,t),qe(e,t)}}function Tv(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ye(e,t))return;r.uniform3iv(this.addr,t),qe(e,t)}}function Ev(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;r.uniform4iv(this.addr,t),qe(e,t)}}function Av(r,t){let e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function Cv(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;r.uniform2uiv(this.addr,t),qe(e,t)}}function Rv(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ye(e,t))return;r.uniform3uiv(this.addr,t),qe(e,t)}}function Pv(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;r.uniform4uiv(this.addr,t),qe(e,t)}}function Iv(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(fp.compareFunction=tm,s=fp):s=sm,e.setTexture2D(t||s,i)}function Lv(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||am,i)}function Dv(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||lm,i)}function Nv(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||om,i)}function Uv(r){switch(r){case 5126:return gv;case 35664:return _v;case 35665:return xv;case 35666:return yv;case 35674:return vv;case 35675:return Mv;case 35676:return Sv;case 5124:case 35670:return bv;case 35667:case 35671:return wv;case 35668:case 35672:return Tv;case 35669:case 35673:return Ev;case 5125:return Av;case 36294:return Cv;case 36295:return Rv;case 36296:return Pv;case 35678:case 36198:case 36298:case 36306:case 35682:return Iv;case 35679:case 36299:case 36307:return Lv;case 35680:case 36300:case 36308:case 36293:return Dv;case 36289:case 36303:case 36311:case 36292:return Nv}}function Ov(r,t){r.uniform1fv(this.addr,t)}function Fv(r,t){let e=Qs(t,this.size,2);r.uniform2fv(this.addr,e)}function Bv(r,t){let e=Qs(t,this.size,3);r.uniform3fv(this.addr,e)}function zv(r,t){let e=Qs(t,this.size,4);r.uniform4fv(this.addr,e)}function kv(r,t){let e=Qs(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function Vv(r,t){let e=Qs(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function Hv(r,t){let e=Qs(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function Gv(r,t){r.uniform1iv(this.addr,t)}function Wv(r,t){r.uniform2iv(this.addr,t)}function Xv(r,t){r.uniform3iv(this.addr,t)}function Yv(r,t){r.uniform4iv(this.addr,t)}function qv(r,t){r.uniform1uiv(this.addr,t)}function Zv(r,t){r.uniform2uiv(this.addr,t)}function Jv(r,t){r.uniform3uiv(this.addr,t)}function $v(r,t){r.uniform4uiv(this.addr,t)}function Kv(r,t,e){let n=this.cache,i=t.length,s=$l(e,i);Ye(n,s)||(r.uniform1iv(this.addr,s),qe(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||sm,s[o])}function Qv(r,t,e){let n=this.cache,i=t.length,s=$l(e,i);Ye(n,s)||(r.uniform1iv(this.addr,s),qe(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||am,s[o])}function jv(r,t,e){let n=this.cache,i=t.length,s=$l(e,i);Ye(n,s)||(r.uniform1iv(this.addr,s),qe(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||lm,s[o])}function tM(r,t,e){let n=this.cache,i=t.length,s=$l(e,i);Ye(n,s)||(r.uniform1iv(this.addr,s),qe(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||om,s[o])}function eM(r){switch(r){case 5126:return Ov;case 35664:return Fv;case 35665:return Bv;case 35666:return zv;case 35674:return kv;case 35675:return Vv;case 35676:return Hv;case 5124:case 35670:return Gv;case 35667:case 35671:return Wv;case 35668:case 35672:return Xv;case 35669:case 35673:return Yv;case 5125:return qv;case 36294:return Zv;case 36295:return Jv;case 36296:return $v;case 35678:case 36198:case 36298:case 36306:case 35682:return Kv;case 35679:case 36299:case 36307:return Qv;case 35680:case 36300:case 36308:case 36293:return jv;case 36289:case 36303:case 36311:case 36292:return tM}}var vu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Uv(e.type)}},Mu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=eM(e.type)}},Su=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let s=0,o=i.length;s!==o;++s){let a=i[s];a.setValue(t,e[a.id],n)}}},Sh=/(\w+)(\])?(\[|\.)?/g;function xp(r,t){r.seq.push(t),r.map[t.id]=t}function nM(r,t,e){let n=r.name,i=n.length;for(Sh.lastIndex=0;;){let s=Sh.exec(n),o=Sh.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){xp(e,c===void 0?new vu(a,r,t):new Mu(a,r,t));break}else{let u=e.map[a];u===void 0&&(u=new Su(a),xp(e,u)),e=u}}}var zs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);nM(s,o,this)}}setValue(t,e,n,i){let s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){let a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,s=t.length;i!==s;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function yp(r,t,e){let n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}var iM=37297,rM=0;function sM(r,t){let e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function oM(r){let t=de.getPrimaries(de.workingColorSpace),e=de.getPrimaries(r),n;switch(t===e?n="":t===ul&&e===hl?n="LinearDisplayP3ToLinearSRGB":t===hl&&e===ul&&(n="LinearSRGBToLinearDisplayP3"),r){case xr:case Jl:return[n,"LinearTransferOETF"];case un:case of:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function vp(r,t,e){let n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";let s=/ERROR: 0:(\d+)/.exec(i);if(s){let o=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+sM(r.getShaderSource(t),o)}else return i}function aM(r,t){let e=oM(t);return`vec4 ${r}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function lM(r,t){let e;switch(t){case D0:e="Linear";break;case N0:e="Reinhard";break;case U0:e="Cineon";break;case Qu:e="ACESFilmic";break;case F0:e="AgX";break;case B0:e="Neutral";break;case O0:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Ja=new G;function cM(){de.getLuminanceCoefficients(Ja);let r=Ja.x.toFixed(4),t=Ja.y.toFixed(4),e=Ja.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function hM(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Co).join(`
`)}function uM(r){let t=[];for(let e in r){let n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function fM(r,t){let e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(t,i),o=s.name,a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function Co(r){return r!==""}function Mp(r,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Sp(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var dM=/^[ \t]*#include +<([\w\d./]+)>/gm;function bu(r){return r.replace(dM,mM)}var pM=new Map;function mM(r,t){let e=Kt[t];if(e===void 0){let n=pM.get(t);if(n!==void 0)e=Kt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return bu(e)}var gM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bp(r){return r.replace(gM,_M)}function _M(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function wp(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function xM(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Vp?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===Ku?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===zi&&(t="SHADOWMAP_TYPE_VSM"),t}function yM(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Vs:case Hs:t="ENVMAP_TYPE_CUBE";break;case ql:t="ENVMAP_TYPE_CUBE_UV";break}return t}function vM(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Hs:t="ENVMAP_MODE_REFRACTION";break}return t}function MM(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Hp:t="ENVMAP_BLENDING_MULTIPLY";break;case I0:t="ENVMAP_BLENDING_MIX";break;case L0:t="ENVMAP_BLENDING_ADD";break}return t}function SM(r){let t=r.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function bM(r,t,e,n){let i=r.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,l=xM(e),c=yM(e),h=vM(e),u=MM(e),d=SM(e),f=hM(e),g=uM(s),_=i.createProgram(),p,m,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Co).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Co).join(`
`),m.length>0&&(m+=`
`)):(p=[wp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Co).join(`
`),m=[wp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==fr?"#define TONE_MAPPING":"",e.toneMapping!==fr?Kt.tonemapping_pars_fragment:"",e.toneMapping!==fr?lM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Kt.colorspace_pars_fragment,aM("linearToOutputTexel",e.outputColorSpace),cM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Co).join(`
`)),o=bu(o),o=Mp(o,e),o=Sp(o,e),a=bu(a),a=Mp(a,e),a=Sp(a,e),o=bp(o),a=bp(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===Hd?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Hd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let x=M+p+o,y=M+m+a,C=yp(i,i.VERTEX_SHADER,x),T=yp(i,i.FRAGMENT_SHADER,y);i.attachShader(_,C),i.attachShader(_,T),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function S(w){if(r.debug.checkShaderErrors){let F=i.getProgramInfoLog(_).trim(),X=i.getShaderInfoLog(C).trim(),Y=i.getShaderInfoLog(T).trim(),K=!0,V=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(K=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,C,T);else{let W=vp(i,C,"vertex"),k=vp(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+F+`
`+W+`
`+k)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(X===""||Y==="")&&(V=!1);V&&(w.diagnostics={runnable:K,programLog:F,vertexShader:{log:X,prefix:p},fragmentShader:{log:Y,prefix:m}})}i.deleteShader(C),i.deleteShader(T),P=new zs(i,_),z=fM(i,_)}let P;this.getUniforms=function(){return P===void 0&&S(this),P};let z;this.getAttributes=function(){return z===void 0&&S(this),z};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=i.getProgramParameter(_,iM)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=rM++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=T,this}var wM=0,wu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Tu(t),e.set(t,n)),n}},Tu=class{constructor(t){this.id=wM++,this.code=t,this.usedTimes=0}};function TM(r,t,e,n,i,s,o){let a=new _l,l=new wu,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.reverseDepthBuffer,f=i.vertexTextures,g=i.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return c.add(v),v===0?"uv":`uv${v}`}function m(v,w,F,X,Y){let K=X.fog,V=Y.geometry,W=v.isMeshStandardMaterial?X.environment:null,k=(v.isMeshStandardMaterial?e:t).get(v.envMap||W),ht=k&&k.mapping===ql?k.image.height:null,U=_[v.type];v.precision!==null&&(g=i.getMaxPrecision(v.precision),g!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",g,"instead."));let dt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Lt=dt!==void 0?dt.length:0,Ht=0;V.morphAttributes.position!==void 0&&(Ht=1),V.morphAttributes.normal!==void 0&&(Ht=2),V.morphAttributes.color!==void 0&&(Ht=3);let O,N,L,E;if(U){let Ft=Mi[U];O=Ft.vertexShader,N=Ft.fragmentShader}else O=v.vertexShader,N=v.fragmentShader,l.update(v),L=l.getVertexShaderID(v),E=l.getFragmentShaderID(v);let nt=r.getRenderTarget(),at=Y.isInstancedMesh===!0,et=Y.isBatchedMesh===!0,ft=!!v.map,Q=!!v.matcap,A=!!k,q=!!v.aoMap,tt=!!v.lightMap,rt=!!v.bumpMap,B=!!v.normalMap,H=!!v.displacementMap,D=!!v.emissiveMap,R=!!v.metalnessMap,b=!!v.roughnessMap,j=v.anisotropy>0,ct=v.clearcoat>0,ut=v.dispersion>0,ot=v.iridescence>0,Pt=v.sheen>0,xt=v.transmission>0,vt=j&&!!v.anisotropyMap,Vt=ct&&!!v.clearcoatMap,_t=ct&&!!v.clearcoatNormalMap,Et=ct&&!!v.clearcoatRoughnessMap,It=ot&&!!v.iridescenceMap,kt=ot&&!!v.iridescenceThicknessMap,Ct=Pt&&!!v.sheenColorMap,Zt=Pt&&!!v.sheenRoughnessMap,Xt=!!v.specularMap,oe=!!v.specularColorMap,Z=!!v.specularIntensityMap,gt=xt&&!!v.transmissionMap,lt=xt&&!!v.thicknessMap,pt=!!v.gradientMap,Mt=!!v.alphaMap,St=v.alphaTest>0,Jt=!!v.alphaHash,_e=!!v.extensions,Te=fr;v.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(Te=r.toneMapping);let ne={shaderID:U,shaderType:v.type,shaderName:v.name,vertexShader:O,fragmentShader:N,defines:v.defines,customVertexShaderID:L,customFragmentShaderID:E,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:g,batching:et,batchingColor:et&&Y._colorsTexture!==null,instancing:at,instancingColor:at&&Y.instanceColor!==null,instancingMorph:at&&Y.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:nt===null?r.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:xr,alphaToCoverage:!!v.alphaToCoverage,map:ft,matcap:Q,envMap:A,envMapMode:A&&k.mapping,envMapCubeUVHeight:ht,aoMap:q,lightMap:tt,bumpMap:rt,normalMap:B,displacementMap:f&&H,emissiveMap:D,normalMapObjectSpace:B&&v.normalMapType===H0,normalMapTangentSpace:B&&v.normalMapType===jp,metalnessMap:R,roughnessMap:b,anisotropy:j,anisotropyMap:vt,clearcoat:ct,clearcoatMap:Vt,clearcoatNormalMap:_t,clearcoatRoughnessMap:Et,dispersion:ut,iridescence:ot,iridescenceMap:It,iridescenceThicknessMap:kt,sheen:Pt,sheenColorMap:Ct,sheenRoughnessMap:Zt,specularMap:Xt,specularColorMap:oe,specularIntensityMap:Z,transmission:xt,transmissionMap:gt,thicknessMap:lt,gradientMap:pt,opaque:v.transparent===!1&&v.blending===Os&&v.alphaToCoverage===!1,alphaMap:Mt,alphaTest:St,alphaHash:Jt,combine:v.combine,mapUv:ft&&p(v.map.channel),aoMapUv:q&&p(v.aoMap.channel),lightMapUv:tt&&p(v.lightMap.channel),bumpMapUv:rt&&p(v.bumpMap.channel),normalMapUv:B&&p(v.normalMap.channel),displacementMapUv:H&&p(v.displacementMap.channel),emissiveMapUv:D&&p(v.emissiveMap.channel),metalnessMapUv:R&&p(v.metalnessMap.channel),roughnessMapUv:b&&p(v.roughnessMap.channel),anisotropyMapUv:vt&&p(v.anisotropyMap.channel),clearcoatMapUv:Vt&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:_t&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Et&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:It&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:kt&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ct&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:Zt&&p(v.sheenRoughnessMap.channel),specularMapUv:Xt&&p(v.specularMap.channel),specularColorMapUv:oe&&p(v.specularColorMap.channel),specularIntensityMapUv:Z&&p(v.specularIntensityMap.channel),transmissionMapUv:gt&&p(v.transmissionMap.channel),thicknessMapUv:lt&&p(v.thicknessMap.channel),alphaMapUv:Mt&&p(v.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(B||j),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!V.attributes.uv&&(ft||Mt),fog:!!K,useFog:v.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:d,skinning:Y.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:Lt,morphTextureStride:Ht,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&F.length>0,shadowMapType:r.shadowMap.type,toneMapping:Te,decodeVideoTexture:ft&&v.map.isVideoTexture===!0&&de.getTransfer(v.map.colorSpace)===be,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===di,flipSided:v.side===je,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:_e&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_e&&v.extensions.multiDraw===!0||et)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return ne.vertexUv1s=c.has(1),ne.vertexUv2s=c.has(2),ne.vertexUv3s=c.has(3),c.clear(),ne}function M(v){let w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(let F in v.defines)w.push(F),w.push(v.defines[F]);return v.isRawShaderMaterial===!1&&(x(w,v),y(w,v),w.push(r.outputColorSpace)),w.push(v.customProgramCacheKey),w.join()}function x(v,w){v.push(w.precision),v.push(w.outputColorSpace),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.mapUv),v.push(w.alphaMapUv),v.push(w.lightMapUv),v.push(w.aoMapUv),v.push(w.bumpMapUv),v.push(w.normalMapUv),v.push(w.displacementMapUv),v.push(w.emissiveMapUv),v.push(w.metalnessMapUv),v.push(w.roughnessMapUv),v.push(w.anisotropyMapUv),v.push(w.clearcoatMapUv),v.push(w.clearcoatNormalMapUv),v.push(w.clearcoatRoughnessMapUv),v.push(w.iridescenceMapUv),v.push(w.iridescenceThicknessMapUv),v.push(w.sheenColorMapUv),v.push(w.sheenRoughnessMapUv),v.push(w.specularMapUv),v.push(w.specularColorMapUv),v.push(w.specularIntensityMapUv),v.push(w.transmissionMapUv),v.push(w.thicknessMapUv),v.push(w.combine),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.numLightProbes),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function y(v,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),v.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reverseDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.alphaToCoverage&&a.enable(20),v.push(a.mask)}function C(v){let w=_[v.type],F;if(w){let X=Mi[w];F=m_.clone(X.uniforms)}else F=v.uniforms;return F}function T(v,w){let F;for(let X=0,Y=h.length;X<Y;X++){let K=h[X];if(K.cacheKey===w){F=K,++F.usedTimes;break}}return F===void 0&&(F=new bM(r,w,v,s),h.push(F)),F}function S(v){if(--v.usedTimes===0){let w=h.indexOf(v);h[w]=h[h.length-1],h.pop(),v.destroy()}}function P(v){l.remove(v)}function z(){l.dispose()}return{getParameters:m,getProgramCacheKey:M,getUniforms:C,acquireProgram:T,releaseProgram:S,releaseShaderCache:P,programs:h,dispose:z}}function EM(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function AM(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Tp(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Ep(){let r=[],t=0,e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(u,d,f,g,_,p){let m=r[t];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:p},r[t]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=_,m.group=p),t++,m}function a(u,d,f,g,_,p){let m=o(u,d,f,g,_,p);f.transmission>0?n.push(m):f.transparent===!0?i.push(m):e.push(m)}function l(u,d,f,g,_,p){let m=o(u,d,f,g,_,p);f.transmission>0?n.unshift(m):f.transparent===!0?i.unshift(m):e.unshift(m)}function c(u,d){e.length>1&&e.sort(u||AM),n.length>1&&n.sort(d||Tp),i.length>1&&i.sort(d||Tp)}function h(){for(let u=t,d=r.length;u<d;u++){let f=r[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:h,sort:c}}function CM(){let r=new WeakMap;function t(n,i){let s=r.get(n),o;return s===void 0?(o=new Ep,r.set(n,[o])):i>=s.length?(o=new Ep,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function RM(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new G,color:new Qt};break;case"SpotLight":e={position:new G,direction:new G,color:new Qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new G,color:new Qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new G,skyColor:new Qt,groundColor:new Qt};break;case"RectAreaLight":e={color:new Qt,position:new G,halfWidth:new G,halfHeight:new G};break}return r[t.id]=e,e}}}function PM(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}var IM=0;function LM(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function DM(r){let t=new RM,e=PM(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new G);let i=new G,s=new Ce,o=new Ce;function a(c){let h=0,u=0,d=0;for(let z=0;z<9;z++)n.probe[z].set(0,0,0);let f=0,g=0,_=0,p=0,m=0,M=0,x=0,y=0,C=0,T=0,S=0;c.sort(LM);for(let z=0,v=c.length;z<v;z++){let w=c[z],F=w.color,X=w.intensity,Y=w.distance,K=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)h+=F.r*X,u+=F.g*X,d+=F.b*X;else if(w.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(w.sh.coefficients[V],X);S++}else if(w.isDirectionalLight){let V=t.get(w);if(V.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let W=w.shadow,k=e.get(w);k.shadowIntensity=W.intensity,k.shadowBias=W.bias,k.shadowNormalBias=W.normalBias,k.shadowRadius=W.radius,k.shadowMapSize=W.mapSize,n.directionalShadow[f]=k,n.directionalShadowMap[f]=K,n.directionalShadowMatrix[f]=w.shadow.matrix,M++}n.directional[f]=V,f++}else if(w.isSpotLight){let V=t.get(w);V.position.setFromMatrixPosition(w.matrixWorld),V.color.copy(F).multiplyScalar(X),V.distance=Y,V.coneCos=Math.cos(w.angle),V.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),V.decay=w.decay,n.spot[_]=V;let W=w.shadow;if(w.map&&(n.spotLightMap[C]=w.map,C++,W.updateMatrices(w),w.castShadow&&T++),n.spotLightMatrix[_]=W.matrix,w.castShadow){let k=e.get(w);k.shadowIntensity=W.intensity,k.shadowBias=W.bias,k.shadowNormalBias=W.normalBias,k.shadowRadius=W.radius,k.shadowMapSize=W.mapSize,n.spotShadow[_]=k,n.spotShadowMap[_]=K,y++}_++}else if(w.isRectAreaLight){let V=t.get(w);V.color.copy(F).multiplyScalar(X),V.halfWidth.set(w.width*.5,0,0),V.halfHeight.set(0,w.height*.5,0),n.rectArea[p]=V,p++}else if(w.isPointLight){let V=t.get(w);if(V.color.copy(w.color).multiplyScalar(w.intensity),V.distance=w.distance,V.decay=w.decay,w.castShadow){let W=w.shadow,k=e.get(w);k.shadowIntensity=W.intensity,k.shadowBias=W.bias,k.shadowNormalBias=W.normalBias,k.shadowRadius=W.radius,k.shadowMapSize=W.mapSize,k.shadowCameraNear=W.camera.near,k.shadowCameraFar=W.camera.far,n.pointShadow[g]=k,n.pointShadowMap[g]=K,n.pointShadowMatrix[g]=w.shadow.matrix,x++}n.point[g]=V,g++}else if(w.isHemisphereLight){let V=t.get(w);V.skyColor.copy(w.color).multiplyScalar(X),V.groundColor.copy(w.groundColor).multiplyScalar(X),n.hemi[m]=V,m++}}p>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=At.LTC_FLOAT_1,n.rectAreaLTC2=At.LTC_FLOAT_2):(n.rectAreaLTC1=At.LTC_HALF_1,n.rectAreaLTC2=At.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let P=n.hash;(P.directionalLength!==f||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==p||P.hemiLength!==m||P.numDirectionalShadows!==M||P.numPointShadows!==x||P.numSpotShadows!==y||P.numSpotMaps!==C||P.numLightProbes!==S)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=y+C-T,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=S,P.directionalLength=f,P.pointLength=g,P.spotLength=_,P.rectAreaLength=p,P.hemiLength=m,P.numDirectionalShadows=M,P.numPointShadows=x,P.numSpotShadows=y,P.numSpotMaps=C,P.numLightProbes=S,n.version=IM++)}function l(c,h){let u=0,d=0,f=0,g=0,_=0,p=h.matrixWorldInverse;for(let m=0,M=c.length;m<M;m++){let x=c[m];if(x.isDirectionalLight){let y=n.directional[u];y.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(p),u++}else if(x.isSpotLight){let y=n.spot[f];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(p),f++}else if(x.isRectAreaLight){let y=n.rectArea[g];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(p),o.identity(),s.copy(x.matrixWorld),s.premultiply(p),o.extractRotation(s),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){let y=n.point[d];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(p),d++}else if(x.isHemisphereLight){let y=n.hemi[_];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(p),_++}}}return{setup:a,setupView:l,state:n}}function Ap(r){let t=new DM(r),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function NM(r){let t=new WeakMap;function e(i,s=0){let o=t.get(i),a;return o===void 0?(a=new Ap(r),t.set(i,[a])):s>=o.length?(a=new Ap(r),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Eu=class extends Xi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=k0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Au=class extends Xi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},UM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,OM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function FM(r,t,e){let n=new No,i=new mt,s=new mt,o=new ge,a=new Eu({depthPacking:V0}),l=new Au,c={},h=e.maxTextureSize,u={[mr]:je,[je]:mr,[di]:di},d=new bi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new mt},radius:{value:4}},vertexShader:UM,fragmentShader:OM}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Ge;g.setAttribute("position",new Qn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new le(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vp;let m=this.type;this.render=function(T,S,P){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;let z=r.getRenderTarget(),v=r.getActiveCubeFace(),w=r.getActiveMipmapLevel(),F=r.state;F.setBlending(ur),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let X=m!==zi&&this.type===zi,Y=m===zi&&this.type!==zi;for(let K=0,V=T.length;K<V;K++){let W=T[K],k=W.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);let ht=k.getFrameExtents();if(i.multiply(ht),s.copy(k.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/ht.x),i.x=s.x*ht.x,k.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/ht.y),i.y=s.y*ht.y,k.mapSize.y=s.y)),k.map===null||X===!0||Y===!0){let dt=this.type!==zi?{minFilter:dn,magFilter:dn}:{};k.map!==null&&k.map.dispose(),k.map=new Wi(i.x,i.y,dt),k.map.texture.name=W.name+".shadowMap",k.camera.updateProjectionMatrix()}r.setRenderTarget(k.map),r.clear();let U=k.getViewportCount();for(let dt=0;dt<U;dt++){let Lt=k.getViewport(dt);o.set(s.x*Lt.x,s.y*Lt.y,s.x*Lt.z,s.y*Lt.w),F.viewport(o),k.updateMatrices(W,dt),n=k.getFrustum(),y(S,P,k.camera,W,this.type)}k.isPointLightShadow!==!0&&this.type===zi&&M(k,P),k.needsUpdate=!1}m=this.type,p.needsUpdate=!1,r.setRenderTarget(z,v,w)};function M(T,S){let P=t.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Wi(i.x,i.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,r.setRenderTarget(T.mapPass),r.clear(),r.renderBufferDirect(S,null,P,d,_,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,r.setRenderTarget(T.map),r.clear(),r.renderBufferDirect(S,null,P,f,_,null)}function x(T,S,P,z){let v=null,w=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(w!==void 0)v=w;else if(v=P.isPointLight===!0?l:a,r.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){let F=v.uuid,X=S.uuid,Y=c[F];Y===void 0&&(Y={},c[F]=Y);let K=Y[X];K===void 0&&(K=v.clone(),Y[X]=K,S.addEventListener("dispose",C)),v=K}if(v.visible=S.visible,v.wireframe=S.wireframe,z===zi?v.side=S.shadowSide!==null?S.shadowSide:S.side:v.side=S.shadowSide!==null?S.shadowSide:u[S.side],v.alphaMap=S.alphaMap,v.alphaTest=S.alphaTest,v.map=S.map,v.clipShadows=S.clipShadows,v.clippingPlanes=S.clippingPlanes,v.clipIntersection=S.clipIntersection,v.displacementMap=S.displacementMap,v.displacementScale=S.displacementScale,v.displacementBias=S.displacementBias,v.wireframeLinewidth=S.wireframeLinewidth,v.linewidth=S.linewidth,P.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let F=r.properties.get(v);F.light=P}return v}function y(T,S,P,z,v){if(T.visible===!1)return;if(T.layers.test(S.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&v===zi)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);let X=t.update(T),Y=T.material;if(Array.isArray(Y)){let K=X.groups;for(let V=0,W=K.length;V<W;V++){let k=K[V],ht=Y[k.materialIndex];if(ht&&ht.visible){let U=x(T,ht,z,v);T.onBeforeShadow(r,T,S,P,X,U,k),r.renderBufferDirect(P,null,X,U,T,k),T.onAfterShadow(r,T,S,P,X,U,k)}}}else if(Y.visible){let K=x(T,Y,z,v);T.onBeforeShadow(r,T,S,P,X,K,null),r.renderBufferDirect(P,null,X,K,T,null),T.onAfterShadow(r,T,S,P,X,K,null)}}let F=T.children;for(let X=0,Y=F.length;X<Y;X++)y(F[X],S,P,z,v)}function C(T){T.target.removeEventListener("dispose",C);for(let P in c){let z=c[P],v=T.target.uuid;v in z&&(z[v].dispose(),delete z[v])}}}var BM={[Ih]:Lh,[Dh]:Oh,[Nh]:Fh,[ks]:Uh,[Lh]:Ih,[Oh]:Dh,[Fh]:Nh,[Uh]:ks};function zM(r){function t(){let Z=!1,gt=new ge,lt=null,pt=new ge(0,0,0,0);return{setMask:function(Mt){lt!==Mt&&!Z&&(r.colorMask(Mt,Mt,Mt,Mt),lt=Mt)},setLocked:function(Mt){Z=Mt},setClear:function(Mt,St,Jt,_e,Te){Te===!0&&(Mt*=_e,St*=_e,Jt*=_e),gt.set(Mt,St,Jt,_e),pt.equals(gt)===!1&&(r.clearColor(Mt,St,Jt,_e),pt.copy(gt))},reset:function(){Z=!1,lt=null,pt.set(-1,0,0,0)}}}function e(){let Z=!1,gt=!1,lt=null,pt=null,Mt=null;return{setReversed:function(St){gt=St},setTest:function(St){St?L(r.DEPTH_TEST):E(r.DEPTH_TEST)},setMask:function(St){lt!==St&&!Z&&(r.depthMask(St),lt=St)},setFunc:function(St){if(gt&&(St=BM[St]),pt!==St){switch(St){case Ih:r.depthFunc(r.NEVER);break;case Lh:r.depthFunc(r.ALWAYS);break;case Dh:r.depthFunc(r.LESS);break;case ks:r.depthFunc(r.LEQUAL);break;case Nh:r.depthFunc(r.EQUAL);break;case Uh:r.depthFunc(r.GEQUAL);break;case Oh:r.depthFunc(r.GREATER);break;case Fh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}pt=St}},setLocked:function(St){Z=St},setClear:function(St){Mt!==St&&(r.clearDepth(St),Mt=St)},reset:function(){Z=!1,lt=null,pt=null,Mt=null}}}function n(){let Z=!1,gt=null,lt=null,pt=null,Mt=null,St=null,Jt=null,_e=null,Te=null;return{setTest:function(ne){Z||(ne?L(r.STENCIL_TEST):E(r.STENCIL_TEST))},setMask:function(ne){gt!==ne&&!Z&&(r.stencilMask(ne),gt=ne)},setFunc:function(ne,Ft,Nt){(lt!==ne||pt!==Ft||Mt!==Nt)&&(r.stencilFunc(ne,Ft,Nt),lt=ne,pt=Ft,Mt=Nt)},setOp:function(ne,Ft,Nt){(St!==ne||Jt!==Ft||_e!==Nt)&&(r.stencilOp(ne,Ft,Nt),St=ne,Jt=Ft,_e=Nt)},setLocked:function(ne){Z=ne},setClear:function(ne){Te!==ne&&(r.clearStencil(ne),Te=ne)},reset:function(){Z=!1,gt=null,lt=null,pt=null,Mt=null,St=null,Jt=null,_e=null,Te=null}}}let i=new t,s=new e,o=new n,a=new WeakMap,l=new WeakMap,c={},h={},u=new WeakMap,d=[],f=null,g=!1,_=null,p=null,m=null,M=null,x=null,y=null,C=null,T=new Qt(0,0,0),S=0,P=!1,z=null,v=null,w=null,F=null,X=null,Y=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),K=!1,V=0,W=r.getParameter(r.VERSION);W.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(W)[1]),K=V>=1):W.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),K=V>=2);let k=null,ht={},U=r.getParameter(r.SCISSOR_BOX),dt=r.getParameter(r.VIEWPORT),Lt=new ge().fromArray(U),Ht=new ge().fromArray(dt);function O(Z,gt,lt,pt){let Mt=new Uint8Array(4),St=r.createTexture();r.bindTexture(Z,St),r.texParameteri(Z,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(Z,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Jt=0;Jt<lt;Jt++)Z===r.TEXTURE_3D||Z===r.TEXTURE_2D_ARRAY?r.texImage3D(gt,0,r.RGBA,1,1,pt,0,r.RGBA,r.UNSIGNED_BYTE,Mt):r.texImage2D(gt+Jt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Mt);return St}let N={};N[r.TEXTURE_2D]=O(r.TEXTURE_2D,r.TEXTURE_2D,1),N[r.TEXTURE_CUBE_MAP]=O(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),N[r.TEXTURE_2D_ARRAY]=O(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),N[r.TEXTURE_3D]=O(r.TEXTURE_3D,r.TEXTURE_3D,1,1),i.setClear(0,0,0,1),s.setClear(1),o.setClear(0),L(r.DEPTH_TEST),s.setFunc(ks),tt(!1),rt(Dd),L(r.CULL_FACE),A(ur);function L(Z){c[Z]!==!0&&(r.enable(Z),c[Z]=!0)}function E(Z){c[Z]!==!1&&(r.disable(Z),c[Z]=!1)}function nt(Z,gt){return h[Z]!==gt?(r.bindFramebuffer(Z,gt),h[Z]=gt,Z===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=gt),Z===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=gt),!0):!1}function at(Z,gt){let lt=d,pt=!1;if(Z){lt=u.get(gt),lt===void 0&&(lt=[],u.set(gt,lt));let Mt=Z.textures;if(lt.length!==Mt.length||lt[0]!==r.COLOR_ATTACHMENT0){for(let St=0,Jt=Mt.length;St<Jt;St++)lt[St]=r.COLOR_ATTACHMENT0+St;lt.length=Mt.length,pt=!0}}else lt[0]!==r.BACK&&(lt[0]=r.BACK,pt=!0);pt&&r.drawBuffers(lt)}function et(Z){return f!==Z?(r.useProgram(Z),f=Z,!0):!1}let ft={[zr]:r.FUNC_ADD,[p0]:r.FUNC_SUBTRACT,[m0]:r.FUNC_REVERSE_SUBTRACT};ft[g0]=r.MIN,ft[_0]=r.MAX;let Q={[x0]:r.ZERO,[y0]:r.ONE,[v0]:r.SRC_COLOR,[Rh]:r.SRC_ALPHA,[E0]:r.SRC_ALPHA_SATURATE,[w0]:r.DST_COLOR,[S0]:r.DST_ALPHA,[M0]:r.ONE_MINUS_SRC_COLOR,[Ph]:r.ONE_MINUS_SRC_ALPHA,[T0]:r.ONE_MINUS_DST_COLOR,[b0]:r.ONE_MINUS_DST_ALPHA,[A0]:r.CONSTANT_COLOR,[C0]:r.ONE_MINUS_CONSTANT_COLOR,[R0]:r.CONSTANT_ALPHA,[P0]:r.ONE_MINUS_CONSTANT_ALPHA};function A(Z,gt,lt,pt,Mt,St,Jt,_e,Te,ne){if(Z===ur){g===!0&&(E(r.BLEND),g=!1);return}if(g===!1&&(L(r.BLEND),g=!0),Z!==d0){if(Z!==_||ne!==P){if((p!==zr||x!==zr)&&(r.blendEquation(r.FUNC_ADD),p=zr,x=zr),ne)switch(Z){case Os:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Nd:r.blendFunc(r.ONE,r.ONE);break;case Ud:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Od:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",Z);break}else switch(Z){case Os:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Nd:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Ud:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Od:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",Z);break}m=null,M=null,y=null,C=null,T.set(0,0,0),S=0,_=Z,P=ne}return}Mt=Mt||gt,St=St||lt,Jt=Jt||pt,(gt!==p||Mt!==x)&&(r.blendEquationSeparate(ft[gt],ft[Mt]),p=gt,x=Mt),(lt!==m||pt!==M||St!==y||Jt!==C)&&(r.blendFuncSeparate(Q[lt],Q[pt],Q[St],Q[Jt]),m=lt,M=pt,y=St,C=Jt),(_e.equals(T)===!1||Te!==S)&&(r.blendColor(_e.r,_e.g,_e.b,Te),T.copy(_e),S=Te),_=Z,P=!1}function q(Z,gt){Z.side===di?E(r.CULL_FACE):L(r.CULL_FACE);let lt=Z.side===je;gt&&(lt=!lt),tt(lt),Z.blending===Os&&Z.transparent===!1?A(ur):A(Z.blending,Z.blendEquation,Z.blendSrc,Z.blendDst,Z.blendEquationAlpha,Z.blendSrcAlpha,Z.blendDstAlpha,Z.blendColor,Z.blendAlpha,Z.premultipliedAlpha),s.setFunc(Z.depthFunc),s.setTest(Z.depthTest),s.setMask(Z.depthWrite),i.setMask(Z.colorWrite);let pt=Z.stencilWrite;o.setTest(pt),pt&&(o.setMask(Z.stencilWriteMask),o.setFunc(Z.stencilFunc,Z.stencilRef,Z.stencilFuncMask),o.setOp(Z.stencilFail,Z.stencilZFail,Z.stencilZPass)),H(Z.polygonOffset,Z.polygonOffsetFactor,Z.polygonOffsetUnits),Z.alphaToCoverage===!0?L(r.SAMPLE_ALPHA_TO_COVERAGE):E(r.SAMPLE_ALPHA_TO_COVERAGE)}function tt(Z){z!==Z&&(Z?r.frontFace(r.CW):r.frontFace(r.CCW),z=Z)}function rt(Z){Z!==u0?(L(r.CULL_FACE),Z!==v&&(Z===Dd?r.cullFace(r.BACK):Z===f0?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):E(r.CULL_FACE),v=Z}function B(Z){Z!==w&&(K&&r.lineWidth(Z),w=Z)}function H(Z,gt,lt){Z?(L(r.POLYGON_OFFSET_FILL),(F!==gt||X!==lt)&&(r.polygonOffset(gt,lt),F=gt,X=lt)):E(r.POLYGON_OFFSET_FILL)}function D(Z){Z?L(r.SCISSOR_TEST):E(r.SCISSOR_TEST)}function R(Z){Z===void 0&&(Z=r.TEXTURE0+Y-1),k!==Z&&(r.activeTexture(Z),k=Z)}function b(Z,gt,lt){lt===void 0&&(k===null?lt=r.TEXTURE0+Y-1:lt=k);let pt=ht[lt];pt===void 0&&(pt={type:void 0,texture:void 0},ht[lt]=pt),(pt.type!==Z||pt.texture!==gt)&&(k!==lt&&(r.activeTexture(lt),k=lt),r.bindTexture(Z,gt||N[Z]),pt.type=Z,pt.texture=gt)}function j(){let Z=ht[k];Z!==void 0&&Z.type!==void 0&&(r.bindTexture(Z.type,null),Z.type=void 0,Z.texture=void 0)}function ct(){try{r.compressedTexImage2D.apply(r,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function ut(){try{r.compressedTexImage3D.apply(r,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function ot(){try{r.texSubImage2D.apply(r,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Pt(){try{r.texSubImage3D.apply(r,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function xt(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function vt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Vt(){try{r.texStorage2D.apply(r,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function _t(){try{r.texStorage3D.apply(r,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Et(){try{r.texImage2D.apply(r,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function It(){try{r.texImage3D.apply(r,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function kt(Z){Lt.equals(Z)===!1&&(r.scissor(Z.x,Z.y,Z.z,Z.w),Lt.copy(Z))}function Ct(Z){Ht.equals(Z)===!1&&(r.viewport(Z.x,Z.y,Z.z,Z.w),Ht.copy(Z))}function Zt(Z,gt){let lt=l.get(gt);lt===void 0&&(lt=new WeakMap,l.set(gt,lt));let pt=lt.get(Z);pt===void 0&&(pt=r.getUniformBlockIndex(gt,Z.name),lt.set(Z,pt))}function Xt(Z,gt){let pt=l.get(gt).get(Z);a.get(gt)!==pt&&(r.uniformBlockBinding(gt,pt,Z.__bindingPointIndex),a.set(gt,pt))}function oe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),c={},k=null,ht={},h={},u=new WeakMap,d=[],f=null,g=!1,_=null,p=null,m=null,M=null,x=null,y=null,C=null,T=new Qt(0,0,0),S=0,P=!1,z=null,v=null,w=null,F=null,X=null,Lt.set(0,0,r.canvas.width,r.canvas.height),Ht.set(0,0,r.canvas.width,r.canvas.height),i.reset(),s.reset(),o.reset()}return{buffers:{color:i,depth:s,stencil:o},enable:L,disable:E,bindFramebuffer:nt,drawBuffers:at,useProgram:et,setBlending:A,setMaterial:q,setFlipSided:tt,setCullFace:rt,setLineWidth:B,setPolygonOffset:H,setScissorTest:D,activeTexture:R,bindTexture:b,unbindTexture:j,compressedTexImage2D:ct,compressedTexImage3D:ut,texImage2D:Et,texImage3D:It,updateUBOMapping:Zt,uniformBlockBinding:Xt,texStorage2D:Vt,texStorage3D:_t,texSubImage2D:ot,texSubImage3D:Pt,compressedTexSubImage2D:xt,compressedTexSubImage3D:vt,scissor:kt,viewport:Ct,reset:oe}}function Cp(r,t,e,n){let i=kM(n);switch(e){case qp:return r*t;case Jp:return r*t;case $p:return r*t*2;case Zl:return r*t/i.components*i.byteLength;case nf:return r*t/i.components*i.byteLength;case Kp:return r*t*2/i.components*i.byteLength;case rf:return r*t*2/i.components*i.byteLength;case Zp:return r*t*3/i.components*i.byteLength;case mi:return r*t*4/i.components*i.byteLength;case sf:return r*t*4/i.components*i.byteLength;case nl:case il:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case rl:case sl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Hh:case Wh:return Math.max(r,16)*Math.max(t,8)/4;case Vh:case Gh:return Math.max(r,8)*Math.max(t,8)/2;case Xh:case Yh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case qh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Zh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Jh:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case $h:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Kh:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Qh:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case jh:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case tu:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case eu:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case nu:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case iu:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case ru:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case su:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case ou:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case au:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case ol:case lu:case cu:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Qp:case hu:return Math.ceil(r/4)*Math.ceil(t/4)*8;case uu:case fu:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function kM(r){switch(r){case Gi:case Wp:return{byteLength:1,components:1};case Do:case Xp:case qo:return{byteLength:2,components:1};case tf:case ef:return{byteLength:2,components:4};case Wr:case ju:case Vi:return{byteLength:4,components:1};case Yp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function VM(r,t,e,n,i,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new mt,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,b){return f?new OffscreenCanvas(R,b):dl("canvas")}function _(R,b,j){let ct=1,ut=D(R);if((ut.width>j||ut.height>j)&&(ct=j/Math.max(ut.width,ut.height)),ct<1)if(typeof HTMLImageElement!="undefined"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&R instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&R instanceof ImageBitmap||typeof VideoFrame!="undefined"&&R instanceof VideoFrame){let ot=Math.floor(ct*ut.width),Pt=Math.floor(ct*ut.height);u===void 0&&(u=g(ot,Pt));let xt=b?g(ot,Pt):u;return xt.width=ot,xt.height=Pt,xt.getContext("2d").drawImage(R,0,0,ot,Pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ut.width+"x"+ut.height+") to ("+ot+"x"+Pt+")."),xt}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ut.width+"x"+ut.height+")."),R;return R}function p(R){return R.generateMipmaps&&R.minFilter!==dn&&R.minFilter!==pi}function m(R){r.generateMipmap(R)}function M(R,b,j,ct,ut=!1){if(R!==null){if(r[R]!==void 0)return r[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ot=b;if(b===r.RED&&(j===r.FLOAT&&(ot=r.R32F),j===r.HALF_FLOAT&&(ot=r.R16F),j===r.UNSIGNED_BYTE&&(ot=r.R8)),b===r.RED_INTEGER&&(j===r.UNSIGNED_BYTE&&(ot=r.R8UI),j===r.UNSIGNED_SHORT&&(ot=r.R16UI),j===r.UNSIGNED_INT&&(ot=r.R32UI),j===r.BYTE&&(ot=r.R8I),j===r.SHORT&&(ot=r.R16I),j===r.INT&&(ot=r.R32I)),b===r.RG&&(j===r.FLOAT&&(ot=r.RG32F),j===r.HALF_FLOAT&&(ot=r.RG16F),j===r.UNSIGNED_BYTE&&(ot=r.RG8)),b===r.RG_INTEGER&&(j===r.UNSIGNED_BYTE&&(ot=r.RG8UI),j===r.UNSIGNED_SHORT&&(ot=r.RG16UI),j===r.UNSIGNED_INT&&(ot=r.RG32UI),j===r.BYTE&&(ot=r.RG8I),j===r.SHORT&&(ot=r.RG16I),j===r.INT&&(ot=r.RG32I)),b===r.RGB_INTEGER&&(j===r.UNSIGNED_BYTE&&(ot=r.RGB8UI),j===r.UNSIGNED_SHORT&&(ot=r.RGB16UI),j===r.UNSIGNED_INT&&(ot=r.RGB32UI),j===r.BYTE&&(ot=r.RGB8I),j===r.SHORT&&(ot=r.RGB16I),j===r.INT&&(ot=r.RGB32I)),b===r.RGBA_INTEGER&&(j===r.UNSIGNED_BYTE&&(ot=r.RGBA8UI),j===r.UNSIGNED_SHORT&&(ot=r.RGBA16UI),j===r.UNSIGNED_INT&&(ot=r.RGBA32UI),j===r.BYTE&&(ot=r.RGBA8I),j===r.SHORT&&(ot=r.RGBA16I),j===r.INT&&(ot=r.RGBA32I)),b===r.RGB&&j===r.UNSIGNED_INT_5_9_9_9_REV&&(ot=r.RGB9_E5),b===r.RGBA){let Pt=ut?cl:de.getTransfer(ct);j===r.FLOAT&&(ot=r.RGBA32F),j===r.HALF_FLOAT&&(ot=r.RGBA16F),j===r.UNSIGNED_BYTE&&(ot=Pt===be?r.SRGB8_ALPHA8:r.RGBA8),j===r.UNSIGNED_SHORT_4_4_4_4&&(ot=r.RGBA4),j===r.UNSIGNED_SHORT_5_5_5_1&&(ot=r.RGB5_A1)}return(ot===r.R16F||ot===r.R32F||ot===r.RG16F||ot===r.RG32F||ot===r.RGBA16F||ot===r.RGBA32F)&&t.get("EXT_color_buffer_float"),ot}function x(R,b){let j;return R?b===null||b===Wr||b===Gs?j=r.DEPTH24_STENCIL8:b===Vi?j=r.DEPTH32F_STENCIL8:b===Do&&(j=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Wr||b===Gs?j=r.DEPTH_COMPONENT24:b===Vi?j=r.DEPTH_COMPONENT32F:b===Do&&(j=r.DEPTH_COMPONENT16),j}function y(R,b){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==dn&&R.minFilter!==pi?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function C(R){let b=R.target;b.removeEventListener("dispose",C),S(b),b.isVideoTexture&&h.delete(b)}function T(R){let b=R.target;b.removeEventListener("dispose",T),z(b)}function S(R){let b=n.get(R);if(b.__webglInit===void 0)return;let j=R.source,ct=d.get(j);if(ct){let ut=ct[b.__cacheKey];ut.usedTimes--,ut.usedTimes===0&&P(R),Object.keys(ct).length===0&&d.delete(j)}n.remove(R)}function P(R){let b=n.get(R);r.deleteTexture(b.__webglTexture);let j=R.source,ct=d.get(j);delete ct[b.__cacheKey],o.memory.textures--}function z(R){let b=n.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let ct=0;ct<6;ct++){if(Array.isArray(b.__webglFramebuffer[ct]))for(let ut=0;ut<b.__webglFramebuffer[ct].length;ut++)r.deleteFramebuffer(b.__webglFramebuffer[ct][ut]);else r.deleteFramebuffer(b.__webglFramebuffer[ct]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[ct])}else{if(Array.isArray(b.__webglFramebuffer))for(let ct=0;ct<b.__webglFramebuffer.length;ct++)r.deleteFramebuffer(b.__webglFramebuffer[ct]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ct=0;ct<b.__webglColorRenderbuffer.length;ct++)b.__webglColorRenderbuffer[ct]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[ct]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let j=R.textures;for(let ct=0,ut=j.length;ct<ut;ct++){let ot=n.get(j[ct]);ot.__webglTexture&&(r.deleteTexture(ot.__webglTexture),o.memory.textures--),n.remove(j[ct])}n.remove(R)}let v=0;function w(){v=0}function F(){let R=v;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),v+=1,R}function X(R){let b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function Y(R,b){let j=n.get(R);if(R.isVideoTexture&&B(R),R.isRenderTargetTexture===!1&&R.version>0&&j.__version!==R.version){let ct=R.image;if(ct===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ct.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ht(j,R,b);return}}e.bindTexture(r.TEXTURE_2D,j.__webglTexture,r.TEXTURE0+b)}function K(R,b){let j=n.get(R);if(R.version>0&&j.__version!==R.version){Ht(j,R,b);return}e.bindTexture(r.TEXTURE_2D_ARRAY,j.__webglTexture,r.TEXTURE0+b)}function V(R,b){let j=n.get(R);if(R.version>0&&j.__version!==R.version){Ht(j,R,b);return}e.bindTexture(r.TEXTURE_3D,j.__webglTexture,r.TEXTURE0+b)}function W(R,b){let j=n.get(R);if(R.version>0&&j.__version!==R.version){O(j,R,b);return}e.bindTexture(r.TEXTURE_CUBE_MAP,j.__webglTexture,r.TEXTURE0+b)}let k={[Lo]:r.REPEAT,[Hr]:r.CLAMP_TO_EDGE,[kh]:r.MIRRORED_REPEAT},ht={[dn]:r.NEAREST,[z0]:r.NEAREST_MIPMAP_NEAREST,[Ra]:r.NEAREST_MIPMAP_LINEAR,[pi]:r.LINEAR,[Yc]:r.LINEAR_MIPMAP_NEAREST,[Gr]:r.LINEAR_MIPMAP_LINEAR},U={[G0]:r.NEVER,[J0]:r.ALWAYS,[W0]:r.LESS,[tm]:r.LEQUAL,[X0]:r.EQUAL,[Z0]:r.GEQUAL,[Y0]:r.GREATER,[q0]:r.NOTEQUAL};function dt(R,b){if(b.type===Vi&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===pi||b.magFilter===Yc||b.magFilter===Ra||b.magFilter===Gr||b.minFilter===pi||b.minFilter===Yc||b.minFilter===Ra||b.minFilter===Gr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,k[b.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,k[b.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,k[b.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,ht[b.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,ht[b.minFilter]),b.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,U[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===dn||b.minFilter!==Ra&&b.minFilter!==Gr||b.type===Vi&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let j=t.get("EXT_texture_filter_anisotropic");r.texParameterf(R,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Lt(R,b){let j=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",C));let ct=b.source,ut=d.get(ct);ut===void 0&&(ut={},d.set(ct,ut));let ot=X(b);if(ot!==R.__cacheKey){ut[ot]===void 0&&(ut[ot]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,j=!0),ut[ot].usedTimes++;let Pt=ut[R.__cacheKey];Pt!==void 0&&(ut[R.__cacheKey].usedTimes--,Pt.usedTimes===0&&P(b)),R.__cacheKey=ot,R.__webglTexture=ut[ot].texture}return j}function Ht(R,b,j){let ct=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ct=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ct=r.TEXTURE_3D);let ut=Lt(R,b),ot=b.source;e.bindTexture(ct,R.__webglTexture,r.TEXTURE0+j);let Pt=n.get(ot);if(ot.version!==Pt.__version||ut===!0){e.activeTexture(r.TEXTURE0+j);let xt=de.getPrimaries(de.workingColorSpace),vt=b.colorSpace===hr?null:de.getPrimaries(b.colorSpace),Vt=b.colorSpace===hr||xt===vt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Vt);let _t=_(b.image,!1,i.maxTextureSize);_t=H(b,_t);let Et=s.convert(b.format,b.colorSpace),It=s.convert(b.type),kt=M(b.internalFormat,Et,It,b.colorSpace,b.isVideoTexture);dt(ct,b);let Ct,Zt=b.mipmaps,Xt=b.isVideoTexture!==!0,oe=Pt.__version===void 0||ut===!0,Z=ot.dataReady,gt=y(b,_t);if(b.isDepthTexture)kt=x(b.format===Ws,b.type),oe&&(Xt?e.texStorage2D(r.TEXTURE_2D,1,kt,_t.width,_t.height):e.texImage2D(r.TEXTURE_2D,0,kt,_t.width,_t.height,0,Et,It,null));else if(b.isDataTexture)if(Zt.length>0){Xt&&oe&&e.texStorage2D(r.TEXTURE_2D,gt,kt,Zt[0].width,Zt[0].height);for(let lt=0,pt=Zt.length;lt<pt;lt++)Ct=Zt[lt],Xt?Z&&e.texSubImage2D(r.TEXTURE_2D,lt,0,0,Ct.width,Ct.height,Et,It,Ct.data):e.texImage2D(r.TEXTURE_2D,lt,kt,Ct.width,Ct.height,0,Et,It,Ct.data);b.generateMipmaps=!1}else Xt?(oe&&e.texStorage2D(r.TEXTURE_2D,gt,kt,_t.width,_t.height),Z&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,_t.width,_t.height,Et,It,_t.data)):e.texImage2D(r.TEXTURE_2D,0,kt,_t.width,_t.height,0,Et,It,_t.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Xt&&oe&&e.texStorage3D(r.TEXTURE_2D_ARRAY,gt,kt,Zt[0].width,Zt[0].height,_t.depth);for(let lt=0,pt=Zt.length;lt<pt;lt++)if(Ct=Zt[lt],b.format!==mi)if(Et!==null)if(Xt){if(Z)if(b.layerUpdates.size>0){let Mt=Cp(Ct.width,Ct.height,b.format,b.type);for(let St of b.layerUpdates){let Jt=Ct.data.subarray(St*Mt/Ct.data.BYTES_PER_ELEMENT,(St+1)*Mt/Ct.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,lt,0,0,St,Ct.width,Ct.height,1,Et,Jt,0,0)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,lt,0,0,0,Ct.width,Ct.height,_t.depth,Et,Ct.data,0,0)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,lt,kt,Ct.width,Ct.height,_t.depth,0,Ct.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xt?Z&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,lt,0,0,0,Ct.width,Ct.height,_t.depth,Et,It,Ct.data):e.texImage3D(r.TEXTURE_2D_ARRAY,lt,kt,Ct.width,Ct.height,_t.depth,0,Et,It,Ct.data)}else{Xt&&oe&&e.texStorage2D(r.TEXTURE_2D,gt,kt,Zt[0].width,Zt[0].height);for(let lt=0,pt=Zt.length;lt<pt;lt++)Ct=Zt[lt],b.format!==mi?Et!==null?Xt?Z&&e.compressedTexSubImage2D(r.TEXTURE_2D,lt,0,0,Ct.width,Ct.height,Et,Ct.data):e.compressedTexImage2D(r.TEXTURE_2D,lt,kt,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xt?Z&&e.texSubImage2D(r.TEXTURE_2D,lt,0,0,Ct.width,Ct.height,Et,It,Ct.data):e.texImage2D(r.TEXTURE_2D,lt,kt,Ct.width,Ct.height,0,Et,It,Ct.data)}else if(b.isDataArrayTexture)if(Xt){if(oe&&e.texStorage3D(r.TEXTURE_2D_ARRAY,gt,kt,_t.width,_t.height,_t.depth),Z)if(b.layerUpdates.size>0){let lt=Cp(_t.width,_t.height,b.format,b.type);for(let pt of b.layerUpdates){let Mt=_t.data.subarray(pt*lt/_t.data.BYTES_PER_ELEMENT,(pt+1)*lt/_t.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,pt,_t.width,_t.height,1,Et,It,Mt)}b.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,_t.width,_t.height,_t.depth,Et,It,_t.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,kt,_t.width,_t.height,_t.depth,0,Et,It,_t.data);else if(b.isData3DTexture)Xt?(oe&&e.texStorage3D(r.TEXTURE_3D,gt,kt,_t.width,_t.height,_t.depth),Z&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,_t.width,_t.height,_t.depth,Et,It,_t.data)):e.texImage3D(r.TEXTURE_3D,0,kt,_t.width,_t.height,_t.depth,0,Et,It,_t.data);else if(b.isFramebufferTexture){if(oe)if(Xt)e.texStorage2D(r.TEXTURE_2D,gt,kt,_t.width,_t.height);else{let lt=_t.width,pt=_t.height;for(let Mt=0;Mt<gt;Mt++)e.texImage2D(r.TEXTURE_2D,Mt,kt,lt,pt,0,Et,It,null),lt>>=1,pt>>=1}}else if(Zt.length>0){if(Xt&&oe){let lt=D(Zt[0]);e.texStorage2D(r.TEXTURE_2D,gt,kt,lt.width,lt.height)}for(let lt=0,pt=Zt.length;lt<pt;lt++)Ct=Zt[lt],Xt?Z&&e.texSubImage2D(r.TEXTURE_2D,lt,0,0,Et,It,Ct):e.texImage2D(r.TEXTURE_2D,lt,kt,Et,It,Ct);b.generateMipmaps=!1}else if(Xt){if(oe){let lt=D(_t);e.texStorage2D(r.TEXTURE_2D,gt,kt,lt.width,lt.height)}Z&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,Et,It,_t)}else e.texImage2D(r.TEXTURE_2D,0,kt,Et,It,_t);p(b)&&m(ct),Pt.__version=ot.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function O(R,b,j){if(b.image.length!==6)return;let ct=Lt(R,b),ut=b.source;e.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+j);let ot=n.get(ut);if(ut.version!==ot.__version||ct===!0){e.activeTexture(r.TEXTURE0+j);let Pt=de.getPrimaries(de.workingColorSpace),xt=b.colorSpace===hr?null:de.getPrimaries(b.colorSpace),vt=b.colorSpace===hr||Pt===xt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);let Vt=b.isCompressedTexture||b.image[0].isCompressedTexture,_t=b.image[0]&&b.image[0].isDataTexture,Et=[];for(let pt=0;pt<6;pt++)!Vt&&!_t?Et[pt]=_(b.image[pt],!0,i.maxCubemapSize):Et[pt]=_t?b.image[pt].image:b.image[pt],Et[pt]=H(b,Et[pt]);let It=Et[0],kt=s.convert(b.format,b.colorSpace),Ct=s.convert(b.type),Zt=M(b.internalFormat,kt,Ct,b.colorSpace),Xt=b.isVideoTexture!==!0,oe=ot.__version===void 0||ct===!0,Z=ut.dataReady,gt=y(b,It);dt(r.TEXTURE_CUBE_MAP,b);let lt;if(Vt){Xt&&oe&&e.texStorage2D(r.TEXTURE_CUBE_MAP,gt,Zt,It.width,It.height);for(let pt=0;pt<6;pt++){lt=Et[pt].mipmaps;for(let Mt=0;Mt<lt.length;Mt++){let St=lt[Mt];b.format!==mi?kt!==null?Xt?Z&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Mt,0,0,St.width,St.height,kt,St.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Mt,Zt,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xt?Z&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Mt,0,0,St.width,St.height,kt,Ct,St.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Mt,Zt,St.width,St.height,0,kt,Ct,St.data)}}}else{if(lt=b.mipmaps,Xt&&oe){lt.length>0&&gt++;let pt=D(Et[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,gt,Zt,pt.width,pt.height)}for(let pt=0;pt<6;pt++)if(_t){Xt?Z&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,Et[pt].width,Et[pt].height,kt,Ct,Et[pt].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,Zt,Et[pt].width,Et[pt].height,0,kt,Ct,Et[pt].data);for(let Mt=0;Mt<lt.length;Mt++){let Jt=lt[Mt].image[pt].image;Xt?Z&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Mt+1,0,0,Jt.width,Jt.height,kt,Ct,Jt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Mt+1,Zt,Jt.width,Jt.height,0,kt,Ct,Jt.data)}}else{Xt?Z&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,kt,Ct,Et[pt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,Zt,kt,Ct,Et[pt]);for(let Mt=0;Mt<lt.length;Mt++){let St=lt[Mt];Xt?Z&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Mt+1,0,0,kt,Ct,St.image[pt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Mt+1,Zt,kt,Ct,St.image[pt])}}}p(b)&&m(r.TEXTURE_CUBE_MAP),ot.__version=ut.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function N(R,b,j,ct,ut,ot){let Pt=s.convert(j.format,j.colorSpace),xt=s.convert(j.type),vt=M(j.internalFormat,Pt,xt,j.colorSpace);if(!n.get(b).__hasExternalTextures){let _t=Math.max(1,b.width>>ot),Et=Math.max(1,b.height>>ot);ut===r.TEXTURE_3D||ut===r.TEXTURE_2D_ARRAY?e.texImage3D(ut,ot,vt,_t,Et,b.depth,0,Pt,xt,null):e.texImage2D(ut,ot,vt,_t,Et,0,Pt,xt,null)}e.bindFramebuffer(r.FRAMEBUFFER,R),rt(b)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ct,ut,n.get(j).__webglTexture,0,tt(b)):(ut===r.TEXTURE_2D||ut>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ut<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ct,ut,n.get(j).__webglTexture,ot),e.bindFramebuffer(r.FRAMEBUFFER,null)}function L(R,b,j){if(r.bindRenderbuffer(r.RENDERBUFFER,R),b.depthBuffer){let ct=b.depthTexture,ut=ct&&ct.isDepthTexture?ct.type:null,ot=x(b.stencilBuffer,ut),Pt=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,xt=tt(b);rt(b)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,xt,ot,b.width,b.height):j?r.renderbufferStorageMultisample(r.RENDERBUFFER,xt,ot,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,ot,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Pt,r.RENDERBUFFER,R)}else{let ct=b.textures;for(let ut=0;ut<ct.length;ut++){let ot=ct[ut],Pt=s.convert(ot.format,ot.colorSpace),xt=s.convert(ot.type),vt=M(ot.internalFormat,Pt,xt,ot.colorSpace),Vt=tt(b);j&&rt(b)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Vt,vt,b.width,b.height):rt(b)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Vt,vt,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,vt,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function E(R,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),Y(b.depthTexture,0);let ct=n.get(b.depthTexture).__webglTexture,ut=tt(b);if(b.depthTexture.format===Fs)rt(b)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ct,0,ut):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ct,0);else if(b.depthTexture.format===Ws)rt(b)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ct,0,ut):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ct,0);else throw new Error("Unknown depthTexture format")}function nt(R){let b=n.get(R),j=R.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==R.depthTexture){let ct=R.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ct){let ut=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ct.removeEventListener("dispose",ut)};ct.addEventListener("dispose",ut),b.__depthDisposeCallback=ut}b.__boundDepthTexture=ct}if(R.depthTexture&&!b.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");E(b.__webglFramebuffer,R)}else if(j){b.__webglDepthbuffer=[];for(let ct=0;ct<6;ct++)if(e.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[ct]),b.__webglDepthbuffer[ct]===void 0)b.__webglDepthbuffer[ct]=r.createRenderbuffer(),L(b.__webglDepthbuffer[ct],R,!1);else{let ut=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ot=b.__webglDepthbuffer[ct];r.bindRenderbuffer(r.RENDERBUFFER,ot),r.framebufferRenderbuffer(r.FRAMEBUFFER,ut,r.RENDERBUFFER,ot)}}else if(e.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),L(b.__webglDepthbuffer,R,!1);else{let ct=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ut=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ut),r.framebufferRenderbuffer(r.FRAMEBUFFER,ct,r.RENDERBUFFER,ut)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function at(R,b,j){let ct=n.get(R);b!==void 0&&N(ct.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),j!==void 0&&nt(R)}function et(R){let b=R.texture,j=n.get(R),ct=n.get(b);R.addEventListener("dispose",T);let ut=R.textures,ot=R.isWebGLCubeRenderTarget===!0,Pt=ut.length>1;if(Pt||(ct.__webglTexture===void 0&&(ct.__webglTexture=r.createTexture()),ct.__version=b.version,o.memory.textures++),ot){j.__webglFramebuffer=[];for(let xt=0;xt<6;xt++)if(b.mipmaps&&b.mipmaps.length>0){j.__webglFramebuffer[xt]=[];for(let vt=0;vt<b.mipmaps.length;vt++)j.__webglFramebuffer[xt][vt]=r.createFramebuffer()}else j.__webglFramebuffer[xt]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){j.__webglFramebuffer=[];for(let xt=0;xt<b.mipmaps.length;xt++)j.__webglFramebuffer[xt]=r.createFramebuffer()}else j.__webglFramebuffer=r.createFramebuffer();if(Pt)for(let xt=0,vt=ut.length;xt<vt;xt++){let Vt=n.get(ut[xt]);Vt.__webglTexture===void 0&&(Vt.__webglTexture=r.createTexture(),o.memory.textures++)}if(R.samples>0&&rt(R)===!1){j.__webglMultisampledFramebuffer=r.createFramebuffer(),j.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let xt=0;xt<ut.length;xt++){let vt=ut[xt];j.__webglColorRenderbuffer[xt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,j.__webglColorRenderbuffer[xt]);let Vt=s.convert(vt.format,vt.colorSpace),_t=s.convert(vt.type),Et=M(vt.internalFormat,Vt,_t,vt.colorSpace,R.isXRRenderTarget===!0),It=tt(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,It,Et,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+xt,r.RENDERBUFFER,j.__webglColorRenderbuffer[xt])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(j.__webglDepthRenderbuffer=r.createRenderbuffer(),L(j.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ot){e.bindTexture(r.TEXTURE_CUBE_MAP,ct.__webglTexture),dt(r.TEXTURE_CUBE_MAP,b);for(let xt=0;xt<6;xt++)if(b.mipmaps&&b.mipmaps.length>0)for(let vt=0;vt<b.mipmaps.length;vt++)N(j.__webglFramebuffer[xt][vt],R,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,vt);else N(j.__webglFramebuffer[xt],R,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0);p(b)&&m(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Pt){for(let xt=0,vt=ut.length;xt<vt;xt++){let Vt=ut[xt],_t=n.get(Vt);e.bindTexture(r.TEXTURE_2D,_t.__webglTexture),dt(r.TEXTURE_2D,Vt),N(j.__webglFramebuffer,R,Vt,r.COLOR_ATTACHMENT0+xt,r.TEXTURE_2D,0),p(Vt)&&m(r.TEXTURE_2D)}e.unbindTexture()}else{let xt=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(xt=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(xt,ct.__webglTexture),dt(xt,b),b.mipmaps&&b.mipmaps.length>0)for(let vt=0;vt<b.mipmaps.length;vt++)N(j.__webglFramebuffer[vt],R,b,r.COLOR_ATTACHMENT0,xt,vt);else N(j.__webglFramebuffer,R,b,r.COLOR_ATTACHMENT0,xt,0);p(b)&&m(xt),e.unbindTexture()}R.depthBuffer&&nt(R)}function ft(R){let b=R.textures;for(let j=0,ct=b.length;j<ct;j++){let ut=b[j];if(p(ut)){let ot=R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,Pt=n.get(ut).__webglTexture;e.bindTexture(ot,Pt),m(ot),e.unbindTexture()}}}let Q=[],A=[];function q(R){if(R.samples>0){if(rt(R)===!1){let b=R.textures,j=R.width,ct=R.height,ut=r.COLOR_BUFFER_BIT,ot=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Pt=n.get(R),xt=b.length>1;if(xt)for(let vt=0;vt<b.length;vt++)e.bindFramebuffer(r.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+vt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,Pt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+vt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let vt=0;vt<b.length;vt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ut|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ut|=r.STENCIL_BUFFER_BIT)),xt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Pt.__webglColorRenderbuffer[vt]);let Vt=n.get(b[vt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Vt,0)}r.blitFramebuffer(0,0,j,ct,0,0,j,ct,ut,r.NEAREST),l===!0&&(Q.length=0,A.length=0,Q.push(r.COLOR_ATTACHMENT0+vt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Q.push(ot),A.push(ot),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,A)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Q))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),xt)for(let vt=0;vt<b.length;vt++){e.bindFramebuffer(r.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+vt,r.RENDERBUFFER,Pt.__webglColorRenderbuffer[vt]);let Vt=n.get(b[vt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,Pt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+vt,r.TEXTURE_2D,Vt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){let b=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function tt(R){return Math.min(i.maxSamples,R.samples)}function rt(R){let b=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function B(R){let b=o.render.frame;h.get(R)!==b&&(h.set(R,b),R.update())}function H(R,b){let j=R.colorSpace,ct=R.format,ut=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||j!==xr&&j!==hr&&(de.getTransfer(j)===be?(ct!==mi||ut!==Gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),b}function D(R){return typeof HTMLImageElement!="undefined"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame!="undefined"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=w,this.setTexture2D=Y,this.setTexture2DArray=K,this.setTexture3D=V,this.setTextureCube=W,this.rebindTextures=at,this.setupRenderTarget=et,this.updateRenderTargetMipmap=ft,this.updateMultisampleRenderTarget=q,this.setupDepthRenderbuffer=nt,this.setupFrameBufferTexture=N,this.useMultisampledRTT=rt}function HM(r,t){function e(n,i=hr){let s,o=de.getTransfer(i);if(n===Gi)return r.UNSIGNED_BYTE;if(n===tf)return r.UNSIGNED_SHORT_4_4_4_4;if(n===ef)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Yp)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Wp)return r.BYTE;if(n===Xp)return r.SHORT;if(n===Do)return r.UNSIGNED_SHORT;if(n===ju)return r.INT;if(n===Wr)return r.UNSIGNED_INT;if(n===Vi)return r.FLOAT;if(n===qo)return r.HALF_FLOAT;if(n===qp)return r.ALPHA;if(n===Zp)return r.RGB;if(n===mi)return r.RGBA;if(n===Jp)return r.LUMINANCE;if(n===$p)return r.LUMINANCE_ALPHA;if(n===Fs)return r.DEPTH_COMPONENT;if(n===Ws)return r.DEPTH_STENCIL;if(n===Zl)return r.RED;if(n===nf)return r.RED_INTEGER;if(n===Kp)return r.RG;if(n===rf)return r.RG_INTEGER;if(n===sf)return r.RGBA_INTEGER;if(n===nl||n===il||n===rl||n===sl)if(o===be)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===nl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===il)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===rl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===sl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===nl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===il)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===rl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===sl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Vh||n===Hh||n===Gh||n===Wh)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Vh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Hh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Gh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Wh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Xh||n===Yh||n===qh)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Xh||n===Yh)return o===be?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===qh)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Zh||n===Jh||n===$h||n===Kh||n===Qh||n===jh||n===tu||n===eu||n===nu||n===iu||n===ru||n===su||n===ou||n===au)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Zh)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Jh)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===$h)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Kh)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Qh)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===jh)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===tu)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===eu)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===nu)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===iu)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ru)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===su)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ou)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===au)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ol||n===lu||n===cu)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===ol)return o===be?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===lu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===cu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Qp||n===hu||n===uu||n===fu)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===ol)return s.COMPRESSED_RED_RGTC1_EXT;if(n===hu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===uu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===fu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Gs?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}var Cu=class extends fn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Sn=class extends pn{constructor(){super(),this.isGroup=!0,this.type="Group"}},GM={type:"move"},Ro=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Sn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Sn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Sn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let _ of t.hand.values()){let p=e.getJointPose(_,n),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(GM)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Sn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},WM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,XM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Ru=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let i=new Dn,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new bi({vertexShader:WM,fragmentShader:XM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new le(new Yr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Pu=class extends gr{constructor(t,e){super();let n=this,i=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,_=new Ru,p=e.getContextAttributes(),m=null,M=null,x=[],y=[],C=new mt,T=null,S=new fn;S.layers.enable(1),S.viewport=new ge;let P=new fn;P.layers.enable(2),P.viewport=new ge;let z=[S,P],v=new Cu;v.layers.enable(1),v.layers.enable(2);let w=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let N=x[O];return N===void 0&&(N=new Ro,x[O]=N),N.getTargetRaySpace()},this.getControllerGrip=function(O){let N=x[O];return N===void 0&&(N=new Ro,x[O]=N),N.getGripSpace()},this.getHand=function(O){let N=x[O];return N===void 0&&(N=new Ro,x[O]=N),N.getHandSpace()};function X(O){let N=y.indexOf(O.inputSource);if(N===-1)return;let L=x[N];L!==void 0&&(L.update(O.inputSource,O.frame,c||o),L.dispatchEvent({type:O.type,data:O.inputSource}))}function Y(){i.removeEventListener("select",X),i.removeEventListener("selectstart",X),i.removeEventListener("selectend",X),i.removeEventListener("squeeze",X),i.removeEventListener("squeezestart",X),i.removeEventListener("squeezeend",X),i.removeEventListener("end",Y),i.removeEventListener("inputsourceschange",K);for(let O=0;O<x.length;O++){let N=y[O];N!==null&&(y[O]=null,x[O].disconnect(N))}w=null,F=null,_.reset(),t.setRenderTarget(m),f=null,d=null,u=null,i=null,M=null,Ht.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){s=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){a=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(O){c=O},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(O){if(i=O,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",X),i.addEventListener("selectstart",X),i.addEventListener("selectend",X),i.addEventListener("squeeze",X),i.addEventListener("squeezestart",X),i.addEventListener("squeezeend",X),i.addEventListener("end",Y),i.addEventListener("inputsourceschange",K),p.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(C),i.renderState.layers===void 0){let N={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,e,N),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new Wi(f.framebufferWidth,f.framebufferHeight,{format:mi,type:Gi,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let N=null,L=null,E=null;p.depth&&(E=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,N=p.stencil?Ws:Fs,L=p.stencil?Gs:Wr);let nt={colorFormat:e.RGBA8,depthFormat:E,scaleFactor:s};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(nt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new Wi(d.textureWidth,d.textureHeight,{format:mi,type:Gi,depthTexture:new bl(d.textureWidth,d.textureHeight,L,void 0,void 0,void 0,void 0,void 0,void 0,N),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Ht.setContext(i),Ht.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function K(O){for(let N=0;N<O.removed.length;N++){let L=O.removed[N],E=y.indexOf(L);E>=0&&(y[E]=null,x[E].disconnect(L))}for(let N=0;N<O.added.length;N++){let L=O.added[N],E=y.indexOf(L);if(E===-1){for(let at=0;at<x.length;at++)if(at>=y.length){y.push(L),E=at;break}else if(y[at]===null){y[at]=L,E=at;break}if(E===-1)break}let nt=x[E];nt&&nt.connect(L)}}let V=new G,W=new G;function k(O,N,L){V.setFromMatrixPosition(N.matrixWorld),W.setFromMatrixPosition(L.matrixWorld);let E=V.distanceTo(W),nt=N.projectionMatrix.elements,at=L.projectionMatrix.elements,et=nt[14]/(nt[10]-1),ft=nt[14]/(nt[10]+1),Q=(nt[9]+1)/nt[5],A=(nt[9]-1)/nt[5],q=(nt[8]-1)/nt[0],tt=(at[8]+1)/at[0],rt=et*q,B=et*tt,H=E/(-q+tt),D=H*-q;if(N.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(D),O.translateZ(H),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert(),nt[10]===-1)O.projectionMatrix.copy(N.projectionMatrix),O.projectionMatrixInverse.copy(N.projectionMatrixInverse);else{let R=et+H,b=ft+H,j=rt-D,ct=B+(E-D),ut=Q*ft/b*R,ot=A*ft/b*R;O.projectionMatrix.makePerspective(j,ct,ut,ot,R,b),O.projectionMatrixInverse.copy(O.projectionMatrix).invert()}}function ht(O,N){N===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(N.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(i===null)return;let N=O.near,L=O.far;_.texture!==null&&(_.depthNear>0&&(N=_.depthNear),_.depthFar>0&&(L=_.depthFar)),v.near=P.near=S.near=N,v.far=P.far=S.far=L,(w!==v.near||F!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),w=v.near,F=v.far);let E=O.parent,nt=v.cameras;ht(v,E);for(let at=0;at<nt.length;at++)ht(nt[at],E);nt.length===2?k(v,S,P):v.projectionMatrix.copy(S.projectionMatrix),U(O,v,E)};function U(O,N,L){L===null?O.matrix.copy(N.matrixWorld):(O.matrix.copy(L.matrixWorld),O.matrix.invert(),O.matrix.multiply(N.matrixWorld)),O.matrix.decompose(O.position,O.quaternion,O.scale),O.updateMatrixWorld(!0),O.projectionMatrix.copy(N.projectionMatrix),O.projectionMatrixInverse.copy(N.projectionMatrixInverse),O.isPerspectiveCamera&&(O.fov=pu*2*Math.atan(1/O.projectionMatrix.elements[5]),O.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(O){l=O,d!==null&&(d.fixedFoveation=O),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=O)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let dt=null;function Lt(O,N){if(h=N.getViewerPose(c||o),g=N,h!==null){let L=h.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let E=!1;L.length!==v.cameras.length&&(v.cameras.length=0,E=!0);for(let at=0;at<L.length;at++){let et=L[at],ft=null;if(f!==null)ft=f.getViewport(et);else{let A=u.getViewSubImage(d,et);ft=A.viewport,at===0&&(t.setRenderTargetTextures(M,A.colorTexture,d.ignoreDepthValues?void 0:A.depthStencilTexture),t.setRenderTarget(M))}let Q=z[at];Q===void 0&&(Q=new fn,Q.layers.enable(at),Q.viewport=new ge,z[at]=Q),Q.matrix.fromArray(et.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(et.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(ft.x,ft.y,ft.width,ft.height),at===0&&(v.matrix.copy(Q.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),E===!0&&v.cameras.push(Q)}let nt=i.enabledFeatures;if(nt&&nt.includes("depth-sensing")){let at=u.getDepthInformation(L[0]);at&&at.isValid&&at.texture&&_.init(t,at,i.renderState)}}for(let L=0;L<x.length;L++){let E=y[L],nt=x[L];E!==null&&nt!==void 0&&nt.update(E,N,c||o)}dt&&dt(O,N),N.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:N}),g=null}let Ht=new rm;Ht.setAnimationLoop(Lt),this.setAnimationLoop=function(O){dt=O},this.dispose=function(){}}},Fr=new Si,YM=new Ce;function qM(r,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,im(r)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,M,x,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),u(p,m)):m.isMeshPhongMaterial?(s(p,m),h(p,m)):m.isMeshStandardMaterial?(s(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,y)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),_(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,M,x):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===je&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===je&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let M=t.get(m),x=M.envMap,y=M.envMapRotation;x&&(p.envMap.value=x,Fr.copy(y),Fr.x*=-1,Fr.y*=-1,Fr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Fr.y*=-1,Fr.z*=-1),p.envMapRotation.value.setFromMatrix4(YM.makeRotationFromEuler(Fr)),p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,M,x){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*M,p.scale.value=x*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,M){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===je&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){let M=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function ZM(r,t,e,n){let i={},s={},o=[],a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,x){let y=x.program;n.uniformBlockBinding(M,y)}function c(M,x){let y=i[M.id];y===void 0&&(g(M),y=h(M),i[M.id]=y,M.addEventListener("dispose",p));let C=x.program;n.updateUBOMapping(M,C);let T=t.render.frame;s[M.id]!==T&&(d(M),s[M.id]=T)}function h(M){let x=u();M.__bindingPointIndex=x;let y=r.createBuffer(),C=M.__size,T=M.usage;return r.bindBuffer(r.UNIFORM_BUFFER,y),r.bufferData(r.UNIFORM_BUFFER,C,T),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,x,y),y}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){let x=i[M.id],y=M.uniforms,C=M.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let T=0,S=y.length;T<S;T++){let P=Array.isArray(y[T])?y[T]:[y[T]];for(let z=0,v=P.length;z<v;z++){let w=P[z];if(f(w,T,z,C)===!0){let F=w.__offset,X=Array.isArray(w.value)?w.value:[w.value],Y=0;for(let K=0;K<X.length;K++){let V=X[K],W=_(V);typeof V=="number"||typeof V=="boolean"?(w.__data[0]=V,r.bufferSubData(r.UNIFORM_BUFFER,F+Y,w.__data)):V.isMatrix3?(w.__data[0]=V.elements[0],w.__data[1]=V.elements[1],w.__data[2]=V.elements[2],w.__data[3]=0,w.__data[4]=V.elements[3],w.__data[5]=V.elements[4],w.__data[6]=V.elements[5],w.__data[7]=0,w.__data[8]=V.elements[6],w.__data[9]=V.elements[7],w.__data[10]=V.elements[8],w.__data[11]=0):(V.toArray(w.__data,Y),Y+=W.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,F,w.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(M,x,y,C){let T=M.value,S=x+"_"+y;if(C[S]===void 0)return typeof T=="number"||typeof T=="boolean"?C[S]=T:C[S]=T.clone(),!0;{let P=C[S];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return C[S]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function g(M){let x=M.uniforms,y=0,C=16;for(let S=0,P=x.length;S<P;S++){let z=Array.isArray(x[S])?x[S]:[x[S]];for(let v=0,w=z.length;v<w;v++){let F=z[v],X=Array.isArray(F.value)?F.value:[F.value];for(let Y=0,K=X.length;Y<K;Y++){let V=X[Y],W=_(V),k=y%C,ht=k%W.boundary,U=k+ht;y+=ht,U!==0&&C-U<W.storage&&(y+=C-U),F.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=y,y+=W.storage}}}let T=y%C;return T>0&&(y+=C-T),M.__size=y,M.__cache={},this}function _(M){let x={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function p(M){let x=M.target;x.removeEventListener("dispose",p);let y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),r.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function m(){for(let M in i)r.deleteBuffer(i[M]);o=[],i={},s={}}return{bind:l,update:c,dispose:m}}var wl=class{constructor(t={}){let{canvas:e=K0(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;let f=new Uint32Array(4),g=new Int32Array(4),_=null,p=null,m=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=un,this.toneMapping=fr,this.toneMappingExposure=1;let x=this,y=!1,C=0,T=0,S=null,P=-1,z=null,v=new ge,w=new ge,F=null,X=new Qt(0),Y=0,K=e.width,V=e.height,W=1,k=null,ht=null,U=new ge(0,0,K,V),dt=new ge(0,0,K,V),Lt=!1,Ht=new No,O=!1,N=!1,L=new Ce,E=new Ce,nt=new G,at=new ge,et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ft=!1;function Q(){return S===null?W:1}let A=n;function q(I,$){return e.getContext(I,$)}try{let I={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${$u}`),e.addEventListener("webglcontextlost",pt,!1),e.addEventListener("webglcontextrestored",Mt,!1),e.addEventListener("webglcontextcreationerror",St,!1),A===null){let $="webgl2";if(A=q($,I),A===null)throw q($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let tt,rt,B,H,D,R,b,j,ct,ut,ot,Pt,xt,vt,Vt,_t,Et,It,kt,Ct,Zt,Xt,oe,Z;function gt(){tt=new hv(A),tt.init(),Xt=new HM(A,tt),rt=new rv(A,tt,t,Xt),B=new zM(A),rt.reverseDepthBuffer&&B.buffers.depth.setReversed(!0),H=new dv(A),D=new EM,R=new VM(A,tt,B,D,rt,Xt,H),b=new ov(x),j=new cv(x),ct=new v_(A),oe=new nv(A,ct),ut=new uv(A,ct,H,oe),ot=new mv(A,ut,ct,H),kt=new pv(A,rt,R),_t=new sv(D),Pt=new TM(x,b,j,tt,rt,oe,_t),xt=new qM(x,D),vt=new CM,Vt=new NM(tt),It=new ev(x,b,j,B,ot,d,l),Et=new FM(x,ot,rt),Z=new ZM(A,H,rt,B),Ct=new iv(A,tt,H),Zt=new fv(A,tt,H),H.programs=Pt.programs,x.capabilities=rt,x.extensions=tt,x.properties=D,x.renderLists=vt,x.shadowMap=Et,x.state=B,x.info=H}gt();let lt=new Pu(x,A);this.xr=lt,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){let I=tt.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){let I=tt.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(I){I!==void 0&&(W=I,this.setSize(K,V,!1))},this.getSize=function(I){return I.set(K,V)},this.setSize=function(I,$,it=!0){if(lt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=I,V=$,e.width=Math.floor(I*W),e.height=Math.floor($*W),it===!0&&(e.style.width=I+"px",e.style.height=$+"px"),this.setViewport(0,0,I,$)},this.getDrawingBufferSize=function(I){return I.set(K*W,V*W).floor()},this.setDrawingBufferSize=function(I,$,it){K=I,V=$,W=it,e.width=Math.floor(I*it),e.height=Math.floor($*it),this.setViewport(0,0,I,$)},this.getCurrentViewport=function(I){return I.copy(v)},this.getViewport=function(I){return I.copy(U)},this.setViewport=function(I,$,it,st){I.isVector4?U.set(I.x,I.y,I.z,I.w):U.set(I,$,it,st),B.viewport(v.copy(U).multiplyScalar(W).round())},this.getScissor=function(I){return I.copy(dt)},this.setScissor=function(I,$,it,st){I.isVector4?dt.set(I.x,I.y,I.z,I.w):dt.set(I,$,it,st),B.scissor(w.copy(dt).multiplyScalar(W).round())},this.getScissorTest=function(){return Lt},this.setScissorTest=function(I){B.setScissorTest(Lt=I)},this.setOpaqueSort=function(I){k=I},this.setTransparentSort=function(I){ht=I},this.getClearColor=function(I){return I.copy(It.getClearColor())},this.setClearColor=function(){It.setClearColor.apply(It,arguments)},this.getClearAlpha=function(){return It.getClearAlpha()},this.setClearAlpha=function(){It.setClearAlpha.apply(It,arguments)},this.clear=function(I=!0,$=!0,it=!0){let st=0;if(I){let J=!1;if(S!==null){let yt=S.texture.format;J=yt===sf||yt===rf||yt===nf}if(J){let yt=S.texture.type,Rt=yt===Gi||yt===Wr||yt===Do||yt===Gs||yt===tf||yt===ef,wt=It.getClearColor(),bt=It.getClearAlpha(),Ot=wt.r,Wt=wt.g,Ut=wt.b;Rt?(f[0]=Ot,f[1]=Wt,f[2]=Ut,f[3]=bt,A.clearBufferuiv(A.COLOR,0,f)):(g[0]=Ot,g[1]=Wt,g[2]=Ut,g[3]=bt,A.clearBufferiv(A.COLOR,0,g))}else st|=A.COLOR_BUFFER_BIT}$&&(st|=A.DEPTH_BUFFER_BIT,A.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),it&&(st|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",pt,!1),e.removeEventListener("webglcontextrestored",Mt,!1),e.removeEventListener("webglcontextcreationerror",St,!1),vt.dispose(),Vt.dispose(),D.dispose(),b.dispose(),j.dispose(),ot.dispose(),oe.dispose(),Z.dispose(),Pt.dispose(),lt.dispose(),lt.removeEventListener("sessionstart",ue),lt.removeEventListener("sessionend",Tt),Gt.stop()};function pt(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function Mt(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;let I=H.autoReset,$=Et.enabled,it=Et.autoUpdate,st=Et.needsUpdate,J=Et.type;gt(),H.autoReset=I,Et.enabled=$,Et.autoUpdate=it,Et.needsUpdate=st,Et.type=J}function St(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function Jt(I){let $=I.target;$.removeEventListener("dispose",Jt),_e($)}function _e(I){Te(I),D.remove(I)}function Te(I){let $=D.get(I).programs;$!==void 0&&($.forEach(function(it){Pt.releaseProgram(it)}),I.isShaderMaterial&&Pt.releaseShaderCache(I))}this.renderBufferDirect=function(I,$,it,st,J,yt){$===null&&($=et);let Rt=J.isMesh&&J.matrixWorld.determinant()<0,wt=pe(I,$,it,st,J);B.setMaterial(st,Rt);let bt=it.index,Ot=1;if(st.wireframe===!0){if(bt=ut.getWireframeAttribute(it),bt===void 0)return;Ot=2}let Wt=it.drawRange,Ut=it.attributes.position,ae=Wt.start*Ot,re=(Wt.start+Wt.count)*Ot;yt!==null&&(ae=Math.max(ae,yt.start*Ot),re=Math.min(re,(yt.start+yt.count)*Ot)),bt!==null?(ae=Math.max(ae,0),re=Math.min(re,bt.count)):Ut!=null&&(ae=Math.max(ae,0),re=Math.min(re,Ut.count));let me=re-ae;if(me<0||me===1/0)return;oe.setup(J,st,wt,it,bt);let $e,se=Ct;if(bt!==null&&($e=ct.get(bt),se=Zt,se.setIndex($e)),J.isMesh)st.wireframe===!0?(B.setLineWidth(st.wireframeLinewidth*Q()),se.setMode(A.LINES)):se.setMode(A.TRIANGLES);else if(J.isLine){let zt=st.linewidth;zt===void 0&&(zt=1),B.setLineWidth(zt*Q()),J.isLineSegments?se.setMode(A.LINES):J.isLineLoop?se.setMode(A.LINE_LOOP):se.setMode(A.LINE_STRIP)}else J.isPoints?se.setMode(A.POINTS):J.isSprite&&se.setMode(A.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)se.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(tt.get("WEBGL_multi_draw"))se.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{let zt=J._multiDrawStarts,sn=J._multiDrawCounts,fe=J._multiDrawCount,ci=bt?ct.get(bt).bytesPerElement:1,ys=D.get(st).currentProgram.getUniforms();for(let Vn=0;Vn<fe;Vn++)ys.setValue(A,"_gl_DrawID",Vn),se.render(zt[Vn]/ci,sn[Vn])}else if(J.isInstancedMesh)se.renderInstances(ae,me,J.count);else if(it.isInstancedBufferGeometry){let zt=it._maxInstanceCount!==void 0?it._maxInstanceCount:1/0,sn=Math.min(it.instanceCount,zt);se.renderInstances(ae,me,sn)}else se.render(ae,me)};function ne(I,$,it){I.transparent===!0&&I.side===di&&I.forceSinglePass===!1?(I.side=je,I.needsUpdate=!0,ze(I,$,it),I.side=mr,I.needsUpdate=!0,ze(I,$,it),I.side=di):ze(I,$,it)}this.compile=function(I,$,it=null){it===null&&(it=I),p=Vt.get(it),p.init($),M.push(p),it.traverseVisible(function(J){J.isLight&&J.layers.test($.layers)&&(p.pushLight(J),J.castShadow&&p.pushShadow(J))}),I!==it&&I.traverseVisible(function(J){J.isLight&&J.layers.test($.layers)&&(p.pushLight(J),J.castShadow&&p.pushShadow(J))}),p.setupLights();let st=new Set;return I.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;let yt=J.material;if(yt)if(Array.isArray(yt))for(let Rt=0;Rt<yt.length;Rt++){let wt=yt[Rt];ne(wt,it,J),st.add(wt)}else ne(yt,it,J),st.add(yt)}),M.pop(),p=null,st},this.compileAsync=function(I,$,it=null){let st=this.compile(I,$,it);return new Promise(J=>{function yt(){if(st.forEach(function(Rt){D.get(Rt).currentProgram.isReady()&&st.delete(Rt)}),st.size===0){J(I);return}setTimeout(yt,10)}tt.get("KHR_parallel_shader_compile")!==null?yt():setTimeout(yt,10)})};let Ft=null;function Nt(I){Ft&&Ft(I)}function ue(){Gt.stop()}function Tt(){Gt.start()}let Gt=new rm;Gt.setAnimationLoop(Nt),typeof self!="undefined"&&Gt.setContext(self),this.setAnimationLoop=function(I){Ft=I,lt.setAnimationLoop(I),I===null?Gt.stop():Gt.start()},lt.addEventListener("sessionstart",ue),lt.addEventListener("sessionend",Tt),this.render=function(I,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),lt.enabled===!0&&lt.isPresenting===!0&&(lt.cameraAutoUpdate===!0&&lt.updateCamera($),$=lt.getCamera()),I.isScene===!0&&I.onBeforeRender(x,I,$,S),p=Vt.get(I,M.length),p.init($),M.push(p),E.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),Ht.setFromProjectionMatrix(E),N=this.localClippingEnabled,O=_t.init(this.clippingPlanes,N),_=vt.get(I,m.length),_.init(),m.push(_),lt.enabled===!0&&lt.isPresenting===!0){let yt=x.xr.getDepthSensingMesh();yt!==null&&Bt(yt,$,-1/0,x.sortObjects)}Bt(I,$,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(k,ht),ft=lt.enabled===!1||lt.isPresenting===!1||lt.hasDepthSensing()===!1,ft&&It.addToRenderList(_,I),this.info.render.frame++,O===!0&&_t.beginShadows();let it=p.state.shadowsArray;Et.render(it,I,$),O===!0&&_t.endShadows(),this.info.autoReset===!0&&this.info.reset();let st=_.opaque,J=_.transmissive;if(p.setupLights(),$.isArrayCamera){let yt=$.cameras;if(J.length>0)for(let Rt=0,wt=yt.length;Rt<wt;Rt++){let bt=yt[Rt];Be(st,J,I,bt)}ft&&It.render(I);for(let Rt=0,wt=yt.length;Rt<wt;Rt++){let bt=yt[Rt];qt(_,I,bt,bt.viewport)}}else J.length>0&&Be(st,J,I,$),ft&&It.render(I),qt(_,I,$);S!==null&&(R.updateMultisampleRenderTarget(S),R.updateRenderTargetMipmap(S)),I.isScene===!0&&I.onAfterRender(x,I,$),oe.resetDefaultState(),P=-1,z=null,M.pop(),M.length>0?(p=M[M.length-1],O===!0&&_t.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function Bt(I,$,it,st){if(I.visible===!1)return;if(I.layers.test($.layers)){if(I.isGroup)it=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update($);else if(I.isLight)p.pushLight(I),I.castShadow&&p.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||Ht.intersectsSprite(I)){st&&at.setFromMatrixPosition(I.matrixWorld).applyMatrix4(E);let Rt=ot.update(I),wt=I.material;wt.visible&&_.push(I,Rt,wt,it,at.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||Ht.intersectsObject(I))){let Rt=ot.update(I),wt=I.material;if(st&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),at.copy(I.boundingSphere.center)):(Rt.boundingSphere===null&&Rt.computeBoundingSphere(),at.copy(Rt.boundingSphere.center)),at.applyMatrix4(I.matrixWorld).applyMatrix4(E)),Array.isArray(wt)){let bt=Rt.groups;for(let Ot=0,Wt=bt.length;Ot<Wt;Ot++){let Ut=bt[Ot],ae=wt[Ut.materialIndex];ae&&ae.visible&&_.push(I,Rt,ae,it,at.z,Ut)}}else wt.visible&&_.push(I,Rt,wt,it,at.z,null)}}let yt=I.children;for(let Rt=0,wt=yt.length;Rt<wt;Rt++)Bt(yt[Rt],$,it,st)}function qt(I,$,it,st){let J=I.opaque,yt=I.transmissive,Rt=I.transparent;p.setupLightsView(it),O===!0&&_t.setGlobalState(x.clippingPlanes,it),st&&B.viewport(v.copy(st)),J.length>0&&$t(J,$,it),yt.length>0&&$t(yt,$,it),Rt.length>0&&$t(Rt,$,it),B.buffers.depth.setTest(!0),B.buffers.depth.setMask(!0),B.buffers.color.setMask(!0),B.setPolygonOffset(!1)}function Be(I,$,it,st){if((it.isScene===!0?it.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[st.id]===void 0&&(p.state.transmissionRenderTarget[st.id]=new Wi(1,1,{generateMipmaps:!0,type:tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float")?qo:Gi,minFilter:Gr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:de.workingColorSpace}));let yt=p.state.transmissionRenderTarget[st.id],Rt=st.viewport||v;yt.setSize(Rt.z,Rt.w);let wt=x.getRenderTarget();x.setRenderTarget(yt),x.getClearColor(X),Y=x.getClearAlpha(),Y<1&&x.setClearColor(16777215,.5),x.clear(),ft&&It.render(it);let bt=x.toneMapping;x.toneMapping=fr;let Ot=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),p.setupLightsView(st),O===!0&&_t.setGlobalState(x.clippingPlanes,st),$t(I,it,st),R.updateMultisampleRenderTarget(yt),R.updateRenderTargetMipmap(yt),tt.has("WEBGL_multisampled_render_to_texture")===!1){let Wt=!1;for(let Ut=0,ae=$.length;Ut<ae;Ut++){let re=$[Ut],me=re.object,$e=re.geometry,se=re.material,zt=re.group;if(se.side===di&&me.layers.test(st.layers)){let sn=se.side;se.side=je,se.needsUpdate=!0,Ee(me,it,st,$e,se,zt),se.side=sn,se.needsUpdate=!0,Wt=!0}}Wt===!0&&(R.updateMultisampleRenderTarget(yt),R.updateRenderTargetMipmap(yt))}x.setRenderTarget(wt),x.setClearColor(X,Y),Ot!==void 0&&(st.viewport=Ot),x.toneMapping=bt}function $t(I,$,it){let st=$.isScene===!0?$.overrideMaterial:null;for(let J=0,yt=I.length;J<yt;J++){let Rt=I[J],wt=Rt.object,bt=Rt.geometry,Ot=st===null?Rt.material:st,Wt=Rt.group;wt.layers.test(it.layers)&&Ee(wt,$,it,bt,Ot,Wt)}}function Ee(I,$,it,st,J,yt){I.onBeforeRender(x,$,it,st,J,yt),I.modelViewMatrix.multiplyMatrices(it.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),J.onBeforeRender(x,$,it,st,I,yt),J.transparent===!0&&J.side===di&&J.forceSinglePass===!1?(J.side=je,J.needsUpdate=!0,x.renderBufferDirect(it,$,st,J,I,yt),J.side=mr,J.needsUpdate=!0,x.renderBufferDirect(it,$,st,J,I,yt),J.side=di):x.renderBufferDirect(it,$,st,J,I,yt),I.onAfterRender(x,$,it,st,J,yt)}function ze(I,$,it){$.isScene!==!0&&($=et);let st=D.get(I),J=p.state.lights,yt=p.state.shadowsArray,Rt=J.state.version,wt=Pt.getParameters(I,J.state,yt,$,it),bt=Pt.getProgramCacheKey(wt),Ot=st.programs;st.environment=I.isMeshStandardMaterial?$.environment:null,st.fog=$.fog,st.envMap=(I.isMeshStandardMaterial?j:b).get(I.envMap||st.environment),st.envMapRotation=st.environment!==null&&I.envMap===null?$.environmentRotation:I.envMapRotation,Ot===void 0&&(I.addEventListener("dispose",Jt),Ot=new Map,st.programs=Ot);let Wt=Ot.get(bt);if(Wt!==void 0){if(st.currentProgram===Wt&&st.lightsStateVersion===Rt)return xe(I,wt),Wt}else wt.uniforms=Pt.getUniforms(I),I.onBeforeCompile(wt,x),Wt=Pt.acquireProgram(wt,bt),Ot.set(bt,Wt),st.uniforms=wt.uniforms;let Ut=st.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(Ut.clippingPlanes=_t.uniform),xe(I,wt),st.needsLights=Se(I),st.lightsStateVersion=Rt,st.needsLights&&(Ut.ambientLightColor.value=J.state.ambient,Ut.lightProbe.value=J.state.probe,Ut.directionalLights.value=J.state.directional,Ut.directionalLightShadows.value=J.state.directionalShadow,Ut.spotLights.value=J.state.spot,Ut.spotLightShadows.value=J.state.spotShadow,Ut.rectAreaLights.value=J.state.rectArea,Ut.ltc_1.value=J.state.rectAreaLTC1,Ut.ltc_2.value=J.state.rectAreaLTC2,Ut.pointLights.value=J.state.point,Ut.pointLightShadows.value=J.state.pointShadow,Ut.hemisphereLights.value=J.state.hemi,Ut.directionalShadowMap.value=J.state.directionalShadowMap,Ut.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Ut.spotShadowMap.value=J.state.spotShadowMap,Ut.spotLightMatrix.value=J.state.spotLightMatrix,Ut.spotLightMap.value=J.state.spotLightMap,Ut.pointShadowMap.value=J.state.pointShadowMap,Ut.pointShadowMatrix.value=J.state.pointShadowMatrix),st.currentProgram=Wt,st.uniformsList=null,Wt}function Me(I){if(I.uniformsList===null){let $=I.currentProgram.getUniforms();I.uniformsList=zs.seqWithValue($.seq,I.uniforms)}return I.uniformsList}function xe(I,$){let it=D.get(I);it.outputColorSpace=$.outputColorSpace,it.batching=$.batching,it.batchingColor=$.batchingColor,it.instancing=$.instancing,it.instancingColor=$.instancingColor,it.instancingMorph=$.instancingMorph,it.skinning=$.skinning,it.morphTargets=$.morphTargets,it.morphNormals=$.morphNormals,it.morphColors=$.morphColors,it.morphTargetsCount=$.morphTargetsCount,it.numClippingPlanes=$.numClippingPlanes,it.numIntersection=$.numClipIntersection,it.vertexAlphas=$.vertexAlphas,it.vertexTangents=$.vertexTangents,it.toneMapping=$.toneMapping}function pe(I,$,it,st,J){$.isScene!==!0&&($=et),R.resetTextureUnits();let yt=$.fog,Rt=st.isMeshStandardMaterial?$.environment:null,wt=S===null?x.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:xr,bt=(st.isMeshStandardMaterial?j:b).get(st.envMap||Rt),Ot=st.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,Wt=!!it.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),Ut=!!it.morphAttributes.position,ae=!!it.morphAttributes.normal,re=!!it.morphAttributes.color,me=fr;st.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(me=x.toneMapping);let $e=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,se=$e!==void 0?$e.length:0,zt=D.get(st),sn=p.state.lights;if(O===!0&&(N===!0||I!==z)){let $n=I===z&&st.id===P;_t.setState(st,I,$n)}let fe=!1;st.version===zt.__version?(zt.needsLights&&zt.lightsStateVersion!==sn.state.version||zt.outputColorSpace!==wt||J.isBatchedMesh&&zt.batching===!1||!J.isBatchedMesh&&zt.batching===!0||J.isBatchedMesh&&zt.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&zt.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&zt.instancing===!1||!J.isInstancedMesh&&zt.instancing===!0||J.isSkinnedMesh&&zt.skinning===!1||!J.isSkinnedMesh&&zt.skinning===!0||J.isInstancedMesh&&zt.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&zt.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&zt.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&zt.instancingMorph===!1&&J.morphTexture!==null||zt.envMap!==bt||st.fog===!0&&zt.fog!==yt||zt.numClippingPlanes!==void 0&&(zt.numClippingPlanes!==_t.numPlanes||zt.numIntersection!==_t.numIntersection)||zt.vertexAlphas!==Ot||zt.vertexTangents!==Wt||zt.morphTargets!==Ut||zt.morphNormals!==ae||zt.morphColors!==re||zt.toneMapping!==me||zt.morphTargetsCount!==se)&&(fe=!0):(fe=!0,zt.__version=st.version);let ci=zt.currentProgram;fe===!0&&(ci=ze(st,$,J));let ys=!1,Vn=!1,Gc=!1,ke=ci.getUniforms(),ir=zt.uniforms;if(B.useProgram(ci.program)&&(ys=!0,Vn=!0,Gc=!0),st.id!==P&&(P=st.id,Vn=!0),ys||z!==I){rt.reverseDepthBuffer?(L.copy(I.projectionMatrix),j0(L),t_(L),ke.setValue(A,"projectionMatrix",L)):ke.setValue(A,"projectionMatrix",I.projectionMatrix),ke.setValue(A,"viewMatrix",I.matrixWorldInverse);let $n=ke.map.cameraPosition;$n!==void 0&&$n.setValue(A,nt.setFromMatrixPosition(I.matrixWorld)),rt.logarithmicDepthBuffer&&ke.setValue(A,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&ke.setValue(A,"isOrthographic",I.isOrthographicCamera===!0),z!==I&&(z=I,Vn=!0,Gc=!0)}if(J.isSkinnedMesh){ke.setOptional(A,J,"bindMatrix"),ke.setOptional(A,J,"bindMatrixInverse");let $n=J.skeleton;$n&&($n.boneTexture===null&&$n.computeBoneTexture(),ke.setValue(A,"boneTexture",$n.boneTexture,R))}J.isBatchedMesh&&(ke.setOptional(A,J,"batchingTexture"),ke.setValue(A,"batchingTexture",J._matricesTexture,R),ke.setOptional(A,J,"batchingIdTexture"),ke.setValue(A,"batchingIdTexture",J._indirectTexture,R),ke.setOptional(A,J,"batchingColorTexture"),J._colorsTexture!==null&&ke.setValue(A,"batchingColorTexture",J._colorsTexture,R));let Wc=it.morphAttributes;if((Wc.position!==void 0||Wc.normal!==void 0||Wc.color!==void 0)&&kt.update(J,it,ci),(Vn||zt.receiveShadow!==J.receiveShadow)&&(zt.receiveShadow=J.receiveShadow,ke.setValue(A,"receiveShadow",J.receiveShadow)),st.isMeshGouraudMaterial&&st.envMap!==null&&(ir.envMap.value=bt,ir.flipEnvMap.value=bt.isCubeTexture&&bt.isRenderTargetTexture===!1?-1:1),st.isMeshStandardMaterial&&st.envMap===null&&$.environment!==null&&(ir.envMapIntensity.value=$.environmentIntensity),Vn&&(ke.setValue(A,"toneMappingExposure",x.toneMappingExposure),zt.needsLights&&kn(ir,Gc),yt&&st.fog===!0&&xt.refreshFogUniforms(ir,yt),xt.refreshMaterialUniforms(ir,st,W,V,p.state.transmissionRenderTarget[I.id]),zs.upload(A,Me(zt),ir,R)),st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(zs.upload(A,Me(zt),ir,R),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&ke.setValue(A,"center",J.center),ke.setValue(A,"modelViewMatrix",J.modelViewMatrix),ke.setValue(A,"normalMatrix",J.normalMatrix),ke.setValue(A,"modelMatrix",J.matrixWorld),st.isShaderMaterial||st.isRawShaderMaterial){let $n=st.uniformsGroups;for(let Xc=0,h0=$n.length;Xc<h0;Xc++){let Ld=$n[Xc];Z.update(Ld,ci),Z.bind(Ld,ci)}}return ci}function kn(I,$){I.ambientLightColor.needsUpdate=$,I.lightProbe.needsUpdate=$,I.directionalLights.needsUpdate=$,I.directionalLightShadows.needsUpdate=$,I.pointLights.needsUpdate=$,I.pointLightShadows.needsUpdate=$,I.spotLights.needsUpdate=$,I.spotLightShadows.needsUpdate=$,I.rectAreaLights.needsUpdate=$,I.hemisphereLights.needsUpdate=$}function Se(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(I,$,it){D.get(I.texture).__webglTexture=$,D.get(I.depthTexture).__webglTexture=it;let st=D.get(I);st.__hasExternalTextures=!0,st.__autoAllocateDepthBuffer=it===void 0,st.__autoAllocateDepthBuffer||tt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),st.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(I,$){let it=D.get(I);it.__webglFramebuffer=$,it.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(I,$=0,it=0){S=I,C=$,T=it;let st=!0,J=null,yt=!1,Rt=!1;if(I){let bt=D.get(I);if(bt.__useDefaultFramebuffer!==void 0)B.bindFramebuffer(A.FRAMEBUFFER,null),st=!1;else if(bt.__webglFramebuffer===void 0)R.setupRenderTarget(I);else if(bt.__hasExternalTextures)R.rebindTextures(I,D.get(I.texture).__webglTexture,D.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){let Ut=I.depthTexture;if(bt.__boundDepthTexture!==Ut){if(Ut!==null&&D.has(Ut)&&(I.width!==Ut.image.width||I.height!==Ut.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(I)}}let Ot=I.texture;(Ot.isData3DTexture||Ot.isDataArrayTexture||Ot.isCompressedArrayTexture)&&(Rt=!0);let Wt=D.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(Wt[$])?J=Wt[$][it]:J=Wt[$],yt=!0):I.samples>0&&R.useMultisampledRTT(I)===!1?J=D.get(I).__webglMultisampledFramebuffer:Array.isArray(Wt)?J=Wt[it]:J=Wt,v.copy(I.viewport),w.copy(I.scissor),F=I.scissorTest}else v.copy(U).multiplyScalar(W).floor(),w.copy(dt).multiplyScalar(W).floor(),F=Lt;if(B.bindFramebuffer(A.FRAMEBUFFER,J)&&st&&B.drawBuffers(I,J),B.viewport(v),B.scissor(w),B.setScissorTest(F),yt){let bt=D.get(I.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+$,bt.__webglTexture,it)}else if(Rt){let bt=D.get(I.texture),Ot=$||0;A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,bt.__webglTexture,it||0,Ot)}P=-1},this.readRenderTargetPixels=function(I,$,it,st,J,yt,Rt){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=D.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Rt!==void 0&&(wt=wt[Rt]),wt){B.bindFramebuffer(A.FRAMEBUFFER,wt);try{let bt=I.texture,Ot=bt.format,Wt=bt.type;if(!rt.textureFormatReadable(Ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!rt.textureTypeReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=I.width-st&&it>=0&&it<=I.height-J&&A.readPixels($,it,st,J,Xt.convert(Ot),Xt.convert(Wt),yt)}finally{let bt=S!==null?D.get(S).__webglFramebuffer:null;B.bindFramebuffer(A.FRAMEBUFFER,bt)}}},this.readRenderTargetPixelsAsync=async function(I,$,it,st,J,yt,Rt){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=D.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Rt!==void 0&&(wt=wt[Rt]),wt){let bt=I.texture,Ot=bt.format,Wt=bt.type;if(!rt.textureFormatReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!rt.textureTypeReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if($>=0&&$<=I.width-st&&it>=0&&it<=I.height-J){B.bindFramebuffer(A.FRAMEBUFFER,wt);let Ut=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,Ut),A.bufferData(A.PIXEL_PACK_BUFFER,yt.byteLength,A.STREAM_READ),A.readPixels($,it,st,J,Xt.convert(Ot),Xt.convert(Wt),0);let ae=S!==null?D.get(S).__webglFramebuffer:null;B.bindFramebuffer(A.FRAMEBUFFER,ae);let re=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await Q0(A,re,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,Ut),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,yt),A.deleteBuffer(Ut),A.deleteSync(re),yt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(I,$=null,it=0){I.isTexture!==!0&&(al("WebGLRenderer: copyFramebufferToTexture function signature has changed."),$=arguments[0]||null,I=arguments[1]);let st=Math.pow(2,-it),J=Math.floor(I.image.width*st),yt=Math.floor(I.image.height*st),Rt=$!==null?$.x:0,wt=$!==null?$.y:0;R.setTexture2D(I,0),A.copyTexSubImage2D(A.TEXTURE_2D,it,0,0,Rt,wt,J,yt),B.unbindTexture()},this.copyTextureToTexture=function(I,$,it=null,st=null,J=0){I.isTexture!==!0&&(al("WebGLRenderer: copyTextureToTexture function signature has changed."),st=arguments[0]||null,I=arguments[1],$=arguments[2],J=arguments[3]||0,it=null);let yt,Rt,wt,bt,Ot,Wt;it!==null?(yt=it.max.x-it.min.x,Rt=it.max.y-it.min.y,wt=it.min.x,bt=it.min.y):(yt=I.image.width,Rt=I.image.height,wt=0,bt=0),st!==null?(Ot=st.x,Wt=st.y):(Ot=0,Wt=0);let Ut=Xt.convert($.format),ae=Xt.convert($.type);R.setTexture2D($,0),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,$.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,$.unpackAlignment);let re=A.getParameter(A.UNPACK_ROW_LENGTH),me=A.getParameter(A.UNPACK_IMAGE_HEIGHT),$e=A.getParameter(A.UNPACK_SKIP_PIXELS),se=A.getParameter(A.UNPACK_SKIP_ROWS),zt=A.getParameter(A.UNPACK_SKIP_IMAGES),sn=I.isCompressedTexture?I.mipmaps[J]:I.image;A.pixelStorei(A.UNPACK_ROW_LENGTH,sn.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,sn.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,wt),A.pixelStorei(A.UNPACK_SKIP_ROWS,bt),I.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,J,Ot,Wt,yt,Rt,Ut,ae,sn.data):I.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,J,Ot,Wt,sn.width,sn.height,Ut,sn.data):A.texSubImage2D(A.TEXTURE_2D,J,Ot,Wt,yt,Rt,Ut,ae,sn),A.pixelStorei(A.UNPACK_ROW_LENGTH,re),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,me),A.pixelStorei(A.UNPACK_SKIP_PIXELS,$e),A.pixelStorei(A.UNPACK_SKIP_ROWS,se),A.pixelStorei(A.UNPACK_SKIP_IMAGES,zt),J===0&&$.generateMipmaps&&A.generateMipmap(A.TEXTURE_2D),B.unbindTexture()},this.copyTextureToTexture3D=function(I,$,it=null,st=null,J=0){I.isTexture!==!0&&(al("WebGLRenderer: copyTextureToTexture3D function signature has changed."),it=arguments[0]||null,st=arguments[1]||null,I=arguments[2],$=arguments[3],J=arguments[4]||0);let yt,Rt,wt,bt,Ot,Wt,Ut,ae,re,me=I.isCompressedTexture?I.mipmaps[J]:I.image;it!==null?(yt=it.max.x-it.min.x,Rt=it.max.y-it.min.y,wt=it.max.z-it.min.z,bt=it.min.x,Ot=it.min.y,Wt=it.min.z):(yt=me.width,Rt=me.height,wt=me.depth,bt=0,Ot=0,Wt=0),st!==null?(Ut=st.x,ae=st.y,re=st.z):(Ut=0,ae=0,re=0);let $e=Xt.convert($.format),se=Xt.convert($.type),zt;if($.isData3DTexture)R.setTexture3D($,0),zt=A.TEXTURE_3D;else if($.isDataArrayTexture||$.isCompressedArrayTexture)R.setTexture2DArray($,0),zt=A.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,$.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,$.unpackAlignment);let sn=A.getParameter(A.UNPACK_ROW_LENGTH),fe=A.getParameter(A.UNPACK_IMAGE_HEIGHT),ci=A.getParameter(A.UNPACK_SKIP_PIXELS),ys=A.getParameter(A.UNPACK_SKIP_ROWS),Vn=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,me.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,me.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,bt),A.pixelStorei(A.UNPACK_SKIP_ROWS,Ot),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Wt),I.isDataTexture||I.isData3DTexture?A.texSubImage3D(zt,J,Ut,ae,re,yt,Rt,wt,$e,se,me.data):$.isCompressedArrayTexture?A.compressedTexSubImage3D(zt,J,Ut,ae,re,yt,Rt,wt,$e,me.data):A.texSubImage3D(zt,J,Ut,ae,re,yt,Rt,wt,$e,se,me),A.pixelStorei(A.UNPACK_ROW_LENGTH,sn),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,fe),A.pixelStorei(A.UNPACK_SKIP_PIXELS,ci),A.pixelStorei(A.UNPACK_SKIP_ROWS,ys),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Vn),J===0&&$.generateMipmaps&&A.generateMipmap(zt),B.unbindTexture()},this.initRenderTarget=function(I){D.get(I).__webglFramebuffer===void 0&&R.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?R.setTextureCube(I,0):I.isData3DTexture?R.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?R.setTexture2DArray(I,0):R.setTexture2D(I,0),B.unbindTexture()},this.resetState=function(){C=0,T=0,S=null,B.reset(),oe.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===of?"display-p3":"srgb",e.unpackColorSpace=de.workingColorSpace===Jl?"display-p3":"srgb"}};var Zs=class extends pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Si,this.environmentIntensity=1,this.environmentRotation=new Si,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var Tl=class extends Dn{constructor(t=null,e=1,n=1,i,s,o,a,l,c=dn,h=dn,u,d){super(null,o,a,l,c,h,i,s,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Uo=class extends Xi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Qt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},El=new G,Al=new G,Rp=new Ce,Eo=new gl,$a=new Xs,bh=new G,Pp=new G,Cl=class extends pn{constructor(t=new Ge,e=new Uo){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)El.fromBufferAttribute(e,i-1),Al.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=El.distanceTo(Al);t.setAttribute("lineDistance",new ie(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$a.copy(n.boundingSphere),$a.applyMatrix4(i),$a.radius+=s,t.ray.intersectsSphere($a)===!1)return;Rp.copy(i).invert(),Eo.copy(t.ray).applyMatrix4(Rp);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=f,p=g-1;_<p;_+=c){let m=h.getX(_),M=h.getX(_+1),x=Ka(this,t,Eo,l,m,M);x&&e.push(x)}if(this.isLineLoop){let _=h.getX(g-1),p=h.getX(f),m=Ka(this,t,Eo,l,_,p);m&&e.push(m)}}else{let f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=f,p=g-1;_<p;_+=c){let m=Ka(this,t,Eo,l,_,_+1);m&&e.push(m)}if(this.isLineLoop){let _=Ka(this,t,Eo,l,g-1,f);_&&e.push(_)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Ka(r,t,e,n,i,s){let o=r.geometry.attributes.position;if(El.fromBufferAttribute(o,i),Al.fromBufferAttribute(o,s),e.distanceSqToSegment(El,Al,bh,Pp)>n)return;bh.applyMatrix4(r.matrixWorld);let l=t.ray.origin.distanceTo(bh);if(!(l<t.near||l>t.far))return{distance:l,point:Pp.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:r}}var Oo=class extends Dn{constructor(t,e,n,i,s,o,a,l,c){super(t,e,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},ti=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),i=0,s=n.length,o;e?o=e:o=t*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);let h=n[i],d=n[i+1]-h,f=(o-h)/d;return(i+f)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);let o=this.getPoint(i),a=this.getPoint(s),l=e||(o.isVector2?new mt:new G);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new G,i=[],s=[],o=[],a=new G,l=new Ce;for(let f=0;f<=t;f++){let g=f/t;i[f]=this.getTangentAt(g,new G)}s[0]=new G,o[0]=new G;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let f=1;f<=t;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Qe(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(i[f],s[f])}if(e===!0){let f=Math.acos(Qe(s[0].dot(s[t]),-1,1));f/=t,i[0].dot(a.crossVectors(s[0],s[t]))>0&&(f=-f);for(let g=1;g<=t;g++)s[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),o[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Fo=class extends ti{constructor(t=0,e=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new mt){let n=e,i=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);let a=this.aStartAngle+t*s,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Iu=class extends Fo{constructor(t,e,n,i,s,o){super(t,e,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function lf(){let r=0,t=0,e=0,n=0;function i(s,o,a,l){r=s,t=a,e=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,u){let d=(o-s)/c-(a-s)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,i(o,a,d,f)},calc:function(s){let o=s*s,a=o*s;return r+t*s+e*o+n*a}}}var Qa=new G,wh=new lf,Th=new lf,Eh=new lf,Bo=class extends ti{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new G){let n=e,i=this.points,s=i.length,o=(s-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%s]:(Qa.subVectors(i[0],i[1]).add(i[0]),c=Qa);let u=i[a%s],d=i[(a+1)%s];if(this.closed||a+2<s?h=i[(a+2)%s]:(Qa.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=Qa),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),p<1e-4&&(p=_),wh.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,_,p),Th.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,_,p),Eh.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,_,p)}else this.curveType==="catmullrom"&&(wh.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Th.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Eh.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(wh.calc(l),Th.calc(l),Eh.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new G().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Ip(r,t,e,n,i){let s=(n-t)*.5,o=(i-e)*.5,a=r*r,l=r*a;return(2*e-2*n+s+o)*l+(-3*e+3*n-2*s-o)*a+s*r+e}function JM(r,t){let e=1-r;return e*e*t}function $M(r,t){return 2*(1-r)*r*t}function KM(r,t){return r*r*t}function Po(r,t,e,n){return JM(r,t)+$M(r,e)+KM(r,n)}function QM(r,t){let e=1-r;return e*e*e*t}function jM(r,t){let e=1-r;return 3*e*e*r*t}function tS(r,t){return 3*(1-r)*r*r*t}function eS(r,t){return r*r*r*t}function Io(r,t,e,n,i){return QM(r,t)+jM(r,e)+tS(r,n)+eS(r,i)}var Rl=class extends ti{constructor(t=new mt,e=new mt,n=new mt,i=new mt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new mt){let n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Io(t,i.x,s.x,o.x,a.x),Io(t,i.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Lu=class extends ti{constructor(t=new G,e=new G,n=new G,i=new G){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new G){let n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Io(t,i.x,s.x,o.x,a.x),Io(t,i.y,s.y,o.y,a.y),Io(t,i.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Pl=class extends ti{constructor(t=new mt,e=new mt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new mt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new mt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Du=class extends ti{constructor(t=new G,e=new G){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new G){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new G){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Il=class extends ti{constructor(t=new mt,e=new mt,n=new mt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new mt){let n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(Po(t,i.x,s.x,o.x),Po(t,i.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ll=class extends ti{constructor(t=new G,e=new G,n=new G){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new G){let n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(Po(t,i.x,s.x,o.x),Po(t,i.y,s.y,o.y),Po(t,i.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Dl=class extends ti{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new mt){let n=e,i=this.points,s=(i.length-1)*t,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(Ip(a,l.x,c.x,h.x,u.x),Ip(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new mt().fromArray(i))}return this}},Nl=Object.freeze({__proto__:null,ArcCurve:Iu,CatmullRomCurve3:Bo,CubicBezierCurve:Rl,CubicBezierCurve3:Lu,EllipseCurve:Fo,LineCurve:Pl,LineCurve3:Du,QuadraticBezierCurve:Il,QuadraticBezierCurve3:Ll,SplineCurve:Dl}),Nu=class extends ti{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Nl[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),s=0;for(;s<i.length;){if(i[s]>=n){let o=i[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}s++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,s=this.curves;i<s.length;i++){let o=s[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new Nl[i.type]().fromJSON(i))}return this}},wi=class extends Nu{constructor(t){super(),this.type="Path",this.currentPoint=new mt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Pl(this.currentPoint.clone(),new mt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let s=new Il(this.currentPoint.clone(),new mt(t,e),new mt(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,o){let a=new Rl(this.currentPoint.clone(),new mt(t,e),new mt(n,i),new mt(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Dl(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,s,o),this}absarc(t,e,n,i,s,o){return this.absellipse(t,e,n,n,i,s,o),this}ellipse(t,e,n,i,s,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,s,o,a,l),this}absellipse(t,e,n,i,s,o,a,l){let c=new Fo(t,e,n,i,s,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Uu=class r extends Ge{constructor(t=[new mt(0,-.5),new mt(.5,0),new mt(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=Qe(i,0,Math.PI*2);let s=[],o=[],a=[],l=[],c=[],h=1/e,u=new G,d=new mt,f=new G,g=new G,_=new G,p=0,m=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:p=t[M+1].x-t[M].x,m=t[M+1].y-t[M].y,f.x=m*1,f.y=-p,f.z=m*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:p=t[M+1].x-t[M].x,m=t[M+1].y-t[M].y,f.x=m*1,f.y=-p,f.z=m*0,g.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(g)}for(let M=0;M<=e;M++){let x=n+M*h*i,y=Math.sin(x),C=Math.cos(x);for(let T=0;T<=t.length-1;T++){u.x=t[T].x*y,u.y=t[T].y,u.z=t[T].x*C,o.push(u.x,u.y,u.z),d.x=M/e,d.y=T/(t.length-1),a.push(d.x,d.y);let S=l[3*T+0]*y,P=l[3*T+1],z=l[3*T+0]*C;c.push(S,P,z)}}for(let M=0;M<e;M++)for(let x=0;x<t.length-1;x++){let y=x+M*t.length,C=y,T=y+t.length,S=y+t.length+1,P=y+1;s.push(C,T,P),s.push(S,P,T)}this.setIndex(s),this.setAttribute("position",new ie(o,3)),this.setAttribute("uv",new ie(a,2)),this.setAttribute("normal",new ie(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.points,t.segments,t.phiStart,t.phiLength)}},Ul=class r extends Uu{constructor(t=1,e=1,n=4,i=8){let s=new wi;s.absarc(0,-e/2,t,Math.PI*1.5,0),s.absarc(0,e/2,t,0,Math.PI*.5),super(s.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:i}}static fromJSON(t){return new r(t.radius,t.length,t.capSegments,t.radialSegments)}},Ol=class r extends Ge{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let s=[],o=[],a=[],l=[],c=new G,h=new mt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=n+u/e*i;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new ie(o,3)),this.setAttribute("normal",new ie(a,3)),this.setAttribute("uv",new ie(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.segments,t.thetaStart,t.thetaLength)}},zo=class r extends Ge{constructor(t=1,e=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),s=Math.floor(s);let h=[],u=[],d=[],f=[],g=0,_=[],p=n/2,m=0;M(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new ie(u,3)),this.setAttribute("normal",new ie(d,3)),this.setAttribute("uv",new ie(f,2));function M(){let y=new G,C=new G,T=0,S=(e-t)/n;for(let P=0;P<=s;P++){let z=[],v=P/s,w=v*(e-t)+t;for(let F=0;F<=i;F++){let X=F/i,Y=X*l+a,K=Math.sin(Y),V=Math.cos(Y);C.x=w*K,C.y=-v*n+p,C.z=w*V,u.push(C.x,C.y,C.z),y.set(K,S,V).normalize(),d.push(y.x,y.y,y.z),f.push(X,1-v),z.push(g++)}_.push(z)}for(let P=0;P<i;P++)for(let z=0;z<s;z++){let v=_[z][P],w=_[z+1][P],F=_[z+1][P+1],X=_[z][P+1];t>0&&(h.push(v,w,X),T+=3),e>0&&(h.push(w,F,X),T+=3)}c.addGroup(m,T,0),m+=T}function x(y){let C=g,T=new mt,S=new G,P=0,z=y===!0?t:e,v=y===!0?1:-1;for(let F=1;F<=i;F++)u.push(0,p*v,0),d.push(0,v,0),f.push(.5,.5),g++;let w=g;for(let F=0;F<=i;F++){let Y=F/i*l+a,K=Math.cos(Y),V=Math.sin(Y);S.x=z*V,S.y=p*v,S.z=z*K,u.push(S.x,S.y,S.z),d.push(0,v,0),T.x=K*.5+.5,T.y=V*.5*v+.5,f.push(T.x,T.y),g++}for(let F=0;F<i;F++){let X=C+F,Y=w+F;y===!0?h.push(Y,Y+1,X):h.push(Y+1,Y,X),P+=3}c.addGroup(m,P,y===!0?1:2),m+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var dr=class extends wi{constructor(t){super(t),this.uuid=Ks(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new wi().fromJSON(i))}return this}},nS={triangulate:function(r,t,e=2){let n=t&&t.length,i=n?t[0]*e:r.length,s=cm(r,0,i,e,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,c,h,u,d,f;if(n&&(s=aS(r,t,s,e)),r.length>80*e){a=c=r[0],l=h=r[1];for(let g=e;g<i;g+=e)u=r[g],d=r[g+1],u<a&&(a=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-a,h-l),f=f!==0?32767/f:0}return ko(s,o,e,a,l,f,0),o}};function cm(r,t,e,n,i){let s,o;if(i===xS(r,t,e,n)>0)for(s=t;s<e;s+=n)o=Lp(s,r[s],r[s+1],o);else for(s=e-n;s>=t;s-=n)o=Lp(s,r[s],r[s+1],o);return o&&Kl(o,o.next)&&(Ho(o),o=o.next),o}function qr(r,t){if(!r)return r;t||(t=r);let e=r,n;do if(n=!1,!e.steiner&&(Kl(e,e.next)||Pe(e.prev,e,e.next)===0)){if(Ho(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ko(r,t,e,n,i,s,o){if(!r)return;!o&&s&&fS(r,n,i,s);let a=r,l,c;for(;r.prev!==r.next;){if(l=r.prev,c=r.next,s?rS(r,n,i,s):iS(r)){t.push(l.i/e|0),t.push(r.i/e|0),t.push(c.i/e|0),Ho(r),r=c.next,a=c.next;continue}if(r=c,r===a){o?o===1?(r=sS(qr(r),t,e),ko(r,t,e,n,i,s,2)):o===2&&oS(r,t,e,n,i,s):ko(qr(r),t,e,n,i,s,1);break}}}function iS(r){let t=r.prev,e=r,n=r.next;if(Pe(t,e,n)>=0)return!1;let i=t.x,s=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=i<s?i<o?i:o:s<o?s:o,u=a<l?a<c?a:c:l<c?l:c,d=i>s?i>o?i:o:s>o?s:o,f=a>l?a>c?a:c:l>c?l:c,g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&Us(i,a,s,l,o,c,g.x,g.y)&&Pe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function rS(r,t,e,n){let i=r.prev,s=r,o=r.next;if(Pe(i,s,o)>=0)return!1;let a=i.x,l=s.x,c=o.x,h=i.y,u=s.y,d=o.y,f=a<l?a<c?a:c:l<c?l:c,g=h<u?h<d?h:d:u<d?u:d,_=a>l?a>c?a:c:l>c?l:c,p=h>u?h>d?h:d:u>d?u:d,m=Ou(f,g,t,e,n),M=Ou(_,p,t,e,n),x=r.prevZ,y=r.nextZ;for(;x&&x.z>=m&&y&&y.z<=M;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=p&&x!==i&&x!==o&&Us(a,h,l,u,c,d,x.x,x.y)&&Pe(x.prev,x,x.next)>=0||(x=x.prevZ,y.x>=f&&y.x<=_&&y.y>=g&&y.y<=p&&y!==i&&y!==o&&Us(a,h,l,u,c,d,y.x,y.y)&&Pe(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;x&&x.z>=m;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=p&&x!==i&&x!==o&&Us(a,h,l,u,c,d,x.x,x.y)&&Pe(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;y&&y.z<=M;){if(y.x>=f&&y.x<=_&&y.y>=g&&y.y<=p&&y!==i&&y!==o&&Us(a,h,l,u,c,d,y.x,y.y)&&Pe(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function sS(r,t,e){let n=r;do{let i=n.prev,s=n.next.next;!Kl(i,s)&&hm(i,n,n.next,s)&&Vo(i,s)&&Vo(s,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(s.i/e|0),Ho(n),Ho(n.next),n=r=s),n=n.next}while(n!==r);return qr(n)}function oS(r,t,e,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&mS(o,a)){let l=um(o,a);o=qr(o,o.next),l=qr(l,l.next),ko(o,t,e,n,i,s,0),ko(l,t,e,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function aS(r,t,e,n){let i=[],s,o,a,l,c;for(s=0,o=t.length;s<o;s++)a=t[s]*n,l=s<o-1?t[s+1]*n:r.length,c=cm(r,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(pS(c));for(i.sort(lS),s=0;s<i.length;s++)e=cS(i[s],e);return e}function lS(r,t){return r.x-t.x}function cS(r,t){let e=hS(r,t);if(!e)return t;let n=um(e,r);return qr(n,n.next),qr(e,e.next)}function hS(r,t){let e=t,n=-1/0,i,s=r.x,o=r.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=s&&d>n&&(n=d,i=e.x<e.next.x?e:e.next,d===s))return i}e=e.next}while(e!==t);if(!i)return null;let a=i,l=i.x,c=i.y,h=1/0,u;e=i;do s>=e.x&&e.x>=l&&s!==e.x&&Us(o<c?s:n,o,l,c,o<c?n:s,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(s-e.x),Vo(e,r)&&(u<h||u===h&&(e.x>i.x||e.x===i.x&&uS(i,e)))&&(i=e,h=u)),e=e.next;while(e!==a);return i}function uS(r,t){return Pe(r.prev,r,t.prev)<0&&Pe(t.next,r,r.next)<0}function fS(r,t,e,n){let i=r;do i.z===0&&(i.z=Ou(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,dS(i)}function dS(r){let t,e,n,i,s,o,a,l,c=1;do{for(e=r,r=null,s=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;e=n}s.nextZ=null,c*=2}while(o>1);return r}function Ou(r,t,e,n,i){return r=(r-e)*i|0,t=(t-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function pS(r){let t=r,e=r;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==r);return e}function Us(r,t,e,n,i,s,o,a){return(i-o)*(t-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(i-o)*(n-a)}function mS(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!gS(r,t)&&(Vo(r,t)&&Vo(t,r)&&_S(r,t)&&(Pe(r.prev,r,t.prev)||Pe(r,t.prev,t))||Kl(r,t)&&Pe(r.prev,r,r.next)>0&&Pe(t.prev,t,t.next)>0)}function Pe(r,t,e){return(t.y-r.y)*(e.x-t.x)-(t.x-r.x)*(e.y-t.y)}function Kl(r,t){return r.x===t.x&&r.y===t.y}function hm(r,t,e,n){let i=tl(Pe(r,t,e)),s=tl(Pe(r,t,n)),o=tl(Pe(e,n,r)),a=tl(Pe(e,n,t));return!!(i!==s&&o!==a||i===0&&ja(r,e,t)||s===0&&ja(r,n,t)||o===0&&ja(e,r,n)||a===0&&ja(e,t,n))}function ja(r,t,e){return t.x<=Math.max(r.x,e.x)&&t.x>=Math.min(r.x,e.x)&&t.y<=Math.max(r.y,e.y)&&t.y>=Math.min(r.y,e.y)}function tl(r){return r>0?1:r<0?-1:0}function gS(r,t){let e=r;do{if(e.i!==r.i&&e.next.i!==r.i&&e.i!==t.i&&e.next.i!==t.i&&hm(e,e.next,r,t))return!0;e=e.next}while(e!==r);return!1}function Vo(r,t){return Pe(r.prev,r,r.next)<0?Pe(r,t,r.next)>=0&&Pe(r,r.prev,t)>=0:Pe(r,t,r.prev)<0||Pe(r,r.next,t)<0}function _S(r,t){let e=r,n=!1,i=(r.x+t.x)/2,s=(r.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&i<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==r);return n}function um(r,t){let e=new Fu(r.i,r.x,r.y),n=new Fu(t.i,t.x,t.y),i=r.next,s=t.prev;return r.next=t,t.prev=r,e.next=i,i.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function Lp(r,t,e,n){let i=new Fu(r,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Ho(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Fu(r,t,e){this.i=r,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function xS(r,t,e,n){let i=0;for(let s=t,o=e-n;s<e;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}var pr=class r{static area(t){let e=t.length,n=0;for(let i=e-1,s=0;s<e;i=s++)n+=t[i].x*t[s].y-t[s].x*t[i].y;return n*.5}static isClockWise(t){return r.area(t)<0}static triangulateShape(t,e){let n=[],i=[],s=[];Dp(t),Np(n,t);let o=t.length;e.forEach(Dp);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,Np(n,e[l]);let a=nS.triangulate(n,i);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}};function Dp(r){let t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function Np(r,t){for(let e=0;e<t.length;e++)r.push(t[e].x),r.push(t[e].y)}var Fl=class r extends Ge{constructor(t=new dr([new mt(.5,.5),new mt(-.5,.5),new mt(-.5,-.5),new mt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],s=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new ie(i,3)),this.setAttribute("uv",new ie(s,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:yS,x,y=!1,C,T,S,P;m&&(x=m.getSpacedPoints(h),y=!0,d=!1,C=m.computeFrenetFrames(h,!1),T=new G,S=new G,P=new G),d||(p=0,f=0,g=0,_=0);let z=a.extractPoints(c),v=z.shape,w=z.holes;if(!pr.isClockWise(v)){v=v.reverse();for(let Q=0,A=w.length;Q<A;Q++){let q=w[Q];pr.isClockWise(q)&&(w[Q]=q.reverse())}}let X=pr.triangulateShape(v,w),Y=v;for(let Q=0,A=w.length;Q<A;Q++){let q=w[Q];v=v.concat(q)}function K(Q,A,q){return A||console.error("THREE.ExtrudeGeometry: vec does not exist"),Q.clone().addScaledVector(A,q)}let V=v.length,W=X.length;function k(Q,A,q){let tt,rt,B,H=Q.x-A.x,D=Q.y-A.y,R=q.x-Q.x,b=q.y-Q.y,j=H*H+D*D,ct=H*b-D*R;if(Math.abs(ct)>Number.EPSILON){let ut=Math.sqrt(j),ot=Math.sqrt(R*R+b*b),Pt=A.x-D/ut,xt=A.y+H/ut,vt=q.x-b/ot,Vt=q.y+R/ot,_t=((vt-Pt)*b-(Vt-xt)*R)/(H*b-D*R);tt=Pt+H*_t-Q.x,rt=xt+D*_t-Q.y;let Et=tt*tt+rt*rt;if(Et<=2)return new mt(tt,rt);B=Math.sqrt(Et/2)}else{let ut=!1;H>Number.EPSILON?R>Number.EPSILON&&(ut=!0):H<-Number.EPSILON?R<-Number.EPSILON&&(ut=!0):Math.sign(D)===Math.sign(b)&&(ut=!0),ut?(tt=-D,rt=H,B=Math.sqrt(j)):(tt=H,rt=D,B=Math.sqrt(j/2))}return new mt(tt/B,rt/B)}let ht=[];for(let Q=0,A=Y.length,q=A-1,tt=Q+1;Q<A;Q++,q++,tt++)q===A&&(q=0),tt===A&&(tt=0),ht[Q]=k(Y[Q],Y[q],Y[tt]);let U=[],dt,Lt=ht.concat();for(let Q=0,A=w.length;Q<A;Q++){let q=w[Q];dt=[];for(let tt=0,rt=q.length,B=rt-1,H=tt+1;tt<rt;tt++,B++,H++)B===rt&&(B=0),H===rt&&(H=0),dt[tt]=k(q[tt],q[B],q[H]);U.push(dt),Lt=Lt.concat(dt)}for(let Q=0;Q<p;Q++){let A=Q/p,q=f*Math.cos(A*Math.PI/2),tt=g*Math.sin(A*Math.PI/2)+_;for(let rt=0,B=Y.length;rt<B;rt++){let H=K(Y[rt],ht[rt],tt);E(H.x,H.y,-q)}for(let rt=0,B=w.length;rt<B;rt++){let H=w[rt];dt=U[rt];for(let D=0,R=H.length;D<R;D++){let b=K(H[D],dt[D],tt);E(b.x,b.y,-q)}}}let Ht=g+_;for(let Q=0;Q<V;Q++){let A=d?K(v[Q],Lt[Q],Ht):v[Q];y?(S.copy(C.normals[0]).multiplyScalar(A.x),T.copy(C.binormals[0]).multiplyScalar(A.y),P.copy(x[0]).add(S).add(T),E(P.x,P.y,P.z)):E(A.x,A.y,0)}for(let Q=1;Q<=h;Q++)for(let A=0;A<V;A++){let q=d?K(v[A],Lt[A],Ht):v[A];y?(S.copy(C.normals[Q]).multiplyScalar(q.x),T.copy(C.binormals[Q]).multiplyScalar(q.y),P.copy(x[Q]).add(S).add(T),E(P.x,P.y,P.z)):E(q.x,q.y,u/h*Q)}for(let Q=p-1;Q>=0;Q--){let A=Q/p,q=f*Math.cos(A*Math.PI/2),tt=g*Math.sin(A*Math.PI/2)+_;for(let rt=0,B=Y.length;rt<B;rt++){let H=K(Y[rt],ht[rt],tt);E(H.x,H.y,u+q)}for(let rt=0,B=w.length;rt<B;rt++){let H=w[rt];dt=U[rt];for(let D=0,R=H.length;D<R;D++){let b=K(H[D],dt[D],tt);y?E(b.x,b.y+x[h-1].y,x[h-1].x+q):E(b.x,b.y,u+q)}}}O(),N();function O(){let Q=i.length/3;if(d){let A=0,q=V*A;for(let tt=0;tt<W;tt++){let rt=X[tt];nt(rt[2]+q,rt[1]+q,rt[0]+q)}A=h+p*2,q=V*A;for(let tt=0;tt<W;tt++){let rt=X[tt];nt(rt[0]+q,rt[1]+q,rt[2]+q)}}else{for(let A=0;A<W;A++){let q=X[A];nt(q[2],q[1],q[0])}for(let A=0;A<W;A++){let q=X[A];nt(q[0]+V*h,q[1]+V*h,q[2]+V*h)}}n.addGroup(Q,i.length/3-Q,0)}function N(){let Q=i.length/3,A=0;L(Y,A),A+=Y.length;for(let q=0,tt=w.length;q<tt;q++){let rt=w[q];L(rt,A),A+=rt.length}n.addGroup(Q,i.length/3-Q,1)}function L(Q,A){let q=Q.length;for(;--q>=0;){let tt=q,rt=q-1;rt<0&&(rt=Q.length-1);for(let B=0,H=h+p*2;B<H;B++){let D=V*B,R=V*(B+1),b=A+tt+D,j=A+rt+D,ct=A+rt+R,ut=A+tt+R;at(b,j,ct,ut)}}}function E(Q,A,q){l.push(Q),l.push(A),l.push(q)}function nt(Q,A,q){et(Q),et(A),et(q);let tt=i.length/3,rt=M.generateTopUV(n,i,tt-3,tt-2,tt-1);ft(rt[0]),ft(rt[1]),ft(rt[2])}function at(Q,A,q,tt){et(Q),et(A),et(tt),et(A),et(q),et(tt);let rt=i.length/3,B=M.generateSideWallUV(n,i,rt-6,rt-3,rt-2,rt-1);ft(B[0]),ft(B[1]),ft(B[3]),ft(B[1]),ft(B[2]),ft(B[3])}function et(Q){i.push(l[Q*3+0]),i.push(l[Q*3+1]),i.push(l[Q*3+2])}function ft(Q){s.push(Q.x),s.push(Q.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return vS(e,n,t)}static fromJSON(t,e){let n=[];for(let s=0,o=t.shapes.length;s<o;s++){let a=e[t.shapes[s]];n.push(a)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Nl[i.type]().fromJSON(i)),new r(n,t.options)}},yS={generateTopUV:function(r,t,e,n,i){let s=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new mt(s,o),new mt(a,l),new mt(c,h)]},generateSideWallUV:function(r,t,e,n,i,s){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[i*3],f=t[i*3+1],g=t[i*3+2],_=t[s*3],p=t[s*3+1],m=t[s*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new mt(o,1-l),new mt(c,1-u),new mt(d,1-g),new mt(_,1-m)]:[new mt(a,1-l),new mt(h,1-u),new mt(f,1-g),new mt(p,1-m)]}};function vS(r,t,e){if(e.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){let s=r[n];e.shapes.push(s.uuid)}else e.shapes.push(r.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Go=class r extends Ge{constructor(t=.5,e=1,n=32,i=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);let a=[],l=[],c=[],h=[],u=t,d=(e-t)/i,f=new G,g=new mt;for(let _=0;_<=i;_++){for(let p=0;p<=n;p++){let m=s+p/n*o;f.x=u*Math.cos(m),f.y=u*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let _=0;_<i;_++){let p=_*(n+1);for(let m=0;m<n;m++){let M=m+p,x=M,y=M+n+1,C=M+n+2,T=M+1;a.push(x,y,T),a.push(y,C,T)}}this.setIndex(a),this.setAttribute("position",new ie(l,3)),this.setAttribute("normal",new ie(c,3)),this.setAttribute("uv",new ie(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Zr=class r extends Ge{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new G,d=new G,f=[],g=[],_=[],p=[];for(let m=0;m<=n;m++){let M=[],x=m/n,y=0;m===0&&o===0?y=.5/e:m===n&&l===Math.PI&&(y=-.5/e);for(let C=0;C<=e;C++){let T=C/e;u.x=-t*Math.cos(i+T*s)*Math.sin(o+x*a),u.y=t*Math.cos(o+x*a),u.z=t*Math.sin(i+T*s)*Math.sin(o+x*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),p.push(T+y,1-x),M.push(c++)}h.push(M)}for(let m=0;m<n;m++)for(let M=0;M<e;M++){let x=h[m][M+1],y=h[m][M],C=h[m+1][M],T=h[m+1][M+1];(m!==0||o>0)&&f.push(x,y,T),(m!==n-1||l<Math.PI)&&f.push(y,C,T)}this.setIndex(f),this.setAttribute("position",new ie(g,3)),this.setAttribute("normal",new ie(_,3)),this.setAttribute("uv",new ie(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Bl=class r extends Ge{constructor(t=1,e=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],l=[],c=[],h=new G,u=new G,d=new G;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){let _=g/i*s,p=f/n*Math.PI*2;u.x=(t+e*Math.cos(p))*Math.cos(_),u.y=(t+e*Math.cos(p))*Math.sin(_),u.z=e*Math.sin(p),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){let _=(i+1)*f+g-1,p=(i+1)*(f-1)+g-1,m=(i+1)*(f-1)+g,M=(i+1)*f+g;o.push(_,p,M),o.push(p,m,M)}this.setIndex(o),this.setAttribute("position",new ie(a,3)),this.setAttribute("normal",new ie(l,3)),this.setAttribute("uv",new ie(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Wo=class r extends Ge{constructor(t=new Ll(new G(-1,-1,0),new G(-1,1,0),new G(1,1,0)),e=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:s};let o=t.computeFrenetFrames(e,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new G,l=new G,c=new mt,h=new G,u=[],d=[],f=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new ie(u,3)),this.setAttribute("normal",new ie(d,3)),this.setAttribute("uv",new ie(f,2));function _(){for(let x=0;x<e;x++)p(x);p(s===!1?e:0),M(),m()}function p(x){h=t.getPointAt(x/e,h);let y=o.normals[x],C=o.binormals[x];for(let T=0;T<=i;T++){let S=T/i*Math.PI*2,P=Math.sin(S),z=-Math.cos(S);l.x=z*y.x+P*C.x,l.y=z*y.y+P*C.y,l.z=z*y.z+P*C.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function m(){for(let x=1;x<=e;x++)for(let y=1;y<=i;y++){let C=(i+1)*(x-1)+(y-1),T=(i+1)*x+(y-1),S=(i+1)*x+y,P=(i+1)*(x-1)+y;g.push(C,T,P),g.push(T,S,P)}}function M(){for(let x=0;x<=e;x++)for(let y=0;y<=i;y++)c.x=x/e,c.y=y/i,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new r(new Nl[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var zl=class extends Xi{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Qt(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}};var gi=class extends Xi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jp,this.normalScale=new mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Jr=class extends gi{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new mt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Qe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Qt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Qt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Qt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};function el(r,t,e){return!r||!e&&r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function MS(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}var Js=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],s=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=e[--n-1],t>=s)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let o=0;o!==i;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Bu=class extends Js{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Fd,endingEnd:Fd}}intervalChanged_(t,e,n){let i=this.parameterPositions,s=t-2,o=t+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Bd:s=t,a=2*e-n;break;case zd:s=i.length-2,a=e+i[s]-i[s+1];break;default:s=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Bd:o=t,l=2*n-e;break;case zd:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-e)/(i-e),_=g*g,p=_*g,m=-d*p+2*d*_-d*g,M=(1+d)*p+(-1.5-2*d)*_+(-.5+d)*g+1,x=(-1-f)*p+(1.5+f)*_+.5*g,y=f*p-f*_;for(let C=0;C!==a;++C)s[C]=m*o[h+C]+M*o[c+C]+x*o[l+C]+y*o[u+C];return s}},zu=class extends Js{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),u=1-h;for(let d=0;d!==a;++d)s[d]=o[c+d]*u+o[l+d]*h;return s}},ku=class extends Js{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},_i=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=el(e,this.TimeBufferType),this.values=el(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:el(t.times,Array),values:el(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ku(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new zu(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Bu(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case ll:e=this.InterpolantFactoryMethodDiscrete;break;case du:e=this.InterpolantFactoryMethodLinear;break;case qc:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ll;case this.InterpolantFactoryMethodLinear:return du;case this.InterpolantFactoryMethodSmooth:return qc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,s=0,o=i-1;for(;s!==i&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&MS(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===qc,s=t.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{let u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let _=e[u+g];if(_!==e[d+g]||_!==e[f+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};_i.prototype.TimeBufferType=Float32Array;_i.prototype.ValueBufferType=Float32Array;_i.prototype.DefaultInterpolation=du;var $r=class extends _i{constructor(t,e,n){super(t,e,n)}};$r.prototype.ValueTypeName="bool";$r.prototype.ValueBufferType=Array;$r.prototype.DefaultInterpolation=ll;$r.prototype.InterpolantFactoryMethodLinear=void 0;$r.prototype.InterpolantFactoryMethodSmooth=void 0;var Vu=class extends _i{};Vu.prototype.ValueTypeName="color";var Hu=class extends _i{};Hu.prototype.ValueTypeName="number";var Gu=class extends Js{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),c=t*a;for(let h=c+a;c!==h;c+=4)_r.slerpFlat(s,0,o,c-a,o,c,l);return s}},kl=class extends _i{InterpolantFactoryMethodLinear(t){return new Gu(this.times,this.values,this.getValueSize(),t)}};kl.prototype.ValueTypeName="quaternion";kl.prototype.InterpolantFactoryMethodSmooth=void 0;var Kr=class extends _i{constructor(t,e,n){super(t,e,n)}};Kr.prototype.ValueTypeName="string";Kr.prototype.ValueBufferType=Array;Kr.prototype.DefaultInterpolation=ll;Kr.prototype.InterpolantFactoryMethodLinear=void 0;Kr.prototype.InterpolantFactoryMethodSmooth=void 0;var Wu=class extends _i{};Wu.prototype.ValueTypeName="vector";var Up={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}},Xu=class{constructor(t,e,n){let i=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},SS=new Xu,$s=class{constructor(t){this.manager=t!==void 0?t:SS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};$s.DEFAULT_MATERIAL_NAME="__DEFAULT";var Bi={},Yu=class extends Error{constructor(t,e){super(t),this.response=e}},Vl=class extends $s{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let s=Up.get(t);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(Bi[t]!==void 0){Bi[t].push({onLoad:e,onProgress:n,onError:i});return}Bi[t]=[],Bi[t].push({onLoad:e,onProgress:n,onError:i});let o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||c.body===void 0||c.body.getReader===void 0)return c;let h=Bi[t],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0,_=0,p=new ReadableStream({start(m){M();function M(){u.read().then(({done:x,value:y})=>{if(x)m.close();else{_+=y.byteLength;let C=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let T=0,S=h.length;T<S;T++){let P=h[T];P.onProgress&&P.onProgress(C)}m.enqueue(y),M()}},x=>{m.error(x)})}}});return new Response(p)}else throw new Yu(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{Up.add(t,c);let h=Bi[t];delete Bi[t];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{let h=Bi[t];if(h===void 0)throw this.manager.itemError(t),c;delete Bi[t];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}};var Xo=class extends pn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Qt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Hl=class extends Xo{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(pn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Qt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Ah=new Ce,Op=new G,Fp=new G,Gl=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new mt(512,512),this.map=null,this.mapPass=null,this.matrix=new Ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new No,this._frameExtents=new mt(1,1),this._viewportCount=1,this._viewports=[new ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Op.setFromMatrixPosition(t.matrixWorld),e.position.copy(Op),Fp.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Fp),e.updateMatrixWorld(),Ah.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ah),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ah)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Bp=new Ce,Ao=new G,Ch=new G,qu=class extends Gl{constructor(){super(new fn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new mt(4,2),this._viewportCount=6,this._viewports=[new ge(2,1,1,1),new ge(0,1,1,1),new ge(3,1,1,1),new ge(1,1,1,1),new ge(3,0,1,1),new ge(1,0,1,1)],this._cubeDirections=[new G(1,0,0),new G(-1,0,0),new G(0,0,1),new G(0,0,-1),new G(0,1,0),new G(0,-1,0)],this._cubeUps=[new G(0,1,0),new G(0,1,0),new G(0,1,0),new G(0,1,0),new G(0,0,1),new G(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Ao.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ao),Ch.copy(n.position),Ch.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Ch),n.updateMatrixWorld(),i.makeTranslation(-Ao.x,-Ao.y,-Ao.z),Bp.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bp)}},Wl=class extends Xo{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new qu}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Zu=class extends Gl{constructor(){super(new Sl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Yo=class extends Xo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pn.DEFAULT_UP),this.updateMatrix(),this.target=new pn,this.shadow=new Zu}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Xl=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=zp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=zp();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function zp(){return performance.now()}var cf="\\[\\]\\.:\\/",bS=new RegExp("["+cf+"]","g"),hf="[^"+cf+"]",wS="[^"+cf.replace("\\.","")+"]",TS=/((?:WC+[\/:])*)/.source.replace("WC",hf),ES=/(WCOD+)?/.source.replace("WCOD",wS),AS=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",hf),CS=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",hf),RS=new RegExp("^"+TS+ES+AS+CS+"$"),PS=["material","materials","bones","map"],Ju=class{constructor(t,e,n){let i=n||Ae.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ae=class r{constructor(t,e,n){this.path=e,this.parsedPath=n||r.parseTrackName(e),this.node=r.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new r.Composite(t,e,n):new r(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(bS,"")}static parseTrackName(t){let e=RS.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);PS.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,s=e.propertyIndex;if(t||(t=r.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[i];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ae.Composite=Ju;Ae.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ae.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ae.prototype.GetterByBindingType=[Ae.prototype._getValue_direct,Ae.prototype._getValue_array,Ae.prototype._getValue_arrayElement,Ae.prototype._getValue_toArray];Ae.prototype.SetterByBindingTypeAndVersioning=[[Ae.prototype._setValue_direct,Ae.prototype._setValue_direct_setNeedsUpdate,Ae.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_array,Ae.prototype._setValue_array_setNeedsUpdate,Ae.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_arrayElement,Ae.prototype._setValue_arrayElement_setNeedsUpdate,Ae.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_fromArray,Ae.prototype._setValue_fromArray_setNeedsUpdate,Ae.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ub=new Float32Array(1);var kp=new mt,Yl=class{constructor(t=new mt(1/0,1/0),e=new mt(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=kp.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,kp).distanceTo(t)}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}};var Ti=class{constructor(){this.type="ShapePath",this.color=new Qt,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new wi,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,i){return this.currentPath.quadraticCurveTo(t,e,n,i),this}bezierCurveTo(t,e,n,i,s,o){return this.currentPath.bezierCurveTo(t,e,n,i,s,o),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function e(m){let M=[];for(let x=0,y=m.length;x<y;x++){let C=m[x],T=new dr;T.curves=C.curves,M.push(T)}return M}function n(m,M){let x=M.length,y=!1;for(let C=x-1,T=0;T<x;C=T++){let S=M[C],P=M[T],z=P.x-S.x,v=P.y-S.y;if(Math.abs(v)>Number.EPSILON){if(v<0&&(S=M[T],z=-z,P=M[C],v=-v),m.y<S.y||m.y>P.y)continue;if(m.y===S.y){if(m.x===S.x)return!0}else{let w=v*(m.x-S.x)-z*(m.y-S.y);if(w===0)return!0;if(w<0)continue;y=!y}}else{if(m.y!==S.y)continue;if(P.x<=m.x&&m.x<=S.x||S.x<=m.x&&m.x<=P.x)return!0}}return y}let i=pr.isClockWise,s=this.subPaths;if(s.length===0)return[];let o,a,l,c=[];if(s.length===1)return a=s[0],l=new dr,l.curves=a.curves,c.push(l),c;let h=!i(s[0].getPoints());h=t?!h:h;let u=[],d=[],f=[],g=0,_;d[g]=void 0,f[g]=[];for(let m=0,M=s.length;m<M;m++)a=s[m],_=a.getPoints(),o=i(_),o=t?!o:o,o?(!h&&d[g]&&g++,d[g]={s:new dr,p:_},d[g].s.curves=a.curves,h&&g++,f[g]=[]):f[g].push({h:a,p:_[0]});if(!d[0])return e(s);if(d.length>1){let m=!1,M=0;for(let x=0,y=d.length;x<y;x++)u[x]=[];for(let x=0,y=d.length;x<y;x++){let C=f[x];for(let T=0;T<C.length;T++){let S=C[T],P=!0;for(let z=0;z<d.length;z++)n(S.p,d[z].p)&&(x!==z&&M++,P?(P=!1,u[z].push(S)):m=!0);P&&u[x].push(S)}}M>0&&m===!1&&(f=u)}let p;for(let m=0,M=d.length;m<M;m++){l=d[m].s,c.push(l),p=f[m];for(let x=0,y=p.length;x<y;x++)l.holes.push(p[x].h)}return c}};typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$u}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$u);var Zo=new G;function ei(r,t,e,n,i,s){let o=2*Math.PI*i/4,a=Math.max(s-2*i,0),l=Math.PI/4;Zo.copy(t),Zo[n]=0,Zo.normalize();let c=.5*o/(o+a),h=1-Zo.angleTo(r)/l;return Math.sign(Zo[e])===1?h*c:a/(o+a)+c+c*(1-h)}var tn=class extends Yi{constructor(t=1,e=1,n=1,i=2,s=.1){if(i=i*2+1,s=Math.min(t/2,e/2,n/2,s),super(1,1,1,i,i,i),i===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new G,l=new G,c=new G(t,e,n).divideScalar(2).subScalar(s),h=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,f=h.length/6,g=new G,_=.5/i;for(let p=0,m=0;p<h.length;p+=3,m+=2)switch(a.fromArray(h,p),l.copy(a),l.x-=Math.sign(l.x)*_,l.y-=Math.sign(l.y)*_,l.z-=Math.sign(l.z)*_,l.normalize(),h[p+0]=c.x*Math.sign(a.x)+l.x*s,h[p+1]=c.y*Math.sign(a.y)+l.y*s,h[p+2]=c.z*Math.sign(a.z)+l.z*s,u[p+0]=l.x,u[p+1]=l.y,u[p+2]=l.z,Math.floor(p/f)){case 0:g.set(1,0,0),d[m+0]=ei(g,l,"z","y",s,n),d[m+1]=1-ei(g,l,"y","z",s,e);break;case 1:g.set(-1,0,0),d[m+0]=1-ei(g,l,"z","y",s,n),d[m+1]=1-ei(g,l,"y","z",s,e);break;case 2:g.set(0,1,0),d[m+0]=1-ei(g,l,"x","z",s,t),d[m+1]=ei(g,l,"z","x",s,n);break;case 3:g.set(0,-1,0),d[m+0]=1-ei(g,l,"x","z",s,t),d[m+1]=1-ei(g,l,"z","x",s,n);break;case 4:g.set(0,0,1),d[m+0]=1-ei(g,l,"x","y",s,t),d[m+1]=1-ei(g,l,"y","x",s,e);break;case 5:g.set(0,0,-1),d[m+0]=ei(g,l,"x","y",s,t),d[m+1]=1-ei(g,l,"y","x",s,e);break}}};var Ql=class extends Zs{constructor(){super();let t=new Yi;t.deleteAttribute("uv");let e=new gi({side:je}),n=new gi,i=new Wl(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let s=new le(t,e);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);let o=new le(t,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);let a=new le(t,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);let l=new le(t,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);let c=new le(t,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);let h=new le(t,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);let u=new le(t,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);let d=new le(t,js(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);let f=new le(t,js(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);let g=new le(t,js(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);let _=new le(t,js(43));_.position.set(-.462,8.89,14.52),_.scale.set(4.38,5.441,.088),this.add(_);let p=new le(t,js(20));p.position.set(3.235,11.486,-12.541),p.scale.set(2.5,2,.1),this.add(p);let m=new le(t,js(100));m.position.set(0,20,0),m.scale.set(1,.1,1),this.add(m)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function js(r){let t=new jn;return t.color.setScalar(r),t}var LS=un,Jo=class r extends $s{constructor(t){super(t),this.defaultDPI=90,this.defaultUnit="px"}load(t,e,n,i){let s=this,o=new Vl(s.manager);o.setPath(s.path),o.setRequestHeader(s.requestHeader),o.setWithCredentials(s.withCredentials),o.load(t,function(a){try{e(s.parse(a))}catch(l){i?i(l):console.error(l),s.manager.itemError(t)}},n,i)}parse(t){let e=this;function n(O,N){if(O.nodeType!==1)return;let L=y(O),E=!1,nt=null;switch(O.nodeName){case"svg":N=g(O,N);break;case"style":s(O);break;case"g":N=g(O,N);break;case"path":N=g(O,N),O.hasAttribute("d")&&(nt=i(O));break;case"rect":N=g(O,N),nt=l(O);break;case"polygon":N=g(O,N),nt=c(O);break;case"polyline":N=g(O,N),nt=h(O);break;case"circle":N=g(O,N),nt=u(O);break;case"ellipse":N=g(O,N),nt=d(O);break;case"line":N=g(O,N),nt=f(O);break;case"defs":E=!0;break;case"use":N=g(O,N);let ft=(O.getAttributeNS("http://www.w3.org/1999/xlink","href")||"").substring(1),Q=O.viewportElement.getElementById(ft);Q?n(Q,N):console.warn("SVGLoader: 'use node' references non-existent node id: "+ft);break;default:}nt&&(N.fill!==void 0&&N.fill!=="none"&&nt.color.setStyle(N.fill,LS),T(nt,dt),F.push(nt),nt.userData={node:O,style:N});let at=O.childNodes;for(let et=0;et<at.length;et++){let ft=at[et];E&&ft.nodeName!=="style"&&ft.nodeName!=="defs"||n(ft,N)}L&&(Y.pop(),Y.length>0?dt.copy(Y[Y.length-1]):dt.identity())}function i(O){let N=new Ti,L=new mt,E=new mt,nt=new mt,at=!0,et=!1,ft=O.getAttribute("d");if(ft===""||ft==="none")return null;let Q=ft.match(/[a-df-z][^a-df-z]*/ig);for(let A=0,q=Q.length;A<q;A++){let tt=Q[A],rt=tt.charAt(0),B=tt.slice(1).trim();at===!0&&(et=!0,at=!1);let H;switch(rt){case"M":H=p(B);for(let D=0,R=H.length;D<R;D+=2)L.x=H[D+0],L.y=H[D+1],E.x=L.x,E.y=L.y,D===0?N.moveTo(L.x,L.y):N.lineTo(L.x,L.y),D===0&&nt.copy(L);break;case"H":H=p(B);for(let D=0,R=H.length;D<R;D++)L.x=H[D],E.x=L.x,E.y=L.y,N.lineTo(L.x,L.y),D===0&&et===!0&&nt.copy(L);break;case"V":H=p(B);for(let D=0,R=H.length;D<R;D++)L.y=H[D],E.x=L.x,E.y=L.y,N.lineTo(L.x,L.y),D===0&&et===!0&&nt.copy(L);break;case"L":H=p(B);for(let D=0,R=H.length;D<R;D+=2)L.x=H[D+0],L.y=H[D+1],E.x=L.x,E.y=L.y,N.lineTo(L.x,L.y),D===0&&et===!0&&nt.copy(L);break;case"C":H=p(B);for(let D=0,R=H.length;D<R;D+=6)N.bezierCurveTo(H[D+0],H[D+1],H[D+2],H[D+3],H[D+4],H[D+5]),E.x=H[D+2],E.y=H[D+3],L.x=H[D+4],L.y=H[D+5],D===0&&et===!0&&nt.copy(L);break;case"S":H=p(B);for(let D=0,R=H.length;D<R;D+=4)N.bezierCurveTo(_(L.x,E.x),_(L.y,E.y),H[D+0],H[D+1],H[D+2],H[D+3]),E.x=H[D+0],E.y=H[D+1],L.x=H[D+2],L.y=H[D+3],D===0&&et===!0&&nt.copy(L);break;case"Q":H=p(B);for(let D=0,R=H.length;D<R;D+=4)N.quadraticCurveTo(H[D+0],H[D+1],H[D+2],H[D+3]),E.x=H[D+0],E.y=H[D+1],L.x=H[D+2],L.y=H[D+3],D===0&&et===!0&&nt.copy(L);break;case"T":H=p(B);for(let D=0,R=H.length;D<R;D+=2){let b=_(L.x,E.x),j=_(L.y,E.y);N.quadraticCurveTo(b,j,H[D+0],H[D+1]),E.x=b,E.y=j,L.x=H[D+0],L.y=H[D+1],D===0&&et===!0&&nt.copy(L)}break;case"A":H=p(B,[3,4],7);for(let D=0,R=H.length;D<R;D+=7){if(H[D+5]==L.x&&H[D+6]==L.y)continue;let b=L.clone();L.x=H[D+5],L.y=H[D+6],E.x=L.x,E.y=L.y,o(N,H[D],H[D+1],H[D+2],H[D+3],H[D+4],b,L),D===0&&et===!0&&nt.copy(L)}break;case"m":H=p(B);for(let D=0,R=H.length;D<R;D+=2)L.x+=H[D+0],L.y+=H[D+1],E.x=L.x,E.y=L.y,D===0?N.moveTo(L.x,L.y):N.lineTo(L.x,L.y),D===0&&nt.copy(L);break;case"h":H=p(B);for(let D=0,R=H.length;D<R;D++)L.x+=H[D],E.x=L.x,E.y=L.y,N.lineTo(L.x,L.y),D===0&&et===!0&&nt.copy(L);break;case"v":H=p(B);for(let D=0,R=H.length;D<R;D++)L.y+=H[D],E.x=L.x,E.y=L.y,N.lineTo(L.x,L.y),D===0&&et===!0&&nt.copy(L);break;case"l":H=p(B);for(let D=0,R=H.length;D<R;D+=2)L.x+=H[D+0],L.y+=H[D+1],E.x=L.x,E.y=L.y,N.lineTo(L.x,L.y),D===0&&et===!0&&nt.copy(L);break;case"c":H=p(B);for(let D=0,R=H.length;D<R;D+=6)N.bezierCurveTo(L.x+H[D+0],L.y+H[D+1],L.x+H[D+2],L.y+H[D+3],L.x+H[D+4],L.y+H[D+5]),E.x=L.x+H[D+2],E.y=L.y+H[D+3],L.x+=H[D+4],L.y+=H[D+5],D===0&&et===!0&&nt.copy(L);break;case"s":H=p(B);for(let D=0,R=H.length;D<R;D+=4)N.bezierCurveTo(_(L.x,E.x),_(L.y,E.y),L.x+H[D+0],L.y+H[D+1],L.x+H[D+2],L.y+H[D+3]),E.x=L.x+H[D+0],E.y=L.y+H[D+1],L.x+=H[D+2],L.y+=H[D+3],D===0&&et===!0&&nt.copy(L);break;case"q":H=p(B);for(let D=0,R=H.length;D<R;D+=4)N.quadraticCurveTo(L.x+H[D+0],L.y+H[D+1],L.x+H[D+2],L.y+H[D+3]),E.x=L.x+H[D+0],E.y=L.y+H[D+1],L.x+=H[D+2],L.y+=H[D+3],D===0&&et===!0&&nt.copy(L);break;case"t":H=p(B);for(let D=0,R=H.length;D<R;D+=2){let b=_(L.x,E.x),j=_(L.y,E.y);N.quadraticCurveTo(b,j,L.x+H[D+0],L.y+H[D+1]),E.x=b,E.y=j,L.x=L.x+H[D+0],L.y=L.y+H[D+1],D===0&&et===!0&&nt.copy(L)}break;case"a":H=p(B,[3,4],7);for(let D=0,R=H.length;D<R;D+=7){if(H[D+5]==0&&H[D+6]==0)continue;let b=L.clone();L.x+=H[D+5],L.y+=H[D+6],E.x=L.x,E.y=L.y,o(N,H[D],H[D+1],H[D+2],H[D+3],H[D+4],b,L),D===0&&et===!0&&nt.copy(L)}break;case"Z":case"z":N.currentPath.autoClose=!0,N.currentPath.curves.length>0&&(L.copy(nt),N.currentPath.currentPoint.copy(L),at=!0);break;default:console.warn(tt)}et=!1}return N}function s(O){if(!(!O.sheet||!O.sheet.cssRules||!O.sheet.cssRules.length))for(let N=0;N<O.sheet.cssRules.length;N++){let L=O.sheet.cssRules[N];if(L.type!==1)continue;let E=L.selectorText.split(/,/gm).filter(Boolean).map(nt=>nt.trim());for(let nt=0;nt<E.length;nt++){let at=Object.fromEntries(Object.entries(L.style).filter(([,et])=>et!==""));X[E[nt]]=Object.assign(X[E[nt]]||{},at)}}}function o(O,N,L,E,nt,at,et,ft){if(N==0||L==0){O.lineTo(ft.x,ft.y);return}E=E*Math.PI/180,N=Math.abs(N),L=Math.abs(L);let Q=(et.x-ft.x)/2,A=(et.y-ft.y)/2,q=Math.cos(E)*Q+Math.sin(E)*A,tt=-Math.sin(E)*Q+Math.cos(E)*A,rt=N*N,B=L*L,H=q*q,D=tt*tt,R=H/rt+D/B;if(R>1){let _t=Math.sqrt(R);N=_t*N,L=_t*L,rt=N*N,B=L*L}let b=rt*D+B*H,j=(rt*B-b)/b,ct=Math.sqrt(Math.max(0,j));nt===at&&(ct=-ct);let ut=ct*N*tt/L,ot=-ct*L*q/N,Pt=Math.cos(E)*ut-Math.sin(E)*ot+(et.x+ft.x)/2,xt=Math.sin(E)*ut+Math.cos(E)*ot+(et.y+ft.y)/2,vt=a(1,0,(q-ut)/N,(tt-ot)/L),Vt=a((q-ut)/N,(tt-ot)/L,(-q-ut)/N,(-tt-ot)/L)%(Math.PI*2);O.currentPath.absellipse(Pt,xt,N,L,vt,vt+Vt,at===0,E)}function a(O,N,L,E){let nt=O*L+N*E,at=Math.sqrt(O*O+N*N)*Math.sqrt(L*L+E*E),et=Math.acos(Math.max(-1,Math.min(1,nt/at)));return O*E-N*L<0&&(et=-et),et}function l(O){let N=x(O.getAttribute("x")||0),L=x(O.getAttribute("y")||0),E=x(O.getAttribute("rx")||O.getAttribute("ry")||0),nt=x(O.getAttribute("ry")||O.getAttribute("rx")||0),at=x(O.getAttribute("width")),et=x(O.getAttribute("height")),ft=1-.551915024494,Q=new Ti;return Q.moveTo(N+E,L),Q.lineTo(N+at-E,L),(E!==0||nt!==0)&&Q.bezierCurveTo(N+at-E*ft,L,N+at,L+nt*ft,N+at,L+nt),Q.lineTo(N+at,L+et-nt),(E!==0||nt!==0)&&Q.bezierCurveTo(N+at,L+et-nt*ft,N+at-E*ft,L+et,N+at-E,L+et),Q.lineTo(N+E,L+et),(E!==0||nt!==0)&&Q.bezierCurveTo(N+E*ft,L+et,N,L+et-nt*ft,N,L+et-nt),Q.lineTo(N,L+nt),(E!==0||nt!==0)&&Q.bezierCurveTo(N,L+nt*ft,N+E*ft,L,N+E,L),Q}function c(O){function N(at,et,ft){let Q=x(et),A=x(ft);nt===0?E.moveTo(Q,A):E.lineTo(Q,A),nt++}let L=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,E=new Ti,nt=0;return O.getAttribute("points").replace(L,N),E.currentPath.autoClose=!0,E}function h(O){function N(at,et,ft){let Q=x(et),A=x(ft);nt===0?E.moveTo(Q,A):E.lineTo(Q,A),nt++}let L=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,E=new Ti,nt=0;return O.getAttribute("points").replace(L,N),E.currentPath.autoClose=!1,E}function u(O){let N=x(O.getAttribute("cx")||0),L=x(O.getAttribute("cy")||0),E=x(O.getAttribute("r")||0),nt=new wi;nt.absarc(N,L,E,0,Math.PI*2);let at=new Ti;return at.subPaths.push(nt),at}function d(O){let N=x(O.getAttribute("cx")||0),L=x(O.getAttribute("cy")||0),E=x(O.getAttribute("rx")||0),nt=x(O.getAttribute("ry")||0),at=new wi;at.absellipse(N,L,E,nt,0,Math.PI*2);let et=new Ti;return et.subPaths.push(at),et}function f(O){let N=x(O.getAttribute("x1")||0),L=x(O.getAttribute("y1")||0),E=x(O.getAttribute("x2")||0),nt=x(O.getAttribute("y2")||0),at=new Ti;return at.moveTo(N,L),at.lineTo(E,nt),at.currentPath.autoClose=!1,at}function g(O,N){N=Object.assign({},N);let L={};if(O.hasAttribute("class")){let et=O.getAttribute("class").split(/\s/).filter(Boolean).map(ft=>ft.trim());for(let ft=0;ft<et.length;ft++)L=Object.assign(L,X["."+et[ft]])}O.hasAttribute("id")&&(L=Object.assign(L,X["#"+O.getAttribute("id")]));function E(et,ft,Q){Q===void 0&&(Q=function(q){return q.startsWith("url")&&console.warn("SVGLoader: url access in attributes is not implemented."),q}),O.hasAttribute(et)&&(N[ft]=Q(O.getAttribute(et))),L[et]&&(N[ft]=Q(L[et])),O.style&&O.style[et]!==""&&(N[ft]=Q(O.style[et]))}function nt(et){return Math.max(0,Math.min(1,x(et)))}function at(et){return Math.max(0,x(et))}return E("fill","fill"),E("fill-opacity","fillOpacity",nt),E("fill-rule","fillRule"),E("opacity","opacity",nt),E("stroke","stroke"),E("stroke-opacity","strokeOpacity",nt),E("stroke-width","strokeWidth",at),E("stroke-linejoin","strokeLineJoin"),E("stroke-linecap","strokeLineCap"),E("stroke-miterlimit","strokeMiterLimit",at),E("visibility","visibility"),N}function _(O,N){return O-(N-O)}function p(O,N,L){if(typeof O!="string")throw new TypeError("Invalid input: "+typeof O);let E={SEPARATOR:/[ \t\r\n\,.\-+]/,WHITESPACE:/[ \t\r\n]/,DIGIT:/[\d]/,SIGN:/[-+]/,POINT:/\./,COMMA:/,/,EXP:/e/i,FLAGS:/[01]/},nt=0,at=1,et=2,ft=3,Q=nt,A=!0,q="",tt="",rt=[];function B(b,j,ct){let ut=new SyntaxError('Unexpected character "'+b+'" at index '+j+".");throw ut.partial=ct,ut}function H(){q!==""&&(tt===""?rt.push(Number(q)):rt.push(Number(q)*Math.pow(10,Number(tt)))),q="",tt=""}let D,R=O.length;for(let b=0;b<R;b++){if(D=O[b],Array.isArray(N)&&N.includes(rt.length%L)&&E.FLAGS.test(D)){Q=at,q=D,H();continue}if(Q===nt){if(E.WHITESPACE.test(D))continue;if(E.DIGIT.test(D)||E.SIGN.test(D)){Q=at,q=D;continue}if(E.POINT.test(D)){Q=et,q=D;continue}E.COMMA.test(D)&&(A&&B(D,b,rt),A=!0)}if(Q===at){if(E.DIGIT.test(D)){q+=D;continue}if(E.POINT.test(D)){q+=D,Q=et;continue}if(E.EXP.test(D)){Q=ft;continue}E.SIGN.test(D)&&q.length===1&&E.SIGN.test(q[0])&&B(D,b,rt)}if(Q===et){if(E.DIGIT.test(D)){q+=D;continue}if(E.EXP.test(D)){Q=ft;continue}E.POINT.test(D)&&q[q.length-1]==="."&&B(D,b,rt)}if(Q===ft){if(E.DIGIT.test(D)){tt+=D;continue}if(E.SIGN.test(D)){if(tt===""){tt+=D;continue}tt.length===1&&E.SIGN.test(tt)&&B(D,b,rt)}}E.WHITESPACE.test(D)?(H(),Q=nt,A=!1):E.COMMA.test(D)?(H(),Q=nt,A=!0):E.SIGN.test(D)?(H(),Q=at,q=D):E.POINT.test(D)?(H(),Q=et,q=D):B(D,b,rt)}return H(),rt}let m=["mm","cm","in","pt","pc","px"],M={mm:{mm:1,cm:.1,in:1/25.4,pt:72/25.4,pc:6/25.4,px:-1},cm:{mm:10,cm:1,in:1/2.54,pt:72/2.54,pc:6/2.54,px:-1},in:{mm:25.4,cm:2.54,in:1,pt:72,pc:6,px:-1},pt:{mm:25.4/72,cm:2.54/72,in:1/72,pt:1,pc:6/72,px:-1},pc:{mm:25.4/6,cm:2.54/6,in:1/6,pt:72/6,pc:1,px:-1},px:{px:1}};function x(O){let N="px";if(typeof O=="string"||O instanceof String)for(let E=0,nt=m.length;E<nt;E++){let at=m[E];if(O.endsWith(at)){N=at,O=O.substring(0,O.length-at.length);break}}let L;return N==="px"&&e.defaultUnit!=="px"?L=M.in[e.defaultUnit]/e.defaultDPI:(L=M[N][e.defaultUnit],L<0&&(L=M[N].in*e.defaultDPI)),L*parseFloat(O)}function y(O){if(!(O.hasAttribute("transform")||O.nodeName==="use"&&(O.hasAttribute("x")||O.hasAttribute("y"))))return null;let N=C(O);return Y.length>0&&N.premultiply(Y[Y.length-1]),dt.copy(N),Y.push(N),N}function C(O){let N=new Yt,L=K;if(O.nodeName==="use"&&(O.hasAttribute("x")||O.hasAttribute("y"))){let E=x(O.getAttribute("x")),nt=x(O.getAttribute("y"));N.translate(E,nt)}if(O.hasAttribute("transform")){let E=O.getAttribute("transform").split(")");for(let nt=E.length-1;nt>=0;nt--){let at=E[nt].trim();if(at==="")continue;let et=at.indexOf("("),ft=at.length;if(et>0&&et<ft){let Q=at.slice(0,et),A=p(at.slice(et+1));switch(L.identity(),Q){case"translate":if(A.length>=1){let q=A[0],tt=0;A.length>=2&&(tt=A[1]),L.translate(q,tt)}break;case"rotate":if(A.length>=1){let q=0,tt=0,rt=0;q=A[0]*Math.PI/180,A.length>=3&&(tt=A[1],rt=A[2]),V.makeTranslation(-tt,-rt),W.makeRotation(q),k.multiplyMatrices(W,V),V.makeTranslation(tt,rt),L.multiplyMatrices(V,k)}break;case"scale":if(A.length>=1){let q=A[0],tt=q;A.length>=2&&(tt=A[1]),L.scale(q,tt)}break;case"skewX":A.length===1&&L.set(1,Math.tan(A[0]*Math.PI/180),0,0,1,0,0,0,1);break;case"skewY":A.length===1&&L.set(1,0,0,Math.tan(A[0]*Math.PI/180),1,0,0,0,1);break;case"matrix":A.length===6&&L.set(A[0],A[2],A[4],A[1],A[3],A[5],0,0,1);break}}N.premultiply(L)}}return N}function T(O,N){function L(et){U.set(et.x,et.y,1).applyMatrix3(N),et.set(U.x,U.y)}function E(et){let ft=et.xRadius,Q=et.yRadius,A=Math.cos(et.aRotation),q=Math.sin(et.aRotation),tt=new G(ft*A,ft*q,0),rt=new G(-Q*q,Q*A,0),B=tt.applyMatrix3(N),H=rt.applyMatrix3(N),D=K.set(B.x,H.x,0,B.y,H.y,0,0,0,1),R=V.copy(D).invert(),ct=W.copy(R).transpose().multiply(R).elements,ut=w(ct[0],ct[1],ct[4]),ot=Math.sqrt(ut.rt1),Pt=Math.sqrt(ut.rt2);if(et.xRadius=1/ot,et.yRadius=1/Pt,et.aRotation=Math.atan2(ut.sn,ut.cs),!((et.aEndAngle-et.aStartAngle)%(2*Math.PI)<Number.EPSILON)){let vt=V.set(ot,0,0,0,Pt,0,0,0,1),Vt=W.set(ut.cs,ut.sn,0,-ut.sn,ut.cs,0,0,0,1),_t=vt.multiply(Vt).multiply(D),Et=It=>{let{x:kt,y:Ct}=new G(Math.cos(It),Math.sin(It),0).applyMatrix3(_t);return Math.atan2(Ct,kt)};et.aStartAngle=Et(et.aStartAngle),et.aEndAngle=Et(et.aEndAngle),S(N)&&(et.aClockwise=!et.aClockwise)}}function nt(et){let ft=z(N),Q=v(N);et.xRadius*=ft,et.yRadius*=Q;let A=ft>Number.EPSILON?Math.atan2(N.elements[1],N.elements[0]):Math.atan2(-N.elements[3],N.elements[4]);et.aRotation+=A,S(N)&&(et.aStartAngle*=-1,et.aEndAngle*=-1,et.aClockwise=!et.aClockwise)}let at=O.subPaths;for(let et=0,ft=at.length;et<ft;et++){let A=at[et].curves;for(let q=0;q<A.length;q++){let tt=A[q];tt.isLineCurve?(L(tt.v1),L(tt.v2)):tt.isCubicBezierCurve?(L(tt.v0),L(tt.v1),L(tt.v2),L(tt.v3)):tt.isQuadraticBezierCurve?(L(tt.v0),L(tt.v1),L(tt.v2)):tt.isEllipseCurve&&(ht.set(tt.aX,tt.aY),L(ht),tt.aX=ht.x,tt.aY=ht.y,P(N)?E(tt):nt(tt))}}}function S(O){let N=O.elements;return N[0]*N[4]-N[1]*N[3]<0}function P(O){let N=O.elements,L=N[0]*N[3]+N[1]*N[4];if(L===0)return!1;let E=z(O),nt=v(O);return Math.abs(L/(E*nt))>Number.EPSILON}function z(O){let N=O.elements;return Math.sqrt(N[0]*N[0]+N[1]*N[1])}function v(O){let N=O.elements;return Math.sqrt(N[3]*N[3]+N[4]*N[4])}function w(O,N,L){let E,nt,at,et,ft,Q=O+L,A=O-L,q=Math.sqrt(A*A+4*N*N);return Q>0?(E=.5*(Q+q),ft=1/E,nt=O*ft*L-N*ft*N):Q<0?nt=.5*(Q-q):(E=.5*q,nt=-.5*q),A>0?at=A+q:at=A-q,Math.abs(at)>2*Math.abs(N)?(ft=-2*N/at,et=1/Math.sqrt(1+ft*ft),at=ft*et):Math.abs(N)===0?(at=1,et=0):(ft=-.5*at/N,at=1/Math.sqrt(1+ft*ft),et=ft*at),A>0&&(ft=at,at=-et,et=ft),{rt1:E,rt2:nt,cs:at,sn:et}}let F=[],X={},Y=[],K=new Yt,V=new Yt,W=new Yt,k=new Yt,ht=new mt,U=new G,dt=new Yt,Lt=new DOMParser().parseFromString(t,"image/svg+xml");return n(Lt.documentElement,{fill:"#000",fillOpacity:1,strokeOpacity:1,strokeWidth:1,strokeLineJoin:"miter",strokeLineCap:"butt",strokeMiterLimit:4}),{paths:F,xml:Lt.documentElement}}static createShapes(t){let n={ORIGIN:0,DESTINATION:1,BETWEEN:2,LEFT:3,RIGHT:4,BEHIND:5,BEYOND:6},i={loc:n.ORIGIN,t:0};function s(_,p,m,M){let x=_.x,y=p.x,C=m.x,T=M.x,S=_.y,P=p.y,z=m.y,v=M.y,w=(T-C)*(S-z)-(v-z)*(x-C),F=(y-x)*(S-z)-(P-S)*(x-C),X=(v-z)*(y-x)-(T-C)*(P-S),Y=w/X,K=F/X;if(X===0&&w!==0||Y<=0||Y>=1||K<0||K>1)return null;if(w===0&&X===0){for(let V=0;V<2;V++)if(o(V===0?m:M,_,p),i.loc==n.ORIGIN){let W=V===0?m:M;return{x:W.x,y:W.y,t:i.t}}else if(i.loc==n.BETWEEN){let W=+(x+i.t*(y-x)).toPrecision(10),k=+(S+i.t*(P-S)).toPrecision(10);return{x:W,y:k,t:i.t}}return null}else{for(let k=0;k<2;k++)if(o(k===0?m:M,_,p),i.loc==n.ORIGIN){let ht=k===0?m:M;return{x:ht.x,y:ht.y,t:i.t}}let V=+(x+Y*(y-x)).toPrecision(10),W=+(S+Y*(P-S)).toPrecision(10);return{x:V,y:W,t:Y}}}function o(_,p,m){let M=m.x-p.x,x=m.y-p.y,y=_.x-p.x,C=_.y-p.y,T=M*C-y*x;if(_.x===p.x&&_.y===p.y){i.loc=n.ORIGIN,i.t=0;return}if(_.x===m.x&&_.y===m.y){i.loc=n.DESTINATION,i.t=1;return}if(T<-Number.EPSILON){i.loc=n.LEFT;return}if(T>Number.EPSILON){i.loc=n.RIGHT;return}if(M*y<0||x*C<0){i.loc=n.BEHIND;return}if(Math.sqrt(M*M+x*x)<Math.sqrt(y*y+C*C)){i.loc=n.BEYOND;return}let S;M!==0?S=y/M:S=C/x,i.loc=n.BETWEEN,i.t=S}function a(_,p){let m=[],M=[];for(let x=1;x<_.length;x++){let y=_[x-1],C=_[x];for(let T=1;T<p.length;T++){let S=p[T-1],P=p[T],z=s(y,C,S,P);z!==null&&m.find(v=>v.t<=z.t+Number.EPSILON&&v.t>=z.t-Number.EPSILON)===void 0&&(m.push(z),M.push(new mt(z.x,z.y)))}}return M}function l(_,p,m){let M=new mt;p.getCenter(M);let x=[];return m.forEach(y=>{y.boundingBox.containsPoint(M)&&a(_,y.points).forEach(T=>{x.push({identifier:y.identifier,isCW:y.isCW,point:T})})}),x.sort((y,C)=>y.point.x-C.point.x),x}function c(_,p,m,M,x){(x==null||x==="")&&(x="nonzero");let y=new mt;_.boundingBox.getCenter(y);let C=[new mt(m,y.y),new mt(M,y.y)],T=l(C,_.boundingBox,p);T.sort((F,X)=>F.point.x-X.point.x);let S=[],P=[];T.forEach(F=>{F.identifier===_.identifier?S.push(F):P.push(F)});let z=S[0].point.x,v=[],w=0;for(;w<P.length&&P[w].point.x<z;)v.length>0&&v[v.length-1]===P[w].identifier?v.pop():v.push(P[w].identifier),w++;if(v.push(_.identifier),x==="evenodd"){let F=v.length%2===0,X=v[v.length-2];return{identifier:_.identifier,isHole:F,for:X}}else if(x==="nonzero"){let F=!0,X=null,Y=null;for(let K=0;K<v.length;K++){let V=v[K];F?(Y=p[V].isCW,F=!1,X=V):Y!==p[V].isCW&&(Y=p[V].isCW,F=!0)}return{identifier:_.identifier,isHole:F,for:X}}else console.warn('fill-rule: "'+x+'" is currently not implemented.')}let h=999999999,u=-999999999,d=t.subPaths.map(_=>{let p=_.getPoints(),m=-999999999,M=999999999,x=-999999999,y=999999999;for(let C=0;C<p.length;C++){let T=p[C];T.y>m&&(m=T.y),T.y<M&&(M=T.y),T.x>x&&(x=T.x),T.x<y&&(y=T.x)}return u<=x&&(u=x+1),h>=y&&(h=y-1),{curves:_.curves,points:p,isCW:pr.isClockWise(p),identifier:-1,boundingBox:new Yl(new mt(y,M),new mt(x,m))}});d=d.filter(_=>_.points.length>1);for(let _=0;_<d.length;_++)d[_].identifier=_;let f=d.map(_=>c(_,d,h,u,t.userData?t.userData.style.fillRule:void 0)),g=[];return d.forEach(_=>{if(!f[_.identifier].isHole){let m=new dr;m.curves=_.curves,f.filter(x=>x.isHole&&x.for===_.identifier).forEach(x=>{let y=d[x.identifier],C=new wi;C.curves=y.curves,m.holes.push(C)}),g.push(m)}}),g}static getStrokeStyle(t,e,n,i,s){return t=t!==void 0?t:1,e=e!==void 0?e:"#000",n=n!==void 0?n:"miter",i=i!==void 0?i:"butt",s=s!==void 0?s:4,{strokeColor:e,strokeWidth:t,strokeLineJoin:n,strokeLineCap:i,strokeMiterLimit:s}}static pointsToStroke(t,e,n,i){let s=[],o=[],a=[];if(r.pointsToStrokeWithBuffers(t,e,n,i,s,o,a)===0)return null;let l=new Ge;return l.setAttribute("position",new ie(s,3)),l.setAttribute("normal",new ie(o,3)),l.setAttribute("uv",new ie(a,2)),l}static pointsToStrokeWithBuffers(t,e,n,i,s,o,a,l){let c=new mt,h=new mt,u=new mt,d=new mt,f=new mt,g=new mt,_=new mt,p=new mt,m=new mt,M=new mt,x=new mt,y=new mt,C=new mt,T=new mt,S=new mt,P=new mt,z=new mt;n=n!==void 0?n:12,i=i!==void 0?i:.001,l=l!==void 0?l:0,t=A(t);let v=t.length;if(v<2)return 0;let w=t[0].equals(t[v-1]),F,X=t[0],Y,K=e.strokeWidth/2,V=1/(v-1),W=0,k,ht,U,dt,Lt=!1,Ht=0,O=l*3,N=l*2;L(t[0],t[1],c).multiplyScalar(K),p.copy(t[0]).sub(c),m.copy(t[0]).add(c),M.copy(p),x.copy(m);for(let q=1;q<v;q++){F=t[q],q===v-1?w?Y=t[1]:Y=void 0:Y=t[q+1];let tt=c;if(L(X,F,tt),u.copy(tt).multiplyScalar(K),y.copy(F).sub(u),C.copy(F).add(u),k=W+V,ht=!1,Y!==void 0){L(F,Y,h),u.copy(h).multiplyScalar(K),T.copy(F).sub(u),S.copy(F).add(u),U=!0,u.subVectors(Y,X),tt.dot(u)<0&&(U=!1),q===1&&(Lt=U),u.subVectors(Y,F),u.normalize();let rt=Math.abs(tt.dot(u));if(rt>Number.EPSILON){let B=K/rt;u.multiplyScalar(-B),d.subVectors(F,X),f.copy(d).setLength(B).add(u),P.copy(f).negate();let H=f.length(),D=d.length();d.divideScalar(D),g.subVectors(Y,F);let R=g.length();switch(g.divideScalar(R),d.dot(P)<D&&g.dot(P)<R&&(ht=!0),z.copy(f).add(F),P.add(F),dt=!1,ht?U?(S.copy(P),C.copy(P)):(T.copy(P),y.copy(P)):at(),e.strokeLineJoin){case"bevel":et(U,ht,k);break;case"round":ft(U,ht),U?nt(F,y,T,k,0):nt(F,S,C,k,1);break;case"miter":case"miter-clip":default:let b=K*e.strokeMiterLimit/H;if(b<1)if(e.strokeLineJoin!=="miter-clip"){et(U,ht,k);break}else ft(U,ht),U?(g.subVectors(z,y).multiplyScalar(b).add(y),_.subVectors(z,T).multiplyScalar(b).add(T),E(y,k,0),E(g,k,0),E(F,k,.5),E(F,k,.5),E(g,k,0),E(_,k,0),E(F,k,.5),E(_,k,0),E(T,k,0)):(g.subVectors(z,C).multiplyScalar(b).add(C),_.subVectors(z,S).multiplyScalar(b).add(S),E(C,k,1),E(g,k,1),E(F,k,.5),E(F,k,.5),E(g,k,1),E(_,k,1),E(F,k,.5),E(_,k,1),E(S,k,1));else ht?(U?(E(m,W,1),E(p,W,0),E(z,k,0),E(m,W,1),E(z,k,0),E(P,k,1)):(E(m,W,1),E(p,W,0),E(z,k,1),E(p,W,0),E(P,k,0),E(z,k,1)),U?T.copy(z):S.copy(z)):U?(E(y,k,0),E(z,k,0),E(F,k,.5),E(F,k,.5),E(z,k,0),E(T,k,0)):(E(C,k,1),E(z,k,1),E(F,k,.5),E(F,k,.5),E(z,k,1),E(S,k,1)),dt=!0;break}}else at()}else at();!w&&q===v-1&&Q(t[0],M,x,U,!0,W),W=k,X=F,p.copy(T),m.copy(S)}if(!w)Q(F,y,C,U,!1,k);else if(ht&&s){let q=z,tt=P;Lt!==U&&(q=P,tt=z),U?(dt||Lt)&&(tt.toArray(s,0*3),tt.toArray(s,3*3),dt&&q.toArray(s,1*3)):(dt||!Lt)&&(tt.toArray(s,1*3),tt.toArray(s,3*3),dt&&q.toArray(s,0*3))}return Ht;function L(q,tt,rt){return rt.subVectors(tt,q),rt.set(-rt.y,rt.x).normalize()}function E(q,tt,rt){s&&(s[O]=q.x,s[O+1]=q.y,s[O+2]=0,o&&(o[O]=0,o[O+1]=0,o[O+2]=1),O+=3,a&&(a[N]=tt,a[N+1]=rt,N+=2)),Ht+=3}function nt(q,tt,rt,B,H){c.copy(tt).sub(q).normalize(),h.copy(rt).sub(q).normalize();let D=Math.PI,R=c.dot(h);Math.abs(R)<1&&(D=Math.abs(Math.acos(R))),D/=n,u.copy(tt);for(let b=0,j=n-1;b<j;b++)d.copy(u).rotateAround(q,D),E(u,B,H),E(d,B,H),E(q,B,.5),u.copy(d);E(d,B,H),E(rt,B,H),E(q,B,.5)}function at(){E(m,W,1),E(p,W,0),E(y,k,0),E(m,W,1),E(y,k,0),E(C,k,1)}function et(q,tt,rt){tt?q?(E(m,W,1),E(p,W,0),E(y,k,0),E(m,W,1),E(y,k,0),E(P,k,1),E(y,rt,0),E(T,rt,0),E(P,rt,.5)):(E(m,W,1),E(p,W,0),E(C,k,1),E(p,W,0),E(P,k,0),E(C,k,1),E(C,rt,1),E(P,rt,0),E(S,rt,1)):q?(E(y,rt,0),E(T,rt,0),E(F,rt,.5)):(E(C,rt,1),E(S,rt,0),E(F,rt,.5))}function ft(q,tt){tt&&(q?(E(m,W,1),E(p,W,0),E(y,k,0),E(m,W,1),E(y,k,0),E(P,k,1),E(y,W,0),E(F,k,.5),E(P,k,1),E(F,k,.5),E(T,W,0),E(P,k,1)):(E(m,W,1),E(p,W,0),E(C,k,1),E(p,W,0),E(P,k,0),E(C,k,1),E(C,W,1),E(P,k,0),E(F,k,.5),E(F,k,.5),E(P,k,0),E(S,W,1)))}function Q(q,tt,rt,B,H,D){switch(e.strokeLineCap){case"round":H?nt(q,rt,tt,D,.5):nt(q,tt,rt,D,.5);break;case"square":if(H)c.subVectors(tt,q),h.set(c.y,-c.x),u.addVectors(c,h).add(q),d.subVectors(h,c).add(q),B?(u.toArray(s,1*3),d.toArray(s,0*3),d.toArray(s,3*3)):(u.toArray(s,1*3),a[3*2+1]===1?d.toArray(s,3*3):u.toArray(s,3*3),d.toArray(s,0*3));else{c.subVectors(rt,q),h.set(c.y,-c.x),u.addVectors(c,h).add(q),d.subVectors(h,c).add(q);let R=s.length;B?(u.toArray(s,R-1*3),d.toArray(s,R-2*3),d.toArray(s,R-4*3)):(d.toArray(s,R-2*3),u.toArray(s,R-1*3),d.toArray(s,R-4*3))}break;case"butt":default:break}}function A(q){let tt=!1;for(let B=1,H=q.length-1;B<H;B++)if(q[B].distanceTo(q[B+1])<i){tt=!0;break}if(!tt)return q;let rt=[];rt.push(q[0]);for(let B=1,H=q.length-1;B<H;B++)q[B].distanceTo(q[B+1])>=i&&rt.push(q[B]);return rt.push(q[q.length-1]),rt}}};function qi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function ym(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}var Fn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},eo={duration:.5,overwrite:!1,delay:0},Rf,mn,Re,ii=1e8,ve=1/ii,xf=Math.PI*2,DS=xf/4,NS=0,vm=Math.sqrt,US=Math.cos,OS=Math.sin,Ze=function(t){return typeof t=="string"},Ue=function(t){return typeof t=="function"},Ji=function(t){return typeof t=="number"},lc=function(t){return typeof t=="undefined"},Ci=function(t){return typeof t=="object"},On=function(t){return t!==!1},Pf=function(){return typeof window!="undefined"},jl=function(t){return Ue(t)||Ze(t)},Mm=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},gn=Array.isArray,yf=/(?:-?\.?\d|\.)+/gi,If=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ns=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,uf=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Lf=/[+-]=-?[.\d]+/,Sm=/[^,'"\[\]\s]+/gi,FS=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ie,Ei,vf,Df,Xn={},ic={},bm,wm=function(t){return(ic=es(t,Xn))&&_n},cc=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},ea=function(t,e){return!e&&console.warn(t)},Tm=function(t,e){return t&&(Xn[t]=e)&&ic&&(ic[t]=e)||Xn},na=function(){return 0},BS={suppressEvents:!0,isStart:!0,kill:!1},tc={suppressEvents:!0,kill:!1},zS={suppressEvents:!0},Nf={},vr=[],Mf={},Em,Nn={},ff={},fm=30,ec=[],Uf="",Of=function(t){var e=t[0],n,i;if(Ci(e)||Ue(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=ec.length;i--&&!ec[i].targetTest(e););n=ec[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new zf(t[i],n)))||t.splice(i,1);return t},Mr=function(t){return t._gsap||Of(ri(t))[0]._gsap},Ff=function(t,e,n){return(n=t[e])&&Ue(n)?t[e]():lc(n)&&t.getAttribute&&t.getAttribute(e)||n},bn=function(t,e){return(t=t.split(",")).forEach(e)||t},Oe=function(t){return Math.round(t*1e5)/1e5||0},en=function(t){return Math.round(t*1e7)/1e7||0},is=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},kS=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},rc=function(){var t=vr.length,e=vr.slice(0),n,i;for(Mf={},vr.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Am=function(t,e,n,i){vr.length&&!mn&&rc(),t.render(e,n,i||mn&&e<0&&(t._initted||t._startAt)),vr.length&&!mn&&rc()},Cm=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Sm).length<2?e:Ze(t)?t.trim():t},Rm=function(t){return t},si=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},VS=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},es=function(t,e){for(var n in e)t[n]=e[n];return t},dm=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Ci(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},sc=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},Qo=function(t){var e=t.parent||Ie,n=t.keyframes?VS(gn(t.keyframes)):si;if(On(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},HS=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},Pm=function(t,e,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=t[i],a;if(s)for(a=e[s];o&&o[s]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},hc=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,o=e._next;s?s._next=o:t[n]===e&&(t[n]=o),o?o._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},Sr=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Qr=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},GS=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Sf=function(t,e,n,i){return t._startAt&&(mn?t._startAt.revert(tc):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},WS=function r(t){return!t||t._ts&&r(t.parent)},pm=function(t){return t._repeat?no(t._tTime,t=t.duration()+t._rDelay)*t:0},no=function(t,e){var n=Math.floor(t/=e);return t&&n===t?n-1:n},oc=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},uc=function(t){return t._end=en(t._start+(t._tDur/Math.abs(t._ts||t._rts||ve)||0))},fc=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=en(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),uc(t),n._dirty||Qr(n,t)),t},Im=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=oc(t.rawTime(),e),(!e._dur||sa(0,e.totalDuration(),n)-e._tTime>ve)&&e.render(n,!0)),Qr(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-ve}},Ai=function(t,e,n,i){return e.parent&&Sr(e),e._start=en((Ji(n)?n:n||t!==Ie?ni(t,n,e):t._time)+e._delay),e._end=en(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Pm(t,e,"_first","_last",t._sort?"_start":0),bf(e)||(t._recent=e),i||Im(t,e),t._ts<0&&fc(t,t._tTime),t},Lm=function(t,e){return(Xn.ScrollTrigger||cc("scrollTrigger",e))&&Xn.ScrollTrigger.create(e,t)},Dm=function(t,e,n,i,s){if(Hf(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!mn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Em!==Un.frame)return vr.push(t),t._lazy=[s,i],1},XS=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},bf=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},YS=function(t,e,n,i){var s=t.ratio,o=e<0||!e&&(!t._start&&XS(t)&&!(!t._initted&&bf(t))||(t._ts<0||t._dp._ts<0)&&!bf(t))?0:1,a=t._rDelay,l=0,c,h,u;if(a&&t._repeat&&(l=sa(0,t._tDur,e),h=no(l,a),t._yoyo&&h&1&&(o=1-o),h!==no(t._tTime,a)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||mn||i||t._zTime===ve||!e&&t._zTime){if(!t._initted&&Dm(t,e,i,n,l))return;for(u=t._zTime,t._zTime=e||(n?ve:0),n||(n=e&&!u),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&Sf(t,e,n,!0),t._onUpdate&&!n&&Wn(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&Wn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&Sr(t,1),!n&&!mn&&(Wn(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},qS=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},io=function(t,e,n,i){var s=t._repeat,o=en(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:en(o*(s+1)+t._rDelay*s):o,a>0&&!i&&fc(t,t._tTime=t._tDur*a),t.parent&&uc(t),n||Qr(t.parent,t),t},mm=function(t){return t instanceof on?Qr(t):io(t,t._dur)},ZS={_start:0,endTime:na,totalDuration:na},ni=function r(t,e,n){var i=t.labels,s=t._recent||ZS,o=t.duration()>=ii?s.endTime(!1):t._dur,a,l,c;return Ze(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(gn(n)?n[0]:n).totalDuration()),a>1?r(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},jo=function(t,e,n){var i=Ji(e[1]),s=(i?2:1)+(t<2?0:1),o=e[s],a,l;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=On(l.vars.inherit)&&l.parent;o.immediateRender=On(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[s-1]}return new Ve(e[0],o,e[s+1])},br=function(t,e){return t||t===0?e(t):e},sa=function(t,e,n){return n<t?t:n>e?e:n},an=function(t,e){return!Ze(t)||!(e=FS.exec(t))?"":e[1]},JS=function(t,e,n){return br(n,function(i){return sa(t,e,i)})},wf=[].slice,Nm=function(t,e){return t&&Ci(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Ci(t[0]))&&!t.nodeType&&t!==Ei},$S=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return Ze(i)&&!e||Nm(i,1)?(s=n).push.apply(s,ri(i)):n.push(i)})||n},ri=function(t,e,n){return Re&&!e&&Re.selector?Re.selector(t):Ze(t)&&!n&&(vf||!ro())?wf.call((e||Df).querySelectorAll(t),0):gn(t)?$S(t,n):Nm(t)?wf.call(t,0):t?[t]:[]},Tf=function(t){return t=ri(t)[0]||ea("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return ri(e,n.querySelectorAll?n:n===t?ea("Invalid scope")||Df.createElement("div"):t)}},Um=function(t){return t.sort(function(){return .5-Math.random()})},Om=function(t){if(Ue(t))return t;var e=Ci(t)?t:{each:t},n=jr(e.ease),i=e.from||0,s=parseFloat(e.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=e.axis,h=i,u=i;return Ze(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(h=i[0],u=i[1]),function(d,f,g){var _=(g||e).length,p=o[_],m,M,x,y,C,T,S,P,z;if(!p){if(z=e.grid==="auto"?0:(e.grid||[1,ii])[1],!z){for(S=-ii;S<(S=g[z++].getBoundingClientRect().left)&&z<_;);z<_&&z--}for(p=o[_]=[],m=l?Math.min(z,_)*h-.5:i%z,M=z===ii?0:l?_*u/z-.5:i/z|0,S=0,P=ii,T=0;T<_;T++)x=T%z-m,y=M-(T/z|0),p[T]=C=c?Math.abs(c==="y"?y:x):vm(x*x+y*y),C>S&&(S=C),C<P&&(P=C);i==="random"&&Um(p),p.max=S-P,p.min=P,p.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(z>_?_-1:c?c==="y"?_/z:z:Math.max(z,_/z))||0)*(i==="edges"?-1:1),p.b=_<0?s-_:s,p.u=an(e.amount||e.each)||0,n=n&&_<0?Xm(n):n}return _=(p[d]-p.min)/p.max||0,en(p.b+(n?n(_):_)*p.v)+p.u}},Ef=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=en(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(Ji(n)?0:an(n))}},Fm=function(t,e){var n=gn(t),i,s;return!n&&Ci(t)&&(i=n=t.radius||ii,t.values?(t=ri(t.values),(s=!Ji(t[0]))&&(i*=i)):t=Ef(t.increment)),br(e,n?Ue(t)?function(o){return s=t(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=ii,h=0,u=t.length,d,f;u--;)s?(d=t[u].x-a,f=t[u].y-l,d=d*d+f*f):d=Math.abs(t[u]-a),d<c&&(c=d,h=u);return h=!i||c<=i?t[h]:o,s||h===o||Ji(o)?h:h+an(o)}:Ef(t))},Bm=function(t,e,n,i){return br(gn(t)?!e:n===!0?!!(n=0):!i,function(){return gn(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},KS=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,o){return o(s)},i)}},QS=function(t,e){return function(n){return t(parseFloat(n))+(e||an(n))}},jS=function(t,e,n){return km(t,e,0,1,n)},zm=function(t,e,n){return br(n,function(i){return t[~~e(i)]})},t1=function r(t,e,n){var i=e-t;return gn(t)?zm(t,r(0,t.length),e):br(n,function(s){return(i+(s-t)%i)%i+t})},e1=function r(t,e,n){var i=e-t,s=i*2;return gn(t)?zm(t,r(0,t.length-1),e):br(n,function(o){return o=(s+(o-t)%s)%s||0,t+(o>i?s-o:o)})},so=function(t){for(var e=0,n="",i,s,o,a;~(i=t.indexOf("random(",e));)o=t.indexOf(")",i),a=t.charAt(i+7)==="[",s=t.substr(i+7,o-i-7).match(a?Sm:yf),n+=t.substr(e,i-e)+Bm(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),e=o+1;return n+t.substr(e,t.length-e)},km=function(t,e,n,i,s){var o=e-t,a=i-n;return br(s,function(l){return n+((l-t)/o*a||0)})},n1=function r(t,e,n,i){var s=isNaN(t+e)?0:function(f){return(1-f)*t+f*e};if(!s){var o=Ze(t),a={},l,c,h,u,d;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(gn(t)&&!gn(e)){for(h=[],u=t.length,d=u-2,c=1;c<u;c++)h.push(r(t[c-1],t[c]));u--,s=function(g){g*=u;var _=Math.min(d,~~g);return h[_](g-_)},n=e}else i||(t=es(gn(t)?[]:{},t));if(!h){for(l in e)kf.call(a,t,l,"get",e[l]);s=function(g){return Xf(g,a)||(o?t.p:t)}}}return br(n,s)},gm=function(t,e,n){var i=t.labels,s=ii,o,a,l;for(o in i)a=i[o]-e,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Wn=function(t,e,n){var i=t.vars,s=i[e],o=Re,a=t._ctx,l,c,h;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&vr.length&&rc(),a&&(Re=a),h=l?s.apply(c,l):s.call(c),Re=o,h},$o=function(t){return Sr(t),t.scrollTrigger&&t.scrollTrigger.kill(!!mn),t.progress()<1&&Wn(t,"onInterrupt"),t},to,Vm=[],Hm=function(t){if(t)if(t=!t.name&&t.default||t,Pf()||t.headless){var e=t.name,n=Ue(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:na,render:Xf,add:kf,kill:x1,modifier:_1,rawVars:0},o={targetTest:0,get:0,getSetter:dc,aliases:{},register:0};if(ro(),t!==i){if(Nn[e])return;si(i,si(sc(t,s),o)),es(i.prototype,es(s,sc(t,o))),Nn[i.prop=e]=i,t.targetTest&&(ec.push(i),Nf[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Tm(e,i),t.register&&t.register(_n,i,wn)}else Vm.push(t)},ye=255,Ko={aqua:[0,ye,ye],lime:[0,ye,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ye],navy:[0,0,128],white:[ye,ye,ye],olive:[128,128,0],yellow:[ye,ye,0],orange:[ye,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ye,0,0],pink:[ye,192,203],cyan:[0,ye,ye],transparent:[ye,ye,ye,0]},df=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*ye+.5|0},Gm=function(t,e,n){var i=t?Ji(t)?[t>>16,t>>8&ye,t&ye]:0:Ko.black,s,o,a,l,c,h,u,d,f,g;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Ko[t])i=Ko[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+s+s+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&ye,i&ye,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&ye,t&ye]}else if(t.substr(0,3)==="hsl"){if(i=g=t.match(yf),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(c+1):h+c-h*c,s=h*2-o,i.length>3&&(i[3]*=1),i[0]=df(l+1/3,s,o),i[1]=df(l,s,o),i[2]=df(l-1/3,s,o);else if(~t.indexOf("="))return i=t.match(If),n&&i.length<4&&(i[3]=1),i}else i=t.match(yf)||Ko.transparent;i=i.map(Number)}return e&&!g&&(s=i[0]/ye,o=i[1]/ye,a=i[2]/ye,u=Math.max(s,o,a),d=Math.min(s,o,a),h=(u+d)/2,u===d?l=c=0:(f=u-d,c=h>.5?f/(2-u-d):f/(u+d),l=u===s?(o-a)/f+(o<a?6:0):u===o?(a-s)/f+2:(s-o)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},Wm=function(t){var e=[],n=[],i=-1;return t.split(Zi).forEach(function(s){var o=s.match(ns)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},_m=function(t,e,n){var i="",s=(t+i).match(Zi),o=e?"hsla(":"rgba(",a=0,l,c,h,u;if(!s)return t;if(s=s.map(function(d){return(d=Gm(d,e,1))&&o+(e?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(h=Wm(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(Zi,"1").split(ns),u=c.length-1;a<u;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=t.split(Zi),u=c.length-1;a<u;a++)i+=c[a]+s[a];return i+c[u]},Zi=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Ko)r+="|"+t+"\\b";return new RegExp(r+")","gi")}(),i1=/hsl[a]?\(/,Bf=function(t){var e=t.join(" "),n;if(Zi.lastIndex=0,Zi.test(e))return n=i1.test(e),t[1]=_m(t[1],n),t[0]=_m(t[0],n,Wm(t[1])),!0},ia,Un=function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,h,u,d,f,g=function _(p){var m=r()-i,M=p===!0,x,y,C,T;if((m>t||m<0)&&(n+=m-e),i+=m,C=i-n,x=C-o,(x>0||M)&&(T=++u.frame,d=C-u.time*1e3,u.time=C=C/1e3,o+=x+(x>=s?4:s-x),y=1),M||(l=c(_)),y)for(f=0;f<a.length;f++)a[f](C,d,T,p)};return u={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return d/(1e3/(p||60))},wake:function(){bm&&(!vf&&Pf()&&(Ei=vf=window,Df=Ei.document||{},Xn.gsap=_n,(Ei.gsapVersions||(Ei.gsapVersions=[])).push(_n.version),wm(ic||Ei.GreenSockGlobals||!Ei.gsap&&Ei||{}),Vm.forEach(Hm)),h=typeof requestAnimationFrame!="undefined"&&requestAnimationFrame,l&&u.sleep(),c=h||function(p){return setTimeout(p,o-u.time*1e3+1|0)},ia=1,g(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),ia=0,c=na},lagSmoothing:function(p,m){t=p||1/0,e=Math.min(m||33,t)},fps:function(p){s=1e3/(p||240),o=u.time*1e3+s},add:function(p,m,M){var x=m?function(y,C,T,S){p(y,C,T,S),u.remove(x)}:p;return u.remove(p),a[M?"unshift":"push"](x),ro(),x},remove:function(p,m){~(m=a.indexOf(p))&&a.splice(m,1)&&f>=m&&f--},_listeners:a},u}(),ro=function(){return!ia&&Un.wake()},ce={},r1=/^[\d.\-M][\d.\-,\s]/,s1=/["']/g,o1=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[i]=isNaN(c)?c.replace(s1,"").trim():+c,i=l.substr(a+1).trim();return e},a1=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},l1=function(t){var e=(t+"").split("("),n=ce[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[o1(e[1])]:a1(t).split(",").map(Cm)):ce._CE&&r1.test(t)?ce._CE("",t):n},Xm=function(t){return function(e){return 1-t(1-e)}},Ym=function r(t,e){for(var n=t._first,i;n;)n instanceof on?r(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?r(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},jr=function(t,e){return t&&(Ue(t)?t:ce[t]||l1(t))||e},rs=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},o;return bn(t,function(a){ce[a]=Xn[a]=s,ce[o=a.toLowerCase()]=n;for(var l in s)ce[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ce[a+"."+l]=s[l]}),s},qm=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},pf=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),o=s/xf*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*OS((h-o)*s)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:qm(a);return s=xf/s,l.config=function(c,h){return r(t,c,h)},l},mf=function r(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:qm(n);return i.config=function(s){return r(t,s)},i};bn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;rs(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});ce.Linear.easeNone=ce.none=ce.Linear.easeIn;rs("Elastic",pf("in"),pf("out"),pf());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(a){return a<e?r*a*a:a<n?r*Math.pow(a-1.5/t,2)+.75:a<i?r*(a-=2.25/t)*a+.9375:r*Math.pow(a-2.625/t,2)+.984375};rs("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);rs("Expo",function(r){return r?Math.pow(2,10*(r-1)):0});rs("Circ",function(r){return-(vm(1-r*r)-1)});rs("Sine",function(r){return r===1?1:-US(r*DS)+1});rs("Back",mf("in"),mf("out"),mf());ce.SteppedEase=ce.steps=Xn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,o=1-ve;return function(a){return((i*sa(0,o,a)|0)+s)*n}}};eo.ease=ce["quad.out"];bn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Uf+=r+","+r+"Params,"});var zf=function(t,e){this.id=NS++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Ff,this.set=e?e.getSetter:dc},ra=function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,io(this,+e.duration,1,1),this.data=e.data,Re&&(this._ctx=Re,Re.data.push(this)),ia||Un.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,io(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(ro(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(fc(this,n),!s._dp||s.parent||Im(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Ai(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===ve||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Am(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+pm(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+pm(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?no(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-ve?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?oc(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-ve?0:this._rts,this.totalTime(sa(-Math.abs(this._delay),this._tDur,s),i!==!1),uc(this),GS(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ro(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ve&&(this._tTime-=ve)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Ai(i,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(On(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?oc(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=zS);var i=mn;return mn=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),mn=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,mm(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,mm(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(ni(this,n),On(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,On(i))},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-ve:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-ve,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-ve)},t.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this;return new Promise(function(s){var o=Ue(n)?n:Rm,a=function(){var c=i.then;i.then=null,Ue(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),s(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},t.kill=function(){$o(this)},r}();si(ra.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ve,_prom:0,_ps:!1,_rts:1});var on=function(r){ym(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=On(n.sortChildren),Ie&&Ai(n.parent||Ie,qi(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Lm(qi(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,o){return jo(0,arguments,this),this},e.from=function(i,s,o){return jo(1,arguments,this),this},e.fromTo=function(i,s,o,a){return jo(2,arguments,this),this},e.set=function(i,s,o){return s.duration=0,s.parent=this,Qo(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Ve(i,s,ni(this,o),1),this},e.call=function(i,s,o){return Ai(this,Ve.delayedCall(0,i,s),o)},e.staggerTo=function(i,s,o,a,l,c,h){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new Ve(i,o,ni(this,l)),this},e.staggerFrom=function(i,s,o,a,l,c,h){return o.runBackwards=1,Qo(o).immediateRender=On(o.immediateRender),this.staggerTo(i,s,o,a,l,c,h)},e.staggerFromTo=function(i,s,o,a,l,c,h,u){return a.startAt=o,Qo(a).immediateRender=On(a.immediateRender),this.staggerTo(i,s,a,l,c,h,u)},e.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:en(i),u=this._zTime<0!=i<0&&(this._initted||!c),d,f,g,_,p,m,M,x,y,C,T,S;if(this!==Ie&&h>l&&i>=0&&(h=l),h!==this._tTime||o||u){if(a!==this._time&&c&&(h+=this._time-a,i+=this._time-a),d=h,y=this._start,x=this._ts,m=!x,u&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(T=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,o);if(d=en(h%p),h===l?(_=this._repeat,d=c):(_=~~(h/p),_&&_===h/p&&(d=c,_--),d>c&&(d=c)),C=no(this._tTime,p),!a&&this._tTime&&C!==_&&this._tTime-C*p-this._dur<=0&&(C=_),T&&_&1&&(d=c-d,S=1),_!==C&&!this._lock){var P=T&&C&1,z=P===(T&&_&1);if(_<C&&(P=!P),a=P?0:h%c?c:h,this._lock=1,this.render(a||(S?0:en(_*p)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&Wn(this,"onRepeat"),this.vars.repeatRefresh&&!S&&(this.invalidate()._lock=1),a&&a!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,z&&(this._lock=2,a=P?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!S&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;Ym(this,S)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=qS(this,en(a),en(d)),M&&(h-=d-(d=M._start))),this._tTime=h,this._time=d,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&d&&!s&&!_&&(Wn(this,"onStart"),this._tTime!==h))return this;if(d>=a&&i>=0)for(f=this._first;f;){if(g=f._next,(f._act||d>=f._start)&&f._ts&&M!==f){if(f.parent!==this)return this.render(i,s,o);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,s,o),d!==this._time||!this._ts&&!m){M=0,g&&(h+=this._zTime=-ve);break}}f=g}else{f=this._last;for(var v=i<0?i:d;f;){if(g=f._prev,(f._act||v<=f._end)&&f._ts&&M!==f){if(f.parent!==this)return this.render(i,s,o);if(f.render(f._ts>0?(v-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(v-f._start)*f._ts,s,o||mn&&(f._initted||f._startAt)),d!==this._time||!this._ts&&!m){M=0,g&&(h+=this._zTime=v?-ve:ve);break}}f=g}}if(M&&!s&&(this.pause(),M.render(d>=a?0:-ve)._zTime=d>=a?1:-1,this._ts))return this._start=y,uc(this),this.render(i,s,o);this._onUpdate&&!s&&Wn(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(y===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Sr(this,1),!s&&!(i<0&&!a)&&(h||a||!l)&&(Wn(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var o=this;if(Ji(s)||(s=ni(this,s,i)),!(i instanceof ra)){if(gn(i))return i.forEach(function(a){return o.add(a,s)}),this;if(Ze(i))return this.addLabel(i,s);if(Ue(i))i=Ve.delayedCall(0,i);else return this}return this!==i?Ai(this,i,s):this},e.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-ii);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Ve?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},e.remove=function(i){return Ze(i)?this.removeLabel(i):Ue(i)?this.killTweensOf(i):(hc(this,i),i===this._recent&&(this._recent=this._last),Qr(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=en(Un.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=ni(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,o){var a=Ve.delayedCall(0,s||na,o);return a.data="isPause",this._hasPause=1,Ai(this,a,ni(this,i))},e.removePause=function(i){var s=this._first;for(i=ni(this,i);s;)s._start===i&&s.data==="isPause"&&Sr(s),s=s._next},e.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)yr!==a[l]&&a[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var o=[],a=ri(i),l=this._first,c=Ji(s),h;l;)l instanceof Ve?kS(l._targets,a)&&(c?(!yr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(h=l.getTweensOf(a,s)).length&&o.push.apply(o,h),l=l._next;return o},e.tweenTo=function(i,s){s=s||{};var o=this,a=ni(o,i),l=s,c=l.startAt,h=l.onStart,u=l.onStartParams,d=l.immediateRender,f,g=Ve.to(o,si({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||ve,onStart:function(){if(o.pause(),!f){var p=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==p&&io(g,p,0,1).render(g._time,!0,!0),f=1}h&&h.apply(g,u||[])}},s));return d?g.render(0):g},e.tweenFromTo=function(i,s,o){return this.tweenTo(s,si({startAt:{time:ni(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),gm(this,ni(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),gm(this,ni(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+ve)},e.shiftChildren=function(i,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return Qr(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Qr(this)},e.totalDuration=function(i){var s=0,o=this,a=o._last,l=ii,c,h,u;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(u=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Ai(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(s-=h,(!u&&!o._dp||u&&u.smoothChildTiming)&&(o._start+=h/o._ts,o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;io(o,o===Ie&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(Ie._ts&&(Am(Ie,oc(i,Ie)),Em=Un.frame),Un.frame>=fm){fm+=Fn.autoSleep||120;var s=Ie._first;if((!s||!s._ts)&&Fn.autoSleep&&Un._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Un.sleep()}}},t}(ra);si(on.prototype,{_lock:0,_hasPause:0,_forcing:0});var c1=function(t,e,n,i,s,o,a){var l=new wn(this._pt,t,e,0,1,Wf,null,s),c=0,h=0,u,d,f,g,_,p,m,M;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=so(i)),o&&(M=[n,i],o(M,t,e),n=M[0],i=M[1]),d=n.match(uf)||[];u=uf.exec(i);)g=u[0],_=i.substring(c,u.index),f?f=(f+1)%5:_.substr(-5)==="rgba("&&(f=1),g!==d[h++]&&(p=parseFloat(d[h-1])||0,l._pt={_next:l._pt,p:_||h===1?_:",",s:p,c:g.charAt(1)==="="?is(p,g)-p:parseFloat(g)-p,m:f&&f<4?Math.round:0},c=uf.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Lf.test(i)||m)&&(l.e=0),this._pt=l,l},kf=function(t,e,n,i,s,o,a,l,c,h){Ue(i)&&(i=i(s||0,t,o));var u=t[e],d=n!=="get"?n:Ue(u)?c?t[e.indexOf("set")||!Ue(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():u,f=Ue(u)?c?p1:$m:Gf,g;if(Ze(i)&&(~i.indexOf("random(")&&(i=so(i)),i.charAt(1)==="="&&(g=is(d,i)+(an(d)||0),(g||g===0)&&(i=g))),!h||d!==i||Af)return!isNaN(d*i)&&i!==""?(g=new wn(this._pt,t,e,+d||0,i-(d||0),typeof u=="boolean"?g1:Km,0,f),c&&(g.fp=c),a&&g.modifier(a,this,t),this._pt=g):(!u&&!(e in t)&&cc(e,i),c1.call(this,t,e,d,i,f,l||Fn.stringFilter,c))},h1=function(t,e,n,i,s){if(Ue(t)&&(t=ta(t,s,e,n,i)),!Ci(t)||t.style&&t.nodeType||gn(t)||Mm(t))return Ze(t)?ta(t,s,e,n,i):t;var o={},a;for(a in t)o[a]=ta(t[a],s,e,n,i);return o},Vf=function(t,e,n,i,s,o){var a,l,c,h;if(Nn[t]&&(a=new Nn[t]).init(s,a.rawVars?e[t]:h1(e[t],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new wn(n._pt,s,t,0,1,a.render,a,0,a.priority),n!==to))for(c=n._ptLookup[n._targets.indexOf(s)],h=a._props.length;h--;)c[a._props[h]]=l;return a},yr,Af,Hf=function r(t,e,n){var i=t.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,u=i.yoyoEase,d=i.keyframes,f=i.autoRevert,g=t._dur,_=t._startAt,p=t._targets,m=t.parent,M=m&&m.data==="nested"?m.vars.targets:p,x=t._overwrite==="auto"&&!Rf,y=t.timeline,C,T,S,P,z,v,w,F,X,Y,K,V,W;if(y&&(!d||!s)&&(s="none"),t._ease=jr(s,eo.ease),t._yEase=u?Xm(jr(u===!0?s:u,eo.ease)):0,u&&t._yoyo&&!t._repeat&&(u=t._yEase,t._yEase=t._ease,t._ease=u),t._from=!y&&!!i.runBackwards,!y||d&&!i.stagger){if(F=p[0]?Mr(p[0]).harness:0,V=F&&i[F.prop],C=sc(i,Nf),_&&(_._zTime<0&&_.progress(1),e<0&&h&&a&&!f?_.render(-1,!0):_.revert(h&&g?tc:BS),_._lazy=0),o){if(Sr(t._startAt=Ve.set(p,si({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!_&&On(l),startAt:null,delay:0,onUpdate:c&&function(){return Wn(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(mn||!a&&!f)&&t._startAt.revert(tc),a&&g&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&g&&!_){if(e&&(a=!1),S=si({overwrite:!1,data:"isFromStart",lazy:a&&!_&&On(l),immediateRender:a,stagger:0,parent:m},C),V&&(S[F.prop]=V),Sr(t._startAt=Ve.set(p,S)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(mn?t._startAt.revert(tc):t._startAt.render(-1,!0)),t._zTime=e,!a)r(t._startAt,ve,ve);else if(!e)return}for(t._pt=t._ptCache=0,l=g&&On(l)||l&&!g,T=0;T<p.length;T++){if(z=p[T],w=z._gsap||Of(p)[T]._gsap,t._ptLookup[T]=Y={},Mf[w.id]&&vr.length&&rc(),K=M===p?T:M.indexOf(z),F&&(X=new F).init(z,V||C,t,K,M)!==!1&&(t._pt=P=new wn(t._pt,z,X.name,0,1,X.render,X,0,X.priority),X._props.forEach(function(k){Y[k]=P}),X.priority&&(v=1)),!F||V)for(S in C)Nn[S]&&(X=Vf(S,C,t,K,z,M))?X.priority&&(v=1):Y[S]=P=kf.call(t,z,S,"get",C[S],K,M,0,i.stringFilter);t._op&&t._op[T]&&t.kill(z,t._op[T]),x&&t._pt&&(yr=t,Ie.killTweensOf(z,Y,t.globalTime(e)),W=!t.parent,yr=0),t._pt&&l&&(Mf[w.id]=1)}v&&Yf(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!W,d&&e<=0&&y.render(ii,!0,!0)},u1=function(t,e,n,i,s,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,u,d,f;if(!c)for(c=t._ptCache[e]=[],d=t._ptLookup,f=t._targets.length;f--;){if(h=d[f][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return Af=1,t.vars[e]="+=0",Hf(t,a),Af=0,l?ea(e+" not eligible for reset"):1;c.push(h)}for(f=c.length;f--;)u=c[f],h=u._pt||u,h.s=(i||i===0)&&!s?i:h.s+(i||0)+o*h.c,h.c=n-h.s,u.e&&(u.e=Oe(n)+an(u.e)),u.b&&(u.b=h.s+an(u.b))},f1=function(t,e){var n=t[0]?Mr(t[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return e;s=es({},e);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},d1=function(t,e,n,i){var s=e.ease||i||"power1.inOut",o,a;if(gn(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:s})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:s})},ta=function(t,e,n,i,s){return Ue(t)?t.call(e,n,i,s):Ze(t)&&~t.indexOf("random(")?so(t):t},Zm=Uf+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Jm={};bn(Zm+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Jm[r]=1});var Ve=function(r){ym(t,r);function t(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:Qo(i))||this;var l=a.vars,c=l.duration,h=l.delay,u=l.immediateRender,d=l.stagger,f=l.overwrite,g=l.keyframes,_=l.defaults,p=l.scrollTrigger,m=l.yoyoEase,M=i.parent||Ie,x=(gn(n)||Mm(n)?Ji(n[0]):"length"in i)?[n]:ri(n),y,C,T,S,P,z,v,w;if(a._targets=x.length?Of(x):ea("GSAP target "+n+" not found. https://gsap.com",!Fn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,g||d||jl(c)||jl(h)){if(i=a.vars,y=a.timeline=new on({data:"nested",defaults:_||{},targets:M&&M.data==="nested"?M.vars.targets:x}),y.kill(),y.parent=y._dp=qi(a),y._start=0,d||jl(c)||jl(h)){if(S=x.length,v=d&&Om(d),Ci(d))for(P in d)~Zm.indexOf(P)&&(w||(w={}),w[P]=d[P]);for(C=0;C<S;C++)T=sc(i,Jm),T.stagger=0,m&&(T.yoyoEase=m),w&&es(T,w),z=x[C],T.duration=+ta(c,qi(a),C,z,x),T.delay=(+ta(h,qi(a),C,z,x)||0)-a._delay,!d&&S===1&&T.delay&&(a._delay=h=T.delay,a._start+=h,T.delay=0),y.to(z,T,v?v(C,z,x):0),y._ease=ce.none;y.duration()?c=h=0:a.timeline=0}else if(g){Qo(si(y.vars.defaults,{ease:"none"})),y._ease=jr(g.ease||i.ease||"none");var F=0,X,Y,K;if(gn(g))g.forEach(function(V){return y.to(x,V,">")}),y.duration();else{T={};for(P in g)P==="ease"||P==="easeEach"||d1(P,g[P],T,g.easeEach);for(P in T)for(X=T[P].sort(function(V,W){return V.t-W.t}),F=0,C=0;C<X.length;C++)Y=X[C],K={ease:Y.e,duration:(Y.t-(C?X[C-1].t:0))/100*c},K[P]=Y.v,y.to(x,K,F),F+=K.duration;y.duration()<c&&y.to({},{duration:c-y.duration()})}}c||a.duration(c=y.duration())}else a.timeline=0;return f===!0&&!Rf&&(yr=qi(a),Ie.killTweensOf(x),yr=0),Ai(M,qi(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(u||!c&&!g&&a._start===en(M._time)&&On(u)&&WS(qi(a))&&M.data!=="nested")&&(a._tTime=-ve,a.render(Math.max(0,-h)||0)),p&&Lm(qi(a),p),a}var e=t.prototype;return e.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,h=i<0,u=i>l-ve&&!h?l:i<ve?0:i,d,f,g,_,p,m,M,x,y;if(!c)YS(this,i,s,o);else if(u!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h){if(d=u,x=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+i,s,o);if(d=en(u%_),u===l?(g=this._repeat,d=c):(g=~~(u/_),g&&g===en(u/_)&&(d=c,g--),d>c&&(d=c)),m=this._yoyo&&g&1,m&&(y=this._yEase,d=c-d),p=no(this._tTime,_),d===a&&!o&&this._initted&&g===p)return this._tTime=u,this;g!==p&&(x&&this._yEase&&Ym(x,m),this.vars.repeatRefresh&&!m&&!this._lock&&this._time!==_&&this._initted&&(this._lock=o=1,this.render(en(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(Dm(this,h?i:d,o,s,u))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==p))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._tTime=u,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=M=(y||this._ease)(d/c),this._from&&(this.ratio=M=1-M),d&&!a&&!s&&!g&&(Wn(this,"onStart"),this._tTime!==u))return this;for(f=this._pt;f;)f.r(M,f.d),f=f._next;x&&x.render(i<0?i:x._dur*x._ease(d/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&Sf(this,i,s,o),Wn(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!s&&this.parent&&Wn(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&Sf(this,i,!0,!0),(i||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&Sr(this,1),!s&&!(h&&!a)&&(u||a||m)&&(Wn(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,o,a,l){ia||Un.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Hf(this,c),h=this._ease(c/this._dur),u1(this,i,s,o,a,h,c,l)?this.resetTo(i,s,o,a,1):(fc(this,0),this.parent||Pm(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?$o(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,yr&&yr.vars.overwrite!==!0)._first||$o(this),this.parent&&o!==this.timeline.totalDuration()&&io(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?ri(i):a,c=this._ptLookup,h=this._pt,u,d,f,g,_,p,m;if((!s||s==="all")&&HS(a,l))return s==="all"&&(this._pt=0),$o(this);for(u=this._op=this._op||[],s!=="all"&&(Ze(s)&&(_={},bn(s,function(M){return _[M]=1}),s=_),s=f1(a,s)),m=a.length;m--;)if(~l.indexOf(a[m])){d=c[m],s==="all"?(u[m]=s,g=d,f={}):(f=u[m]=u[m]||{},g=s);for(_ in g)p=d&&d[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&hc(this,p,"_pt"),delete d[_]),f!=="all"&&(f[_]=1)}return this._initted&&!this._pt&&h&&$o(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return jo(1,arguments)},t.delayedCall=function(i,s,o,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,s,o){return jo(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,o){return Ie.killTweensOf(i,s,o)},t}(ra);si(Ve.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});bn("staggerTo,staggerFrom,staggerFromTo",function(r){Ve[r]=function(){var t=new on,e=wf.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var Gf=function(t,e,n){return t[e]=n},$m=function(t,e,n){return t[e](n)},p1=function(t,e,n,i){return t[e](i.fp,n)},m1=function(t,e,n){return t.setAttribute(e,n)},dc=function(t,e){return Ue(t[e])?$m:lc(t[e])&&t.setAttribute?m1:Gf},Km=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},g1=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Wf=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},Xf=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},_1=function(t,e,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(t,e,n),s=o},x1=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?hc(this,e,"_pt"):e.dep||(n=1),e=i;return!n},y1=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},Yf=function(t){for(var e=t._pt,n,i,s,o;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=s},wn=function(){function r(e,n,i,s,o,a,l,c,h){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||Km,this.d=l||this,this.set=c||Gf,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=y1,this.m=n,this.mt=s,this.tween=i},r}();bn(Uf+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return Nf[r]=1});Xn.TweenMax=Xn.TweenLite=Ve;Xn.TimelineLite=Xn.TimelineMax=on;Ie=new on({sortChildren:!1,defaults:eo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Fn.stringFilter=Bf;var ts=[],nc={},v1=[],xm=0,M1=0,gf=function(t){return(nc[t]||v1).map(function(e){return e()})},Cf=function(){var t=Date.now(),e=[];t-xm>2&&(gf("matchMediaInit"),ts.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=Ei.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),gf("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),xm=t,gf("matchMedia"))},Qm=function(){function r(e,n){this.selector=n&&Tf(n),this.data=[],this._r=[],this.isReverted=!1,this.id=M1++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){Ue(n)&&(s=i,i=n,n=Ue);var o=this,a=function(){var c=Re,h=o.selector,u;return c&&c!==o&&c.data.push(o),s&&(o.selector=Tf(s)),Re=o,u=i.apply(o,arguments),Ue(u)&&o._r.push(u),Re=c,o.selector=h,o.isReverted=!1,u};return o.last=a,n===Ue?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var i=Re;Re=null,n(this),Re=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Ve&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof on?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Ve)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=ts.length;o--;)ts[o].id===this.id&&ts.splice(o,1)},t.revert=function(n){this.kill(n||{})},r}(),S1=function(){function r(e){this.contexts=[],this.scope=e,Re&&Re.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){Ci(n)||(n={matches:n});var o=new Qm(0,s||this.scope),a=o.conditions={},l,c,h;Re&&!o.selector&&(o.selector=Re.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?h=1:(l=Ei.matchMedia(n[c]),l&&(ts.indexOf(o)<0&&ts.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(Cf):l.addEventListener("change",Cf)));return h&&i(o,function(u){return o.add(null,u)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),ac={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return Hm(i)})},timeline:function(t){return new on(t)},getTweensOf:function(t,e){return Ie.getTweensOf(t,e)},getProperty:function(t,e,n,i){Ze(t)&&(t=ri(t)[0]);var s=Mr(t||{}).get,o=n?Rm:Cm;return n==="native"&&(n=""),t&&(e?o((Nn[e]&&Nn[e].get||s)(t,e,n,i)):function(a,l,c){return o((Nn[a]&&Nn[a].get||s)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=ri(t),t.length>1){var i=t.map(function(h){return _n.quickSetter(h,e,n)}),s=i.length;return function(h){for(var u=s;u--;)i[u](h)}}t=t[0]||{};var o=Nn[e],a=Mr(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(h){var u=new o;to._pt=0,u.init(t,n?h+n:h,to,0,[t]),u.render(1,u),to._pt&&Xf(1,to)}:a.set(t,l);return o?c:function(h){return c(t,l,n?h+n:h,a,1)}},quickTo:function(t,e,n){var i,s=_n.to(t,es((i={},i[e]="+=0.1",i.paused=!0,i),n||{})),o=function(l,c,h){return s.resetTo(e,l,c,h)};return o.tween=s,o},isTweening:function(t){return Ie.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=jr(t.ease,eo.ease)),dm(eo,t||{})},config:function(t){return dm(Fn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Nn[a]&&!Xn[a]&&ea(e+" effect requires "+a+" plugin.")}),ff[e]=function(a,l,c){return n(ri(a),si(l||{},s),c)},o&&(on.prototype[e]=function(a,l,c){return this.add(ff[e](a,Ci(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){ce[t]=jr(e)},parseEase:function(t,e){return arguments.length?jr(t,e):ce},getById:function(t){return Ie.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new on(t),i,s;for(n.smoothChildTiming=On(t.smoothChildTiming),Ie.remove(n),n._dp=0,n._time=n._tTime=Ie._time,i=Ie._first;i;)s=i._next,(e||!(!i._dur&&i instanceof Ve&&i.vars.onComplete===i._targets[0]))&&Ai(n,i,i._start-i._delay),i=s;return Ai(Ie,n,0),n},context:function(t,e){return t?new Qm(t,e):Re},matchMedia:function(t){return new S1(t)},matchMediaRefresh:function(){return ts.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||Cf()},addEventListener:function(t,e){var n=nc[t]||(nc[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=nc[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:t1,wrapYoyo:e1,distribute:Om,random:Bm,snap:Fm,normalize:jS,getUnit:an,clamp:JS,splitColor:Gm,toArray:ri,selector:Tf,mapRange:km,pipe:KS,unitize:QS,interpolate:n1,shuffle:Um},install:wm,effects:ff,ticker:Un,updateRoot:on.updateRoot,plugins:Nn,globalTimeline:Ie,core:{PropTween:wn,globals:Tm,Tween:Ve,Timeline:on,Animation:ra,getCache:Mr,_removeLinkedListItem:hc,reverting:function(){return mn},context:function(t){return t&&Re&&(Re.data.push(t),t._ctx=Re),Re},suppressOverwrites:function(t){return Rf=t}}};bn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return ac[r]=Ve[r]});Un.add(on.updateRoot);to=ac.to({},{duration:0});var b1=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},w1=function(t,e){var n=t._targets,i,s,o;for(i in e)for(s=n.length;s--;)o=t._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=b1(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[s],i))},_f=function(t,e){return{name:t,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(Ze(s)&&(l={},bn(s,function(h){return l[h]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}w1(a,s)}}}},_n=ac.registerPlugin({name:"attr",init:function(t,e,n,i,s){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)mn?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},_f("roundProps",Ef),_f("modifiers"),_f("snap",Fm))||ac;Ve.version=on.version=_n.version="3.12.5";bm=1;Pf()&&ro();var T1=ce.Power0,E1=ce.Power1,A1=ce.Power2,C1=ce.Power3,R1=ce.Power4,P1=ce.Linear,I1=ce.Quad,L1=ce.Cubic,D1=ce.Quart,N1=ce.Quint,U1=ce.Strong,O1=ce.Elastic,F1=ce.Back,B1=ce.SteppedEase,z1=ce.Bounce,k1=ce.Sine,V1=ce.Expo,H1=ce.Circ;var jm,wr,ao,jf,ls,G1,tg,td,W1=function(){return typeof window!="undefined"},Ki={},as=180/Math.PI,lo=Math.PI/180,oo=Math.atan2,eg=1e8,ed=/([A-Z])/g,X1=/(left|right|width|margin|padding|x)/i,Y1=/[\s,\(]\S/,Ri={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Jf=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},q1=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Z1=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},J1=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},lg=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},cg=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},$1=function(t,e,n){return t.style[e]=n},K1=function(t,e,n){return t.style.setProperty(e,n)},Q1=function(t,e,n){return t._gsap[e]=n},j1=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},tb=function(t,e,n,i,s){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},eb=function(t,e,n,i,s){var o=t._gsap;o[e]=n,o.renderTransform(s,o)},Le="transform",Bn=Le+"Origin",nb=function r(t,e){var n=this,i=this.target,s=i.style,o=i._gsap;if(t in Ki&&s){if(this.tfm=this.tfm||{},t!=="transform")t=Ri[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=$i(i,a)}):this.tfm[t]=o.x?o[t]:$i(i,t),t===Bn&&(this.tfm.zOrigin=o.zOrigin);else return Ri.transform.split(",").forEach(function(a){return r.call(n,a,e)});if(this.props.indexOf(Le)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Bn,e,"")),t=Le}(s||e)&&this.props.push(t,e,s[t])},hg=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},ib=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,o;for(s=0;s<t.length;s+=3)t[s+1]?e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(ed,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=td(),(!s||!s.isStart)&&!n[Le]&&(hg(n),i.zOrigin&&n[Bn]&&(n[Bn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},ug=function(t,e){var n={target:t,props:[],revert:ib,save:nb};return t._gsap||_n.core.getCache(t),e&&e.split(",").forEach(function(i){return n.save(i)}),n},fg,$f=function(t,e){var n=wr.createElementNS?wr.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):wr.createElement(t);return n&&n.style?n:wr.createElement(t)},Pi=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(ed,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,co(e)||e,1)||""},ng="O,Moz,ms,Ms,Webkit".split(","),co=function(t,e,n){var i=e||ls,s=i.style,o=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(ng[o]+t in s););return o<0?null:(o===3?"ms":o>=0?ng[o]:"")+t},Kf=function(){W1()&&window.document&&(jm=window,wr=jm.document,ao=wr.documentElement,ls=$f("div")||{style:{}},G1=$f("div"),Le=co(Le),Bn=Le+"Origin",ls.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",fg=!!co("perspective"),td=_n.core.reverting,jf=1)},qf=function r(t){var e=$f("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,s=this.style.cssText,o;if(ao.appendChild(e),e.appendChild(this),this.style.display="block",t)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=r}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),ao.removeChild(e),this.style.cssText=s,o},ig=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},dg=function(t){var e;try{e=t.getBBox()}catch{e=qf.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===qf||(e=qf.call(t,!0)),e&&!e.width&&!e.x&&!e.y?{x:+ig(t,["x","cx","x1"])||0,y:+ig(t,["y","cy","y1"])||0,width:0,height:0}:e},pg=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&dg(t))},cs=function(t,e){if(e){var n=t.style,i;e in Ki&&e!==Bn&&(e=Le),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(ed,"-$1").toLowerCase())):n.removeAttribute(e)}},Tr=function(t,e,n,i,s,o){var a=new wn(t._pt,e,n,0,1,o?cg:lg);return t._pt=a,a.b=i,a.e=s,t._props.push(n),a},rg={deg:1,rad:1,turn:1},rb={grid:1,flex:1},Er=function r(t,e,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=ls.style,l=X1.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,d=i==="px",f=i==="%",g,_,p,m;if(i===o||!s||rg[i]||rg[o])return s;if(o!=="px"&&!d&&(s=r(t,e,n,"px")),m=t.getCTM&&pg(t),(f||o==="%")&&(Ki[e]||~e.indexOf("adius")))return g=m?t.getBBox()[l?"width":"height"]:t[h],Oe(f?s/g*u:s/100*g);if(a[l?"width":"height"]=u+(d?o:i),_=~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,m&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===wr||!_.appendChild)&&(_=wr.body),p=_._gsap,p&&f&&p.width&&l&&p.time===Un.time&&!p.uncache)return Oe(s/p.width*u);if(f&&(e==="height"||e==="width")){var M=t.style[e];t.style[e]=u+i,g=t[h],M?t.style[e]=M:cs(t,e)}else(f||o==="%")&&!rb[Pi(_,"display")]&&(a.position=Pi(t,"position")),_===t&&(a.position="static"),_.appendChild(ls),g=ls[h],_.removeChild(ls),a.position="absolute";return l&&f&&(p=Mr(_),p.time=Un.time,p.width=_[h]),Oe(d?g*s/u:g&&s?u/g*s:0)},$i=function(t,e,n,i){var s;return jf||Kf(),e in Ri&&e!=="transform"&&(e=Ri[e],~e.indexOf(",")&&(e=e.split(",")[0])),Ki[e]&&e!=="transform"?(s=la(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:mc(Pi(t,Bn))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=pc[e]&&pc[e](t,e,n)||Pi(t,e)||Ff(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Er(t,e,s,n)+n:s},sb=function(t,e,n,i){if(!n||n==="none"){var s=co(e,t,1),o=s&&Pi(t,s,1);o&&o!==n?(e=s,n=o):e==="borderColor"&&(n=Pi(t,"borderTopColor"))}var a=new wn(this._pt,t.style,e,0,1,Wf),l=0,c=0,h,u,d,f,g,_,p,m,M,x,y,C;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(_=t.style[e],t.style[e]=i,i=Pi(t,e)||i,_?t.style[e]=_:cs(t,e)),h=[n,i],Bf(h),n=h[0],i=h[1],d=n.match(ns)||[],C=i.match(ns)||[],C.length){for(;u=ns.exec(i);)p=u[0],M=i.substring(l,u.index),g?g=(g+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(g=1),p!==(_=d[c++]||"")&&(f=parseFloat(_)||0,y=_.substr((f+"").length),p.charAt(1)==="="&&(p=is(f,p)+y),m=parseFloat(p),x=p.substr((m+"").length),l=ns.lastIndex-x.length,x||(x=x||Fn.units[e]||y,l===i.length&&(i+=x,a.e+=x)),y!==x&&(f=Er(t,e,_,x)||0),a._pt={_next:a._pt,p:M||c===1?M:",",s:f,c:m-f,m:g&&g<4||e==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=e==="display"&&i==="none"?cg:lg;return Lf.test(i)&&(a.e=0),this._pt=a,a},sg={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},ob=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=sg[n]||n,e[1]=sg[i]||i,e.join(" ")},ab=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Ki[a]&&(l=1,a=a==="transformOrigin"?Bn:Le),cs(n,a);l&&(cs(n,Le),o&&(o.svg&&n.removeAttribute("transform"),la(n,1),o.uncache=1,hg(i)))}},pc={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var o=t._pt=new wn(t._pt,e,n,0,0,ab);return o.u=i,o.pr=-10,o.tween=s,t._props.push(n),1}}},aa=[1,0,0,1,0,0],mg={},gg=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},og=function(t){var e=Pi(t,Le);return gg(e)?aa:e.substr(7).match(If).map(Oe)},nd=function(t,e){var n=t._gsap||Mr(t),i=t.style,s=og(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?aa:s):(s===aa&&!t.offsetParent&&t!==ao&&!n.svg&&(l=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent)&&(c=1,a=t.nextElementSibling,ao.appendChild(t)),s=og(t),l?i.display=l:cs(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):ao.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Qf=function(t,e,n,i,s,o){var a=t._gsap,l=s||nd(t,!0),c=a.xOrigin||0,h=a.yOrigin||0,u=a.xOffset||0,d=a.yOffset||0,f=l[0],g=l[1],_=l[2],p=l[3],m=l[4],M=l[5],x=e.split(" "),y=parseFloat(x[0])||0,C=parseFloat(x[1])||0,T,S,P,z;n?l!==aa&&(S=f*p-g*_)&&(P=y*(p/S)+C*(-_/S)+(_*M-p*m)/S,z=y*(-g/S)+C*(f/S)-(f*M-g*m)/S,y=P,C=z):(T=dg(t),y=T.x+(~x[0].indexOf("%")?y/100*T.width:y),C=T.y+(~(x[1]||x[0]).indexOf("%")?C/100*T.height:C)),i||i!==!1&&a.smooth?(m=y-c,M=C-h,a.xOffset=u+(m*f+M*_)-m,a.yOffset=d+(m*g+M*p)-M):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=C,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[Bn]="0px 0px",o&&(Tr(o,a,"xOrigin",c,y),Tr(o,a,"yOrigin",h,C),Tr(o,a,"xOffset",u,a.xOffset),Tr(o,a,"yOffset",d,a.yOffset)),t.setAttribute("data-svg-origin",y+" "+C)},la=function(t,e){var n=t._gsap||new zf(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=Pi(t,Bn)||"0",h,u,d,f,g,_,p,m,M,x,y,C,T,S,P,z,v,w,F,X,Y,K,V,W,k,ht,U,dt,Lt,Ht,O,N;return h=u=d=_=p=m=M=x=y=0,f=g=1,n.svg=!!(t.getCTM&&pg(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Le]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Le]!=="none"?l[Le]:"")),i.scale=i.rotate=i.translate="none"),S=nd(t,n.svg),n.svg&&(n.uncache?(k=t.getBBox(),c=n.xOrigin-k.x+"px "+(n.yOrigin-k.y)+"px",W=""):W=!e&&t.getAttribute("data-svg-origin"),Qf(t,W||c,!!W||n.originIsAbsolute,n.smooth!==!1,S)),C=n.xOrigin||0,T=n.yOrigin||0,S!==aa&&(w=S[0],F=S[1],X=S[2],Y=S[3],h=K=S[4],u=V=S[5],S.length===6?(f=Math.sqrt(w*w+F*F),g=Math.sqrt(Y*Y+X*X),_=w||F?oo(F,w)*as:0,M=X||Y?oo(X,Y)*as+_:0,M&&(g*=Math.abs(Math.cos(M*lo))),n.svg&&(h-=C-(C*w+T*X),u-=T-(C*F+T*Y))):(N=S[6],Ht=S[7],U=S[8],dt=S[9],Lt=S[10],O=S[11],h=S[12],u=S[13],d=S[14],P=oo(N,Lt),p=P*as,P&&(z=Math.cos(-P),v=Math.sin(-P),W=K*z+U*v,k=V*z+dt*v,ht=N*z+Lt*v,U=K*-v+U*z,dt=V*-v+dt*z,Lt=N*-v+Lt*z,O=Ht*-v+O*z,K=W,V=k,N=ht),P=oo(-X,Lt),m=P*as,P&&(z=Math.cos(-P),v=Math.sin(-P),W=w*z-U*v,k=F*z-dt*v,ht=X*z-Lt*v,O=Y*v+O*z,w=W,F=k,X=ht),P=oo(F,w),_=P*as,P&&(z=Math.cos(P),v=Math.sin(P),W=w*z+F*v,k=K*z+V*v,F=F*z-w*v,V=V*z-K*v,w=W,K=k),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,m=180-m),f=Oe(Math.sqrt(w*w+F*F+X*X)),g=Oe(Math.sqrt(V*V+N*N)),P=oo(K,V),M=Math.abs(P)>2e-4?P*as:0,y=O?1/(O<0?-O:O):0),n.svg&&(W=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!gg(Pi(t,Le)),W&&t.setAttribute("transform",W))),Math.abs(M)>90&&Math.abs(M)<270&&(s?(f*=-1,M+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,M+=M<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=u-((n.yPercent=u&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-u)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=d+o,n.scaleX=Oe(f),n.scaleY=Oe(g),n.rotation=Oe(_)+a,n.rotationX=Oe(p)+a,n.rotationY=Oe(m)+a,n.skewX=M+a,n.skewY=x+a,n.transformPerspective=y+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[Bn]=mc(c)),n.xOffset=n.yOffset=0,n.force3D=Fn.force3D,n.renderTransform=n.svg?cb:fg?_g:lb,n.uncache=0,n},mc=function(t){return(t=t.split(" "))[0]+" "+t[1]},Zf=function(t,e,n){var i=an(e);return Oe(parseFloat(e)+parseFloat(Er(t,"x",n+"px",i)))+i},lb=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,_g(t,e)},ss="0deg",oa="0px",os=") ",_g=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,u=n.rotationX,d=n.skewX,f=n.skewY,g=n.scaleX,_=n.scaleY,p=n.transformPerspective,m=n.force3D,M=n.target,x=n.zOrigin,y="",C=m==="auto"&&t&&t!==1||m===!0;if(x&&(u!==ss||h!==ss)){var T=parseFloat(h)*lo,S=Math.sin(T),P=Math.cos(T),z;T=parseFloat(u)*lo,z=Math.cos(T),o=Zf(M,o,S*z*-x),a=Zf(M,a,-Math.sin(T)*-x),l=Zf(M,l,P*z*-x+x)}p!==oa&&(y+="perspective("+p+os),(i||s)&&(y+="translate("+i+"%, "+s+"%) "),(C||o!==oa||a!==oa||l!==oa)&&(y+=l!==oa||C?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+os),c!==ss&&(y+="rotate("+c+os),h!==ss&&(y+="rotateY("+h+os),u!==ss&&(y+="rotateX("+u+os),(d!==ss||f!==ss)&&(y+="skew("+d+", "+f+os),(g!==1||_!==1)&&(y+="scale("+g+", "+_+os),M.style[Le]=y||"translate(0, 0)"},cb=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,u=n.scaleX,d=n.scaleY,f=n.target,g=n.xOrigin,_=n.yOrigin,p=n.xOffset,m=n.yOffset,M=n.forceCSS,x=parseFloat(o),y=parseFloat(a),C,T,S,P,z;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=lo,c*=lo,C=Math.cos(l)*u,T=Math.sin(l)*u,S=Math.sin(l-c)*-d,P=Math.cos(l-c)*d,c&&(h*=lo,z=Math.tan(c-h),z=Math.sqrt(1+z*z),S*=z,P*=z,h&&(z=Math.tan(h),z=Math.sqrt(1+z*z),C*=z,T*=z)),C=Oe(C),T=Oe(T),S=Oe(S),P=Oe(P)):(C=u,P=d,T=S=0),(x&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(x=Er(f,"x",o,"px"),y=Er(f,"y",a,"px")),(g||_||p||m)&&(x=Oe(x+g-(g*C+_*S)+p),y=Oe(y+_-(g*T+_*P)+m)),(i||s)&&(z=f.getBBox(),x=Oe(x+i/100*z.width),y=Oe(y+s/100*z.height)),z="matrix("+C+","+T+","+S+","+P+","+x+","+y+")",f.setAttribute("transform",z),M&&(f.style[Le]=z)},hb=function(t,e,n,i,s){var o=360,a=Ze(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?as:1),c=l-i,h=i+c+"deg",u,d;return a&&(u=s.split("_")[1],u==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),u==="cw"&&c<0?c=(c+o*eg)%o-~~(c/o)*o:u==="ccw"&&c>0&&(c=(c-o*eg)%o-~~(c/o)*o)),t._pt=d=new wn(t._pt,e,n,i,c,q1),d.e=h,d.u="deg",t._props.push(n),d},ag=function(t,e){for(var n in e)t[n]=e[n];return t},ub=function(t,e,n){var i=ag({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,u,d,f,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Le]=e,a=la(n,1),cs(n,Le),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Le],o[Le]=e,a=la(n,1),o[Le]=c);for(l in Ki)c=i[l],h=a[l],c!==h&&s.indexOf(l)<0&&(f=an(c),g=an(h),u=f!==g?Er(n,l,c,g):parseFloat(c),d=parseFloat(h),t._pt=new wn(t._pt,a,l,u,d-u,Jf),t._pt.u=g||0,t._props.push(l));ag(a,i)};bn("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",o=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(a){return t<2?r+a:"border"+a+r});pc[t>1?"border"+r:r]=function(a,l,c,h,u){var d,f;if(arguments.length<4)return d=o.map(function(g){return $i(a,g,c)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(h+"").split(" "),f={},o.forEach(function(g,_){return f[g]=d[_]=d[_]||d[(_-1)/2|0]}),a.init(l,f,u)}});var id={name:"css",register:Kf,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var o=this._props,a=t.style,l=n.vars.startAt,c,h,u,d,f,g,_,p,m,M,x,y,C,T,S,P;jf||Kf(),this.styles=this.styles||ug(t),P=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(h=e[_],!(Nn[_]&&Vf(_,e,n,i,t,s)))){if(f=typeof h,g=pc[_],f==="function"&&(h=h.call(n,i,t,s),f=typeof h),f==="string"&&~h.indexOf("random(")&&(h=so(h)),g)g(this,t,_,h,n)&&(S=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),h+="",Zi.lastIndex=0,Zi.test(c)||(p=an(c),m=an(h)),m?p!==m&&(c=Er(t,_,c,m)+m):p&&(h+=p),this.add(a,"setProperty",c,h,i,s,0,0,_),o.push(_),P.push(_,0,a[_]);else if(f!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,t,s):l[_],Ze(c)&&~c.indexOf("random(")&&(c=so(c)),an(c+"")||c==="auto"||(c+=Fn.units[_]||an($i(t,_))||""),(c+"").charAt(1)==="="&&(c=$i(t,_))):c=$i(t,_),d=parseFloat(c),M=f==="string"&&h.charAt(1)==="="&&h.substr(0,2),M&&(h=h.substr(2)),u=parseFloat(h),_ in Ri&&(_==="autoAlpha"&&(d===1&&$i(t,"visibility")==="hidden"&&u&&(d=0),P.push("visibility",0,a.visibility),Tr(this,a,"visibility",d?"inherit":"hidden",u?"inherit":"hidden",!u)),_!=="scale"&&_!=="transform"&&(_=Ri[_],~_.indexOf(",")&&(_=_.split(",")[0]))),x=_ in Ki,x){if(this.styles.save(_),y||(C=t._gsap,C.renderTransform&&!e.parseTransform||la(t,e.parseTransform),T=e.smoothOrigin!==!1&&C.smooth,y=this._pt=new wn(this._pt,a,Le,0,1,C.renderTransform,C,0,-1),y.dep=1),_==="scale")this._pt=new wn(this._pt,C,"scaleY",C.scaleY,(M?is(C.scaleY,M+u):u)-C.scaleY||0,Jf),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){P.push(Bn,0,a[Bn]),h=ob(h),C.svg?Qf(t,h,0,T,0,this):(m=parseFloat(h.split(" ")[2])||0,m!==C.zOrigin&&Tr(this,C,"zOrigin",C.zOrigin,m),Tr(this,a,_,mc(c),mc(h)));continue}else if(_==="svgOrigin"){Qf(t,h,1,T,0,this);continue}else if(_ in mg){hb(this,C,_,d,M?is(d,M+h):h);continue}else if(_==="smoothOrigin"){Tr(this,C,"smooth",C.smooth,h);continue}else if(_==="force3D"){C[_]=h;continue}else if(_==="transform"){ub(this,h,t);continue}}else _ in a||(_=co(_)||_);if(x||(u||u===0)&&(d||d===0)&&!Y1.test(h)&&_ in a)p=(c+"").substr((d+"").length),u||(u=0),m=an(h)||(_ in Fn.units?Fn.units[_]:p),p!==m&&(d=Er(t,_,c,m)),this._pt=new wn(this._pt,x?C:a,_,d,(M?is(d,M+u):u)-d,!x&&(m==="px"||_==="zIndex")&&e.autoRound!==!1?J1:Jf),this._pt.u=m||0,p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=Z1);else if(_ in a)sb.call(this,t,_,c,M?M+h:h);else if(_ in t)this.add(t,_,c||t[_],M?M+h:h,i,s);else if(_!=="parseTransform"){cc(_,h);continue}x||(_ in a?P.push(_,0,a[_]):P.push(_,1,c||t[_])),o.push(_)}}S&&Yf(this)},render:function(t,e){if(e.tween._time||!td())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:$i,aliases:Ri,getSetter:function(t,e,n){var i=Ri[e];return i&&i.indexOf(",")<0&&(e=i),e in Ki&&e!==Bn&&(t._gsap.x||$i(t,"x"))?n&&tg===n?e==="scale"?j1:Q1:(tg=n||{})&&(e==="scale"?tb:eb):t.style&&!lc(t.style[e])?$1:~e.indexOf("-")?K1:dc(t,e)},core:{_removeProperty:cs,_getMatrix:nd}};_n.utils.checkPrefix=co;_n.core.getStyleSaver=ug;(function(r,t,e,n){var i=bn(r+","+t+","+e,function(s){Ki[s]=1});bn(t,function(s){Fn.units[s]="deg",mg[s]=1}),Ri[i[13]]=r+","+t,bn(n,function(s){var o=s.split(":");Ri[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");bn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Fn.units[r]="px"});_n.registerPlugin(id);var Yn=_n.registerPlugin(id)||_n,Jb=Yn.core.Tween;function xg(r,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function fb(r,t,e){return t&&xg(r.prototype,t),e&&xg(r,e),r}var ln,xc,db,qn,Ar,Cr,uo,vg,hs,ha,Mg,Qi,xi,Sg,bg=function(){return ln||typeof window!="undefined"&&(ln=window.gsap)&&ln.registerPlugin&&ln},wg=1,ho=[],te=[],yi=[],ua=Date.now,rd=function(t,e){return e},pb=function(){var t=ha.core,e=t.bridge||{},n=t._scrollers,i=t._proxies;n.push.apply(n,te),i.push.apply(i,yi),te=n,yi=i,rd=function(o,a){return e[o](a)}},tr=function(t,e){return~yi.indexOf(t)&&yi[yi.indexOf(t)+1][e]},fa=function(t){return!!~Mg.indexOf(t)},En=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:i!==!1,capture:!!s})},Tn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},gc="scrollLeft",_c="scrollTop",sd=function(){return Qi&&Qi.isPressed||te.cache++},yc=function(t,e){var n=function i(s){if(s||s===0){wg&&(qn.history.scrollRestoration="manual");var o=Qi&&Qi.isPressed;s=i.v=Math.round(s)||(Qi&&Qi.iOS?1:0),t(s),i.cacheID=te.cache,o&&rd("ss",s)}else(e||te.cache!==i.cacheID||rd("ref"))&&(i.cacheID=te.cache,i.v=t());return i.v+i.offset};return n.offset=0,t&&n},xn={s:gc,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:yc(function(r){return arguments.length?qn.scrollTo(r,We.sc()):qn.pageXOffset||Ar[gc]||Cr[gc]||uo[gc]||0})},We={s:_c,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:xn,sc:yc(function(r){return arguments.length?qn.scrollTo(xn.sc(),r):qn.pageYOffset||Ar[_c]||Cr[_c]||uo[_c]||0})},An=function(t,e){return(e&&e._ctx&&e._ctx.selector||ln.utils.toArray)(t)[0]||(typeof t=="string"&&ln.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},ji=function(t,e){var n=e.s,i=e.sc;fa(t)&&(t=Ar.scrollingElement||Cr);var s=te.indexOf(t),o=i===We.sc?1:2;!~s&&(s=te.push(t)-1),te[s+o]||En(t,"scroll",sd);var a=te[s+o],l=a||(te[s+o]=yc(tr(t,n),!0)||(fa(t)?i:yc(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,a||(l.smooth=ln.getProperty(t,"scrollBehavior")==="smooth"),l},vc=function(t,e,n){var i=t,s=t,o=ua(),a=o,l=e||50,c=Math.max(500,l*3),h=function(g,_){var p=ua();_||p-o>l?(s=i,i=g,a=o,o=p):n?i+=g:i=s+(g-s)/(p-a)*(o-a)},u=function(){s=i=n?0:i,a=o=0},d=function(g){var _=a,p=s,m=ua();return(g||g===0)&&g!==i&&h(g),o===a||m-a>c?0:(i+(n?p:-p))/((n?m:o)-_)*1e3};return{update:h,reset:u,getVelocity:d}},ca=function(t,e){return e&&!t._gsapAllow&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},yg=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},Tg=function(){ha=ln.core.globals().ScrollTrigger,ha&&ha.core&&pb()},Eg=function(t){return ln=t||bg(),!xc&&ln&&typeof document!="undefined"&&document.body&&(qn=window,Ar=document,Cr=Ar.documentElement,uo=Ar.body,Mg=[qn,Ar,Cr,uo],db=ln.utils.clamp,Sg=ln.core.context||function(){},hs="onpointerenter"in uo?"pointer":"mouse",vg=Fe.isTouch=qn.matchMedia&&qn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in qn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,xi=Fe.eventTypes=("ontouchstart"in Cr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Cr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return wg=0},500),Tg(),xc=1),xc};xn.op=We;te.cache=0;var Fe=function(){function r(e){this.init(e)}var t=r.prototype;return t.init=function(n){xc||Eg(ln)||console.warn("Please gsap.registerPlugin(Observer)"),ha||Tg();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,h=n.preventDefault,u=n.onStop,d=n.onStopDelay,f=n.ignore,g=n.wheelSpeed,_=n.event,p=n.onDragStart,m=n.onDragEnd,M=n.onDrag,x=n.onPress,y=n.onRelease,C=n.onRight,T=n.onLeft,S=n.onUp,P=n.onDown,z=n.onChangeX,v=n.onChangeY,w=n.onChange,F=n.onToggleX,X=n.onToggleY,Y=n.onHover,K=n.onHoverEnd,V=n.onMove,W=n.ignoreCheck,k=n.isNormalizer,ht=n.onGestureStart,U=n.onGestureEnd,dt=n.onWheel,Lt=n.onEnable,Ht=n.onDisable,O=n.onClick,N=n.scrollSpeed,L=n.capture,E=n.allowClicks,nt=n.lockAxis,at=n.onLockAxis;this.target=a=An(a)||Cr,this.vars=n,f&&(f=ln.utils.toArray(f)),i=i||1e-9,s=s||0,g=g||1,N=N||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(qn.getComputedStyle(uo).lineHeight)||22);var et,ft,Q,A,q,tt,rt,B=this,H=0,D=0,R=n.passive||!h,b=ji(a,xn),j=ji(a,We),ct=b(),ut=j(),ot=~o.indexOf("touch")&&!~o.indexOf("pointer")&&xi[0]==="pointerdown",Pt=fa(a),xt=a.ownerDocument||Ar,vt=[0,0,0],Vt=[0,0,0],_t=0,Et=function(){return _t=ua()},It=function(Nt,ue){return(B.event=Nt)&&f&&~f.indexOf(Nt.target)||ue&&ot&&Nt.pointerType!=="touch"||W&&W(Nt,ue)},kt=function(){B._vx.reset(),B._vy.reset(),ft.pause(),u&&u(B)},Ct=function(){var Nt=B.deltaX=yg(vt),ue=B.deltaY=yg(Vt),Tt=Math.abs(Nt)>=i,Gt=Math.abs(ue)>=i;w&&(Tt||Gt)&&w(B,Nt,ue,vt,Vt),Tt&&(C&&B.deltaX>0&&C(B),T&&B.deltaX<0&&T(B),z&&z(B),F&&B.deltaX<0!=H<0&&F(B),H=B.deltaX,vt[0]=vt[1]=vt[2]=0),Gt&&(P&&B.deltaY>0&&P(B),S&&B.deltaY<0&&S(B),v&&v(B),X&&B.deltaY<0!=D<0&&X(B),D=B.deltaY,Vt[0]=Vt[1]=Vt[2]=0),(A||Q)&&(V&&V(B),Q&&(M(B),Q=!1),A=!1),tt&&!(tt=!1)&&at&&at(B),q&&(dt(B),q=!1),et=0},Zt=function(Nt,ue,Tt){vt[Tt]+=Nt,Vt[Tt]+=ue,B._vx.update(Nt),B._vy.update(ue),c?et||(et=requestAnimationFrame(Ct)):Ct()},Xt=function(Nt,ue){nt&&!rt&&(B.axis=rt=Math.abs(Nt)>Math.abs(ue)?"x":"y",tt=!0),rt!=="y"&&(vt[2]+=Nt,B._vx.update(Nt,!0)),rt!=="x"&&(Vt[2]+=ue,B._vy.update(ue,!0)),c?et||(et=requestAnimationFrame(Ct)):Ct()},oe=function(Nt){if(!It(Nt,1)){Nt=ca(Nt,h);var ue=Nt.clientX,Tt=Nt.clientY,Gt=ue-B.x,Bt=Tt-B.y,qt=B.isDragging;B.x=ue,B.y=Tt,(qt||Math.abs(B.startX-ue)>=s||Math.abs(B.startY-Tt)>=s)&&(M&&(Q=!0),qt||(B.isDragging=!0),Xt(Gt,Bt),qt||p&&p(B))}},Z=B.onPress=function(Ft){It(Ft,1)||Ft&&Ft.button||(B.axis=rt=null,ft.pause(),B.isPressed=!0,Ft=ca(Ft),H=D=0,B.startX=B.x=Ft.clientX,B.startY=B.y=Ft.clientY,B._vx.reset(),B._vy.reset(),En(k?a:xt,xi[1],oe,R,!0),B.deltaX=B.deltaY=0,x&&x(B))},gt=B.onRelease=function(Ft){if(!It(Ft,1)){Tn(k?a:xt,xi[1],oe,!0);var Nt=!isNaN(B.y-B.startY),ue=B.isDragging,Tt=ue&&(Math.abs(B.x-B.startX)>3||Math.abs(B.y-B.startY)>3),Gt=ca(Ft);!Tt&&Nt&&(B._vx.reset(),B._vy.reset(),h&&E&&ln.delayedCall(.08,function(){if(ua()-_t>300&&!Ft.defaultPrevented){if(Ft.target.click)Ft.target.click();else if(xt.createEvent){var Bt=xt.createEvent("MouseEvents");Bt.initMouseEvent("click",!0,!0,qn,1,Gt.screenX,Gt.screenY,Gt.clientX,Gt.clientY,!1,!1,!1,!1,0,null),Ft.target.dispatchEvent(Bt)}}})),B.isDragging=B.isGesturing=B.isPressed=!1,u&&ue&&!k&&ft.restart(!0),m&&ue&&m(B),y&&y(B,Tt)}},lt=function(Nt){return Nt.touches&&Nt.touches.length>1&&(B.isGesturing=!0)&&ht(Nt,B.isDragging)},pt=function(){return(B.isGesturing=!1)||U(B)},Mt=function(Nt){if(!It(Nt)){var ue=b(),Tt=j();Zt((ue-ct)*N,(Tt-ut)*N,1),ct=ue,ut=Tt,u&&ft.restart(!0)}},St=function(Nt){if(!It(Nt)){Nt=ca(Nt,h),dt&&(q=!0);var ue=(Nt.deltaMode===1?l:Nt.deltaMode===2?qn.innerHeight:1)*g;Zt(Nt.deltaX*ue,Nt.deltaY*ue,0),u&&!k&&ft.restart(!0)}},Jt=function(Nt){if(!It(Nt)){var ue=Nt.clientX,Tt=Nt.clientY,Gt=ue-B.x,Bt=Tt-B.y;B.x=ue,B.y=Tt,A=!0,u&&ft.restart(!0),(Gt||Bt)&&Xt(Gt,Bt)}},_e=function(Nt){B.event=Nt,Y(B)},Te=function(Nt){B.event=Nt,K(B)},ne=function(Nt){return It(Nt)||ca(Nt,h)&&O(B)};ft=B._dc=ln.delayedCall(d||.25,kt).pause(),B.deltaX=B.deltaY=0,B._vx=vc(0,50,!0),B._vy=vc(0,50,!0),B.scrollX=b,B.scrollY=j,B.isDragging=B.isGesturing=B.isPressed=!1,Sg(this),B.enable=function(Ft){return B.isEnabled||(En(Pt?xt:a,"scroll",sd),o.indexOf("scroll")>=0&&En(Pt?xt:a,"scroll",Mt,R,L),o.indexOf("wheel")>=0&&En(a,"wheel",St,R,L),(o.indexOf("touch")>=0&&vg||o.indexOf("pointer")>=0)&&(En(a,xi[0],Z,R,L),En(xt,xi[2],gt),En(xt,xi[3],gt),E&&En(a,"click",Et,!0,!0),O&&En(a,"click",ne),ht&&En(xt,"gesturestart",lt),U&&En(xt,"gestureend",pt),Y&&En(a,hs+"enter",_e),K&&En(a,hs+"leave",Te),V&&En(a,hs+"move",Jt)),B.isEnabled=!0,Ft&&Ft.type&&Z(Ft),Lt&&Lt(B)),B},B.disable=function(){B.isEnabled&&(ho.filter(function(Ft){return Ft!==B&&fa(Ft.target)}).length||Tn(Pt?xt:a,"scroll",sd),B.isPressed&&(B._vx.reset(),B._vy.reset(),Tn(k?a:xt,xi[1],oe,!0)),Tn(Pt?xt:a,"scroll",Mt,L),Tn(a,"wheel",St,L),Tn(a,xi[0],Z,L),Tn(xt,xi[2],gt),Tn(xt,xi[3],gt),Tn(a,"click",Et,!0),Tn(a,"click",ne),Tn(xt,"gesturestart",lt),Tn(xt,"gestureend",pt),Tn(a,hs+"enter",_e),Tn(a,hs+"leave",Te),Tn(a,hs+"move",Jt),B.isEnabled=B.isPressed=B.isDragging=!1,Ht&&Ht(B))},B.kill=B.revert=function(){B.disable();var Ft=ho.indexOf(B);Ft>=0&&ho.splice(Ft,1),Qi===B&&(Qi=0)},ho.push(B),k&&fa(a)&&(Qi=B),B.enable(_)},fb(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r}();Fe.version="3.12.5";Fe.create=function(r){return new Fe(r)};Fe.register=Eg;Fe.getAll=function(){return ho.slice()};Fe.getById=function(r){return ho.filter(function(t){return t.vars.id===r})[0]};bg()&&ln.registerPlugin(Fe);var Dt,mo,he,De,vi,we,Wg,Oc,Ta,ya,pa,Mc,yn,kc,dd,Rn,Ag,Cg,go,Xg,od,Yg,Cn,pd,qg,Zg,Rr,md,vd,_o,Md,Fc,gd,ad,Sc=1,vn=Date.now,ld=vn(),li=0,ma=0,Rg=function(t,e,n){var i=Jn(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=i,i?t.substr(6,t.length-7):t},Pg=function(t,e){return e&&(!Jn(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},mb=function r(){return ma&&requestAnimationFrame(r)},Ig=function(){return kc=1},Lg=function(){return kc=0},Ii=function(t){return t},ga=function(t){return Math.round(t*1e5)/1e5||0},Jg=function(){return typeof window!="undefined"},$g=function(){return Dt||Jg()&&(Dt=window.gsap)&&Dt.registerPlugin&&Dt},gs=function(t){return!!~Wg.indexOf(t)},Kg=function(t){return(t==="Height"?Md:he["inner"+t])||vi["client"+t]||we["client"+t]},Qg=function(t){return tr(t,"getBoundingClientRect")||(gs(t)?function(){return Uc.width=he.innerWidth,Uc.height=Md,Uc}:function(){return er(t)})},gb=function(t,e,n){var i=n.d,s=n.d2,o=n.a;return(o=tr(t,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(e?Kg(s):t["client"+s])||0}},_b=function(t,e){return!e||~yi.indexOf(t)?Qg(t):function(){return Uc}},Li=function(t,e){var n=e.s,i=e.d2,s=e.d,o=e.a;return Math.max(0,(n="scroll"+i)&&(o=tr(t,n))?o()-Qg(t)()[s]:gs(t)?(vi[n]||we[n])-Kg(i):t[n]-t["offset"+i])},bc=function(t,e){for(var n=0;n<go.length;n+=3)(!e||~e.indexOf(go[n+1]))&&t(go[n],go[n+1],go[n+2])},Jn=function(t){return typeof t=="string"},In=function(t){return typeof t=="function"},_a=function(t){return typeof t=="number"},us=function(t){return typeof t=="object"},da=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},cd=function(t,e){if(t.enabled){var n=t._ctx?t._ctx.add(function(){return e(t)}):e(t);n&&n.totalTime&&(t.callbackAnimation=n)}},fo=Math.abs,jg="left",t0="top",Sd="right",bd="bottom",ds="width",ps="height",va="Right",Ma="Left",Sa="Top",ba="Bottom",Xe="padding",oi="margin",yo="Width",wd="Height",Je="px",ai=function(t){return he.getComputedStyle(t)},xb=function(t){var e=ai(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},Dg=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},er=function(t,e){var n=e&&ai(t)[dd]!=="matrix(1, 0, 0, 1, 0, 0)"&&Dt.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=t.getBoundingClientRect();return n&&n.progress(0).kill(),i},Bc=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},e0=function(t){var e=[],n=t.labels,i=t.duration(),s;for(s in n)e.push(n[s]/i);return e},yb=function(t){return function(e){return Dt.utils.snap(e0(t),e)}},Td=function(t){var e=Dt.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return e(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=e(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:e(s<0?i-t:i+t)}},vb=function(t){return function(e,n){return Td(e0(t))(e,n.direction)}},wc=function(t,e,n,i){return n.split(",").forEach(function(s){return t(e,s,i)})},rn=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:!i,capture:!!s})},nn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},Tc=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},Ng={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Ec={toggleActions:"play",anticipatePin:0},zc={top:0,left:0,center:.5,bottom:1,right:1},Ic=function(t,e){if(Jn(t)){var n=t.indexOf("="),i=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(i*=e/100),t=t.substr(0,n-1)),t=i+(t in zc?zc[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},Ac=function(t,e,n,i,s,o,a,l){var c=s.startColor,h=s.endColor,u=s.fontSize,d=s.indent,f=s.fontWeight,g=De.createElement("div"),_=gs(n)||tr(n,"pinType")==="fixed",p=t.indexOf("scroller")!==-1,m=_?we:n,M=t.indexOf("start")!==-1,x=M?c:h,y="border-color:"+x+";font-size:"+u+";color:"+x+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((p||l)&&_?"fixed;":"absolute;"),(p||l||!_)&&(y+=(i===We?Sd:bd)+":"+(o+parseFloat(d))+"px;"),a&&(y+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=M,g.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),g.style.cssText=y,g.innerText=e||e===0?t+"-"+e:t,m.children[0]?m.insertBefore(g,m.children[0]):m.appendChild(g),g._offset=g["offset"+i.op.d2],Lc(g,0,i,M),g},Lc=function(t,e,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];t._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+yo]=1,s["border"+a+yo]=0,s[n.p]=e+"px",Dt.set(t,s)},ee=[],_d={},Ea,Ug=function(){return vn()-li>34&&(Ea||(Ea=requestAnimationFrame(nr)))},po=function(){(!Cn||!Cn.isPressed||Cn.startX>we.clientWidth)&&(te.cache++,Cn?Ea||(Ea=requestAnimationFrame(nr)):nr(),li||xs("scrollStart"),li=vn())},hd=function(){Zg=he.innerWidth,qg=he.innerHeight},xa=function(){te.cache++,!yn&&!Yg&&!De.fullscreenElement&&!De.webkitFullscreenElement&&(!pd||Zg!==he.innerWidth||Math.abs(he.innerHeight-qg)>he.innerHeight*.25)&&Oc.restart(!0)},_s={},Mb=[],n0=function r(){return nn(jt,"scrollEnd",r)||fs(!0)},xs=function(t){return _s[t]&&_s[t].map(function(e){return e()})||Mb},Zn=[],i0=function(t){for(var e=0;e<Zn.length;e+=5)(!t||Zn[e+4]&&Zn[e+4].query===t)&&(Zn[e].style.cssText=Zn[e+1],Zn[e].getBBox&&Zn[e].setAttribute("transform",Zn[e+2]||""),Zn[e+3].uncache=1)},Ed=function(t,e){var n;for(Rn=0;Rn<ee.length;Rn++)n=ee[Rn],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));Fc=!0,e&&i0(e),e||xs("revert")},r0=function(t,e){te.cache++,(e||!Pn)&&te.forEach(function(n){return In(n)&&n.cacheID++&&(n.rec=0)}),Jn(t)&&(he.history.scrollRestoration=vd=t)},Pn,ms=0,Og,Sb=function(){if(Og!==ms){var t=Og=ms;requestAnimationFrame(function(){return t===ms&&fs(!0)})}},s0=function(){we.appendChild(_o),Md=!Cn&&_o.offsetHeight||he.innerHeight,we.removeChild(_o)},Fg=function(t){return Ta(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},fs=function(t,e){if(li&&!t&&!Fc){rn(jt,"scrollEnd",n0);return}s0(),Pn=jt.isRefreshing=!0,te.forEach(function(i){return In(i)&&++i.cacheID&&(i.rec=i())});var n=xs("refreshInit");Xg&&jt.sort(),e||Ed(),te.forEach(function(i){In(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),ee.slice(0).forEach(function(i){return i.refresh()}),Fc=!1,ee.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),gd=1,Fg(!0),ee.forEach(function(i){var s=Li(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),Fg(!1),gd=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),te.forEach(function(i){In(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),r0(vd,1),Oc.pause(),ms++,Pn=2,nr(2),ee.forEach(function(i){return In(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Pn=jt.isRefreshing=!1,xs("refresh")},xd=0,Dc=1,wa,nr=function(t){if(t===2||!Pn&&!Fc){jt.isUpdating=!0,wa&&wa.update(0);var e=ee.length,n=vn(),i=n-ld>=50,s=e&&ee[0].scroll();if(Dc=xd>s?-1:1,Pn||(xd=s),i&&(li&&!kc&&n-li>200&&(li=0,xs("scrollEnd")),pa=ld,ld=n),Dc<0){for(Rn=e;Rn-- >0;)ee[Rn]&&ee[Rn].update(0,i);Dc=1}else for(Rn=0;Rn<e;Rn++)ee[Rn]&&ee[Rn].update(0,i);jt.isUpdating=!1}Ea=0},yd=[jg,t0,bd,Sd,oi+ba,oi+va,oi+Sa,oi+Ma,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Nc=yd.concat([ds,ps,"boxSizing","max"+yo,"max"+wd,"position",oi,Xe,Xe+Sa,Xe+va,Xe+ba,Xe+Ma]),bb=function(t,e,n){xo(n);var i=t._gsap;if(i.spacerIsNative)xo(i.spacerState);else if(t._gsap.swappedIn){var s=e.parentNode;s&&(s.insertBefore(t,e),s.removeChild(e))}t._gsap.swappedIn=!1},ud=function(t,e,n,i){if(!t._gsap.swappedIn){for(var s=yd.length,o=e.style,a=t.style,l;s--;)l=yd[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[bd]=a[Sd]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[ds]=Bc(t,xn)+Je,o[ps]=Bc(t,We)+Je,o[Xe]=a[oi]=a[t0]=a[jg]="0",xo(i),a[ds]=a["max"+yo]=n[ds],a[ps]=a["max"+wd]=n[ps],a[Xe]=n[Xe],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},wb=/([A-Z])/g,xo=function(t){if(t){var e=t.t.style,n=t.length,i=0,s,o;for((t.t._gsap||Dt.core.getCache(t.t)).uncache=1;i<n;i+=2)o=t[i+1],s=t[i],o?e[s]=o:e[s]&&e.removeProperty(s.replace(wb,"-$1").toLowerCase())}},Cc=function(t){for(var e=Nc.length,n=t.style,i=[],s=0;s<e;s++)i.push(Nc[s],n[Nc[s]]);return i.t=t,i},Tb=function(t,e,n){for(var i=[],s=t.length,o=n?8:0,a;o<s;o+=2)a=t[o],i.push(a,a in e?e[a]:t[o+1]);return i.t=t.t,i},Uc={left:0,top:0},Bg=function(t,e,n,i,s,o,a,l,c,h,u,d,f,g){In(t)&&(t=t(l)),Jn(t)&&t.substr(0,3)==="max"&&(t=d+(t.charAt(4)==="="?Ic("0"+t.substr(3),n):0));var _=f?f.time():0,p,m,M;if(f&&f.seek(0),isNaN(t)||(t=+t),_a(t))f&&(t=Dt.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,d,t)),a&&Lc(a,n,i,!0);else{In(e)&&(e=e(l));var x=(t||"0").split(" "),y,C,T,S;M=An(e,l)||we,y=er(M)||{},(!y||!y.left&&!y.top)&&ai(M).display==="none"&&(S=M.style.display,M.style.display="block",y=er(M),S?M.style.display=S:M.style.removeProperty("display")),C=Ic(x[0],y[i.d]),T=Ic(x[1]||"0",n),t=y[i.p]-c[i.p]-h+C+s-T,a&&Lc(a,T,i,n-T<20||a._isStart&&T>20),n-=n-T}if(g&&(l[g]=t||-.001,t<0&&(t=0)),o){var P=t+n,z=o._isStart;p="scroll"+i.d2,Lc(o,P,i,z&&P>20||!z&&(u?Math.max(we[p],vi[p]):o.parentNode[p])<=P+1),u&&(c=er(a),u&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+Je))}return f&&M&&(p=er(M),f.seek(d),m=er(M),f._caScrollDist=p[i.p]-m[i.p],t=t/f._caScrollDist*d),f&&f.seek(_),f?t:Math.round(t)},Eb=/(webkit|moz|length|cssText|inset)/i,zg=function(t,e,n,i){if(t.parentNode!==e){var s=t.style,o,a;if(e===we){t._stOrig=s.cssText,a=ai(t);for(o in a)!+o&&!Eb.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=t._stOrig;Dt.core.getCache(t).uncache=1,e.appendChild(t)}},o0=function(t,e,n){var i=e,s=i;return function(o){var a=Math.round(t());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=o,o}},Rc=function(t,e,n){var i={};i[e.p]="+="+n,Dt.set(t,i)},kg=function(t,e){var n=ji(t,e),i="_scroll"+e.p2,s=function o(a,l,c,h,u){var d=o.tween,f=l.onComplete,g={};c=c||n();var _=o0(n,c,function(){d.kill(),o.tween=0});return u=h&&u||0,h=h||a-c,d&&d.kill(),l[i]=a,l.inherit=!1,l.modifiers=g,g[i]=function(){return _(c+h*d.ratio+u*d.ratio*d.ratio)},l.onUpdate=function(){te.cache++,o.tween&&nr()},l.onComplete=function(){o.tween=0,f&&f.call(d)},d=o.tween=Dt.to(t,l),d};return t[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},rn(t,"wheel",n.wheelHandler),jt.isTouch&&rn(t,"touchmove",n.wheelHandler),s},jt=function(){function r(e,n){mo||r.register(Dt)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),md(this),this.init(e,n)}var t=r.prototype;return t.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!ma){this.update=this.refresh=this.kill=Ii;return}n=Dg(Jn(n)||_a(n)||n.nodeType?{trigger:n}:n,Ec);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,h=s.onRefresh,u=s.scrub,d=s.trigger,f=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,p=s.anticipatePin,m=s.onScrubComplete,M=s.onSnapComplete,x=s.once,y=s.snap,C=s.pinReparent,T=s.pinSpacer,S=s.containerAnimation,P=s.fastScrollEnd,z=s.preventOverlaps,v=n.horizontal||n.containerAnimation&&n.horizontal!==!1?xn:We,w=!u&&u!==0,F=An(n.scroller||he),X=Dt.core.getCache(F),Y=gs(F),K=("pinType"in n?n.pinType:tr(F,"pinType")||Y&&"fixed")==="fixed",V=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],W=w&&n.toggleActions.split(" "),k="markers"in n?n.markers:Ec.markers,ht=Y?0:parseFloat(ai(F)["border"+v.p2+yo])||0,U=this,dt=n.onRefreshInit&&function(){return n.onRefreshInit(U)},Lt=gb(F,Y,v),Ht=_b(F,Y),O=0,N=0,L=0,E=ji(F,v),nt,at,et,ft,Q,A,q,tt,rt,B,H,D,R,b,j,ct,ut,ot,Pt,xt,vt,Vt,_t,Et,It,kt,Ct,Zt,Xt,oe,Z,gt,lt,pt,Mt,St,Jt,_e,Te;if(U._startClamp=U._endClamp=!1,U._dir=v,p*=45,U.scroller=F,U.scroll=S?S.time.bind(S):E,ft=E(),U.vars=n,i=i||n.animation,"refreshPriority"in n&&(Xg=1,n.refreshPriority===-9999&&(wa=U)),X.tweenScroll=X.tweenScroll||{top:kg(F,We),left:kg(F,xn)},U.tweenTo=nt=X.tweenScroll[v.p],U.scrubDuration=function(Tt){lt=_a(Tt)&&Tt,lt?gt?gt.duration(Tt):gt=Dt.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:lt,paused:!0,onComplete:function(){return m&&m(U)}}):(gt&&gt.progress(1).kill(),gt=0)},i&&(i.vars.lazy=!1,i._initted&&!U.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),U.animation=i.pause(),i.scrollTrigger=U,U.scrubDuration(u),oe=0,l||(l=i.vars.id)),y&&((!us(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in we.style&&Dt.set(Y?[we,vi]:F,{scrollBehavior:"auto"}),te.forEach(function(Tt){return In(Tt)&&Tt.target===(Y?De.scrollingElement||vi:F)&&(Tt.smooth=!1)}),et=In(y.snapTo)?y.snapTo:y.snapTo==="labels"?yb(i):y.snapTo==="labelsDirectional"?vb(i):y.directional!==!1?function(Tt,Gt){return Td(y.snapTo)(Tt,vn()-N<500?0:Gt.direction)}:Dt.utils.snap(y.snapTo),pt=y.duration||{min:.1,max:2},pt=us(pt)?ya(pt.min,pt.max):ya(pt,pt),Mt=Dt.delayedCall(y.delay||lt/2||.1,function(){var Tt=E(),Gt=vn()-N<500,Bt=nt.tween;if((Gt||Math.abs(U.getVelocity())<10)&&!Bt&&!kc&&O!==Tt){var qt=(Tt-A)/b,Be=i&&!w?i.totalProgress():qt,$t=Gt?0:(Be-Z)/(vn()-pa)*1e3||0,Ee=Dt.utils.clamp(-qt,1-qt,fo($t/2)*$t/.185),ze=qt+(y.inertia===!1?0:Ee),Me,xe,pe=y,kn=pe.onStart,Se=pe.onInterrupt,I=pe.onComplete;if(Me=et(ze,U),_a(Me)||(Me=ze),xe=Math.round(A+Me*b),Tt<=q&&Tt>=A&&xe!==Tt){if(Bt&&!Bt._initted&&Bt.data<=fo(xe-Tt))return;y.inertia===!1&&(Ee=Me-qt),nt(xe,{duration:pt(fo(Math.max(fo(ze-Be),fo(Me-Be))*.185/$t/.05||0)),ease:y.ease||"power3",data:fo(xe-Tt),onInterrupt:function(){return Mt.restart(!0)&&Se&&Se(U)},onComplete:function(){U.update(),O=E(),i&&(gt?gt.resetTo("totalProgress",Me,i._tTime/i._tDur):i.progress(Me)),oe=Z=i&&!w?i.totalProgress():U.progress,M&&M(U),I&&I(U)}},Tt,Ee*b,xe-Tt-Ee*b),kn&&kn(U,nt.tween)}}else U.isActive&&O!==Tt&&Mt.restart(!0)}).pause()),l&&(_d[l]=U),d=U.trigger=An(d||f!==!0&&f),Te=d&&d._gsap&&d._gsap.stRevert,Te&&(Te=Te(U)),f=f===!0?d:An(f),Jn(a)&&(a={targets:d,className:a}),f&&(g===!1||g===oi||(g=!g&&f.parentNode&&f.parentNode.style&&ai(f.parentNode).display==="flex"?!1:Xe),U.pin=f,at=Dt.core.getCache(f),at.spacer?j=at.pinState:(T&&(T=An(T),T&&!T.nodeType&&(T=T.current||T.nativeElement),at.spacerIsNative=!!T,T&&(at.spacerState=Cc(T))),at.spacer=ot=T||De.createElement("div"),ot.classList.add("pin-spacer"),l&&ot.classList.add("pin-spacer-"+l),at.pinState=j=Cc(f)),n.force3D!==!1&&Dt.set(f,{force3D:!0}),U.spacer=ot=at.spacer,Xt=ai(f),Et=Xt[g+v.os2],xt=Dt.getProperty(f),vt=Dt.quickSetter(f,v.a,Je),ud(f,ot,Xt),ut=Cc(f)),k){D=us(k)?Dg(k,Ng):Ng,B=Ac("scroller-start",l,F,v,D,0),H=Ac("scroller-end",l,F,v,D,0,B),Pt=B["offset"+v.op.d2];var ne=An(tr(F,"content")||F);tt=this.markerStart=Ac("start",l,ne,v,D,Pt,0,S),rt=this.markerEnd=Ac("end",l,ne,v,D,Pt,0,S),S&&(_e=Dt.quickSetter([tt,rt],v.a,Je)),!K&&!(yi.length&&tr(F,"fixedMarkers")===!0)&&(xb(Y?we:F),Dt.set([B,H],{force3D:!0}),kt=Dt.quickSetter(B,v.a,Je),Zt=Dt.quickSetter(H,v.a,Je))}if(S){var Ft=S.vars.onUpdate,Nt=S.vars.onUpdateParams;S.eventCallback("onUpdate",function(){U.update(0,0,1),Ft&&Ft.apply(S,Nt||[])})}if(U.previous=function(){return ee[ee.indexOf(U)-1]},U.next=function(){return ee[ee.indexOf(U)+1]},U.revert=function(Tt,Gt){if(!Gt)return U.kill(!0);var Bt=Tt!==!1||!U.enabled,qt=yn;Bt!==U.isReverted&&(Bt&&(St=Math.max(E(),U.scroll.rec||0),L=U.progress,Jt=i&&i.progress()),tt&&[tt,rt,B,H].forEach(function(Be){return Be.style.display=Bt?"none":"block"}),Bt&&(yn=U,U.update(Bt)),f&&(!C||!U.isActive)&&(Bt?bb(f,ot,j):ud(f,ot,ai(f),It)),Bt||U.update(Bt),yn=qt,U.isReverted=Bt)},U.refresh=function(Tt,Gt,Bt,qt){if(!((yn||!U.enabled)&&!Gt)){if(f&&Tt&&li){rn(r,"scrollEnd",n0);return}!Pn&&dt&&dt(U),yn=U,nt.tween&&!Bt&&(nt.tween.kill(),nt.tween=0),gt&&gt.pause(),_&&i&&i.revert({kill:!1}).invalidate(),U.isReverted||U.revert(!0,!0),U._subPinOffset=!1;var Be=Lt(),$t=Ht(),Ee=S?S.duration():Li(F,v),ze=b<=.01,Me=0,xe=qt||0,pe=us(Bt)?Bt.end:n.end,kn=n.endTrigger||d,Se=us(Bt)?Bt.start:n.start||(n.start===0||!d?0:f?"0 0":"0 100%"),I=U.pinnedContainer=n.pinnedContainer&&An(n.pinnedContainer,U),$=d&&Math.max(0,ee.indexOf(U))||0,it=$,st,J,yt,Rt,wt,bt,Ot,Wt,Ut,ae,re,me,$e;for(k&&us(Bt)&&(me=Dt.getProperty(B,v.p),$e=Dt.getProperty(H,v.p));it--;)bt=ee[it],bt.end||bt.refresh(0,1)||(yn=U),Ot=bt.pin,Ot&&(Ot===d||Ot===f||Ot===I)&&!bt.isReverted&&(ae||(ae=[]),ae.unshift(bt),bt.revert(!0,!0)),bt!==ee[it]&&($--,it--);for(In(Se)&&(Se=Se(U)),Se=Rg(Se,"start",U),A=Bg(Se,d,Be,v,E(),tt,B,U,$t,ht,K,Ee,S,U._startClamp&&"_startClamp")||(f?-.001:0),In(pe)&&(pe=pe(U)),Jn(pe)&&!pe.indexOf("+=")&&(~pe.indexOf(" ")?pe=(Jn(Se)?Se.split(" ")[0]:"")+pe:(Me=Ic(pe.substr(2),Be),pe=Jn(Se)?Se:(S?Dt.utils.mapRange(0,S.duration(),S.scrollTrigger.start,S.scrollTrigger.end,A):A)+Me,kn=d)),pe=Rg(pe,"end",U),q=Math.max(A,Bg(pe||(kn?"100% 0":Ee),kn,Be,v,E()+Me,rt,H,U,$t,ht,K,Ee,S,U._endClamp&&"_endClamp"))||-.001,Me=0,it=$;it--;)bt=ee[it],Ot=bt.pin,Ot&&bt.start-bt._pinPush<=A&&!S&&bt.end>0&&(st=bt.end-(U._startClamp?Math.max(0,bt.start):bt.start),(Ot===d&&bt.start-bt._pinPush<A||Ot===I)&&isNaN(Se)&&(Me+=st*(1-bt.progress)),Ot===f&&(xe+=st));if(A+=Me,q+=Me,U._startClamp&&(U._startClamp+=Me),U._endClamp&&!Pn&&(U._endClamp=q||-.001,q=Math.min(q,Li(F,v))),b=q-A||(A-=.01)&&.001,ze&&(L=Dt.utils.clamp(0,1,Dt.utils.normalize(A,q,St))),U._pinPush=xe,tt&&Me&&(st={},st[v.a]="+="+Me,I&&(st[v.p]="-="+E()),Dt.set([tt,rt],st)),f&&!(gd&&U.end>=Li(F,v)))st=ai(f),Rt=v===We,yt=E(),Vt=parseFloat(xt(v.a))+xe,!Ee&&q>1&&(re=(Y?De.scrollingElement||vi:F).style,re={style:re,value:re["overflow"+v.a.toUpperCase()]},Y&&ai(we)["overflow"+v.a.toUpperCase()]!=="scroll"&&(re.style["overflow"+v.a.toUpperCase()]="scroll")),ud(f,ot,st),ut=Cc(f),J=er(f,!0),Wt=K&&ji(F,Rt?xn:We)(),g?(It=[g+v.os2,b+xe+Je],It.t=ot,it=g===Xe?Bc(f,v)+b+xe:0,it&&(It.push(v.d,it+Je),ot.style.flexBasis!=="auto"&&(ot.style.flexBasis=it+Je)),xo(It),I&&ee.forEach(function(se){se.pin===I&&se.vars.pinSpacing!==!1&&(se._subPinOffset=!0)}),K&&E(St)):(it=Bc(f,v),it&&ot.style.flexBasis!=="auto"&&(ot.style.flexBasis=it+Je)),K&&(wt={top:J.top+(Rt?yt-A:Wt)+Je,left:J.left+(Rt?Wt:yt-A)+Je,boxSizing:"border-box",position:"fixed"},wt[ds]=wt["max"+yo]=Math.ceil(J.width)+Je,wt[ps]=wt["max"+wd]=Math.ceil(J.height)+Je,wt[oi]=wt[oi+Sa]=wt[oi+va]=wt[oi+ba]=wt[oi+Ma]="0",wt[Xe]=st[Xe],wt[Xe+Sa]=st[Xe+Sa],wt[Xe+va]=st[Xe+va],wt[Xe+ba]=st[Xe+ba],wt[Xe+Ma]=st[Xe+Ma],ct=Tb(j,wt,C),Pn&&E(0)),i?(Ut=i._initted,od(1),i.render(i.duration(),!0,!0),_t=xt(v.a)-Vt+b+xe,Ct=Math.abs(b-_t)>1,K&&Ct&&ct.splice(ct.length-2,2),i.render(0,!0,!0),Ut||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),od(0)):_t=b,re&&(re.value?re.style["overflow"+v.a.toUpperCase()]=re.value:re.style.removeProperty("overflow-"+v.a));else if(d&&E()&&!S)for(J=d.parentNode;J&&J!==we;)J._pinOffset&&(A-=J._pinOffset,q-=J._pinOffset),J=J.parentNode;ae&&ae.forEach(function(se){return se.revert(!1,!0)}),U.start=A,U.end=q,ft=Q=Pn?St:E(),!S&&!Pn&&(ft<St&&E(St),U.scroll.rec=0),U.revert(!1,!0),N=vn(),Mt&&(O=-1,Mt.restart(!0)),yn=0,i&&w&&(i._initted||Jt)&&i.progress()!==Jt&&i.progress(Jt||0,!0).render(i.time(),!0,!0),(ze||L!==U.progress||S||_)&&(i&&!w&&i.totalProgress(S&&A<-.001&&!L?Dt.utils.normalize(A,q,0):L,!0),U.progress=ze||(ft-A)/b===L?0:L),f&&g&&(ot._pinOffset=Math.round(U.progress*_t)),gt&&gt.invalidate(),isNaN(me)||(me-=Dt.getProperty(B,v.p),$e-=Dt.getProperty(H,v.p),Rc(B,v,me),Rc(tt,v,me-(qt||0)),Rc(H,v,$e),Rc(rt,v,$e-(qt||0))),ze&&!Pn&&U.update(),h&&!Pn&&!R&&(R=!0,h(U),R=!1)}},U.getVelocity=function(){return(E()-Q)/(vn()-pa)*1e3||0},U.endAnimation=function(){da(U.callbackAnimation),i&&(gt?gt.progress(1):i.paused()?w||da(i,U.direction<0,1):da(i,i.reversed()))},U.labelToScroll=function(Tt){return i&&i.labels&&(A||U.refresh()||A)+i.labels[Tt]/i.duration()*b||0},U.getTrailing=function(Tt){var Gt=ee.indexOf(U),Bt=U.direction>0?ee.slice(0,Gt).reverse():ee.slice(Gt+1);return(Jn(Tt)?Bt.filter(function(qt){return qt.vars.preventOverlaps===Tt}):Bt).filter(function(qt){return U.direction>0?qt.end<=A:qt.start>=q})},U.update=function(Tt,Gt,Bt){if(!(S&&!Bt&&!Tt)){var qt=Pn===!0?St:U.scroll(),Be=Tt?0:(qt-A)/b,$t=Be<0?0:Be>1?1:Be||0,Ee=U.progress,ze,Me,xe,pe,kn,Se,I,$;if(Gt&&(Q=ft,ft=S?E():qt,y&&(Z=oe,oe=i&&!w?i.totalProgress():$t)),p&&f&&!yn&&!Sc&&li&&(!$t&&A<qt+(qt-Q)/(vn()-pa)*p?$t=1e-4:$t===1&&q>qt+(qt-Q)/(vn()-pa)*p&&($t=.9999)),$t!==Ee&&U.enabled){if(ze=U.isActive=!!$t&&$t<1,Me=!!Ee&&Ee<1,Se=ze!==Me,kn=Se||!!$t!=!!Ee,U.direction=$t>Ee?1:-1,U.progress=$t,kn&&!yn&&(xe=$t&&!Ee?0:$t===1?1:Ee===1?2:3,w&&(pe=!Se&&W[xe+1]!=="none"&&W[xe+1]||W[xe],$=i&&(pe==="complete"||pe==="reset"||pe in i))),z&&(Se||$)&&($||u||!i)&&(In(z)?z(U):U.getTrailing(z).forEach(function(yt){return yt.endAnimation()})),w||(gt&&!yn&&!Sc?(gt._dp._time-gt._start!==gt._time&&gt.render(gt._dp._time-gt._start),gt.resetTo?gt.resetTo("totalProgress",$t,i._tTime/i._tDur):(gt.vars.totalProgress=$t,gt.invalidate().restart())):i&&i.totalProgress($t,!!(yn&&(N||Tt)))),f){if(Tt&&g&&(ot.style[g+v.os2]=Et),!K)vt(ga(Vt+_t*$t));else if(kn){if(I=!Tt&&$t>Ee&&q+1>qt&&qt+1>=Li(F,v),C)if(!Tt&&(ze||I)){var it=er(f,!0),st=qt-A;zg(f,we,it.top+(v===We?st:0)+Je,it.left+(v===We?0:st)+Je)}else zg(f,ot);xo(ze||I?ct:ut),Ct&&$t<1&&ze||vt(Vt+($t===1&&!I?_t:0))}}y&&!nt.tween&&!yn&&!Sc&&Mt.restart(!0),a&&(Se||x&&$t&&($t<1||!ad))&&Ta(a.targets).forEach(function(yt){return yt.classList[ze||x?"add":"remove"](a.className)}),o&&!w&&!Tt&&o(U),kn&&!yn?(w&&($&&(pe==="complete"?i.pause().totalProgress(1):pe==="reset"?i.restart(!0).pause():pe==="restart"?i.restart(!0):i[pe]()),o&&o(U)),(Se||!ad)&&(c&&Se&&cd(U,c),V[xe]&&cd(U,V[xe]),x&&($t===1?U.kill(!1,1):V[xe]=0),Se||(xe=$t===1?1:3,V[xe]&&cd(U,V[xe]))),P&&!ze&&Math.abs(U.getVelocity())>(_a(P)?P:2500)&&(da(U.callbackAnimation),gt?gt.progress(1):da(i,pe==="reverse"?1:!$t,1))):w&&o&&!yn&&o(U)}if(Zt){var J=S?qt/S.duration()*(S._caScrollDist||0):qt;kt(J+(B._isFlipped?1:0)),Zt(J)}_e&&_e(-qt/S.duration()*(S._caScrollDist||0))}},U.enable=function(Tt,Gt){U.enabled||(U.enabled=!0,rn(F,"resize",xa),Y||rn(F,"scroll",po),dt&&rn(r,"refreshInit",dt),Tt!==!1&&(U.progress=L=0,ft=Q=O=E()),Gt!==!1&&U.refresh())},U.getTween=function(Tt){return Tt&&nt?nt.tween:gt},U.setPositions=function(Tt,Gt,Bt,qt){if(S){var Be=S.scrollTrigger,$t=S.duration(),Ee=Be.end-Be.start;Tt=Be.start+Ee*Tt/$t,Gt=Be.start+Ee*Gt/$t}U.refresh(!1,!1,{start:Pg(Tt,Bt&&!!U._startClamp),end:Pg(Gt,Bt&&!!U._endClamp)},qt),U.update()},U.adjustPinSpacing=function(Tt){if(It&&Tt){var Gt=It.indexOf(v.d)+1;It[Gt]=parseFloat(It[Gt])+Tt+Je,It[1]=parseFloat(It[1])+Tt+Je,xo(It)}},U.disable=function(Tt,Gt){if(U.enabled&&(Tt!==!1&&U.revert(!0,!0),U.enabled=U.isActive=!1,Gt||gt&&gt.pause(),St=0,at&&(at.uncache=1),dt&&nn(r,"refreshInit",dt),Mt&&(Mt.pause(),nt.tween&&nt.tween.kill()&&(nt.tween=0)),!Y)){for(var Bt=ee.length;Bt--;)if(ee[Bt].scroller===F&&ee[Bt]!==U)return;nn(F,"resize",xa),Y||nn(F,"scroll",po)}},U.kill=function(Tt,Gt){U.disable(Tt,Gt),gt&&!Gt&&gt.kill(),l&&delete _d[l];var Bt=ee.indexOf(U);Bt>=0&&ee.splice(Bt,1),Bt===Rn&&Dc>0&&Rn--,Bt=0,ee.forEach(function(qt){return qt.scroller===U.scroller&&(Bt=1)}),Bt||Pn||(U.scroll.rec=0),i&&(i.scrollTrigger=null,Tt&&i.revert({kill:!1}),Gt||i.kill()),tt&&[tt,rt,B,H].forEach(function(qt){return qt.parentNode&&qt.parentNode.removeChild(qt)}),wa===U&&(wa=0),f&&(at&&(at.uncache=1),Bt=0,ee.forEach(function(qt){return qt.pin===f&&Bt++}),Bt||(at.spacer=0)),n.onKill&&n.onKill(U)},ee.push(U),U.enable(!1,!1),Te&&Te(U),i&&i.add&&!b){var ue=U.update;U.update=function(){U.update=ue,A||q||U.refresh()},Dt.delayedCall(.01,U.update),b=.01,A=q=0}else U.refresh();f&&Sb()},r.register=function(n){return mo||(Dt=n||$g(),Jg()&&window.document&&r.enable(),mo=ma),mo},r.defaults=function(n){if(n)for(var i in n)Ec[i]=n[i];return Ec},r.disable=function(n,i){ma=0,ee.forEach(function(o){return o[i?"kill":"disable"](n)}),nn(he,"wheel",po),nn(De,"scroll",po),clearInterval(Mc),nn(De,"touchcancel",Ii),nn(we,"touchstart",Ii),wc(nn,De,"pointerdown,touchstart,mousedown",Ig),wc(nn,De,"pointerup,touchend,mouseup",Lg),Oc.kill(),bc(nn);for(var s=0;s<te.length;s+=3)Tc(nn,te[s],te[s+1]),Tc(nn,te[s],te[s+2])},r.enable=function(){if(he=window,De=document,vi=De.documentElement,we=De.body,Dt&&(Ta=Dt.utils.toArray,ya=Dt.utils.clamp,md=Dt.core.context||Ii,od=Dt.core.suppressOverwrites||Ii,vd=he.history.scrollRestoration||"auto",xd=he.pageYOffset,Dt.core.globals("ScrollTrigger",r),we)){ma=1,_o=document.createElement("div"),_o.style.height="100vh",_o.style.position="absolute",s0(),mb(),Fe.register(Dt),r.isTouch=Fe.isTouch,Rr=Fe.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),pd=Fe.isTouch===1,rn(he,"wheel",po),Wg=[he,De,vi,we],Dt.matchMedia?(r.matchMedia=function(l){var c=Dt.matchMedia(),h;for(h in l)c.add(h,l[h]);return c},Dt.addEventListener("matchMediaInit",function(){return Ed()}),Dt.addEventListener("matchMediaRevert",function(){return i0()}),Dt.addEventListener("matchMedia",function(){fs(0,1),xs("matchMedia")}),Dt.matchMedia("(orientation: portrait)",function(){return hd(),hd})):console.warn("Requires GSAP 3.11.0 or later"),hd(),rn(De,"scroll",po);var n=we.style,i=n.borderTopStyle,s=Dt.core.Animation.prototype,o,a;for(s.revert||Object.defineProperty(s,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",o=er(we),We.m=Math.round(o.top+We.sc())||0,xn.m=Math.round(o.left+xn.sc())||0,i?n.borderTopStyle=i:n.removeProperty("border-top-style"),Mc=setInterval(Ug,250),Dt.delayedCall(.5,function(){return Sc=0}),rn(De,"touchcancel",Ii),rn(we,"touchstart",Ii),wc(rn,De,"pointerdown,touchstart,mousedown",Ig),wc(rn,De,"pointerup,touchend,mouseup",Lg),dd=Dt.utils.checkPrefix("transform"),Nc.push(dd),mo=vn(),Oc=Dt.delayedCall(.2,fs).pause(),go=[De,"visibilitychange",function(){var l=he.innerWidth,c=he.innerHeight;De.hidden?(Ag=l,Cg=c):(Ag!==l||Cg!==c)&&xa()},De,"DOMContentLoaded",fs,he,"load",fs,he,"resize",xa],bc(rn),ee.forEach(function(l){return l.enable(0,1)}),a=0;a<te.length;a+=3)Tc(nn,te[a],te[a+1]),Tc(nn,te[a],te[a+2])}},r.config=function(n){"limitCallbacks"in n&&(ad=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Mc)||(Mc=i)&&setInterval(Ug,i),"ignoreMobileResize"in n&&(pd=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(bc(nn)||bc(rn,n.autoRefreshEvents||"none"),Yg=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=An(n),o=te.indexOf(s),a=gs(s);~o&&te.splice(o,a?6:2),i&&(a?yi.unshift(he,i,we,i,vi,i):yi.unshift(s,i))},r.clearMatchMedia=function(n){ee.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(Jn(n)?An(n):n).getBoundingClientRect(),a=o[s?ds:ps]*i||0;return s?o.right-a>0&&o.left+a<he.innerWidth:o.bottom-a>0&&o.top+a<he.innerHeight},r.positionInViewport=function(n,i,s){Jn(n)&&(n=An(n));var o=n.getBoundingClientRect(),a=o[s?ds:ps],l=i==null?a/2:i in zc?zc[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/he.innerWidth:(o.top+l)/he.innerHeight},r.killAll=function(n){if(ee.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=_s.killAll||[];_s={},i.forEach(function(s){return s()})}},r}();jt.version="3.12.5";jt.saveStyles=function(r){return r?Ta(r).forEach(function(t){if(t&&t.style){var e=Zn.indexOf(t);e>=0&&Zn.splice(e,5),Zn.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),Dt.core.getCache(t),md())}}):Zn};jt.revert=function(r,t){return Ed(!r,t)};jt.create=function(r,t){return new jt(r,t)};jt.refresh=function(r){return r?xa():(mo||jt.register())&&fs(!0)};jt.update=function(r){return++te.cache&&nr(r===!0?2:0)};jt.clearScrollMemory=r0;jt.maxScroll=function(r,t){return Li(r,t?xn:We)};jt.getScrollFunc=function(r,t){return ji(An(r),t?xn:We)};jt.getById=function(r){return _d[r]};jt.getAll=function(){return ee.filter(function(r){return r.vars.id!=="ScrollSmoother"})};jt.isScrolling=function(){return!!li};jt.snapDirectional=Td;jt.addEventListener=function(r,t){var e=_s[r]||(_s[r]=[]);~e.indexOf(t)||e.push(t)};jt.removeEventListener=function(r,t){var e=_s[r],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};jt.batch=function(r,t){var e=[],n={},i=t.interval||.016,s=t.batchMax||1e9,o=function(c,h){var u=[],d=[],f=Dt.delayedCall(i,function(){h(u,d),u=[],d=[]}).pause();return function(g){u.length||f.restart(!0),u.push(g.trigger),d.push(g),s<=u.length&&f.progress(1)}},a;for(a in t)n[a]=a.substr(0,2)==="on"&&In(t[a])&&a!=="onRefreshInit"?o(a,t[a]):t[a];return In(s)&&(s=s(),rn(jt,"refresh",function(){return s=t.batchMax()})),Ta(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,e.push(jt.create(c))}),e};var Vg=function(t,e,n,i){return e>i?t(i):e<0&&t(0),n>i?(i-e)/(n-e):n<0?e/(e-n):1},fd=function r(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(Fe.isTouch?" pinch-zoom":""):"none",t===vi&&r(we,e)},Pc={auto:1,scroll:1},Ab=function(t){var e=t.event,n=t.target,i=t.axis,s=(e.changedTouches?e.changedTouches[0]:e).target,o=s._gsap||Dt.core.getCache(s),a=vn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==we&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Pc[(l=ai(s)).overflowY]||Pc[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!gs(s)&&(Pc[(l=ai(s)).overflowY]||Pc[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},a0=function(t,e,n,i){return Fe.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:i=i&&Ab,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&rn(De,Fe.eventTypes[0],Gg,!1,!0)},onDisable:function(){return nn(De,Fe.eventTypes[0],Gg,!0)}})},Cb=/(input|label|select|textarea)/i,Hg,Gg=function(t){var e=Cb.test(t.target.tagName);(e||Hg)&&(t._gsapAllow=!0,Hg=e)},Rb=function(t){us(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,i=e.momentum,s=e.allowNestedScroll,o=e.onRelease,a,l,c=An(t.target)||vi,h=Dt.core.globals().ScrollSmoother,u=h&&h.get(),d=Rr&&(t.content&&An(t.content)||u&&t.content!==!1&&!u.smooth()&&u.content()),f=ji(c,We),g=ji(c,xn),_=1,p=(Fe.isTouch&&he.visualViewport?he.visualViewport.scale*he.visualViewport.width:he.outerWidth)/he.innerWidth,m=0,M=In(i)?function(){return i(a)}:function(){return i||2.8},x,y,C=a0(c,t.type,!0,s),T=function(){return y=!1},S=Ii,P=Ii,z=function(){l=Li(c,We),P=ya(Rr?1:0,l),n&&(S=ya(0,Li(c,xn))),x=ms},v=function(){d._gsap.y=ga(parseFloat(d._gsap.y)+f.offset)+"px",d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(d._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},w=function(){if(y){requestAnimationFrame(T);var k=ga(a.deltaY/2),ht=P(f.v-k);if(d&&ht!==f.v+f.offset){f.offset=ht-f.v;var U=ga((parseFloat(d&&d._gsap.y)||0)-f.offset);d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+U+", 0, 1)",d._gsap.y=U+"px",f.cacheID=te.cache,nr()}return!0}f.offset&&v(),y=!0},F,X,Y,K,V=function(){z(),F.isActive()&&F.vars.scrollY>l&&(f()>l?F.progress(1)&&f(l):F.resetTo("scrollY",l))};return d&&Dt.set(d,{y:"+=0"}),t.ignoreCheck=function(W){return Rr&&W.type==="touchmove"&&w(W)||_>1.05&&W.type!=="touchstart"||a.isGesturing||W.touches&&W.touches.length>1},t.onPress=function(){y=!1;var W=_;_=ga((he.visualViewport&&he.visualViewport.scale||1)/p),F.pause(),W!==_&&fd(c,_>1.01?!0:n?!1:"x"),X=g(),Y=f(),z(),x=ms},t.onRelease=t.onGestureStart=function(W,k){if(f.offset&&v(),!k)K.restart(!0);else{te.cache++;var ht=M(),U,dt;n&&(U=g(),dt=U+ht*.05*-W.velocityX/.227,ht*=Vg(g,U,dt,Li(c,xn)),F.vars.scrollX=S(dt)),U=f(),dt=U+ht*.05*-W.velocityY/.227,ht*=Vg(f,U,dt,Li(c,We)),F.vars.scrollY=P(dt),F.invalidate().duration(ht).play(.01),(Rr&&F.vars.scrollY>=l||U>=l-1)&&Dt.to({},{onUpdate:V,duration:ht})}o&&o(W)},t.onWheel=function(){F._ts&&F.pause(),vn()-m>1e3&&(x=0,m=vn())},t.onChange=function(W,k,ht,U,dt){if(ms!==x&&z(),k&&n&&g(S(U[2]===k?X+(W.startX-W.x):g()+k-U[1])),ht){f.offset&&v();var Lt=dt[2]===ht,Ht=Lt?Y+W.startY-W.y:f()+ht-dt[1],O=P(Ht);Lt&&Ht!==O&&(Y+=O-Ht),f(O)}(ht||k)&&nr()},t.onEnable=function(){fd(c,n?!1:"x"),jt.addEventListener("refresh",V),rn(he,"resize",V),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=g.smooth=!1),C.enable()},t.onDisable=function(){fd(c,!0),nn(he,"resize",V),jt.removeEventListener("refresh",V),C.kill()},t.lockAxis=t.lockAxis!==!1,a=new Fe(t),a.iOS=Rr,Rr&&!f()&&f(1),Rr&&Dt.ticker.add(Ii),K=a._dc,F=Dt.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:o0(f,f(),function(){return F.pause()})},onUpdate:nr,onComplete:K.vars.onComplete}),a};jt.sort=function(r){return ee.sort(r||function(t,e){return(t.vars.refreshPriority||0)*-1e6+t.start-(e.start+(e.vars.refreshPriority||0)*-1e6)})};jt.observe=function(r){return new Fe(r)};jt.normalizeScroll=function(r){if(typeof r=="undefined")return Cn;if(r===!0&&Cn)return Cn.enable();if(r===!1){Cn&&Cn.kill(),Cn=r;return}var t=r instanceof Fe?r:Rb(r);return Cn&&Cn.target===t.target&&Cn.kill(),gs(t.target)&&(Cn=t),t};jt.core={_getVelocityProp:vc,_inputObserver:a0,_scrollers:te,_proxies:yi,bridge:{ss:function(){li||xs("scrollStart"),li=vn()},ref:function(){return yn}}};$g()&&Dt.registerPlugin(jt);function c0(r,t,e){return Math.max(r,Math.min(t,e))}var Ad=class{constructor(){this.isRunning=!1,this.value=0,this.from=0,this.to=0,this.currentTime=0}advance(t){var e;if(!this.isRunning)return;let n=!1;if(this.duration&&this.easing){this.currentTime+=t;let i=c0(0,this.currentTime/this.duration,1);n=i>=1;let s=n?1:this.easing(i);this.value=this.from+(this.to-this.from)*s}else this.lerp?(this.value=function(s,o,a,l){return function(h,u,d){return(1-d)*h+d*u}(s,o,1-Math.exp(-a*l))}(this.value,this.to,60*this.lerp,t),Math.round(this.value)===this.to&&(this.value=this.to,n=!0)):(this.value=this.to,n=!0);n&&this.stop(),(e=this.onUpdate)===null||e===void 0||e.call(this,this.value,n)}stop(){this.isRunning=!1}fromTo(t,e,{lerp:n,duration:i,easing:s,onStart:o,onUpdate:a}){this.from=this.value=t,this.to=e,this.lerp=n,this.duration=i,this.easing=s,this.currentTime=0,this.isRunning=!0,o==null||o(),this.onUpdate=a}},Cd=class{constructor(t,e,{autoResize:n=!0,debounce:i=250}={}){this.wrapper=t,this.content=e,this.width=0,this.height=0,this.scrollHeight=0,this.scrollWidth=0,this.resize=()=>{this.onWrapperResize(),this.onContentResize()},this.onWrapperResize=()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)},this.onContentResize=()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)},n&&(this.debouncedResize=function(o,a){let l;return function(...c){let h=this;clearTimeout(l),l=setTimeout(()=>{l=void 0,o.apply(h,c)},a)}}(this.resize,i),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var t,e;(t=this.wrapperResizeObserver)===null||t===void 0||t.disconnect(),(e=this.contentResizeObserver)===null||e===void 0||e.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize,!1)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},Vc=class{constructor(){this.events={}}emit(t,...e){var n;let i=this.events[t]||[];for(let s=0,o=i.length;s<o;s++)(n=i[s])===null||n===void 0||n.call(i,...e)}on(t,e){var n;return!((n=this.events[t])===null||n===void 0)&&n.push(e)||(this.events[t]=[e]),()=>{var i;this.events[t]=(i=this.events[t])===null||i===void 0?void 0:i.filter(s=>e!==s)}}off(t,e){var n;this.events[t]=(n=this.events[t])===null||n===void 0?void 0:n.filter(i=>e!==i)}destroy(){this.events={}}},l0=100/6,Pr={passive:!1},Rd=class{constructor(t,e={wheelMultiplier:1,touchMultiplier:1}){this.element=t,this.options=e,this.touchStart={x:0,y:0},this.lastDelta={x:0,y:0},this.window={width:0,height:0},this.emitter=new Vc,this.onTouchStart=n=>{let{clientX:i,clientY:s}=n.targetTouches?n.targetTouches[0]:n;this.touchStart.x=i,this.touchStart.y=s,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:n})},this.onTouchMove=n=>{let{clientX:i,clientY:s}=n.targetTouches?n.targetTouches[0]:n,o=-(i-this.touchStart.x)*this.options.touchMultiplier,a=-(s-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=i,this.touchStart.y=s,this.lastDelta={x:o,y:a},this.emitter.emit("scroll",{deltaX:o,deltaY:a,event:n})},this.onTouchEnd=n=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:n})},this.onWheel=n=>{let{deltaX:i,deltaY:s,deltaMode:o}=n;i*=o===1?l0:o===2?this.window.width:1,s*=o===1?l0:o===2?this.window.height:1,i*=this.options.wheelMultiplier,s*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:i,deltaY:s,event:n})},this.onWindowResize=()=>{this.window={width:window.innerWidth,height:window.innerHeight}},window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Pr),this.element.addEventListener("touchstart",this.onTouchStart,Pr),this.element.addEventListener("touchmove",this.onTouchMove,Pr),this.element.addEventListener("touchend",this.onTouchEnd,Pr)}on(t,e){return this.emitter.on(t,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,Pr),this.element.removeEventListener("touchstart",this.onTouchStart,Pr),this.element.removeEventListener("touchmove",this.onTouchMove,Pr),this.element.removeEventListener("touchend",this.onTouchEnd,Pr)}},Hc=class{constructor({wrapper:t=window,content:e=document.documentElement,eventsTarget:n=t,smoothWheel:i=!0,syncTouch:s=!1,syncTouchLerp:o=.075,touchInertiaMultiplier:a=35,duration:l,easing:c=y=>Math.min(1,1.001-Math.pow(2,-10*y)),lerp:h=.1,infinite:u=!1,orientation:d="vertical",gestureOrientation:f="vertical",touchMultiplier:g=1,wheelMultiplier:_=1,autoResize:p=!0,prevent:m,virtualScroll:M,__experimental__naiveDimensions:x=!1}={}){this._isScrolling=!1,this._isStopped=!1,this._isLocked=!1,this._preventNextNativeScrollEvent=!1,this._resetVelocityTimeout=null,this.time=0,this.userData={},this.lastVelocity=0,this.velocity=0,this.direction=0,this.animate=new Ad,this.emitter=new Vc,this.onPointerDown=y=>{y.button===1&&this.reset()},this.onVirtualScroll=y=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(y)===!1)return;let{deltaX:C,deltaY:T,event:S}=y;if(this.emitter.emit("virtual-scroll",{deltaX:C,deltaY:T,event:S}),S.ctrlKey)return;let P=S.type.includes("touch"),z=S.type.includes("wheel");if(this.isTouching=S.type==="touchstart"||S.type==="touchmove",this.options.syncTouch&&P&&S.type==="touchstart"&&!this.isStopped&&!this.isLocked)return void this.reset();let v=C===0&&T===0,w=this.options.gestureOrientation==="vertical"&&T===0||this.options.gestureOrientation==="horizontal"&&C===0;if(v||w)return;let F=S.composedPath();F=F.slice(0,F.indexOf(this.rootElement));let X=this.options.prevent;if(F.find(W=>{var k,ht,U,dt,Lt;return W instanceof HTMLElement&&(typeof X=="function"&&(X==null?void 0:X(W))||((k=W.hasAttribute)===null||k===void 0?void 0:k.call(W,"data-lenis-prevent"))||P&&((ht=W.hasAttribute)===null||ht===void 0?void 0:ht.call(W,"data-lenis-prevent-touch"))||z&&((U=W.hasAttribute)===null||U===void 0?void 0:U.call(W,"data-lenis-prevent-wheel"))||((dt=W.classList)===null||dt===void 0?void 0:dt.contains("lenis"))&&!(!((Lt=W.classList)===null||Lt===void 0)&&Lt.contains("lenis-stopped")))}))return;if(this.isStopped||this.isLocked)return void S.preventDefault();if(!(this.options.syncTouch&&P||this.options.smoothWheel&&z))return this.isScrolling="native",void this.animate.stop();S.preventDefault();let Y=T;this.options.gestureOrientation==="both"?Y=Math.abs(T)>Math.abs(C)?T:C:this.options.gestureOrientation==="horizontal"&&(Y=C);let K=P&&this.options.syncTouch,V=P&&S.type==="touchend"&&Math.abs(Y)>5;V&&(Y=this.velocity*this.options.touchInertiaMultiplier),this.scrollTo(this.targetScroll+Y,Object.assign({programmatic:!1},K?{lerp:V?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}))},this.onNativeScroll=()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent)this._preventNextNativeScrollEvent=!1;else if(this.isScrolling===!1||this.isScrolling==="native"){let y=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-y,this.direction=Math.sign(this.animatedScroll-y),this.isScrolling="native",this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}},window.lenisVersion="1.1.13",t&&t!==document.documentElement&&t!==document.body||(t=window),this.options={wrapper:t,content:e,eventsTarget:n,smoothWheel:i,syncTouch:s,syncTouchLerp:o,touchInertiaMultiplier:a,duration:l,easing:c,lerp:h,infinite:u,gestureOrientation:f,orientation:d,touchMultiplier:g,wheelMultiplier:_,autoResize:p,prevent:m,virtualScroll:M,__experimental__naiveDimensions:x},this.dimensions=new Cd(t,e,{autoResize:p}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll=new Rd(n,{touchMultiplier:g,wheelMultiplier:_}),this.virtualScroll.on("scroll",this.onVirtualScroll)}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName()}on(t,e){return this.emitter.on(t,e)}off(t,e){return this.emitter.off(t,e)}setScroll(t){this.isHorizontal?this.rootElement.scrollLeft=t:this.rootElement.scrollTop=t}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){this.isStopped&&(this.isStopped=!1,this.reset())}stop(){this.isStopped||(this.isStopped=!0,this.animate.stop(),this.reset())}raf(t){let e=t-(this.time||t);this.time=t,this.animate.advance(.001*e)}scrollTo(t,{offset:e=0,immediate:n=!1,lock:i=!1,duration:s=this.options.duration,easing:o=this.options.easing,lerp:a=this.options.lerp,onStart:l,onComplete:c,force:h=!1,programmatic:u=!0,userData:d}={}){if(!this.isStopped&&!this.isLocked||h){if(typeof t=="string"&&["top","left","start"].includes(t))t=0;else if(typeof t=="string"&&["bottom","right","end"].includes(t))t=this.limit;else{let f;if(typeof t=="string"?f=document.querySelector(t):t instanceof HTMLElement&&(t!=null&&t.nodeType)&&(f=t),f){if(this.options.wrapper!==window){let _=this.rootElement.getBoundingClientRect();e-=this.isHorizontal?_.left:_.top}let g=f.getBoundingClientRect();t=(this.isHorizontal?g.left:g.top)+this.animatedScroll}}if(typeof t=="number"){if(t+=e,t=Math.round(t),this.options.infinite?u&&(this.targetScroll=this.animatedScroll=this.scroll):t=c0(0,t,this.limit),t===this.targetScroll)return l==null||l(this),void(c==null||c(this));if(this.userData=d!=null?d:{},n)return this.animatedScroll=this.targetScroll=t,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c==null||c(this),void(this.userData={});u||(this.targetScroll=t),this.animate.fromTo(this.animatedScroll,t,{duration:s,easing:o,lerp:a,onStart:()=>{i&&(this.isLocked=!0),this.isScrolling="smooth",l==null||l(this)},onUpdate:(f,g)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=f-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=f,this.setScroll(this.scroll),u&&(this.targetScroll=f),g||this.emit(),g&&(this.reset(),this.emit(),c==null||c(this),this.userData={},this.preventNextNativeScrollEvent())}})}}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){return this.isHorizontal?this.rootElement.scrollLeft:this.rootElement.scrollTop}get scroll(){return this.options.infinite?function(e,n){return(e%n+n)%n}(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(t){this._isScrolling!==t&&(this._isScrolling=t,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(t){this._isStopped!==t&&(this._isStopped=t,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(t){this._isLocked!==t&&(this._isLocked=t,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let t="lenis";return this.isStopped&&(t+=" lenis-stopped"),this.isLocked&&(t+=" lenis-locked"),this.isScrolling&&(t+=" lenis-scrolling"),this.isScrolling==="smooth"&&(t+=" lenis-smooth"),t}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}};Yn.registerPlugin(jt);var Ir=window.matchMedia("(prefers-reduced-motion: reduce)").matches,Id=window.matchMedia("(pointer: fine)").matches,Aa=null;Ir||(Aa=new Hc({duration:1.15,smoothWheel:!0,wheelMultiplier:.95}),Aa.on("scroll",jt.update),Yn.ticker.add(r=>Aa.raf(r*1e3)),Yn.ticker.lagSmoothing(0),document.querySelectorAll('a[href^="#"]').forEach(r=>r.addEventListener("click",t=>{let e=r.getAttribute("href");if(e.length<2)return;let n=document.querySelector(e);n&&(t.preventDefault(),Aa.scrollTo(n,{offset:-70}))})),window.__lenis=Aa);var Pb=["M12.7136 1.31934H23.7836L36.4972 35.0001H25.5238L23.7352 29.3789H12.5686L10.78 35.0001H0L12.7136 1.31934ZM14.9372 22.1317H21.4149L18.2244 12.0043L14.9372 22.1317Z","M37.2849 1.31934H52.6572C60.4884 1.31934 66.3376 2.99176 66.3376 10.2389C66.3376 13.0263 65.5642 15.0704 63.5822 16.7892C66.0476 18.2294 67.6428 20.5522 67.6428 24.2687C67.6428 31.934 61.8903 35.0001 53.2857 35.0001H37.2849V1.31934ZM47.3881 14.6058H52.9473C54.8809 14.6058 55.9444 13.3515 55.9444 11.9113C55.9444 10.4712 54.8809 9.17043 52.9473 9.17043H47.3881V14.6058ZM47.3881 27.149H53.5757C55.8477 27.149 57.1046 25.8947 57.1046 24.2687C57.1046 22.5963 55.8477 21.3419 53.5757 21.3419H47.3881V27.149Z","M86.8965 24.6823V34.8004C96.8982 34.8004 105 27.0097 105 17.4026H94.4715C94.4715 21.421 91.0779 24.6823 86.8965 24.6823Z","M86.8965 10.1182V0C96.8982 0 105 7.7907 105 17.3978H94.4715C94.4715 13.3747 91.0779 10.1182 86.8965 10.1182Z","M86.8975 24.6823V34.8004C76.8958 34.8004 68.7939 27.0097 68.7939 17.4026H79.3225C79.3177 21.421 82.7112 24.6823 86.8975 24.6823Z","M86.8975 10.1182V0C76.8958 0 68.7939 7.7907 68.7939 17.3978H79.3225C79.3177 13.3747 82.7112 10.1182 86.8975 10.1182Z"];function Ib(){let r=document.createElement("canvas");r.width=1300,r.height=820;let t=r.getContext("2d");t.fillStyle="#14522e",t.fillRect(0,0,r.width,r.height);let e=11,n=()=>(e=e*16807%2147483647,e/2147483647);t.lineCap="round",t.lineJoin="round";let i=["#c99a4b","#d8ad5e","#2f8a55"];for(let a=0;a<40;a++){let l=80+n()*1140,c=80+n()*660;t.strokeStyle=i[a%3],t.lineWidth=a%4===0?14:8,t.beginPath(),t.moveTo(l,c);for(let h=0;h<3;h++){let u=80+n()*220;h%2===0?l+=n()<.5?u:-u:c+=n()<.5?u*.6:-u*.6,l=Math.max(50,Math.min(1250,l)),c=Math.max(50,Math.min(770,c)),t.lineTo(l,c)}t.stroke(),t.fillStyle=t.strokeStyle,t.beginPath(),t.arc(l,c,16,0,6.283),t.fill(),t.fillStyle="#1b5e36",t.beginPath(),t.arc(l,c,7,0,6.283),t.fill()}t.strokeStyle="#d8ad5e",t.lineWidth=16,t.beginPath();let s=120,o=110;t.moveTo(s,o);for(let a=0;a<9;a++)o=a%2?110:180,t.lineTo(s,o),s+=72,t.lineTo(s,o);return t.stroke(),t.fillStyle="#ffffff",t.font="700 46px Arial",t.fillText("\u0410\u0412\u041E InCars",920,770),t.font="600 30px Arial",t.fillText("LoRa",120,240),t.fillText("GSM",760,600),t.fillText("\u0413\u041B\u041E\u041D\u0410\u0421\u0421",380,740),r}var Ca=null;function zn(r,t={}){if(!Ca){let e=new Uint8Array([125,172,215,255]);Ca=new Tl(e,4,1,Zl),Ca.minFilter=Ca.magFilter=dn,Ca.needsUpdate=!0}return new Jr(Object.assign({color:r,roughness:.55,metalness:0,clearcoat:.15,clearcoatRoughness:.6},t))}function Ne(r,t,e,n,i){let s=new le(r,t);return s.castShadow=!0,s.receiveShadow=!0,n&&s.position.set(n[0],n[1],n[2]),i&&s.rotation.set(i[0],i[1],i[2]),e.add(s),s}function Lb(){let r=new Sn,t=zn(1447448,{roughness:.62}),e=zn(1118483,{roughness:.7}),n=zn(1710621,{roughness:.5,clearcoat:.25}),i=new jn({color:1774885,side:je}),s=K=>K,o=zn(1579035,{roughness:.48,clearcoat:.3,clearcoatRoughness:.5,envMapIntensity:.6}),a=new gi({color:12895436,metalness:1,roughness:.25}),l=new Jr({color:789518,roughness:.18,metalness:.2,clearcoat:1,clearcoatRoughness:.08}),c=new gi({color:131587,roughness:.9}),h=zn(15329774,{roughness:.7});Ne(new tn(8,.6,5.4,6,.28),t,r,[0,-1.45,0]),Ne(new tn(8,2.75,.5,6,.22),t,r,[0,-.22,2.45]),Ne(new tn(8,2.75,.5,6,.22),t,r,[0,-.22,-2.45]),Ne(new tn(.5,2.75,5.4,6,.22),t,r,[3.75,-.22,0]),Ne(new tn(.5,2.75,5.4,6,.22),t,r,[-3.75,-.22,0]),Ne(new tn(7.1,.05,4.5,2,.02),zn(1842208,{roughness:.8}),r,[0,-1.13,0]),s(Ne(new tn(8.8,.5,6.2,6,.24),e,r,[0,-1.55,0]),1.02);for(let[K,V]of[[-3.7,-2.45],[3.7,-2.45],[-3.7,2.45],[3.7,2.45]])s(Ne(new Ul(.5,2,8,24),t,r,[K*1.05,-.35,V*1.06]),1.06);let u=new Sn;s(Ne(new tn(8.5,.75,5.9,8,.36),n,u),1.02),Ne(new tn(6.9,.2,4.3,6,.1),t,u,[0,.38,0]);for(let[K,V]of[[-3.7,-2.45],[3.7,-2.45],[-3.7,2.45],[3.7,2.45]]){let W=Ne(new Zr(.42,32,16,0,Math.PI*2,0,Math.PI/2),l,u,[K,.36,V]);W.scale.y=.5;for(let k of[.6,.6+Math.PI/2])Ne(new tn(.44,.06,.08,2,.02),c,u,[K,.565,V],[0,k,0])}let d=new Jo,f=new Sn;Pb.forEach(K=>{d.parse(`<svg xmlns="http://www.w3.org/2000/svg"><path d="${K}"/></svg>`).paths.forEach(W=>Jo.createShapes(W).forEach(k=>{let ht=new Fl(k,{depth:2.2,bevelEnabled:!0,bevelThickness:.5,bevelSize:.35,bevelSegments:2,curveSegments:12}),U=new le(ht,o);U.castShadow=!0,f.add(U)}))});let g=.036;f.scale.set(g,g,g),f.rotation.x=Math.PI/2,f.position.set(-105*g/2,.56,-35*g/2),u.add(f),u.position.y=1.45,u.traverse(K=>{K.castShadow=!1}),r.add(u);let _=new Sn;s(Ne(new tn(6.6,.22,4.2,4,.1),zn(1328938,{roughness:.6,clearcoat:.2,envMapIntensity:.5}),_),1.015);let p=new Oo(Ib());p.colorSpace=un,p.anisotropy=8;let m=new le(new Yr(6.3,3.95),new gi({map:p,roughness:.6,metalness:0,envMapIntensity:.35}));m.rotation.x=-Math.PI/2,m.position.y=.115,_.add(m);let M=zn(855311,{roughness:.65,envMapIntensity:.5});[[-1.6,.35,1.5,1.5],[1.1,-.6,1.1,1.1],[2.3,1.1,.75,.75]].forEach(([K,V,W,k])=>{Ne(new tn(W,.32,k,3,.1),M,_,[K,.25,V]),Ne(new tn(W*.6,.06,k*.6,2,.02),zn(1842208,{roughness:.5,envMapIntensity:.5}),_,[K,.42,V])});let x=Ne(new Zr(.16,24,16),new jn({color:6094746}),_,[2.8,.3,-1.3]);_.position.y=.85,r.add(_);let y=zn(3105480,{roughness:.3,clearcoat:.8,clearcoatRoughness:.2}),C=K=>{let V=new Sn,W=4.6,k=.8,ht=document.createElement("canvas");ht.width=1024,ht.height=512;let U=ht.getContext("2d");U.fillStyle="#2f5fc4",U.fillRect(0,0,1024,512),U.fillStyle="#ffffff",U.font="700 64px Arial",U.textAlign="center",U.save(),U.translate(512,256),U.rotate(Math.PI/2),U.fillText("Li-SOCl\u2082  3,6 V",0,-40),U.font="500 40px Arial",U.fillText("3,6V \xB7 LITHIUM",0,40),U.restore(),U.fillStyle="rgba(255,255,255,.9)",U.fillRect(0,470,1024,14);let dt=new Oo(ht);dt.colorSpace=un,dt.anisotropy=8,dt.wrapS=Lo,dt.offset.x=.5;let Lt=new Jr({map:dt,roughness:.35,clearcoat:.6,clearcoatRoughness:.25}),Ht=Ne(new zo(k,k,W,64,1,!0),Lt,V,[0,0,0],[0,0,Math.PI/2]);Ht.material.side=di;let O=new gi({color:13224400,metalness:1,roughness:.28}),N=new Jr({color:3104708,roughness:.35,clearcoat:.6});for(let E of[1,-1])Ne(new Ol(k*.9,48),O,V,[E*W/2,0,0],[0,E*Math.PI/2,0]),Ne(new Bl(k*.93,.07,12,64),N,V,[E*W/2,0,0],[0,Math.PI/2,0]);Ne(new zo(.26,.28,.16,32),O,V,[W/2+.08,0,0],[0,0,Math.PI/2]);let L=E=>new Bo([new G(-W/2,E*.3,0),new G(-W/2-.5,E*.35,0),new G(-W/2-.9,E*.2-.3,.2),new G(-W/2-1.15,-.55,.3)]);return Ne(new Wo(L(1),24,.05,8),zn(12986408,{roughness:.4}),V),Ne(new Wo(L(-1),24,.05,8),zn(1118481,{roughness:.4}),V),Ne(new tn(.42,.26,.5,2,.05),zn(15856110,{roughness:.6}),V,[-W/2-1.2,-.62,.3]),V.position.set(0,-.3,K),r.add(V),V},T=C(-1.05),S=C(1.05),P=new Sn;P.position.y=-1.79;let z=K=>new jn({color:7814589,transparent:!0,opacity:K,depthWrite:!1}),v=[];for(let K=0;K<3;K++){let V=new le(new Go(1,1.035,128),z(0));V.rotation.x=-Math.PI/2,P.add(V),v.push(V)}let w=[[-9,-3],[-14,3],[-8,6.5],[3,-9],[9,-6],[-3,-12]],F=w.map(([K,V])=>{let W=new Sn;W.position.set(K,0,V);let k=new le(new tn(1.1,.5,.75,3,.16),zn(1447448,{roughness:.6}));k.position.y=.25,W.add(k);let ht=new le(new Go(.9,.95,64),z(0));ht.rotation.x=-Math.PI/2,ht.position.y=.01,W.add(ht);let U=new le(new Zr(.09,16,12),new jn({color:9065184,transparent:!0,opacity:0}));return U.position.y=.56,W.add(U),W.visible=!1,P.add(W),{n:W,halo:ht,dot:U}}),Y=[[null,0],[0,1],[1,2],[null,3],[3,4],[4,5]].map(([K,V])=>{let W=K===null?new G(0,.05,0):new G(w[K][0],.05,w[K][1]),k=new G(w[V][0],.05,w[V][1]),ht=new Ge().setFromPoints([W,k]),U=new Cl(ht,new Uo({color:7814589,transparent:!0,opacity:0})),dt=new le(new Zr(.12,16,12),new jn({color:7814589,transparent:!0,opacity:0}));return P.add(U,dt),{line:U,pulse:dt,A:W,B:k,to:V}});return r.add(P),{root:r,lid:u,board:_,bat1:T,bat2:S,waves:P,led:x,lora:{ripples:v,nodes:F,links:Y}}}function Db(r){let t=r.querySelector("canvas"),e=new wl({canvas:t,antialias:!0,alpha:!0});e.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),e.outputColorSpace=un,e.toneMapping=Qu,e.toneMappingExposure=1.05,e.shadowMap.enabled=!0,e.shadowMap.type=Ku;let n=new Zs,i=new qs(e);n.environment=i.fromScene(new Ql,.04).texture;let s=new fn(30,1,.1,200);s.position.set(0,9,26),s.lookAt(0,0,0);let o=new Yo(16777215,1.8);o.position.set(7,16,10),o.castShadow=!0,o.shadow.mapSize.set(2048,2048),o.shadow.radius=16,o.shadow.bias=-5e-4,o.shadow.normalBias=.02,Object.assign(o.shadow.camera,{left:-18,right:18,top:18,bottom:-18}),n.add(o),n.add(new Hl(16777215,14211294,.35));let a=new Yo(16777215,.9);a.position.set(-10,6,-8),n.add(a);let l=new le(new Yr(60,60),new zl({opacity:.14}));l.rotation.x=-Math.PI/2,l.position.y=-1.8,l.receiveShadow=!0,n.add(l);let c=Lb(),h=new Sn;h.add(c.root),n.add(h),c.root.rotation.set(.15,-.6,0);let u={rotY:-.6,rotX:.28,lidY:1.4,lidTilt:0,boardY:.85,boardTilt:0,batUp:0,wave:0,scale:.72,x:0,y:innerWidth<700?-4.4:-4.3},d=innerWidth<700?0:3.6,f={x:0,y:0,tx:0,ty:0};Id&&window.addEventListener("pointermove",S=>{f.tx=S.clientX/innerWidth-.5,f.ty=S.clientY/innerHeight-.5});function g(){let S=t.clientWidth,P=t.clientHeight;e.setSize(S,P,!1),s.aspect=S/P,s.fov=S<700?42:30,s.updateProjectionMatrix()}g(),new ResizeObserver(g).observe(t);let _=!0;new IntersectionObserver(S=>{_=S[0].isIntersecting}).observe(t);let p=new Xl;function m(){if(requestAnimationFrame(m),!_)return;let S=p.getElapsedTime();f.x+=(f.tx-f.x)*.05,f.y+=(f.ty-f.y)*.05,c.root.rotation.y=u.rotY+f.x*.35+(Ir?0:Math.sin(S*.4)*.04),c.root.rotation.x=u.rotX+f.y*.15,c.root.position.y=u.y+(Ir?0:Math.sin(S*.9)*.08),h.position.x=u.x,h.scale.setScalar(u.scale),c.lid.position.y=u.lidY,c.lid.rotation.z=u.lidTilt,c.board.position.y=u.boardY,c.board.rotation.x=u.boardTilt,c.bat1.position.y=-.3+u.batUp*2.6,c.bat1.position.z=-1.05+u.batUp*.4,c.bat2.position.y=-.3+u.batUp*4.6,c.bat2.position.z=1.05-u.batUp*.9;let P=c.lora,z=u.wave;P.ripples.forEach((w,F)=>{let X=(S*.35+F/3)%1;w.scale.setScalar(4.5+X*9),w.material.opacity=z*(1-X)*.55}),P.nodes.forEach((w,F)=>{w.n.visible=z>.02,w.n.scale.setScalar(.6+.4*z),w.halo.material.opacity=z*.35});let v=S*.45%1;P.links.forEach((w,F)=>{let X=Math.min(1,Math.max(0,(v-F%3*.28)/.28));w.line.material.opacity=z*.35,w.pulse.position.lerpVectors(w.A,w.B,X),w.pulse.material.opacity=z*(X>0&&X<1?1:0);let Y=P.nodes[w.to];X>=1&&v-F%3*.28<.5?Y.dot.material.opacity=z:Y.dot.material.opacity*=.92}),c.led.material.color.setHSL(.38,.9,.45+.2*Math.sin(S*4)),e.render(n,s)}m();let M=r.querySelectorAll("[data-cap]"),x=r.querySelector(".b3__intro");if(Ir){M.forEach(S=>S.style.opacity=1);return}let y=Yn.timeline({defaults:{ease:"power2.inOut"},scrollTrigger:{trigger:r,start:"top top",end:()=>"+="+Math.round(innerHeight*4.4),scrub:.8,pin:r.querySelector(".b3__stage"),pinSpacing:!0,anticipatePin:1}}),C=(S,P)=>y.fromTo(M[S],{opacity:0,y:30},{opacity:1,y:0,duration:.4},P).to(M[S],{opacity:0,y:-30,duration:.4},P+.8),T=innerWidth<700?.68:.86;y.to(x,{opacity:0,y:-60,duration:.6},0).to(u,{rotY:.55,rotX:.5,scale:T,y:innerWidth<700?1.6:0,x:d,duration:1},0).to(u,{lidY:4.6,lidTilt:-.12,duration:1},.6),C(0,.9),y.to(u,{lidY:20,boardY:3.4,boardTilt:.95,rotY:.05,rotX:.35,x:-d,duration:1},1.7),C(1,2),y.to(u,{boardY:.85,boardTilt:0,rotY:-.3,rotX:.55,x:d*.5,duration:.8},2.8).to(u,{boardY:14,duration:.6},3.05).to(u,{batUp:1,duration:.7},3.2),C(2,3.3),y.to(u,{batUp:0,duration:.6},4.1).to(u,{boardY:.85,duration:.5},4.4).to(u,{lidY:4.6,duration:.6},4.5),y.to(u,{wave:1,lidY:1.4,lidTilt:0,rotY:.25,rotX:.3,scale:T*.78,x:-d*.6,duration:.8},4.6),C(3,4.8),y.to(u,{wave:0,duration:.3,ease:"power1.in"},5.55).to(u,{lidY:1.4,lidTilt:0,rotY:-.35,rotX:.32,scale:T,x:d,duration:1},5.6),y.fromTo(M[4],{opacity:0,y:30},{opacity:1,y:0,duration:.4},6.1).to({},{duration:.6},6.5)}var Pd=document.querySelector(".b3");if(Pd)try{Db(Pd)}catch(r){Pd.classList.add("no-webgl"),console.warn(r)}Ir||document.querySelectorAll(".t-h2:not(.vh)").forEach(r=>{Yn.fromTo(r,{yPercent:40,opacity:0},{yPercent:0,opacity:1,duration:1.1,ease:"expo.out",scrollTrigger:{trigger:r,start:"top 88%",once:!0}})});Id&&!Ir&&document.querySelectorAll(".ptile").forEach(r=>{let t=r.querySelector("img");r.addEventListener("pointermove",e=>{let n=r.getBoundingClientRect(),i=(e.clientX-n.left)/n.width-.5,s=(e.clientY-n.top)/n.height-.5;Yn.to(r,{rotateY:i*5,rotateX:-s*5,duration:.6,ease:"power3.out",transformPerspective:1200}),t&&Yn.to(t,{x:i*18,y:s*12,duration:.8,ease:"power3.out"})}),r.addEventListener("pointerleave",()=>{Yn.to(r,{rotateY:0,rotateX:0,duration:.9,ease:"expo.out"}),t&&Yn.to(t,{x:0,y:0,duration:.9,ease:"expo.out"})})});Id&&!Ir&&document.querySelectorAll(".btn, .magnet").forEach(r=>{r.addEventListener("pointermove",t=>{let e=r.getBoundingClientRect();Yn.to(r,{x:(t.clientX-e.left-e.width/2)*.25,y:(t.clientY-e.top-e.height/2)*.35,duration:.5,ease:"power3.out"})}),r.addEventListener("pointerleave",()=>Yn.to(r,{x:0,y:0,duration:.8,ease:"elastic.out(1, 0.5)"}))});window.addEventListener("load",()=>jt.refresh());function Nb(r){let t=window.AVO_DOTS||[],e=window.AVO_DOTS_RATIO||1.68;if(!t.length)return;let n=r.getContext("2d"),i=0,s=0,o=[],a=2,l={x:-9999,y:-9999};function c(){let f=Math.min(2,devicePixelRatio||1);i=r.clientWidth,s=r.clientHeight,r.width=i*f,r.height=s*f,n.setTransform(f,0,0,f,0,0);let g=i*(i<700?1.1:.72),_=g/e;_>s*.8&&(_=s*.8,g=_*e);let p=i-g*(i<700?.95:.98),m=s*.08;a=Math.max(1,g/813*2),o=t.map((M,x)=>{let y=p+M[0]*g,C=m+M[1]*_;return{hx:y,hy:C,x:y,y:C,vx:0,vy:0,a:x*7919%13===0}})}c(),new ResizeObserver(c).observe(r),r.parentElement.addEventListener("pointermove",f=>{let g=r.getBoundingClientRect();l.x=f.clientX-g.left,l.y=f.clientY-g.top}),r.parentElement.addEventListener("pointerleave",()=>{l.x=l.y=-9999});let h=!1;new IntersectionObserver(f=>{h=f[0].isIntersecting}).observe(r);let u=140;function d(f){if(requestAnimationFrame(d),!!h){n.clearRect(0,0,i,s);for(let g of o){let _=g.x-l.x,p=g.y-l.y,m=_*_+p*p;if(!Ir&&m<u*u){let x=Math.sqrt(m)||1,y=(1-x/u)*2.4;g.vx+=_/x*y,g.vy+=p/x*y}g.vx+=(g.hx-g.x)*.06,g.vy+=(g.hy-g.y)*.06,g.vx*=.82,g.vy*=.82,g.x+=g.vx,g.y+=g.vy;let M=Math.min(1,Math.hypot(g.x-g.hx,g.y-g.hy)/30);if(g.a){let x=.5+.5*Math.sin(f/600+g.hx);n.fillStyle=`rgba(185,145,255,${.35+.55*x})`}else n.fillStyle=M>.05?`rgba(185,145,255,${.3+.7*M})`:"#2c2836";n.fillRect(g.x-a,g.y-a,a*2,a*2)}}}requestAnimationFrame(d)}document.querySelectorAll("canvas[data-particles]").forEach(Nb);})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

gsap/gsap-core.js:
  (*!
   * GSAP 3.12.5
   * https://gsap.com
   *
   * @license Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CSSPlugin.js:
  (*!
   * CSSPlugin 3.12.5
   * https://gsap.com
   *
   * Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/Observer.js:
  (*!
   * Observer 3.12.5
   * https://gsap.com
   *
   * @license Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/ScrollTrigger.js:
  (*!
   * ScrollTrigger 3.12.5
   * https://gsap.com
   *
   * @license Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)
*/
