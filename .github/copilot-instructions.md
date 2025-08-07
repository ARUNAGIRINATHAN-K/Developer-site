# Copilot Instructions for UMIS-Portal

## Project Overview
- This is a static, responsive University Management Information System (UMIS) portal clone.
- Built with HTML5, Bootstrap 5, and CSS3. No backend or dynamic scripting is present.
- The portal simulates UI/UX for Admin, Faculty, and Student roles, with separate HTML files for each major section.

## Key Files & Structure
- `index.html`: Main landing page.
- `AI.html`, `CI.html`, `FI.html`, `GI.html`, `GR.html`: Section pages for Academic, Contact, Family, Grievance, etc.
- `styles.css`: Custom styles (if present; otherwise, styles are in `<style>` tags in HTML files).
- `icon/` and `img/`: Static assets for icons and images.

## UI Patterns & Conventions
- Uses Bootstrap 5 grid and utility classes for layout and responsiveness.
- Custom styles are often embedded in `<style>` tags within each HTML file.
- Navigation and section headers are implemented with Bootstrap components (e.g., `.card`, `.offcanvas`).
- Forms use Bootstrap validation classes (`needs-validation`, `valid-feedback`, `invalid-feedback`).
- All form fields are static; no JavaScript validation or submission logic is present.

## Developer Workflow
- No build or test steps; edit HTML/CSS directly and open in a browser to view changes.
- No package management or external build tools required.
- For new sections, copy an existing HTML file as a template and update content as needed.

## Project-Specific Guidance
- Keep all UI changes consistent with Bootstrap 5 patterns.
- Place new images/icons in the appropriate `img/` or `icon/` folders and reference with relative paths.
- When adding new forms, follow the markup and validation feedback structure seen in `GR.html` and others.
- If adding custom styles, prefer editing `styles.css` (if used) or add to the `<style>` block in the relevant HTML file.
- Do not add JavaScript or backend code; this is a static UI-only project.

## Example: Centering a Form
To center a form, use Bootstrap's grid and utility classes, or apply CSS such as:
```css
body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
form {
  margin: auto;
}
```

---
If you add new conventions or patterns, update this file to help future contributors and AI agents.
