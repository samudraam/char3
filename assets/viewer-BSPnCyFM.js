import"./modulepreload-polyfill-B5Qt9EMX.js";const p=document.getElementById("viewer-root"),y=new URLSearchParams(window.location.search),i=y.get("id"),h="https://bleedingcool.com/wp-content/uploads/2024/01/dune-part-two-feature-2000x1125.jpg",g={1:{html:`
    <div id="dog-wrapper">
        <button id="spawn-btn">
        <i class="fa-solid fa-bone"></i>
        <span class="btn-text">CLICK ME!</span>
        </button>
  </div>`},2:{html:`        
    <div class="image-2-container">
      <img class="background-2-image" src="${h}" />
      <div class="tile top-left"></div>
      <div class="tile top-right"></div>
      <div class="tile bottom-left"></div>
      <div class="tile bottom-right"></div>
    </div>`},3:{html:'<div id="note-canvas"></div>'},4:{html:`    
    <div class="dot-reveal-container">
      <div id="expanding-dot"></div>
      <p class="scroll-text">SCROLL</p>
      <img id="hidden-image" src="https://www.roadracingworld.com/wp-content/uploads/2023/01/Toby-Price-Red-Bull-KTM-Factory-Racing-2023-Dakar-Rally_1673632430.jpg" />
    </div>`},5:{html:`
    <div class="eyes-container">
      <div class="eye">
        <div class="pupil"></div>
      </div>
      <div class="eye">
        <div class="pupil"></div>
      </div>
    </div>
  `},6:{html:`
    <div class="bounce-scene">
      <div id="ball"></div>
    </div>
  `},7:{html:`
    <div class="color-picker">
      <span class="color-option" data-color="#e74c3c" style="background: #e74c3c;"></span>
      <span class="color-option" data-color="#2ecc71" style="background: #2ecc71;"></span>
      <span class="color-option" data-color="#3498db" style="background: #3498db;"></span>
    </div>
    <div id="click-zone">
      <p class="click-instruction">CLICK</p>
    </div>
  `},8:{html:`
    <div class="slider-reveal-container">
      <div class="image-mask">
        <img src="https://media.tenor.com/cz1GUolsj2YAAAAe/crying-cry.png" alt="crying cat" />
      </div>
      <input type="range" min="0" max="100" value="0" id="reveal-slider" />
    </div>
  `},9:{html:`
    <div class="center-page">
        <div class="loader"></div>
    </div>`}};if(g[i]){if(p.innerHTML=g[i].html,i==1&&document.getElementById("spawn-btn").addEventListener("click",async()=>{try{const n=await(await fetch("https://dog.ceo/api/breeds/image/random")).json(),e=document.createElement("img");e.src=n.message,e.alt="A random dog",e.className="dog-img",e.style.position="absolute",e.style.top=Math.random()*80+"%",e.style.left=Math.random()*80+"%",e.style.width=Math.floor(Math.random()*150+50)+"px",document.body.appendChild(e)}catch(t){console.error("Failed to load dog image:",t)}}),i==3){const o=document.getElementById("note-canvas"),t=["#FF7EB9","#FF65A3","#7AFCFF","#FEFF9C","#FFF740"],n=["U okay","U cool i guess","U be doin stuff","U funny or whatever","not useless 🤷‍♀️","vibes acceptable","oddly competent","surprisingly not annoying","u exist, nicely","seen worse","brain on sometimes","mid... but in a good way","a decent attempt, honestly","lookin' like effort was made","like... you’re fine","almost impressive","keep it up? or don’t...","could be worse, and isn’t","wow, a functioning human"];let e=null;const s=()=>{const c=document.createElement("div");return c.classList.add("sticky-note"),c.style.backgroundColor=t[Math.floor(Math.random()*t.length)],c.textContent=n[Math.floor(Math.random()*n.length)],o.appendChild(c),c},a=c=>{e&&(e.style.left=`${c.clientX-120/2}px`,e.style.top=`${c.clientY-120/2}px`)},l=()=>{e&&(e.classList.add("placed"),e=null,e=s())};e=s(),window.addEventListener("mousemove",a),window.addEventListener("click",l)}if(i==4){const o=document.getElementById("expanding-dot"),t=document.getElementById("hidden-image"),n=()=>{o.style.transform="scale(50)",setTimeout(()=>{t.style.opacity=1},500)};window.addEventListener("scroll",n,{once:!0}),window.addEventListener("click",n,{once:!0})}if(i==5){const o=document.querySelectorAll(".pupil");window.addEventListener("mousemove",t=>{o.forEach(n=>{const s=n.parentElement.getBoundingClientRect(),a=s.left+s.width/2,l=s.top+s.height/2,c=t.clientX-a,r=t.clientY-l,d=Math.atan2(r,c),m=15,u=Math.cos(d)*m,v=Math.sin(d)*m;n.style.transform=`translate(${u}px, ${v}px)`})})}if(i==6){const o=document.getElementById("ball"),t=["red","blue","green","orange","purple","deeppink","#FFD700","#00CED1"];o.addEventListener("animationiteration",()=>{const n=t[Math.floor(Math.random()*t.length)];o.style.backgroundColor=n})}if(i==7){let o="#e74c3c";const t=document.querySelectorAll(".color-option"),n=document.getElementById("click-zone");t.forEach(e=>{e.addEventListener("click",()=>{t.forEach(s=>s.classList.remove("selected")),e.classList.add("selected"),o=e.dataset.color})}),t[0].classList.add("selected"),n.addEventListener("click",e=>{const s=document.createElement("div");s.classList.add("square"),s.style.backgroundColor=o;const a=n.getBoundingClientRect();s.style.left=`${e.clientX-a.left-50}px`,s.style.top=`${e.clientY-a.top-50}px`,n.appendChild(s)})}if(i==="8"){const o=document.getElementById("reveal-slider"),t=document.querySelector(".image-mask img");o.addEventListener("input",()=>{const n=100-o.value;t.style.clipPath=`inset(0 ${n}% 0 0)`})}if(i==="9"){const o=document.querySelector(".loader");o.addEventListener("click",()=>{o.classList.toggle("morphed")})}}else p.innerHTML="<p>Page not found</p>";
