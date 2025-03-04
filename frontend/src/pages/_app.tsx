import '@/styles/globals.css';
import { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { getApiUrl } from "@/utils/api";

// Create a QueryClient instance
const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <DefaultSeo
        title="Book That Boat - Rent Boats & Yachts"
        description="Easily rent boats and yachts for special occasions in the UAE."
        openGraph={{
          type: 'website',
          locale: 'en_US',
          url: `${process.env.NEXT_PUBLIC_API_URL}`,
          site_name: 'Book That Boat',
        }}
      />
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
