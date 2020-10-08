// to teraz nie działa bo jest zakomentowane
//
// function changeTitle() {
//   alert('a jak bym tak zmienił tytuł tej strony? co Ty na to?');
//   document.getElementById('title').innerText = 'JS jest fajny';
// }

// to wykona się na pocżątku skryptu
console.log('Hello from app.js');
alert('mam cie cwaniaku');

// to jest event listener, ma zadanie sprawdzić czy aktualna strona html została wczytana, jeśli tak wykona się kod wewnątrz listenera
document.addEventListener('DOMContentLoaded', () => {
  console.log('I am loading after HTML DOM content is loaded');
  alert('jestem event listenerem, załąduje się po wczytaniu dokumentu html');
  console.log('Now I can manipulate over all content in current web');

  // to jest wywołanie funkcji zdefiniowanej poniżej
  changeTitle();
})

// acz to gdzie ją zdefiniujesz dla JavaScriptu nie ma znaczenia
// równie dobrze mogłaby być na samej górze albo innym pliku
// często jest tak że funkcje wykorzystywane są z różnych zasobów
function changeTitle() {
  alert('a jak bym tak zmienił tytuł tej strony? co Ty na to?');
  // to wybiera element html po id i zmienia jego tekst
  document.getElementById('title').innerText = 'JS jest fajny';
}
