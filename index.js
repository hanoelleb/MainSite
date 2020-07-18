var homebutton = document.getElementById('Home');
homebutton.addEventListener('click', makeHomepage);

var aboutbutton = document.getElementById('About');
aboutbutton.addEventListener('click', makeAbout);

var contactbutton = document.getElementById('Contact');
contactbutton.addEventListener('click', makeContact);

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

}

function makeContact() {
     var content = document.getElementById('content');
     content.innerHTML = '';
}

makeHomepage();
