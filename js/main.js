document.addEventListener('DOMContentloaded', () => {

const selectDrop = document.querySelector('#county')

fetch('https://counties-kenya.herokuapp.com/api/v1/name/{name}').then(res
=> {
  return res.json();
}).then(data => {
  console.log(data);
}).catch(err => {
  console.log(err);
})




})