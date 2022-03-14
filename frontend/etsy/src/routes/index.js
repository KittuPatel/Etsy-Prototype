import Register from "../components/Register"
import Login from "../components/Login"
import App from "../App"
import ShopName from "../components/ShopName"
import Home from "../components/Home"

const routes = [
  {
    path: "/register",
    component: Register,
    title: "Register",
    needsAuth: false,
  },
  {
    path: "/login",
    component: Login,
    title: "Login",
    needsAuth: false,
  },
  {
    path: "/",
    component: Home,
    title: "Etsy",
    needsAuth: false,
  },
  {
    path: "/create-shop",
    component: ShopName,
    title: "Create Shop",
    needsAuth: true,
  },
]

export default routes
