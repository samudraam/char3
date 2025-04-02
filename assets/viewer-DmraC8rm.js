import"./modulepreload-polyfill-B5Qt9EMX.js";const p=document.getElementById("viewer-root"),h=new URLSearchParams(window.location.search),a=h.get("id"),y="https://bleedingcool.com/wp-content/uploads/2024/01/dune-part-two-feature-2000x1125.jpg",g={1:{html:`
    <div id="dog-wrapper">
        <button id="spawn-btn">
        <i class="fa-solid fa-bone"></i>
        <span class="btn-text">CLICK ME!</span>
        </button>
  </div>`},2:{html:`        
    <div class="image-2-container">
      <img class="background-2-image" src="${y}" />
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
    </div>`},10:{html:`
    <div class="infinite-loading-wrapper">
      <div class="infinite-bar">
        <div class="bar-fill"></div>
      </div>
      <p class="loading-text">Loading<span class="dots"></span></p>
    </div>
  `}};if(g[a]){if(p.innerHTML=g[a].html,a==1&&document.getElementById("spawn-btn").addEventListener("click",async()=>{try{const o=await(await fetch("https://dog.ceo/api/breeds/image/random")).json(),e=document.createElement("img");e.src=o.message,e.alt="A random dog",e.className="dog-img",e.style.position="absolute",e.style.top=Math.random()*80+"%",e.style.left=Math.random()*80+"%",e.style.width=Math.floor(Math.random()*150+50)+"px",document.body.appendChild(e)}catch(t){console.error("Failed to load dog image:",t)}}),a==3){const n=document.getElementById("note-canvas"),t=["#FF7EB9","#FF65A3","#7AFCFF","#FEFF9C","#FFF740"],o=["U okay","U cool i guess","U be doin stuff","U funny or whatever","not useless 🤷‍♀️","vibes acceptable","oddly competent","surprisingly not annoying","u exist, nicely","seen worse","brain on sometimes","mid... but in a good way","a decent attempt, honestly","lookin' like effort was made","like... you’re fine","almost impressive","keep it up? or don’t...","could be worse, and isn’t","wow, a functioning human"];let e=null;const s=()=>{const i=document.createElement("div");return i.classList.add("sticky-note"),i.style.backgroundColor=t[Math.floor(Math.random()*t.length)],i.textContent=o[Math.floor(Math.random()*o.length)],n.appendChild(i),i},c=i=>{e&&(e.style.left=`${i.clientX-120/2}px`,e.style.top=`${i.clientY-120/2}px`)},l=()=>{e&&(e.classList.add("placed"),e=null,e=s())};e=s(),window.addEventListener("mousemove",c),window.addEventListener("click",l)}if(a==4){const n=document.getElementById("expanding-dot"),t=document.getElementById("hidden-image"),o=()=>{n.style.transform="scale(50)",setTimeout(()=>{t.style.opacity=1},500)};window.addEventListener("scroll",o,{once:!0}),window.addEventListener("click",o,{once:!0})}if(a==5){const n=document.querySelectorAll(".pupil");window.addEventListener("mousemove",t=>{n.forEach(o=>{const s=o.parentElement.getBoundingClientRect(),c=s.left+s.width/2,l=s.top+s.height/2,i=t.clientX-c,r=t.clientY-l,d=Math.atan2(r,i),m=15,v=Math.cos(d)*m,u=Math.sin(d)*m;o.style.transform=`translate(${v}px, ${u}px)`})})}if(a==6){const n=document.getElementById("ball"),t=["red","blue","green","orange","purple","deeppink","#FFD700","#00CED1"];n.addEventListener("animationiteration",()=>{const o=t[Math.floor(Math.random()*t.length)];n.style.backgroundColor=o})}if(a==7){let n="#e74c3c";const t=document.querySelectorAll(".color-option"),o=document.getElementById("click-zone");t.forEach(e=>{e.addEventListener("click",()=>{t.forEach(s=>s.classList.remove("selected")),e.classList.add("selected"),n=e.dataset.color})}),t[0].classList.add("selected"),o.addEventListener("click",e=>{const s=document.createElement("div");s.classList.add("square"),s.style.backgroundColor=n;const c=o.getBoundingClientRect();s.style.left=`${e.clientX-c.left-50}px`,s.style.top=`${e.clientY-c.top-50}px`,o.appendChild(s)})}if(a==="8"){const n=document.getElementById("reveal-slider"),t=document.querySelector(".image-mask img");n.addEventListener("input",()=>{const o=100-n.value;t.style.clipPath=`inset(0 ${o}% 0 0)`})}if(a==="9"){const n=document.querySelector(".loader");n.addEventListener("click",()=>{n.classList.toggle("morphed")})}}else p.innerHTML="<p>Page not found</p>";
