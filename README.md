# OmniCheck-AI — Advanced PDF & AI Metadata Analyzer

OmniCheck-AI is a professional document analysis platform designed to detect AI-generated content, run Turnitin-style plagiarism verification, offer multi-tone AI humanization rewrites, and generate attractive visual diagnostic reports with interactive pie charts.

---

## 🚀 Quick Start

1. **Launch Directly:**
   * Double-click `launch-omnicheck.bat` or open `OmniCheck-AI/index.html` directly in **Google Chrome**, **Microsoft Edge**, or any modern browser.
2. **Optional Local HTTP Server:**
   * Run PowerShell script `OmniCheck-AI/server.ps1` to start a local server at `http://localhost:8080`.

---

## ⚡ Core Capabilities

### 1. 📱/💻 Adaptive Device Selection (Onboarding Modal)
* **Starting Device Selector:** As soon as a user enters the site, a modern modal asks:
  * **📱 Phone (Mobile):** Automatically activates **Portrait Mode** (single-column vertical stream, touch-friendly buttons, and compact cards).
  * **💻 Laptop (Desktop):** Automatically activates **Landscape Mode** (widescreen multi-column layout, side-by-side charts, and expanded tables).
* **Live Header Switcher:** Users can toggle between Phone (Portrait) and Laptop (Landscape) anytime via the top navigation bar.

### 2. 👤 Document Details & Author Customization
* Dedicated input fields for **Author Name** and **Document Title**.
* Automatically populates throughout the PDF Analysis Report, Turnitin Digital Receipt, Document Metadata tables, and exported Markdown.

### 3. 🔴 Turnitin-Style Plagiarism & Similarity Report
* **Similarity Index Bar:** Overall similarity percentage along with category breakdowns for:
  * Internet Sources
  * Publications
  * Student Papers
* **Numbered Match Highlights:** Flagged text marked with colored brackets and numbered superscript badges (`[1]`, `[2]`, `[3]`) matching cited sources.
* **Match Overview List:** Direct source attribution with match percentages and publication URLs.
* **Digital Receipt:** Complete Turnitin receipt with submission ID, submission date, author name, word count, character count, and verified scan status.

### 4. ✍️ AI Humanizer Studio (Multi-Tone & 1-Click Rewrites)
* **Tone Selection:**
  * 🌿 **Natural Human:** Organic cadence, natural contractions, and active verbs.
  * 🎓 **Academic Scholarly:** Rigorous formal voice without AI formulaic clichés (*"furthermore"*, *"moreover"*, *"delve into"*).
  * 💼 **Executive Direct:** Concise, punchy, impact-driven corporate style.
* **1-Click Actions:**
  * *"Apply to Text"* — Replaces flagged synthetic sentences in the editor and triggers automatic re-scan.
  * *"⚡ Humanize Entire Document & Re-Scan"* — Rewrites all flagged sentences and visibly drops the AI detection score down to < 10%.
  * *"📋 Copy Full Humanized Text"* — One-click copy of the entire humanized document.

### 5. 🔍 AI Content Analyzer & Sentence Inspector
* Displays sentence-by-sentence confidence percentages, Shannon entropy (Perplexity), and detected synthetic footprint clichés.
* Filter view by AI flags, Plagiarism, or Human rhythm.

### 6. 📑 Executive PDFCheck-Style Diagnostic Report
* Enhanced corporate styling with verified seal badge, audit number, and clean tables.
* Output directly to printer or save as clean 3-page PDF.

### 7. 📊 Animated Visual Data & Pie Charts
* Animated Donut charts for AI vs Human breakdown and Plagiarism distribution.
* Multi-slice Perplexity distribution pie chart and horizontal burstiness spectrum.

### 8. 🛡️ Strict 10,000-Word Guardrail
* Enforces strict limit of **10,000 words per scan** with live tracking and alert modals.
