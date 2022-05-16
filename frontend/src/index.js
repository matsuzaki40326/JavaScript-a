import './style.scss'
console.log('webpackテストです');
require('intersection-observer');

// window.addEventListener('load', () => {
//   alert('babelテスト');
// })

const options = {
  threshold:'0.5',
  rootMargin:'-200px'
};
const observer = new IntersectionObserver(callback,options);
const targets = document.querySelectorAll('.message-box');
targets.forEach((target) => {
  observer.observe(target);
});

function callback(entries){
  entries.forEach(entry => {
    console.log(entry);
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
  });
}