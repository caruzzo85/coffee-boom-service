'use client'

import Script from "next/script"
import {usePathname, useSearchParams} from 'next/navigation'
import { useEffect } from "react";
import { pageView } from "@/app/utils/gtagHelper"

export default function GoogleTagManager({GA_MEASUREMENT_ID} : {GA_MEASUREMENT_ID : string}){
    const pathname = usePathname()
    const searchParams = useSearchParams()

    useEffect(() => {
        const url = pathname + searchParams.toString()
    
        pageView(GA_MEASUREMENT_ID, url);
        
    }, [pathname, searchParams, GA_MEASUREMENT_ID]);


    return(
        <>
        <Script
        src={'https://www.googletagmanager.com/gtag/js?id=G-4Q2305BTV8'} />
        <Script id="google-analytics"
        dangerouslySetInnerHTML={{
            __html:`
            window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-4Q2305BTV8');
            `,
        }}
        />
    </>
    )
}