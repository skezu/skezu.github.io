---
trigger: always_on
description: Portfolio Design & Architecture Guidelines
---

# Portfolio Design & Architecture

## 1. Architecture: Separation of Concerns

The project follows a strict separation of concerns to ensure maintainability and ease of editing.

*   **View (`index.html`)**: Contains the skeleton structure. **Do not** hardcode text content here unless it's structural (like navigation labels that never change).
*   **Data (`js/data.js`)**: The single source of truth for all content.
    *   **Rule**: If you need to change text, link an image, or add a project, edit this file.
    *   **Format**: JSON-like JavaScript object `portfolioData`.
*   **Logic (`js/app.js`)**: Handles rendering data into the HTML.
    *   **Rule**: Use `setText(id, value)` or template literals to inject data.
*   **Styles**:
    *   **Tailwind**: Primary styling method. Use utility classes.
    *   **`css/style.css`**: Only for specific overrides, animations, or fonts not handled by Tailwind config.
    *   **`js/tailwind-config.js`**: Custom Tailwind configuration (colors, fonts).

## 2. Design System

### Colors
Use the defined Tailwind custom colors to maintain the premium academic aesthetic.
*   **Primary**: `text-berkeley-blue` / `bg-berkeley-blue` (#003262)
*   **Accent**: `text-antique-gold` / `bg-antique-gold` (#B08D55)
*   **Background**: `bg-cream` (#F9F8F4)
*   **Text**: `text-slate-600` (Body), `text-berkeley-blue` (Headings)

### Typography
*   **Headings**: `font-serif` ("Playfair Display"). Use for titles, names, and impactful quotes.
*   **Body**: `font-sans` ("Inter"). Use for descriptions, buttons, and navigation.

### Visual Elements
*   **Animations**: content should fade in gracefully (`animate-[fadeIn_..._forwards]`).
*   **Shadows**: Use soft shadows (`shadow-sm` -> `shadow-xl` on hover).
*   **Texture**: Backgrounds often use `bg-texture` for a subtle academic feel.

## 3. Workflow for New Content

### Adding a New Section or Page
1.  **Update `index.html`**: Create the section structure with unique IDs (e.g., `id="new-section-title"`).
2.  **Update `js/data.js`**: Add a new key for the section content (e.g., `newSection: { title: "..." }`).
3.  **Update `js/app.js`**: Create a render function (e.g., `renderNewSection()`) and call it in `renderPortfolio()`.

### Adding Images
*   **Location**: Always store images in `assets/images/`.
*   **Reference**: Use relative paths in `js/data.js` (e.g., `"assets/images/my-photo.jpg"`).

## 4. Coding Standards
*   **Icons**: Use Material Symbols Outlined.
*   **Responsiveness**: Always test `md:` and `lg:` breakpoints. The site must be mobile-first.
*   **Performance**: Avoid heavy libraries. The current stack (Vanilla JS + Tailwind CDN) is intentional for simplicity and speed.