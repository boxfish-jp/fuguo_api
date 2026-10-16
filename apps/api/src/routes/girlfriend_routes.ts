import { createRoute, OpenAPIHono } from "@hono/zod-openapi";
import { GirlfriendStatusSchema } from "../schemas/girlfriend_schema";

const route = createRoute({
  method: "get",
  path: "/api/girlfriend",
  tags: ["Girlfriend"],
  summary: "彼女がいるかを返す",
  description: "彼女がいるかどうかを返す。",
  responses: {
    200: {
      description: "彼女の有無",
      content: { "application/json": { schema: GirlfriendStatusSchema } },
    },
  },
});

export const girlfriendRoutes = new OpenAPIHono();

girlfriendRoutes.openapi(route, (c) => c.json({ has_girlfriend: false }, 200));
