
// Add the code you want to test below:
let view = document.getElementById('view-button');
let close = document.getElementById('close-button');
let codey = document.getElementById('codey');


let open = function() {
  codey.style.display = 'block';
  close.style.display = 'block';
};

let hide = function() {
  codey.style.display = 'none';
  close.style.display = 'none';
};

view.onclick = open;
close.onclick = hide;

// Write your code here
let textChange=function(){
view.innerHTML='Services'
}

// let textReturn=function(){
// view.innerHTML='Latest Releases'
// }

view.addEventListener('click',textChange)
close.addEventListener('click', textReturn)

view.onmouseover = function(){
  view.style.backgroundColor = 'black';
  view.style.color ='white'
 

};
view.onmouseout = function(){
  view.style.backgroundColor = 'white';
  view.style.color ='black'
};

close.onmouseover = function(){
  close.style.backgroundColor = 'black'
  close.style.color ='white';

};
close.onmouseout = function(){
  close.style.backgroundColor = 'white'
  close.style.color ='black';
};


let enlarge = document.getElementById('foot');

enlarge.onmouseover = function(){
  enlarge.style.width = '430px';
};

