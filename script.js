let cur_pg = 1;

document.querySelector(".mobtn").addEventListener('click', callAbout);
document.querySelector(".mobtn2").addEventListener('click', callContact);
document.querySelector(".mobtn3").addEventListener('click', callHome);
document.querySelector(".toHome").addEventListener('click', callHome);
document.querySelector(".toAbout").addEventListener('click', callAbout);
document.querySelector(".toContact").addEventListener('click', callContact);

function callHome() {
    document.querySelector("body").style = 'background: radial-gradient(blue,black);';
    document.querySelector(".homePage").style = 'display:grid;';
    document.querySelector(".aboutPage").style = 'display:none;';
    document.querySelector(".contactPage").style = 'display:none;';
}

function callAbout() {
    document.querySelector("body").style = 'background: radial-gradient(green,black);';
    document.querySelector(".homePage").style = 'display:none;';
    document.querySelector(".aboutPage").style = 'display:flex;';
}

function callContact() {
    document.querySelector("body").style = 'background: radial-gradient(red,black);';
    document.querySelector(".homePage").style = 'display:none;';
    document.querySelector(".aboutPage").style = 'display:none;';
    document.querySelector(".contactPage").style = 'display:flex;';
}