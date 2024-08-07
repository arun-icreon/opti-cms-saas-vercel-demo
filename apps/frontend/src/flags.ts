import { unstable_flag as flag } from "@vercel/flags/next";

export const showUpdates = flag({
  key: "updated-code",
  decide: () => {
    return false;
  },
});
