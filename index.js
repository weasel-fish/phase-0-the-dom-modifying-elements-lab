// Write your code here!
document.getElementById('main').remove();
const newHeader = document.createElement('h1');
newHeader.setAttribute('id', 'victory');
newHeader.innerHTML = "Kyle Ermentrout is the champion"
document.body.appendChild(newHeader);