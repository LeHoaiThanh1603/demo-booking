import { RouterProvider } from "react-router-dom";
import { router } from "./Router";
import './scss/index.scss'
import 'react-lazy-load-image-component/src/effects/blur.css';
import { ConfigProvider } from 'antd';
import viVN from 'antd/lib/locale/vi_VN';
import HelmetProvider from 'react-helmet'
function App() {
  return (
    // <HelmetProvider >
    <ConfigProvider locale={viVN}>
      <RouterProvider router={router} />
    </ConfigProvider>
    // </HelmetProvider>
  )
}

export default App;
