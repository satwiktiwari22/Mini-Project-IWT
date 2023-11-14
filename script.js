const openTab = (e, tabName) => {
  let i, tabContent, tabLinks;
  tabContent = document.getElementsByClassName("tab-contents");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }
  tabLinks = document.getElementsByClassName("tab-links");
  for (i = 0; i < tabLinks.length; i++) {
    tabLinks[i].className = tabLinks[i].className.replace(" active-link", "");
  }
  document.getElementById(tabName).style.display = "block";
  e.currentTarget.className += " active-link";
};
