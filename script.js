document.addEventListener("DOMContentLoaded", function () {
    // JSON Data stored directly in the JS file
    const works = 
        [
            { "title": "Task 1-HTML Styling", "url": "project/task1/index.html" },
            { "title": "Task 2-Dashboard", "url": "project/task2/index.html" },
            { "title": "Task 3-CSS Hover", "url": "project/task3/index.html" },
            { "title": "Task 4-Alert", "url": "project/task4/index.html" },
            { "title": "Task 5-Calculator", "url": "project/task5/index.html" },
            { "title": "Task 6-String Operation", "url": "project/task6/index.html" },
            { "title": "Task 7-Grade Calculator", "url": "project/task7/index.html" },
            { "title": "Task 8-Stack", "url": "project/task8/index.html" },
            { "title": "Task 9-Loops", "url": "project/task9/index.html" },
            { "title": "Task 10-Sum", "url": "project/task10/index.html" },
            { "title": "Task 11-Personal INFO", "url": "project/task11/index.html" },
            { "title": "Task 12-Search Bar", "url": "project/task12/index.html" },
            { "title": "Task 13-Dynamic func", "url": "project/task13/index.html" },
            { "title": "Task 14-Rand", "url": "project/task14/index.html" },
            { "title": "Task 15-Checkout", "url": "project/task15/index.html" },
            { "title": "Task 16-Age Calculator", "url": "project/task16/index.html" }
        ]
        

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
