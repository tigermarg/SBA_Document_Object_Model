//Nav bar array of objects
let navLinks = [
    {text: 'about', href: '/about'},
    {text: 'workout', href: '#'},
    {text: 'recipes', href: '#'},
    {text: 'news', href: '#'},
  ];

let buttons = [
  {text: 'sign-up', href: '#'},
  {text: 'login', href: '#'}
]

let mainEl = document.querySelector(`main`) //Cache main element
    // console.log(mainEl[0])

let bodyEl = document.querySelector( `body`) //Cache body element
bodyEl.style.backgroundImage = `url(./images/workout.jpg)` //Set body background image
bodyEl.classList.add(`body-background`) //Add body-background class

mainEl.innerHTML = `<h1>No Pain No Gain</h1>` //Main element content
mainEl.classList.add(`flex-ctr`) //Add flex-ctr class

//Add menu bar
let navMenuEl = document.getElementById(`nav-menu`) //Select & cache `nav-menu` id
  // console.log(navMenuEl)

navMenuEl.style.height = `100%`;  //Set height of nav element

navMenuEl.style.backgroundColor = `var(--nav-menu-bg)` //Set nav menu background color

navMenuEl.classList.add(`flex-around`)  //Add flex-around class to nav menu


// Adding menu links
navLinks.forEach((link) => {  //Loop through navLinks array & for each `link` object:

    let menuLink = document.createElement(`a`);  //Create <a> element
    // console.log(menuLink)

    menuLink.setAttribute(`href`, link.href);  //Add href attribute with value = href property of `link` object
    // console.log(menuLink)

    menuLink.textContent = link.text;  //Set newLink content = text property of `link` object
    // console.log(menuLink)
    navMenuEl.appendChild(menuLink) //Add new element to navMenuEl


})


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

// Adding Sign Up & Login buttons
buttons.forEach((i) => {
  console.log(i)
    let button = document.createElement('button');
    button.setAttribute(`href`, i.href);
    button.textContent = i.text;
    navMenuEl.appendChild(button);

})


//Form Validation

let userInput = document.getElementById('username')

let form = document.getElementsByTagName('form') //gives you array-like object

userInput.addEventListener('change', ()=>{
    console.log(`I am typing ${userInput.value}`)
})

form[0].addEventListener('submit', (e)=>{
    e.preventDefault()
    console.log(`Form Submitted`)
})
