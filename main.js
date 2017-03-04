var storage = (function() {

    var repos = [{
            name: "JMDb",
            date: "Mars 2017",
            link: "https://jesperengstrom.github.io/JMDb/",
            ghlink: "https://github.com/jesperengstrom/JMDb",
            description: "An exersise in using JavsScript design patterns, closures and scope by building a mock movie database.",
        },
        {
            name: "Asap Development",
            date: "Januari 2017",
            link: "https://danteuh.github.io/asap-development/",
            ghlink: "https://github.com/DanteUh/asap-development/",
            description: "A collaborative exercise in HTML5, SASS & Bootstrap with the task to build a website for a fake web development agency.",
        },
        {
            name: "Sänka skepp",
            date: "December 2016",
            link: "https://jesperengstrom.github.io/battleship/",
            ghlink: "https://github.com/jesperengstrom/battleship",
            description: "A thing I made on the side to practice JavaScript, My fist attempt at making a game.",
        },
        {
            name: "ToDo",
            date: "November 2016",
            link: "https://jesperengstrom.github.io/todo/",
            ghlink: "https://github.com/jesperengstrom/todo",
            description: "A small school exercise in using arrays and the DOM.",
        },
        {
            name: "Foodie",
            date: "November 2016",
            link: "https://jesperengstrom.github.io/foodie/",
            ghlink: "https://github.com/jesperengstrom/foodie",
            description: "A small school exercise in using objects, functions and the DOM.",
        }
    ];

    return {
        getAll: function() {
            console.log("works here");
            return printItems(repos);
        }
    };
})();


function printItems(items) {
    let main = document.getElementById("mainbox");
    for (let item of items) {
        main.innerHTML +=
            `<p class="tooltip"><span class="tooltiptext">${item.description}</span>
            <a class="title" href="${item.link}">${item.name}</a> 
            <a class="repo" href="${item.ghlink}">[repo]</a> 
            </span><span class="date">${item.date}</span></p>
        `

    }

}


(function() {
    let start = window.addEventListener("DOMContentLoaded", storage.getAll());
})();