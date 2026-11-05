const artifacts = window.ECOLOGY_ARTIFACTS ?? [];
const mapPoints = window.ECOLOGY_MAP_POINTS ?? [];

const layerToggle = document.querySelector("#eco-layer-toggle");
const layerState = document.querySelector("#layer-state");
const pointsLayer = document.querySelector("#map-points");
const emptyPanel = document.querySelector("#map-detail-empty");
const detailCard = document.querySelector("#map-detail-card");
const detailImage = document.querySelector("#map-detail-image");
const detailZone = document.querySelector("#map-detail-zone");
const detailTitle = document.querySelector("#map-detail-title");
const detailKeyword = document.querySelector("#map-detail-keyword");
const detailSummary = document.querySelector("#map-detail-summary");
const detailRead = document.querySelector("#map-read");

let layerVisible = false;
let activePointId = null;

function createPoint(point) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "leaf-point";
  button.dataset.point = point.id;
  button.style.setProperty("--x", `${point.x}%`);
  button.style.setProperty("--y", `${point.y}%`);
  button.setAttribute("aria-label", `查看${point.name}`);
  button.setAttribute("aria-pressed", "false");
  button.append(Object.assign(document.createElement("span"), { textContent: "叶" }));
  button.addEventListener("click", () => selectPoint(point));
  return button;
}

function renderPoints() {
  pointsLayer.replaceChildren(...mapPoints.map(createPoint));
}

function showLayer(visible) {
  layerVisible = visible;
  pointsLayer.classList.toggle("is-visible", visible);
  pointsLayer.setAttribute("aria-hidden", String(!visible));
  layerToggle.setAttribute("aria-pressed", String(visible));
  layerState.textContent = visible ? "已开启" : "已关闭";
  pointsLayer.querySelectorAll(".leaf-point").forEach((button) => {
    button.tabIndex = visible ? 0 : -1;
  });
}

function selectPoint(point) {
  showLayer(true);
  activePointId = point.id;
  pointsLayer.querySelectorAll(".leaf-point").forEach((button) => {
    const active = button.dataset.point === point.id;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  const artifact = artifacts.find((item) => item.id === point.artifactId);
  if (!artifact) return;

  emptyPanel.hidden = true;
  detailCard.hidden = false;
  detailImage.src = artifact.image;
  detailImage.alt = artifact.imageAlt;
  detailZone.textContent = point.zone === "museum" ? "博物院 · 馆内点位" : "遗址区 · 户外点位";
  detailTitle.textContent = point.name;
  detailKeyword.textContent = point.keyword;
  detailSummary.textContent = artifact.identity;
  detailRead.href = `ecology.html#${artifact.id}`;
}

layerToggle.addEventListener("click", () => showLayer(!layerVisible));

const highlightId = new URLSearchParams(window.location.search).get("highlight");
renderPoints();
showLayer(false);

if (highlightId) {
  const point =
    mapPoints.find((item) => item.id === highlightId) ??
    mapPoints.find((item) => item.artifactId === highlightId);
  if (point) selectPoint(point);
}
