---
description: Add a new distinction or award
---

1.  **Edit Data File**
    *   Open `js/data.js`.
    *   Locate the `distinctions` object and its `list` array.

2.  **Add Distinction Object**
    *   Insert a new object into the array:

    ```javascript
    {
        icon: "emoji_events", // Choose an icon from Google Material Symbols
        title: "Award Title",
        tag: "Optional Tag", // e.g. "International" or "2024"
        subtitle: "Organization or Event Name",
        description: "Brief description of the award and its significance."
    },
    ```

3.  **Verify**
    *   Save `js/data.js`.
    *   Refresh `index.html` to see the new item in the "Distinctions" section.
