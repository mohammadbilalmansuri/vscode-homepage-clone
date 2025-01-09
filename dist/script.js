const root = document.documentElement;
const themeBtn = document.getElementById("theme-btn");
const downloadBtn = document.querySelector("#download");
const announcement = document.getElementById("announcement");
const closeAnnouncementBtn = document.getElementById("close-announcement-btn");
const header = document.querySelector("header");
const searchForm = document.getElementById("search-form");
const searchInput = searchForm.querySelector("input");
const popupBtn = document.getElementById("popup-btn");
const popup = document.getElementById("popup");

let darkMode = true;

const osMap = {
  Win: "Windows",
  Mac: "MacOS",
  Linux: "Linux",
  Android: "Android",
  "like Mac": "iOS",
};

const changeTheme = (isDarkMode) => {
  root.classList.toggle("dark", isDarkMode);
  themeBtn.innerHTML = `
    <svg viewBox="0 0 16 16" class="size-5"><path d="${
      isDarkMode
        ? "M8.0162 1C8.25723 1 8.45269 1.19588 8.45269 1.4375V2.3125C8.45269 2.55412 8.25723 2.75 8.0162 2.75C7.77514 2.75 7.57971 2.55412 7.57971 2.3125V1.4375C7.57971 1.19588 7.77514 1 8.0162 1ZM8.0162 11.5C9.94469 11.5 11.5081 9.93296 11.5081 8C11.5081 6.067 9.94469 4.5 8.0162 4.5C6.08767 4.5 4.5243 6.067 4.5243 8C4.5243 9.93296 6.08767 11.5 8.0162 11.5ZM8.0162 10.625C6.56981 10.625 5.39727 9.44979 5.39727 8C5.39727 6.55026 6.56981 5.375 8.0162 5.375C9.46263 5.375 10.6351 6.55026 10.6351 8C10.6351 9.44979 9.46263 10.625 8.0162 10.625ZM14.5635 8.4375C14.8045 8.4375 15 8.24159 15 8C15 7.75838 14.8045 7.5625 14.5635 7.5625H13.6905C13.4495 7.5625 13.2541 7.75838 13.2541 8C13.2541 8.24159 13.4495 8.4375 13.6905 8.4375H14.5635ZM8.0162 13.25C8.25723 13.25 8.45269 13.4459 8.45269 13.6875V14.5625C8.45269 14.8041 8.25723 15 8.0162 15C7.77514 15 7.57971 14.8041 7.57971 14.5625V13.6875C7.57971 13.4459 7.77514 13.25 8.0162 13.25ZM2.34186 8.4375C2.58292 8.4375 2.77835 8.24159 2.77835 8C2.77835 7.75838 2.58292 7.5625 2.34186 7.5625H1.43649C1.19542 7.5625 1 7.75838 1 8C1 8.24159 1.19542 8.4375 1.43649 8.4375H2.34186ZM2.90619 2.87814C3.07665 2.70728 3.35302 2.70728 3.52347 2.87814L4.39645 3.75314C4.56692 3.924 4.56692 4.201 4.39645 4.37186C4.22599 4.54272 3.94963 4.54272 3.77917 4.37186L2.90619 3.49686C2.73573 3.326 2.73573 3.049 2.90619 2.87814ZM3.52347 13.1219C3.35302 13.2927 3.07665 13.2927 2.90619 13.1219C2.73573 12.951 2.73573 12.674 2.90619 12.5031L3.77917 11.6281C3.94963 11.4573 4.22599 11.4573 4.39645 11.6281C4.56692 11.799 4.56692 12.076 4.39645 12.2469L3.52347 13.1219ZM13.1262 2.87814C12.9558 2.70728 12.6794 2.70728 12.5089 2.87814L11.6359 3.75314C11.4655 3.924 11.4655 4.201 11.6359 4.37186C11.8064 4.54272 12.0828 4.54272 12.2533 4.37186L13.1262 3.49686C13.2967 3.326 13.2967 3.049 13.1262 2.87814ZM12.5089 13.1219C12.6794 13.2927 12.9558 13.2927 13.1262 13.1219C13.2967 12.951 13.2967 12.674 13.1262 12.5031L12.2533 11.6281C12.0828 11.4573 11.8064 11.4573 11.6359 11.6281C11.4655 11.799 11.4655 12.076 11.6359 12.2469L12.5089 13.1219Z"
        : "M7.61731 3.0153C10.0919 3.21621 12.0398 5.37119 12.0398 8C12.0398 10.7614 9.89041 13 7.23897 13C5.55415 13 4.0713 12.0961 3.21428 10.7271C4.56165 10.3479 6.39833 9.42526 7.20834 7.17555C7.73903 5.70162 7.76926 4.23763 7.61731 3.0153ZM13 8C13 4.68629 10.4207 2 7.23897 2C7.17126 2 7.10381 2.00122 7.03662 2.00364C6.89672 2.00867 6.76589 2.07706 6.67841 2.19089C6.59093 2.30471 6.55551 2.45263 6.58142 2.59591C6.80109 3.81021 6.84948 5.32413 6.3093 6.82444C5.54115 8.95787 3.61893 9.66359 2.39426 9.89533C2.24674 9.92325 2.12022 10.0213 2.05222 10.1605C1.98422 10.2997 1.98255 10.4639 2.04771 10.6046C2.97816 12.6128 4.95255 14 7.23897 14C10.4207 14 13 11.3137 13 8Z"
    }"/></svg>
  `;
  darkMode = isDarkMode;
  localStorage.setItem("darkMode", String(isDarkMode));
};

const setDownloadButtonText = () => {
  const os = Object.keys(osMap).find((key) =>
    navigator.userAgent.includes(key)
  );
  downloadBtn.innerText = osMap[os] ? `Download for ${osMap[os]}` : "Download";
};

const handleSearchSubmit = (e) => {
  e.preventDefault();
  const query = searchInput.value;
  const searchUrl = `https://code.visualstudio.com/Search?q=${encodeURIComponent(
    query
  )}`;
  window.open(searchUrl, "_blank");
  searchInput.value = "";
};

const initTheme = () => {
  const storedDarkMode = localStorage.getItem("darkMode");

  changeTheme(
    storedDarkMode
      ? storedDarkMode === "true"
      : window.matchMedia("(prefers-color-scheme: dark)").matches
  );
};

const handleScroll = () => {
  if (window.scrollY > 0) {
    header.classList.add("border-b-black/10", "dark:border-b-white/10");
    header.classList.remove("border-b-transparent");
  } else {
    header.classList.add("border-b-transparent");
    header.classList.remove("border-b-black/10", "dark:border-b-white/10");
  }
};

const togglePopup = () => {
  popup.classList.toggle("hidden");
  popup.classList.toggle("flex");

  if (popup.classList.contains("hidden")) {
    popupBtn.innerHTML = `<svg viewBox="0 0 448 512" class="size-5"><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>`;
  } else {
    popupBtn.innerHTML = `<svg viewBox="0 0 24 24" class="size-6"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></svg>`;
  }
};

const initEventListeners = () => {
  themeBtn.addEventListener("click", () => {
    changeTheme(!darkMode);
  });
  closeAnnouncementBtn.addEventListener("click", () => {
    announcement.style.visibility = "hidden";
  });
  document.addEventListener("scroll", handleScroll);
  searchForm.addEventListener("submit", handleSearchSubmit);
  popupBtn.addEventListener("click", togglePopup);
};

window.addEventListener("DOMContentLoaded", () => {
  initTheme();
  setDownloadButtonText();
  initEventListeners();
});
