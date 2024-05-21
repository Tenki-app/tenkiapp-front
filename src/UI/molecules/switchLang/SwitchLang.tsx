import { useTranslation } from 'react-i18next';
import ColFlag from '@/svg/theme/colombiaFlag.svg';
import UsaFlag from '@/svg/theme/usaFlag.svg';
import { Text } from '@/UI/atoms/text/Text';
import { typeLangThemeProps } from '@/lib/types/langTheme';
const SwitchLang = ({ variant }: typeLangThemeProps) => {
    const { t, i18n } = useTranslation();
    const lang = i18n.language;
    let textStyles = 'underline font-bold uppercase cursor-default ';
    let switchStyles =
        'shadow lg:cursor-pointer ml-9 position: absolute w-[50px] h-[28px] bg-bluish-gray border-solid border-[3px] border-dark-blue rounded-[27px] ';
    let flagStyles = 'border-dark-blue';
    if (variant === 'nav') {
        textStyles += 'text-champagne-white';
    } else if (variant === 'screen') {
        textStyles += 'text-dark-blue dark:text-champagne-white';
    }
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
                    className={textStyles}
                >
                    {lang}
                </Text>
            }
            <div
                onClick={changeLanguage}
                className={switchStyles}
            >
                <div
                    className={`shadow transition-all relative ${
                        lang === 'es' ? 'left-[-4px]' : 'left-[17px]'
                    } bottom-[4px] w-[30px] h-[30px]  bg-dark-garnet border-[2px] rounded-[50%] overflow-hidden ${flagStyles}`}
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
