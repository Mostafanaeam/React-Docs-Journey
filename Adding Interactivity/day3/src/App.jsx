import "./App.css";
import { useState, useEffect } from "react";

const translations = {
  en: {
    youWillLearnTitle: "You will learn",
    youWillLearn: [
      "What rendering means in React",
      "When and why React renders a component",
      "The steps involved in displaying a component on screen",
      "Why rendering does not always produce a DOM update",
    ],
    intro: "Imagine that your components are cooks in the kitchen, assembling tasty dishes from ingredients. In this scenario, React is the waiter who puts in requests from customers and brings them their orders. This process of requesting and serving UI has three steps:",
    step1: "Triggering a render",
    step1Desc: "(delivering the guest's order to the kitchen)",
    step2: "Rendering the component",
    step2Desc: "(preparing the order in the kitchen)",
    step3: "Committing to the DOM",
    step3Desc: "(placing the order on the table)",
    step1Title: "Step 1: Trigger a render",
    step1Text: "There are two reasons for a component to render:",
    step1Point1: "It's the component's initial render.",
    step1Point2: "The component's (or one of its ancestors') state has been updated.",
    initialRenderTitle: "Initial render",
    initialRender: "When your app starts, you need to trigger the initial render. Frameworks and sandboxes sometimes hide this code, but it's done by calling createRoot with the target DOM node, and then calling its render method with your component:",
    initialRenderNote: "Try commenting out the root.render() call and see the component disappear!",
    rerendersTitle: "Re-renders when state updates",
    rerenders: "Once the component has been initially rendered, you can trigger further renders by updating its state with the set function. Updating your component's state automatically queues a render. (You can imagine these as a restaurant guest ordering tea, dessert, and all sorts of things after putting in their first order, depending on the state of their thirst or hunger.)",
    step2Title: "Step 2: React renders your components",
    step2Text: "After you trigger a render, React calls your components to figure out what to display on screen.",
    step2Bold: "Rendering is React calling your components.",
    step2Point1: "On initial render, React will call the root component.",
    step2Point2: "For subsequent renders, React will call the function component whose state update triggered the render.",
    recursive: "This process is recursive: if the updated component returns some other component, React will render that component next, and if that component also returns something, it will render that component next, and so on. The process will continue until there are no more nested components and React knows exactly what should be displayed on screen.",
    recursiveExample: "In the following example, React will call Gallery() and Image() several times:",
    initialRenderBullet: "During the initial render, React will create the DOM nodes for <section>, <h1>, and three <img> tags.",
    rerenderBullet: "During a re-render, React will calculate which of their properties, if any, have changed since the previous render. It won't do anything with that information until the next step, the commit phase.",
    pitfallTitle: "Pitfall",
    pitfallText: "Rendering must always be a pure calculation:",
    pitfallPoint1: "Same inputs, same output. Given the same inputs, a component should always return the same JSX. (When someone orders a salad with tomatoes, they should not receive a salad with onions!)",
    pitfallPoint2: "It minds its own business. It should not change any objects or variables that existed before rendering. (One order should not change anyone else's order.)",
    pitfallNote: "Otherwise, you can encounter confusing bugs and unpredictable behavior as your codebase grows in complexity. When developing in Strict Mode, React calls each component's function twice, which can help surface mistakes caused by impure functions.",
    deepDiveTitle: "Deep Dive: Optimizing performance",
    deepDive: "The default behavior of rendering all components nested within the updated component is not optimal for performance if the updated component is very high in the tree. If you run into a performance issue, there are several opt-in ways to solve it described in the Performance section. Don't optimize prematurely!",
    step3Title: "Step 3: React commits changes to the DOM",
    step3Text: "After rendering (calling) your components, React will modify the DOM.",
    step3Point1: "For the initial render, React will use the appendChild() DOM API to put all the DOM nodes it has created on screen.",
    step3Point2: "For re-renders, React will apply the minimal necessary operations (calculated while rendering!) to make the DOM match the latest rendering output.",
    step3Bold: "React only changes the DOM nodes if there's a difference between renders.",
    step3Example: "For example, here is a component that re-renders with different props passed from its parent every second. Notice how you can add some text into the <input>, updating its value, but the text doesn't disappear when the component re-renders:",
    step3Explanation: "This works because during this last step, React only updates the content of <h1> with the new time. It sees that the <input> appears in the JSX in the same place as last time, so React doesn't touch the <input>—or its value!",
    epilogueTitle: "Epilogue: Browser paint",
    epilogue: "After rendering is done and React updated the DOM, the browser will repaint the screen. Although this process is known as browser rendering, we'll refer to it as painting to avoid confusion throughout the docs.",
    recapTitle: "Recap",
    recapText: "Any screen update in a React app happens in three steps:",
    recapPoints: ["Trigger", "Render", "Commit"],
    recap2: "You can use Strict Mode to find mistakes in your components",
    recap3: "React does not touch the DOM if the rendering result is the same as last time",
    langToggle: "العربية",
  },
  ar: {
    youWillLearnTitle: "ستتعلم",
    youWillLearn: [
      "ما يعنيه العرض في React",
      "متى ولماذا تعرض React مكونًا",
      "الخطوات المتضمنة في عرض مكون على الشاشة",
      "لماذا لا ينتج عن العرض دائمًا تحديث في DOM",
    ],
    intro: "تخيل أن مكوناتك هي طهاة في المطبخ، يقومون بإعداد أطباق لذيذة من المكونات. في هذا السيناريو، React هو النادل الذي يأخذ الطلبات من العملاء ويقدم لهم طلباتهم. هذه العملية لطلب وخدمة الواجهة لها ثلاث خطوات:",
    step1: "تشغيل العرض",
    step1Desc: "(توصيل طلب الضيف إلى المطبخ)",
    step2: "عرض المكون",
    step2Desc: "(تحضير الطلب في المطبخ)",
    step3: "الإيداع في DOM",
    step3Desc: "(وضع الطلب على الطاولة)",
    step1Title: "الخطوة 1: تشغيل العرض",
    step1Text: "هناك سببان لتشغيل مكون ما:",
    step1Point1: "إنه العرض الأولي للمكون.",
    step1Point2: "تم تحديث حالة المكون (أو أحد أجداده).",
    initialRenderTitle: "العرض الأولي",
    initialRender: "عند بدء تطبيقك، تحتاج إلى تشغيل العرض الأولي. أحيانًا تخفي الأطر وصنادق الرمال هذا الكود، لكن يتم ذلك باستدعاء createRoot مع عقدة DOM المستهدفة، ثم استدعاء طريقة render مع مكونك:",
    initialRenderNote: "حاول التعليق على استدعاء root.render() وشاهد المكون يختفي!",
    rerendersTitle: "إعادة العرض عند تحديث الحالة",
    rerenders: "بمجرد أن يتم عرض المكون أولاً، يمكنك تشغيل عروض إضافية عن طريق تحديث حالته باستخدام الدالة set. يؤدي تحديث حالة مكونك تلقائيًا إلى جدولة عرض. (يمكنك تخيل هذه كضيف في مطعم يطلب الشاي والحلوى وجميع أنواع الأشياء بعد تقديم طلبه الأول، اعتمادًا على حالة عطشه أو جوعه.)",
    step2Title: "الخطوة 2: React تعرض مكوناتك",
    step2Text: "بعد تشغيل العرض، تستدعي React مكوناتك لمعرفة ما سيتم عرضه على الشاشة.",
    step2Bold: "العرض هو استدعاء React لمكوناتك.",
    step2Point1: "عند العرض الأولي، ستستدعي React المكون الجذر.",
    step2Point2: "للعروض اللاحقة، ستستدعي React المكون الدالة الذي أدى تحديث حالته إلى تشغيل العرض.",
    recursive: "هذه العملية تتكرر: إذا كان المكون المحدث يُرجع مكونًا آخر، سيعرض React ذلك المكون بعد ذلك، وإذا كان ذلك المكون يُرجع شيئًا أيضًا، سيعرض ذلك المكون بعد ذلك، وهكذا. ستستمر العملية حتى لا توجد مكونات متداخلة أخرى ويعرف React بالضبط ما يجب عرضه على الشاشة.",
    recursiveExample: "في المثال التالي، سيستدعي React دالة Gallery() ودالة Image() عدة مرات:",
    initialRenderBullet: "خلال العرض الأولي، سيقوم React بإنشاء عُقد DOM لـ <section> و <h1> وثلاثة علامات <img>.",
    rerenderBullet: "خلال إعادة العرض، سيحسب React أيًا من خصائصها، إن وجدت، قد تغيرت منذ العرض السابق. لن يفعل أي شيء بهذه المعلومات حتى الخطوة التالية، مرحلة الإيداع.",
    pitfallTitle: "تنبيه",
    pitfallText: "يجب أن يكون العرض دائمًا حسابًا نقيًا:",
    pitfallPoint1: "نفس المدخلات، نفس المخرجات. نظرًا لنفس المدخلات، يجب أن يُرجع المكون نفسه دائمًا JSX نفسه. (عندما يطلب شخص ما سلطة مع الطماطم، لا يجب أن يتلقى سلطة مع البصل!)",
    pitfallPoint2: "يلتزم بشؤونه. لا يجب أن يُغير أي كائنات أو متغيرات كانت موجودة قبل العرض. (طلب واحد لا يجب أن يغير طلب أي شخص آخر.)",
    pitfallNote: "وإلا، ستواجه أخطاء مربكة وسلوكًا غير متوقع مع نمو قاعدة الكود الخاص بك. عند التطوير في Strict Mode، يستدعي React وظيفة كل مكون مرتين، مما يمكن أن يكشف الأخطاء الناجمة عن الوظائف غير النقية.",
    deepDiveTitle: "غوص عميق: تحسين الأداء",
    deepDive: "السلوك الافتراضي لعرض جميع المكونات المتداخلة ضمن المكون المحدث ليس الأمثل للأداء إذا كان المكون المحدث مرتفعًا جدًا في الشجرة. إذا واجهت مشكلة في الأداء، فهناك عدة طرق اختيارية لحلها موصوفة في قسم الأداء. لا تحسن الأداء قبل الأوان!",
    step3Title: "الخطوة 3: React يودع التغييرات في DOM",
    step3Text: "بعد عرض (استدعاء) مكوناتك، سيعمل React على تعديل DOM.",
    step3Point1: "للعرض الأولي، سيستخدم React واجهة appendChild() DOM API لوضع جميع عُقد DOM التي أنشأها على الشاشة.",
    step3Point2: "لإعادة العرض، سيُطبق React العمليات الضرورية الدنيا (المحسوبة أثناء العرض!) لجعل DOM يتطابق مع أحدث ناتج عرض.",
    step3Bold: "يُغير React عُقد DOM فقط إذا كان هناك فرق بين العروض.",
    step3Example: "على سبيل المثال، هنا مكون يُعاد عرضه مع خصائص مختلفة مُمررة من الأصله كل ثانية. لاحظ كيف يمكنك إضافة بعض النص في <input>، تحديث قيمته، لكن النص لا يختفي عند إعادة عرض المكون:",
    step3Explanation: "يحدث هذا لأنه في هذه الخطوة الأخيرة، يُحدث React فقط محتوى <h1> بالوقت الجديد. يرى أن <input> يظهر في JSX في نفس المكان كما في آخر مرة، لذا لا يلمس React <input>—أو قيمته!",
    epilogueTitle: "خاتمة: رسم المتصفح",
    epilogue: "بعد انتهاء العرض وتحديث React لـ DOM، سيعيد المتصفح رسم الشاشة. على الرغم من أن هذه العملية تُعرف بالرسم في المتصفح، سنشير إليها بالرسم لتجنب الالتباس في الوثائق.",
    recapTitle: "ملخص",
    recapText: "يحدث أي تحديث للشاشة في تطبيق React في ثلاث خطوات:",
    recapPoints: ["تشغيل", "عرض", "إيداع"],
    recap2: "يمكنك استخدام Strict Mode لإيجاد أخطاء في مكوناتك",
    recap3: "لا يلمس React DOM إذا كانت نتيجة العرض نفس آخر مرة",
    langToggle: "English",
  },
};

function Clock({ time }) {
  return (
    <>
      <h1>{time}</h1>
      <input />
    </>
  );
}

function useTime() {
  const [time, setTime] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

export default function App() {
  const [lang, setLang] = useState("en");
  const t = translations[lang];
  const time = useTime();

  return (
    <div className="main-container" dir={lang === "ar" ? "rtl" : "ltr"}>
      <button className="lang-toggle" onClick={() => setLang(lang === "en" ? "ar" : "en")}>
        {t.langToggle}
      </button>

      <div className="card-glass intro-card">
        <h1>Render and Commit</h1>
        <p className="intro-text">
          Before your components are displayed on screen, they must be rendered
          by React. Understanding the steps in this process will help you think
          about how your code executes and explain its behavior.
        </p>

        <div className="you-will-learn">
          <h3>{t.youWillLearnTitle}</h3>
          <ul>
            {t.youWillLearn.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="card-glass">
        <p>{t.intro}</p>

        <ol className="steps-list">
          <li>
            <strong>{t.step1}</strong> <span>{t.step1Desc}</span>
          </li>
          <li>
            <strong>{t.step2}</strong> <span>{t.step2Desc}</span>
          </li>
          <li>
            <strong>{t.step3}</strong> <span>{t.step3Desc}</span>
          </li>
        </ol>

        <div className="flow-diagram">
          <div className="flow-step">
            <strong>1. Trigger</strong>
            <p>{lang === "en" ? "Deliver order to kitchen" : "توصيل الطلب للمطبخ"}</p>
          </div>
          <span className="flow-arrow">→</span>
          <div className="flow-step">
            <strong>2. Render</strong>
            <p>{lang === "en" ? "Prepare the order" : "تحضير الطلب"}</p>
          </div>
          <span className="flow-arrow">→</span>
          <div className="flow-step">
            <strong>3. Commit</strong>
            <p>{lang === "en" ? "Place order on table" : "وضع الطلب على الطاولة"}</p>
          </div>
        </div>
      </div>

      <div className="card-glass">
        <h2>{t.step1Title}</h2>
        <p>{t.step1Text}</p>
        <ol>
          <li>{t.step1Point1}</li>
          <li>{t.step1Point2}</li>
        </ol>

        <h3>{t.initialRenderTitle}</h3>
        <p>{t.initialRender}</p>
        <pre className="code-block">{`import Image from './Image.js';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'))
root.render(<Image />);`}</pre>
        <pre className="code-block">{`export default function Image() {
  return (
    <img
      src="https://react.dev/images/docs/scientists/ZF6s192.jpg"
      alt="'Floralis Genérica' by Eduardo Catalano: a gigantic metallic flower sculpture with reflective petals"
    />
  );
}`}</pre>
        <p>{t.initialRenderNote}</p>

        <h3>{t.rerendersTitle}</h3>
        <p>{t.rerenders}</p>
      </div>

      <div className="card-glass">
        <h2>{t.step2Title}</h2>
        <p>{t.step2Text}</p>
        <p className="bold-highlight">{t.step2Bold}</p>
        <ul>
          <li><strong>{t.step2Point1.split(",")[0]},</strong>{t.step2Point1.split(",").slice(1).join(",")}</li>
          <li><strong>{t.step2Point2.split(",")[0]},</strong>{t.step2Point2.split(",").slice(1).join(",")}</li>
        </ul>
        <p>{t.recursive}</p>
        <p>{t.recursiveExample}</p>

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

        <ul>
          <li>{t.initialRenderBullet}</li>
          <li>{t.rerenderBullet}</li>
        </ul>

        <div className="callout pitfall">
          <h4>{t.pitfallTitle}</h4>
          <p>{t.pitfallText}</p>
          <ul>
            <li>{t.pitfallPoint1}</li>
            <li>{t.pitfallPoint2}</li>
          </ul>
          <p>{t.pitfallNote}</p>
        </div>

        <div className="callout deep-dive">
          <h4>{t.deepDiveTitle}</h4>
          <p>{t.deepDive}</p>
        </div>
      </div>

      <div className="card-glass">
        <h2>{t.step3Title}</h2>
        <p>{t.step3Text}</p>
        <ul>
          <li>{t.step3Point1}</li>
          <li>{t.step3Point2}</li>
        </ul>
        <p className="bold-highlight">{t.step3Bold}</p>
        <p>{t.step3Example}</p>

        <pre className="code-block">{`export default function Clock({ time }) {
  return (
    <>
      <h1>{time}</h1>
      <input />
    </>
  );
}`}</pre>

        <div className="demo-clock">
          <Clock time={time.toLocaleTimeString()} />
        </div>

        <p>{t.step3Explanation}</p>
      </div>

      <div className="card-glass">
        <h2>{t.epilogueTitle}</h2>
        <p>{t.epilogue}</p>
      </div>

      <div className="card-glass recap-card">
        <h2>{t.recapTitle}</h2>
        <ul>
          <li>
            {t.recapText}
            <ol>
              {t.recapPoints.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ol>
          </li>
          <li>{t.recap2}</li>
          <li>{t.recap3}</li>
        </ul>
      </div>
    </div>
  );
}
