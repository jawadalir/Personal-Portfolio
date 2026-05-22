(function () {
  var projectDetails = {
    "business-analyser": {
      title: "Business Analyser Agent – Autonomous Generative AI System",
      subtitle: "Python · LangChain ReAct · OpenAI API · FastAPI · PostgreSQL · n8n · Docker · MLflow · AWS · 2026",
      content:
        "<p class=\"project-modal-lead\">A multi-step autonomous agent for dynamic business data analysis with tool-calling, memory management, and intelligent decision routing — deployed on AWS.</p>" +
        "<h3>Key highlights</h3>" +
        "<ul>" +
        "<li>Built with LangChain ReAct for autonomous business data analysis and intelligent routing.</li>" +
        "<li>Integrated n8n for automated scheduling, data ingestion, and cross-service orchestration.</li>" +
        "<li>Delivered FastAPI REST backend connected to PostgreSQL and third-party services.</li>" +
        "<li>Containerized with Docker and tracked experiments with MLflow for production-grade MLOps.</li>" +
        "</ul>"
    },
    hezop: {
      title: "HEZOP Analyzer Agent",
      subtitle: "Python · LangChain · OpenAI API · AutoCAD Integration · FastAPI · Streamlit · 2025",
      content:
        "<p class=\"project-modal-lead\">An AI-powered HEZOP analysis agent integrated with AutoCAD to analyze P&amp;ID diagrams and support safety engineers.</p>" +
        "<h3>Key highlights</h3>" +
        "<ul>" +
        "<li>Analyzes P&amp;ID diagrams, identifies process hazards, and assists with domain-specific safety queries.</li>" +
        "<li>RAG pipeline over engineering safety documents for reasoning over technical standards.</li>" +
        "<li>Autonomously supports risk assessment workflows for HEZOP engineers.</li>" +
        "</ul>"
    },
    "car-price-analyst": {
      title: "Car Price Analyst Agent",
      subtitle: "Python · LangChain · OpenAI API · Selenium · BeautifulSoup · FastAPI · SMTP · 2025",
      content:
        "<p class=\"project-modal-lead\">An intelligent agent that scrapes second-hand car listings from Belgium-based platforms, predicts fair market prices, and delivers recommendations via email.</p>" +
        "<h3>Key highlights</h3>" +
        "<ul>" +
        "<li>Scrapes listings from multiple Belgium platforms with user-defined filters and preferences.</li>" +
        "<li>Applies ML models for fair market price prediction.</li>" +
        "<li>Automated end-to-end pipeline from scraping and evaluation to autonomous email delivery.</li>" +
        "</ul>"
    },
    "vehicle-insurance": {
      title: "Vehicle Insurance Prediction – MLOps Pipeline",
      subtitle: "Python · scikit-learn · XGBoost · MLflow · Docker · AWS S3 · 2026",
      content:
        "<p class=\"project-modal-lead\">End-to-end machine learning pipeline for vehicle insurance claim prediction with full MLOps lifecycle.</p>" +
        "<h3>Key highlights</h3>" +
        "<ul>" +
        "<li>Data preprocessing, feature engineering, model training, and evaluation with scikit-learn and XGBoost.</li>" +
        "<li>Versioned experiments and model artifacts with MLflow Model Registry.</li>" +
        "<li>Containerized inference service with Docker; AWS S3 for artifact storage and cloud-ready deployment.</li>" +
        "</ul>"
    },
    smartinfo: {
      title: "SmartInfo – YouTube & Document Content Analyzer",
      subtitle: "Python · LangChain · HuggingFace · FAISS · OpenAI API · React.js · FastAPI · Streamlit · Final Year Project · 2025",
      content:
        "<p class=\"project-modal-lead\">End-to-end RAG pipeline for intelligent Q&amp;A over YouTube transcripts and uploaded documents.</p>" +
        "<h3>Key highlights</h3>" +
        "<ul>" +
        "<li>FAISS vector search, sentence embeddings, and LangChain agent tools for document and video Q&amp;A.</li>" +
        "<li>Fine-tuned HuggingFace transformers for domain-specific NLP tasks.</li>" +
        "<li>React.js frontend and Streamlit demo with FastAPI backend for a seamless AI copilot experience.</li>" +
        "<li>Hybrid retrieval and advanced prompt engineering to improve relevance and reduce hallucinations.</li>" +
        "</ul>"
    }
  };

  var overlay = document.getElementById("project-modal-overlay");
  var modal = document.getElementById("project-modal");
  var inner = document.getElementById("project-modal-inner");
  var closeBtn = document.getElementById("project-modal-close");
  var cards = document.querySelectorAll(".project-card");

  function openModal(projectId) {
    var data = projectDetails[projectId];
    if (!data || !overlay || !inner) return;
    inner.innerHTML =
      "<h2 id=\"project-modal-title\">" + data.title + "</h2>" +
      "<p class=\"project-modal-meta\">" + data.subtitle + "</p>" +
      "<div class=\"project-modal-body\">" + data.content + "</div>";
    overlay.classList.add("is-open");
    overlay.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    if (closeBtn) closeBtn.focus();
  }

  function closeModal() {
    if (!overlay) return;
    overlay.classList.remove("is-open");
    overlay.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  if (cards.length) {
    cards.forEach(function (card) {
      var id = card.getAttribute("data-project-id");
      if (!id) return;
      card.addEventListener("click", function () { openModal(id); });
      card.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openModal(id);
        }
      });
    });
  }
  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  if (overlay) {
    overlay.addEventListener("click", function (e) {
      if (e.target === overlay) closeModal();
    });
  }
})();
