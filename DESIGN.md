# Design System

<!-- impeccable:design-schema 1 -->

## Visual World

Dark cinematic editor portfolio. Deep black stage, warm amber/orange light as accent, editorial typography, and poster-like project cards.

## Color Strategy

Restrained dark with a committed warm accent.

| Role | Value | Usage |
|------|-------|-------|
| Background | #050505 | Page ground |
| Surface | #0f0f10 | Cards, nav |
| Border | #1f1f22 | Subtle separators |
| Text primary | #fafafa | Headings, body |
| Text muted | #a1a1aa | Captions, secondary |
| Accent | #f59e0b | CTAs, highlights, hover states |
| Accent glow | rgba(245,158,11,0.2) | Glows, focus rings |

## Typography

- **Display/Headings**: Space Grotesk, 700–500.
- **Body**: Inter, 400–500.
- **Labels/Mono**: Inter, 500, uppercase, tracking-widest, text-xs.

## Spacing & Layout

- Max content width: `max-w-7xl` (1280 px) centered.
- Section vertical padding: `py-24 md:py-32`.
- Component rhythm: 4 px grid, consistent `gap-8`/`gap-12`.

## Components

- **Hero**: full viewport, large title, subheadline, primary CTA, gradient mesh background.
- **Work Grid**: 2-column masonry-like grid of project cards with hover lift and overlay.
- **About**: split image + text, stats bar.
- **Services**: 3-column cards with icon + description.
- **Contact**: large headline + form (name, email, message).
- **Footer**: minimal, social links.

## Motion

- Scroll-triggered fade-in + translate-y via Framer Motion.
- Hover: card lift `translateY(-8px)`, image scale, overlay fade.
- Primary CTA: subtle pulse on focus.
- Reduced motion: instant transitions or none.

## Responsive

- Mobile-first stacking; navigation collapses to hamburger (not required, anchor links work on mobile).
- Hero title scales from `text-5xl` to `text-8xl`.
