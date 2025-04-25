document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll('.ob-email');

  elements.forEach(function (el) {
    const user = el.dataset.user;
    const domain = el.dataset.domain;

    if (user && domain) {
      const email = user + '@' + domain;
      el.innerHTML = '<a href="mailto:' + email + '">' + email + '</a>';
    }
  });
});
