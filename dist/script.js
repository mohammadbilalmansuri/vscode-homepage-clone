const root = document.documentElement;
const darkModeBtn = document.querySelector("#dark-mode-btn");
const lightModeBtn = document.querySelector("#light-mode-btn");
const downloadBtn = document.querySelector("#download");
const announcement = document.querySelector("#announcement");
const closeAnnouncementBtn = document.querySelector("#close-announcement-btn");
const header = document.querySelector("header");
const searchForm = document.querySelector("#search-form");
const searchInput = searchForm.querySelector("input");
const popupOpenBtn = document.querySelector("#popup-open");
const popupCloseBtn = document.querySelector("#popup-close");
const popup = document.querySelector("#popup");

let darkMode = true;

const osMap = {
  Win: "Windows",
  Mac: "MacOS",
  Linux: "Linux",
  Android: "Android",
  "like Mac": "iOS",
};

const toggleTheme = () => {
  darkMode = !darkMode;
  root.classList.toggle("dark", darkMode);
  darkModeBtn.classList.toggle("hidden", !darkMode);
  lightModeBtn.classList.toggle("hidden", darkMode);
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

  darkMode = storedDarkMode
    ? storedDarkMode === "true"
    : window.matchMedia("(prefers-color-scheme: dark)").matches;

  root.classList.toggle("dark", darkMode);
  darkMode
    ? darkModeBtn.classList.remove("hidden")
    : lightModeBtn.classList.remove("hidden");
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

const initEventListeners = () => {
  darkModeBtn.addEventListener("click", toggleTheme);
  lightModeBtn.addEventListener("click", toggleTheme);
  closeAnnouncementBtn.addEventListener("click", () => {
    announcement.style.visibility = "hidden";
  });
  document.addEventListener("scroll", handleScroll);
  searchForm.addEventListener("submit", handleSearchSubmit);
};

window.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("load", initTheme);
  window.addEventListener("beforeunload", () => {
    localStorage.setItem("darkMode", darkMode.toString());
  });

  setDownloadButtonText();
  initEventListeners();
});

popupOpenBtn.addEventListener("click", () => {
  popupOpenBtn.classList.toggle("hidden");
  popupCloseBtn.classList.toggle("hidden");
});

popupCloseBtn.addEventListener("click", () => {
  popupCloseBtn.classList.toggle("hidden");
  popupOpenBtn.classList.toggle("hidden");
});
