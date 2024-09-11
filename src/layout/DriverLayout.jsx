
import BaseLayout from './BaseLayout'
import DriverSidebar from "../components/sidebar/DriverSidebar"
import DriverHeader from "../components/header/DriverHeader"
export default function DriverLayout() {
  return (
    <BaseLayout SidebarComponent={DriverSidebar} HeaderComponent={DriverHeader} />
  )
}
