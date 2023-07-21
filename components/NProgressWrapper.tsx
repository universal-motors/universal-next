'use client'
import { useEffect } from 'react';
import Router from 'next/router';
import NProgress from 'nprogress';

function NProgressWrapper({ children,
                          }: {
    children: React.ReactNode
}){


    useEffect(() => {
        const handleRouteChangeStart = () => NProgress.start();
        const handleRouteChangeEnd = () => NProgress.done();

        Router.events.on('routeChangeStart', handleRouteChangeStart);
        Router.events.on('routeChangeComplete', handleRouteChangeEnd);
        Router.events.on('routeChangeError', handleRouteChangeEnd);

        return () => {
            Router.events.off('routeChangeStart', handleRouteChangeStart);
            Router.events.off('routeChangeComplete', handleRouteChangeEnd);
            Router.events.off('routeChangeError', handleRouteChangeEnd);
        };
    }, []);
    const handleRouteChangeStart = () => {
        console.log('Route change started');
        NProgress.start();
    };
    const handleRouteChangeEnd = () => {
        console.log('Route change ended');
        NProgress.done();
    };
    return <>{children}</>;
}


export default NProgressWrapper;
