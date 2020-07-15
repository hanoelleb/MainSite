var homebutton = document.getElementById('Home');
homebutton.addEventListener('click', makeHomepage);

var aboutbutton = document.getElementById('About');
aboutbutton.addEventListener('click', makeAbout);

var contactbutton = document.getElementById('Contact');
contactbutton.addEventListener('click', makeContact);


function makeHomepage() {
     var content = document.getElementById('content');
     content.innerHTML = '';

     var main = document.createElement('div');
     main.className = 'main';

     var portrait = document.createElement('img');
     portrait.src = 'PortraitScaled.png';
     main.appendChild(portrait);

     var siteList = makeSiteList();
     main.appendChild(siteList);

     content.appendChild(main);
}

function makeSiteList() {
    var siteList = document.createElement('ul');
    siteList.className = 'siteList';

    siteList.append(makeSiteLink('https://hanoelleb.github.io/', 'Projects' ));
    siteList.append(makeSiteLink('https://github.com/hanoelleb?tab=repositories', 'Repositories' ));
    siteList.append(makeSiteLink('', 'Dev Blog' ));
    siteList.append(makeSiteLink('', 'Art' ));

    return siteList;
}

function makeSiteLink(site, label) {
    var item = document.createElement('li');
    var link = document.createElement('a');
    link.href = site;
    link.innerHTML = label;
    item.appendChild(link);
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
