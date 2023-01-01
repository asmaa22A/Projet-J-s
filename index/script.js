const courses = [
    {
      id: 1,
      title: "what is javascript?",
      category: "JS",
      price: 15.99,
      img: "./images/javascriptDef.png",
    },
    {
      id: 2,
      title: "basics of HTML",
      category: "HTML",
      price: 13.99,
      img: "./images/htmlBasics.PNG",
    },
    {
      id: 3,
      title: 'mesures and unites of CSS',
      category: "CSS",
      price: 6.99,
      img: "./images/cssMesures.png",
    },
    {
      id: 4,
      title: "CSS selectors",
      category: "CSS",
      price: 20.99,
      img: "./images/cssSelectors.jpg",
    },
    {
      id: 5,
      title: 'HTML attributes and values',
      category: "HTML",
      price: 22.99,
      img: "./images/htmlAttrVal.jpg",
    },
    {
      id: 6,
      title:'CSS properties',
      category: "CSS",
      price: 18.99,
      img: "./images/cssProperties.png",
    },
    {
      id: 7,
      title:  "variables and data type of javascript",
      category: "JS",
      price: 8.99,
      img: './images/javascriptVariables.png',
    },
    {
      id: 8,
      title: 'basics of HTML',
      category: "HTML",
      price: 12.99,
      img: "./images/htmlElements.png",
    },
    {
      id: 9,
      title: 'HTML elements and tags',
      category: "HTML",
      price: 16.99,
      img: "./images/htmlTags.png",
    },
    {
      id: 10,
      title:'functions and loops with javascript',
      category: "JS",
      price: 22.99,
      img: "./images/javascriptDef.png",
    },
  ];
  
  const sectionCenter = document.querySelector(".section-center");
 
  window.addEventListener("DOMContentLoaded", function () {



    var x= Math.floor(Math.random() * courses.length);



sectionCenter.innerHTML = `<article class="courses-item">
<img src=${courses[x].img} alt=${courses[x].title} class="photo" />
<div class="item-info">
  <header>
  <h2 class="d-flex justify-content-center">${courses[x].title}</h2>
  <h4 class="price d-flex justify-content-center">$${courses[x].price}</h4>
  </header>
  <p class="item-text">
   
  </p>
</div>
</article>
<article class="courses-item">
<img src=${courses[x-1].img} alt=${courses[x-1].title} class="photo" />
<div class="item-info">
  <header>
    <h2 class="d-flex justify-content-center">${courses[x-1].title}</h2>
    <h4 class="price d-flex justify-content-center">$${courses[x-1].price}</h4>
  </header>
  <p class="item-text">
  
  </p>
  <br><br><br>
</div>
</article>
<article class="courses-item">
<img src=${courses[x-2].img} alt=${courses[x-2].title} class="photo" />
<div class="item-info">
  <header>
    <h2 class="d-flex justify-content-center">${courses[x-2].title}</h2>
    <h4 class="price  d-flex justify-content-center">$${courses[x-2].price}</h4>
  </header>
  <p class="item-text">
  
  </p>
  <br><br><br>
</div>
</article>`; 

}
);