document.addEventListener("DOMContentLoaded", function () {
    // JSON Data stored directly in the JS file
    const works = [
        { "title": "Project 1", "url": "works/task1/index.html" },
        { "title": "Project 2", "url": "works/task2/index.html" },
        { "title": "Project 3", "url": "works/task3/index.html" },
        { "title": "Project 4", "url": "works/task4/index.html" },
        { "title": "Project 5", "url": "works/task5/index.html" },
        { "title": "Project 6", "url": "works/task6/index.html" },
        { "title": "Project 7", "url": "works/task7/index.html" },
        { "title": "Project 8", "url": "works/task8/index.html" },
        { "title": "Project 9", "url": "works/task9/index.html" },
        { "title": "Project 10", "url": "works/task10/index.html" },
        { "title": "Project 11", "url": "works/task11/index.html" },
        { "title": "Project 12", "url": "works/task12/index.html" },
        { "title": "Project 13", "url": "works/task13/index.html" },
        { "title": "Project 14", "url": "works/task14/index.html" },
        { "title": "Project 15", "url": "works/task15/index.html" },
        { "title": "Project 16", "url": "works/task16/index.html" }
    ];

    let navList = document.getElementById("nav_list");
    let contentFrame = document.getElementById("content_frame");

    // Generate Navigation Menu
    works.forEach(task => {
        let listItem = document.createElement("li");
        listItem.textContent = task.title;
        listItem.classList.add("nav_item");

        // Change iframe source on click
        listItem.onclick = function () {
            contentFrame.src = task.url;
        };

        navList.appendChild(listItem);
    });
});
