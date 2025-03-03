import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import styles from "./mainUI.module.scss";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Đình Văn &amp; Lan Anh Wedding site!",
  description:
    "Đình Văn & Lan Anh - Our wedding date: 2025-03-07 | Tôi yêu bạn vì tất cả những gì bạn đang có, tất cả những gì bạn đã có, và tất cả những gì bạn chưa hiện hữu",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <header>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Đình Văn &amp; Lan Anh Wedding site!</title>
        <meta
          name="description"
          content="Đình Văn & Lan Anh - Our wedding date: 2025-03-07 | Tôi yêu bạn vì tất cả những gì bạn đang có, tất cả những gì bạn đã có, và tất cả những gì bạn chưa hiện hữu"
        />
        <meta name="format-detection" content="telephone=no" />
        <meta name="application-name" content="iWedding" />
        <meta property="og:site_name" content="Đình Văn & Lan Anh" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Đình Văn &amp; Lan Anh Wedding site!"
        />
        <meta
          property="og:url"
          content="https://kennguyen997.github.io/damcuoine"
        />
        <meta
          property="og:description"
          content="Đình Văn & Lan Anh - Our wedding date: 2025-03-07 | Tôi yêu bạn vì tất cả những gì bạn đang có, tất cả những gì bạn đã có, và tất cả những gì bạn chưa hiện hữu"
        />
<meta property="og:image" content="https://kennguyen997.github.io/damcuoine/image/IMG_avatar.jpg" />
        <meta property="og:image:url" content="https://kennguyen997.github.io/damcuoine/image/IMG_avatar.jpg" />
        <meta property="og:image:secure_url" content="https://kennguyen997.github.io/damcuoine/image/IMG_avatar.jpg" />
        <link
          href="https://damcuoine0703.iwedding.info/templates/template15/css/libs.css?v=20241222"
          rel="stylesheet"
        />
        <link
          href="https://damcuoine0703.iwedding.info/common/calendar.css?v=20241222"
          rel="stylesheet"
        />
        <link
          href="https://damcuoine0703.iwedding.info/templates/template15/css/style.css?v=20241222"
          rel="stylesheet"
        />
        <link
          href="https://damcuoine0703.iwedding.info/common/fonts/fonts.css?v=20241222"
          rel="stylesheet"
        />
      </header>
      <body
        className={[inter.className, styles.main_ui].join(" ")}
        // suppressHydrationWarning={true}
      >
        {children}
        {/* <StyledComponentsRegistry>{children}</StyledComponentsRegistry> */}
        {/* <Loading /> */}
      </body>
    </html>
  );
}
