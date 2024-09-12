// let spacer;
// const swiper = document.getElementById('navAbout');
//   swiper.addEventListener('click', callme);

//   function callme(){
//     console.log('hello')
//     spacer = document.getElementsByClassName('header')[0];
//     spacer.style.marginTop = '80px';
//   }

//   window.addEventListener('scroll', callScroll);

//   function callScroll(){
//     console.log("hi");
//     const scrollPosition = window.scrollY;
//     const threshold = 600;

//     if(scrollPosition > threshold){
// spacer.style.marginTop = '0';
//     }
//   }


var typed = new Typed('#element', {
    strings: ['Front-End Developer', 'React Developer','Backend Developer'],
    typeSpeed: 50,
    backSpeed: 40,
    shuffle: true,
    loop: true,
    loopCount: Infinity,
  });


  


  const demo = document.getElementById('demo');
  demo.addEventListener('click', callDemo);

  function callDemo(){
    alert("currently not working because this API doesn't support on production mode without subscription");
  }

  // let swipers = about.setAttribute('class' , 'swipe');
  // swipers.style.color = 'red';
