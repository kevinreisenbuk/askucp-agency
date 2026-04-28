import type { Lang } from "../lib/site";

export function LanguageSwitch({
  lang,
  onChange,
}: {
  lang: Lang;
  onChange: (lang: Lang) => void;
}) {
  return (
    <div className="language-switch" aria-label="Language switcher">
      <button className={lang === "en" ? "active" : ""} type="button" onClick={() => onChange("en")}>
        ENG
      </button>
      <button className={lang === "et" ? "active" : ""} type="button" onClick={() => onChange("et")}>
        EST
      </button>
    </div>
  );
}
