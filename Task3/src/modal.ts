export function showModal(message: string) {
  return new Promise((res) => {
    const modal = document.createElement("div");
    modal.className = "custom-modal";

    modal.innerHTML = `<div class="modal-container">
  <div class="modal-content">
    <h3 class="modal-title">Confirm Action</h3>
    <div class="modal-message">
      <p>${message}</p>
    </div>
    <div class="modal-actions">
    <button id="Accept" class="btn btn-accept">Yes</button>
    <button id="Deny" class="btn btn-deny">No</button>
    </div>
  </div>
</div>`;
    document.body.appendChild(modal);
    const hanleAccept = () => {
      modal.remove();
      res(true);
    };
    const handleDeny = () => {
      modal.remove();
      res(false);
    };
    modal.querySelector("#Accept")?.addEventListener("click", hanleAccept);
    modal.querySelector("#Deny")?.addEventListener("click", handleDeny);
  });
}
