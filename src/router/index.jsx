/*
 * @Author: shengqun.zhu shengqun2022@gmail.com
 * @Date: 2024-10-18 16:56:32
 * @LastEditors: shengqun.zhu shengqun2022@gmail.com
 * @LastEditTime: 2024-10-21 23:46:34
 * @FilePath: /web3-travel/src/router/index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// src/router/index.jsx
import { createBrowserRouter } from "react-router-dom";
import Home from "../views/home/index";
import Login from "../views/login/index";
import Mine from "../views/mine/index";
import Detail from "../views/detail/index";
 
const router = createBrowserRouter([
    {
        path:'/',
        element: <Home />,
    },
    {
        path:'/login',
        element: <Login />,
    },
    {
        path:'/mine',
        element: <Mine />,
    },
    {
        path:'/detail',
        element: <Detail />,
    }
])
 
export default router