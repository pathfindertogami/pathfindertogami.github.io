function browserDetect() {
    let userAgent = navigator.userAgent;
    let browserName;
    if ((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1 ) {
        browserName = "оперу";
    } else if (navigator.userAgent.indexOf("Edg") != -1 ) { 
        browserName = "эдж"; 
    } else if (navigator.userAgent.indexOf("Chrome") != -1 ) { 
        browserName = "хром"; 
    } else if (navigator.userAgent.indexOf("Firefox") != -1 ) { 
        browserName = "firefox"; 
    };
    document.getElementById("chrome").innerHTML="снеси" + " " + browserName;
    if (browserName != "firefox") {
        document.getElementById("chrome").style.display = `flex`;
        document.getElementById("main").style.display = `none`;
        document.getElementById("firefox").style.display = `flex`;
    }
}
function randomSong() {
    let min = Math.ceil(1);
    let max = Math.floor(13);
    let random = Math.floor(Math.random() * (max - min) + min);
    if (random == 1) {
        document.getElementById("audio").src = "https://audio.jukehost.co.uk/jAhLqGYIvSW9qwgaptyLDhIKVcj2jfB0" //byyourside
    } else if (random == 2) {
        document.getElementById("audio").src = "https://audio.jukehost.co.uk/ANUqEIrEdNaAFAhdDqiOXdZyMVL4T25E" //tussleamongtrees
    } else if (random == 3) {
        document.getElementById("audio").src = "https://audio.jukehost.co.uk/kIV5aMsrUHcgYuqOoq5z3JnoYz88EFt4" //aquifer
    } else if (random == 4) {
        document.getElementById("audio").src = "https://audio.jukehost.co.uk/MhoEruseoO7aNFh1CWXOJMoFBHB4gzex" //undertow
    } else if (random == 5) {
        document.getElementById("audio").src = "https://audio.jukehost.co.uk/A78R2kQyWVJqD6osXPEopDqGP302zyNo" //sinking
    } else if (random == 6) {
        document.getElementById("audio").src = "https://audio.jukehost.co.uk/cWpDr4JHa0ZgUh18Rv7xGZUKkRLP4Gix" //ahomeforflowerssunflower
    } else if (random == 7) {
        document.getElementById("audio").src = "https://audio.jukehost.co.uk/AGCggHySS3Dkk5j0cHsttxb7JbHQyGA5" //whereweusedtoplay
    } else if (random == 8) {
        document.getElementById("audio").src = "https://audio.jukehost.co.uk/3pGyQPezHLVYTMsrPIlfxaazEBmfABtI" //ahomeforflowerstulip
    } else if (random == 9) {
        document.getElementById("audio").src = "https://audio.jukehost.co.uk/XxaQGl2XoK95eDKSJZKdAKJ535hTqZXH" //remembertobepatient
    } else if (random == 10) {
        document.getElementById("audio").src = "https://audio.jukehost.co.uk/Olx6arQCYgjuD3QIQgP5inY2sSg1Ohsc" //ahomeforflowersdaisy
    } else if (random == 11) {
        document.getElementById("audio").src = "https://audio.jukehost.co.uk/QGOmzwJxYJ7ZvwbhyQvq1NHRFiJS7nme" //ahomeforflowersempty
    } else if (random == 12) {
        document.getElementById("audio").src = "https://audio.jukehost.co.uk/2VR8bSLZoiYm4TC81sBCycQH9d8iJOD0" //spacesinbetween
    } else if (random == 13) {
        document.getElementById("audio").src = "https://audio.jukehost.co.uk/fBL7XcbWYSUqba4uht7RDXanZvHXqaWx" //theeleganceofthemysteriousanddistant
    }
}
window.onload = randomSong();
window.onload = browserDetect();