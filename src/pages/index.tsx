import { GetStaticProps } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Home() {
  const { t } = useTranslation("home");
  return <div>{t("home")}</div>;
}

export const getStaticProps: GetStaticProps<any> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale!, ["home"], {
      i18n: { defaultLocale: "pt", locales: ["pt", "en", "es"] },
    })),
  },
});
