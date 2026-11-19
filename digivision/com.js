function getcurpath() {
    let fullurl = window.location.toString();
    urlbox = fullurl.split("#");
    let cururl = urlbox[1];
    return cururl;
}