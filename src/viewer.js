import p5 from "p5";

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
  11: {
    html: ``,
  },
  12: {
    html: `<div id="p5-holder"></div>`,
  },
  13: {
    html: `<div id="p5-holder"></div>`,
  },
  14: {
    html: `    
    <div class="invert-circle"></div>
    <div class="bgvid">
      <video autoplay muted loop src="colorize.mp4"></video>
    </div>`,
  },
  15: {
    html: ` <div class="key-instruction">Press keys 1–9 to change curve density</div>
<div id="p5-holder"></div>`,
  },
  16: {
    html: `<div class="key-instruction">Draw with cursor for effect</div>
    <div id="p5-holder"></div>`,
  },
  17: {
    html: `<div id="p5-holder"></div>`,
  },
  18: {
    html: `    <div class="bubble-score">Score: <span id="bubble-score">0</span></div>
    <div id="p5-holder"></div>`,
  },
  19: {
    html: `        <div class="time-container">
      <h1 id="local-time">Loading time...</h1>
      <p class="time-label">Your local time</p>
    </div>`,
  },
  20: {
    html: `<div id="p5-holder"></div>`,
  },
};

if (pageData[id]) {
  root.innerHTML = "";
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
  if (id == 8) {
    const slider = document.getElementById("reveal-slider");
    const image = document.querySelector(".image-mask img");

    slider.addEventListener("input", () => {
      const percent = 100 - slider.value;
      image.style.clipPath = `inset(0 ${percent}% 0 0)`;
    });
  }
  if (id == 9) {
    const shape = document.querySelector(".loader");

    shape.addEventListener("click", () => {
      shape.classList.toggle("morphed");
    });
  }

  if (id == 11) {
    const root = document.getElementById("viewer-root");
    root.innerHTML = `  <div id="draw-layer">
    <div class="draw-header">Draw anywhere!</div>
    <div id="loading-message">Loading random painting...</div>
    <div id="p5-holder"></div>
  </div>`;

    let paintingUrl = null;

    fetch("https://api.artic.edu/api/v1/artworks?page=1&limit=100")
      .then((res) => res.json())
      .then((data) => {
        const artworks = data.data.filter((item) => item.image_id);
        const random = artworks[Math.floor(Math.random() * artworks.length)];
        paintingUrl = `https://www.artic.edu/iiif/2/${random.image_id}/full/843,/0/default.jpg`;

        new p5(
          (p) => sketch(p, paintingUrl),
          document.getElementById("p5-holder")
        );
      });

    const sketch = (p, url) => {
      let painting;

      p.preload = () => {
        painting = p.loadImage(url);
      };

      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
        p.image(painting, 0, 0, p.width, p.height);

        const msg = document.getElementById("loading-message");
        if (msg) msg.remove();

        p.stroke(0);
        p.strokeWeight(10);
      };

      p.mouseDragged = () => {
        p.line(p.pmouseX, p.pmouseY, p.mouseX, p.mouseY);
      };

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
        p.image(painting, 0, 0, p.width, p.height);
      };
    };
  }
  if (id == 12) {
    const root = document.getElementById("viewer-root");
    root.innerHTML = pageData[12].html;

    new p5((p) => {
      let font;

      p.preload = () => {
        font = p.loadFont(
          "https://cdnjs.cloudflare.com/ajax/libs/topcoat/0.8.0/font/SourceCodePro-Regular.otf"
        );
      };

      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
        p.angleMode(p.DEGREES);
        p.textFont(font || "sans-serif");
        p.textSize(16);
        p.textAlign(p.CENTER, p.CENTER);
        p.noStroke();
        p.fill(0);
      };

      p.draw = () => {
        p.background(1000);
        p.orbitControl();

        for (let z = 0; z < 180; z += 30) {
          for (let x = 0; x < 360; x += 30) {
            p.push();
            p.rotateZ(z);
            p.rotateX(x);
            p.translate(0, 150, 0);
            p.rotateY(-x);
            p.rotateX(-z);
            p.text("round", 0, 0);
            p.pop();
          }
        }
      };

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
      };
    }, document.getElementById("p5-holder"));
  }
  if (id === "13") {
    new p5((p) => {
      let texts = [];
      let numTexts = 10;
      let word = "CLICK ME";

      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
        p.colorMode(p.HSB);
        p.textSize(40);
        p.textAlign(p.CENTER, p.CENTER);

        for (let i = 0; i < numTexts; i++) {
          texts.push({
            x: p.random(-p.width, p.width),
            y: p.random(50, p.height - 50),
            speed: p.random(2, 5),
          });
        }

        p.noLoop();
      };

      p.draw = () => {
        p.background(1000);

        for (let i = 0; i < texts.length; i++) {
          let t = texts[i];
          p.fill((p.frameCount * 2 + i * 36) % 360, 100, 100);
          p.text(word, t.x, t.y);
          t.x += t.speed;

          if (t.x > p.width + p.textWidth(word) / 2) {
            t.x = -p.textWidth(word) / 2;
            t.y = p.random(50, p.height - 50);
          }
        }
      };

      p.mousePressed = () => {
        if (p.isLooping()) {
          p.noLoop();
        } else {
          p.loop();
        }
      };

      p.keyPressed = () => {
        p.redraw();
      };

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
      };
    }, document.getElementById("p5-holder"));
  }
  if (id == 14) {
    const circle = document.querySelector(".invert-circle");

    document.addEventListener("mousemove", (e) => {
      circle.style.left = `${e.clientX}px`;
      circle.style.top = `${e.clientY}px`;
    });
  }

  if (id == 15) {
    const root = document.getElementById("viewer-root");
    root.innerHTML = pageData[15].html;

    new p5((p) => {
      let curveCount = 10;

      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
        p.noFill();
        p.strokeWeight(2);
        p.colorMode(p.HSB);
      };

      p.draw = () => {
        p.background(100);

        for (let i = 0; i < curveCount * 20; i += 20) {
          let strokeColor = i + 10;
          p.stroke(strokeColor % 360, 50, 60);

          p.bezier(
            p.mouseX - i / 2,
            0 + i,
            410,
            20,
            440,
            300,
            240 - i / 16,
            300 + i / 8
          );
        }
      };

      p.keyPressed = () => {
        if (p.key >= "1" && p.key <= "9") {
          curveCount = parseInt(p.key) * 10;
        }
      };

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
      };
    }, document.getElementById("p5-holder"));
  }

  if (id == 16) {
    new p5((p) => {
      let symmetry = 6;
      let angle = 360 / symmetry;
      let hue = 0;

      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
        p.angleMode(p.DEGREES);
        p.colorMode(p.HSB);
        p.background(1000);
      };

      p.draw = () => {
        p.translate(p.width / 2, p.height / 2);

        if (
          p.mouseX > 0 &&
          p.mouseX < p.width &&
          p.mouseY > 0 &&
          p.mouseY < p.height
        ) {
          let x = p.mouseX - p.width / 2;
          let y = p.mouseY - p.height / 2;
          let px = p.pmouseX - p.width / 2;
          let py = p.pmouseY - p.height / 2;

          if (p.mouseIsPressed) {
            for (let i = 0; i < symmetry; i++) {
              p.rotate(angle);
              p.stroke(hue, 255, 255);
              p.strokeWeight(3);
              p.line(x, y, px, py);

              p.push();
              p.scale(1, -1);
              p.line(x, y, px, py);
              p.pop();
            }
          }

          hue = (hue + 1) % 360;
        }
      };

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
        p.background(50);
      };
    }, document.getElementById("p5-holder"));
  }
  if (id == 17) {
    new p5((p) => {
      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
        p.noStroke();
        p.rectMode(p.CENTER);
      };

      p.draw = () => {
        p.background(0);
        drawGrid();
      };

      function drawGrid() {
        for (let i = 0; i < (p.height - 50) / 10; i++) {
          for (let j = 0; j < (p.width - 50) / 10; j++) {
            p.push();
            p.translate(i * 40 + 10, j * 40 + 10);
            p.rotate(p.radians(i * j * 4 + (p.mouseX + p.mouseY)));
            p.fill(p.random(255), 0, p.random(255));
            p.triangle(-10, 10, 0, -10, 10, 10);
            p.pop();
          }
        }
      }

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
      };
    }, document.getElementById("p5-holder"));
  }
  if (id == 18) {
    new p5((p) => {
      let bubbles = [];
      let score = 0;

      class Bubble {
        constructor() {
          this.x = p.random(p.width);
          this.y = p.random(p.height);
          this.r = p.random(20, 50);
          this.color = p.color(p.random(360), 80, 100);
          this.speedX = p.random(-1.5, 1.5);
          this.speedY = p.random(-2, -0.5);
          this.alpha = 255;
          this.popped = false;
        }

        update() {
          this.x += this.speedX;
          this.y += this.speedY;
          if (this.popped) {
            this.alpha -= 10;
          }
        }

        display() {
          p.noStroke();
          this.color.setAlpha(this.alpha);
          p.fill(this.color);
          p.ellipse(this.x, this.y, this.r * 2);
        }

        isOffScreen() {
          return this.y + this.r < 0 || this.alpha <= 0;
        }

        contains(mx, my) {
          return p.dist(this.x, this.y, mx, my) < this.r;
        }

        pop() {
          this.popped = true;
          this.speedX *= 0.5;
          this.speedY = 0;
          this.r *= 1.5;
        }
      }

      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
        p.colorMode(p.HSB);
        for (let i = 0; i < 15; i++) {
          bubbles.push(new Bubble());
        }
      };

      p.draw = () => {
        p.background(220, 20);

        for (let i = bubbles.length - 1; i >= 0; i--) {
          let b = bubbles[i];
          b.update();
          b.display();
        }

        if (p.frameCount % 20 === 0 && bubbles.length < 30) {
          bubbles.push(new Bubble());
        }
      };

      p.mousePressed = () => {
        for (let i = bubbles.length - 1; i >= 0; i--) {
          let b = bubbles[i];
          if (!b.popped && b.contains(p.mouseX, p.mouseY)) {
            b.pop();
            score++;
            document.getElementById("bubble-score").textContent = score;
            break;
          }
        }
      };

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
      };
    }, document.getElementById("p5-holder"));
  }
  if (id == 19) {
    const timeEl = document.getElementById("local-time");

    const updateTime = () => {
      const now = new Date();
      const formatter = new Intl.DateTimeFormat([], {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        timeZoneName: "short",
      });

      timeEl.textContent = formatter.format(now);
    };

    updateTime();
    setInterval(updateTime, 1000);
  }
  if (id == 20) {
    new p5((p) => {
      let spacing = 30;
      let t = 0;

      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
        p.strokeWeight(2);
        p.noFill();
        p.colorMode(p.HSB);
      };

      p.draw = () => {
        p.background(1000);

        for (let x = 0; x < p.width; x += spacing) {
          for (let y = 0; y < p.height; y += spacing) {
            let angle = p.noise(x * 0.01, y * 0.01, t) * p.TWO_PI * 2;
            let len = p.map(p.sin(t + x * 0.01 + y * 0.01), -1, 1, 5, 20);

            let x2 = x + p.cos(angle) * len;
            let y2 = y + p.sin(angle) * len;

            p.stroke((angle * 50) % 360, 100, 100);
            p.line(x, y, x2, y2);
          }
        }

        t += 0.005;
      };

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
      };
    }, document.getElementById("p5-holder"));
  }
} else {
  root.innerHTML = `<p>Page not found</p>`;
}
