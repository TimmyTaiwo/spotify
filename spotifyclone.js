const box1 = document.querySelector('.box-one')
const box2 = document.querySelector('.box-two')
const closebutton = document.querySelector('.closebtn')
const box3 = document.querySelector('.container-three')
const box4 = document.querySelector('.container-four')
const box5 = document.querySelector('.container-five')
const box6 = document.querySelector('.container-six')
const box7 = document.querySelector('.neck')
const box8 = document.querySelector('.head')
const box9 = document.querySelector('.none')
const box10 = document.querySelector('.update')
const box11 = document.querySelector('.end')
const box12 = document.querySelector('.container-two')
const box13 = document.querySelector('.container-one')
const box14 = document.querySelector('.animatebox')
const box15 = document.querySelector('.flex1')
const text16 = document.querySelector('.e')
const pic17 = document.querySelector('.plant')
function alertone(){
    closebutton.style.display = 'block';
    box9.style.display = 'block';
    box9.style.marginTop = '379px'
    closebutton.style.marginLeft = '-250px';
    closebutton.style.transition = '4s';
    box1.style.backgroundColor = 'green';
    box2.style.display = 'none';
    box3.style.display = 'none';
    box4.style.display = 'none';
    box5.style.display = 'none';
    box6.style.display = 'none';
    box7.style.display = 'none';
    box8.style.display = 'none';
    box9.style.display = 'block';
    box9.style.marginTop = '375px';
    box11.style.marginTop = '25px';
   // closebutton.style.transition = '10s';
}
box1.addEventListener('click', alertone);
function alerttwo(){
    box2.style.display = 'block';
    closebutton.style.display = 'none';
    box1.style.backgroundColor = 'rgb(44, 42, 42)';
    box2.style.backgroundColor = 'rgb(44, 42, 42)';
    // box2.style.display = 'block';
    box3.style.display = 'flex';
    box4.style.display = 'flex';
    box5.style.display = 'flex';
    box6.style.display = 'flex';
    box7.style.display = 'block';
    box8.style.display = 'block';
    box9.style.display = 'none';
    box10.style.display = 'none';
    box11.style.marginTop = '21px';
    // box11.style.marginTop = '17px';
}
closebutton.addEventListener('click', alerttwo);
function alertthree(){
    closebutton.style.display = 'block';
    closebutton.style.marginLeft = '50px';
    box2.style.backgroundColor = 'green';
    box10.style.display = 'block';
    box10.style.marginTop = '70px';
    // box9.style.display = 'block';
    box3.style.display = 'none';
    box4.style.display = 'none';
    box5.style.display = 'none';
    box6.style.display = 'none';
    box7.style.display = 'none';
    box8.style.display = 'none';
    box11.style.marginTop = '359px';
    // box1.style.display = 'none';
}
box2.addEventListener('click', alertthree)
function alertfour(){
    box9.style.display = 'block';
    box9.style.marginTop = '255px';
    box11.style.marginTop = '15px';
}
box10.addEventListener('click', alertfour);
const melancholy = document.querySelector('.pyrad');
const othercon = document.querySelector('.otherContainer');
const con1 = document.querySelector('.container-one')

function alertfive(){
   
    othercon.style.display = 'block';
    box11.style.display = 'none';
    box8.style.display = 'none';
    box6.style.display = 'none';
    box3.style.display = 'none';
    box4.style.display = 'none';
    box5.style.display = 'none';
    box12.style.display = 'none';
    box13.style.display = 'none';
    box14.style.display = 'none';
}
melancholy.addEventListener('click', alertfive);

function alertsix(){
    box15.style.display = "none";
    box11.style.display = 'block';
    box8.style.display = 'block';
    box6.style.display = 'flex';
    box3.style.display = 'flex';
    box4.style.display = 'flex';
    box5.style.display = 'flex';
    box11.style.display = 'flex';
    box11.style.marginTop = '18px';
    // box11.style.marginLeft = '20px';
    box12.style.display = 'flex';
    box13.style.display = 'flex';
    box14.style.display = 'block';
    othercon.style.display = 'none';
    // text16.style.marginTop = '9px';
    // text16.style.marginLeft = '7px';
    
    // pic17.style.marginLeft = 'px';
}
box15.addEventListener('click', alertsix)
