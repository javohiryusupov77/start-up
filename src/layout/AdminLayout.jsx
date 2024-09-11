
import BaseLayout from './BaseLayout'
import AdminSidebar from "../components/sidebar/AdminSidebar"
import AdminHeader from "../components/header/AdminHeader"
export default function AdminLayout() {
  return (
    <BaseLayout SidebarComponent={AdminSidebar} HeaderComponent={AdminHeader} />
  )
}
