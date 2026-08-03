---
name: Avenzon Global
colors:
  surface: '#faf8ff'
  surface-dim: '#d9d9e5'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3fe'
  surface-container: '#ededf9'
  surface-container-high: '#e7e7f3'
  surface-container-highest: '#e1e2ed'
  on-surface: '#191b23'
  on-surface-variant: '#434655'
  inverse-surface: '#2e3039'
  inverse-on-surface: '#f0f0fb'
  outline: '#737686'
  outline-variant: '#c3c6d7'
  surface-tint: '#0053db'
  primary: '#004ac6'
  on-primary: '#ffffff'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#b4c5ff'
  secondary: '#855300'
  on-secondary: '#ffffff'
  secondary-container: '#fea619'
  on-secondary-container: '#684000'
  tertiary: '#4e5566'
  on-tertiary: '#ffffff'
  tertiary-container: '#666d7f'
  on-tertiary-container: '#ecf0ff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#ffddb8'
  secondary-fixed-dim: '#ffb95f'
  on-secondary-fixed: '#2a1700'
  on-secondary-fixed-variant: '#653e00'
  tertiary-fixed: '#dce2f7'
  tertiary-fixed-dim: '#c0c6db'
  on-tertiary-fixed: '#141b2b'
  on-tertiary-fixed-variant: '#404758'
  background: '#faf8ff'
  on-background: '#191b23'
  surface-variant: '#e1e2ed'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 60px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-xl:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 30px
    fontWeight: '600'
    lineHeight: 38px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 8px
  sm: 16px
  md: 24px
  lg: 48px
  xl: 80px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
---

## Brand & Style
The design system is built for a premium multi-vendor marketplace that prioritizes trust, technological precision, and a high-fidelity shopping experience. The visual language is rooted in **Modern Minimalism** with **Glassmorphic** accents, drawing inspiration from high-end SaaS and consumer electronics interfaces.

The atmosphere is spacious and editorial, utilizing significant whitespace to allow high-quality product photography to breathe. It evokes a sense of global reliability and "quiet luxury"—where the interface recedes to highlight the value of the marketplace offerings.

## Colors
The palette is anchored by a professional Primary Blue, signifying stability and technological depth. Accent Amber is used sparingly for high-intent actions (e.g., "Buy Now," Limited Offers) and to signal premium status.

Dark Charcoal is reserved for core typography and deep-contrast elements. The background strategy utilizes White for primary surfaces and Light Gray for grouping sections and secondary containers, creating a clear architectural distinction between different vendors or content blocks.

## Typography
This design system employs **Inter** for its neutral, systematic clarity. The hierarchy is driven by extreme contrast between bold, tight-tracked display headings and functional, open body text. 

Headlines use negative letter-spacing to create a "locked-in," professional editorial look. Labels are often treated with uppercase transforms and increased tracking to provide a technical, "data-rich" feel suitable for a global marketplace.

## Layout & Spacing
The layout follows a **Fluid Grid** model with a maximum container width to maintain legibility on ultra-wide displays. Spacing is generous, utilizing an 8px base unit to ensure rhythmic consistency.

- **Desktop (1200px+):** 12-column grid, 48px margins, 24px gutters.
- **Tablet (768px - 1199px):** 8-column grid, 32px margins, 20px gutters.
- **Mobile (Up to 767px):** 4-column grid, 16px margins, 16px gutters.

Horizontal sections should utilize the `xl` spacing (80px) to create the "spacious" premium feel, allowing product categories to stand out as distinct "chapters" of the experience.

## Elevation & Depth
Depth is communicated through a combination of **Ambient Shadows** and **Glassmorphism**. Surfaces use a "layered" approach:

1.  **Floor:** The primary background (#FFFFFF or #F8FAFC).
2.  **Card Level:** 1px border (#E2E8F0) with a very soft, diffused shadow (0px 4px 20px rgba(0,0,0,0.03)).
3.  **Floating/Overlay:** Glassmorphic panels using `backdrop-filter: blur(12px)` and 80% opacity backgrounds. These are used for navigation bars, filter menus, and quick-view modals.

Avoid heavy shadows. Instead, use thin, light borders to define boundaries, relying on shadows only to indicate interactivity or physical stacking.

## Shapes
The shape language is refined and approachable. The design system uses a standard `rounded-md` (0.5rem/8px) for small interactive elements like inputs and buttons, while larger containers like cards and featured hero banners use `rounded-xl` (1.5rem/24px) to create a friendly yet modern silhouette.

Buttons should never be fully pill-shaped (except for tags/chips); they should maintain a structured, sophisticated corner radius.

## Components

### Buttons
- **Primary:** Solid #2563EB with white text. Subtle 2px inner-glow on hover to simulate tech-inspired lighting.
- **Secondary:** Transparent background with #111827 border and text.
- **Accent:** Solid #F59E0B for "Flash Sales" or "Add to Cart" to draw immediate focus.

### Cards
Cards are the core of the marketplace. They feature a 1px #F1F5F9 border, no shadow in rest state, and a soft elevation shadow on hover. Images should have a subtle zoom-in transition effect on hover to enhance the "high-fidelity" feel.

### Input Fields
Inputs are minimalist: a 1px border that shifts to Primary Blue on focus. Labels sit above the field in `label-sm` style. Use a light gray (#F1F5F9) fill for "disabled" or "read-only" states.

### Chips & Badges
Small, rounded-full elements. Use for "New Arrival," "Verified Vendor," or "Free Shipping." Badges use low-saturation background tints (e.g., 10% opacity of the primary color) to remain sophisticated rather than loud.

### Glassmorphic Navigation
The main header is sticky, featuring a white background at 85% opacity with a heavy backdrop-blur. This keeps the user grounded in the global context as they scroll through dense product listings.