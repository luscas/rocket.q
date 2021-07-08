import 'tailwindcss/tailwind.css'
import '../styles/globals.css'

import { AppProps } from 'next/app'

const App = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />

export default App
