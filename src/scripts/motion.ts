import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function initMotion() {
  gsap.registerPlugin(ScrollTrigger);
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const context = gsap.context(() => {
    const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
    intro
      .from(
        ".hero__title span",
        {
          yPercent: 105,
          opacity: 0,
          duration: reduce ? 0.01 : 0.8,
          stagger: reduce ? 0 : 0.12,
        },
        0.12,
      )
      .from(
        ".hero__intro, .hero__actions",
        { y: 18, opacity: 0, duration: reduce ? 0.01 : 0.55, stagger: 0.1 },
        0.35,
      )
      .from(
        ".hero-visual",
        { scale: 0.92, opacity: 0, duration: reduce ? 0.01 : 1 },
        0.2,
      );

    if (!reduce) {
      gsap.utils
        .toArray<HTMLElement>(
          ".section-heading, .about__layout, .projects__intro, .skills__intro, .contact__layout",
        )
        .forEach((element) => {
          gsap.from(element, {
            y: 28,
            opacity: 0,
            duration: 0.75,
            ease: "power2.out",
            scrollTrigger: { trigger: element, start: "top 84%", once: true },
          });
        });
      gsap.utils.toArray<HTMLElement>(".project-item").forEach((item) => {
        gsap.from(item, {
          y: 20, opacity: 0, duration: 0.55, ease: "power2.out",
          scrollTrigger: { trigger: item, start: "top 88%", once: true },
        });
      });
      gsap.utils
        .toArray<HTMLElement>(".skill-group")
        .forEach((element) => {
          gsap.from(element, {
            y: 18,
            opacity: 0,
            duration: 0.55,
            scrollTrigger: { trigger: element, start: "top 88%", once: true },
          });
        });
    }
  });

  const visual = document.querySelector<HTMLElement>(".hero-visual");
  visual?.style.setProperty("--pointer-x", "0px");
  visual?.style.setProperty("--pointer-y", "0px");
  const onPointerMove = (event: PointerEvent) => {
    if (
      !visual ||
      reduce ||
      !matchMedia("(hover: hover) and (pointer: fine)").matches
    )
      return;
    const bounds = visual.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    visual.style.translate = `${x * 9}px ${y * 9}px`;
  };
  visual?.addEventListener("pointermove", onPointerMove);
  visual?.addEventListener("pointerleave", () => {
    if (visual) visual.style.translate = "0 0";
  });
  const projectItems = [...document.querySelectorAll<HTMLDetailsElement>(".project-item")];
  const onProjectToggle = (event: Event) => {
    const item = event.currentTarget as HTMLDetailsElement;
    if (!item.open || reduce) return;
    const detail = item.querySelector<HTMLElement>(".project-item__detail");
    const chips = item.querySelectorAll(".project__stack li");
    if (detail) gsap.fromTo(detail, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.42, ease: "power2.out" });
    if (chips.length) gsap.fromTo(chips, { opacity: 0, y: 7 }, { opacity: 1, y: 0, duration: 0.28, stagger: 0.035, delay: 0.08, ease: "power2.out" });
  };
  projectItems.forEach((item) => item.addEventListener("toggle", onProjectToggle));
  const cleanup = () => {
    visual?.removeEventListener("pointermove", onPointerMove);
    projectItems.forEach((item) => item.removeEventListener("toggle", onProjectToggle));
    context.revert();
  };
  window.addEventListener("pagehide", cleanup, { once: true });
}
