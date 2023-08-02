import '@styles/global.css';

import Nav from '@components/Nav';
import Provider from '@components/Provider';

export const metadata= {
    title: "nextjsdemoapp",
    description: "Discover & share AI Prompts"
}

const RootLayout = ({children}) => {
  return (
    <html lang='en'>
        <body>
            <div className='main'>
                <div className="gradient"/>
            </div>

            <main>
                <Nav/>
                {children}
            </main>

        </body>
    </html>
  )
}

export default RootLayout
