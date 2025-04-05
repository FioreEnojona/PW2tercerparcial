import { Outlet } from "react-router"

import { Header } from '../components/Header'
import { Main } from '../components/Main'
export const Layout = () => {
    return (
        <>
            <Header
                title="Pokedex Barraza"
            />
            <Main>
                <Outlet />
            </Main>
        </>
    )
}