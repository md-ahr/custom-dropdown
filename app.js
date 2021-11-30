const input = document.getElementById('js--text-input');
const dropdownItem = document.querySelectorAll('.js--show-item');
const dropdown = document.getElementById('js--dropdown');
const showSelectedItem = document.getElementById('js--selected-item');

function changeItem() {
    input.value = this.innerText;
    showSelectedItem.innerHTML = `You selected: <strong>${input.value}</strong>`;
}

dropdownItem.forEach(function(item) {
    item.addEventListener('click', changeItem);
});

dropdown.addEventListener('click', () => dropdown.classList.toggle('active'));
