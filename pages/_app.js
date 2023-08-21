import "@/styles/globals.css";
import Header from "@/components/Header";
import { Provider } from "react-redux";
import store from "@/store";
import FooterThree from "@/components/Footer1";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Component {...pageProps} />
        <FooterThree />
      </Provider>
    </>
  );
}
