import grapesjs from "grapesjs";
import grapesJSMJML from "grapesjs-mjml";
import mjml2html from "mjml-browser";
import "grapesjs/dist/css/grapes.min.css";
import "./styles.css";
import { BLOCKS, DEFAULT_MJML } from "./defaultEmail.js";

const KEYS = {
  approvedMjml: "nicecnc.edm.approved.mjml",
  approvedProject: "nicecnc.edm.approved.project",
  draftProject: "nicecnc.edm.draft.project"
};

const approvedMjml = localStorage.getItem(KEYS.approvedMjml) || DEFAULT_MJML;
let lastPreview = null;
let changeTimer;
let booting = true;

const editor = grapesjs.init({
  container: "#gjs",
  height: "100%",
  width: "auto",
  fromElement: false,
  storageManager: false,
  plugins: [grapesJSMJML],
  pluginsOpts: {
    [grapesJSMJML]: {
      resetBlocks: true,
      resetDevices: false,
      columnsPadding: "10px"
    }
  },
  canvas: {
    styles: ["https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap"]
  },
  deviceManager: {
    devices: [
      { id: "desktop", name: "Desktop", width: "" },
      { id: "mobile", name: "Mobile", width: "375px", widthMedia: "480px" }
    ]
  }
});

BLOCKS.forEach((block) => editor.BlockManager.add(block.id, block));

function currentMjml() {
  return editor.getHtml();
}

function compile(mjml) {
  const result = mjml2html(mjml, { validationLevel: "soft", minify: false });
  if (result.errors?.length) {
    console.warn("MJML validation warnings", result.errors);
  }
  return result.html;
}

function parseStored(key) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  } catch {
    return null;
  }
}

function saveDraft() {
  if (booting) return;
  localStorage.setItem(KEYS.draftProject, JSON.stringify(editor.getProjectData()));
  invalidatePreview();
  setStatus("草稿已保存", "dirty");
}

function invalidatePreview() {
  lastPreview = null;
  document.querySelector("#approve-btn").disabled = true;
}

function setStatus(text, type = "saved") {
  document.querySelector("#state-text").textContent = text;
  document.querySelector("#state-dot").className = type;
}

function toast(message) {
  const el = document.querySelector("#toast");
  el.textContent = message;
  el.classList.add("show");
  setTimeout(() => el.classList.remove("show"), 2200);
}

function download(content, filename, type) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const a = Object.assign(document.createElement("a"), { href: url, download: filename });
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function showPreview() {
  try {
    const mjml = currentMjml();
    const html = compile(mjml);
    lastPreview = { mjml, html, project: editor.getProjectData() };
    document.querySelector("#preview-frame").srcdoc = html;
    document.querySelector("#approve-btn").disabled = false;
    document.querySelector("#preview-dialog").showModal();
    setStatus("HTML 预览已生成", "previewed");
  } catch (error) {
    toast(`无法生成预览：${error.message}`);
  }
}

function approve() {
  if (!lastPreview) return;
  const ok = window.confirm("将此预览设为唯一的当前正式邮件？");
  if (!ok) return;
  localStorage.setItem(KEYS.approvedMjml, lastPreview.mjml);
  localStorage.setItem(KEYS.approvedProject, JSON.stringify(lastPreview.project));
  localStorage.setItem(KEYS.draftProject, JSON.stringify(lastPreview.project));
  setStatus("正式 MJML 已更新", "approved");
  toast("已更新当前正式邮件");
}

function restoreApproved() {
  if (!window.confirm("放弃未确认的修改，恢复当前正式版？")) return;
  const project = parseStored(KEYS.approvedProject);
  booting = true;
  project ? editor.loadProjectData(project) : editor.setComponents(localStorage.getItem(KEYS.approvedMjml) || DEFAULT_MJML);
  localStorage.removeItem(KEYS.draftProject);
  setTimeout(() => {
    booting = false;
    invalidatePreview();
    setStatus("已恢复当前正式版");
  }, 0);
}

editor.on("load", () => {
  const draft = parseStored(KEYS.draftProject);
  const approvedProject = parseStored(KEYS.approvedProject);
  if (draft) editor.loadProjectData(draft);
  else if (approvedProject) editor.loadProjectData(approvedProject);
  else editor.setComponents(approvedMjml);
  setTimeout(() => {
    booting = false;
    setStatus(draft ? "已恢复未确认草稿" : "当前正式版");
  }, 0);
});

editor.on("update", () => {
  clearTimeout(changeTimer);
  changeTimer = setTimeout(saveDraft, 250);
});

document.querySelector("#preview-btn").addEventListener("click", showPreview);
document.querySelector("#approve-btn").addEventListener("click", approve);
document.querySelector("#reset-btn").addEventListener("click", restoreApproved);
document.querySelector("#close-preview-btn").addEventListener("click", () => document.querySelector("#preview-dialog").close());
document.querySelector("#download-preview-btn").addEventListener("click", () => {
  if (lastPreview) download(lastPreview.html, "nicecnc-email-preview.html", "text/html");
});

document.querySelector("#desktop-btn").addEventListener("click", (event) => {
  document.querySelector("#preview-frame").className = "";
  document.querySelectorAll(".dialog-actions button").forEach((b) => b.classList.remove("active"));
  event.currentTarget.classList.add("active");
});
document.querySelector("#mobile-btn").addEventListener("click", (event) => {
  document.querySelector("#preview-frame").className = "mobile";
  document.querySelectorAll(".dialog-actions button").forEach((b) => b.classList.remove("active"));
  event.currentTarget.classList.add("active");
});

document.querySelectorAll("[data-export]").forEach((button) => {
  button.addEventListener("click", () => {
    const kind = button.dataset.export;
    const mjml = localStorage.getItem(KEYS.approvedMjml) || DEFAULT_MJML;
    const project = localStorage.getItem(KEYS.approvedProject) || JSON.stringify(editor.getProjectData(), null, 2);
    if (kind === "html") download(compile(mjml), "nicecnc-current-email.html", "text/html");
    if (kind === "mjml") download(mjml, "nicecnc-current-email.mjml", "text/plain");
    if (kind === "json") download(project, "nicecnc-current-email.project.json", "application/json");
    toast(`已导出正式版 ${kind.toUpperCase()}`);
  });
});
