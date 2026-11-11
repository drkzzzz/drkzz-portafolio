export function initInteractions() {
  const lang = document.body.dataset.locale ?? "es";
  try {
    localStorage.setItem("drkzz-language", lang);
  } catch {
    // The language links still work if storage is unavailable.
  }

  const preloader = document.querySelector<HTMLElement>(".preloader");
  let seen = false;
  try {
    seen = sessionStorage.getItem("drkzz-intro-seen") === "1";
    sessionStorage.setItem("drkzz-intro-seen", "1");
  } catch {
    seen = true;
  }
  if (preloader) {
    if (seen || matchMedia("(prefers-reduced-motion: reduce)").matches) {
      preloader.classList.add("is-hidden");
    } else {
      window.setTimeout(() => preloader.classList.add("is-hidden"), 720);
    }
  }

  const menuButton = document.querySelector<HTMLButtonElement>(".menu-toggle");
  const menu = document.querySelector<HTMLElement>("#mobile-menu");
  menuButton?.addEventListener("click", () => {
    const expanded = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!expanded));
    menuButton.setAttribute(
      "aria-label",
      !expanded
        ? lang === "es"
          ? "Cerrar menú"
          : "Close menu"
        : lang === "es"
          ? "Abrir menú"
          : "Open menu",
    );
    if (menu) menu.hidden = expanded;
  });
  menu?.querySelectorAll("a").forEach((link) =>
    link.addEventListener("click", () => {
      if (menuButton) {
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute(
          "aria-label",
          lang === "es" ? "Abrir menú" : "Open menu",
        );
      }
      menu.hidden = true;
    }),
  );

  const progress = document.querySelector<HTMLElement>(
    ".reading-progress span",
  );
  let ticking = false;
  const updateProgress = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    if (progress)
      progress.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
    ticking = false;
  };
  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        window.requestAnimationFrame(updateProgress);
        ticking = true;
      }
    },
    { passive: true },
  );

  const sections = [
    ...document.querySelectorAll<HTMLElement>("main section[id], main #trayectoria"),
  ];
  const navLinks = [
    ...document.querySelectorAll<HTMLAnchorElement>(".main-nav a"),
  ];
  if ("IntersectionObserver" in window && navLinks.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          navLinks.forEach((link) => {
            if (link.hash === `#${entry.target.id}`)
              link.setAttribute("aria-current", "location");
            else link.removeAttribute("aria-current");
          });
        });
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
  }

  const copyButton = document.querySelector<HTMLButtonElement>(".copy-email");
  const feedback = document.querySelector<HTMLElement>(".copy-feedback");
  copyButton?.addEventListener("click", async () => {
    const email = copyButton.dataset.email;
    if (!email || !navigator.clipboard) {
      if (feedback) feedback.textContent = email ?? "";
      return;
    }
    try {
      await navigator.clipboard.writeText(email);
      if (feedback)
        feedback.textContent =
          lang === "es" ? "Correo copiado" : "Email copied";
      window.setTimeout(() => {
        if (feedback) feedback.textContent = "";
      }, 2400);
    } catch {
      if (feedback) feedback.textContent = email;
    }
  });

  const dialog = document.querySelector<HTMLDialogElement>("#contact-dialog");
  const openContact = document.querySelector<HTMLButtonElement>(".contact-form-open");
  const closeContact = dialog?.querySelector<HTMLButtonElement>("[data-close-contact]");
  const contactForm = dialog?.querySelector<HTMLFormElement>("#contact-form");
  const formFeedback = dialog?.querySelector<HTMLElement>(".contact-form__feedback");
  const submitButton = contactForm?.querySelector<HTMLButtonElement>("[type=submit]");
  openContact?.addEventListener("click", () => dialog?.showModal());
  closeContact?.addEventListener("click", () => dialog?.close());
  dialog?.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
  contactForm?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const data = new FormData(contactForm);
    if (String(data.get("_honey") ?? "").trim()) return;
    if (formFeedback) formFeedback.textContent = "";
    if (submitButton) {
      submitButton.disabled = true;
      const label = submitButton.querySelector("span");
      if (label) label.textContent = lang === "es" ? "Enviando…" : "Sending…";
    }
    try {
      const response = await fetch(contactForm.action, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(Object.fromEntries(data.entries())),
      });
      const result = (await response.json()) as { success?: string | boolean; message?: string };
      if (!response.ok || (result.success !== true && result.success !== "true")) {
        throw new Error(result.message || "Contact delivery failed");
      }
      contactForm.reset();
      if (formFeedback) formFeedback.textContent = lang === "es" ? "Mensaje enviado. Gracias por escribirme." : "Message sent. Thanks for reaching out.";
    } catch (error) {
      const reason = error instanceof Error ? error.message : "";
      if (formFeedback) {
        const fallback = lang === "es" ? "No se pudo enviar. Inténtalo de nuevo o usa el enlace de correo directo." : "Could not send the message. Try again or use the direct email link.";
        formFeedback.textContent = reason && reason !== "Contact delivery failed" ? `${fallback} (${reason})` : fallback;
      }
    } finally {
      if (submitButton) {
        submitButton.disabled = false;
        const label = submitButton.querySelector("span");
        if (label) label.textContent = lang === "es" ? "Enviar mensaje" : "Send message";
      }
    }
  });

  document.querySelectorAll<HTMLElement>(".magnetic").forEach((button) => {
    if (
      !matchMedia("(hover: hover) and (pointer: fine)").matches ||
      matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    button.addEventListener("pointermove", (event) => {
      const rect = button.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      button.style.translate = `${x * 0.07}px ${y * 0.1}px`;
    });
    button.addEventListener("pointerleave", () => {
      button.style.translate = "0 0";
    });
  });
}
