(function () {
  const config = window.siteConfig || {};
  const services = Array.isArray(config.services) ? config.services : [];
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const servicePages = services.map((service) => service.url);

  function applyConfigValues() {
    document.querySelectorAll("[data-config]").forEach((node) => {
      const key = node.getAttribute("data-config");
      if (config[key]) {
        node.textContent = config[key];
      }
    });

    document.querySelectorAll("[data-config-href='email']").forEach((node) => {
      if (config.email) {
        node.setAttribute("href", "mailto:" + config.email);
      }
    });

    document.querySelectorAll("[data-current-year]").forEach((node) => {
      node.textContent = new Date().getFullYear();
    });
  }

  function renderServiceLinks() {
    document.querySelectorAll("[data-service-links]").forEach((list) => {
      const mode = list.getAttribute("data-service-links");
      const links = mode === "nav"
        ? [{ title: "All Services", url: "services.html" }, ...services]
        : services;

      list.innerHTML = links
        .map((service) => {
          const isActive = currentPage === service.url ? " is-active" : "";
          const className = mode === "footer"
            ? "footer__link"
            : mode === "detail"
              ? "service-detail-link"
              : "service-menu__link";
          const icon = mode === "detail"
            ? '<span aria-hidden="true"><svg viewBox="0 0 24 24" focusable="false"><path d="M7 12h10M13 7l5 5-5 5" /></svg></span>'
            : "";
          return `<li><a class="${className}${isActive}" href="${service.url}">${service.title}${icon}</a></li>`;
        })
        .join("");
    });
  }

  function setActiveNavigation() {
    const isServicePage = currentPage === "services.html" || servicePages.includes(currentPage);

    document.querySelectorAll("[data-nav-link]").forEach((link) => {
      const target = link.getAttribute("href");
      const navKey = link.getAttribute("data-nav-link");
      const active = target === currentPage || (navKey === "services" && isServicePage);
      link.classList.toggle("is-active", active);
      if (active) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  function setupButtonIcons() {
    document.querySelectorAll(".site-header__actions .btn--primary").forEach((button) => {
      if (button.querySelector(".btn__icon")) {
        return;
      }

      button.insertAdjacentHTML(
        "afterbegin",
        '<span class="btn__icon" aria-hidden="true"><svg viewBox="0 0 24 24" focusable="false"><path d="M5 12h14"></path><path d="m13 6 6 6-6 6"></path></svg></span>'
      );
    });
  }

  function setupNavigation() {
    const header = document.querySelector("[data-site-header]");
    const menuButton = document.querySelector("[data-menu-toggle]");
    const mobileMenu = document.querySelector("[data-mobile-menu]");
    const dropdownToggles = document.querySelectorAll("[data-dropdown-toggle]");

    if (!header || !menuButton || !mobileMenu) {
      return;
    }

    const mobileQuery = window.matchMedia("(max-width: 980px)");

    function syncMenuAccessibility() {
      if (mobileQuery.matches) {
        const isOpen = header.classList.contains("is-menu-open");
        mobileMenu.setAttribute("aria-hidden", String(!isOpen));
      } else {
        mobileMenu.setAttribute("aria-hidden", "false");
      }
    }

    function closeDropdowns() {
      dropdownToggles.forEach((toggle) => {
        const parent = toggle.closest("[data-dropdown]");
        toggle.setAttribute("aria-expanded", "false");
        parent?.classList.remove("is-open");
      });
    }

    function closeMenu() {
      header.classList.remove("is-menu-open");
      menuButton.setAttribute("aria-expanded", "false");
      syncMenuAccessibility();
      closeDropdowns();
    }

    menuButton.addEventListener("click", () => {
      const isOpen = header.classList.toggle("is-menu-open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
      syncMenuAccessibility();
      if (!isOpen) {
        closeDropdowns();
      }
    });

    dropdownToggles.forEach((toggle) => {
      toggle.addEventListener("click", () => {
        const parent = toggle.closest("[data-dropdown]");
        const isOpen = parent?.classList.toggle("is-open") || false;
        toggle.setAttribute("aria-expanded", String(isOpen));
      });
    });

    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    window.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    });

    syncMenuAccessibility();
    mobileQuery.addEventListener("change", syncMenuAccessibility);
  }

  function setupCookieBanner() {
    const banner = document.querySelector("[data-cookie-banner]");
    if (!banner) {
      return;
    }

    const savedChoice = localStorage.getItem("hc-cookie-choice") || localStorage.getItem("hc-cookie-ok");
    if (savedChoice) {
      banner.hidden = true;
      return;
    }

    banner.hidden = false;
    banner.querySelectorAll("[data-cookie-choice]").forEach((button) => {
      button.addEventListener("click", () => {
        localStorage.setItem("hc-cookie-choice", button.getAttribute("data-cookie-choice"));
        banner.hidden = true;
      });
    });
  }

  function setupCompanyInfoPanel() {
    const toggles = document.querySelectorAll("[data-company-info-toggle]");
    if (!toggles.length) {
      return;
    }

    document.body.insertAdjacentHTML("beforeend", `
      <aside class="company-panel" data-company-panel aria-hidden="true" aria-labelledby="company-panel-title">
        <div class="company-panel__inner">
          <div class="company-panel__top">
            <a class="brand company-panel__brand" href="index.html">
              <span class="brand__mark">MT</span>
              <span data-config="brandName">${config.brandName || "Markmill Trade"}</span>
            </a>
            <button class="company-panel__close" type="button" data-company-info-close aria-label="Close company information"></button>
          </div>
          <div class="company-panel__rule"></div>
          <p class="company-panel__intro">
            ${config.brandName || "Markmill Trade"} is a Prague-based digital marketing partner focused on practical growth systems: clear strategy, sharper campaigns, smoother operations, and conversion learning that teams can actually use.
          </p>
          <div class="company-panel__images" aria-label="Company work scenes">
            <img src="img/company/company-discussion.webp" alt="Marketing team discussing strategy around a table" loading="lazy">
            <img src="img/company/company-workshop.webp" alt="Marketing team reviewing campaign notes in a workshop" loading="lazy">
            <img src="img/company/company-workspace.webp" alt="Marketing professional working with notes and a laptop" loading="lazy">
          </div>
          <form class="company-panel__form">
            <h2 id="company-panel-title">Get Notification</h2>
            <label class="visually-hidden" for="company-panel-email">Email</label>
            <input id="company-panel-email" class="company-panel__input" type="email" name="email" placeholder="Email" autocomplete="email">
            <button class="btn btn--primary company-panel__submit" type="submit">Subscribe Now</button>
          </form>
        </div>
      </aside>
    `);

    applyConfigValues();

    const panel = document.querySelector("[data-company-panel]");
    const closeButton = document.querySelector("[data-company-info-close]");
    const form = panel.querySelector(".company-panel__form");

    function openPanel() {
      panel.classList.add("is-open");
      panel.setAttribute("aria-hidden", "false");
      document.documentElement.classList.add("has-company-panel");
      toggles.forEach((toggle) => toggle.setAttribute("aria-expanded", "true"));
      closeButton.focus();
    }

    function closePanel() {
      panel.classList.remove("is-open");
      panel.setAttribute("aria-hidden", "true");
      document.documentElement.classList.remove("has-company-panel");
      toggles.forEach((toggle) => toggle.setAttribute("aria-expanded", "false"));
    }

    toggles.forEach((toggle) => {
      toggle.addEventListener("click", openPanel);
    });

    closeButton.addEventListener("click", closePanel);

    panel.addEventListener("click", (event) => {
      if (event.target === panel) {
        closePanel();
      }
    });

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      closePanel();
    });

    window.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && panel.classList.contains("is-open")) {
        closePanel();
      }
    });
  }

  function setupContactStatus() {
    const successMessage = document.querySelector("[data-contact-success]");
    if (!successMessage) {
      return;
    }

    const params = new URLSearchParams(window.location.search);
    successMessage.hidden = params.get("sent") !== "1";
  }

  function setupSolutionTabs() {
    const panel = document.querySelector("[data-solution-image]")?.closest(".solution-tabs__panel");
    const tabs = document.querySelectorAll("[data-solution-tab]");
    if (!panel || !tabs.length) {
      return;
    }

    const image = panel.querySelector("[data-solution-image]");
    const title = panel.querySelector("[data-solution-title]");
    const text = panel.querySelector("[data-solution-text]");
    const list = panel.querySelector("[data-solution-list]");
    const link = panel.querySelector("[data-solution-link]");

    const solutions = {
      operations: {
        image: "img/home/solution-operations.webp",
        alt: "Marketing operations team supporting active campaigns",
        title: "Campaign operations engine.",
        text: "We organize campaign launches, channel handoffs, creative checks, and reporting rhythms so execution stays clear across the whole team.",
        items: [
          "Launch calendars and workflow ownership",
          "Creative quality checks before spend",
          "Weekly reporting structure for decisions",
        ],
        href: "marketing-operations.html",
      },
      consulting: {
        image: "img/home/solution-consulting.webp",
        alt: "Marketing consultants planning a campaign roadmap",
        title: "Strategic growth consulting.",
        text: "We turn scattered priorities into a practical plan: market focus, offer clarity, channel choices, and the next measurable experiments.",
        items: [
          "Positioning and audience prioritization",
          "Channel roadmap with clear next actions",
          "Decision framework for budget allocation",
        ],
        href: "strategy-consulting.html",
      },
      growth: {
        image: "img/home/solution-growth.webp",
        alt: "Growth marketers reviewing campaign analytics",
        title: "Conversion intelligence loop.",
        text: "We connect performance data with landing-page behavior and creative signals so every campaign cycle teaches the next one what to improve.",
        items: [
          "Conversion path and landing-page review",
          "Experiment backlog for measurable lifts",
          "Insight reporting tied to business outcomes",
        ],
        href: "conversion-intelligence.html",
      },
    };

    function setActiveSolution(key) {
      const solution = solutions[key];
      if (!solution) {
        return;
      }

      tabs.forEach((tab) => {
        const isActive = tab.getAttribute("data-solution-tab") === key;
        tab.classList.toggle("is-active", isActive);
        tab.setAttribute("aria-selected", String(isActive));
        if (isActive) {
          panel.setAttribute("aria-labelledby", tab.id);
        }
      });

      panel.classList.add("is-changing");
      window.setTimeout(() => {
        image.src = solution.image;
        image.alt = solution.alt;
        title.textContent = solution.title;
        text.textContent = solution.text;
        list.innerHTML = solution.items.map((item) => `<li>${item}</li>`).join("");
        link.href = solution.href;
        panel.classList.remove("is-changing");
      }, 120);
    }

    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        setActiveSolution(tab.getAttribute("data-solution-tab"));
      });
    });
  }

  function setupFaqAccordion() {
    const accordions = document.querySelectorAll("[data-faq-accordion]");
    if (!accordions.length) {
      return;
    }

    accordions.forEach((accordion, accordionIndex) => {
      const items = Array.from(accordion.querySelectorAll(".faq-item"));

      function setOpen(item) {
        const button = item.querySelector(".faq-item__button");
        const body = item.querySelector(".faq-item__body");

        item.classList.add("is-open");
        button.setAttribute("aria-expanded", "true");
        body.style.height = "0px";

        requestAnimationFrame(() => {
          body.style.height = `${body.scrollHeight}px`;
        });
      }

      function setClosed(item) {
        const button = item.querySelector(".faq-item__button");
        const body = item.querySelector(".faq-item__body");

        body.style.height = `${body.scrollHeight}px`;
        body.offsetHeight;
        item.classList.remove("is-open");
        button.setAttribute("aria-expanded", "false");

        requestAnimationFrame(() => {
          body.style.height = "0px";
        });
      }

      items.forEach((item, index) => {
        const button = item.querySelector(".faq-item__button");
        const body = item.querySelector(".faq-item__body");
        const bodyId = `faq-panel-${accordionIndex + 1}-${index + 1}`;

        body.id = bodyId;
        button.setAttribute("aria-controls", bodyId);
        body.style.height = item.classList.contains("is-open") ? "auto" : "0px";

        button.addEventListener("click", () => {
          const isOpen = item.classList.contains("is-open");

          items.forEach((faqItem) => {
            if (faqItem.classList.contains("is-open")) {
              setClosed(faqItem);
            }
          });

          if (!isOpen) {
            setOpen(item);
          }
        });

        body.addEventListener("transitionend", (event) => {
          if (event.propertyName === "height" && item.classList.contains("is-open")) {
            body.style.height = "auto";
          }
        });
      });
    });
  }

  function setupTestimonials() {
    const root = document.querySelector("[data-testimonials]");
    if (!root) {
      return;
    }

    const testimonials = [
      {
        quote: "\"Markmill helped us turn scattered campaign ideas into a clear acquisition workflow. The reporting finally makes sense for our team.\"",
        name: "Natalie Robinson",
        role: "Marketing Manager"
      },
      {
        quote: "\"They found the gaps in our funnel quickly and gave us a test plan we could actually execute without slowing the team down.\"",
        name: "Martin Kovac",
        role: "Founder"
      },
      {
        quote: "\"The creative testing structure was the biggest win. We stopped guessing and started learning from every campaign cycle.\"",
        name: "Anna Schmidt",
        role: "Growth Lead"
      },
      {
        quote: "\"Our paid media and landing page work finally feel connected. Markmill gave us a cleaner system and better weekly decisions.\"",
        name: "Jonas Petrov",
        role: "Ecommerce Director"
      },
      {
        quote: "\"They worked well with our internal team, tightened our messaging, and made our performance reviews much more useful.\"",
        name: "Laura Chen",
        role: "Brand Strategist"
      },
      {
        quote: "\"The process was direct and refreshingly practical. We left each call with priorities, owners, and measurable next steps.\"",
        name: "Daniel Weber",
        role: "Operations Lead"
      }
    ];

    const quote = root.querySelector("[data-testimonial-quote]");
    const name = root.querySelector("[data-testimonial-name]");
    const role = root.querySelector("[data-testimonial-role]");
    let activeIndex = 0;

    function setActiveTestimonial(index) {
      activeIndex = (index + testimonials.length) % testimonials.length;
      const testimonial = testimonials[activeIndex];
      quote.textContent = testimonial.quote;
      name.textContent = testimonial.name;
      role.textContent = testimonial.role;
    }

    root.querySelector("[data-testimonial-prev]").addEventListener("click", () => {
      setActiveTestimonial(activeIndex - 1);
    });

    root.querySelector("[data-testimonial-next]").addEventListener("click", () => {
      setActiveTestimonial(activeIndex + 1);
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    applyConfigValues();
    renderServiceLinks();
    setActiveNavigation();
    setupButtonIcons();
    setupNavigation();
    setupCookieBanner();
    setupCompanyInfoPanel();
    setupContactStatus();
    setupSolutionTabs();
    setupFaqAccordion();
    setupTestimonials();
  });
})();
