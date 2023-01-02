import { Fragment, FC} from 'react';
import { IntlProvider } from "react-intl";
import { LOCALES } from './locales';
import messages from "./messages"; 

interface props {
    locale: string, 
    children: React.ReactNode
}

const PROVIDER: FC<props> = ({locale = LOCALES.UZ, children}) => {

    return (
        <IntlProvider
            locale={locale}
            textComponent={Fragment}
            messages={messages[locale]}
        >   
            {children}
        </IntlProvider>
    )
}

export default PROVIDER; 