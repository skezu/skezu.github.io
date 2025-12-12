tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "berkeley-blue": "#003262", // Deep Navy
                "stanford-red": "#8C1515", // Subtle nod if needed, but primary is Navy
                "antique-gold": "#B08D55", // Bronze/Gold accents
                "cream": "#F9F8F4", // Off-white background
                "paper": "#ffffff",
                "dark-paper": "#0a1929",
            },
            fontFamily: {
                "serif": ["Playfair Display", "serif"],
                "sans": ["Inter", "sans-serif"]
            },
            borderRadius: {
                "none": "0",
                "sm": "0.125rem",
                "DEFAULT": "0.25rem",
                "md": "0.375rem",
                "lg": "0.5rem",
                "xl": "0.75rem",
                "2xl": "1rem",
            },
            backgroundImage: {
                'academic-gradient': 'linear-gradient(to right, rgba(0, 50, 98, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 50, 98, 0.05) 1px, transparent 1px)',
            }
        },
    },
}
