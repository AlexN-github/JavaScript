'use scrict'
let modal = document.querySelector('.wrap')
let closeBtn = document.querySelector('span')
let showBtn = document.querySelector('button')

closeBtn.addEventListener('click',function(){
    modal.classList.remove('rollIn');
    modal.classList.add('animated','rollOut')
    setTimeout(function(){
        modal.classList.add('hidden');
    },1000)
});

showBtn.addEventListener('click',function(){
    modal.classList.remove('rollOut','hidden');
    modal.classList.add('animated','rollIn')
});