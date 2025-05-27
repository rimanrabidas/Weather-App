import { Outlet } from "react-router-dom"
import ScrollToTop from "./ScrollToTop"


function MainLayout() {
  return (
    <>
    <ScrollToTop/>
    <Outlet/>
    </>
  )
}

export default MainLayout