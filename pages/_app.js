import 'tailwindcss/tailwind.css'
import Nav from "../components/navbar"
import Footer from "../components/footer"
import {ThemeProvider} from "next-themes"
function MyApp({ Component, pageProps }) {
  return(
    <>
      <ThemeProvider attribute="class" enableSystem={false}>
      <Nav/>
      <Component {...pageProps} />
      <Footer/>
      </ThemeProvider>
    </>
  )
}

export default MyApp
