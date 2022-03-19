import Register from "../components/Register"
import Login from "../components/Login"
import App from "../App"
import ShopName from "../components/ShopName"
import ShopHome from "../components/ShopHome"
import Home from "../components/Dashboard"
import ProfilePage from "../components/ProfilePage"
import Favorites from "../components/Favorites"
import Main from "../components/Main"
import Cart from "../components/Cart"
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
    path: "/users/:userId/shops/:shopId",
    component: ShopHome,
    title: "Shop | Etsy",
    needsAuth: true,
    exact: true,
  },
  {
    path: "/editprofile",
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
    path: "/cart",
    component: Cart,
    title: "Cart | Etsy",
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
