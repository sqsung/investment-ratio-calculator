import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import { PageWrapper } from "@/components/common";

const notoSansKr = Noto_Sans_KR({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "투자 비율 계산기",
  description: "투자 비율 계산기",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="kr">
      <body className={notoSansKr.className}>
        <PageWrapper>{children}</PageWrapper>
      </body>
    </html>
  );
}
