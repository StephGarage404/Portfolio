// ma variable  <icon> pour mon icone burger 
// et ma variable  <link> pour tout mes liens 

let menu_burger_icon = document.querySelector('.menu_burger_icon')
let menu_burger_link = document.querySelector('.menu_burger_link')

menu_burger_icon.addEventListener('click', function () {
    // le toogle verifie si il y a la classe <hiddendiv> 
    // Si la classe est présente, elle la supprime, et si elle n'est pas présente, elle l'ajoute.

    menu_burger_link.classList.toggle('hiddendiv')
}
)


// window.addEventListener("click", function(e){

//     //voir si l'element sur lequel je clik a bien la classe test
//     if(e.target.classList.contains("test")){
//         // ajoute ajoute la classe animation a l'element 
//         e.target.classList.add("animationBox")
//         //ajoute mon code html à l'interieur
//         e.target.innerHTML = `<div>sqdqdsqdsqdq</div>`
//     }
// })

const divText = document.querySelector(".typed");
const txt = divText.dataset.typedItems;
let i = 0;
function showLetters() {
    let timeOut;
    if (i < txt.length) {
        divText.innerHTML += `<span>${txt[i]}</span>`;
        timeOut = setTimeout(showLetters, 100)
        i++
    }
    else {
        clearTimeout(timeOut);
        console.log("end")
    }
}
setTimeout(() => {

    showLetters();
}, 1500);


// formulaire de contact 


emailjs.init({
    publicKey: 'KPoCOa5cxhbTQWUCB',
});

window.onload = function () {
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();
        // these IDs from the previous steps
        emailjs.sendForm('service_ulxw9xn', 'template_er8girl', this)
            .then(() => {
                console.log('SUCCESS!');
            }, (error) => {
                console.log('FAILED...', error);
            });
    });
}

// paralax background index

var image = document.getElementsByClassName('Parallax');
new simpleParallax(image, {
	overflow: true
});


// mise en place de linitialisation de gsap

gsap.registerPlugin(MotionPathPlugin);

gsap.to("#css", {
    duration: 1.5,
    repeat: Infinity,
    repeatDelay: 3,
    yoyo: false,
    motionPath: {
        path: "#pathcss",
        autoRotate: false,
        alignOrigin: [0, 0]
    }
});

gsap.registerPlugin(MotionPathPlugin);

gsap.to("#figma", {
    duration: 1.5, 
    repeat: Infinity,
    repeatDelay: 3,
    yoyo: false,
    motionPath:{
      path: "#pathfigma",
      autoRotate: false,
      alignOrigin: [0, 0]
    }
  });



  gsap.registerPlugin(MotionPathPlugin);

  gsap.to("#html", {
      duration: 1.5, 
      repeat: Infinity,
      repeatDelay: 3,
      yoyo: false,
      motionPath:{
        path: "#pathhtml",
        autoRotate: false,
        alignOrigin: [0, 0]
      }
    });


    gsap.registerPlugin(MotionPathPlugin);

    gsap.to("#js", {
        duration: 1.5, 
        repeat: Infinity,
        repeatDelay: 3,
        yoyo: false,
        motionPath:{
          path: "#pathjs",
          autoRotate: false,
          alignOrigin: [0, 0]
        }
      });


      gsap.registerPlugin(MotionPathPlugin);

      gsap.to("#php", {
          duration: 1.5, 
          repeat: Infinity,
          repeatDelay: 3,
          yoyo: false,
          motionPath:{
            path: "#pathphp",
            autoRotate: false,
            alignOrigin: [0, 0]
          }
        });


      gsap.registerPlugin(MotionPathPlugin);

      gsap.to("#symf", {
          duration: 1.5, 
          repeat: Infinity,
          repeatDelay: 3,
          yoyo: false,
          motionPath:{
            path: "#pathsymf",
            autoRotate: false,
            alignOrigin: [0, 0]
          }
        });