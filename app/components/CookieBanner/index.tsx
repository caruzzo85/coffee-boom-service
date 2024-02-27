'use client'

import React from 'react';
import CookieConsent, { Cookies } from 'react-cookie-consent';

const CookieConsentComponent = () => {
    return (
        <CookieConsent
            location="bottom"
            buttonText="Погоджуюсь"
            cookieName="ad_storage"
            cookieValue="granted"
            style={{ background: '#333' }}
            buttonStyle={{ color: '#fff', fontSize: '13px' }}
            expires={150}
        >
            Ми використовуємо cookie-файли для надання найбільш актуальної інформації.
            Продовжуючи використовувати сайт, Ви погоджуєтесь з використанням файлів cookie.
            Політика конфіденційності
        </CookieConsent>
    );
};

export default CookieConsentComponent;
