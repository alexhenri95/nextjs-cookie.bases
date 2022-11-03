import { GetServerSideProps } from 'next'
import { CssBaseline, ThemeProvider } from '@mui/material'
import type { AppContext, AppProps } from 'next/app'
import { customTheme, darkTheme, lightTheme } from '../themes'
import { useState, useEffect } from 'react';
import Cookie from 'js-cookie'

interface Props extends AppProps {
  theme: string
}

export default function App({ Component, pageProps, theme='light' }: Props) {

  const [ currentTheme, setCurrentTheme ] = useState(lightTheme)

  useEffect(() => {
    const cookieTheme = Cookie.get('theme') || 'light'
    const selectedTheme = cookieTheme === ' light' ? lightTheme : cookieTheme === 'dark' ? darkTheme : customTheme
    setCurrentTheme(selectedTheme)
  }, [currentTheme])
  
  
  return (
    <ThemeProvider theme={ currentTheme } >
      <CssBaseline/>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

// App.getInitialProps = async(appContext: AppContext) => {
//   const {theme} = appContext.ctx.req ? (appContext.ctx.req as any ).cookies : { theme: 'light' }

//   const validTheme = ['light', 'dark', 'custom']
  
//   return {
//     theme: validTheme.includes(theme) ? theme : 'light',
//   }
// }