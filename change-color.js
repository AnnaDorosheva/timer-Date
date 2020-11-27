
const colors = [
  '#FFF800',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

let isActive = false;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
  start: document.querySelector('[data-action="start"]'),
  stop: document.querySelector('[data-action="stop"]'),
};


refs.start.addEventListener('click', startChageColor);


function startChageColor() {
  if(isActive) {
    return;
  }
  const startId = setInterval( () => {
    isActive = true;
    const randomColor = randomIntegerFromInterval(0, colors.length);
    document.body.style.background = colors[randomColor];
    }, 1000);
 
    refs.stop.addEventListener('click', () => {
      clearInterval(startId);
      isActive = false;
      document.body.style.background = '#ffffff';
    });
 
}; 

