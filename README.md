# layout-invalidate-bug

Minimal svelte-kit repo created to reproduce issue https://github.com/sveltejs/kit/issues/6373

Install with `npm ci`, start server with `npm run dev`

Expected: When calling `invalidate()`, the `load()` function will run for both `+page.server.js` and `+layout.server.js` endpoints.

Actual: When calling `invalidate()`, the `load()` function does not run for `+layout.server.js` endpoints.

---

Refresh the page to see expected behaviour. Click the "invalidate" button to see issue.

Install previous svelte-kit version with `npm i @sveltejs/kit@1.0.0-next.443` to see previous behaviour working as expected for both the button and page refresh.
