import { DefaultLayout, EmptyLayout } from "../components";
import {Home, FoodDetail, AllFoods, Cart, Checkout, Orders, UserProfile, SettingProfile} from '../pages'
import Register from "../pages/Register";


export const publicRoutes = [
    {path: "/foods/:id", component: FoodDetail, layout: DefaultLayout},
    {path: "/home", component: Home, layout: DefaultLayout},
    {path: "/foods", component: AllFoods, layout: DefaultLayout},
    {path: "/cart", component: Cart, layout: DefaultLayout},
    {path: "/checkout", component: Checkout, layout: DefaultLayout},
    {path: "/orders", component: Orders, layout: DefaultLayout},
] 

export const privateRoutes = [
    {path: "/user_profile", component: UserProfile, layout: DefaultLayout},
    {path: "/setting", component: SettingProfile, layout: DefaultLayout},
]