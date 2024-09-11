// eslint-disable-next-line no-unused-vars
import React from 'react'
import BaseLayout from './BaseLayout'
import OwnerSidebar from "../components/sidebar/OwnerSidebar"
import OwnerHeader from "../components/header/OwnerHeader"
export default function OwnerLayout() {
  return (
    <BaseLayout SidebarComponent={OwnerSidebar} HeaderComponent={OwnerHeader} />)}