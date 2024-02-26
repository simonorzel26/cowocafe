import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
} from "@/server/api/trpc";

export const emailListRouter = createTRPCRouter({
  create: publicProcedure
    .input(z.object({ email: z.string().min(1) }))
    .mutation(async ({ ctx,  input }) => {

      // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      return ctx.db.emailList.create({
        data: {
          email: input.email,
        },
      });
    
    }),
});
