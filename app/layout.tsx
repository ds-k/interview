import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "개발자 인터뷰 질문 모음",
  description: "CS, Frontend, Mobile 개발자 면접을 위한 질문과 답변 모음",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  authors: [{ name: "ds-k", url: "https://github.com/ds-k" }],
  keywords: [
    "개발자",
    "인터뷰",
    "면접",
    "질문",
    "CS",
    "Frontend",
    "Mobile",
    "JavaScript",
    "TypeScript",
    "React",
    "Flutter",
  ],
  openGraph: {
    title: "개발자 인터뷰 질문 모음",
    description: "CS, Frontend, Mobile 개발자 면접을 위한 질문과 답변 모음",
    url: "https://interview-seven-phi.vercel.app/",
    siteName: "개발자 인터뷰 질문 모음",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
