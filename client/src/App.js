import "./App.css";
import { Button } from "antd";
import clsx from "clsx";
import RouterPage from "./core/router/Router";
import { ConfigProvider } from "antd";

ConfigProvider.config({
  theme: {
    primaryColor: "#25b864",
  },
});

function App() {
  return (
    <ConfigProvider>
      <RouterPage />
    </ConfigProvider>
  );
}

export default App;
