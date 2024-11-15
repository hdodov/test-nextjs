# Reproduction for https://github.com/vercel/next.js/discussions/72853

1. `npm run build`
2. `npm run start`
3. Open http://localhost:3000
4. You'll see the inline script log in the console
5. The script wouldn't be minified in the `view-source` of the page
