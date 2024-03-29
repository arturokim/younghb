import type { AppProps } from 'next/app';
import { ThemeProvider } from '@theme-ui/core';
import theme from '../../themes';
import Nav from '../components/Nav';
import '../styles/styles.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Nav/>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
