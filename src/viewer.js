const root = document.getElementById("viewer-root");
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const imageSplitSrc =
  "https://bleedingcool.com/wp-content/uploads/2024/01/dune-part-two-feature-2000x1125.jpg";

const pageData = {
  1: {
    html: `
    <div id="dog-wrapper">
        <button id="spawn-btn">
        <i class="fa-solid fa-bone"></i>
        <span class="btn-text">CLICK ME!</span>
        </button>
  </div>`,
  },
  2: {
    html: `        
    <div class="image-2-container">
      <img class="background-2-image" src="${imageSplitSrc}" />
      <div class="tile top-left"></div>
      <div class="tile top-right"></div>
      <div class="tile bottom-left"></div>
      <div class="tile bottom-right"></div>
    </div>`,
  },
  3: {
    html: `<div id="note-canvas"></div>`,
  },
  4: {
    html: `    
    <div class="dot-reveal-container">
      <div id="expanding-dot"></div>
      <p class="scroll-text">SCROLL</p>
      <img id="hidden-image" src="https://www.roadracingworld.com/wp-content/uploads/2023/01/Toby-Price-Red-Bull-KTM-Factory-Racing-2023-Dakar-Rally_1673632430.jpg" />
    </div>`,
  },
  5: {
    html: `
    <div class="eyes-container">
      <div class="eye">
        <div class="pupil"></div>
      </div>
      <div class="eye">
        <div class="pupil"></div>
      </div>
    </div>
  `,
  },
  6: {
    html: `
    <div class="bounce-scene">
      <div id="ball"></div>
    </div>
  `,
  },
  7: {
    html: `
    <div class="color-picker">
      <span class="color-option" data-color="#e74c3c" style="background: #e74c3c;"></span>
      <span class="color-option" data-color="#2ecc71" style="background: #2ecc71;"></span>
      <span class="color-option" data-color="#3498db" style="background: #3498db;"></span>
    </div>
    <div id="click-zone">
      <p class="click-instruction">CLICK</p>
    </div>
  `,
  },
  8: {
    html: `
    <div class="slider-reveal-container">
      <div class="image-mask">
        <img src="https://media.tenor.com/cz1GUolsj2YAAAAe/crying-cry.png" alt="crying cat" />
      </div>
      <input type="range" min="0" max="100" value="0" id="reveal-slider" />
    </div>
  `,
  },
  9: {
    html: `
    <div class="center-page">
        <div class="loader"></div>
    </div>`,
  },
  10: {
    html: `
    <div class="infinite-loading-wrapper">
      <div class="infinite-bar">
        <div class="bar-fill"></div>
      </div>
      <p class="loading-text">Loading<span class="dots"></span></p>
    </div>
  `,
  },
};

if (pageData[id]) {
  root.innerHTML = pageData[id].html;

  if (id == 1) {
    const dogButton = document.getElementById("spawn-btn");

    dogButton.addEventListener("click", async () => {
      try {
        const res = await fetch("https://dog.ceo/api/breeds/image/random");
        const data = await res.json();

        const img = document.createElement("img");
        img.src = data.message;
        img.alt = "A random dog";
        img.className = "dog-img";

        img.style.position = "absolute";
        img.style.top = Math.random() * 80 + "%";
        img.style.left = Math.random() * 80 + "%";
        img.style.width = Math.floor(Math.random() * 150 + 50) + "px";

        document.body.appendChild(img);
      } catch (err) {
        console.error("Failed to load dog image:", err);
      }
    });
  }
  //------------------------------------------------------------------
  if (id == 3) {
    const canvas = document.getElementById("note-canvas");

    const colors = ["#FF7EB9", "#FF65A3", "#7AFCFF", "#FEFF9C", "#FFF740"];
    const quotes = [
      "U okay",
      "U cool i guess",
      "U be doin stuff",
      "U funny or whatever",
      "not useless 🤷‍♀️",
      "vibes acceptable",
      "oddly competent",
      "surprisingly not annoying",
      "u exist, nicely",
      "seen worse",
      "brain on sometimes",
      "mid... but in a good way",
      "a decent attempt, honestly",
      "lookin' like effort was made",
      "like... you’re fine",
      "almost impressive",
      "keep it up? or don’t...",
      "could be worse, and isn’t",
      "wow, a functioning human",
    ];

    let currentNote = null;

    const createFloatingNote = () => {
      const note = document.createElement("div");
      note.classList.add("sticky-note");
      note.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];
      note.textContent = quotes[Math.floor(Math.random() * quotes.length)];
      canvas.appendChild(note);
      return note;
    };

    const moveNoteWithMouse = (e) => {
      if (currentNote) {
        const noteWidth = 120;
        const noteHeight = 120;

        currentNote.style.left = `${e.clientX - noteWidth / 2}px`;
        currentNote.style.top = `${e.clientY - noteHeight / 2}px`;
      }
    };

    const placeNote = () => {
      if (currentNote) {
        currentNote.classList.add("placed");
        currentNote = null;
        currentNote = createFloatingNote();
      }
    };

    currentNote = createFloatingNote();

    window.addEventListener("mousemove", moveNoteWithMouse);
    window.addEventListener("click", placeNote);
  }

  if (id == 4) {
    const dot = document.getElementById("expanding-dot");
    const image = document.getElementById("hidden-image");

    const triggerReveal = () => {
      dot.style.transform = "scale(50)";
      setTimeout(() => {
        image.style.opacity = 1;
      }, 500);
    };

    window.addEventListener("scroll", triggerReveal, { once: true });
    window.addEventListener("click", triggerReveal, { once: true });
  }
  if (id == 5) {
    const pupils = document.querySelectorAll(".pupil");

    window.addEventListener("mousemove", (e) => {
      pupils.forEach((pupil) => {
        const eye = pupil.parentElement;
        const rect = eye.getBoundingClientRect();

        const eyeCenterX = rect.left + rect.width / 2;
        const eyeCenterY = rect.top + rect.height / 2;

        const dx = e.clientX - eyeCenterX;
        const dy = e.clientY - eyeCenterY;

        const angle = Math.atan2(dy, dx);
        const distance = 15;

        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;

        pupil.style.transform = `translate(${x}px, ${y}px)`;
      });
    });
  }
  if (id == 6) {
    const ball = document.getElementById("ball");

    const colors = [
      "red",
      "blue",
      "green",
      "orange",
      "purple",
      "deeppink",
      "#FFD700",
      "#00CED1",
    ];

    ball.addEventListener("animationiteration", () => {
      const newColor = colors[Math.floor(Math.random() * colors.length)];
      ball.style.backgroundColor = newColor;
    });
  }

  if (id == 7) {
    let currentColor = "#e74c3c";
    const colorOptions = document.querySelectorAll(".color-option");
    const clickZone = document.getElementById("click-zone");

    colorOptions.forEach((option) => {
      option.addEventListener("click", () => {
        colorOptions.forEach((o) => o.classList.remove("selected"));
        option.classList.add("selected");
        currentColor = option.dataset.color;
      });
    });

    colorOptions[0].classList.add("selected");

    clickZone.addEventListener("click", (e) => {
      const square = document.createElement("div");
      square.classList.add("square");
      square.style.backgroundColor = currentColor;

      const rect = clickZone.getBoundingClientRect();
      square.style.left = `${e.clientX - rect.left - 50}px`;
      square.style.top = `${e.clientY - rect.top - 50}px`;

      clickZone.appendChild(square);
    });
  }
  if (id === "8") {
    const slider = document.getElementById("reveal-slider");
    const image = document.querySelector(".image-mask img");

    slider.addEventListener("input", () => {
      const percent = 100 - slider.value;
      image.style.clipPath = `inset(0 ${percent}% 0 0)`;
    });
  }
  if (id === "9") {
    const shape = document.querySelector(".loader");

    shape.addEventListener("click", () => {
      shape.classList.toggle("morphed");
    });
  }
} else {
  root.innerHTML = `<p>Page not found</p>`;
}
