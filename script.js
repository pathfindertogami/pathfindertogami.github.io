function browserDetect() {
    let userAgent = navigator.userAgent;
    let browserName;
    if ((navigator.userAgent.indexOf('OPR')) != -1 ) {
        browserName = "оперу";
    } else if (navigator.userAgent.indexOf("Edg") != -1 ) { 
        browserName = "эдж"; 
    } else if (navigator.userAgent.indexOf("Chrome") != -1 ) { 
        browserName = "хром"; 
    } else if (navigator.userAgent.indexOf("Firefox") != -1 ) { 
        browserName = "firefox"; 
    };
    document.getElementById("chrome").innerHTML="снеси" + " " + browserName + " ";
    if (browserName != "firefox") {
        document.getElementById("chrome").style.display = `flex`;
        document.getElementById("main").style.display = `none`;
        document.getElementById("firefoxdl").style.display = `flex`;
        document.getElementById("notfullscreen").style.display = `none`;
    }
}
function randomSong() {
    src = ["https://audio.jukehost.co.uk/jAhLqGYIvSW9qwgaptyLDhIKVcj2jfB0", "https://audio.jukehost.co.uk/kIV5aMsrUHcgYuqOoq5z3JnoYz88EFt4", "https://audio.jukehost.co.uk/MhoEruseoO7aNFh1CWXOJMoFBHB4gzex", "https://audio.jukehost.co.uk/A78R2kQyWVJqD6osXPEopDqGP302zyNo", "https://audio.jukehost.co.uk/cWpDr4JHa0ZgUh18Rv7xGZUKkRLP4Gix", "https://audio.jukehost.co.uk/AGCggHySS3Dkk5j0cHsttxb7JbHQyGA5",  "https://audio.jukehost.co.uk/3pGyQPezHLVYTMsrPIlfxaazEBmfABtI", "https://audio.jukehost.co.uk/XxaQGl2XoK95eDKSJZKdAKJ535hTqZXH", "https://audio.jukehost.co.uk/Olx6arQCYgjuD3QIQgP5inY2sSg1Ohsc", "https://audio.jukehost.co.uk/QGOmzwJxYJ7ZvwbhyQvq1NHRFiJS7nme", "https://audio.jukehost.co.uk/2VR8bSLZoiYm4TC81sBCycQH9d8iJOD0", "https://audio.jukehost.co.uk/fBL7XcbWYSUqba4uht7RDXanZvHXqaWx"]
    random = Math.floor(Math.random() * (Math.floor(11) - Math.ceil(0)) + Math.ceil(0))
    document.getElementById("audio").src = src[random]
}
function windowSize() {
    var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    document.getElementById("notfullscreen").innerHTML ="(>ω< ) <br> никаких экранов/окон размером меньше 1450x850 <br><br>" + width + "/1450" + " " + height + "/850"
}
function soundonhover() {
    document.getElementById("hover").play();
    document.getElementById("revoh").currentTime = 0;
}
function resetonhover() {
    document.getElementById("hover").pause();
    document.getElementById("hover").currentTime = 0;
    document.getElementById("revoh").play();
}
function togglePlay() {
    isPlaying ? document.getElementById("audio").pause() : document.getElementById("audio").play();
};
    document.getElementById("audio").onplaying = function() {
    isPlaying = true;
    document.getElementById("muteicon").src = "https://cdn.discordapp.com/attachments/689158553138757649/1140294669364903996/unmuted.png";
};
    document.getElementById("audio").onpause = function() {
    isPlaying = false;
    document.getElementById("muteicon").src = "https://cdn.discordapp.com/attachments/689158553138757649/1140294669071298682/muted.png";
};
document.querySelectorAll("img").forEach(function (img) {
    img.addEventListener('mouseover', soundonhover);
});
document.querySelectorAll("img").forEach(function (img) {
    img.addEventListener('mouseout', resetonhover);
});
window.onload = randomSong();
window.onload = browserDetect();
window.onload = windowSize();
window.onresize = windowSize;
