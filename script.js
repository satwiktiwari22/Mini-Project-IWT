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

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    let target = document.querySelector(this.getAttribute("href"));
    let headerOffset = 70; // height of your header or any offset
    let elementPosition = target.offsetTop;
    let offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  });
});

let form = document.getElementById("contact-form");
let statusmsg = document.getElementsByClassName("status-message")[0];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  statusmsg.style.display = "block";
  let formData = new FormData(form);
  let xhr = new XMLHttpRequest();
  xhr.open("POST", "message.php", true);
  xhr.onload = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
      let response = xhr.response;
      if (response.status == "success") {
        statusmsg.innerHTML = response;
        statusmsg.style.color = "green";
        form.reset();
      } else {
        statusmsg.innerHTML = response;
        statusmsg.style.color = "red";
      }
      setTimeout(() => {
        statusmsg.style.display = "none";
      }, 4000);
    }
  };
  xhr.send(formData);
});
