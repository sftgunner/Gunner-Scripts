function surveillance(){
    localStorage.destination = "surveillance"
}
function hasher(){
    localStorage.destination = "hidden/md5_hasher"
}
function hasher2(){
    localStorage.destination = "hidden/sha256_hasher"
}

function desktopMB(){
    var executed = "none";
    document.write('<ul>\
                   <li class="dropdown">\
                   <a href="http://www.gunner.online/index.html"\
                   ')
    if (localStorage.directory == "home"){
        document.write('class = "active"')
    }
    else{
        document.write('class="dropbtn"')
    }
    document.write('>Home</a>\
                   <div class="dropdown-content">\
                   <a href="http://www.gunner.online/aboutIndex.html">About</a>\
                   <a href="http://www.gunner.online/contact.html">Contact me</a>\
                   <a href="http://www.gunner.online/home.html">Default home page</a>\
                   ')
    if (localStorage.betaPriv == "true"){
        document.write('<a href="http://www.gunner.online/beta/homeBetaRedirect.html">Beta Home Page</a>\
                       ');
    }
    else{
    }
    document.write('</div>\
                   </li>\
                   <li class="dropdown">\
                   <a href="http://www.gunner.online/documents.html"')
    if (localStorage.directory == "documents"){
        document.write('class = "active"')
    }
    else{
        document.write('class="dropbtn"')
    }
    document.write('>Documents</a>\
                   <div class="dropdown-content">\
                   <a href="http://www.gunner.online/academia.html">Academia (WIP)</a>\
                   <a href="http://www.gunner.online/techDocs.html">Tech Guides (WIP)</a>\
                   </div>\
                   </li>\
                   <li class="dropdown">\
                   <a href="http://www.gunner.online/games.html" ')
    if (localStorage.directory == "games"){
        document.write('class = "active"')
    }
    else{
        document.write('class="dropbtn"')
    }
    document.write('>Games</a>\
                   <div class="dropdown-content">\
                   <a href="http://www.gunner.online/numberGuesserLatest.html">Number Guesser</a>\
                   <a href="http://www.gunner.online/piFinder.html">Pi Finder</a>\
                   <a href="http://www.gunner.online/rockPaperScissorsLatest.html">Rock Paper Scissors</a>\
                   </div>\
                   </li>\
                   <li class="dropdown">\
                   <a href="http://www.gunner.online/media.html"')
    if (localStorage.directory == "media"){
        document.write('class = "active"')
    }
    else{
        document.write('class="dropbtn"')
    }
    document.write('>Media</a>\
                   <div class="dropdown-content">\
                   <a href="http://www.gunner.online/imageGallery.html">Photo Gallery (disabled)</a>\
                   <a href="http://www.gunner.online/videoGallery.html">Video Gallery</a>\
                   </div>\
                   </li>\
                   <li class="dropdown">\
                   <a href="http://www.gunner.online/tools.html" ')
    if (localStorage.directory == "tools"){
        document.write('class = "active"')
    }
    else{
        document.write('class= "dropbtn"')
    }
    document.write('>Tools/Utilities</a>\
                   <div class="dropdown-content">\
                   ')
    if (localStorage.betaPriv == "true"){
        document.write('<a href="http://www.gunner.online/hidden/cleanse.html">Local Storage Cleanser</a>\
                       <a href="http://www.gunner.online/hidden/maintainance.html">Maintainance Site</a>\
                       ')
    }
    else{
    }
    document.write('<a href="http://www.gunner.online/adminFilter.html" onClick="return hasher()">MD5 Hasher</a>\
                   <a href="http://www.gunner.online/adminFilter.html" onClick="return hasher2()">SHA256 Hasher</a>\
                   <a href="http://www.gunner.online/primeFinder.html">Prime Finder</a>\
                   </div>\
                   </li>\
                   <li class="dropdown">\
                   <a href="http://www.gunner.online/externalLinks.html"')
    if (localStorage.directory == "external"){
        document.write('class = "active"')
    }
    else{
        document.write('class="dropbtn"')
    }
    document.write('>Useful Websites</a>\
                   <div class="dropdown-content">\
                   <a href="https://www.google.co.uk">Google</a>\
                   <a href="https://www.apple.co.uk">Apple</a>\
                   <a href="https://www.bbc.co.uk">BBC</a>\
                   <a href="https://www.dropbox.com/login/">Dropbox</a>\
                   <a href="https://www.linustechtips.com/main">LinusTechTips</a>\
                   <a href="https://portal.office365.com">Outlook Online</a>\
                   <a href="https://www.synology.co.uk">Synology</a>\
                   <a href="https://www.wolframalpha.com">Wolfram Alpha</a>\
                   <a href="https://www.youtube.com/feed/subscriptions">Youtube</a>\
                   <a href="https://www.youtube.com/channel/UCicjrjHFJtrN7Gg9OlLG7dg">Youtube Channel</a>\
                   </div>\
                   </li>\
                   ');
    if (localStorage.betaPriv == "true"){
        document.write('<li class="dropdown">\
                       <a href="http://www.gunner.online/development.html" ')
        if (localStorage.directory == "development"){
            document.write('class = "active"')
        }
        else{
            document.write('class="dropbtn"')
        }
        document.write('>Development</a>\
                       <div class="dropdown-content">\
                       <a href="http://betasite.gunner.online/test.html">Test Site</a>\
                       <a href="http://betasite.gunner.online/gunSystemsBeta.html">GunSystems</a>\
                       <a href="http://betasite.gunner.online/musicLibrary.html">Music library</a>\
                       <a href="http://betasite.gunner.online/videoGalleryBeta.html">Video Gallery v2.1</a>\
                       </div>\
                       </li>\
                       <li class="dropdown">\
                       <a href="http://www.gunner.online/legacy.html" ')
        if (localStorage.directory == "legacy"){
            document.write('class = "active"')
        }
        else{
            document.write('class="dropbtn"')
        }
        document.write('>Legacy Sites</a>\
                       <div class="dropdown-content">\
                       <a href="http://www.gunner.online/hidden/videoGalleryLegacy.html">Video Gallery LEGACY</a>\
                       <a href="http://www.gunner.online/beta/landingPageChangelog.html">landingPageChangelog</a>\
                       <a href="http://www.gunner.online/testFiles/progressBarTest.html">Progress bar test</a>\
                       <a href="http://www.gunner.online/beta/toytimeAllocator0.1.html">Toytime Allocator</a>\
                       <a href="http://www.gunner.online/testFiles/table.html">Table</a>\
                       </div>\
                       </li>\
                       ');
    }
    else{
    }
    document.write('<li style="float:right"><a id = username ')
    if (localStorage.directory == "login"){
        document.write('class = "active"')
    }
    else{
        document.write('class="dropbtn"')
    }
    document.write(' href="http://www.gunner.online/hidden/construction.html">')
    if (localStorage.username == null){
        document.write('Login')
    }
    else{
        document.write(localStorage.username)
    }
    document.write('</a></li>\
                   </ul>\
                   ');
    console.log("Desktop version of the Menu Bar has been loaded and applied.")
}

    var onerun = 0
function mobileMB(){
    if (onerun < 1){
    document.write('<ul>\
                   <li class="dropdown"><a class="dropbtn" class = "menubar" href="http://www.gunner.online/#">&#9776;</a>\
                   <div class="dropdown-content">\
                   <a href="http://www.gunner.online/home.html">Home</a>\
                   <a href="http://www.gunner.online/documents.html">Documents</a>\
                   <a href="http://www.gunner.online/construction_mobile.html">Games</a>\
                   <a href="http://www.gunner.online/media.html">Media</a>\
                   <a href="http://www.gunner.online/tools.html">Tools\\Utilities</a>\
                   <a href="http://www.gunner.online/externalLinks.html">Useful Websites</a>\
                   <a href="http://www.gunner.online/aboutIndex.html">About</a>\
                   </div>\
                   </li>\
                   </ul>\
                   ');
    console.log("Mobile version of the Menu Bar has been loaded and applied.")
    console.log("onerun is "+onerun)
    onerun = onerun + 1
    }
    else{
        console.warn("Menubar attempted to run "+onerun+" times")
    }
}
