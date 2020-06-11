function animateNext() {
    var elements = document.querySelectorAll('.one-c-left img:not(.show)');
    if (elements.length) {
      elements[0].classList.add('show');
      setTimeout(animateNext,700);
    }
    
    const flyingRocket = document.querySelectorAll('.one-c-left img');
    flyingRocket.forEach(item =>{
      console.log(item);
      item.classList.add("flying-rocket");
    });

  }
  
  animateNext();

  
