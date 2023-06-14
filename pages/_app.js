import '@/styles/globals.css'
import '@/styles/HeroBanner.css'
import '@/styles/index.css'
import '@/styles/pages.css'
import '@/styles/shop.css'
import '@/styles/login.css'
import '@/styles/main.css'
import '@/styles/prescription.css'
import 'remixicon/fonts/remixicon.css';


import { Layout } from '@/components'
import { StateContext } from '@/context/StateContext'
import { Toaster } from 'react-hot-toast'


  

export default function App({ Component, pageProps }) {
  return( 
   <>
      
      <StateContext>
        <Layout>
          <Toaster />
          <Component {...pageProps} />
        </Layout>
      </StateContext>
   

   </>
    
  )
}
