"use strict";

var storage = function () {

    var repos = [{
        name: "Front End blog",
        date: "May 2017",
        link: "http://fontendblog.rf.gd/",
        ghlink: "https://github.com/phpgrupp/simple-cms",
        description: "Me & two classmates built this blog and CMS from ground up using PHP and MySQL database. Includes registering, login and full admin panel functionality."
    }, {
        name: "Talartoppen",
        date: "April 2017",
        link: "http://jesperengstrom.se/Talartoppen/",
        ghlink: "https://github.com/jesperengstrom/Talartoppen",
        description: "An exersise in using async JS & Ajax. Ranks the politicians that debate the most in the Swedish parliament."
    }, {
        name: "JMDb",
        date: "March 2017",
        link: "http://jesperengstrom.se/JMDb/",
        ghlink: "https://github.com/jesperengstrom/JMDb",
        description: "An exersise in using JavsScript design patterns, closures and scope by building a mock movie database."
    }, {
        name: "Asap Development",
        date: "January 2017",
        link: "https://danteuh.github.io/asap-development/",
        ghlink: "https://github.com/DanteUh/asap-development/",
        description: "A collaborative exercise in HTML5, SASS & Bootstrap with the task to build a website for a fake web development agency."
    }, {
        name: "Sänka skepp",
        date: "December 2016",
        link: "http://jesperengstrom.se/battleship/",
        ghlink: "https://github.com/jesperengstrom/battleship",
        description: "A thing I made on the side to practice JavaScript, My fist attempt at making a game."
    }, {
        name: "ToDo",
        date: "November 2016",
        link: "http://jesperengstrom.se/todo/",
        ghlink: "https://github.com/jesperengstrom/todo",
        description: "A small school exercise in using arrays and the DOM."
    }];

    return {
        getAll: function getAll() {
            return printItems(repos);
        }
    };
}();

function printItems(items) {
    var main = document.getElementById("mainbox");

    var html = items.map(function (el) {
        return "<p class=\"tooltip\"><span class=\"tooltiptext\">" + el.description + "</span>\n             <a class=\"title\" href=\"" + el.link + "\" target=\"_blank\">" + el.name + "</a> \n            <a class=\"repo\" href=\"" + el.ghlink + "\" target=\"_blank\">[repo]</a> \n             </span><span class=\"date\">" + el.date + "</span></p>";
    }).join("");

    main.innerHTML = html;
}

(function () {
    var start = window.addEventListener("DOMContentLoaded", storage.getAll());
})();