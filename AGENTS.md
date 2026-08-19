## Design & brand

Before making visual or copy changes, check `docs/brand.md` — it documents the palette,
type choices, voice/tone rules, and shape/structure notes. Copy lives in `src/lib/content.ts`.

## SEO

`index.astro`'s meta/OG tags and JSON-LD are generated from `content.ts` and
`astro.config.mjs`. When changing either, check the head block still makes sense.
Note: `noindex` is intentional pre-launch (see `docs/brand.md`).

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
