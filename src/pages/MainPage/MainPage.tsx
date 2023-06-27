import {useTranslation} from 'react-i18next'

const MainPage = () => {
  const {t} = useTranslation("homePage")
  return <div>{t('home')}</div>;
};

export default MainPage;
