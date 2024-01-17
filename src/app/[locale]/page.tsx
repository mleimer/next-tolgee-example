import { getTranslate } from '@/tolgee/server';
import { Link } from '@/navigation';

import { Navbar } from '@/components/Navbar';

export default async function IndexPage() {
    const t = await getTranslate();
    return (
        <div className="background-wrapper">
            <div className="example">
                <Navbar>

                </Navbar>
                <header>
                    <img src="/img/appLogo.svg" />
                    <h1 className="header__title">{t('app-title')}</h1>
                </header>
            </div>
        </div>
    );
}