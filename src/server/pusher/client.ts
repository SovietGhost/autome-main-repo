import PusherClient from "pusher-js";
import { env } from "~/env";

export const client = new PusherClient(env.NEXT_PUBLIC_PUSHER_KEY, {
  cluster: env.NEXT_PUBLIC_PUSHER_CLUSTER,
});
