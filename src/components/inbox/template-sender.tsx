"use client";

import { useEffect, useState } from "react";
import type { TemplateDto } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useT } from "@/components/language-provider";

/**
 * Selector de plantilla aprobada para conversaciones con ventana cerrada
 * (FR-005/FR-051). Sin plantillas aprobadas muestra el estado vacío.
 */
export function TemplateSender({
  conversationId,
  onSent,
}: {
  conversationId: string;
  onSent: () => void;
}) {
  const [templates, setTemplates] = useState<TemplateDto[] | null>(null);
  const [selectedId, setSelectedId] = useState<string>("");
  const [variable, setVariable] = useState("");
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const t = useT();

  useEffect(() => {
    let cancelled = false;
    fetch("/api/templates")
      .then((r) => (r.ok ? r.json() : { templates: [] }))
      .then((d: { templates?: TemplateDto[] }) => {
        if (!cancelled) {
          setTemplates(
            (d.templates ?? []).filter((t) => t.status === "approved")
          );
        }
      })
      .catch(() => {
        if (!cancelled) setTemplates([]);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  if (templates === null) {
    return <p className="text-xs text-muted-foreground">{t("tpl.loading")}</p>;
  }

  if (templates.length === 0) {
    return (
      <p className="text-sm text-muted-foreground">
        {t("tpl.empty")}{" "}
        <a href="/settings/templates" className="text-primary hover:underline">
          {t("tpl.empty link")}
        </a>{" "}
        {t("tpl.empty wait")}
      </p>
    );
  }

  const selected = templates.find((t) => t.id === selectedId) ?? null;
  const needsVariable = selected ? /\{\{\s*1\s*\}\}/.test(selected.body) : false;

  async function send() {
    if (!selected || sending) return;
    setSending(true);
    setError(null);
    const res = await fetch(
      `/api/conversations/${conversationId}/messages/template`,
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          templateId: selected.id,
          variable: needsVariable ? variable : undefined,
        }),
      }
    );
    setSending(false);
    if (!res.ok) {
      const data = (await res.json().catch(() => null)) as {
        error?: { message?: string };
      } | null;
      setError(data?.error?.message ?? t("tpl.send error"));
      return;
    }
    setSelectedId("");
    setVariable("");
    onSent();
  }

  return (
    <div className="space-y-3">
      <div className="space-y-1.5">
        <Label htmlFor="template-select">{t("tpl.label")}</Label>
        <select
          id="template-select"
          value={selectedId}
          onChange={(e) => setSelectedId(e.target.value)}
          className="flex h-9 w-full rounded-lg border border-slate-700 bg-[#0B0F19] px-3 py-1 text-sm text-slate-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        >
          <option value="">{t("tpl.choose")}</option>
          {templates.map((t) => (
            <option key={t.id} value={t.id}>
              {t.name} ({t.language})
            </option>
          ))}
        </select>
      </div>
      {selected && (
        <p className="rounded-md bg-secondary/60 p-2.5 text-xs text-muted-foreground">
          {selected.body}
        </p>
      )}
      {needsVariable && (
        <div className="space-y-1.5">
          <Label htmlFor="template-variable">{t("tpl.variable")}</Label>
          <Input
            id="template-variable"
            value={variable}
            onChange={(e) => setVariable(e.target.value)}
            placeholder={t("tpl.variable placeholder")}
          />
        </div>
      )}
      {error && <p className="text-xs text-destructive">{error}</p>}
      <Button
        onClick={() => void send()}
        disabled={!selected || sending || (needsVariable && !variable.trim())}
      >
        {sending ? t("tpl.sending") : t("tpl.send")}
      </Button>
    </div>
  );
}
