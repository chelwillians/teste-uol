// Icon filter click effect
let filterIcon = document.querySelector('.filter-icon');
let filters = document.querySelector('.filters');

filterIcon.onclick = function(){
    this.classList.toggle('active');
    filters.classList.toggle('active');
}

