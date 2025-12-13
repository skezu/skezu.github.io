---
description: Add a new project to the portfolio
---

1.  **Prepare Image**
    *   Place your project image in `assets/images/`.
    *   Example name: `my-new-project.jpg`.

2.  **Edit Data File**
    *   Open `js/data.js`.
    *   Locate the `projects` object and its `list` array.

3.  **Insert New Project Object**
    *   Add the following object to the `list` array:

    ```javascript
    {
        title: "Project Title",
        category: "Category Name",
        image: "assets/images/my-new-project.jpg",
        description: "Your project description here. You can use HTML tags like <span class='font-medium'>bold</span>.",
        icons: [
            { icon: "code", title: "Technology" },
            { icon: "psychology", title: "Concept" }
        ],
        link: "#" // URL to project details
    },
    ```

4.  **Verify**
    *   Save `js/data.js`.
    *   Refresh `index.html` to see the new project card.
