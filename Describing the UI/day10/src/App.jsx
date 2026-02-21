import { useState } from "react";
import FancyText from "./FancyText";
import InspirationGenerator from "./InspirationGenerator";
import Copyright from "./Copyright";
import reactLogo from "./assets/react.svg";
import "./App.css";

export default function App() {
  const [showInspiration, setShowInspiration] = useState(true);

  return (
    <div className="container" id="app-root">
      <div className="logo-container">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>

      <div className="section-card">
        <FancyText
          title
          text="Understanding Your UI as a Tree | فهم واجهة المستخدم كشجرة"
        />
        <p>
          React models UI as a tree. Thinking of your app as a tree is useful
          for understanding the relationship between components.
        </p>
        <p>
          يعتبر ريأكت واجهة المستخدم كشجرة. التفكير في تطبيقك كشجرة أمر مفيد
          لفهم العلاقة بين المكونات.
        </p>
      </div>

      <div className="section-card">
        <h2>The Render Tree | شجرة الرندر</h2>
        <p>
          A render tree represents a single render pass of a React application.
          It shows the parent-child relationships between components.
        </p>

        <div className="interactive-demo">
          <div className="controls">
            <button onClick={() => setShowInspiration(!showInspiration)}>
              {showInspiration ? "Hide Inspiration" : "Show Inspiration"}
            </button>
          </div>

          {showInspiration ? (
            <div className="demo-output">
              <InspirationGenerator>
                <FancyText text="Get Inspired App" />
                <Copyright year={2026} />
              </InspirationGenerator>
            </div>
          ) : (
            <p>Components are conditionally removed from the render tree.</p>
          )}

          <div className="visual-tree">
            <div className="tree-node">App</div>
            {showInspiration && (
              <>
                <div className="tree-node">InspirationGenerator</div>
                <div className="tree-node">FancyText</div>
                <div className="tree-node">Copyright</div>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="section-card">
        <h2>Module Dependency Tree | شجرة تبعية الوحدات</h2>
        <p>
          Another relationship in a React app that can be modeled with a tree
          are an app’s module dependencies. Each node is a module and each
          branch represents an import statement.
        </p>
        <p>
          تمثل شجرة التبعية تبعيات الملفات (Modules) في تطبيقك. كل عقدة هي ملف
          وكل فرع يمثل جملة <code>import</code>.
        </p>
      </div>

      <div className="recap-section">
        <h2>Recap | ملخص</h2>
        <ul>
          <li>Trees are a common way to represent UI relationships.</li>
          <li>
            Render trees represent nested React components across a single
            render.
          </li>
          <li>
            Dependency trees represent module dependencies used by bundlers.
          </li>
        </ul>
      </div>
    </div>
  );
}
