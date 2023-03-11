import "../styles/globals.css";
import { NextSeo } from "next-seo";

if (
  typeof window !== "undefined" &&
  process.env.NODE_ENV === "development"
  // && /VIVID_ENABLED=true/.test(document.cookie)
) {
  import("vivid-studio").then((v) => v.run());
  import("vivid-studio/style.css");
}

function MyApp({ Component, pageProps }) {
  const siteTitle = "NYC Nights Out";
  const siteDescription = "Check out the hottest places to go out in the city";
  return (
    <>
      <NextSeo
        title={siteTitle}
        description={siteDescription}
        themeColor={isDarkMode ? "#18181b" : "#fafafa"}
        openGraph={{
          title: siteTitle,
          description: siteDescription,
          images: [
            {
              url: "https://clubbookers.com/wp-content/uploads/2022/11/Club-Space.jpg",
              width: 800,
              height: 600,
              alt: "Nights out NYC",
            },
          ],
        }}
      />
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
