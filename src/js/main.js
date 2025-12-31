document.addEventListener("DOMContentLoaded", () => {
  const texts = [
    "Y a-t-il quelqu’un… ?",
    "On ne me laisse pas<br>publier mon travail",
    "Ils disent qu’une femme<br>n’en a pas le droit",
    "Mais je n’abandonnerai<br>pas",
    "Je prouverai que l’esprit<br>n’a pas de genre"
  ];

  let index = 0;
  const textElement = document.getElementById("heroText");

  if (textElement) {
    function changeText() {
      textElement.innerHTML = texts[index];
      index = (index + 1) % texts.length;
    }
    changeText();
    setInterval(changeText, 3000); // change chaque 3 secondes
  }
});




document.addEventListener("click", (e) => {
  const toggle = e.target.closest(".timeline__toggle");
  if (!toggle) return;

  const item = toggle.closest(".timeline__item");
  const expand = item.querySelector(".timeline__expand");
  const icon = toggle.querySelector("img");

  const isOpen = toggle.getAttribute("aria-expanded") === "true";

  toggle.setAttribute("aria-expanded", !isOpen);
  expand.style.display = isOpen ? "none" : "block";
  icon.style.transform = isOpen ? "rotate(0deg)" : "rotate(180deg)";
});





const openMenuBtn = document.getElementById("openMenuBtn");
const closeMenuBtn = document.getElementById("closeMenuBtn");
const menu = document.getElementById("menuContainer");

if (openMenuBtn && menu) {
  openMenuBtn.addEventListener("click", () => {
    menu.classList.add("active");
  });
}

if (closeMenuBtn && menu) {
  closeMenuBtn.addEventListener("click", () => {
    menu.classList.remove("active");
  });
}







document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.video-carousel__track');
  const cards = Array.from(document.querySelectorAll('.video-card'));
  const nextBtn = document.querySelector('.carousel-btn.next');
  const prevBtn = document.querySelector('.carousel-btn.prev');

  const CARD_WIDTH = 230;
  const GAP = 12;
  let current = 2; // Central video (third)

  // Creating clones for infinite scrolling
  const firstClone = cards[0].cloneNode(true);
  const lastClone = cards[cards.length - 1].cloneNode(true);
  track.appendChild(firstClone);
  track.insertBefore(lastClone, cards[0]);

  const allCards = Array.from(track.children);

  function update() {
    allCards.forEach((card, i) => {
      card.classList.remove('is-active');
      card.style.transform = 'scale(0.74)';
      card.style.opacity = '0.6';
      card.style.zIndex = '1';
    });

    const centerIndex = current + 1; // because of the clone at the beginning
    allCards[centerIndex].classList.add('is-active');
    allCards[centerIndex].style.transform = 'scale(1)';
    allCards[centerIndex].style.opacity = '1';
    allCards[centerIndex].style.zIndex = '2';

    // centering central video
    const viewportWidth = track.parentElement.offsetWidth;
    const offset = (CARD_WIDTH + GAP) * centerIndex - (viewportWidth / 2 - CARD_WIDTH / 2);
    track.style.transform = `translateX(${-offset}px)`;
  }

  function moveNext() {
    current++;
    if (current >= cards.length) current = 0;
    update();
  }

  function movePrev() {
    current--;
    if (current < 0) current = cards.length - 1;
    update();
  }

  nextBtn.addEventListener('click', moveNext);
  prevBtn.addEventListener('click', movePrev);

  update();

  // Loading a YouTube iframe when clicking on a card 
  allCards.forEach(card => {
    const frame = card.querySelector('.video-frame');
    const img = frame.querySelector('img');
    const videoId = img.src.match(/vi\/([a-zA-Z0-9_-]+)/)[1];

    frame.addEventListener('click', () => {
      const iframe = document.createElement('iframe');
      iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
      iframe.frameBorder = '0';
      iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
      iframe.allowFullscreen = true;
      frame.innerHTML = '';
      frame.appendChild(iframe);
    });
  });
});
