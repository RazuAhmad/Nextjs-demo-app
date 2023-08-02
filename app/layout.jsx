import '@styles/global.css';

export const metadata= {
    title: "nextjsdemoapp",
    description: "Discover & share AI Prompts"
}

function RootLayout({children}) {

  return (
    <html lang='en'>
        <body>
            <div className='main'>
                <div className="gradient"/>
            </div>

            <main>
                {children}
            </main>

        </body>
    </html>
  )
}

export default RootLayout