import Register from "../components/Register"
import Login from "../components/Login"
import App from "../App"
import ShopName from "../components/ShopName"
import Home from "../components/Dashboard"
import ProfilePage from "../components/ProfilePage"
import Favorites from "../components/Favorites"
import Main from "../components/Main"
import ItemOverview from "../components/ItemOverview"

const routes = [
  {
    path: "/register",
    component: Register,
    title: "Register",
    needsAuth: false,
    exact: true,
  },
  {
    path: "/login",
    component: Login,
    title: "Login",
    needsAuth: false,
    exact: true,
  },
  {
    path: "/create-shop",
    component: ShopName,
    title: "Create Shop",
    needsAuth: true,
    exact: true,
  },
  {
    path: "/profile",
    component: ProfilePage,
    title: "Profile Page",
    needsAuth: true,
    exact: true,
  },
  {
    path: "/favorites",
    component: Favorites,
    title: "Favorites",
    needsAuth: true,
    exact: true,
  },
  {
    path: "/product/:id",
    component: ItemOverview,
    title: "Product Page | Etsy",
    needsAuth: true,
    exact: true,
  },
  {
    path: "/",
    component: Main,
    title: "Etsy",
    needsAuth: false,
    exact: true,
  },
]

export default routes
