import { useTheme } from "@/components/theme-provider";
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  oneDark,
  oneLight,
} from "react-syntax-highlighter/dist/esm/styles/prism";

export function CodeBlock({
  language,
  code,
  filename,
}: {
  language: string;
  code: string;
  filename?: string;
}) {
  const { theme } = useTheme();
  const resolvedTheme =
    theme === "system"
      ? typeof document !== "undefined" &&
        document.documentElement.classList.contains("dark")
        ? "dark"
        : "light"
      : theme;
  const isDark = resolvedTheme === "dark";
  const style = isDark ? oneDark : oneLight;
  const preStyle: React.CSSProperties = {
    margin: "1em 0",
    borderRadius: "0.5rem",
    backgroundColor: isDark ? "#000" : "#fff",
  };
  return (
    <pre style={preStyle}>
      {filename ? (
        <div
          style={{
            padding: "0.5rem 1rem",
            fontSize: "0.875rem",
            borderBottom: `1px solid ${isDark ? "#333" : "#eee"}`,
            fontFamily: "ui-monospace, monospace",
            color: isDark ? "#9ca3af" : "#6b7280",
          }}
        >
          {filename}
        </div>
      ) : null}
      <SyntaxHighlighter
        language={language}
        PreTag="div"
        style={style as unknown as Record<string, React.CSSProperties>}
        customStyle={{ margin: 0, padding: 0, background: "transparent" }}
        codeTagProps={{ style: {} }}
        showLineNumbers
      >
        {code.trim()}
      </SyntaxHighlighter>
    </pre>
  );
}
