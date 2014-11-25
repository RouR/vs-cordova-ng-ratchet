(function () {
    // Append the bind() polyfill
    var scriptElem = document.createElement('script');
    scriptElem.setAttribute('src', 'scripts/android2.3-jscompat.js');
    if (document.body) {
        document.body.appendChild(scriptElem);
    } else {
        document.head.appendChild(scriptElem);
    }

    var ratchetElem = document.createElement('link');
    ratchetElem.setAttribute('href', 'scripts/ratchet/dist/css/ratchet-theme-android.css');
    ratchetElem.setAttribute('rel', 'stylesheet');
    document.head.appendChild(ratchetElem);
}());