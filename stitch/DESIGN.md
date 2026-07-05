---
name: Signal Tile Bench
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#434655'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#737686'
  outline-variant: '#c3c6d7'
  surface-tint: '#0053db'
  primary: '#004ac6'
  on-primary: '#ffffff'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#b4c5ff'
  secondary: '#505f76'
  on-secondary: '#ffffff'
  secondary-container: '#d0e1fb'
  on-secondary-container: '#54647a'
  tertiary: '#943700'
  on-tertiary: '#ffffff'
  tertiary-container: '#bc4800'
  on-tertiary-container: '#ffede6'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#d3e4fe'
  secondary-fixed-dim: '#b7c8e1'
  on-secondary-fixed: '#0b1c30'
  on-secondary-fixed-variant: '#38485d'
  tertiary-fixed: '#ffdbcd'
  tertiary-fixed-dim: '#ffb596'
  on-tertiary-fixed: '#360f00'
  on-tertiary-fixed-variant: '#7d2d00'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
typography:
  headline-lg:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  label-caps:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
  mono-data:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  gutter: 16px
  margin: 24px
---

## Brand & Style
The design system is engineered for high-utility, deterministic environments where clarity and speed of information processing are paramount. The brand personality is professional, precise, and unobtrusive, catering to power users who require a high-density interface to manage complex signal data and workflows.

The visual style is **Minimalist / Corporate Modern**, stripping away all decorative flourishes in favor of functional geometry. The interface relies on structural integrity, consistent alignment, and a strict hierarchy to reduce cognitive load. The emotional response is one of reliability and control, ensuring that the tool feels like a dependable extension of the user's technical workflow.

## Colors
The palette is rooted in a neutral "Slate" scale to provide a stable, non-distracting background for data. 

- **Primary Action:** A high-contrast Blue (#2563EB) is reserved strictly for primary actions and active states.
- **Neutrals:** Used for structural elements, borders, and secondary text. The background is a clean, cool Slate-50.
- **Semantic Status:** These are the only vibrant colors used outside of primary actions. They provide immediate, pre-attentive signals:
    - **Ready (Green):** System or task is operational.
    - **Paused (Amber):** Manual intervention or standby.
    - **Error (Red):** Critical failure or blocked path.

## Typography
This design system utilizes **Inter** for its exceptional legibility at small sizes and its neutral, systematic character. For specific data-heavy strings such as timestamps, coordinates, or signal IDs, a monospaced font (JetBrains Mono) is introduced to ensure character alignment and readability.

- **Headlines:** Used sparingly for page and section titles.
- **Body:** The primary workhorse font, optimized for high-density layouts.
- **Labels:** Utilizes a bold, all-caps style for metadata headers to distinguish them from dynamic content.
- **Scale:** Sizes are kept small (13px-14px) to maximize information density without sacrificing legibility.

## Layout & Spacing
The layout follows a **Fixed-Fluid Hybrid** model. Navigation and sidebars are fixed-width to maintain consistent tool access, while the main workspace uses a fluid grid to maximize the "tile" bench area.

- **Grid:** A 12-column system is used for top-level layout, but individual "tiles" use an internal 4px baseline grid for precise alignment of dense data.
- **Density:** Spacing is tight (8px between related elements, 16px between groups) to allow as much data on screen as possible, reducing the need for scrolling.
- **Breakpoints:**
    - Desktop (1280px+): Full 12-column view.
    - Tablet (768px - 1279px): Sidebar collapses into an icon-only rail; content area remains fluid.

## Elevation & Depth
In keeping with the minimalist and high-density requirements, this design system avoids heavy shadows. Depth is communicated through **Tonal Layering** and **Low-Contrast Outlines**.

- **Level 0 (Background):** Surface Slate-50.
- **Level 1 (Cards/Tiles):** White surface with a 1px border (#E2E8F0). No shadow.
- **Level 2 (Modals/Popovers):** White surface with a 1px border and a subtle, tight shadow (0 4px 6px -1px rgba(0,0,0,0.1)) to provide focus.
- **Interaction:** Hover states on interactive tiles use a subtle background shift to Slate-100 rather than an elevation increase.

## Shapes
The shape language is "Soft" but disciplined. 

- **Primary UI Elements:** Buttons, inputs, and cards use a 4px (0.25rem) corner radius. This provides a professional, modern feel while maintaining the rigid structure of a utility tool.
- **Status Indicators:** Small circular dots or subtle "pill" tags are used for status labels to differentiate them from functional buttons.

## Components
Consistent styling across components ensures the bench remains predictable.

- **Compact Cards (Tiles):** Defined by a 1px Slate-200 border. Headers within tiles use a Slate-50 background to separate metadata from the main content area.
- **High-Contrast Buttons:**
    - **Primary:** Solid Blue-600 background with White text. Bold weight.
    - **Secondary:** Ghost style with Slate-200 border and Slate-700 text.
- **Toggle Switches:** Small, 32px width. Use a neutral Slate-300 for 'off' and Primary Blue-600 for 'on'. Transitions should be immediate (150ms).
- **Input Fields:** 32px height (compact). 1px border. Focus state uses a 2px Blue-600 ring with 0px offset.
- **Status Chips:** High-contrast background tints with dark text (e.g., Green-100 background with Green-800 text) for maximum legibility of system states.
- **Data Tables:** Borderless rows with 1px Slate-100 bottom dividers. Use `mono-data` typography for numerical values.