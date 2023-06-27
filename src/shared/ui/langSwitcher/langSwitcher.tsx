import { useTranslation } from "react-i18next";
import { AppButton, AppButtonTheme } from "../appButton/appButton";

export const LangSwitcher = () => {
  const { i18n, t } = useTranslation();

  const handlerTranslate = () => {
    if (i18n.language === "en") {
      i18n.changeLanguage("ru");
    } else {
      i18n.changeLanguage("en");
    }
  };

  return (
    <AppButton onClick={handlerTranslate} theme={AppButtonTheme.clear}>
      {t("language")}
    </AppButton>
  );
};
