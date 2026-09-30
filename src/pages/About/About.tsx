import Navigation from "../../components/Navigation/Navigation";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <>
      <Navigation />
      <div>
        <h1>{t("about.title")}</h1>
        <p>{t("about.description")}</p>
      </div>
    </>
  );
}
