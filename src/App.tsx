import { Toaster } from 'react-hot-toast'
import { useRoutes, HashRouter as BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import router from '@/router/router'

import MyErrorBoundary from './components/MyErrorBoundry'
import QrcodeModelProvider from './components/providers/QrcodeModelProvider'
import { useSelector } from './store'

const Routes = () => {
  const routes = useRoutes(router)

  return <div>{routes}</div>
}

const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { staleTime: 1000 * 60 * 5 } },
  })
  const { currentTheme } = useSelector((state) => state.theme)

  return (
    <MyErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={currentTheme}>
          <BrowserRouter>
            <QrcodeModelProvider>
              <Routes />
            </QrcodeModelProvider>
          </BrowserRouter>
        </ThemeProvider>
      </QueryClientProvider>
      <Toaster />
    </MyErrorBoundary>
  )
}

export default App
