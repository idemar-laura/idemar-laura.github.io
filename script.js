const btn = document.querySelector('input');

btn.addEventListener('click', btnChange);

function btnChange(){
    document.getElementById('love').style.display = 'flex';
    btn.style.display = 'none';
}