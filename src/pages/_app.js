import MainLayout from '@layout/MainLayout'
import { ProviderAuth } from '@hooks/useAuth' 
import '../styles/taildwind.css'

function MyApp({ Component, pageProps }) {
  return (
    <ProviderAuth>
  <MainLayout>
    <Component {...pageProps} />
  </MainLayout>
  </ProviderAuth>
  )
}

export default MyApp
