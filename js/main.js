const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");
if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
}
document
  .querySelectorAll(".faq-q")
  .forEach((b) =>
    b.addEventListener("click", () => b.parentElement.classList.toggle("open")),
  );
const y = document.getElementById("year");
if (y) y.textContent = "2024";
const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    let ok = true;
    form.querySelectorAll("[required]").forEach((el) => {
      const err = el.parentElement.querySelector(".error");
      const valid = el.checkValidity() && el.value.trim() !== "";
      if (err) err.style.display = valid ? "none" : "block";
      if (!valid) ok = false;
    });
    const status = document.getElementById("formStatus");
    if (!ok) {
      status.textContent = "Please check the highlighted fields.";
      return;
    }
    if (form.website.value) {
      status.textContent = "Thank you.";
      return;
    }
    const endpoint = form.dataset.formEndpoint;
    if (!endpoint || endpoint.includes("FORM_ENDPOINT_REQUIRED")) {
      status.textContent =
        "Form delivery is not connected yet. Please call or email Regal Renovations using the details on this page.";
      return;
    }
    try {
      const r = await fetch(endpoint, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!r.ok) throw new Error();
      form.reset();
      status.textContent = "Thanks — your enquiry has been sent.";
    } catch {
      status.textContent =
        "The form could not be sent. Please call or email us instead.";
    }
  });
}
