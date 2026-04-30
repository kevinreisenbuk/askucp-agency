import React from "react";
import { ArrowRight, LockKeyhole } from "lucide-react";
import type { SiteCopy } from "../content/siteContent";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

type FormData = {
  name: string;
  companyUrl: string;
  monthlyRevenue: string;
  email: string;
  platform: string;
};

const initialFormData: FormData = {
  name: "",
  companyUrl: "",
  monthlyRevenue: "",
  email: "",
  platform: "",
};

function normalizeUrl(value: string) {
  const trimmed = value.trim();
  if (!trimmed) {
    return "";
  }

  return /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
}

function isValidUrl(value: string) {
  try {
    const parsed = new URL(value);
    return parsed.protocol === "http:" || parsed.protocol === "https:";
  } catch {
    return false;
  }
}

export function AuditForm({ copy }: { copy: SiteCopy }) {
  const [formData, setFormData] = React.useState<FormData>(initialFormData);
  const [formStatus, setFormStatus] = React.useState("");

  function updateFormField(field: keyof FormData, value: string) {
    setFormData((current) => ({ ...current, [field]: value }));
    if (formStatus) {
      setFormStatus("");
    }
  }

  async function handleAuditSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const normalized = normalizeUrl(formData.companyUrl);

    if (!isValidUrl(normalized)) {
      setFormStatus(copy.form.invalidUrl);
      return;
    }

    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      setFormStatus(copy.form.invalidEmail);
      return;
    }

    const submission = {
      ...formData,
      companyUrl: normalized,
      submittedAt: new Date().toISOString(),
    };
    const savedSubmissions = JSON.parse(localStorage.getItem("askucpAuditRequests") || "[]") as typeof submission[];
    localStorage.setItem("askucpAuditRequests", JSON.stringify([submission, ...savedSubmissions].slice(0, 20)));

    setFormStatus(copy.form.statusSubmitting);

    if (!supabaseUrl || !supabaseAnonKey) {
      setFormData(submission);
      setFormStatus(copy.form.statusLocal);
      return;
    }

    try {
      const response = await fetch(`${supabaseUrl.replace(/\/$/, "")}/rest/v1/audit_requests`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: supabaseAnonKey,
          Authorization: `Bearer ${supabaseAnonKey}`,
          Prefer: "return=minimal",
        },
        body: JSON.stringify({
          name: submission.name,
          company_url: submission.companyUrl,
          monthly_revenue: submission.monthlyRevenue,
          email: submission.email,
          platform: submission.platform,
        }),
      });

      if (!response.ok) {
        throw new Error(`Form submission failed with status ${response.status}`);
      }

      setFormData(submission);
      setFormStatus(copy.form.statusSuccess);
    } catch {
      setFormData(submission);
      setFormStatus(copy.form.statusSupabaseFail);
    }
  }

  return (
    <section className="audit-section" id="audit">
      <div className="audit-copy">
        <div className="section-kicker">{copy.sections.auditKicker}</div>
        <h2>{copy.sections.auditTitle}</h2>
        <p>{copy.sections.auditText}</p>
        <div className="form-assurance">
          <LockKeyhole size={14} />
          <span>{copy.sections.auditAssurance}</span>
        </div>
        <div className="audit-steps-card">
          <div className="audit-steps-title">{copy.sections.auditListTitle}</div>
          <ul className="audit-steps">
            {copy.auditSteps.map((item, index) => (
              <li key={item}>
                <span className="audit-step-num">0{index + 1}</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <form className="lead-form" onSubmit={handleAuditSubmit}>
        <label>
          <span>{copy.form.name}</span>
          <input
            type="text"
            name="name"
            autoComplete="name"
            placeholder={copy.form.placeholders.name}
            value={formData.name}
            onChange={(event) => updateFormField("name", event.target.value)}
          />
        </label>
        <label>
          <span>{copy.form.companyUrl} <em>{copy.form.required}</em></span>
          <input
            type="text"
            inputMode="url"
            name="company-url"
            autoComplete="url"
            placeholder={copy.form.placeholders.companyUrl}
            value={formData.companyUrl}
            onChange={(event) => updateFormField("companyUrl", event.target.value)}
            required
          />
        </label>
        <label>
          <span>{copy.form.revenue}</span>
          <select
            name="monthly-revenue"
            value={formData.monthlyRevenue}
            onChange={(event) => updateFormField("monthlyRevenue", event.target.value)}
          >
            <option value="" disabled>{copy.form.revenuePlaceholder}</option>
            {copy.form.revenues.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
        <label>
          <span>{copy.form.email}</span>
          <input
            type="email"
            name="email"
            autoComplete="email"
            placeholder={copy.form.placeholders.email}
            value={formData.email}
            onChange={(event) => updateFormField("email", event.target.value)}
            required
          />
        </label>
        <label>
          <span>{copy.form.platform}</span>
          <select
            name="platform"
            value={formData.platform}
            onChange={(event) => updateFormField("platform", event.target.value)}
          >
            <option value="" disabled>{copy.form.platformPlaceholder}</option>
            {copy.form.platforms.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
        <button className="primary-button form-button" type="submit">
          {copy.form.submit}
          <ArrowRight size={14} />
        </button>
        {formStatus && <p className="form-status">{formStatus}</p>}
        <p className="privacy-note">{copy.form.privacy}</p>
      </form>
    </section>
  );
}
