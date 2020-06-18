let icon = document.querySelector('.navbar .navbar-toggler i');

icon.addEventListener('click', () => {
    if(icon.classList.contains('fa-bars')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-close')
    } else{
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-close') 
    }
})
//display btn scroll top
let btnTop = document.querySelector('.btn-top a > i');

document.addEventListener('scroll', () => {
    if(document.documentElement.scrollTop > 800) {
        btnTop.style.cssText = `display:block`;
    } else{
        btnTop.style.cssText = `display:none`;
    }
})
//btn scroll top
btnTop.onclick = function () {
    document.scrollingElement.scrollTop = 0
}
//add active 
let links = document.querySelectorAll('.navbar .nav-item .nav-link');

links.forEach(link => {
    link.addEventListener('click', () => {
        for(const li of links) {
            li.classList.remove('active');
        }
        link.classList.add('active');
    })
})
//typed plugin
let typed = new Typed('.animate', {
    strings:[
        'health',
        'steak',
        'sushi'
    ],
    typeSpeed: 80,
    backSpeed: 80,
    loop:true
})