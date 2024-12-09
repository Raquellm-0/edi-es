function openModal(ModalID) {
    document.getElementById(`modalRosa1-edpass-${ModalID}`).style.display = "flex";
    document.getElementById(`modalVerde1-edpass-${ModalID}`).style.display = "flex";
}

function closeModal(ModalID) {
    document.getElementById(`modalRosa1-edpass-${ModalID}`).style.display = "none";
    document.getElementById(`modalVerde1-edpass-${ModalID}`).style.display = "none";
}
