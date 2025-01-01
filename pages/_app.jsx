import "@/styles/globals.css";
import { Poppins } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import 'react-date-range/dist/styles.css'; // Main style file
import 'react-date-range/dist/theme/default.css'; // Theme css file

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export default function App({ Component, pageProps }) {
  return (
    <main className={poppins.className}>
      <Component {...pageProps} />
      <ToastContainer />
    </main>
  );
}
