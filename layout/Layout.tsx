import React, {FunctionComponent, useState} from 'react';
import {LayoutProps} from "./Layout.props";
import Header from "./Header/Header"
import {AppContextProvider} from "../context/AppContext";

const Layout = ({children, ...props}: LayoutProps): JSX.Element => {
    return (
        <div className="wrapper" {...props}>
            <Header/>
            <>
                {children}
            </>
        </div>
    )
}

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {

    return function withLayoutComponent(props: T): JSX.Element {
        return (
            <AppContextProvider>
                <Layout>
                    <Component {...props}/>
                </Layout>
            </AppContextProvider>
        )
    }
}