import { z } from "@hono/zod-openapi";

export const GirlfriendStatusSchema = z
  .object({
    has_girlfriend: z.boolean().openapi({
      example: true,
      description: "彼女がいるかどうか",
    }),
  })
  .openapi("GirlfriendStatus");
