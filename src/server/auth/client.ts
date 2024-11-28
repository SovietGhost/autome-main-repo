import { createAuthClient } from "better-auth/client";
import {
  adminClient,
  phoneNumberClient,
  usernameClient,
} from "better-auth/client/plugins";

export const authClient = createAuthClient({
  plugins: [adminClient(), phoneNumberClient(), usernameClient()],
});
