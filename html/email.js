const $email = document.getElementById("email");

function displayTxt(evt) {
    evt.currentTarget.parentNode.querySelector('p').textContent = "po@tekh.in";
}
function removeTxt(evt) {
    evt.currentTarget.parentNode.querySelector('p').textContent = "This domain is used only to have super-cool email.";
}

$email.addEventListener('mouseover', displayTxt);
$email.addEventListener('mouseout', removeTxt);