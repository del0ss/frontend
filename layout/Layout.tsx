import React, {FunctionComponent} from 'react';
import {LayoutProps} from "./Layout.props";
import Header from "./Header/Header"

const Layout = ({ children , ...props}: LayoutProps) : JSX.Element => {
    return (
        <div className="wrapper" {...props}>
            <Header/>
                <div>
                    {children}
                </div>
        </div>
    )
}

export const withLayout = <T extends Record<string, unknown>> (Component: FunctionComponent<T>) => {
    return function withLayoutComponent(props: T): JSX.Element {
        return <Layout>
            <Component {...props}/>
        </Layout>
    }
}