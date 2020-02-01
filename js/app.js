function OpenTab(tabId) {
  let tabContent = document.getElementsByClassName("tab-content");

  for (let i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }
  document.getElementById(tabId).style.display = "block";
}
openTab();
