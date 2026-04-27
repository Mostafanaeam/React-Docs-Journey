import "./App.css";
import { useState } from "react";

const translations = {
  en: {
    title: "Render and Commit",
    intro: "Before your components are displayed on screen, they must be rendered by React. Understanding the steps in this process will help you think about how your code executes and explain its behavior.",
    mentalModelTitle: "The Mental Model for React's Rendering Process",
    mentalModelText: "Imagine that your components are cooks in the kitchen, assembling tasty dishes from ingredients. In this scenario, React is the waiter who puts in requests from customers and brings them their orders.",
    processText: "This process of requesting and serving UI has three steps:",
    step1Title: "Step 1: Trigger a render",
    step1Reasons: "There are two reasons for a component to render:",
    initialRender: "Initial render",
    initialRenderDesc: "When the app starts, this triggers the first render.",
    stateUpdate: "State update",
    stateUpdateDesc: "When a component's state changes, it schedules a re-render.",
    initialRenderCode: "Initial Render",
    reRendersCode: "Re-renders when state updates",
    step2Title: "Step 2: React renders your component",
    step2Intro: "After triggering a render, React calls your components to figure out what to display on screen.",
    initialRender2: "On initial render,",
    initialRender2Desc: "React will call the root component.",
    subsequentRender: "For subsequent renders,",
    subsequentRenderDesc: "React will call the function component whose state update triggered the render.",
    recursive: "This process is recursive: if the updated component returns some other component, React will render that component next, and if that component also returns something, it will render that component next, and so on. The process will continue until there are no more nested components and React knows exactly what should be displayed on screen.",
    galleryExample: "Example: Gallery and Image",
    galleryExampleText: "In the following example, React will call Gallery() and Image() several times:",
    initialRenderText: "During the initial render, React will create the DOM nodes for <section>, <h1>, and three <img> tags.",
    reRenderText: "During a re-render, React will calculate which of their properties, if any, have changed since the previous render. It won't do anything with that information until the next step, the commit phase.",
    pitfall: "Pitfall: Rendering must always be a pure calculation",
    sameInputs: "Same inputs, same output. Given the same inputs, a component should always return the same JSX.",
    mindsOwn: "It minds its own business. It should not change any objects or variables that existed before rendering.",
    strictMode: "Otherwise, you can encounter confusing bugs and unpredictable behavior as your codebase grows in complexity. When developing in Strict Mode, React calls each component's function twice, which can help surface mistakes caused by impure functions.",
    step3Title: "Step 3: React commits to the DOM",
    step3Intro: "After rendering (calling) your components, React will modify the DOM.",
    initialRender3: "For the initial render,",
    reRender3: "For re-renders,",
    sameOutput: "React only changes the DOM nodes if there's a difference between renders.",
    clockExample: "Example: Clock",
    clockExampleText: "For example, here is a component that re-renders with different props passed from its parent every second. Notice how you can add some text into the <input>, updating its value, but the text doesn't disappear when the component re-renders:",
    clockExplanation: "This works because during this last step, React only updates the content of <h1> with the new time. It sees that the <input> appears in the JSX in the same place as last time, so React doesn't touch the <input>—or its value!",
    browserPaint: "Browser Paint",
    browserPaintText: "After the commit phase finishes, the browser repaints the screen. Although this process is known as browser rendering, we'll refer to it as painting to avoid confusion.",
    demoTitle: "Demo: Eager vs Lazy Evaluation",
    demoText: "React evaluates the component function and watches for what you return. Notice how React waits for the component to be needed before computing.",
    show: "Show",
    hide: "Hide",
    clock: "Clock",
    recapTitle: "Recap",
    recap1Title: "Any screen update in a React app happens in three steps:",
    recap1List: ["Trigger", "Render", "Commit"],
    recap2: "You can use StrictMode to find mistakes in your components",
    recap3: "React does not touch the DOM for rendering changes if the result is the same.",
    challenges: "Challenges",
    languageBtn: "العربية",
    languageBtnAr: "English",
  },
  ar: {
    title: "العرض والإيداع",
    intro: "قبل عرض المكونات على الشاشة، يجب أن يتم عرضها بواسطة React. إن فهم الخطوات في هذه العملية ستساعدك على التفكير في كيفية تنفيذ الكود وتفسير سلوكه.",
    mentalModelTitle: "النموذج الذهني لعملية العرض في React",
    mentalModelText: "تخيل أن مكوناتك هي طهاة في المطبخ، يقومون بإعداد أطباق لذيذة من المكونات. في هذا السيناريو، React هو النادل الذي يأخذ الطلبات من العملاء ويقدم لهم طلباتهم.",
    processText: "هذه العملية لطلب وخدمة الواجهة ثلاث خطوات:",
    step1Title: "الخطوة 1: تشغيل العرض",
    step1Reasons: "هناك سببيان لتشغيل مكون ما:",
    initialRender: "العرض الأولي",
    initialRenderDesc: "عند بدء التطبيق، يتم تشغيل العرض الأولي.",
    stateUpdate: "تحديث الحالة",
    stateUpdateDesc: "عند تغيير حالة المكون، يتم جدولة إعادة العرض.",
    initialRenderCode: "العرض الأولي",
    reRendersCode: "إعادة العرض عند تحديث الحالة",
    step2Title: "الخطوة 2: React يعرض مكونك",
    step2Intro: "بعد تشغيل العرض، يستدعي React مكوناتك لمعرفة ما سيتم عرضه على الشاشة.",
    initialRender2: "عند العرض الأولي،",
    initialRender2Desc: "سيستدعي React المكون الجذر.",
    subsequentRender: "للعروض اللاحقة،",
    subsequentRenderDesc: "سيستدعي React المكون الدالة الذي أدى تحديث حالته إلى تشغيل العرض.",
    recursive: "هذه العملية تتكرر: إذا كان المكون المحدث يُرجع مكونًا آخر، سيعرض React ذلك المكون، وإذا كان ذلك المكون يُرجع شيئًا أيضًا، سيعرضه أيضًا، وهكذا. ستستمر العملية حتى لا توجد مكونات متداخلة أخرى ويعرف React بالضبط ما يجب عرضه على الشاشة.",
    galleryExample: "مثال: Gallery و Image",
    galleryExampleText: "في المثال التالي، سيستدعي React دالة Gallery() ودالة Image() عدة مرات:",
    initialRenderText: "خلال العرض الأولي، سيقوم React بإنشاء عُقد DOM لـ <section> و <h1> وثلاثة علامات <img>.",
    reRenderText: "خلال إعادة العرض، سيحسب React أيًا من خصائصها قد تغيرت منذ العرض السابق. لن يفعل أي شيء بهذه المعلومات حتى الخطوة التالية، مرحلة الإيداع.",
    pitfall: "تنبيه: يجب أن يكون العرض دائمًا حسابًا نقيًا",
    sameInputs: "نفس المدخلات، نفس المخرجات. نظرًا لنفس المدخلات، يجب أن يُرجع المكون نفسه دائمًا JSX نفسه.",
    mindsOwn: "يلتزم بشؤونه. لا يجب أن يُغير أي كائنات أو متغيرات كانت موجودة قبل العرض.",
    strictMode: "وإلا، ستواجه سلوكًا غامضًا وغير متوقع مع نمو قاعدة الكود الخاص بك. عند التطوير في Strict Mode، يستدعي React وظيفة كل مكون مرتين، مما يمكن أن يكشف الأخطاء الناجمة عن الوظائف غير النقية.",
    step3Title: "الخطوة 3: React يودع في DOM",
    step3Intro: "بعد عرض (استدعاء) مكوناتك، سيعدّل React على DOM.",
    initialRender3: "للعرض الأولي،",
    reRender3: "لإعادة العرض،",
    sameOutput: "يُغيّر React عُقد DOM فقط إذا كان هناك فرق بين العروض.",
    clockExample: "مثال: Clock",
    clockExampleText: "على سبيل المثال، هنا مكون يُعاد عرضه مع خصائص مختلفة مُمررة من الأصله كل ثانية. لاحظ كيف يمكنك إضافة بعض النص في <input>، تحديث قيمته، لكن النص لا يختفي عند إعادة عرض المكون:",
    clockExplanation: "يحدث هذا لأنه في هذه الخطوة الأخيرة، يُحدّث React فقط محتوى <h1> بالوقت الجديد. يرى أن <input> يظهر في JSX في نفس المكان كما في آخر مرة، لذا لا يلمس React الـ <input>—أو قيمته!",
    browserPaint: "رسم المتصفح",
    browserPaintText: "بعد заверstage مرحلة الإيداع، سيعيد المتصفح رسم الشاشة. على الرغم من أن هذه العملية تُعرف بالرسم في المتصفح، سنشير إليها بالرسم لتجنب الاللتباس.",
    demoTitle: "تجربة: التقييم الحريص مقابل الكسول",
    demoText: "يقوم React بتقييم وظيفة المكون ومعرفة ما تُرجعه. لاحظ كيف ينتظر React حتى يُحتاج المكون قبل الحساب.",
    show: "إظهار",
    hide: "إخفاء",
    clock: "الساعة",
    recapTitle: "ملخص",
    recap1Title: "يحدث أي تحديث للشاشة في تطبيق React في ثلاث خطوات:",
    recap1List: ["تشغيل", "عرض", "إيداع"],
    recap2: "يمكنك استخدام StrictMode لإيجاد أخطاء في المكونات",
    recap3: "لا يلمس React DOM إذا كانت نتيجة العرض نفس_last_time.",
    challenges: "التحديات",
    languageBtn: "English",
    languageBtnAr: "العربية",
  }
};

function Clock({ color, time }) {
  return (
    <h1 style={{ color }}>
      {color} {time}
    </h1>
  );
}

export default function App() {
  const [show, setShow] = useState(true);
  const [lang, setLang] = useState("en");
  const t = translations[lang];

  const toggleLang = () => {
    setLang(lang === "en" ? "ar" : "en");
  };

  return (
    <div className="main-container">
      <button className="lang-toggle" onClick={toggleLang}>
        {lang === "en" ? "العربية" : "English"}
      </button>
      <div className="card-glass">
        <h1>{t.title}</h1>
        <p>
          {t.intro}
        </p>
      </div>

      <div className="card-glass">
        <h2>{t.mentalModelTitle}</h2>
        <p>
          {t.mentalModelText}
        </p>
        <p>{t.processText}</p>
        
        <div className="flow-diagram">
          <div className="flow-step">
            <strong>1. {lang === "en" ? "Trigger" : "تشغيل"}</strong>
            <p>{lang === "en" ? "Guest's order to kitchen" : "طلب العميل للمطبخ"}</p>
          </div>
          <span className="flow-arrow">→</span>
          <div className="flow-step">
            <strong>2. {lang === "en" ? "Render" : "عرض"}</strong>
            <p>{lang === "en" ? "Prepare the order" : "تحضير الطلب"}</p>
          </div>
          <span className="flow-arrow">→</span>
          <div className="flow-step">
            <strong>3. {lang === "en" ? "Commit" : "إيداع"}</strong>
            <p>{lang === "en" ? "Place order on table" : "وضع الطلب على الطاولة"}</p>
          </div>
        </div>
      </div>

      <div className="card-glass">
        <h2>{t.step1Title}</h2>
        <p>
          {t.step1Reasons}
        </p>
        <ul>
          <li><strong>{t.initialRender}:</strong> {t.initialRenderDesc}</li>
          <li><strong>{t.stateUpdate}:</strong> {t.stateUpdateDesc}</li>
        </ul>

        <h3>{t.initialRenderCode}</h3>
        <p>
          When your app starts, you need to trigger the initial render. Frameworks and 
          sandboxes sometimes hide this code, but it's done by calling createRoot with 
          the target DOM node, and then calling its render method with your component:
        </p>
        <pre className="code-block">{`import Image from './Image.js';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'))
root.render(<Image />);`}</pre>
        <p>
          {lang === "en" 
            ? "Try commenting out the root.render() call and see the component disappear!"
            : "حاول التعليق على استدعاء root.render() وشاهد المكون يختفي!"}
        </p>

        <h3>{t.reRendersCode}</h3>
        <p>
          Once the component has been initially rendered, you can trigger further 
          renders by updating its state with the set function. Updating your component's 
          state automatically queues a render. (You can imagine these as a restaurant 
          guest ordering tea, dessert, and all sorts of things after putting in their first 
          order, depending on the state of their thirst or hunger.)
        </p>
      </div>

      <div className="card-glass">
        <h2>{t.step2Title}</h2>
        <p>
          {t.step2Intro}
        </p>
        <p>
          <strong>{t.initialRender2}</strong> {t.initialRender2Desc}
        </p>
        <p>
          <strong>{t.subsequentRender}</strong> {t.subsequentRenderDesc}
        </p>
        <p>
          {t.recursive}
        </p>

        <h3>{t.galleryExample}</h3>
        <p>
          {t.galleryExampleText}
        </p>
        <pre className="code-block">{`export default function Gallery() {
  return (
    <section>
      <h1>Inspiring Sculptures</h1>
      <Image />
      <Image />
      <Image />
    </section>
  );
}

function Image() {
  return (
    <img
      src="https://react.dev/images/docs/scientists/ZF6s192.jpg"
      alt="'Floralis Genérica' by Eduardo Catalano: a gigantic metallic flower sculpture with reflective petals"
    />
  );
}`}</pre>
        <p>
          {t.initialRenderText}
        </p>
        <p>
          {t.reRenderText}
        </p>

        <div className="callout warning">
          <h4>{t.pitfall}</h4>
          <ul>
            <li>
              <strong>{t.sameInputs}</strong>
            </li>
            <li>
              <strong>{t.mindsOwn}</strong>
            </li>
          </ul>
          <p>
            {t.strictMode}
          </p>
        </div>
      </div>

      <div className="card-glass">
        <h2>{t.step3Title}</h2>
        <p>
          {t.step3Intro}
        </p>
        <ul>
          <li>
            <strong>{t.initialRender3}</strong> {lang === "en" 
              ? "React will use the appendChild() DOM API to put all the DOM nodes it has created on screen."
              : "سيستخدم React واجهة appendChild() API لـ DOM لوضع جميع عُقد DOM التي أنشأها على الشاشة."}
          </li>
          <li>
            <strong>{t.reRender3}</strong> {lang === "en"
              ? "React will apply the minimal necessary operations to make the DOM match the latest rendering output."
              : "سيُطبق React العمليات الضرورية لـ DOM المطابقة لأحدث ناتج للعرض."}
          </li>
        </ul>
        <p>
          {t.sameOutput}
        </p>

        <h3>{t.clockExample}</h3>
        <p>
          {t.clockExampleText}
        </p>
        <pre className="code-block">{`export default function Clock({ time }) {
  return (
    <>
      <h1>{time}</h1>
      <input />
    </>
  );
}`}</pre>
        <p>
          {t.clockExplanation}
        </p>
      </div>

      <div className="card-glass">
        <h2>{t.browserPaint}</h2>
        <p>
          {t.browserPaintText}
        </p>
      </div>

      <div className="card-glass">
        <h2>{t.demoTitle}</h2>
        <p>
          {t.demoText}
        </p>
        <button onClick={() => setShow(!show)}>
          {show ? t.hide : t.show} {t.clock}
        </button>
        {show && (
          <div className="Toolbar">
            <Clock color="blue" time={new Date().toLocaleTimeString()} />
            <Clock color="red" time={new Date().toLocaleTimeString()} />
          </div>
        )}
      </div>

      <div className="card-glass">
        <h2>{t.recapTitle}</h2>
        <ul>
          <li>
            Any screen update in a React app happens in three steps:
            <ol>
              <li>Trigger</li>
              <li>Render</li>
              <li>Commit</li>
            </ol>
          </li>
          <li>You can use <code>StrictMode</code> to find mistakes in your components.</li>
          <li>React does not touch the DOM for rendering changes if the result is the same.</li>
        </ul>
      </div>

    </div>
  );
}
