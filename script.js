const target = document.getElementById('target');
let yes = document.getElementById('yes');

yes.addEventListener('click',() => {
    alert("I Love You Too Mera Babu 🥰🥰😘😘")
})

function moveTarget(){
    const maxWidth = 150;
    const maxHeight = 400;

    const ranomX = Math.floor(Math.random() * maxWidth);
    const ranomY = Math.floor(Math.random() * maxHeight);

    target.style.left = ranomX + 'px';
    target.style.top = ranomY + 'px';

}

target.addEventListener('mouseenter' , function(){
    moveTarget();
})
