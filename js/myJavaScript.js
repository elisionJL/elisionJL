//for index.html
let body = document.getElementById('Index');
if (body != null) {
    var car = document.querySelectorAll("#car");
    var stampEle = document.querySelectorAll("#stamp");
    function animate() {
        //animate car
        var driveInterval = setInterval(drive, 20)
        var carLeft = -25;
        function drive() {
            if (carLeft >= 125) {
                carLeft = -25
            }
            else {
                carLeft += 1;
                car[0].style.left = carLeft + '%';
            }
        }
        //animate car
        var stampInterval = setInterval(stamp, 20)
        var stampOpacity = 0;
        var stampWidth = 35;
        var waitTime = 0;
        function stamp() {
            if (stampOpacity >= 1) {
                if (waitTime > 1) {
                    stampOpacity = 0;
                    stampWidth = 35;
                    waitTime = 0;
                }
                else {
                    waitTime += 0.01;
                }
            }
            else {
                stampOpacity += 0.01;
                stampWidth -= 0.1;
                stampEle[0].style.opacity = stampOpacity;
                stampEle[0].style.width = stampWidth + '%'
            }
        }
    }
    window.onload = animate;
}

//for history.html
body = document.getElementById('history');
if (body != null) {
    let mainText = document.querySelectorAll(".mainText");
    var timeline = document.querySelectorAll("#timeline");
    var line = document.querySelectorAll("#line");
    function resizeLine() {
        //resize line according to screensize
        var windowOH = window.innerHeight;
        var windowOW = window.innerWidth;
        var Lwidth = 0.005 * windowOW;
        var Lheight = 0.75 * windowOH;
        line[0].style.width = Lwidth + 'px';
        line[0].style.height = Lheight + 'px';
        var marginTopHeight = 0.1 * windowOH;
        line[0].style.marginTop = marginTopHeight + 'px';
        line[0].style.marginBottom = marginTopHeight + 'px';
        moveCircle(Lwidth);
        for (var i = 0; i < 3; ++i) {
            let textImg = mainText[i].querySelector('img');
            textImg.style.maxHeight = Lheight * 0.1;
        }
    }
    function moveCircle(lineWidth) {
        //move circle according to line size
        var LineHeight = line[0].clientHeight;
        var lineStyle = window.getComputedStyle(line[0]);
        var lineMarginTop = lineStyle.getPropertyValue('margin-top');
        var circleList = document.querySelectorAll(".circle");
        var outerCircleList = document.querySelectorAll(".outerCircle");
        var heightdiff = outerCircleList[0].offsetWidth - circleList[0].offsetHeight;
        for (var i = 0; i < circleList.length; i++) {
            var topHeight = parseFloat(LineHeight / (circleList.length + 1)) * parseFloat(i + 1) + parseFloat(lineMarginTop);
            circleList[i].style.top = topHeight + 'px';
            outerCircleList[i].style.top = (topHeight - (heightdiff/2)) + 'px';
        }
    }
    let circles = document.querySelectorAll(".circle");
    //hide none chosen text and display chosen text
    function changeDisplay(choice) {
        for (var i = 0; i < 3; ++i) {
            mainText[i].style.display = 'none'
        }
        mainText[choice].style.display = 'block'
    }
    //add above function to circles
    circles[0].addEventListener('click', function () { return changeDisplay(0) });
    circles[1].addEventListener('click', function () { return changeDisplay(1) });
    circles[2].addEventListener('click', function () { return changeDisplay(2) });
    window.onload = resizeLine();
    window.onresize = resizeLine();

}

//for popularCardGames.html
body = document.getElementById('Popular');
if (body != null) {
    let slideI = 1;
    showSlides(slideI);

    //function for arrows to move slide
    function plusSlides(n) {
        showSlides(slideI += n);
    }
    //mmove slide function for dot
    function currentSlide(n) {
        showSlides(slideI = n);
    }

    function showSlides(n) {
        let i;
        let slides = document.querySelectorAll(".slides");
        let dots = document.querySelectorAll(".dot");
        if (n > slides.length) { slideI = 1 }
        if (n < 1) { slideI = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideI - 1].style.display = "block";
        dots[slideI - 1].className += " active";
    }
    let prev = document.querySelector('.prev');
    let next = document.querySelector('.next');
    let dots = document.querySelectorAll(".dot");
    dots[0].addEventListener('click', function () { return currentSlide(1) })
    dots[1].addEventListener('click', function () { return currentSlide(2) })
    dots[2].addEventListener('click', function () { return currentSlide(3) })
    dots[3].addEventListener('click', function () { return currentSlide(4) })
    prev.addEventListener('click', function () { return plusSlides(-1) })
    next.addEventListener('click', function () { return plusSlides(1) })
    window.onload = showSlides(1);
}

//for otherUses.html
body = document.getElementById('otherUses');
if (body != null) {
    throwingText = document.querySelector('#throwing');
    cardistryText = document.querySelector('#cardistry');
    magicText = document.querySelector('#magic');
    header = document.querySelector('#uses');
    images = document.querySelectorAll("img:not(#navIcon)");
    images[0].classList.toggle("darken");
    cardistryText.classList.toggle("hide");
    function highlight0() {
        header.innerHTML = "Cardistry"
        if (images[0].classList.contains('darken') == true) {
            images[0].classList.toggle("darken");
        }
        if (images[1].classList.contains('darken') != true) {
            images[1].classList.toggle("darken");
        }
        if (images[2].classList.contains('darken') != true) {
            images[2].classList.toggle("darken");
        }
        if (cardistryText.classList.contains('hide') == true) {
            cardistryText.classList.toggle("hide");
        }
        if (throwingText.classList.contains('hide') != true) {
            throwingText.classList.toggle("hide");
        }
        if (magicText.classList.contains('hide') != true) {
            magicText.classList.toggle("hide");
        }
    }
    function highlight1() {

        header.innerHTML = "Throwing Cards"
        if (images[1].classList.contains('darken') == true) {
            images[1].classList.toggle("darken");
        }
        if (images[0].classList.contains('darken') != true) {
            images[0].classList.toggle("darken");
        }
        if (images[2].classList.contains('darken') != true) {
            images[2].classList.toggle("darken");
        }
        if (cardistryText.classList.contains('hide') != true) {
            cardistryText.classList.toggle("hide");
        }
        if (throwingText.classList.contains('hide') == true) {
            throwingText.classList.toggle("hide");
        }
        if (magicText.classList.contains('hide') != true) {
            magicText.classList.toggle("hide");
        }
    }
    function highlight2() {
        header.innerHTML = "Card Magic"
        if (images[2].classList.contains('darken') == true) {
            images[2].classList.toggle("darken");
        }
        if (images[1].classList.contains('darken') != true) {
            images[1].classList.toggle("darken");
        }
        if (images[0].classList.contains('darken') != true) {
            images[0].classList.toggle("darken");
        }
        if (cardistryText.classList.contains('hide') != true) {
            cardistryText.classList.toggle("hide");
        }
        if (throwingText.classList.contains('hide') != true) {
            throwingText.classList.toggle("hide");
        }
        if (magicText.classList.contains('hide') == true) {
            magicText.classList.toggle("hide");
        }
    }
    //add event listeners to images to darken the iamges that are not chosen;
    images[0].addEventListener('click', function () { return highlight0() })
    images[1].addEventListener('click', function () { return highlight1() })
    images[2].addEventListener('click', function () { return highlight2() })
}
//show menu buttons when clicking on menu
function clickMenu() {
    var x = document.getElementById("navBar");
    if (x.className === "navbar") {
        x.className += " responsive";
    }
    document.querySelector('.icon').style.display = "none";
}
// hide menu when pressing outside of menu
function clickBody() {
    var x = document.getElementById("navBar");
    if (x.className != "navbar") {
        x.className = "navbar";
    }
    document.querySelector('.icon').style.display = "block";
}
//add menu button to navbar only if window width is less than 1440
if (window.innerWidth < 1440) {
    function addEvent() {
        let icon = document.querySelector('.icon');
        icon.addEventListener('click', function () { return clickMenu() })
        let main = document.querySelector('.main');
        main.addEventListener('click', function () { return clickBody() })
    }
    window.onload=addEvent();
    window.onresize=addEvent();
}