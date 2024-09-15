import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import Layout from './Layout/Layout.jsx'
import About from './About/About.jsx'
import './index.css'
import Faq from './Faq/Faq.jsx'
import Login from './Login/Login.jsx'
import Home from "./Home/Home.jsx"
import Chatbot from './Chatbot/chatbot.jsx';
import Translate from './Translator/Translate.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Login />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "faq",
        element: <Faq/>
      },
      {
        path: "login",
        element: <Login/>
      },
      {
        path: "home",
        element: <Home/>
      },
      {
        path: "chatbot",
        element: <Chatbot/>
      },
      {
        path: "translate",
        element: <Translate/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
