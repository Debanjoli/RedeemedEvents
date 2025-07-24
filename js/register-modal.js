document.addEventListener("DOMContentLoaded", function () {
  const signInModal = document.getElementById("signInModal");
  const registerModal = new bootstrap.Modal(
    document.getElementById("registerModal")
  );
  const openRegisterBtn = document.getElementById("openRegisterModal");

  openRegisterBtn.addEventListener("click", function (e) {
    e.preventDefault();
    const bsSignInModal = bootstrap.Modal.getInstance(signInModal);
    bsSignInModal.hide();

    signInModal.addEventListener("hidden.bs.modal", function handler() {
      registerModal.show();
      signInModal.removeEventListener("hidden.bs.modal", handler);
    });
  });
});
