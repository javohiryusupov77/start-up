// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import {
//   Earnings,
//   History,
//   HomePageDashboardAdmin,
//   HomePageOwnerDashboard,
//   Location,
//   Login,
//   Products,
//   Schedule,
//   Settings,
//   Support,
//   UserManagment,
// } from "./pages";
// import { Provider } from "react-redux";
// import { store } from "./features/store";
// import PageNotFound from "./pages/PageNotFound";
// import AdminLayout from "./layout/AdminLayout";
// import OwnerLayout from "./layout/OwnerLayout";
// import DriverLayout from "./layout/DriverLayout";
// import PageTitle from "./components/PageTitle";
// import HomePageDashboardOwner from "./pages/ownerPages/HomePageDashboardOwner";

// export default function App() {
//   return (
//     <Provider store={store}>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/login" element={
//             <>
//               <PageTitle title="Login"/>
//               <Login/>
//             </>}
//             />
//           <Route path="/dashboard/admin" element={<AdminLayout />}>
//           <Route
//               path="/dashboard/admin"
//               index
//               element={
//                 <>
//                   <PageTitle title="Admin | HomePage" />
//                   <HomePageDashboardAdmin/>
//                 </>
//               }
//             />
//             <Route
//               path="products"
//               element={
//                 <>
//                   <PageTitle title="Admin | Product" />
//                   <Products/>
//                 </>
//               }
//             />
//             <Route
//               path="settings"
//               element={
//                 <>
//                   <PageTitle title="Admin | Settings" />
//                   <Settings/>
//                 </>
//               }
//             />
//              <Route
//               path="usermanagement"
//               element={
//                 <>
//                   <PageTitle title="Admin | UserMangement" />
//                   <UserManagment/>
//                 </>
//               }
//             />

//           </Route>
//           <Route path="/dashboard/owner" element={<OwnerLayout />}>
//           <Route index path="/dashboard/owner" element={
//             <>
//             <PageTitle title="Owner | HomePage"/>
//             <HomePageDashboardOwner/>
//             </>
//           }/>
//           <Route
//               path="earn"
//               element={
//                 <>
//                   <PageTitle title="Owner | Booking" />
//                   <Location/>
//                 </>
//               }
//             />
//             <Route
//               path="earnings"
//               element={
//                 <>
//                   <PageTitle title="Owner | Booking" />
//                   <Earnings/>
//                 </>
//               }
//             />
//           </Route>
//           <Route path="/dashboard/driver" element={<DriverLayout />}>
//             <Route path="/dashboard/driver" index
//             element={
//               <>
//               <PageTitle title="Owner | Home"/>
//               <HomePageOwnerDashboard/>
//               </>
//             } />
//             <Route path="/dashboard/driver/history" element={
//             <>
//             <PageTitle title="Driver|History"/>
//             <History/>
//             </>
//           }/>
//           <Route path="/dashboard/driver/location" element={
//             <>
//             <PageTitle title="Driver|location"/>
//             <Location/>
//             </>
//           }/>
//           <Route path="/dashboard/driver/schedule" element={
//             <>
//             <PageTitle title="Driver|Schedule"/>
//             <Schedule/>
//             </>
//           }/>
//           <Route path="/dashboard/driver/support" element={
//             <>
//             <PageTitle title="Driver|Support"/>
//             <Support/>
//             </>
//           }/>
//           </Route>
//           <Route path="*" element={
//             <>
//             <PageTitle title="404|Page"/>
//             <PageNotFound/>
//             </>
//           }/>
//         </Routes>
//       </BrowserRouter>
//     </Provider>
//   );
// }
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Earnings,
  History,
  HomePageDashboardAdmin,
  HomePageOwnerDashboard,
  Location,
  Login,
  Products,
  Schedule,
  Settings,
  Support,
  UserManagment,
} from "./pages";
import { Provider } from "react-redux";
import { store } from "./features/store";
import PageNotFound from "./pages/PageNotFound";
import AdminLayout from "./layout/AdminLayout";
import OwnerLayout from "./layout/OwnerLayout";
import DriverLayout from "./layout/DriverLayout";
import PageTitle from "./components/PageTitle";
import HomePageDashboardOwner from "./pages/ownerPages/HomePageDashboardOwner";
import RegisterPage from "./pages/login/Register";
import { ThemeProvider } from "./pages/adminPages/ThemeContex";

export default function App() {
  return (
    <ThemeProvider>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route
              path="/login"
              element={
                <>
                  <PageTitle title="Login" />
                  <Login />
                </>
              }
            />
            <Route
              path="/"
              element={
                <>
                  <PageTitle title="Register" />
                  <RegisterPage />
                </>
              }
            />
            <Route path="/dashboard/admin" element={<AdminLayout />}>
              <Route
                path="/dashboard/admin"
                index
                element={
                  <>
                    <PageTitle title="Admin | HomePage" />
                    <HomePageDashboardAdmin />
                  </>
                }
              />
              <Route
                path="products"
                element={
                  <>
                    <PageTitle title="Admin | Products" />
                    <Products />
                  </>
                }
              />
              <Route
                path="settings"
                element={
                  <>
                    <PageTitle title="Admin | Settings" />
                    <Settings />
                  </>
                }
              />
              <Route
                path="usermanagement"
                element={
                  <>
                    <PageTitle title="Admin | User Management" />
                    <UserManagment />
                  </>
                }
              />
            </Route>
            <Route path="/dashboard/owner" element={<OwnerLayout />}>
              <Route
                index
                path="/dashboard/owner"
                element={
                  <>
                    <PageTitle title="Owner | HomePage" />
                    <HomePageDashboardOwner />
                  </>
                }
              />
              <Route
                path="earn"
                element={
                  <>
                    <PageTitle title="Owner | Location" />
                    <Location />
                  </>
                }
              />
              <Route
                path="earnings"
                element={
                  <>
                    <PageTitle title="Owner | Earnings" />
                    <Earnings />
                  </>
                }
              />
            </Route>
            <Route path="/dashboard/driver" element={<DriverLayout />}>
              <Route
                index
                path="/dashboard/driver"
                element={
                  <>
                    <PageTitle title="Driver | Home" />
                    <HomePageOwnerDashboard />
                  </>
                }
              />
              <Route
                path="history"
                element={
                  <>
                    <PageTitle title="Driver | History" />
                    <History />
                  </>
                }
              />
              <Route
                path="location"
                element={
                  <>
                    <PageTitle title="Driver | Location" />
                    <Location />
                  </>
                }
              />
              <Route
                path="schedule"
                element={
                  <>
                    <PageTitle title="Driver | Schedule" />
                    <Schedule />
                  </>
                }
              />
              <Route
                path="support"
                element={
                  <>
                    <PageTitle title="Driver | Support" />
                    <Support />
                  </>
                }
              />
            </Route>
            <Route
              path="*"
              element={
                <>
                  <PageTitle title="404 | Page Not Found" />
                  <PageNotFound />
                </>
              }
            />
          </Routes>
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  );
}
