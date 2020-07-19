var homebutton = document.getElementById('Home');
homebutton.addEventListener('click', makeHomepage);

var aboutbutton = document.getElementById('About');
aboutbutton.addEventListener('click', makeAbout);

var contactbutton = document.getElementById('Contact');
contactbutton.addEventListener('click', makeContact);

var aboutPages = [];

var linkDescs = [
  'A link to my project site. All projects on that site are either hosted'+
  ' on gitpages for front-end only applications and on heroku to deploy' +
  'those that need a server. Currently, all are javascript/browser-friendly applications.',
  'A link to my repositories on GitHub. I predominantly work with javascript,'+
  'java for android applications, and C# for Unity applications.',
  'A link to my blog about Hometown Hero, a game I am currently making.' +
  'While mostly about my game, there are other posts about programming in general.',
  'A link to my instagram dedicated to my art.',
]

function makeHomepage() {
     var content = document.getElementById('content');
     content.innerHTML = '';

     var main = document.createElement('div');
     main.className = 'main';

     var portrait = document.createElement('img');
     portrait.className = 'scaler';
     portrait.src = 'PortraitScaled.png';
     main.appendChild(portrait);

     var name = document.createElement('h2');
     name.innerHTML = 'Hannah Burnett';
     name.id = 'name';
     main.appendChild(name);

     var siteList = makeSiteList();
     main.appendChild(siteList);

     var linkDesc = document.createElement('div');
     linkDesc.id = 'link_desc';
     content.appendChild(linkDesc);

     content.appendChild(main);
}

function makeSiteList() {
    var siteList = document.createElement('ul');
    siteList.className = 'siteList';

    siteList.append(makeSiteLink('https://hanoelleb.github.io/', 
	                            'Projects', 0 ));
    siteList.append(makeSiteLink(
	'https://github.com/hanoelleb?tab=repositories', 'Repositories', 1 ));
    siteList.append(makeSiteLink('', 'Dev Blog', 2 ));
    siteList.append(makeSiteLink('', 'Art', 3 ));

    return siteList;
}

function makeSiteLink(site, label, num) {
    var item = document.createElement('li');
    var link = document.createElement('a');
    link.href = site;
    link.innerHTML = label;
    item.appendChild(link);

    link.addEventListener('mouseover', () => {
        var desc = document.getElementById('link_desc');
	desc.innerHTML = '';

	var linkLabel = document.createElement('h2');
	linkLabel.innerHTML = label;
	desc.appendChild(linkLabel);

	var content = document.createElement('p');
	content.innerHTML = linkDescs[num];
	desc.appendChild(content); 
    });

    link.addEventListener('mouseout', () => {
        var desc = document.getElementById('link_desc');
        desc.innerHTML = '';
    });

    return item;
}

function makeAbout() {
     var content = document.getElementById('content');
     content.innerHTML = '';

     var firstPar = makePar('Hello! My name is Hannah Burnett. I studied computer science at the University of California, Irvine and graduated Spring 2020.');
     firstPar.style.display = 'block';
     content.appendChild(firstPar);
     aboutPages.push(firstPar);

     var secondPar = makePar('I primarily use Javascript, Java, and C#, but I have had exposure to other languages such as C++, Python, and Ruby among others. My primary interests are web, app, and game development.');
     content.appendChild(secondPar);   
     aboutPages.push(secondPar);

     var thirdPar = makePar('Aside from programming languages, I am also adept at HTML and CSS, along with web frameworks/libraries ReactJS, NodeJS, and Sass. I am also familiar with using NPM and Webpack for web applications. I utilize Github for version control. I am also familiar with Unity for game development.');
     content.appendChild(thirdPar);
     aboutPages.push(thirdPar);

     var fourthPar = makePar('Outside of programming, I enjoy creating pixel art (primarily portraits, character sprites, and small item sprites), playing video games, knitting, doing yoga, and solving puzzles like crosswords and sudoku. I am also currently running a blog detailing the development of a game I am makiing.');
     content.appendChild(fourthPar);
     aboutPages.push(fourthPar);

     var fifthPar = makePar('I can be found on Github, Reddit, Instagram, and Wordpress.Links to each can be found on the Contact page.');
     content.appendChild(fifthPar);
     aboutPages.push(fifthPar);

     var marker = document.createElement('img');
     marker.id = 'marker';
     marker.src = 'dialogueButton.png';
     /*marker.addEventListener('click', () => {
         for (let i = 0; i < aboutPages.length; i++) {
	     if (aboutPages[i].style.display === 'none') {
		 print(i);
		 print(aboutPages[i].style);
		 aboutPages[i].style.display = 'block';
		 return;
	     }
	 }
     });*/

     addDialogue(marker);
     for (let j = 0; j < aboutPages.length; j++)
        addDialogue(aboutPages[j]);

     content.appendChild(marker);
}

function makePar(content) {
     var par = document.createElement('p');
     par.className = 'about';
     par.innerHTML = content;
     return par;
}

function addDialogue(part) {
    print('I do not understand');
    /*
    part.addEventListener('click', function() {
	 print(aboutPages);
         for (let i = 0; i < aboutPages.length; i++) {
             if (aboutPages[i].style.display === 'none') {
                 print(i);
                 print(aboutPages[i].style);
                 aboutPages[i].style.display = 'block';
                 return;
             }
         }
   });
   */
}

function makeContact() {
     var content = document.getElementById('content');
     content.innerHTML = '';
}

makeHomepage();
