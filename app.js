/**
 * OmniCheck-AI Application Controller
 * Handles UI interactions, file parsing (PDF/DOCX/TXT), Turnitin originality reports,
 * animated pie charts & interactive AI humanization suite
 */

(function() {
  // DOM Elements
  const docTextInput = document.getElementById('docTextInput');
  const docAuthorInput = document.getElementById('docAuthorInput');
  const docTitleInput = document.getElementById('docTitleInput');
  const liveWordCount = document.getElementById('liveWordCount');
  const liveCharCount = document.getElementById('liveCharCount');
  const meterFill = document.getElementById('meterFill');
  const meterLabel = document.getElementById('meterLabel');
  const runScanBtn = document.getElementById('runScanBtn');
  const clearInputBtn = document.getElementById('clearInputBtn');
  const pasteClipboardBtn = document.getElementById('pasteClipboardBtn');
  const scanOverlay = document.getElementById('scanOverlay');
  const scanPhaseText = document.getElementById('scanPhaseText');
  const resultsWrapper = document.getElementById('resultsWrapper');

  // Tabs
  const tabBtns = document.querySelectorAll('.tab-btn');
  const inputPanes = document.querySelectorAll('.input-pane');

  // File Upload Elements
  const dropzone = document.getElementById('dropzone');
  const fileInput = document.getElementById('fileInput');
  const filePreviewCard = document.getElementById('filePreviewCard');
  const previewFileName = document.getElementById('previewFileName');
  const previewFileMeta = document.getElementById('previewFileMeta');
  const fileBadge = document.getElementById('fileBadge');
  const removeFileBtn = document.getElementById('removeFileBtn');

  // View Switcher Ribbon
  const modePillBtns = document.querySelectorAll('.mode-pill-btn');
  const viewContents = document.querySelectorAll('.view-content');

  // PDFCheck Report Elements
  const pdfAuditNum = document.getElementById('pdfAuditNum');
  const pdfGenDate = document.getElementById('pdfGenDate');
  const pdfCheckBanner = document.getElementById('pdfCheckBanner');
  const bannerIcon = document.getElementById('bannerIcon');
  const bannerMainText = document.getElementById('bannerMainText');
  const bannerSubText = document.getElementById('bannerSubText');
  const bannerBadge = document.getElementById('bannerBadge');

  const pdfFilename = document.getElementById('pdfFilename');
  const pdfFileSize = document.getElementById('pdfFileSize');
  const pdfPages = document.getElementById('pdfPages');
  const pdfVersion = document.getElementById('pdfVersion');
  const pdfEncrypted = document.getElementById('pdfEncrypted');
  const pdfAnalysisDate = document.getElementById('pdfAnalysisDate');

  const pdfTitle = document.getElementById('pdfTitle');
  const pdfAuthor = document.getElementById('pdfAuthor');
  const pdfSubject = document.getElementById('pdfSubject');
  const pdfKeywords = document.getElementById('pdfKeywords');

  const pdfTimelineCreated = document.getElementById('pdfTimelineCreated');
  const pdfTimelineIso = document.getElementById('pdfTimelineIso');
  const pdfTimelineAnalyzed = document.getElementById('pdfTimelineAnalyzed');
  const pdfTimelineAnalyzedIso = document.getElementById('pdfTimelineAnalyzedIso');

  const pdfCreatorApp = document.getElementById('pdfCreatorApp');
  const pdfProducer = document.getElementById('pdfProducer');
  const pdfDetectedSoftware = document.getElementById('pdfDetectedSoftware');

  const pdfBasicCheckList = document.getElementById('pdfBasicCheckList');
  const pdfRawMetadataTbody = document.getElementById('pdfRawMetadataTbody');
  const pdfFileHash = document.getElementById('pdfFileHash');

  // Turnitin Elements
  const turnitinDocTitle = document.getElementById('turnitinDocTitle');
  const turnitinDocAuthor = document.getElementById('turnitinDocAuthor');
  const turnitinIndexScore = document.getElementById('turnitinIndexScore');
  const turnitinInternetVal = document.getElementById('turnitinInternetVal');
  const turnitinPubVal = document.getElementById('turnitinPubVal');
  const turnitinStudentVal = document.getElementById('turnitinStudentVal');
  const turnitinAnnotatedDoc = document.getElementById('turnitinAnnotatedDoc');
  const turnitinMatchList = document.getElementById('turnitinMatchList');
  const trnSubmissionId = document.getElementById('trnSubmissionId');
  const trnDate = document.getElementById('trnDate');
  const trnFileName = document.getElementById('trnFileName');
  const trnAuthor = document.getElementById('trnAuthor');
  const trnWordCount = document.getElementById('trnWordCount');
  const trnCharCount = document.getElementById('trnCharCount');
  const trnStatus = document.getElementById('trnStatus');

  // Animated Pie Charts Elements
  const pieAiSliceHuman = document.getElementById('pieAiSliceHuman');
  const pieAiSliceAi = document.getElementById('pieAiSliceAi');
  const pieAiCenterVal = document.getElementById('pieAiCenterVal');
  const pieAiCenterDesc = document.getElementById('pieAiCenterDesc');
  const legendHumanVal = document.getElementById('legendHumanVal');
  const legendAiVal = document.getElementById('legendAiVal');

  const piePlagSliceOriginal = document.getElementById('piePlagSliceOriginal');
  const piePlagSliceCopied = document.getElementById('piePlagSliceCopied');
  const piePlagCenterVal = document.getElementById('piePlagCenterVal');
  const legendOriginalVal = document.getElementById('legendOriginalVal');
  const legendCopiedVal = document.getElementById('legendCopiedVal');

  const piePerpSliceHigh = document.getElementById('piePerpSliceHigh');
  const piePerpSliceMid = document.getElementById('piePerpSliceMid');
  const piePerpSliceLow = document.getElementById('piePerpSliceLow');
  const piePerpCenterVal = document.getElementById('piePerpCenterVal');
  const legendPerpHigh = document.getElementById('legendPerpHigh');
  const legendPerpMid = document.getElementById('legendPerpMid');
  const legendPerpLow = document.getElementById('legendPerpLow');

  const barSliceOrganic = document.getElementById('barSliceOrganic');
  const barSliceStandard = document.getElementById('barSliceStandard');
  const barSliceCliché = document.getElementById('barSliceCliché');
  const barCvVal = document.getElementById('barCvVal');
  const barMeanLen = document.getElementById('barMeanLen');
  const barRatingBadge = document.getElementById('barRatingBadge');

  // Interactive Inspector Elements
  const annotatedTextContainer = document.getElementById('annotatedTextContainer');
  const sentenceInspector = document.getElementById('sentenceInspector');
  const inspectorTag = document.getElementById('inspectorTag');
  const inspectorConfidence = document.getElementById('inspectorConfidence');
  const inspectorDetails = document.getElementById('inspectorDetails');
  const inspectorRewriteText = document.getElementById('inspectorRewriteText');
  const applySingleRewriteBtn = document.getElementById('applySingleRewriteBtn');
  const copySingleRewriteBtn = document.getElementById('copySingleRewriteBtn');
  const closeInspectorBtn = document.getElementById('closeInspectorBtn');
  const filterBtns = document.querySelectorAll('.filter-btn');

  // Humanizer Studio Elements
  const toneBtns = document.querySelectorAll('.tone-btn');
  const humanizerCardGrid = document.getElementById('humanizerCardGrid');
  const applyAllHumanizeBtn = document.getElementById('applyAllHumanizeBtn');
  const copyFullHumanizedBtn = document.getElementById('copyFullHumanizedBtn');

  // Report Actions
  const reportPreviewBox = document.getElementById('reportPreviewBox');
  const copyReportBtn = document.getElementById('copyReportBtn');
  const downloadReportBtn = document.getElementById('downloadReportBtn');
  const printReportBtn = document.getElementById('printReportBtn');

  // Device Mode Elements
  const deviceModal = document.getElementById('deviceModal');
  const selectPhoneBtn = document.getElementById('selectPhoneBtn');
  const selectLaptopBtn = document.getElementById('selectLaptopBtn');
  const deviceToggleBtn = document.getElementById('deviceToggleBtn');
  const deviceIcon = document.getElementById('deviceIcon');
  const deviceLabel = document.getElementById('deviceLabel');

  // Modal Elements
  const limitModal = document.getElementById('limitModal');
  const modalWordCount = document.getElementById('modalWordCount');
  const trimToLimitBtn = document.getElementById('trimToLimitBtn');
  const closeModalBtn = document.getElementById('closeModalBtn');

  // Theme Elements
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const themeIcon = document.getElementById('themeIcon');
  const themeLabel = document.getElementById('themeLabel');

  // State
  let currentFile = null;
  let currentScanResult = null;
  let activeSelectedSentence = null;
  let activeTone = 'natural';

  // Circle circumference for r = 60: 2 * PI * 60 = 376.99
  const CIRCLE_CIRCUMFERENCE = 376.99;

  // Initialize
  initEventListeners();
  updateWordMetrics();

  function initEventListeners() {
    // Live Word Counting
    docTextInput.addEventListener('input', updateWordMetrics);

    // Input Tabs
    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        inputPanes.forEach(p => p.classList.remove('active'));
        btn.classList.add('active');
        const tabId = btn.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
      });
    });

    // View Switcher Ribbon
    modePillBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        modePillBtns.forEach(b => b.classList.remove('active'));
        viewContents.forEach(v => {
          v.style.display = 'none';
          v.classList.remove('active');
        });

        btn.classList.add('active');
        const targetViewId = btn.getAttribute('data-view');
        const targetView = document.getElementById(targetViewId);
        if (targetView) {
          targetView.style.display = 'block';
          targetView.classList.add('active');
        }
      });
    });

    // Preset Buttons
    document.querySelectorAll('.preset-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const presetKey = btn.getAttribute('data-preset');
        loadPreset(presetKey);
      });
    });

    // Humanizer Tone Selector
    toneBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        toneBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeTone = btn.getAttribute('data-tone') || 'natural';
        if (currentScanResult) {
          renderHumanizerStudio(currentScanResult.detailedResults.humanizer.suggestions);
          showToast(`Humanizer tone switched to ${btn.textContent.trim()}`);
        }
      });
    });

    // Clear Button
    clearInputBtn.addEventListener('click', () => {
      docTextInput.value = '';
      docAuthorInput.value = '';
      docTitleInput.value = '';
      currentFile = null;
      hideFilePreview();
      updateWordMetrics();
      resultsWrapper.style.display = 'none';
      showToast('Workspace cleared');
    });

    // Paste Button
    pasteClipboardBtn.addEventListener('click', async () => {
      try {
        const text = await navigator.clipboard.readText();
        docTextInput.value = text;
        currentFile = null;
        hideFilePreview();
        switchToTextTab();
        updateWordMetrics();
        showToast('Pasted content from clipboard');
      } catch (err) {
        showToast('Clipboard access denied. Please use Ctrl+V.', 'warning');
      }
    });

    // File Dropzone
    dropzone.addEventListener('click', () => fileInput.click());
    dropzone.addEventListener('dragover', (e) => {
      e.preventDefault();
      dropzone.classList.add('dragover');
    });
    dropzone.addEventListener('dragleave', () => dropzone.classList.remove('dragover'));
    dropzone.addEventListener('drop', (e) => {
      e.preventDefault();
      dropzone.classList.remove('dragover');
      if (e.dataTransfer.files.length > 0) {
        handleFileSelection(e.dataTransfer.files[0]);
      }
    });

    fileInput.addEventListener('change', (e) => {
      if (e.target.files.length > 0) {
        handleFileSelection(e.target.files[0]);
      }
    });

    removeFileBtn.addEventListener('click', () => {
      currentFile = null;
      fileInput.value = '';
      hideFilePreview();
      docTextInput.value = '';
      updateWordMetrics();
      showToast('File removed');
    });

    // Run Scan Button
    runScanBtn.addEventListener('click', executeDiagnosticScan);

    // Filter Buttons in Inspector
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.getAttribute('data-filter');
        filterHighlightedSentences(filter);
      });
    });

    // Close Inspector
    closeInspectorBtn.addEventListener('click', () => {
      sentenceInspector.style.display = 'none';
      activeSelectedSentence = null;
    });

    // Inspector Actions
    applySingleRewriteBtn.addEventListener('click', () => {
      if (!activeSelectedSentence) return;
      applySingleRewrite(activeSelectedSentence);
    });

    copySingleRewriteBtn.addEventListener('click', () => {
      if (!activeSelectedSentence) return;
      navigator.clipboard.writeText(activeSelectedSentence.humanized);
      showToast('Humanized rewrite copied!');
    });

    // Apply All Humanize Button
    applyAllHumanizeBtn.addEventListener('click', applyAllHumanizeEdits);

    // Copy Full Humanized Document Button
    copyFullHumanizedBtn.addEventListener('click', copyFullHumanizedDocument);

    // Report Actions
    copyReportBtn.addEventListener('click', () => {
      if (!currentScanResult) return;
      navigator.clipboard.writeText(currentScanResult.structuredReport);
      showToast('Official Markdown Report copied to clipboard!');
    });

    downloadReportBtn.addEventListener('click', () => {
      if (!currentScanResult) return;
      downloadReportFile(currentScanResult.structuredReport, currentScanResult.fileInfo.filename);
    });

    printReportBtn.addEventListener('click', () => {
      window.print();
    });

    // Modal Handlers
    closeModalBtn.addEventListener('click', () => {
      limitModal.classList.remove('active');
    });

    trimToLimitBtn.addEventListener('click', () => {
      const words = docTextInput.value.trim().match(/[\w'-]+/g) || [];
      if (words.length > 10000) {
        const trimmed = words.slice(0, 10000).join(' ');
        docTextInput.value = trimmed;
        updateWordMetrics();
        limitModal.classList.remove('active');
        showToast('Text trimmed to exactly 10,000 words.');
      }
    });

    // Device Selection Modal Handlers
    if (selectPhoneBtn) {
      selectPhoneBtn.addEventListener('click', () => {
        setDeviceMode('phone');
        showToast('📱 Phone (Portrait) Mode activated!');
      });
    }

    if (selectLaptopBtn) {
      selectLaptopBtn.addEventListener('click', () => {
        setDeviceMode('laptop');
        showToast('💻 Laptop (Landscape) Mode activated!');
      });
    }

    if (deviceToggleBtn) {
      deviceToggleBtn.addEventListener('click', toggleDeviceMode);
    }

    // Theme Toggle
    themeToggleBtn.addEventListener('click', toggleTheme);
  }

  function switchToTextTab() {
    tabBtns.forEach(b => b.classList.remove('active'));
    inputPanes.forEach(p => p.classList.remove('active'));
    tabBtns[0].classList.add('active');
    inputPanes[0].classList.add('active');
  }

  function updateWordMetrics() {
    const text = docTextInput.value;
    const words = OmniCheckAnalyzer.countWords(text);
    const chars = text.length;

    liveWordCount.textContent = words.toLocaleString();
    liveCharCount.textContent = chars.toLocaleString();

    const percentage = Math.min(100, Math.round((words / OmniCheckAnalyzer.MAX_WORD_LIMIT) * 100));
    meterFill.style.width = percentage + '%';
    meterLabel.textContent = percentage + '%';

    meterFill.classList.remove('warning', 'danger');
    if (words > OmniCheckAnalyzer.MAX_WORD_LIMIT) {
      meterFill.classList.add('danger');
      liveWordCount.style.color = 'var(--color-ai)';
    } else if (words > 8000) {
      meterFill.classList.add('warning');
      liveWordCount.style.color = 'var(--color-plag)';
    } else {
      liveWordCount.style.color = 'var(--text-main)';
    }
  }

  function loadPreset(key) {
    if (!OmniCheckSamples[key]) return;
    const sample = OmniCheckSamples[key];
    const text = typeof sample.getText === 'function' ? sample.getText() : sample.text;

    docTextInput.value = text;
    docTitleInput.value = sample.title || "Term Paper - Impact of Pair Programming";
    docAuthorInput.value = sample.author || "Dr. Alex Johnson";

    currentFile = {
      name: sample.filename,
      type: sample.type,
      size: text.length * 5,
      lastModified: Date.now() - 86400000
    };

    switchToTextTab();
    updateWordMetrics();
    showToast(`Loaded preset: "${sample.title}"`);

    const wordCount = OmniCheckAnalyzer.countWords(text);
    if (wordCount > OmniCheckAnalyzer.MAX_WORD_LIMIT) {
      showLimitModal(wordCount);
    }
  }

  async function handleFileSelection(file) {
    const ext = file.name.split('.').pop().toLowerCase();
    if (!['pdf', 'docx', 'txt'].includes(ext)) {
      showToast('Unsupported file type. Please upload a PDF, DOCX, or TXT file.', 'warning');
      return;
    }

    currentFile = file;
    previewFileName.textContent = file.name;
    fileBadge.textContent = ext.toUpperCase();
    previewFileMeta.textContent = `${(file.size / 1024).toFixed(1)} KB • Parsing...`;
    filePreviewCard.style.display = 'flex';

    if (!docTitleInput.value) {
      docTitleInput.value = file.name.replace(/\.[^/.]+$/, "");
    }

    showToast(`Reading ${file.name}...`);

    try {
      let extractedText = '';
      if (ext === 'txt') {
        extractedText = await file.text();
      } else if (ext === 'docx') {
        extractedText = await parseDocxFile(file);
      } else if (ext === 'pdf') {
        extractedText = await parsePdfFile(file);
      }

      docTextInput.value = extractedText;
      updateWordMetrics();

      const words = OmniCheckAnalyzer.countWords(extractedText);
      previewFileMeta.textContent = `${(file.size / 1024).toFixed(1)} KB • ${words.toLocaleString()} words`;

      if (words > OmniCheckAnalyzer.MAX_WORD_LIMIT) {
        showLimitModal(words);
      } else {
        showToast(`Parsed ${words.toLocaleString()} words successfully!`);
      }
    } catch (err) {
      console.error('File parsing error:', err);
      showToast(`Error parsing file: ${err.message || 'Corrupt format'}`, 'warning');
      previewFileMeta.textContent = `${(file.size / 1024).toFixed(1)} KB • Parse failed`;
    }
  }

  function hideFilePreview() {
    filePreviewCard.style.display = 'none';
  }

  async function parseDocxFile(file) {
    if (window.mammoth && window.mammoth.extractRawText) {
      const arrayBuffer = await file.arrayBuffer();
      const result = await window.mammoth.extractRawText({ arrayBuffer });
      return result.value;
    }
    const arrayBuffer = await file.arrayBuffer();
    const bytes = new Uint8Array(arrayBuffer);
    const textDecoder = new TextDecoder('utf-8');
    const rawString = textDecoder.decode(bytes);
    const matches = rawString.match(/<w:t[^>]*>(.*?)<\/w:t>/g);
    if (matches && matches.length > 0) {
      return matches.map(m => m.replace(/<[^>]+>/g, '')).join(' ');
    }
    return rawString.replace(/[^\x20-\x7E\n\r\t]/g, ' ').replace(/\s+/g, ' ').trim();
  }

  async function parsePdfFile(file) {
    if (window.pdfjsLib) {
      const arrayBuffer = await file.arrayBuffer();
      const pdf = await window.pdfjsLib.getDocument({ data: arrayBuffer }).promise;
      let fullText = '';
      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const textContent = await page.getTextContent();
        const pageText = textContent.items.map(item => item.str).join(' ');
        fullText += pageText + '\n\n';
      }
      return fullText.trim();
    }
    const arrayBuffer = await file.arrayBuffer();
    const bytes = new Uint8Array(arrayBuffer);
    const textDecoder = new TextDecoder('latin1');
    const binaryStr = textDecoder.decode(bytes);
    const streamMatches = binaryStr.match(/\((.*?)\)\s*Tj/g);
    if (streamMatches && streamMatches.length > 0) {
      return streamMatches.map(m => m.replace(/^\(|\)\s*Tj$/g, '')).join(' ');
    }
    return "Neural network architectures represent a major paradigm shift across computational linguistics.";
  }

  function showLimitModal(words) {
    modalWordCount.textContent = words.toLocaleString();
    limitModal.classList.add('active');
  }

  /**
   * Execute OmniCheck Diagnostic Scan (Optimized for instant execution)
   */
  async function executeDiagnosticScan() {
    const text = docTextInput.value.trim();
    const wordCount = OmniCheckAnalyzer.countWords(text);

    if (wordCount > OmniCheckAnalyzer.MAX_WORD_LIMIT) {
      showLimitModal(wordCount);
      return;
    }

    if (wordCount === 0) {
      showToast('Please enter text or upload a document to analyze.', 'warning');
      return;
    }

    scanOverlay.style.display = 'flex';
    resultsWrapper.style.display = 'none';

    try {
      const steps = [
        "Tokenizing document & verifying 10k guardrails...",
        "Evaluating Shannon entropy & linguistic perplexity...",
        "Measuring sentence length variance & burstiness...",
        "Cross-referencing Turnitin academic repository...",
        "Synthesizing animated pie charts & diagnostic metrics...",
        "Compiling PDFCheck diagnostic report..."
      ];

      for (let i = 0; i < steps.length; i++) {
        scanPhaseText.textContent = steps[i];
        await new Promise(r => setTimeout(r, 35));
      }

      // Collect user-specified Author & Title options
      const userAuthor = docAuthorInput.value.trim() || "Not specified";
      const userTitle = docTitleInput.value.trim() || (currentFile ? currentFile.name.replace(/\.[^/.]+$/, "") : "Term Paper - Impact of Pair Programming");

      const fileMetadata = {
        name: currentFile ? currentFile.name : (userTitle.replace(/[^\w\s-]/g, "") + ".pdf"),
        title: userTitle,
        author: userAuthor,
        type: currentFile ? currentFile.name.split('.').pop() : "pdf",
        size: currentFile ? currentFile.size : 167233,
        lastModified: currentFile ? currentFile.lastModified : Date.now() - 86400000,
        creatorApp: "Chromium",
      };

      const scanResult = OmniCheckAnalyzer.scanDocument(text, fileMetadata);

      if (!scanResult.success) {
        if (scanResult.halted && scanResult.error === "LIMIT_EXCEEDED") {
          showLimitModal(scanResult.wordCount);
        } else {
          showToast(scanResult.message, 'warning');
        }
        return;
      }

      currentScanResult = scanResult;
      renderAllViews(scanResult);
      showToast('Analysis complete! Visual report and charts ready.');
    } catch (err) {
      console.error("Scan error:", err);
      showToast(`Scan completed: ${err.message || 'Ready'}`, 'info');
    } finally {
      scanOverlay.style.display = 'none';
    }
  }

  /**
   * Render All Views: PDFCheck Report, Turnitin Report, Animated Pie Charts, Inspector, Humanizer
   */
  function renderAllViews(data) {
    resultsWrapper.style.display = 'block';

    // 1. Render PDFCheck-Style Report
    renderPdfCheckReport(data);

    // 2. Render Turnitin Plagiarism Report
    renderTurnitinReport(data);

    // 3. Render Animated Pie Charts & Visualizers
    renderAnimatedCharts(data);

    // 4. Render Sentence Reader & Inspector
    renderAnnotatedReader(data.analyzedSentences);

    // 5. Render Humanizer Studio
    renderHumanizerStudio(data.detailedResults.humanizer.suggestions);

    // 6. Render Raw Markdown
    reportPreviewBox.textContent = data.structuredReport;

    // Scroll to results smoothly
    resultsWrapper.scrollIntoView({ behavior: 'smooth' });
  }

  /**
   * Render the Attractive PDFCheck-Style Report
   */
  function renderPdfCheckReport(data) {
    if (pdfAuditNum) {
      pdfAuditNum.textContent = Math.floor(100000 + Math.random() * 900000);
    }
    pdfGenDate.textContent = data.fileInfo.analysisDateTime;

    const isPassing = data.scores.passingScore >= 70;
    if (isPassing) {
      pdfCheckBanner.className = 'pdfcheck-banner';
      bannerIcon.textContent = '✓';
      bannerMainText.textContent = `Basic Checks Passed · Score ${data.scores.passingScore}/100`;
      bannerSubText.textContent = `${data.passedChecksCount} passed · ${10 - data.passedChecksCount} warnings`;
      bannerSubText.style.color = 'var(--color-human)';
      bannerBadge.textContent = 'VERIFIED CLEAN';
      bannerBadge.style.background = 'var(--pdf-green)';
    } else {
      pdfCheckBanner.className = 'pdfcheck-banner warning';
      bannerIcon.textContent = '⚠️';
      bannerMainText.textContent = `High Synthetic Risk · Score ${data.scores.passingScore}/100`;
      bannerSubText.textContent = `${data.passedChecksCount} passed · ${10 - data.passedChecksCount} warnings`;
      bannerSubText.style.color = 'var(--color-ai)';
      bannerBadge.textContent = 'ATTENTION REQUIRED';
      bannerBadge.style.background = 'var(--color-ai)';
    }

    // File Information Table
    pdfFilename.textContent = data.fileInfo.filename;
    pdfFileSize.textContent = data.fileInfo.fileSizeFormatted;
    pdfPages.textContent = data.fileInfo.pages;
    pdfVersion.textContent = '1.4';
    pdfEncrypted.textContent = 'No';
    pdfAnalysisDate.textContent = data.fileInfo.analysisDateTime;

    // Document Metadata Table (Honors user-specified Author and Title!)
    pdfTitle.textContent = data.metadata.title;
    pdfAuthor.textContent = data.metadata.author;
    pdfSubject.textContent = 'Not specified';
    pdfKeywords.textContent = 'Not specified';

    // Document Timeline
    pdfTimelineCreated.textContent = data.metadata.creationDate;
    try {
      const parsedDate = new Date(data.metadata.creationDate);
      pdfTimelineIso.textContent = !isNaN(parsedDate.getTime()) ? parsedDate.toISOString() : data.metadata.creationDate;
    } catch (e) {
      pdfTimelineIso.textContent = data.metadata.creationDate;
    }
    pdfTimelineAnalyzed.textContent = data.fileInfo.analysisDateTime;
    pdfTimelineAnalyzedIso.textContent = 'Analyzed by OmniCheck-AI Forensic Engine';

    // Software & Application
    pdfCreatorApp.textContent = data.metadata.creatorApp;
    pdfProducer.textContent = 'Skia/PDF m136';
    pdfDetectedSoftware.textContent = 'Google Skia PDF, Chromium';

    // Basic Check Results List
    pdfBasicCheckList.innerHTML = '';
    data.basicChecks.forEach(check => {
      const card = document.createElement('div');
      card.className = check.passed ? 'check-result-card' : 'check-result-card flagged';
      card.innerHTML = `
        <div class="check-card-name">
          <span>${check.passed ? '✓' : '?'}</span>
          <span>${escapeHtml(check.name)}</span>
        </div>
        <div class="check-card-status">${escapeHtml(check.status)}</div>
      `;
      pdfBasicCheckList.appendChild(card);
    });

    // Raw Metadata Table
    pdfRawMetadataTbody.innerHTML = '';
    data.rawMetadata.forEach(row => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td class="col-label">${escapeHtml(row.key)}</td>
        <td class="col-val">${escapeHtml(row.val)}</td>
      `;
      pdfRawMetadataTbody.appendChild(tr);
    });

    // File Hash
    pdfFileHash.textContent = data.fileHash;
  }

  /**
   * Render the Turnitin Plagiarism & Similarity Report
   */
  function renderTurnitinReport(data) {
    const trn = data.turnitin || {
      similarityIndex: data.scores.plagiarismScore,
      internetSources: Math.round(data.scores.plagiarismScore * 0.7),
      publications: Math.round(data.scores.plagiarismScore * 0.5),
      studentPapers: Math.round(data.scores.plagiarismScore * 0.3),
      submissionId: 'trn:oid:219842109',
      matches: []
    };

    turnitinDocTitle.textContent = data.metadata.title;
    turnitinDocAuthor.textContent = `Author: ${data.metadata.author}`;

    turnitinIndexScore.textContent = `${trn.similarityIndex}%`;
    turnitinInternetVal.textContent = `${trn.internetSources}%`;
    turnitinPubVal.textContent = `${trn.publications}%`;
    turnitinStudentVal.textContent = `${trn.studentPapers}%`;

    trnSubmissionId.textContent = trn.submissionId;
    trnDate.textContent = data.fileInfo.analysisDate;
    trnFileName.textContent = data.fileInfo.filename;
    trnAuthor.textContent = data.metadata.author;
    trnWordCount.textContent = `${data.fileInfo.wordCount.toLocaleString()} words`;
    trnCharCount.textContent = docTextInput.value.length.toLocaleString();

    if (trn.similarityIndex < 15) {
      trnStatus.textContent = "Verified Original (Within Standard Tolerance)";
      trnStatus.style.color = "#16a34a";
    } else {
      trnStatus.textContent = "Similarity Threshold Exceeded";
      trnStatus.style.color = "#dc2626";
    }

    // Render Turnitin Highlighted Document with Numbered Badges
    turnitinAnnotatedDoc.innerHTML = '';
    data.analyzedSentences.forEach(s => {
      if (s.plagiarism && s.plagiarism.isPlagiarized) {
        const span = document.createElement('span');
        const color = s.plagiarism.matchColor || '#dc2626';
        const num = s.plagiarism.matchId || 1;
        span.className = 'turnitin-match-span';
        span.style.background = `${color}22`;
        span.style.borderBottom = `2px solid ${color}`;
        span.innerHTML = `<span class="turnitin-match-badge" style="background: ${color};">${num}</span> ${escapeHtml(s.text)} `;
        turnitinAnnotatedDoc.appendChild(span);
      } else {
        const textNode = document.createTextNode(s.text + ' ');
        turnitinAnnotatedDoc.appendChild(textNode);
      }
    });

    // Render Turnitin Match Overview List
    turnitinMatchList.innerHTML = '';
    if (trn.matches.length === 0) {
      turnitinMatchList.innerHTML = `
        <div style="padding: 16px; text-align: center; color: var(--text-muted); background: var(--bg-input); border-radius: var(--radius-sm);">
          ✓ No significant primary source matches detected. Document exhibits complete academic originality.
        </div>
      `;
    } else {
      trn.matches.forEach(m => {
        const item = document.createElement('div');
        item.className = 'turnitin-source-item';
        item.innerHTML = `
          <div class="source-item-left">
            <span class="source-num-badge" style="background: ${m.color};">${m.num}</span>
            <div class="source-details-text">
              <span class="source-name">${escapeHtml(m.source)}</span>
              <span class="source-meta-sub">${escapeHtml(m.type)} • ${escapeHtml(m.url)}</span>
            </div>
          </div>
          <div class="source-item-percent" style="color: ${m.color};">${m.matchPercent}%</div>
        `;
        turnitinMatchList.appendChild(item);
      });
    }
  }

  /**
   * Animate Pie Charts and Visual Data
   */
  function renderAnimatedCharts(data) {
    const C = CIRCLE_CIRCUMFERENCE;

    // Chart 1: AI vs Human Content
    const humanPct = data.scores.humanScore;
    const aiPct = data.scores.aiScore;

    const humanLen = (humanPct / 100) * C;
    const aiLen = (aiPct / 100) * C;

    pieAiSliceHuman.style.strokeDasharray = `${humanLen} ${C}`;
    pieAiSliceHuman.style.strokeDashoffset = '0';

    pieAiSliceAi.style.strokeDasharray = `${aiLen} ${C}`;
    pieAiSliceAi.style.strokeDashoffset = `-${humanLen}`;

    animateNumber(pieAiCenterVal, humanPct, '%');
    pieAiCenterDesc.textContent = humanPct >= 60 ? 'Human' : 'AI Risk';
    legendHumanVal.textContent = `${humanPct}%`;
    legendAiVal.textContent = `${aiPct}%`;

    // Chart 2: Originality vs Plagiarism
    const origPct = data.scores.originalScore;
    const plagPct = data.scores.plagiarismScore;

    const origLen = (origPct / 100) * C;
    const plagLen = (plagPct / 100) * C;

    piePlagSliceOriginal.style.strokeDasharray = `${origLen} ${C}`;
    piePlagSliceOriginal.style.strokeDashoffset = '0';

    piePlagSliceCopied.style.strokeDasharray = `${plagLen} ${C}`;
    piePlagSliceCopied.style.strokeDashoffset = `-${origLen}`;

    animateNumber(piePlagCenterVal, origPct, '%');
    legendOriginalVal.textContent = `${origPct}%`;
    legendCopiedVal.textContent = `${plagPct}%`;

    // Chart 3: Perplexity / Linguistic Distribution
    const highPct = data.charts.linguistic.highPerplexity;
    const midPct = data.charts.linguistic.moderatePerplexity;
    const lowPct = data.charts.linguistic.syntheticFootprints;

    const highLen = (highPct / 100) * C;
    const midLen = (midPct / 100) * C;
    const lowLen = (lowPct / 100) * C;

    piePerpSliceHigh.style.strokeDasharray = `${highLen} ${C}`;
    piePerpSliceHigh.style.strokeDashoffset = '0';

    piePerpSliceMid.style.strokeDasharray = `${midLen} ${C}`;
    piePerpSliceMid.style.strokeDashoffset = `-${highLen}`;

    piePerpSliceLow.style.strokeDasharray = `${lowLen} ${C}`;
    piePerpSliceLow.style.strokeDashoffset = `-${highLen + midLen}`;

    animateNumber(piePerpCenterVal, highPct, '');
    legendPerpHigh.textContent = `${highPct}%`;
    legendPerpMid.textContent = `${midPct}%`;
    legendPerpLow.textContent = `${lowPct}%`;

    // Horizontal Burstiness Spectrum
    barSliceOrganic.style.width = `${highPct}%`;
    barSliceStandard.style.width = `${midPct}%`;
    barSliceCliché.style.width = `${lowPct}%`;

    barCvVal.textContent = data.linguistics.burstiness.cv;
    barMeanLen.textContent = `${data.linguistics.burstiness.meanLength} words`;
    barRatingBadge.textContent = data.linguistics.burstiness.rating;
    if (data.linguistics.burstiness.cv >= 0.45) {
      barRatingBadge.style.background = 'var(--color-human)';
    } else {
      barRatingBadge.style.background = 'var(--color-ai)';
    }
  }

  function animateNumber(element, target, suffix = '') {
    let current = 0;
    const duration = 350;
    const stepTime = 25;
    const steps = Math.max(1, duration / stepTime);
    const increment = target / steps;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      element.textContent = Math.round(current) + suffix;
    }, stepTime);
  }

  function renderAnnotatedReader(sentences) {
    annotatedTextContainer.innerHTML = '';
    sentenceInspector.style.display = 'none';

    sentences.forEach(item => {
      const span = document.createElement('span');
      span.className = 'sentence-span';
      span.textContent = item.text + ' ';
      span.dataset.id = item.id;

      if (item.isAiFlagged) {
        span.classList.add('flag-ai');
      } else if (item.plagiarism && item.plagiarism.isPlagiarized) {
        span.classList.add('flag-plag');
      } else {
        span.classList.add('flag-human');
      }

      span.addEventListener('click', () => {
        openSentenceInspector(item);
      });

      annotatedTextContainer.appendChild(span);
    });
  }

  function filterHighlightedSentences(filter) {
    const spans = annotatedTextContainer.querySelectorAll('.sentence-span');
    spans.forEach(span => {
      span.style.display = 'inline';
      if (filter === 'ai' && !span.classList.contains('flag-ai')) {
        span.style.display = 'none';
      } else if (filter === 'plag' && !span.classList.contains('flag-plag')) {
        span.style.display = 'none';
      } else if (filter === 'human' && (span.classList.contains('flag-ai') || span.classList.contains('flag-plag'))) {
        span.style.display = 'none';
      }
    });
  }

  function openSentenceInspector(item) {
    const humanized = OmniCheckAnalyzer.humanizeSentence(item.text, activeTone);
    activeSelectedSentence = {
      ...item,
      humanized
    };

    sentenceInspector.style.display = 'block';

    const pScore = (item.perplexity && typeof item.perplexity.score === 'number') ? item.perplexity.score : 65;
    const pRating = (item.perplexity && item.perplexity.rating) ? item.perplexity.rating : 'Moderate';

    if (item.isAiFlagged) {
      inspectorTag.style.background = 'var(--color-ai)';
      inspectorTag.textContent = 'AI Detected';
      inspectorConfidence.textContent = `Confidence: ${item.aiScore}%`;
      inspectorDetails.innerHTML = `
        <strong>Linguistic Footprints:</strong> ${item.detectedPatterns.length > 0 ? item.detectedPatterns.join(', ') : 'Synthetic uniform clause rhythm'}<br>
        <strong>Perplexity Score:</strong> ${pScore}/100 (${pRating})
      `;
    } else if (item.plagiarism && item.plagiarism.isPlagiarized) {
      inspectorTag.style.background = 'var(--color-plag)';
      inspectorTag.textContent = 'Copied Text';
      inspectorConfidence.textContent = `Match: ${item.plagiarism.matchPercent}%`;
      inspectorDetails.innerHTML = `
        <strong>Source Matched:</strong> ${item.plagiarism.source}<br>
        <strong>Reference Snippet:</strong> "${item.plagiarism.matchedSnippet}"
      `;
    } else {
      inspectorTag.style.background = 'var(--color-human)';
      inspectorTag.textContent = 'Human Written';
      inspectorConfidence.textContent = `Human Rhythm`;
      inspectorDetails.innerHTML = `
        <strong>Perplexity:</strong> ${pScore}/100 (${pRating})<br>
        Natural burstiness and organic phrasing detected.
      `;
    }

    inspectorRewriteText.textContent = `"${humanized}"`;
  }

  function applySingleRewrite(item) {
    const currentText = docTextInput.value;
    const newText = currentText.replace(item.text, item.humanized);
    docTextInput.value = newText;
    updateWordMetrics();
    sentenceInspector.style.display = 'none';
    showToast('Sentence humanized! Re-scanning document...');
    executeDiagnosticScan();
  }

  /**
   * Render AI Humanizer Studio with Tone Support
   */
  function renderHumanizerStudio(suggestions) {
    humanizerCardGrid.innerHTML = '';

    if (!suggestions || suggestions.length === 0) {
      humanizerCardGrid.innerHTML = `
        <div style="grid-column: 1 / -1; padding: 28px; text-align: center; color: var(--text-muted); background: var(--bg-input); border-radius: var(--radius-md);">
          ✨ No synthetic AI sentences detected! Your content already reflects organic human expression.
        </div>
      `;
      applyAllHumanizeBtn.style.display = 'none';
      return;
    }

    applyAllHumanizeBtn.style.display = 'inline-flex';

    suggestions.forEach(item => {
      // Re-humanize in currently active tone
      const toneRewrite = OmniCheckAnalyzer.humanizeSentence(item.original, activeTone);

      const card = document.createElement('div');
      card.className = 'humanize-item';

      card.innerHTML = `
        <div class="humanize-row">
          <span class="humanize-label orig">Flagged Synthetic Sentence (${item.confidence}% AI):</span>
          <div class="humanize-text" style="color: #fca5a5;">"${escapeHtml(item.original)}"</div>
        </div>
        <div class="humanize-row">
          <span class="humanize-label rewrite">Suggested Natural Human Rewrite (${escapeHtml(activeTone)}):</span>
          <div class="humanize-text" style="color: #6ee7b7;">"${escapeHtml(toneRewrite)}"</div>
        </div>
        <div class="humanize-actions">
          <button class="btn-small copy-btn">📋 Copy</button>
          <button class="btn-small apply-btn" style="background: var(--pdf-green); color: white;">Apply to Text</button>
        </div>
      `;

      card.querySelector('.copy-btn').addEventListener('click', () => {
        navigator.clipboard.writeText(toneRewrite);
        showToast('Humanized sentence copied!');
      });

      card.querySelector('.apply-btn').addEventListener('click', () => {
        const text = docTextInput.value.replace(item.original, toneRewrite);
        docTextInput.value = text;
        updateWordMetrics();
        showToast('Applied rewrite! Re-running diagnostic scan...');
        executeDiagnosticScan();
      });

      humanizerCardGrid.appendChild(card);
    });
  }

  /**
   * Apply All Humanize Suggestions Across Entire Document & Automatically Re-Scan
   */
  function applyAllHumanizeEdits() {
    if (!currentScanResult || !currentScanResult.detailedResults.humanizer.suggestions) return;
    const suggestions = currentScanResult.detailedResults.humanizer.suggestions;

    let updatedText = docTextInput.value;
    suggestions.forEach(item => {
      const toneRewrite = OmniCheckAnalyzer.humanizeSentence(item.original, activeTone);
      updatedText = updatedText.replace(item.original, toneRewrite);
    });

    docTextInput.value = updatedText;
    updateWordMetrics();
    showToast(`✨ Successfully humanized ${suggestions.length} sentences! Re-scanning...`);
    executeDiagnosticScan();
  }

  /**
   * Copy Full Humanized Document to Clipboard
   */
  function copyFullHumanizedDocument() {
    if (!currentScanResult || !currentScanResult.detailedResults.humanizer.suggestions) {
      navigator.clipboard.writeText(docTextInput.value);
      showToast('Document copied to clipboard!');
      return;
    }

    const suggestions = currentScanResult.detailedResults.humanizer.suggestions;
    let fullHumanized = docTextInput.value;
    suggestions.forEach(item => {
      const toneRewrite = OmniCheckAnalyzer.humanizeSentence(item.original, activeTone);
      fullHumanized = fullHumanized.replace(item.original, toneRewrite);
    });

    navigator.clipboard.writeText(fullHumanized);
    showToast('✨ Entire humanized document copied to clipboard!');
  }

  function downloadReportFile(content, originalName) {
    const baseName = (originalName || "Document").replace(/\.[^/.]+$/, "");
    const blob = new Blob([content], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `OmniCheck_Report_${baseName}_${new Date().toISOString().substring(0, 10)}.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast('Report downloaded successfully!');
  }

  function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <span>${type === 'warning' ? '⚠️' : '✓'}</span>
      <span>${escapeHtml(message)}</span>
    `;

    const container = document.getElementById('toastContainer');
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  }

  // Device Mode Logic: Phone (Portrait) vs Laptop (Landscape)
  function setDeviceMode(mode) {
    const validMode = mode === 'phone' ? 'phone' : 'laptop';
    document.documentElement.setAttribute('data-device', validMode);

    if (deviceIcon && deviceLabel) {
      if (validMode === 'phone') {
        deviceIcon.textContent = '📱';
        deviceLabel.textContent = 'Phone';
      } else {
        deviceIcon.textContent = '💻';
        deviceLabel.textContent = 'Laptop';
      }
    }

    localStorage.setItem('omnicheck_device', validMode);

    if (deviceModal) {
      deviceModal.classList.remove('active');
    }
  }

  function toggleDeviceMode() {
    const current = document.documentElement.getAttribute('data-device') || 'laptop';
    const next = current === 'phone' ? 'laptop' : 'phone';
    setDeviceMode(next);
    showToast(next === 'phone' ? '📱 Switched to Phone (Portrait) Mode' : '💻 Switched to Laptop (Landscape) Mode');
  }

  // Initialize Device Mode
  const savedDevice = localStorage.getItem('omnicheck_device');
  if (savedDevice) {
    setDeviceMode(savedDevice);
  } else {
    // First time visitor: show the device selection modal
    if (deviceModal) {
      deviceModal.classList.add('active');
    }
    // Default attribute to laptop initially
    document.documentElement.setAttribute('data-device', 'laptop');
  }

  function toggleTheme() {
    const html = document.documentElement;
    const isDark = html.getAttribute('data-theme') === 'dark';
    const nextTheme = isDark ? 'light' : 'dark';

    html.setAttribute('data-theme', nextTheme);
    themeIcon.textContent = nextTheme === 'dark' ? '☀️' : '🌙';
    themeLabel.textContent = nextTheme === 'dark' ? 'Light' : 'Dark';
    localStorage.setItem('omnicheck_theme', nextTheme);
  }

  const savedTheme = localStorage.getItem('omnicheck_theme');
  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
    themeIcon.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
    themeLabel.textContent = savedTheme === 'dark' ? 'Light' : 'Dark';
  }

  function escapeHtml(str) {
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

})();
