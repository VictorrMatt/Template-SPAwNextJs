"use client";

import "../../public/reset.min.css"; // Importando o reset CSS
import theme from "@/styles/theme";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "@/styles/global";
import Header from "@/components/header/page";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        <title>YOUR.LOGO</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&family=Roboto+Flex:opsz,wght@8..144,100..1000&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&family=Roboto+Serif:ital,opsz,wght@0,8..144,100..900;1,8..144,100..900&family=Roboto+Slab:wght@100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
