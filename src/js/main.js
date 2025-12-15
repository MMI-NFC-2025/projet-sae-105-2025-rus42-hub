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
    changeText(); // первый показ сразу
    setInterval(changeText, 3000); // смена каждые 3 сек
  }
});
