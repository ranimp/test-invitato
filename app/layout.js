import { jost } from './font';
import { Providers } from "./providers";

export const metadata = {
  title: 'The Wedding of Nailal & Via by Invitato',
  description: 'invitato.net',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
