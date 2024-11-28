import { betterAuth } from "better-auth";
import { admin, openAPI, phoneNumber, username } from "better-auth/plugins";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { db } from "~/server/db";
import { redis } from "~/server/redis";
import { resend } from "~/server/resend";
import EmailVerification from "~/lib/templates/EmailVerificationEmailTemplate";

export const auth = betterAuth({
  database: prismaAdapter(db, { provider: "postgresql" }),
  plugins: [admin(), phoneNumber(), username(), openAPI()],
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
  },
  emailVerification: {
    sendOnSignUp: true,
    async sendVerificationEmail(data, request) {
      const emailTemplate = EmailVerification(data);
      const { data: resendData, error } = await resend.emails.send({
        from: "support@autome.az",
        to: data.user.email,
        subject: "Verify your email",
        react: emailTemplate,
      });
      if (error) {
        console.error(error);
        throw error;
      }
      console.log(data);
      return;
    },
  },

  // secondaryStorage: {
  //   get: (key) => redis.get(key),
  //   set: (key, value, ttl) => {
  //     if (typeof ttl !== "undefined")
  //       return redis.set(key, JSON.stringify(value), { EX: ttl });
  //     return redis.set(key, JSON.stringify(value));
  //   },
  //   delete: (key) => redis.del(key).then(() => void 0),
  // },
});

export async function getServerSideAuth(headers: Headers) {
  return auth.api.getSession({
    headers,
  });
}
