import { useState } from "react";
import "./App.css";

const translations = {
  en: {
    title: "Build a React App from Scratch",
    intro:
      "If your app has constraints not well-served by existing frameworks, you prefer to build your own framework, or you just want to learn the basics of a React app, you can build a React app from scratch.",
    step1Title: "Step 1: Install a build tool",
    step1Content: (
      <>
        The first step is to install a build tool like{" "}
        <span className="highlight">vite</span>,{" "}
        <span className="highlight">parcel</span>, or{" "}
        <span className="highlight">rsbuild</span>. These build tools provide
        features to package and run source code, provide a development server
        for local development and a build command to deploy your app to a
        production server.
      </>
    ),
    viteTitle: "Vite",
    viteDesc:
      "Vite is a build tool that aims to provide a faster and leaner development experience for modern web projects.",
    terminal: "Terminal",
    viteDetails: (
      <>
        Vite is opinionated and comes with sensible defaults out of the box.
        Vite has a rich ecosystem of plugins to support fast refresh, JSX,
        Babel/SWC, and other common features. See{" "}
        <a
          href="https://github.com/vitejs/vite-plugin-react"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vite’s React plugin
        </a>{" "}
        or{" "}
        <a
          href="https://github.com/vitejs/vite-plugin-react-swc"
          target="_blank"
          rel="noopener noreferrer"
        >
          React SWC plugin
        </a>{" "}
        and{" "}
        <a
          href="https://github.com/vitejs/vite-plugin-react/tree/main/playground/ssr-react"
          target="_blank"
          rel="noopener noreferrer"
        >
          React SSR example project
        </a>{" "}
        to get started.
      </>
    ),
    note: (
      <>
        <strong>Note:</strong> Vite is already being used as a build tool in one
        of our recommended frameworks:{" "}
        <a
          href="https://reactrouter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Router
        </a>
        .
      </>
    ),
  },
  ar: {
    title: "بناء تطبيق React من الصفر",
    intro:
      "إذا كان تطبيقك يحتوي على قيود لا تخدمها الأطر الحالية بشكل جيد، أو كنت تفضل بناء إطار العمل الخاص بك، أو كنت ترغب فقط في تعلم أساسيات تطبيق React، يمكنك بناء تطبيق React من الصفر.",
    step1Title: "الخطوة 1: تثبيت أداة البناء",
    step1Content: (
      <>
        الخطوة الأولى هي تثبيت أداة بناء مثل{" "}
        <span className="highlight">vite</span> أو{" "}
        <span className="highlight">parcel</span> أو{" "}
        <span className="highlight">rsbuild</span>. توفر أدوات البناء هذه ميزات
        لتجميع وتشغيل التعليمات البرمجية المصدرية، وتوفير خادم تطوير للتطوير
        المحلي وأمر بناء لنشر تطبيقك على خادم الإنتاج.
      </>
    ),
    viteTitle: "Vite",
    viteDesc:
      "Vite هي أداة بناء تهدف إلى توفير تجربة تطوير أسرع وأكثر مرونة لمشاريع الويب الحديثة.",
    terminal: "الطرفية",
    viteDetails: (
      <>
        Vite عبارة عن أداة ذات آراء محددة وتأتي مع إعدادات افتراضية معقولة جاهزة
        للاستخدام. تمتلك Vite نظامًا بيئيًا غنيًا من الإضافات لدعم التحديث
        السريع و JSX و Babel/SWC وميزات شائعة أخرى. راجع{" "}
        <a
          href="https://github.com/vitejs/vite-plugin-react"
          target="_blank"
          rel="noopener noreferrer"
        >
          إضافة React الخاصة بـ Vite
        </a>{" "}
        أو{" "}
        <a
          href="https://github.com/vitejs/vite-plugin-react-swc"
          target="_blank"
          rel="noopener noreferrer"
        >
          إضافة React SWC
        </a>{" "}
        و{" "}
        <a
          href="https://github.com/vitejs/vite-plugin-react/tree/main/playground/ssr-react"
          target="_blank"
          rel="noopener noreferrer"
        >
          مشروع مثال React SSR
        </a>{" "}
        للبدء.
      </>
    ),
    note: (
      <>
        <strong>ملاحظة:</strong> يتم استخدام Vite بالفعل كأداة بناء في أحد أطر
        العمل الموصى بها لدينا:{" "}
        <a
          href="https://reactrouter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Router
        </a>
        .
      </>
    ),
  },
};

function App() {
  const [lang, setLang] = useState("en");
  const content = translations[lang];
  const isRTL = lang === "ar";

  return (
    <div
      className={`container ${isRTL ? "rtl" : ""}`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="language-switcher">
        <button onClick={() => setLang(lang === "en" ? "ar" : "en")}>
          {lang === "en" ? "العربية" : "English"}
        </button>
      </div>

      <header className="header">
        <h1>{content.title}</h1>
        <p className="intro">{content.intro}</p>
      </header>

      <main>
        <section className="step-section">
          <h2>{content.step1Title}</h2>
          <p>{content.step1Content}</p>
        </section>

        <section className="tool-detail">
          <h3>{content.viteTitle}</h3>
          <p>{content.viteDesc}</p>

          <div className="code-block" dir="ltr">
            <span className="language-label">{content.terminal}</span>
            <code>npm create vite@latest my-app -- --template react-ts</code>
          </div>

          <p>{content.viteDetails}</p>

          <div className="note">{content.note}</div>
        </section>
      </main>
    </div>
  );
}

export default App;
