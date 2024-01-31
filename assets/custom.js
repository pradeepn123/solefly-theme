const details = document.querySelectorAll("details.accordeon-plus");

// Add the onclick listeners.
details.forEach((detail) => {
  detail.addEventListener("toggle", () => {
    if (detail.open) setTargetDetail(detail);
  });
});

// Close all the details that are not targetDetail.
function setTargetDetail(targetDetail) {
  details.forEach((detail) => {
    if (detail !== targetDetail) {
      detail.open = false;
    }
  });
}

class Accordion {
    constructor(el) {      
      this.el = el;      
      this.summary = el.querySelector('summary.accordeon-plus__btn'); 
      this.content = el.querySelector('.details__content');
      this.animation = null; 
      this.isClosing = false;      
      this.isExpanding = false;    
      this.summary.addEventListener('click', (e) => this.onClick(e));
    }
  
    onClick(e) {      
      e.preventDefault();      
      this.el.style.overflow = 'hidden'; 
      if (this.isClosing || !this.el.open) {
        this.open(); 
      } else if (this.isExpanding || this.el.open) {
        this.shrink();
      }
    }
  
    shrink() {      
      this.isClosing = true;           
      const startHeight = `${this.el.offsetHeight}px`;      
      const endHeight = `${this.summary.offsetHeight}px`;            
      if (this.animation) {        
        this.animation.cancel();
      }
            
      this.animation = this.el.animate({
        height: [startHeight, endHeight]
      }, {
        duration: 400,
        easing: 'ease-out'
      });
       
      this.animation.onfinish = () => this.onAnimationFinish(false);     
      this.animation.oncancel = () => this.isClosing = false;
    }
  
    open() {      
      this.el.style.height = `${this.el.offsetHeight}px`;     
      this.el.open = true;      
      window.requestAnimationFrame(() => this.expand());
    }
  
    expand() {      
      this.isExpanding = true; 
      const startHeight = `${this.el.offsetHeight}px`;  
      const endHeight = `${this.summary.offsetHeight + this.content.offsetHeight}px`;
            
      if (this.animation) { 
        this.animation.cancel();
      }
            
      this.animation = this.el.animate({     
        height: [startHeight, endHeight]
      }, {
        duration: 400,
        easing: 'ease-out'
      });      
      this.animation.onfinish = () => this.onAnimationFinish(true);      
      this.animation.oncancel = () => this.isExpanding = false;
    }
  
    onAnimationFinish(open) { 
      this.el.open = open;      
      this.animation = null; 
      this.isClosing = false;
      this.isExpanding = false;
      this.el.style.height = this.el.style.overflow = '';
    }
  }
  
  document.querySelectorAll('details.accordeon-plus').forEach((el) => {
    new Accordion(el);
  });