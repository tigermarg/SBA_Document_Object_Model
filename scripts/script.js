//Nav bar array of objects
let navLinks = [
    {text: 'about', href: '/about'},
    {text: 'workout', href: '#'},
    {text: 'recipes', href: '#'},
    {text: 'news', href: '#'},
  ];

//Array for buttons
let buttons = [
  {text: 'sign-up', href: '#'},
  {text: 'login', href: '#'}
]

//Add window.alert() message //BOM method
alert(`Must be 18 or older to sign up.`)

//Main Element //Use of querySelector

let mainEl = document.querySelector(`main`) //Cache main element
    // console.log(mainEl[0])

let bodyEl = document.querySelector( `body`) //Cache body element
bodyEl.style.backgroundImage = `url(./images/workout.jpg)` //Set body background image
bodyEl.classList.add(`body-background`) //Add body-background class

mainEl.innerHTML = `<h1>No Pain No Gain</h1>` //Main element content
mainEl.classList.add(`flex-ctr`) //Add flex-ctr class


//Add menu bar //Use of getElementByID

let navMenuEl = document.getElementById(`nav-menu`) //Select & cache `nav-menu` id
  // console.log(navMenuEl)

navMenuEl.style.height = `100%`;  //Set height of nav element

navMenuEl.style.backgroundColor = `var(--nav-menu-bg)` //Set nav menu background color

navMenuEl.classList.add(`flex-ctr`)  //Add flex-ctr class to nav menu


// Iterate over array of objects to add menu links //Use of createElement & appendChild

navLinks.forEach((link) => {  //Loop through navLinks array & for each `link` object:

    let menuLink = document.createElement(`a`);  //Create <a> element
    // console.log(menuLink)

    menuLink.setAttribute(`href`, link.href);  //Add href attribute with value = href property of `link` object
    // console.log(menuLink)

    menuLink.textContent = link.text;  //Set newLink content = text property of `link` object
    // console.log(menuLink)

    navMenuEl.appendChild(menuLink) //Add new element to navMenuEl

})


//Toggle over menu items to change css class //Use of eventListener

let navMenuLinks = document.querySelectorAll(`a`) //Cache all <a> elements of navMenuEl
    // console.log(navMenuLinks)

navMenuEl.addEventListener(`click`, (e) => { //Add `click` event to nav menu
        e.preventDefault()  //Call the event object's preventDefault() method
        if(e.target.localName !== `a`) return;  //Return if element clicked is not a link
        console.log(navMenuEl) 

    e.target.classList.toggle(`active`) //Add `active` class to element clicked //Single element so keep outside of for loop
    // console.log(e.target)

    navMenuLinks.forEach(i => { //Looping through top menu links
        // console.log(i)
        if(i !== e.target){ //If element is not clicked
                i.classList.remove(`active`)}   //Remove `active` class
        })
  })


//Iterate over array of objects to add Sign-up & Login buttons to nav bar //Use of appendChild & createElement

buttons.forEach((i) => {  //Loop through array of objects
  console.log(i)
    let button = document.createElement('button');  //Create button element
    button.setAttribute(`href`, i.href);  //Add href attribute with value = href property of `link` object
    button.textContent = i.text;  //Set button content = text property of `link` object
    navMenuEl.appendChild(button);  //Add new element to navMenuEl

})


//Use of firstElementChild of `ul` to pre-select checkbox on form //Form Validation `change` event //Use confirm() BOM method //Use of eventListener

let news = document.querySelector(`ul`).firstElementChild;  //Select & cache first `ul` item 
console.log(news)
news.checked = true;  //Pre-check listItem by setting checked = true

news.addEventListener('change', (e)=>{  //If "news" checkbox is unchecked (`change` event listener)
  e.preventDefault()  //Call preventDefault
  confirm( `Are you sure you don't want to hear about the latest news?`) //Confirm selection
  
})


//Form Validation `submit` event //Use confirm() BOM method //Modify innerHTML when form is submitted //Use of eventListener

let form = document.getElementsByTagName('form') //Select & cache form

form[0].addEventListener('submit', (e)=>{ //Add `submit` event to form
    e.preventDefault()  //Call preventDefault 
    let response = confirm(`Are you sure you want to submit?`)  //Confirm submission
    if (response){  //If response is yes,
      form[0].innerHTML = `Thank you for your submission!`  //Form submits & displays "thank you" message
  }
})


//DocumentFragment
let list = document.querySelector(`li`);
let fitness = [`MOTIVATION`, `TRANSFORMATION`, `NUTRITION`];

let fragment = new DocumentFragment();

for (let i of fitness) {
  let ul = document.createElement("ul");
  ul.textContent = fitness;
  fragment.append(ul);
}

list.append(fragment);

list.classList.add(`docfrag`)
