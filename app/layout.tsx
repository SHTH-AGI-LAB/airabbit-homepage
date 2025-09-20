import "./globals.css";
import SiteHeader from "./components/SiteHeader";

export const metadata = {
  title: "AIrabbit — 감정형 AGI 연구회사",
  description: "에어래빗은 사람을 돕는 감정형 AGI를 연구·개발합니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <main className="home">
          <SiteHeader />
          {children}
          <footer className="home__foot">
            <p>© {new Date().getFullYear()} Fly to the Moon | AIrabbit Inc. | 광주광역시 남구 행암도동길 43-11, 1층 | 사업자등록번호 536-86-03683 | 대표 주헌영</p>
          </footer>
        </main>
      </body>
    </html>
  );
}