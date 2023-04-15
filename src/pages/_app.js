import "@/styles/globals.css";
import { Roboto } from "next/font/google";
import "../styles/global.css";
import ProgressBar from "@badrap/bar-of-progress";
import { Router } from "next/router";

const progress = new ProgressBar({
  size: 8,
  color: "#fe595e",
  className: "z-50",
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  delay: 100,
});

export default function App({ Component, pageProps }) {
  return (
    <main className={roboto.className}>
      <Component {...pageProps} />
    </main>
  );
}
