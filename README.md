# NICECNC EDM Builder

Free, self-hosted drag-and-drop email builder using GrapesJS, `grapesjs-mjml`, and MJML.

## Workflow

1. Edit the single current email.
2. Generate and review the HTML preview.
3. Confirm to update the approved MJML.
4. Export approved HTML, MJML, or project JSON.

Draft and approved states are saved locally in the browser. Any edit invalidates the previous preview.

## Development

```sh
pnpm install
pnpm dev
pnpm build
```

## GitHub Pages

The included workflow deploys `dist/` whenever `main` is updated. In the repository settings, set Pages source to **GitHub Actions**.
