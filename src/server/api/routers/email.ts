import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";
import { TRPCError } from "@trpc/server";
import WelcomeEmail from "~/lib/templates/SellerCustomerEmailTemplate";
import { resend } from "~/server/resend";

export const emailRouter = createTRPCRouter({
  send: protectedProcedure
    .input(
      z.object({
        fullName: z.string(),
        email: z.string().email(),
        message: z.string(),
      }),
    )
    .mutation(async ({ input }) => {
      const { email, fullName, message } = input;
      // const userData = await clerkClient().users.getUser(ctx.auth.userId);
      // if (
      //   !userData.emailAddresses.find(
      //     (emailAddress) => emailAddress.emailAddress === email,
      //   )
      // ) {
      //   throw new TRPCError({
      //     code: "FORBIDDEN",
      //     message: "Email doesn't exist or doesn't belong to the user",
      //   });
      // }

      const { data, error } = await resend.emails.send({
        from: "support@autome.az",
        to: email,
        subject: "Welcome to AUTOME.AZ",
        react: WelcomeEmail({
          fullName,
          email,
          message,
        }),
      });

      console.log({ data, error });

      if (error) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: error.message,
          cause: error.name,
        });
      }

      return data;
    }),
});
