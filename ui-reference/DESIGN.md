# Design System Strategy: Kinetic Intensity

### 1. Overview & Creative North Star
**Creative North Star: "Kinetic Intensity"**
This design system rejects the "boxed-in" nature of standard fitness templates. Instead of a rigid grid of cards, we lean into **Kinetic Intensity**—an editorial approach that uses massive typographic scale, intentional asymmetry, and deep tonal layering to mimic the atmosphere of a high-end, private strength facility.

We move beyond the "template" look by treating the screen as a three-dimensional space. Elements should overlap, bleed off-canvas, and utilize high-contrast shifts between neon accents and obsidian voids. The goal is to make the user feel the "weight" and "energy" of the brand before they read a single word of copy.

---

### 2. Colors & Tonal Depth
Our palette is rooted in the absence of light, using neon green not just as a color, but as a light source.

*   **Primary (`#a4ffb9`)**: Use this sparingly for maximum conversion impact. It is your "focal point" color.
*   **Surface Hierarchy (The "No-Line" Rule)**: 
    *   **Prohibit 1px solid borders for sectioning.** To separate a "Features" section from a "Hero" section, shift from `surface` (#0e0e0e) to `surface-container-low` (#131313).
    *   **Nesting**: Treat the UI as layers of physical material. A card (`surface-container-highest`) should sit on a section (`surface-container-low`) to create a natural, sophisticated lift.
*   **The Glass & Gradient Rule**: 
    *   For floating navigation or overlaying stats, use **Glassmorphism**. Apply `surface-variant` at 40% opacity with a 20px-30px backdrop-blur. 
    *   Use a subtle linear gradient on primary CTAs: `primary` (#a4ffb9) to `primary-container` (#00fd87) at a 135-degree angle. This adds "soul" and prevents the neon from looking flat or "cheap."

---

### 3. Typography: The Editorial Voice
Typography is our primary visual driver. We pair the technical, aggressive precision of **Space Grotesk** with the clean, functional clarity of **Inter**.

*   **Display-LG (3.5rem / Space Grotesk)**: Reserved for hero statements. Use tight letter-spacing (-0.04em) to create a "block" of text that feels heavy and impactful.
*   **Headline-MD (1.75rem / Space Grotesk)**: Use for section starters. Experiment with "Asymmetric Indentation"—don't always left-align; sometimes push headlines to the right to break the visual expectation.
*   **Body-LG (1rem / Inter)**: Keep line-height generous (1.6) to ensure the high-contrast white text (#ffffff) remains readable against the deep black backgrounds without causing eye strain.

---

### 4. Elevation & Depth: Tonal Layering
In this system, shadows are light, and layers are defined by "mass."

*   **The Layering Principle**: Avoid the "drop shadow" tool. To lift an element, use the `surface-container-highest` token. If you need a "floating" effect (e.g., a sticky CTA), use an **Ambient Shadow**: Color = `on-surface` (#ffffff) at 4% opacity, Blur = 40px, Y-Offset = 20px. This mimics a natural glow rather than a muddy grey shadow.
*   **The "Ghost Border" Fallback**: If an element (like an input field) risks disappearing, use a "Ghost Border": `outline-variant` (#494847) at **15% opacity**. It should be felt, not seen.
*   **Glassmorphism**: Use for elements that need to feel high-tech (e.g., workout stats, member count). Use `surface-container-high` at 60% opacity with a heavy backdrop blur.

---

### 5. Components

**Buttons (Primary & Secondary)**
*   **Primary**: Background: `primary-container` (#00fd87); Text: `on-primary-fixed` (#004621). Corner radius: `xl` (1.5rem). No border.
*   **Secondary/Ghost**: Background: transparent; Border: `Ghost Border` (outline-variant at 20%); Text: `on-surface` (#ffffff).

**Cards (The Container-First Approach)**
*   **Rules**: Never use dividers. 
*   **Implementation**: Use `surface-container-low` (#131313) for the card body. Use `xl` (1.5rem) corner radius. Use vertical whitespace (32px–48px) to separate the headline from the body within the card.

**Input Fields**
*   **Style**: Use `surface-container-highest` (#262626) with no border. 
*   **Focus State**: Transition the background to `surface-bright` (#2c2c2c) and add a `primary` (#a4ffb9) glow (2px outer blur).

**Gym-Specific Components: "The Performance Stat"**
*   Create a custom component for displaying gym metrics (e.g., "50+ Classes"). Use `Display-MD` for the number and `Label-MD` for the description. Overlap these metrics slightly over high-action imagery to create a sense of depth and motion.

---

### 6. Do's and Don'ts

*   **DO**: Use massive amounts of negative space (80px–120px between sections). This creates the "Premium" feel.
*   **DO**: Use high-quality, desaturated photography. Let the `primary` green be the only vibrant color on the page.
*   **DON'T**: Use 100% white text for everything. Use `on-surface-variant` (#adaaaa) for secondary info to maintain a sophisticated visual hierarchy.
*   **DON'T**: Use "standard" 4px or 8px corners. Stick to the `xl` (1.5rem) or `lg` (1rem) tokens to ensure a modern, friendly yet high-end aesthetic.
*   **DO**: Experiment with "Kinetic Type"—allow your `display-lg` text to be partially obscured by a high-quality cutout of an athlete to create 3D space.