let sideMenu = document.querySelector(".unorder-list");

function openMenu(){
    sideMenu.style.right ="0";
}

function closeMenu(){
    sideMenu.style.right ="-100%";
}
// Contact form part
  const scriptURL = 'https://script.google.com/macros/s/AKfycbxHuIw8z9neqhLxLqyuQmR1qlXMGKry2NRlq-qdqBTB9sIPwWnVilAJQs12nYXRe5W9/exec'
  const form = document.forms['submit-to-google-sheet']
  


 let myname ='false';
 let myemail = 'false';
 let myphoneNo = 'false';
  let yourName = document.querySelector("#yourName");
  let myEmail = document.querySelector("#yourEmail");
  let yourPh = document.querySelector("#yourPh");
  let textArea = document.querySelector("#text-area");
  yourName.addEventListener("click",()=>{
    console.log("clicked-name");
    myname = 'true';
  })

  yourEmail.addEventListener("click",()=>{
    console.log("clicked-email");
    myemail = 'true';
  })

  yourPh.addEventListener("click",()=>{
    console.log("clicked-ph");
    myphoneNo = 'true';
  })

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        if(myname ==='true' || myemail ==='true' || myphoneNo === 'true'){
          swal("Submitted", "Your massege sent successfully!", "success");
          myname ='false';
          myemail = 'false';
          myphoneNo = 'false';
          form.reset();
        }
        else{
          swal("Failed to submit", "Please fill the form before submitting", "error");
        }
      })
      .catch(error => console.error('Error!', error.message))
  })

// changing mode part
const mainLogo = document.querySelector(".main-logo");
const imageBox = document.querySelector(".image-box");
const toggle = document.getElementById("toggleLight");
const body = document.querySelector("body");
const header = document.getElementById("header");
const logo = document.querySelector(".logo");
const listItems = document.getElementById("list-items");
const listItems1 = document.getElementById("list-items1");
const listItems2 = document.getElementById("list-items2");
const listItems3 = document.getElementById("list-items3");
const listItems4 = document.getElementById("list-items4");
const listItems5 = document.getElementById("list-items5");

const subTitle = document.querySelector(".sub-title");
const aboutMe = document.querySelector(".about-me");
const para1 = document.querySelector(".para1");
const para2 =document.querySelector(".para2");

const skills = document.querySelector("#skills");
const portfolio = document.querySelector("#portfolio");
const mySkills = document.querySelector(".my-skills");
const codeIcon = document.querySelector(".code-icon");
const programIcon = document.querySelector(".program-icon");
const skillIcon = document.querySelector(".skill-icon");

const webText = document.querySelector(".web-text");
const programText = document.querySelector(".programing-text");
const skillText = document.querySelector(".skill-text");

const webDevPara = document.getElementById("web-dev-para");
const progPara = document.getElementById("prog-para");
const softSkillsPara = document.getElementById("softskills-para");

const contactContainer = document.querySelector(".contact-conainer");
const btn1 = document.querySelector(".btn1");
const portfolioContainer = document.querySelector(".portfolio-conainer");
const layerH3 = document.querySelector(".layer-h3");
const layerP = document.querySelector(".layer-p");
const myEducation = document.querySelector(".my-education");
const eduDiv1 = document.querySelector(".edu-div1");
const eduDiv2 = document.querySelector(".edu-div2");
const eduIcon  = document.querySelector(".edu-icon");
const clgHead  = document.querySelector(".clg-heading");
const schoolIcon  = document.querySelector(".school-icon");
const schoolHead  = document.querySelector(".school-heading");
const schoolInfo  = document.getElementsByClassName("school-info");
const clgInfo  = document.getElementsByClassName("clg-info");
const mainEdu = document.getElementById("education");


let current = 'dark';

toggle.addEventListener("click",function(){
  this.classList.toggle("bi-moon-fill");//replacing icon
})

//cv download btn

toggle.addEventListener("click",()=>{
  if(current === 'dark'){ 
    current = 'light';
    body.style.backgroundColor = "white";
    // header.style.backgroundColor = "#EEF0E5";
    body.style.color = "black";
    logo.style.color = "black";
    listItems.style.color = "black";
    listItems1.style.color = "black";
    listItems2.style.color = "black";
    listItems3.style.color = "black";
    listItems4.style.color = "black";
    // listItems5.style.color = "black";
    mySkills.style.color = "black";
    body.style.transition = '2s';
    //skills cum services
    skills.style.backgroundColor = "#EEF0E5";
    codeIcon.addEventListener("mouseover",()=>{
      codeIcon.style.color = "black";
      codeIcon.style.transition = "0.5s ease";
    })
    codeIcon.addEventListener("mouseout",()=>{
      codeIcon.style.color = "#9b5de5";
      codeIcon.style.transition = "0.5s ease";
    })
    programIcon.addEventListener("mouseover",()=>{
      programIcon.style.color = "black";
      programIcon.style.transition = "0.5s ease";
    })
    programIcon.addEventListener("mouseout",()=>{
      programIcon.style.color = "#9b5de5";
      programIcon.style.transition = "0.5s ease";
    })

    skillIcon.addEventListener("mouseover",()=>{
      skillIcon.style.color = "black";
      skillIcon.style.transition = "0.5s ease";
    })
    skillIcon.addEventListener("mouseout",()=>{
      skillIcon.style.color = "#9b5de5";
      skillIcon.style.transition = "0.5s ease";
    })
    mainLogo.style.color = "white";
    
    //about
    subTitle.style.color = 'black';
    aboutMe.style.color = 'black';
    para1.style.color = 'black';
    para2.style.color = 'black';
    portfolio.style.backgroundColor = "#EEF0E5";

    //my services
    webText.style.color = 'black';
    webText.addEventListener("mouseover",()=>{
      webText.style.color = "#9b5de5";
      webText.style.transition = "0.5s ease";
    })
    webText.addEventListener("mouseout",()=>{
      webText.style.color = "black";
      webText.style.transition = "0.5s ease";
    })

    programText.style.color = 'black';
    programText.addEventListener("mouseover",()=>{
      programText.style.color = "#9b5de5";
      programText.style.transition = "0.5s ease";
    })
    programText.addEventListener("mouseout",()=>{
      programText.style.color = "black";
      programText.style.transition = "0.5s ease";
    })

    skillText.style.color = 'black';
    skillText.addEventListener("mouseover",()=>{
      skillText.style.color = "#9b5de5";
      skillText.style.transition = "0.5s ease";
    })
    skillText.addEventListener("mouseout",()=>{
      skillText.style.color = "black";
      skillText.style.transition = "0.5s ease";
    })

    webDevPara.style.color = 'black';
    progPara.style.color  = 'black';
    softSkillsPara.style.color = 'black';
    contactContainer.style.color = "black";
    btn1.style.color = "#fff";
    btn1.addEventListener("mouseover",()=>{
      btn1.style.color = "#9b5de5";
    })
    btn1.addEventListener("mouseout",()=>{
      btn1.style.color = "#fff";
    })
    //portfolio
    portfolioContainer.style.color = 'black';
    layerH3.style.color = 'white';
    layerP.style.color = 'white';
    myEducation.style.color = 'black';
    //my education
    
    eduDiv1.style.backgroundColor = '#EEF0E5';
    eduDiv1.addEventListener("mouseover",()=>{
      eduDiv1.style.backgroundColor = "white";
    })
    eduDiv1.addEventListener("mouseout",()=>{
      eduDiv1.style.backgroundColor = "#EEF0E5";
    })

    eduDiv2.style.backgroundColor = 'white';
    eduDiv2.addEventListener("mouseover",()=>{
      eduDiv2.style.backgroundColor = "#eef0e5";
    })
    eduDiv2.addEventListener("mouseout",()=>{
      eduDiv2.style.backgroundColor = "white";
    })
    eduIcon.style.color ="black";
    clgHead.style.color ="black";
    schoolIcon.style.color = "black";
    schoolHead.style.color = "black";
    mainEdu.style.color = '#6C5F5B';
  
  }
  else{
   
    mainLogo.style.color = "black";
    current = 'dark';
    body.style.backgroundColor ="#080808";
    // header.style.backgroundColor = "#222121";
    body.style.color = "white";
    logo.style.color = "white";
    listItems.style.color = "white";
    listItems1.style.color = "white";
    listItems2.style.color = "white";
    listItems3.style.color = "white";
    listItems4.style.color = "white";
    body.style.transition = '2s';
    subTitle.style.color = 'white';
    aboutMe.style.color = 'white';
    para1.style.color = 'white';
    para2.style.color = 'white';
    skills.style.backgroundColor = "#222121";
    portfolio.style.backgroundColor = "#222121";
    mySkills.style.color = "white";
    codeIcon.addEventListener("mouseover",()=>{
      codeIcon.style.color = "white";
      codeIcon.style.transition = "0.5s ease";
    })
    codeIcon.addEventListener("mouseout",()=>{
      codeIcon.style.color = "#9b5de5";
      codeIcon.style.transition = "0.5s ease";
    })
    programIcon.addEventListener("mouseover",()=>{
      programIcon.style.color = "white";
      programIcon.style.transition = "0.5s ease";
    })
    programIcon.addEventListener("mouseout",()=>{
      programIcon.style.color = "#9b5de5";
      programIcon.style.transition = "0.5s ease";
    })

    skillIcon.addEventListener("mouseover",()=>{
      skillIcon.style.color = "white";
      skillIcon.style.transition = "0.5s ease";
    })
    skillIcon.addEventListener("mouseout",()=>{
      skillIcon.style.color = "#9b5de5";
      skillIcon.style.transition = "0.5s ease";
    })


    //my services
    webText.style.color = 'white';
    webText.addEventListener("mouseover",()=>{
      webText.style.color = "white";
      webText.style.transition = "0.5s ease";
    })
    webText.addEventListener("mouseout",()=>{
      webText.style.color = "#9b5de5";
      webText.style.transition = "0.5s ease";
    })

    programText.style.color = 'white';
    programText.addEventListener("mouseover",()=>{
      programText.style.color = "white";
      programText.style.transition = "0.5s ease";
    })
    programText.addEventListener("mouseout",()=>{
      programText.style.color = "#9b5de5";
      programText.style.transition = "0.5s ease";
    })

    skillText.style.color = 'white';
    skillText.addEventListener("mouseover",()=>{
      skillText.style.color = "white";
      skillText.style.transition = "0.5s ease";
    })
    skillText.addEventListener("mouseout",()=>{
      skillText.style.color = "#9b5de5";
      skillText.style.transition = "0.5s ease";
    })


    webDevPara.style.color = '#ababab';
    progPara.style.color  = '#ababab';
    softSkillsPara.style.color = '#ababab';
    contactContainer.style.color = "white";

    //dark mode
    btn1.style.color = "#fff";
    btn1.addEventListener("mouseover",()=>{
      btn1.style.color = "#9b5de5";
    })
    btn1.addEventListener("mouseout",()=>{
      btn1.style.color = "#fff";
    })
    //portfolio
    portfolioContainer.style.color = 'white';
    layerH3.style.color = 'white';
    layerP.style.color = 'white';
    //my education
    myEducation.style.color = 'white';
    eduDiv1.style.backgroundColor = '#222121';
    eduDiv1.addEventListener("mouseover",()=>{
      eduDiv1.style.backgroundColor = "#080808";
    })
    eduDiv1.addEventListener("mouseout",()=>{
      eduDiv1.style.backgroundColor = "#222121";
    })
    eduDiv2.style.backgroundColor = '#080808';
    eduDiv2.addEventListener("mouseover",()=>{
      eduDiv2.style.backgroundColor = "#222121";
    })
    eduDiv2.addEventListener("mouseout",()=>{
      eduDiv2.style.backgroundColor = "#080808";
    })
    eduIcon.style.color ="white";
    clgHead.style.color ="white";
    schoolIcon.style.color = "white";
    schoolHead.style.color = "white";
    mainEdu.style.color = "#ababab";
    imageBox.style.backgroundColor = "#222121";
  }
})