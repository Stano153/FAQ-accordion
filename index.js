function toggleButtonIcon(e) {
    e.classList.toggle('collapsed');
    let icon = e.querySelector('img');
    if (e.classList.contains('collapsed')) {
      icon.src = "./assets/images/icon-minus.svg";
      icon.alt = "icon minus";
    } else {
      icon.src = "./assets/images/icon-plus.svg";
      icon.alt = "icon plus";
    }
}