import { createBrowserClient } from "@supabase/ssr";

export default {
  async fetch(request: Request) {
    const supabase = createBrowserClient(
      "http://127.0.0.1:54321",
      "xxx"
    );

    const { data, error } = await supabase.auth.getSession()
    console.log({ data, error })

    return new Response(`Running in ${navigator.userAgent}!`);
  },
};