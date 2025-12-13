---
description: Add a new media mention (press)
---

1.  **Edit Data File**
    *   Open `js/data.js`.
    *   Locate the `media` object and its `list` array.

2.  **Add Media Object**
    *   There are two types of media items:

    **Type A: Simple Text Logo**
    ```javascript
    {
        type: "text",
        name: "Media Name", // e.g. "Le Monde"
        label: "Lire l'article",
        link: "https://link-to-article.com"
    },
    ```

    **Type B: Complex Logo (Text + Badge)**
    ```javascript
    {
        type: "complex",
        main: "Media Name",
        sub: "TV", // Small badge text
        label: "Voir l'interview",
        link: "https://link-to-video.com"
    },
    ```

3.  **Verify**
    *   Save `js/data.js`.
    *   Refresh `index.html`.
