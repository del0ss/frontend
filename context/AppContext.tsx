import {createContext, ReactNode, useState} from "react";

interface AppType {

}

const AppDefaultValues: AppType = {

}
export const AppContext = createContext<AppType>(AppDefaultValues);

export const AppContextProvider = (props: any): JSX.Element => {

    return (
        <AppContext.Provider value={{}}>
            {props.children}
        </AppContext.Provider>
    )
}