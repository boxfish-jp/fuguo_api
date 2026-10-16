import { OpenAPIHono } from "@hono/zod-openapi";
import { Scalar } from "@scalar/hono-api-reference";
import { girlfriendRoutes } from "./routes/girlfriend_routes";

const app = new OpenAPIHono();

app.route("/", girlfriendRoutes);

app.doc("/openapi.json", {
  openapi: "3.0.0",
  info: {
    title: "fuguo_api",
    version: "v1",
    description: "ニコ生に生息しているふぐおの色んな情報が取れるAPI",
  },
});

app.get(
  "/docs",
  Scalar({
    url: "/openapi.json",
    pageTitle: "fuguo_api API Reference",
  }),
);

export default app;
