const apikey = "1f16619820946295c600c1c3d7013207"
const url = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=rj&api_key=${apikey}&format=json&user=pathfinder2gami`

function browserDetect() {
    let userAgent = navigator.userAgent;
    let browserName;
    if ((navigator.userAgent.indexOf('OPR')) != -1 ) {
        browserName = "opera";
    } else if (navigator.userAgent.indexOf("Edg") != -1 ) { 
        browserName = "edge"; 
    } else if (navigator.userAgent.indexOf("Chrome") != -1 ) { 
        browserName = "chrome"; 
    } else if (navigator.userAgent.indexOf("Firefox") != -1 ) { 
        browserName = "firefox"; 
    };
    document.getElementById("browser").textContent = browserName;
    if (browserName != "firefox") {
        document.getElementById("chromium").style.visibility = `visible`;
    }
}
function GET(url) 
{
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, false);
    xhr.send(null);
    return xhr.responseText;
}
function gettrack(url)
{
    var json = JSON.parse(GET(url));
    var lasttrack = json.recenttracks.track[0]
    var track = lasttrack.name
    var tracklink = lasttrack.url
    var artist = lasttrack.artist['#text']
    //var cover = lasttrack.image[1]['#text']
    document.getElementById("track").textContent = artist + " - " + track;
    document.getElementById("track").href = tracklink;
    setTimeout(gettrack, 1000);
}
function uptime() {
    var start = new Date("Apr 4, 2008 09:00:00 GMT+0500");
    var now = new Date();
    let uptime = Math.abs(now.getTime() - start.getTime())/1000;
    let days = Math.round(uptime / 86400);
    let hours = Math.round((days * 24) - uptime / 3600);
    document.getElementById("uptime").textContent = days + " days, " + hours + " hours";
    setTimeout(uptime, 10);
}
gettrack(url);
browserDetect();
uptime();