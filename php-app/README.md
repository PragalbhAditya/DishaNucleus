# PHP version of Disha School (minimal scaffold)


Run the built-in PHP server from the `php-app` folder:

```bash
cd php-app
php -S localhost:8000
```

Then open http://localhost:8000 in your browser.

Assets
------
This scaffold expects static assets to live in `php-app/assets/` and be served from `/assets/`.
Copy these files from the React app into `php-app/assets/`:

- `src/assets/Logo.png` -> `php-app/assets/Logo.png`
- `src/assets/disha_gate-open.mp4` -> `php-app/assets/disha_gate-open.mp4`
- `src/assets/Disha_2026.pdf` -> `php-app/assets/Disha_2026.pdf`

After copying, the pages will reference them automatically (logo, hero video, prospectus PDF).

Files created:
- [php-app/index.php](php-app/index.php) — simple router
- [php-app/templates/header.php](php-app/templates/header.php) — header + nav
- [php-app/templates/footer.php](php-app/templates/footer.php) — footer
- [php-app/pages/*.php](php-app/pages/) — page templates

Next steps you may want:
- Move or adapt styles from the React app into these templates.
- Add authentication, database, or API endpoints in PHP.
- Replace placeholder content with the actual page markup.
