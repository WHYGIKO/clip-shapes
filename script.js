    const shaklRangi = document.querySelectorAll("#shaklRangi .color-box");
    const fonRangi = document.querySelectorAll("#fonRangi .color-box");
    const shapes = document.querySelectorAll(".shape");
    const body = document.body;

const clipShapes = [
  "polygon(50% 0%, 0% 100%, 100% 100%)", // Uchburchak
  "polygon(0 0, 100% 0, 100% 100%, 0 100%)", // To‘rtburchak
  "polygon(50% 0%, 100% 38%, 81% 100%, 19% 100%, 0% 38%)", // Beshburchak
  "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0 50%)", // Oltiburchak
  "circle(50% at 50% 50%)", // Doira
  "ellipse(50% 40% at 50% 50%)", // Ellips
  "polygon(20% 0%, 80% 0%, 100% 50%, 80% 100%, 20% 100%, 0% 50%)", // Romboid / Hexa 2
  "polygon(0 50%, 50% 0, 100% 50%, 50% 100%)", // Romb (diamond)
  "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)" // Yulduz
];


    shaklRangi.forEach((box) => {
      box.addEventListener("click", () => {
        const color = box.style.background;
        const randomShape =
          clipShapes[Math.floor(Math.random() * clipShapes.length)];

        shapes.forEach((shape) => {
          shape.style.background = color;
          shape.style.clipPath = randomShape;
        });
      });
    });

    fonRangi.forEach((box) => {
      box.addEventListener("click", () => {
        const color = box.style.background;
        body.style.background = color;
      });
    });