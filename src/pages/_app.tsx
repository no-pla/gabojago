import type { AppProps } from "next/app";
import "../globals.css";
import Layout from "../components/UI/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
