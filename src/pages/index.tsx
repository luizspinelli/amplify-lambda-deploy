import { GetStaticProps } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const { t } = useTranslation("home");
  const [message, setMessage] = useState("Message inicial");
  useEffect(() => {
    axios
      .get("/api/teste")
      .then((response) => {
        console.log(response);
        setMessage(response.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {t("home")} {message}
    </div>
  );
}

export const getStaticProps: GetStaticProps<any> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale!, ["home"], {
      i18n: { defaultLocale: "pt", locales: ["pt", "en", "es"] },
    })),
  },
});
