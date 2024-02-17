const apikey = "1f16619820946295c600c1c3d7013207"
const url = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=rj&api_key=${apikey}&format=json&user=pathfinder2gami`
const srcs = ["https://audio.jukehost.co.uk/qUBzBGj6A27I0dnZVIlHNgdUQyaFYon3", "https://audio.jukehost.co.uk/OVUOYC1xdXVzmD1YGenMJgQCEVyPbV1l", "https://audio.jukehost.co.uk/jVDCC0mZO2S3avlsXPhaK3CPyKl97kpO", "https://audio.jukehost.co.uk/ARcGEWKkOJZnanKoP2KvxiZM2jCoQXti", "https://audio.jukehost.co.uk/OD4yHVKTdBGs3X3H23imJqBoScD0lM93", "https://audio.jukehost.co.uk/ABBW7H2bW0CaLznwkOdWj3qnl8MWkoFB", "https://audio.jukehost.co.uk/6FpCahgUG0ssMHBQkk8uVIyJRlG48SPX", "https://audio.jukehost.co.uk/LTE1naPNs1uPfJqurhnbbZJ3jnGzD57i", "https://audio.jukehost.co.uk/hjCFYRlpIrJIAcdVWLaWxsQcKo4cJGGU", "https://audio.jukehost.co.uk/vP3wudU5JRNkFDGpKCvWLY7uFFnMiTdj", "https://audio.jukehost.co.uk/KtMM4u2EKHhP7j7FaoUPEyOhivzz0l5Y", "https://audio.jukehost.co.uk/6G5vaA8MydrVUj1Vap84ob0LtehiOzm4", "https://audio.jukehost.co.uk/qY4xWAdJz5jDLavbAx8vpdrTvupeTpFl", "https://audio.jukehost.co.uk/RZCnFjQWzglcVI2rHC9CjO9CoZrfRxDd"];
const names = ["addiction.mod", "0-insnej.xm", "chucks_song_35.s3m", "ff.s3m", "furious.s3m", "jogeir_liljedahl_-_infinity.mod", "laban2.mod", "lhs_obus.mod", "prodigy_-_sometimes.mod", "se-pd2.xm", "space_walk.mod", "stormeag.mod", "swing_your_legs.mod", "testtest.xm"]
const tracks = ["https://modarchive.org/index.php?request=view_by_moduleid&query=167100", "https://modarchive.org/index.php?request=view_by_moduleid&query=162098", "https://modarchive.org/index.php?request=view_by_moduleid&query=69007", "https://modarchive.org/index.php?request=view_by_moduleid&query=41904", "https://modarchive.org/index.php?request=view_by_moduleid&query=69231", "https://modarchive.org/index.php?request=view_by_moduleid&query=165651", "https://modarchive.org/index.php?request=view_by_moduleid&query=47208", "https://modarchive.org/index.php?request=view_by_moduleid&query=171963", "https://modarchive.org/index.php?request=view_by_moduleid&query=168070", "https://modarchive.org/index.php?request=view_by_moduleid&query=56013", "https://modarchive.org/index.php?request=view_by_moduleid&query=77561", "https://modarchive.org/index.php?request=view_by_moduleid&query=60274", "https://modarchive.org/index.php?request=view_by_moduleid&query=78676", "https://modarchive.org/index.php?request=view_by_moduleid&query=168435"]

function browserDetect() {
    let userAgent = navigator.userAgent;
    let browserName;
    if ((navigator.userAgent.indexOf('YaBrowser')) != -1 ) {
        browserName = "иди нахуй";
    } else if (navigator.userAgent.indexOf("Edg") != -1 ) { 
        browserName = "uninstall this shit"; 
    } else if (navigator.userAgent.indexOf("Chrome") != -1 ) { 
        browserName = "chrome";
    } else if (navigator.userAgent.indexOf("OPR") != -1 ) {
        browserName = "kill yourself";
    }  else if (navigator.userAgent.indexOf("Firefox") != -1 ) { 
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
    let hour = Math.round((days * 24) - uptime / 3600);
    let hours = Math.abs(hour);
    document.getElementById("uptime").textContent = days + " days, " + hours + " hours";
    setTimeout(uptime, 10);
}
function setbgm() {
    rand = Math.floor(Math.random() * 14);
    document.getElementById("bgm").src = srcs[rand];
    document.getElementById("mod").href = tracks[rand];
    document.getElementById("mod").textContent = names[rand];
}
gettrack(url);
browserDetect();
uptime();
setbgm();