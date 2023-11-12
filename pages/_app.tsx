import { SWRConfig } from "swr";
import "../global.css";

export default function App({ Component, pageProps }: any) {
  return (
    <SWRConfig
      value={{
        fetcher: (url: string) => {
          console.log(url);
          fetch(url).then((response) => {
            response.json();
            console.log(response);
          });
        },
      }}
    >
      <Component {...pageProps} />
    </SWRConfig>
  );
}
