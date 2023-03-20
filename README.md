# Welcome to Form Maker!

This app is a form maker built with [Remix](https://remix.run/docs), [Tailwind](https://tailwindcss.com/),
[HyperUI](https://www.hyperui.dev/) and [Prisma ORM](https://www.hyperui.dev/).

## Development

From your terminal:

```sh
npm run dev
```

This starts your app in development mode, rebuilding assets on file changes.

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `remix build`

- `build/`
- `public/build/`
