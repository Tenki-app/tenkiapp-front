import { useTranslation } from 'react-i18next';

import ColFlag from '@/svg/theme/colombiaFlag.svg';
import UsaFlag from '@/svg/theme/usaFlag.svg';
import { Text } from '@/UI/atoms/text/Text';

const SwitchLang = () => {
    const { t, i18n } = useTranslation();
    const lang = i18n.language;

    const changeLanguage = () => {
        if (lang === 'es') {
            i18n.changeLanguage('en');
        } else {
            i18n.changeLanguage('es');
        }
    };

    return (
        <div className='w-[83px] flex items-center'>
            {
                <Text
                    variant='custom'
                    className='underline font-bold uppercase cursor-default dark:text-dark-blue text-champagne-white'
                >
                    {lang}
                </Text>
            }
            <div
                onClick={changeLanguage}
                className='shadow lg:cursor-pointer ml-9 position: absolute w-[50px] h-[28px] bg-bluish-gray border-solid border-[3px] border-dark-blue dark:border-champagne-white rounded-[27px]'
            >
                <div
                    className={`shadow transition-all relative ${
                        lang === 'es' ? 'left-[-4px]' : 'left-[17px]'
                    } bottom-[4px] w-[30px] h-[30px]  bg-dark-garnet border-[2px] border-dark-blue dark:border-champagne-white rounded-[50%] overflow-hidden`}
                >
                    {lang === 'es' ? (
                        <ColFlag className='w-[100%] h-[100%]' />
                    ) : (
                        <UsaFlag className='w-[100%] h-[100%]' />
                    )}
                </div>
            </div>
        </div>
    );
};

export { SwitchLang };
