for (let i = 0; i < document.getElementsByClassName('books').length; i++) {
    document.getElementsByClassName('books')[i].addEventListener('mouseenter', changeItem)
    document.getElementsByClassName('books')[i].addEventListener('mouseleave', rechangeItem)
}

function changeItem(e) {
    e.target.style.background = 'rgb(255, 218, 241)';
}

function rechangeItem(e) {
    e.target.style.background = '';
}