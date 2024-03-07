const uploadView = document.querySelector(".upload-container");
const progressView = document.querySelector(".uploader-progress-ui");
const progressBar = document.querySelector("#progressBar");
const postUploadView = document.querySelector(".postupload-ui");
const anims = document.querySelectorAll(".will-fade-in");
const statusText = document.querySelector(".complete-text");

const dropzone = document.querySelector(".dropzone");
const fileInput = document.getElementById("fileInput");
const browseBtn = document.getElementById("fileSelectBtn");

const sharingContainer = document.querySelector(".sharing-container");
const goBackBtn = document.getElementById("goBackBtn");
const toast = document.querySelector(".toast");

const maxAllowedFileSize = 100 * 1024 * 1024;
const maxAllowedFileSizeInWords = "100MB";

window.addEventListener("DOMContentLoaded", (event) => {
  anims.forEach((el) => el.classList.remove("fade-in"));
});

dropzone.addEventListener("dragover", (e) => {
  e.preventDefault();
  if (!dropzone.classList.contains("dragged")) {
    dropzone.classList.add("dragged");
  }
});
dropzone.addEventListener("dragleave", (e) => {
  dropzone.classList.remove("dragged");
});

dropzone.addEventListener("drop", (e) => {
  e.preventDefault();
  dropzone.classList.remove("dragged");
  const files = e.dataTransfer.files;
  if (files.length === 1) {
    if (files[0].size < maxAllowedFileSize) {
      fileInput.files = files;
      uploadFile();
    } else {
      showToast(`Max file size is ${maxAllowedFileSizeInWords}}`);
    }
  } else if (files.length > 1) {
    showToast("Multiple file upload not supported");
  }
});

browseBtn.addEventListener("click", (e) => {
  fileInput.click();
});

fileInput.addEventListener("change", () => {
  if (fileInput.files[0].size > maxAllowedFileSize) {
    showToast(`Max file size is ${maxAllowedFileSizeInWords}`);
    fileInput.value = "";
    return;
  }
  uploadFile();
});

const uploadFile = () => {
  // TODO
  console.log("On file upload");
};

const onFileUploadSuccess = (res) => {
  // TODO
  console.log("On file upload success");
};

let toastTimer;
const showToast = (msg) => {
  clearTimeout(toastTimer);
  toast.innerText = msg;
  toast.classList.add("show");
  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
};

goBackBtn.addEventListener("click", (e) => {
  window.location.href = "/";
});
