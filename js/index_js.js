const homeTitleH2 = document.querySelector('#home--title__h2');
const homeContentP = document.querySelector("#home--content__p");
const homeExploreA = document.querySelector("#home--explore__a");

const popupDiv = document.getElementById('popup');
const box = document.getElementById('box');
const mainContent = document.getElementById('main__content');


const homeProjectH2 = "Our Works";
const homeProjectP = "We are not defined by what we think of ourselves, we are defined by our quality of work. Here is a summery of all our projects.";
const homeProjectA = "EXPLORE WORKS";
const homeProjectHref = "work";
const homeProjectImg = document.querySelector("#home--img__3");

const homeStoryH2 = "Our Story";
const homeStoryP = "Story is not always a combination of reality and imagination, sometimes its only an image that turned to reality.";
const homeStoryA = "READ OUR STORY";
const homeStoryHref = "story";
const homeStoryImg = document.querySelector("#home--img__1");

const homeTeamH2 = "Our Team";
const homeTeamP = "Team is the most essential part of everyting. Here is the heros who made CriO a super hero. Explore the most awesome team.";
const homeTeamA = "VIEW OUR TEAM";
const homeTeamHref = "team";
const homeTeamImg = document.querySelector("#home--img__4");

const homeMissionH2 = "Our Vision";
const homeMissionP = "Great things starts with a greater vision. At the start of our journey we had nothing but a vision to change for good.";
const homeMissionA = "KNOW OUR VISION";
const homeMissionHref = "vision";
const homeMissionImg = document.querySelector("#home--img__2");

const homeContactH2 = "Contact Us";
const homeContactP = "Feel free to contact us. We are always open to new projects, creative ideas, and a way to be part of your great vision.";
const homeContactA = "CONTACT WITH US";
const homeContactHref = "contact";
const homeContactImg = document.querySelector("#home--img__5");

const homeTitleH2Array = [homeStoryH2, homeMissionH2, homeProjectH2, homeTeamH2, homeContactH2];
const homeContentPArray = [homeStoryP, homeMissionP, homeProjectP, homeTeamP, homeContactP];
const homeExploreAArray = [homeStoryA, homeMissionA, homeProjectA, homeTeamA, homeContactA];
const homeHrefArray = [homeStoryHref, homeMissionHref, homeProjectHref, homeTeamHref, homeContactHref];
const homeImgArray = [homeStoryImg, homeMissionImg, homeProjectImg, homeTeamImg, homeContactImg];

document.onmousewheel = function( e ) {
    var scrollDirection = detectMouseWheelDirection( e );
    scrollDirection == 'down' ? changenext() : previous();
};

function detectMouseWheelDirection( e )
{
    var delta = null,
    direction = false;
    if ( !e ) {
        e = window.event;
    }
    if ( e.wheelDelta ) {
        delta = e.wheelDelta / 60;
    } else if ( e.detail ) {
        delta = -e.detail / 2;
    }
    if ( delta !== null ) {
        direction = delta > 0 ? 'up' : 'down';
    }
    return direction;
}

let i = 0;
if(document.body.clientWidth > 768) {
    VanillaTilt.init(
        document.querySelector(".content_back"), {
            max: 25,
            speed: 400,
            glare: true,
            scale: 1.2,
            'max-glare': 0.4
        }
    );
}
function popup() {
    if(popupDiv.classList.contains('popup_show')) {
        popupDiv.classList.remove('popup_show');
        popupDiv.classList.add('popup_hide');
        box.classList.remove('blur');
        box.classList.add('not_blur');
        mainContent.classList.remove('blur');
        mainContent.classList.add('not_blur');
    } else {
        popupDiv.classList.remove('popup_hide');
        popupDiv.classList.add('popup_show');
        box.classList.remove('not_blur');
        box.classList.add('blur');
        mainContent.classList.remove('not_blur');
        mainContent.classList.add('blur');
    }
}
function popupclose() {
    popupDiv.classList.remove('popup_show');
    popupDiv.classList.add('popup_hide');
    box.classList.remove('blur');
    box.classList.add('not_blur');
    mainContent.classList.remove('blur');
    mainContent.classList.add('not_blur');
}
function changenext() {
    if(i === 4) {
        i = 0;
    } else {
        i++;
    }
    homeTitleH2.innerHTML = homeTitleH2Array[i];
    homeContentP.innerHTML = homeContentPArray[i];
    homeExploreA.innerHTML = homeExploreAArray[i];
    homeExploreA.setAttribute("href", homeHrefArray[i]);
    if(i === 0) {
        homeImgArray[i+3].classList.remove("home--left__out");
        homeImgArray[i+3].classList.add("home--right__out");
        homeImgArray[i+1].classList.remove("home--img__3");
        homeImgArray[i+1].classList.add("home--img__2");
        homeImgArray[i+2].classList.remove("home--right__out");
        homeImgArray[i+2].classList.add("home--img__3");
        homeImgArray[i+4].classList.remove("home--img__1");
        homeImgArray[i+4].classList.add("home--left__out");
    } else if(i === 1) {
        homeImgArray[i-1].classList.remove("home--img__1");
        homeImgArray[i-1].classList.add("home--left__out");
        homeImgArray[i+1].classList.remove("home--img__3");
        homeImgArray[i+1].classList.add("home--img__2");
        homeImgArray[i+2].classList.remove("home--right__out");
        homeImgArray[i+2].classList.add("home--img__3");
        homeImgArray[i+3].classList.remove("home--left__out");
        homeImgArray[i+3].classList.add("home--right__out");
    } else if(i === 2) {
        homeImgArray[i-1].classList.remove("home--img__1");
        homeImgArray[i-1].classList.add("home--left__out");
        homeImgArray[i-2].classList.remove("home--left__out");
        homeImgArray[i-2].classList.add("home--right__out");
        homeImgArray[i+1].classList.remove("home--img__3");
        homeImgArray[i+1].classList.add("home--img__2");
        homeImgArray[i+2].classList.remove("home--right__out");
        homeImgArray[i+2].classList.add("home--img__3");
    } else if(i === 3) {
        homeImgArray[i-2].classList.remove("home--left__out");
        homeImgArray[i-2].classList.add("home--right__out");
        homeImgArray[i-3].classList.remove("home--right__out");
        homeImgArray[i-3].classList.add("home--img__3");
        homeImgArray[i-1].classList.remove("home--img__1");
        homeImgArray[i-1].classList.add("home--left__out");
        homeImgArray[i+1].classList.remove("home--img__3");
        homeImgArray[i+1].classList.add("home--img__2");
    } else {
        homeImgArray[i-1].classList.remove("home--img__1");
        homeImgArray[i-1].classList.add("home--left__out");
        homeImgArray[i-2].classList.remove("home--left__out");
        homeImgArray[i-2].classList.add("home--right__out");
        homeImgArray[i-3].classList.remove("home--right__out");
        homeImgArray[i-3].classList.add("home--img__3");
        homeImgArray[i-4].classList.remove("home--img__3");
        homeImgArray[i-4].classList.add("home--img__2");
    }
    
    homeImgArray[i].classList.remove("home--img__2");
    homeImgArray[i].classList.add("home--img__1");
}

// Previous

function previous() {
    if(i === 0) {
        i = 4;
    } else {
        i--;
    }
    homeTitleH2.innerHTML = homeTitleH2Array[i];
    homeContentP.innerHTML = homeContentPArray[i];
    homeExploreA.innerHTML = homeExploreAArray[i];
    homeExploreA.setAttribute("href", homeHrefArray[i]);
    if(i === 3) {
        homeImgArray[i+1].classList.remove("home--img__1");
        homeImgArray[i+1].classList.add("home--img__2");
        homeImgArray[i-1].classList.remove("home--right__out");
        homeImgArray[i-1].classList.add("home--left__out");
        homeImgArray[i-2].classList.remove("home--img__3");
        homeImgArray[i-2].classList.add("home--right__out");
        homeImgArray[i-3].classList.remove("home--img__2");
        homeImgArray[i-3].classList.add("home--img__3");
    } else if(i === 2) {
        homeImgArray[i-1].classList.remove("home--right__out");
        homeImgArray[i-1].classList.add("home--left__out");
        homeImgArray[i-2].classList.remove("home--img__3");
        homeImgArray[i-2].classList.add("home--right__out");
        homeImgArray[i+2].classList.remove("home--img__2");
        homeImgArray[i+2].classList.add("home--img__3");
        homeImgArray[i+1].classList.remove("home--img__1");
        homeImgArray[i+1].classList.add("home--img__2");
    } else if(i === 1) {
        homeImgArray[i-1].classList.remove("home--right__out");
        homeImgArray[i-1].classList.add("home--left__out");
        homeImgArray[i+3].classList.remove("home--img__3");
        homeImgArray[i+3].classList.add("home--right__out");
        homeImgArray[i+2].classList.remove("home--img__2");
        homeImgArray[i+2].classList.add("home--img__3");
        homeImgArray[i+1].classList.remove("home--img__1");
        homeImgArray[i+1].classList.add("home--img__2");
    } else if(i === 0) {
        homeImgArray[i+4].classList.remove("home--right__out");
        homeImgArray[i+4].classList.add("home--left__out");
        homeImgArray[i+3].classList.remove("home--img__3");
        homeImgArray[i+3].classList.add("home--right__out");
        homeImgArray[i+2].classList.remove("home--img__2");
        homeImgArray[i+2].classList.add("home--img__3");
        homeImgArray[i+1].classList.remove("home--img__1");
        homeImgArray[i+1].classList.add("home--img__2");
    } else {
        homeImgArray[i-1].classList.remove("home--right__out");
        homeImgArray[i-1].classList.add("home--left__out");
        homeImgArray[i-2].classList.remove("home--img__3");
        homeImgArray[i-2].classList.add("home--right__out");
        homeImgArray[i-3].classList.remove("home--img__2");
        homeImgArray[i-3].classList.add("home--img__3");
        homeImgArray[i-4].classList.remove("home--img__1");
        homeImgArray[i-4].classList.add("home--img__2");
    }
        homeImgArray[i].classList.remove("home--left__out");
        homeImgArray[i].classList.add("home--img__1");
}