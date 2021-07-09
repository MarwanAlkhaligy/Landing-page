/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
let numberOfSections = 0;
let navUn = document.querySelector('#navbar__list');
let sectionParent = document.querySelector('.main__hero');

// this content is from https://spaceipsum.com/pale-blue-dot/ website  (lourn ipum content) if you are intersted  :) :P 

const sectionContent = ["There is no strife, no prejudice, no national conflict in outer space as yet. Its hazards are hostile to us all. Its conquest deserves the best of all mankind, and its opportunity for peaceful cooperation many never come again. But why, some say, the moon? Why choose this as our goal? And they may well ask why climb the highest mountain? Why, 35 years ago, fly the Atlantic? Why does Rice play Texas? We choose to go to the moon. We choose to go to the moon in this decade and do the other things, not because they are easy, but because they are hard, because that goal will serve to organize and measure the best of our energies and skills, because that challenge is one that we are willing to accept, one we are unwilling to postpone, and one which we intend to win, and the others, too.It is for these reasons that I regard the decision last year to shift our efforts in space from low to high gear as among the most important decisions that will be made during my incumbency in the office of the Presidency.In the last 24 hours we have seen facilities now being created for the greatest and most complex exploration in man's history. We have felt the ground shake and the air shattered by the testing of a Saturn C-1 booster rocket, many times as powerful as the Atlas which launched John Glenn, generating power equivalent to 10,000 automobiles with their accelerators on the floor. We have seen the site where the F-1 rocket engines, each one as powerful as all eight engines of the Saturn combined, will be clustered together to make the advanced Saturn missile, assembled in a new building to be built at Cape Canaveral as tall as a 48 story structure, as wide as a city block, and as long as two lengths of this field."
    , "The view of the earth from the moon fascinated me - a small disk, 240,000 mniles away. It was hard to think that that little thing held so many problems, so many frustrations. Raging nationalistic interests, famines, wars, pestilence don't show from that distance. I'm convinced that some wayward stranger in a space-craft, coming from some other part of the heavens, could look at earth and never know that it was inhabited at all. But the samw wayward stranger would certainly know instinctively that if the earth were inhabited, then the destinies of all who lived on it must inevitably be interwoven and joined. We are one hunk of ground, water, air, clouds, floating around in space. From out there it really is \'one world\'."
    , "I believe that space travel will one day become as common as airline travel is today. I’m convinced, however, that the true future of space travel does not lie with government agencies — NASA is still obsessed with the idea that the primary purpose of the space program is science — but real progress will come from private companies competing to provide the ultimate adventure ride, and NASA will receive the trickle-down benefits."
    , "The most significant things we can think about, when we think about Apollo, is that it has opened for us, for us being the World, a challenge of the future. The door is now cracked, but the promise of that future lies in the young people, not just in America, but the young people all over the world. Learning to live and learning to work together. In order to remind all the peoples of the World, in so many countries throughout the world, that this is what we all are striving for in the future, Jack has picked up a very significant rock, typical of what we have here in the valley of Taurus Littrow. It's a rock composed of many fragments, of many sizes, and many shapes, probably from all parts of the Moon, perhaps billions of years old. But a rock of all sizes and shapes, fragments of all sizes and shapes, and even colors that have grown together to become a cohesive rock outlasting the nature of Space, sort of living together in a very coherent, very peaceful manner. When we return this rock or some of the others like it to Houston, we'd like to share a piece of this rock with so many of the countries throughout the world. We hope that this will be a symbol of what our feelings are, what the feelings of the Apollo Program are, and a symbol of mankind that we can live in peace and harmony in the future."
    , "The Earth is the only world known so far to harbor life. There is nowhere else, at least in the near future, to which our species could migrate.Visit, yes. Settle, not yet. Like it or not, for the moment the Earth is where we make our stand.The Earth is a very small stage in a vast cosmic arena. Think of the rivers of blood spilled by all those generals and emperors so that, in glory and triumph, they could become the momentary masters of a fraction of a dot. Think of the endless cruelties visited by the inhabitants of one corner of this pixel on the scarcely distinguishable inhabitants of some other corner, how frequent their misunderstandings, how eager they are to kill one another, how fervent their hatreds."
    , "Our posturings, our imagined self-importance, the delusion that we have some privileged position in the Universe, are challenged by this point of pale light. Our planet is a lonely speck in the great enveloping cosmic dark. In our obscurity, in all this vastness, there is no hint that help will come from elsewhere to save us from ourselves.It has been said that astronomy is a humbling and character-building experience. There is perhaps no better demonstration of the folly of human conceits than this distant image of our tiny world. To me, it underscores our responsibility to deal more kindly with one another, and to preserve and cherish the pale blue dot, the only home we've ever known."
];


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/


// function expression to create Section dynamically
let createSection = function () {
    numberOfSections++;
    let section = document.createElement('section');
    let sectionDiv = document.createElement('div');
    let sectionHeader = document.createElement('h2');
    let sectionParagraph = document.createElement('p');

    section.setAttribute('id', 'section' + numberOfSections);
    section.setAttribute('data-nav', 'section' + numberOfSections);


    sectionDiv.setAttribute('class', 'landing__container');

    sectionHeader.textContent = 'Section ' + numberOfSections;
    sectionParagraph.textContent = sectionContent[numberOfSections % sectionContent.length];

    sectionDiv.appendChild(sectionHeader);
    sectionDiv.appendChild(sectionParagraph);
    section.appendChild(sectionDiv);
    sectionParent.appendChild(section);
};
// build the nav
// function expression to create list of the navigation list
let createNavList = function () {
    let sections = document.querySelectorAll('section');
    let fragment = document.createDocumentFragment();
    for (let i = 1; i < sections.length + 1; i++) {
        let listItem = document.createElement('li');
        let anchor = document.createElement('a');
        anchor.setAttribute('href', '#section' + i);
        anchor.setAttribute('data-nav', 'section' + i);
        anchor.textContent = 'Section ' + i;
        listItem.appendChild(anchor);
        fragment.appendChild(listItem);
    }
    navUn.appendChild(fragment);
}

// function expression to add section and list in th navigation unordered list
let addSection = function () {
    createSection();
    let listItem = document.createElement('li');
    let anchor = document.createElement('a');

    anchor.setAttribute('href', '#section' + numberOfSections);
    anchor.setAttribute('data-nav', 'section' + numberOfSections);
    anchor.textContent = 'Section ' + numberOfSections;

    listItem.appendChild(anchor);
    navUn.appendChild(listItem);
};
// function expression to build the sections and the lists of the navigation bar
let buildNav = function(number) {
    for( let i = 1; i <= number; i++) {
        createSection();
    }
    createNavList();
}
// function expression to determine if the section should be active;
let determineSection = function(section){
    return (section.getBoundingClientRect().top>= 0 && section.getBoundingClientRect().top <= 280 );
}



/**
 * End Main Functions
 * Begin Events
 * 
*/

// scroll images style 
window.addEventListener('scroll', function() {
    let value = window.scrollY;
    document.querySelector('#moon').style.top = value * 0.75 + 'px';
    document.querySelector('#front_mountian').style.top = value * 0.2+ 'px';
    document.querySelector('#text').style.left = value * 6 + 'px';

});
// Build menu 
buildNav(5);
// to add section button
// const btn = document.querySelector('#sectionToAdd');
// btn.addEventListener('click', function(){addSection();});

// Scroll to the top: 
let topElement = document.querySelector('#top__nav');
console.log(topElement);
topElement.addEventListener('click', function (event) {
    let element = document.querySelector('.section');
    element.scrollIntoView({ behavior: 'smooth' });
});

// Scroll to section on link click
navUn.addEventListener('click', function (event) {
    event.preventDefault();
    let target = event.target;
    if (target.tagName.toLowerCase() == 'a') {
        const targetAttribute = target.getAttribute('href');
        if (targetAttribute) {
            let element = document.querySelector(targetAttribute);
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
});

// Set sections as active
window.onscroll = function () {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        let selector = `a[href="#${section.attributes.id.value}"]`;
        if(determineSection(section)) {
            if(!section.classList.contains("your-active-class"))
                section.classList.add("your-active-class");
                document.querySelector(selector).parentElement.classList.add("your-active-class");
        }else {
            section.classList.remove("your-active-class");
            document.querySelector(selector).parentElement.classList.remove("your-active-class");
        } 
    });
}



