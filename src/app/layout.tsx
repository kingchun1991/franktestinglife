import type { Metadata, Viewport } from 'next';

import { Provider } from '@/components/ui/provider';
import Layout from '@/lib/layout';
import { siteConfig } from '@/site.config';

type RootLayoutProps = {
  children: React.ReactNode;
};

const APP_NAME = siteConfig.title;

export const metadata: Metadata = {
  title: { default: APP_NAME, template: siteConfig.titleTemplate },
  description: siteConfig.description,
  applicationName: APP_NAME,
  appleWebApp: {
    capable: true,
    title: APP_NAME,
    statusBarStyle: 'default',
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    images: {
      url: `https://og-image.sznm.dev/**FrankTestingLife**.png?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2Fsznm.dev%2Favataaars.svg&widths=250`,
      alt: `${siteConfig.title} og-image`,
    },
  },
  twitter: {
    creator: '@sozonome',
    card: 'summary_large_image',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#FFFFFF',
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang={siteConfig.language} suppressHydrationWarning>
      <body>
        <Provider>
          <Layout>{children}</Layout>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
