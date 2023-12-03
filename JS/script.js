let ul = document.querySelector('nav .ul');

function openMenu(){
    ul.classList.add('open');
}
function closeMenu(){
    ul.classList.remove('open');
}

 
  document.getElementById('scrollButton').addEventListener('click', function() {
    
    const windowHeight = window.innerHeight;

    const scrollHeight = document.documentElement.scrollHeight;

    window.scrollTo({
      top:850,
      behavior: 'smooth' // 
    });
    
  });
 
