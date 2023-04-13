import { Outlet, ScrollRestoration } from "react-router-dom"
import Header from "../header/Header";

export default function Root() {
    return (
        <>  
            <ScrollRestoration
                getKey={(location) => {
                        return location.key;
                    }
                }
            />
            <Header />
            <Outlet />
        </>
    )
}