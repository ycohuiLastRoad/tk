window.onload = onLoadCheck();

function delCookie() {
    document.cookie = "bgColour=;expires=Thu, 01 Jan 1970 00:00:01 GMT;SameSite=Lax;path=/;"
    document.cookie = "uid=;expires=Thu, 01 Jan 1970 00:00:01 GMT;SameSite=Lax;path=/;"
}

function cookieOnLoad() {
    var diss = document.getElementById('cookiePref');
    diss.style.display = 'none';
    setTimeout((diss.style.display = 'block'), 5000);
}

function onLoadCheck() {
    if(document.cookie == ""){
        // first time
        cookieOnLoad();
    } else if (document.cookie.split('; ').some((item) => item.trim().startsWith('bgColour='))) {
        document.body.style.backgroundColor = getCookie("bgColour");
    } 
}

function getCookie(id) {
    return document.cookie.split('; ').find(row => row.startsWith(id+'=')).split('=')[1];
}

function reject() {
    document.cookie = "uid=" + randomString(32) + "; path=/; SameSite=lax;";    
    document.getElementById('cookiePref').style.display = "none";
    alert("You've Rejected Non-necessary Cookies.");
    setBgColor();
    document.cookie = "bgColour=;expires=Thu, 01 Jan 1970 00:00:01 GMT;SameSite=Lax;path=/;"
}

function accept() {
    document.cookie = "uid=" + randomString(32) + "; path=/; SameSite=lax;";    
    document.getElementById('cookiePref').style.display = "none";
    setBgColor();
}

function setBgColor() {
    var etad = new Date()
    var color; 
    do {
        color = prompt("Choose your background color\nEither CSS Colour or Hex Colour (AlphaNumeric)");
    } while (!(isHexColor(color) || isColour(color)))
    if(isHexColor(color)) {
        // Hex Colour
        // cookie = # + color;
        document.cookie = "bgColour=#" + color + ";expires=" + new Date(etad.setTime(etad.getTime() + 86400000)).toUTCString() + "; path=/; SameSite=lax;";
        console.log("bgColour=#" + color + ";expires=" + new Date(etad.setTime(etad.getTime() + 86400000)).toUTCString() + "; path=/; SameSite=lax;");
    } else {
        // Str Colour
        // cookie = color
        document.cookie = "bgColour=" + color + ";expires=" + new Date(etad.setTime(etad.getTime() + 86400000)).toUTCString() + "; path=/; SameSite=lax;";
        console.log("bgColour=" + color + ";expires=" + new Date(etad.setTime(etad.getTime() + 86400000)).toUTCString() + "; path=/; SameSite=lax;");
    }
}

function isHexColor (hex) {
  return typeof hex === 'string'
      && hex.length === 6
      && !isNaN(Number('0x' + hex))
}

function isColour(strColour){
    var s = new Option().style;
    s.color = strColour;
    return s.color == strColour.toLowerCase();
}

function randomString(length) {
    var chars = '0123456789abcdefghijklmnopqrstuvwxyz';
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}

function resetCookies() {
    delCookie();
    window.location.reload();
}

function xbar() {
    document.getElementById('cookieBar').style.display = "none";
}