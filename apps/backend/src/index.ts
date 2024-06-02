import { Elysia, t } from 'elysia';

const app = new Elysia()
  .get('/hello-world', () => 'Hello World')
  .get(
    '/products/:id',
    ({ params: { id } }) => {
      return id;
    },
    {
      params: t.Object({
        id: t.Numeric(),
      }),
    },
  )
  .listen(3000);

export type App = typeof app;

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);
