# Magnetix Design System

> Dark-theme visual language for AI-driven dashboards. Extracted from the
> Magnetix2 codebase so any other app an AI generates can look identical.
> Built on **Next.js 15 + React 19 + Tailwind CSS v4** (no `tailwind.config.*`
> file — uses the v4 `@import "tailwindcss"` zero-config pipeline). Icons come
> exclusively from `lucide-react`. Font is `Inter` via `next/font/google`.

---

## 0. Golden Rules (apply these first)

1. **Dark-only.** The whole UI is dark. Never use `bg-white`, `text-black`,
   or any Tailwind palette color brighter than `slate-700` as a surface.
2. **Three layered surface depths** (always pick from these, never invent):
   - **app background** → `bg-[#0B0F19]`
   - **sidebar / raised panel** → `bg-[#0F172A]`
   - **card / surface** → `bg-[#151B28]`
3. **Borders** are always desaturated slate, alpha-free hex strings: prefer
   `border border-slate-800` for the default divider, `border-slate-700` for
   stronger separators inside cards, `border-slate-700/50` for soft / nested.
4. **Buttons are `type="button"` always.** Zero native reloads. Every button
   must opt out of the form-submit default to avoid full-page reloads.
5. **Icons come from `lucide-react` only.** Never inline SVGs, never use
   emoji in the UI. Every interactive card has a square icon chip.
6. **Rounded by default.** Cards = `rounded-xl`, buttons/inputs/badges =
   `rounded-lg` (or `rounded-full` for status dots). Never sharp corners.
7. **Spacing scale** sticks to Tailwind defaults: `gap-2, gap-3, gap-4`,
   `p-3, p-4, p-5, p-6`. Sections use `space-y-8` between blocks.
8. **Never use `JSON.parse` on browser-supplied bodies** in API routes; use
   `safeJsonParse<T>` (server side). UI may use `await res.json()`.

---

## 1. Stack & Globals

### `app/globals.css`

```css
@import "tailwindcss";

/* Custom Scrollbar - Dark Theme */
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
::-webkit-scrollbar-track {
  background: #0B0F19;
}
::-webkit-scrollbar-thumb {
  background: #334155;
  border-radius: 3px;
}
::-webkit-scrollbar-thumb:hover {
  background: #475569;
}

/* Firefox scrollbar */
* {
  scrollbar-width: thin;
  scrollbar-color: #334155 #0B0F19;
}
```

### `app/layout.tsx`

```tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '<App Name>',
  description: '<Tagline>',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-[#0B0F19] text-white min-h-screen`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
```

Key facts:
- `<html lang="en" className="dark">` — permanent dark mode.
- `text-white` is the body default, but most surfaces override to `text-slate-200`
  or `text-slate-300`/`400` (true white is too bright for this palette).
- `suppressHydrationWarning` is required because the theme is decided at build
  time and the class must not flicker on hydration.
- Font: **Inter**, only the `latin` subset is loaded.

### `postcss.config.mjs` (Tailwind v4)

```js
const config = {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
};
export default config;
```

### `tsconfig.json` essentials

- `"target": "ES2017"`, `"module": "esnext"`, `"moduleResolution": "bundler"`,
  `"strict": true`, `"noEmit": true`, `"jsx": "preserve"`.
- Path alias: `"@/*": ["./*"]` → import with `@/lib/...`, `@/components/...`.

---

## 2. Color System

### 2.1 Core surfaces (layered dark surfaces)

| Token / Usage             | Hex / Class         | Role                                                         |
| ------------------------- | -------------------- | ------------------------------------------------------------ |
| App background            | `bg-[#0B0F19]`      | The deepest canvas behind every panel.                       |
| Sidebar / raised panel    | `bg-[#0F172A]`      | Permanent vertical chrome (left rail), inner sub-panels.     |
| Card surface              | `bg-[#151B28]`      | Every card, modal panel, settings block, metric tile.        |
| Inner input background    | `bg-[#0B0F19]` *(inside cards)* | Inputs inside a `bg-[#151B28]` card drop back to the deepest color for contrast. |
| Modal panel surface       | `bg-[#0F1420]`      | Used for centered modal dialogs (slight lift from `#151B28`). |

**Rule**: the darkest tone (`#0B0F19`) is always the page and the *inside* of
an input; cards (`#151B28`) are one step lighter; sidebars and modals sit at
intermediate shades (`#0F172A` / `#0F1420`). Think three z-layers: **page →
panel → card-within-panel**.

### 2.2 Text scale

| Class                | Used for                                                  |
| -------------------- | --------------------------------------------------------- |
| `text-white`         | Body default (rarely used directly).                      |
| `text-slate-200`     | Headings (`h1`, `h2`, `h3`), card titles, modal titles.   |
| `text-slate-300`     | Sub-headings, secondary headings, emphasized body.         |
| `text-slate-400`     | Hyperlinks-of-text, body text inside cards.                |
| `text-slate-500`     | Descriptions, helper text, "p" taglines under headings.    |
| `text-slate-600`     | Tiny captions, metadata, low-emphasis footer text.        |
| `text-[10px]` w/ `text-slate-500/600` | Eyebrow labels, status metadata, table cells "id". |

### 2.3 Accent palette (semantic colors)

All used as Tailwind's `*-500` shade unless noted. Each accent appears in
four forms: solid, `/10` soft background, `/20` chip background, `/30` border.

| Accent    | Solid           | Soft bg (`/10`)   | Chip bg (`/20`)    | Border (`/30`)|
| --------- | --------------- | ----------------- | ------------------ | --------------|
| **Blue**  | `bg-blue-600`   | `bg-blue-600/10`  | `bg-blue-600/20`   | `border-blue-500/30` |
| **Emerald** | `bg-emerald-600` | `bg-emerald-500/10` | `bg-emerald-500/20` | `border-emerald-500/30` |
| **Violet** | `bg-violet-600` | `bg-violet-500/10`| `bg-violet-600/20` | `border-violet-500/30` |
| **Amber** | (rare solid)    | `bg-amber-500/10` | `bg-amber-500/20`  | `border-amber-500/30` / `border-amber-700/30` for callout boxes |
| **Cyan**  | `bg-cyan-600`   | `bg-cyan-500/10`  | `bg-cyan-600/20`  | `border-cyan-500/30` |
| **Purple** | `bg-purple-600` | `bg-purple-500/10` | `bg-purple-600/20` | `border-purple-500/30` |
| **Red**   | `bg-red-600`    | `bg-red-500/10`   | `bg-red-500/20`   | `border-red-500/30` / `border-red-900/20` |
| **Sky**   | (icon only) `text-sky-400` | — | — | — |

### 2.4 Status badge palette (chips)

| Status                | Background                  | Text              | Border/Misc                       |
| --------------------- | --------------------------- | ------------------ | --------------------------------- |
| Active / Running      | `bg-emerald-500/10`         | `text-emerald-400` | Optional `border border-emerald-500/20` |
| Idle / Empty          | `bg-slate-600/20`           | `text-slate-500`   | none                              |
| Configured            | `bg-emerald-500/10`         | `text-emerald-400` | + `<CheckCircle2 className="w-3 h-3" />` prefix |
| Connected (LLM)       | `text-emerald-400` pill      | above              | rounded-full                       |
| Warning / Risk        | `bg-amber-950/20`            | `text-amber-300`   | `border border-amber-700/30`        |
| Error                 | `bg-red-900/20`             | `text-red-400`     | `border border-red-500/30`         |
| "9+" overflow badge   | `bg-red-500`                | `text-white`       | + `animate-pulse shadow-sm shadow-red-500/50` |

### 2.5 Platform / icon-chip color assignments

Consistent across components (used for the icon-only chips next to titles):

- **Dashboard / Layout** → `text-blue-400` (or `text-blue-500` for the larger
  `w-6 h-6` page-title icons).
- **Workspaces** → `text-blue-500` (small) / `text-blue-400` (chip).
- **Agents** → `text-emerald-500` (bot accent) / `text-emerald-400` (chip).
- **Campaigns** → `text-purple-400` / `text-purple-500` (the zap accent).
- **Approvals / Pending** → `text-amber-400` / `text-amber-500`.
- **Settings (gear)** → `text-blue-400`.
- **MCP Manager** → `text-cyan-400`.
- **Timezone / Globe (small)** → `text-amber-400`.
- **Proxy / Companion** → `text-violet-400`.
- **Live Agent activities** → `text-sky-400` (web), `text-purple-400` (DOM),
  `text-amber-400` (auth).

---

## 3. Typography & Font Scale

Font: **Inter** (`next/font/google`), `font-mono` falls back to Tailwind's
default mono stack (used for IDs, dates, code, logs, env strings).

| Element                              | Classes (size + weight + color)                              |
| ------------------------------------ | ------------------------------------------------------------ |
| Page header `h1`                     | `text-xl font-bold text-slate-200 flex items-center gap-2`   |
| Section `h2`                         | `text-lg font-bold text-slate-200`                            |
| Card `h3`                            | `text-sm font-semibold text-slate-300`                       |
| `h4` inside callouts                 | `text-sm font-bold text-slate-200`                           |
| Body / description `p`               | `text-sm text-slate-500`                                     |
| Stat value metric                    | `text-2xl font-bold text-slate-200`                          |
| Eyebrow / uppercase label            | `text-[10px] font-semibold uppercase tracking-wider text-slate-500` |
| Eyebrow (uppercase, bold)            | `text-[10px] uppercase tracking-widest text-slate-500 font-bold` |
| Status chip text                     | `text-[10px] font-semibold` / `font-bold`                    |
| Caption / sub-meta `font-mono`       | `text-[10px] text-slate-600 font-mono`                       |
| Mono IDs / URLs                      | `text-sm font-mono` w/ `text-slate-200` or `text-slate-500`  |
| Log line timestamps (Tailwind-default)| `text-[10px] text-slate-600`                                  |

Micro-typography conventions:
- **All uppercase eyebrow / labels** use the `tracking-wider` or
  `tracking-widest` letter-spacing class and explicitly reduce size to
  `text-[10px]` or `text-xs`. This is pervasive and should be respected.
- **Fonts**: Body text is sans (`Inter`). Identifiers, log lines, env
  strings, command lines and dates use `font-mono`. Never apply `font-mono`
  to plain English headings.

### Line spacing
- Headings rely on `mb-1`, `mb-2`, `mb-3` to add breathing room — *never* use
  `leading-*` modifiers, with one exception below.
- Long paragraph blocks (e.g. callouts, descriptions, "How it works") use
  `leading-relaxed` for readability.

---

## 4. Layout & Spacing

### 4.1 App shell

```
+-------------------------------------------+
| Sidebar (left rail) | Main feed          |
|  w-16 md:w-56       |  flex-1           |
|  bg-[#0F172A]       |  bg-[#0B0F19]      |
|  border-r slate-800 |  flex flex-col h-full overflow-hidden
+-------------------------------------------+
```

- `<main className="flex-1 bg-[#0B0F19] flex flex-col h-full overflow-hidden">`
  wraps every feed.
- Inside `<main>`: a fixed `<header>` (with `shrink-0`), then a scrollable
  content `<div className="flex-1 overflow-y-auto p-6">`.

### 4.2 Sticky header pattern (every page)

```tsx
<header className="p-6 border-b border-slate-800 flex justify-between items-center bg-[#0B0F19]/50 backdrop-blur shrink-0">
  <div>
    <h1 className="text-xl font-bold text-slate-200 flex items-center gap-2">
      <Icon className="w-6 h-6 text-blue-500" />
      Page Title
    </h1>
    <p className="text-sm text-slate-500 mt-1">Subtitle / description</p>
  </div>
  <div className="flex items-center gap-2">{/* actions */}</div>
</header>
```
Required tokens: `border-b border-slate-800`, `bg-[#0B0F19]/50 backdrop-blur`,
`shrink-0`. The optional `mt-1` on the `<p>` differentiates the variant where
description goes below the title (vs inline). Both are seen in the wild.

### 4.3 Content width

- Forms & settings: `<div className="max-w-5xl mx-auto space-y-8">…</div>`.
- Analytics & dashboards: `<div className="max-w-4xl mx-auto space-y-6">`.
- Chat: full height with internal scroll, no max width.

### 4.4 Grids

- Metric cards: `grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6`.
- Workspace / card collections: `grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4`.
- Quick-action inline grid: `grid grid-cols-1 sm:grid-cols-3 gap-3`.

### 4.5 Spaces between sections

Inside a feed vertical scroll, blocks are separated by `space-y-8` when
wrapped in a `max-w-*` container, or stacked with explicit `mb-6` / `mt-6`
otherwise.

---

## 5. Components

### 5.1 Sidebar (left rail)

```tsx
<div className="w-16 md:w-56 h-full bg-[#0F172A] border-r border-slate-800 flex flex-col items-center md:items-start shrink-0 p-4">
  <div className="flex-1 w-full flex flex-col gap-2">
    <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-3 hidden md:block px-2">Navigation</p>
    <NavItem icon={<LayoutDashboard className="w-4 h-4" />} label="Dashboard" active={currentTab === 'dashboard'} onClick={...} />
    ...
  </div>
  <div className="w-full mt-auto mb-4 hidden md:block">
    <div className="bg-blue-600/20 border border-blue-500/30 p-3 rounded-lg mb-4">...</div>
  </div>
</div>
```

Sidebar nav item:
```tsx
<button
  onClick={onClick}
  className={`w-full flex items-center justify-center md:justify-start px-3 py-2 rounded-lg text-sm transition-colors relative ${
    active
      ? 'bg-blue-600/10 text-blue-400 font-medium'
      : 'text-slate-400 hover:bg-slate-800'
  }`}
>
  <span className="shrink-0 relative">
    {icon}
    {badge !== undefined && (
      <span className="absolute -top-1.5 -right-2 min-w-[16px] h-4 bg-red-500 text-white text-[9px] font-bold rounded-full flex items-center justify-center px-1 leading-none animate-pulse shadow-sm shadow-red-500/50">
        {badge > 9 ? '9+' : badge}
      </span>
    )}
  </span>
  <span className="ml-3 hidden md:block">{label}</span>
</button>
```

Sidebar specifics:
- Tight `w-16` on mobile, expands to `md:w-56` on tablet+ (icons only / icons
  + labels).
- End-of-rail "Storage Status" callout uses `bg-blue-600/20 border border-blue-500/30`.
- Overflow badges pulse: `animate-pulse shadow-sm shadow-red-500/50`, show `9+`
  for any value over nine.

### 5.2 Card

The base unit of content. Two flavours:

```tsx
{/* Flat card (settings block, modal panel interior) */}
<div className="bg-[#151B28] border border-slate-800 rounded-xl p-5">
  ...
</div>

{/* Selectable / interactive card (workspace tile) */}
<div className={`bg-[#151B28] border rounded-xl p-5 transition-all duration-200 group relative ${
  isActive
    ? 'border-blue-600/50 ring-1 ring-blue-600/20'
    : 'border-slate-800 hover:border-slate-700'
}`}>
  ...
</div>
```

Card rules:
- Always `rounded-xl` + `p-5` (occasionally `p-6` for hero blocks).
- Default border: `border-slate-800`.
- Hover on selectable: `hover:border-slate-700` (one shade lighter).
- Selected / active: `border-blue-600/50 ring-1 ring-blue-600/20`.
- Group hover for child emphasis: parent `group`, children use
  `group-hover:opacity-100`, `group-hover:text-slate-100`, etc.

### 5.3 Section block (inside a page)

```tsx
<section>
  <div className="flex items-center gap-3 mb-4">
    <div className="w-8 h-8 bg-blue-600/20 rounded-lg flex items-center justify-center">
      <Cpu className="w-4 h-4 text-blue-400" />
    </div>
    <div>
      <h2 className="text-lg font-bold text-slate-200">Section Title</h2>
      <p className="text-xs text-slate-500">Helper text under the title.</p>
    </div>
  </div>
  {/* …card(s)… */}
</section>
```

Each section has a **32x32 colored icon chip** (`w-8 h-8 bg-<accent>-600/20
rounded-lg flex items-center justify-center` with a `w-4 h-4` icon inside in
the matching `text-<accent>-400` shade). This is the most repeated visual
motif — keep it consistent across every settings/section header.

Inside cards a smaller **24x24 chip** variant appears:
`w-6 h-6 bg-<accent>-600/20 rounded flex items-center justify-center` (note
`rounded`, not `rounded-lg`) with a `w-3 h-3` icon.

### 5.4 Buttons

Every button uses `type="button"`.

#### Primary (action)
```tsx
<button
  type="button"
  onClick={handler}
  disabled={loading}
  className="px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-sm font-semibold transition-all flex items-center gap-2 disabled:opacity-50 shadow-lg shadow-blue-900/20"
>
  {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
  {loading ? 'Saving...' : 'Save'}
</button>
```

#### Secondary / destructive
- **Green / success**: `bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-900/20`.
- **Red / stop**: `bg-red-500 hover:bg-red-600 text-white` (note: hover goes *darker* for stop, lighter for every other button).
- **Violet / companion**: `bg-violet-600 hover:bg-violet-500 text-white shadow-lg shadow-violet-900/20`.
- **Cyan / networking**: `bg-cyan-600 hover:bg-cyan-500 text-white`.

#### Ghost / neutral
```tsx
<button
  type="button"
  className="px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-sm transition-colors flex items-center gap-2"
>
  <RefreshCw className="w-4 h-4" /> Refresh
</button>
```

#### Icon-only destructive
```tsx
<button
  type="button"
  onClick={...}
  className="p-1.5 rounded-lg text-slate-600 hover:text-red-400 hover:bg-red-900/20 transition-colors disabled:opacity-50"
  title="Delete workspace"
>
  <Trash2 className="w-4 h-4" />
</button>
```
Or when emphasised:
```tsx
className="p-1.5 rounded-md bg-red-600/10 text-red-400 hover:bg-red-600/20 transition-colors"
```

#### Toggle pill (enable/disable MCP server)
```tsx
<button
  type="button"
  title={server.enabled ? 'Disable' : 'Enable'}
  className={`p-1.5 rounded-md transition-colors ${
    server.enabled
      ? 'bg-emerald-600/20 text-emerald-400 hover:bg-emerald-600/30'
      : 'bg-slate-700/40 text-slate-500 hover:bg-slate-700/60'
  }`}
>
  {server.enabled ? <Power className="w-3.5 h-3.5" /> : <PowerOff className="w-3.5 h-3.5" />}
</button>
```

Button micro-rules:
- Use `px-5 py-2` for primary actions, `px-4 py-2` for medium, `px-3 py-2` for compact, `p-1.5` for icon-only.
- Add `shadow-lg shadow-<accent>-900/20` to the brand-colored CTAs only
  (blue/emerald/violet). Neutral & ghost buttons are shadow-less.
- Disabled state = `disabled:opacity-50` + (when applicable)
  `disabled:cursor-not-allowed`. Always preserve clickability for screen
  readers — never use `pointer-events-none`.

### 5.5 Inputs

```tsx
<div className="relative">
  <input
    type={show ? 'text' : 'password'}
    value={value}
    onChange={(e) => setValue(e.target.value)}
    placeholder="sk-proj-..."
    className="w-full bg-[#0B0F19] border border-slate-700 rounded-lg py-2.5 px-4 pr-10 text-sm text-slate-200 focus:outline-none focus:border-blue-500 placeholder-slate-600 font-mono"
  />
  <button
    type="button"
    onClick={() => setShow(!show)}
    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors"
  >
    {show ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
  </button>
</div>
```

Input rules:
- Background: always `bg-[#0B0F19]` (drops back through the card).
- Border: `border-slate-700` for normal, `border-slate-800` for embAlt form
  inputs (e.g. workspace create).
- Padding: `py-2.5 px-4` (with `pr-10` if a trailing eye toggle lives on the
  right at `right-2.5`).
- Focus: `focus:outline-none focus:border-blue-500` (or `focus:border-emerald-500`
  for the emerald-themed forms). Never use `focus:ring` for primary inputs;
  optional `focus:ring-1 focus:ring-blue-500` is accepted for compact form
  inputs (workspace-id style).
- Placeholders: `placeholder-slate-600`.
- For values that are IDs, secrets, URLs, or env strings: add `font-mono`.
- Toggle eye button: always `type="button"`, positioned `absolute right-2.5
  top-1/2 -translate-y-1/2`.

### 5.6 Badges & status chips

```tsx
{/* Configured pill */}
<span className="text-[10px] px-2 py-0.5 bg-emerald-500/10 text-emerald-400 rounded-full font-semibold flex items-center gap-1">
  <CheckCircle2 className="w-3 h-3" /> Configured
</span>

{/* Empty pill */}
<span className="text-[10px] px-2 py-0.5 bg-slate-600/20 text-slate-500 rounded-full font-semibold">
  Empty
</span>

{/* Local MCP tag */}
<span className="text-[9px] px-1.5 py-0.5 rounded font-bold bg-violet-500/15 text-violet-400 border border-violet-500/30">
  LOCAL
</span>

{/* Active workspace pill (uppercase) */}
<span className="text-[10px] px-2 py-0.5 bg-blue-600/20 text-blue-400 rounded-full font-semibold uppercase">
  Active
</span>

{/* Capability READY pill */}
<span className="text-emerald-500 text-[10px] bg-emerald-500/10 px-2 py-0.5 rounded-full font-bold">READY</span>

{/* Number badge (sidebar) */}
<span className="ml-auto min-w-[20px] h-5 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center px-1.5 animate-pulse shadow-sm shadow-red-500/50">
  {count}
</span>
```

Status pills use `rounded-full`, status labels use `rounded` (square-ish), and
the `uppercase` modifier is reserved for the **Active** pill specifically.

### 5.7 Status dot (running state)

```tsx
<span className="relative flex h-2.5 w-2.5">
  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
</span>
```
Used in MCP server list rows. The `animate-ping` outer ring behind a solid
inner dot signals "running / live". For error state, drop the ping ring and
use `bg-red-500`. For idle, use `bg-slate-500` and no animation.

### 5.8 Modals

```tsx
{open && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
    <div className="bg-[#0F1420] border border-slate-700 rounded-2xl w-full max-w-md p-6 shadow-2xl space-y-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-red-900/30 rounded-lg flex items-center justify-center border border-red-500/20">
            <AlertTriangle className="w-5 h-5 text-red-400" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-200">Title</h2>
            <p className="text-xs text-slate-500">Subtitle / This action cannot be undone.</p>
          </div>
        </div>
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="p-1.5 rounded-md text-slate-500 hover:text-slate-300 hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
      ...body...
      <div className="flex items-center justify-end pt-2 border-t border-slate-700/50">
        <button type="button" onClick={close} className="px-5 py-2 bg-slate-700 hover:bg-slate-600 text-slate-200 rounded-lg text-sm font-semibold transition-colors">Close</button>
      </div>
    </div>
  </div>
)}
```
Modal rules:
- **Overlay**: `fixed inset-0 z-50 ... bg-black/60 backdrop-blur-sm p-4`.
- **Panel**: `bg-[#0F1420] border border-slate-700 rounded-2xl ... shadow-2xl`.
- **Title chip**: `w-10 h-10 bg-<accent>-900/30 rounded-lg flex items-center justify-center border border-<accent>-500/20` with `w-5 h-5` icon (delete=red, info=blue/violet, warning=amber).
- **Widths**: `max-w-md` (small confirm), `max-w-2xl` (multi-step). Add
  `max-h-[85vh] overflow-y-auto` for tall content.
- Title bar always has a top-right `X` close button (`p-1.5 rounded-md`).
- Footer uses `border-t border-slate-700/50 pt-2` separator.

### 5.9 Loading & feedback

- **Inline loading**: `<Loader2 className="w-4 h-4 animate-spin" />` (or
  `w-5 h-5` for big spinners). Pair with "Loading…" / "Saving..." text.
- **Success confirmation**: `<CheckCircle2 className="w-4 h-4" />` with a toast
  pattern that flips state for 3 seconds:
  ```tsx
  setSaved(true);
  setTimeout(() => setSaved(false), 3000);
  ```
- **Inline error banner**: always inside a card, on top of the action:
  ```tsx
  <div className="mb-3 p-3 bg-red-900/20 border border-red-500/30 rounded-lg text-red-400 text-sm flex items-center gap-2">
    <AlertCircle className="w-4 h-4 shrink-0" />
    {errorMessage}
  </div>
  ```
- **Inline warning banner**:
  ```tsx
  <div className="mb-3 p-3 bg-amber-900/20 border border-amber-500/30 rounded-lg text-amber-400 text-sm flex items-center gap-2">
    <AlertCircle className="w-4 h-4 shrink-0" />
    {warningMessage}
  </div>
  ```
- **Fatal / info callout box** (long copy):
  ```tsx
  <div className="bg-amber-950/20 border border-amber-700/30 rounded-lg p-4 space-y-2">
    <div className="flex items-center gap-2">
      <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
      <h4 className="text-xs font-semibold text-amber-300">Security Implications</h4>
    </div>
    <ul className="text-xs text-amber-200/70 space-y-1 list-disc list-inside">
      <li>...</li>
    </ul>
  </div>
  ```
- **Empty state**:
  ```tsx
  <div className="flex flex-col items-center justify-center py-16 text-slate-500">
    <Folder className="w-12 h-12 mb-3 opacity-30" />
    <p className="text-sm">No workspaces created yet</p>
    <p className="text-xs mt-1 text-slate-600">Create a workspace to get started</p>
  </div>
  ```
  Empty-state icons are `w-12 h-12 opacity-30`, primary text `text-sm`, hint
  `text-xs`.
- **No-workspace blank page**:
  ```tsx
  <main className="flex-1 bg-[#0B0F19] flex items-center justify-center p-6">
    <div className="max-w-md w-full text-center">
      <div className="w-16 h-16 bg-blue-600/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
        <Folder className="w-8 h-8 text-blue-500" />
      </div>
      <h2 className="text-2xl font-bold text-slate-200 mb-2">No Workspace Selected</h2>
      <p className="text-slate-500 text-sm mb-6">Select an existing workspace…</p>
      <button ...>Go to Workspaces</button>
    </div>
  </main>
  ```

### 5.10 Stat / metric tile

```tsx
<div className="bg-[#151B28] border border-slate-800 rounded-xl p-5">
  <div className="flex items-center justify-between mb-3">
    <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">{label}</span>
    <div className={`w-8 h-8 ${bgColor} rounded-lg flex items-center justify-center ${color}`}>
      {icon}
    </div>
  </div>
  <p className="text-2xl font-bold text-slate-200 mb-0.5">{value}</p>
  <p className="text-[11px] text-slate-500">{sub}</p>
</div>
```
The icon chip uses a `w-8 h-8 bg-<accent>-500/10 rounded-lg` shell with a
`w-5 h-5` icon in the matching `text-<accent>-400`. Stat value is always
`text-2xl font-bold text-slate-200`.

### 5.11 List row (runtime servers, agents, skills)

```tsx
<div className="bg-[#0B0F19] border border-slate-700/60 rounded-lg p-3 flex items-center gap-3">
  <div className="flex-1 min-w-0">
    <div className="flex items-center gap-2">
      <span className="text-sm font-semibold text-slate-200 truncate">{name}</span>
      {running && <statusdot />}
      {idle && <statusdot />}
      <span className={`text-[10px] px-1.5 py-0.5 rounded font-mono ${enabled ? 'bg-cyan-500/10 text-cyan-400' : 'bg-slate-600/20 text-slate-500'}`}>{status}</span>
      {local && <span className="text-[9px] px-1.5 py-0.5 rounded font-bold bg-violet-500/15 text-violet-400 border border-violet-500/30">LOCAL</span>}
    </div>
    <p className="text-[11px] text-slate-500 font-mono mt-0.5 truncate">
      {command} {args?.join(' ')}
    </p>
    <p className="text-[10px] text-slate-600 font-mono">id: {id}</p>
  </div>
  <div className="flex items-center gap-1.5 shrink-0">
    <button type="button" /* toggle */ >{enabled ? <Power .../> : <PowerOff .../>}</button>
    <button type="button" /* delete */ className="p-1.5 rounded-md bg-red-600/10 text-red-400 hover:bg-red-600/20 transition-colors"><Trash2 .../></button>
  </div>
</div>
```
List row token recipe: *deepest surface* (`bg-[#0B0F19]`) **inside** the card
surface (`bg-[#151B28]`), `border-slate-700/60` (slightly softer than card
border because of nesting), `rounded-lg p-3`.

### 5.12 Tabs / segmented control

Tabs are commonly rendered as a row of `type="button"` items styled like
this:
```tsx
<button
  type="button"
  onClick={() => setTab('deliverables')}
  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
    activeTab === 'deliverables'
      ? 'bg-slate-800 text-slate-200'
      : 'bg-transparent text-slate-500 hover:text-slate-300 hover:bg-slate-800/50'
  }`}
>
  Deliverables
</button>
```
Container: `flex items-center gap-1 p-1 bg-slate-900/50 rounded-lg` (the
"track" sits one shade below the cards). No underline tab style — Magnetix
favours pill-style highlight.

### 5.13 Selects

```tsx
<select
  value={value}
  onChange={(e) => setValue(e.target.value)}
  className="w-full bg-[#0B0F19] border border-slate-700 rounded-lg py-2.5 px-4 text-sm text-slate-200 focus:outline-none focus:border-blue-500 cursor-pointer"
>
  <option value="UTC">UTC (Greenwich Mean Time)</option>
  ...
</select>
```
Same surface as inputs (`bg-[#0B0F19]`, `border-slate-700`), uses
`cursor-pointer` and lacks `font-mono`. The accent border on focus is
`focus:border-blue-500` (or `focus:border-amber-500` if section is
amber-themed, e.g. timezone).

### 5.14 Code blocks

```tsx
<code className="text-violet-400 font-mono">magnetix-companion.bat</code>
```
Inline code uses `font-mono` + a violet accent for the literal value when
embedded in descriptive prose. Block code (especially when containing
multi-line scripts) lives inside a card with `bg-slate-900` to lift it from
the card surface.

### 5.15 Browser preview mock (LiveAgentFeed)

```tsx
<div className="w-full h-full border border-slate-800 rounded-xl bg-slate-900 overflow-hidden flex flex-col shadow-xl">
  <div className="h-8 bg-slate-800 border-b border-slate-700 flex items-center px-4 gap-2">
    <div className="flex gap-1.5">
      <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
      <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
    </div>
    <div className="mx-auto w-1/2 bg-slate-900 rounded text-[10px] text-center text-slate-500 py-0.5 font-mono flex items-center justify-center gap-2">
      <Globe className="w-3 h-3" /> headless.env / x.com
    </div>
  </div>
  <div className="flex-1 bg-[#15202B] flex items-center justify-center relative">...</div>
</div>
```
Three-light traffic-light row `red-500 / amber-500 / emerald-500`. A
slate-800 chrome bar with a centered url chip. The viewport itself uses the
only slightly different surface `bg-[#15202B]` reserved for browser
simulations.

### 5.16 Skeleton loader

```tsx
<div className="w-12 h-12 rounded-full bg-slate-800 animate-pulse mb-4"></div>
<div className="h-4 bg-slate-800 rounded w-3/4 animate-pulse mb-2"></div>
<div className="h-4 bg-slate-800 rounded w-1/2 animate-pulse mb-8"></div>
```
Skeletons are always `bg-slate-800` + `animate-pulse`. Used inside the
LiveAgent browser-preview mock — the only place skeletons are seen.

---

## 6. Interaction States (table of conventions)

| State     | Convention                                                                             |
| --------- | -------------------------------------------------------------------------------------- |
| Hover (button)  | primary `bg-blue-600` → `hover:bg-blue-500`. Stop/red buttons invert: `bg-red-500` → `hover:bg-red-600`. |
| Hover (neutral) | `bg-slate-800` → `hover:bg-slate-700`; ghost button `text-slate-500` → `hover:text-slate-300`. |
| Hover (selectable card) | `border-slate-800` → `hover:border-slate-700`. |
| Active card      | `border-blue-600/50 ring-1 ring-blue-600/20`. |
| Focus (inputs)   | `focus:outline-none focus:border-blue-500` (or section's accent: emerald/amber). Compact forms allow `focus:ring-1 focus:ring-blue-500`. |
| Running / live    | `animate-pulse` + `shadow-sm shadow-<accent>-500/50` on badges/dots. |
| Disabled         | `disabled:opacity-50` (+ `disabled:cursor-not-allowed` on key CTAs). Keep clickable for SR. |
| loading / saving | `<Loader2 className="w-4 h-4 animate-spin" />` + verb in continuous ("Saving…", "Creating…"). After success → `<CheckCircle2 />` + "Saved!" for 3s via `setTimeout`. |
| Pending count pulsing badge | `bg-red-500 text-white animate-pulse shadow-sm shadow-red-500/50 min-w-[16px] h-4` with `9+` overflow. |
| Reveal on hover   | parent adds `group`; child uses `opacity-0 group-hover:opacity-100 transition-opacity`. Tooltip-style. |

---

## 7. Motion rules

- Default transitions: `transition-colors` (most hovers) or `transition-all`
  (border-shifting selectable cards / shadowed CTAs), with `duration-200` for
  cards.
- **Animations are reserved for**:
  - `animate-spin` on `Loader2`
  - `animate-pulse` on status dots, badges, and live indicators
  - `animate-ping` on the running-state dot ring
- No custom keyframes are defined anywhere — only Tailwind's built-in
  `animate-*`. Avoid `transition-transform`, slide-ins, or fade-ins.

---

## 8. Iconography

- Use `lucide-react` exclusively. Import named icons directly:
  `import { Settings, Save, Globe, Shield, Loader2, AlertCircle, Cpu, Link, Wrench, CheckCircle2, Trash2, Power, PowerOff, Terminal, Sparkles, Copy, Check, AlertTriangle, Compass, Monitor, X, Download, Key, Eye, EyeOff } from 'lucide-react';`
- **Size conventions**:
  - Page-header `h1` icon: `w-6 h-6`
  - Section header (the `w-8 h-8` chip): icon `w-4 h-4`
  - Inside-card (the `w-6 h-6` chip variant): icon `w-3 h-3`
  - Inline list-row / inline-button icon: `w-3.5 h-3.5` or `w-4 h-4`
  - Status-check icons inside pills: `w-3 h-3`
- Icons inherit color from their enclosing `text-<accent>-400` container —
  you do not pass a class to the icon itself unless it needs a different
  color than the parent (common in body copy where the icon precedes text).

---

## 9. Folder / file conventions

```
app/
  layout.tsx
  globals.css
  api/<resource>/route.ts
components/<Feature>Feed.tsx
lib/storage.ts
hooks/use-mobile.ts
```

Rules:
- A "Feed" component (e.g. `SettingsFeed`, `DashboardFeed`, `CampaignsFeed`,
  `ActionFeed`) is the top-level component mounted inside `app/page.tsx` for
  each nav tab.
- Keep CSS in `globals.css`; only use a co-located `<Component>.css` for rare
  Tailwind-escape hatches (e.g. `WorkspaceManager.css` exists only to make a
  flex form vertically centered across breakpoints).
- Sub-path imports: `@/lib/...`, `@/components/...`, `@/store/useStore`.

---

## 10. Reproduction checklist (for an AI building a sibling app)

Apply in this order so the result reads as a *Magnetix sibling*:

1. `app/layout.tsx` loads `Inter` from `next/font/google`, applies
   `bg-[#0B0F19] text-white min-h-screen` to `<body>`, sets `<html lang="en"
   className="dark">` and `suppressHydrationWarning`.
2. `app/globals.css` pastes the dark scrollbar block (6px width, `#334155`
   thumb on `#0B0F19` track).
3. App shell: left rail `bg-[#0F172A] w-16 md:w-56`, main feed
   `bg-[#0B0F19] flex-1`.
4. Every feed uses the sticky-header pattern (`p-6 border-b border-slate-800
   bg-[#0B0F19]/50 backdrop-blur shrink-0`) with a `w-6 h-6 text-blue-500`
   icon next to the `text-xl font-bold text-slate-200` title.
5. All cards are `bg-[#151B28] border border-slate-800 rounded-xl p-5`.
6. Section headers carry the `w-8 h-8 bg-<accent>-600/20 rounded-lg` chip with
   `w-4 h-4 text-<accent>-400` icon, and an `h2` of `text-lg font-bold
   text-slate-200` plus a `text-xs text-slate-500` subtitle.
7. Inputs are `bg-[#0B0F19] border border-slate-700 rounded-lg py-2.5 px-4
   text-sm text-slate-200 focus:outline-none focus:border-blue-500
   placeholder-slate-600`, with `font-mono` for ID/URL/secret fields.
8. Buttons are `type="button"`, primary `bg-blue-600 hover:bg-blue-500 text-white
   shadow-lg shadow-blue-900/20`, ghost `bg-slate-800 hover:bg-slate-700
   text-slate-300` (no shadow), icon-only `p-1.5` with `hover:bg-<accent>-900/20`.
9. Status pills and badges use `rounded-full` (status) / `rounded` (label) /
   `rounded-md` (chips) with the semantic palette from §2.4.
10. Modals use `bg-black/60 backdrop-blur-sm` overlay and
    `bg-[#0F1420] border border-slate-700 rounded-2xl shadow-2xl` panel, an
    `AlertTriangle`-tinted header chip, an `X` close button,
    `bg-slate-700 hover:bg-slate-600` Close footer.
11. Loading states: `<Loader2 className="animate-spin" />` + verb-in-gerund
    ("Loading…", "Deleting…"). Errors inside cards use the red banner
    pattern (`bg-red-900/20 border border-red-500/30 text-red-400`).
12. No emoji, no inline SVGs, no custom keyframes; transition classes are
    `transition-colors` or `transition-all duration-200`.

---

## 11. Token cheat-sheet (copy-paste-safe)

```css
/* Surfaces */
--bg-app:      #0B0F19;
--bg-rail:     #0F172A;
--bg-card:     #151B28;
--bg-modal:    #0F1420;
--bg-input:    #0B0F19;
--bg-browser:  #15202B;

/* Borders */
--border-default:  #1e293b; /* Tailwind slate-800 */
--border-strong:   #334155; /* Tailwind slate-700 */
--border-soft:     rgba(51,65,85,0.5);

/* Text */
--text-heading:  #e2e8f0; /* slate-200 */
--text-body:     #cbd5e1; /* slate-300 */
--text-muted:    #94a3b8; /* slate-400 */
--text-subtle:   #64748b; /* slate-500 */
--text-faded:    #475569; /* slate-600 */

/* Accents (solid / tinted) */
--blue:    #2563eb / bg-blue-600/10  / border-blue-500/30
--emerald: #059669 / bg-emerald-500/10 / border-emerald-500/30
--violet:  #7c3aed / bg-violet-600/20 / border-violet-500/30
--amber:   #f59e0b / bg-amber-500/10  / border-amber-700/30
--cyan:    #0891b2 / bg-cyan-500/10   / border-cyan-500/30
--purple:  #9333ea / bg-purple-600/20 / border-purple-500/30
--red:     #dc2626 / bg-red-500/10    / border-red-500/30

/* Radii */
--r-card:    0.75rem  /* rounded-xl */
--r-button:  0.5rem   /* rounded-lg */
--r-chip:    0.25rem  /* rounded */
--r-pill:    9999px   /* rounded-full */
--r-modal:   1rem     /* rounded-2xl */

/* Shadows (brand CTAs only) */
--shadow-blue:    shadow-lg shadow-blue-900/20
--shadow-emerald: shadow-lg shadow-emerald-900/20
--shadow-violet:  shadow-lg shadow-violet-900/20
```
