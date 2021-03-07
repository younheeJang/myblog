import "tailwindcss/tailwind.css";
/*
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
*/

import { wrapper } from '../store/store'

const WrappedApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default wrapper.withRedux(WrappedApp)

