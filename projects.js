(function () {
  var projectDetails = {
    analyzer: {
      title: "AI Business Analyzer (RAG Agent)",
      subtitle: "Python, RAG, Generative AI",
      content: "<p class=\"project-modal-lead\">An agent that uses RAG (Retrieval-Augmented Generation) over your project information to automatically produce business and product documentation.</p>" +
        "<h3>What it does</h3>" +
        "<ul><li>Uses existing project context as the knowledge base</li>" +
        "<li>Generates <strong>BRD</strong> (Business Requirements Document)</li>" +
        "<li>Produces <strong>stakeholder files</strong></li>" +
        "<li>Creates <strong>FRD</strong> (Functional Requirements Document) and <strong>non-FRD</strong> artifacts</li>" +
        "<li>Outputs <strong>user stories</strong> and related deliverables</li></ul>" +
        "<h3>Technologies</h3>" +
        "<p>Python, RAG pipelines, Generative AI (LLMs), vector stores, and orchestration frameworks.</p>" +
        "<h3>Impact</h3>" +
        "<p>Accelerates requirement gathering and documentation for new or existing projects with minimal manual input.</p>"
    },
    "vehicle-insurance": {
      title: "Vehicle Insurance – MLOps",
      subtitle: "MLOps, Python, ML pipelines",
      content: "<p class=\"project-modal-lead\">A complete MLOps-style project for vehicle insurance, applying the full ML lifecycle except Kubernetes.</p>" +
        "<h3>What it covers</h3>" +
        "<ul><li>Data versioning and pipeline orchestration</li>" +
        "<li>Experiment tracking and model registry</li>" +
        "<li>Reproducible training and evaluation</li>" +
        "<li>CI/CD for model and pipeline updates</li>" +
        "<li>Monitoring and deployment practices</li></ul>" +
        "<h3>Technologies</h3>" +
        "<p>Python, ML frameworks, MLOps tooling (e.g. DVC, MLflow, or similar), containers, and automation.</p>" +
        "<h3>Impact</h3>" +
        "<p>Demonstrates production-grade ML workflow from development to deployment.</p>"
    },
    "web-scraping": {
      title: "Web Scraping Pipeline",
      subtitle: "Python, Cron, Data Engineering",
      content: "<p class=\"project-modal-lead\">A pipeline that scrapes used vehicle listings from Belgium, extracts rich features, and maintains a growing dataset.</p>" +
        "<h3>What it does</h3>" +
        "<ul><li>Scrapes used vehicle content from Belgian sources</li>" +
        "<li>Extracts <strong>50+ features</strong> per listing</li>" +
        "<li>Builds and maintains a structured dataset</li>" +
        "<li>Uses <strong>cron jobs</strong> for scheduled runs</li>" +
        "<li>Continuously grows the dataset over time</li></ul>" +
        "<h3>Technologies</h3>" +
        "<p>Python, web scraping libraries (e.g. Beautiful Soup, Selenium), cron/schedulers, data storage, and ETL patterns.</p>" +
        "<h3>Impact</h3>" +
        "<p>Provides a reliable, up-to-date data source for vehicle price and market analysis.</p>"
    },
    "job-portal": {
      title: "Job Portal Website – Full MERN Stack",
      subtitle: "MongoDB, Express, React, Node.js, JWT",
      content: "<p class=\"project-modal-lead\">A full-featured job portal with multi-role access for job seekers, recruiters, and administrators.</p>" +
        "<h3>Core features</h3>" +
        "<ul><li>Secure authentication and role-based authorization</li>" +
        "<li>Job posting and management</li>" +
        "<li>Job application tracking</li>" +
        "<li>Admin dashboard for platform activity</li>" +
        "<li>Real-time notifications</li>" +
        "<li>Responsive UI</li></ul>" +
        "<h3>Implementation</h3>" +
        "<p>RESTful API, protected routes, JWT authentication, modular backend, and scalable database schema.</p>" +
        "<h3>Technologies</h3>" +
        "<p>MongoDB, Express.js, React.js, Node.js (MERN), JWT.</p>" +
        "<h3>Impact</h3>" +
        "<p>Simulates a production-ready recruitment platform with real-world system design.</p>"
    },
    handwritten: {
      title: "Handwritten Recognition",
      subtitle: "Deep Learning, Computer Vision",
      content: "<p class=\"project-modal-lead\">A machine learning project for recognizing handwritten text using deep learning and computer vision.</p>" +
        "<h3>Focus</h3>" +
        "<ul><li>Model training on handwritten datasets</li>" +
        "<li>Preprocessing and augmentation</li>" +
        "<li>Evaluation and deployment considerations</li></ul>" +
        "<h3>Technologies</h3>" +
        "<p>Python, deep learning frameworks (e.g. TensorFlow/PyTorch), computer vision, and ML pipelines.</p>" +
        "<h3>Impact</h3>" +
        "<p>Showcases capability in DL and vision-based applications.</p>"
    },
    "vehicle-price": {
      title: "Vehicle Price Prediction",
      subtitle: "Python, Scikit-learn, Streamlit",
      content: "<p class=\"project-modal-lead\">An end-to-end ML regression project that predicts vehicle resale value from structured features.</p>" +
        "<h3>Workflow</h3>" +
        "<ul><li>Data cleaning and preprocessing</li>" +
        "<li>Feature engineering</li>" +
        "<li>Exploratory Data Analysis (EDA)</li>" +
        "<li>Multiple model comparison</li>" +
        "<li>Hyperparameter tuning</li>" +
        "<li>Evaluation with RMSE and R²</li></ul>" +
        "<h3>Implementation</h3>" +
        "<p>Pipeline-based architecture, model comparison, deployment-ready structure, and reproducible training.</p>" +
        "<h3>Technologies</h3>" +
        "<p>Python, Pandas, NumPy, Scikit-learn, Matplotlib, Streamlit.</p>" +
        "<h3>Impact</h3>" +
        "<p>Supports fair market price estimation and data-driven decisions in the automobile market.</p>"
    },
    hezop: {
      title: "HEZOP – Intelligent P&ID Analysis & HAZOP Automation Agent",
      subtitle: "Python, RAG, Generative AI, AutoCAD",
      content: "<p class=\"project-modal-lead\">An AI-powered system that reads P&ID (Piping & Instrumentation Diagram) files from AutoCAD, analyzes process connections, and generates HAZOP-based risk documentation.</p>" +
        "<h3>What the system does</h3>" +
        "<ul><li>Reads P&ID diagrams from AutoCAD exports</li>" +
        "<li>Extracts components, nodes, pipelines, and connections</li>" +
        "<li>Analyzes edges and process flow</li>" +
        "<li>Uses company HAZOP reports as domain knowledge</li>" +
        "<li>Acts as an intelligent HAZOP analyzer agent</li></ul>" +
        "<h3>Core capabilities</h3>" +
        "<p>Diagram parsing, graph-based connection modeling, process flow interpretation, risk identification, and automated HAZOP report generation using RAG and generative AI.</p>" +
        "<h3>Technologies</h3>" +
        "<p>Python, Generative AI, RAG, graph modeling, AutoCAD file parsing, and data pipelines.</p>" +
        "<h3>Impact</h3>" +
        "<p>Reduces manual engineering review time and helps safety engineers with hazard identification and industrial risk documentation.</p>"
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
