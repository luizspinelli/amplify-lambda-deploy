import { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp, {
  i18n: { defaultLocale: "pt", locales: ["pt", "en", "es"] },
});
