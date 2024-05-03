const boxColorMap = [
  { index: 0, color: '#000000' },
  { index: 1, color: '#2B8EAD' },
  { index: 2, color: '#333333' },
  { index: 3, color: '#6F98A8' },
  { index: 4, color: '#FFFFFF' },
  { index: 5, color: '#BFBFBF' },
  { index: 6, color: '#EFEFEF' },
  { index: 7, color: '#2F454E' },
  { index: 8, color: '#72C3DC' },
];

export function setupShuffle(element) {
  element.addEventListener('click', () => {
    generateShuffle(document.getElementById('#boxes'), true, false);
  });
}

export function setupSort(element) {
  let counter = 0;
  // const setShuffle = (count) => {
  //   counter = count;
  //   element.innerHTML = `count is ${counter}`;
  // };
  element.addEventListener('click', () => {
    generateShuffle(document.getElementById('#boxes'), false, true);
  });
  // setupSort(0);
}
function shuffleArr(array) {
  var copy = [],
    n = array.length,
    i;

  // While there remain elements to shuffle…
  while (n) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * n--);

    // And move it to the new array.
    copy.push(array.splice(i, 1)[0]);
  }

  return copy;
}

export function generateShuffle(element, shuffle, sort) {
  let boxList = JSON.parse(JSON.stringify(boxColorMap));
  if (shuffle) {
    boxList = shuffleArr(boxList);
  } else if (sort) {
    boxList = boxColorMap;
  }
  const boxes = document.getElementById('boxes');
  boxes.replaceChildren();
  for (let i = 0; i < boxList.length; i++) {
    const box = document.createElement('div');
    box.innerHTML = `<div class="numberText"> ${i + 1} </div>`;
    box.classList = ['box'];
    box.style.background = boxList[i].color.toString();
    boxes.appendChild(box);
  }
}
