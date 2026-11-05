const artifacts = window.ECOLOGY_ARTIFACTS ?? [];
const intro = window.ECOLOGY_INTRO ?? { lead: "", anchors: [] };
const quizResults = window.ECOLOGY_QUIZ_RESULTS ?? {};

document.documentElement.classList.add("js");

const introQuote = document.querySelector("#intro-quote");
const anchorContainer = document.querySelector("#data-anchors");
const artifactList = document.querySelector("#artifact-list");
const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector("#lightbox-image");
const lightboxCaption = document.querySelector("#lightbox-caption");
const closeLightbox = document.querySelector("#close-lightbox");
const lightboxPrev = document.querySelector("#lightbox-prev");
const lightboxNext = document.querySelector("#lightbox-next");
const lightboxCounter = document.querySelector("#lightbox-counter");
const quizRoot = document.querySelector("#quiz-root");

const reliabilityLabels = {
  evidence: { mark: "● 实证", text: "基于考古实物或明确研究材料" },
  inference: { mark: "◐ 推断", text: "部分结论基于学术类比与推断" },
  interpretation: { mark: "○ 阐释", text: "策展视角下的当代阐释" },
};

function element(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function renderIntro() {
  introQuote.textContent = intro.lead;
  anchorContainer.replaceChildren(
    ...intro.anchors.map((anchor) => {
      const button = element("button", "anchor-card");
      button.type = "button";
      button.setAttribute("aria-label", `${anchor.label}，跳转到对应文物`);
      button.dataset.countTo = String(Number.parseInt(anchor.value, 10) || 0);
      const value = element("span", "anchor-value", "0");
      const unit = element("span", "anchor-unit", anchor.unit);
      value.append(unit);
      const label = element("span", "anchor-label", anchor.label);
      button.append(value, label);
      button.addEventListener("click", () => {
        document
          .querySelector(`#${anchor.target}`)
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
      return button;
    }),
  );
}

function createReliability(artifact) {
  const reliable = reliabilityLabels[artifact.reliability] ?? reliabilityLabels.interpretation;
  const wrap = element("span", "reliability-wrap");
  const button = element("button", "reliability");
  button.type = "button";
  button.setAttribute("aria-expanded", "false");
  const mark = element("strong", "", reliable.mark);
  button.append(mark, document.createTextNode(` ${artifact.reliabilityNote}`));
  button.title = reliable.text;
  const popover = element("span", "reliability-popover", reliable.text);
  popover.hidden = true;
  button.addEventListener("click", () => {
    popover.hidden = !popover.hidden;
    button.setAttribute("aria-expanded", String(!popover.hidden));
  });
  wrap.append(button, popover);
  return wrap;
}

function createArtifactCard(artifact, index) {
  const card = element("article", "artifact-card reveal");
  card.id = artifact.id;

  const imageButton = element("button", "artifact-image-button");
  imageButton.type = "button";
  imageButton.setAttribute("aria-label", `放大查看${artifact.name}图片`);
  const image = document.createElement("img");
  image.src = artifact.image;
  image.alt = artifact.imageAlt;
  image.loading = "lazy";
  const keyword = element("span", "image-keyword", artifact.keyword);
  const imageLabel = element("span", "image-label");
  imageLabel.append(
    element("strong", "", artifact.name),
    element("span", "", `${artifact.era} · ${artifact.imageNote}`),
  );
  imageButton.append(image, keyword, imageLabel);
  imageButton.addEventListener("click", () => openLightbox(index));

  const body = element("div", "artifact-body");
  const order = element(
    "p",
    "artifact-order",
    `器物 ${String(index + 1).padStart(2, "0")} / 06`,
  );
  const title = element("h3", "artifact-title", artifact.name);
  const tagline = element("p", "artifact-tagline", `${artifact.era} · ${artifact.keyword}`);

  const tabs = element("div", "artifact-tabs");
  const tabList = element("div", "tab-list");
  tabList.setAttribute("role", "tablist");
  tabList.setAttribute("aria-label", `${artifact.name}的阅读方式`);
  const panelsWrap = element("div", "tab-panels");

  const tabData = [
    { key: "object", label: "器物" },
    { key: "ecology", label: "生态视角" },
    { key: "resonance", label: "当代回响" },
  ];

  const panelObject = element("div", "tab-panel");
  panelObject.append(
    element("p", "layer-label", "器物身份"),
    element("p", "panel-copy", artifact.identity),
    element("p", "layer-label layer-label-gap", "常规解读"),
    element("p", "panel-copy", artifact.conventional),
  );
  const panelEcology = element("div", "tab-panel");
  panelEcology.append(
    element("p", "layer-label", "生态视角"),
    element("p", "panel-copy", artifact.ecology),
  );
  const panelResonance = element("div", "tab-panel");
  panelResonance.append(
    element("p", "layer-label", "当代回响"),
    element("p", "panel-copy panel-copy-serif", artifact.resonance),
  );
  const panels = {
    object: panelObject,
    ecology: panelEcology,
    resonance: panelResonance,
  };

  let activeKey = "ecology";

  function setActiveTab(key) {
    activeKey = key;
    tabList.querySelectorAll(".tab-button").forEach((button, i) => {
      const isActive = tabData[i].key === key;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-selected", String(isActive));
      button.tabIndex = isActive ? 0 : -1;
    });
    tabData.forEach((item) => {
      panels[item.key].hidden = item.key !== key;
    });
  }

  tabData.forEach((item, i) => {
    const button = element("button", "tab-button", item.label);
    button.type = "button";
    button.setAttribute("role", "tab");
    button.id = `${artifact.id}-tab-${item.key}`;
    button.setAttribute("aria-controls", `${artifact.id}-panel-${item.key}`);
    button.addEventListener("click", () => setActiveTab(item.key));
    button.addEventListener("keydown", (event) => {
      if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
      event.preventDefault();
      const direction = event.key === "ArrowRight" ? 1 : -1;
      const nextIndex = (i + direction + tabData.length) % tabData.length;
      const nextButton = tabList.children[nextIndex];
      setActiveTab(tabData[nextIndex].key);
      nextButton.focus();
    });
    tabList.append(button);

    const panel = panels[item.key];
    panel.id = `${artifact.id}-panel-${item.key}`;
    panel.setAttribute("role", "tabpanel");
    panel.setAttribute("aria-labelledby", button.id);
    panel.hidden = item.key !== activeKey;
    panelsWrap.append(panel);
  });

  setActiveTab(activeKey);
  tabs.append(tabList, panelsWrap);

  const metaRow = element("div", "artifact-meta-row");
  metaRow.append(
    element(
      "span",
      "artifact-location",
      `馆内：${artifact.locationMuseum}　遗址：${artifact.locationSite}`,
    ),
    createReliability(artifact),
  );

  const actions = element("div", "artifact-actions");
  const mapLink = element("a", "button button-primary", "在地图上找它");
  mapLink.href = `map.html?highlight=${artifact.mapPointId}`;
  actions.append(mapLink);

  body.append(order, title, tagline, tabs, metaRow, actions);
  card.append(imageButton, body);
  return card;
}

function renderArtifacts() {
  artifactList.replaceChildren(
    ...artifacts.map((artifact, index) => createArtifactCard(artifact, index)),
  );
}

function closeLightboxDialog() {
  lightbox.close();
}

let lightboxIndex = 0;

function openLightbox(index) {
  lightboxIndex = index;
  renderLightbox();
  lightbox.showModal();
}

function renderLightbox() {
  const artifact = artifacts[lightboxIndex];
  if (!artifact) return;
  lightboxImage.src = artifact.image;
  lightboxImage.alt = artifact.imageAlt;
  lightboxCaption.textContent = `${artifact.name} · ${artifact.imageNote}`;
  lightboxCounter.textContent = `${lightboxIndex + 1} / ${artifacts.length}`;
  lightboxPrev.disabled = lightboxIndex === 0;
  lightboxNext.disabled = lightboxIndex === artifacts.length - 1;
}

closeLightbox.addEventListener("click", closeLightboxDialog);
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) closeLightboxDialog();
});
lightboxPrev.addEventListener("click", () => {
  lightboxIndex = Math.max(0, lightboxIndex - 1);
  renderLightbox();
});
lightboxNext.addEventListener("click", () => {
  lightboxIndex = Math.min(artifacts.length - 1, lightboxIndex + 1);
  renderLightbox();
});
document.addEventListener("keydown", (event) => {
  if (!lightbox.open) return;
  if (event.key === "ArrowLeft") {
    event.preventDefault();
    lightboxIndex = Math.max(0, lightboxIndex - 1);
    renderLightbox();
  }
  if (event.key === "ArrowRight") {
    event.preventDefault();
    lightboxIndex = Math.min(artifacts.length - 1, lightboxIndex + 1);
    renderLightbox();
  }
});

const quizQuestions = [
  {
    title: "你每天淋浴或泡澡大约用多少水？",
    options: ["5—10分钟快冲", "10—20分钟淋浴", "更喜欢泡澡", "不太确定"],
  },
  {
    title: "你最近买的一件东西，产自哪里？",
    options: ["本地或附近地区", "国内其他省份", "海外", "没有留意产地"],
  },
  {
    title: "你今天的通勤或出行方式是什么？",
    options: ["步行或骑行", "公共交通", "自驾或网约车", "线上办公或很少出行"],
  },
];

let quizStep = 0;
let quizAnswers = [];

function resultForAnswers() {
  const [water, purchase, commute] = quizAnswers;
  if (purchase === 0) return quizResults.li;
  if (purchase === 1 || purchase === 2) return quizResults.turquoise;
  if (water === 2) return quizResults.drain;
  if (commute === 2) return quizResults.ding;
  return quizResults.drain;
}

function renderQuizIntro() {
  const wrap = element("div", "quiz-intro");
  wrap.append(
    element("h3", "", "从今天的日常，回望三千年前的选择"),
    element(
      "p",
      "",
      "这部分不计算碳足迹，也不对你作出评价。它只提供一个新的观察角度。",
    ),
  );
  const start = element("button", "button button-primary", "开始三道题");
  start.type = "button";
  start.addEventListener("click", () => {
    quizStep = 0;
    quizAnswers = [];
    renderQuizQuestion();
  });
  wrap.append(start);
  quizRoot.replaceChildren(wrap);
}

function renderQuizQuestion() {
  const question = quizQuestions[quizStep];
  const wrap = element("div", "quiz-question");
  wrap.append(
    element("p", "quiz-progress", `问题 ${quizStep + 1} / ${quizQuestions.length}`),
    element("h3", "", question.title),
  );
  const options = element("div", "quiz-options");
  question.options.forEach((label, optionIndex) => {
    const button = element("button", "quiz-option", label);
    button.type = "button";
    button.addEventListener("click", () => {
      quizAnswers[quizStep] = optionIndex;
      if (quizStep < quizQuestions.length - 1) {
        quizStep += 1;
        renderQuizQuestion();
      } else {
        renderQuizResult();
      }
    });
    options.append(button);
  });
  wrap.append(options);
  quizRoot.replaceChildren(wrap);
}

function renderQuizResult() {
  const result = resultForAnswers();
  const artifact = artifacts.find((item) => item.id === result.artifactId);
  const wrap = element("div", "quiz-result");
  const image = document.createElement("img");
  image.src = artifact.image;
  image.alt = artifact.imageAlt;
  const copy = element("div");
  copy.append(
    element("p", "quiz-progress", "对照结果"),
    element("h3", "", result.title),
    element("p", "", result.text),
    element("p", "", `——关联文物：${artifact.name}`),
  );
  const reading = element("p", "artifact-resonance", result.prompt);
  const links = element("div", "artifact-actions");
  const openArtifact = element("a", "button button-secondary", "查看关联文物");
  openArtifact.href = `#${artifact.id}`;
  const reset = element("button", "button button-primary quiz-reset", "重新选择");
  reset.type = "button";
  reset.addEventListener("click", renderQuizIntro);
  links.append(openArtifact, reset);
  copy.append(reading, links);
  wrap.append(image, copy);
  quizRoot.replaceChildren(wrap);
}

function initCountUp() {
  const cards = document.querySelectorAll(".anchor-card");
  if (!cards.length) return;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function setValue(node, number) {
    const unit = node.querySelector(".anchor-unit");
    node.textContent = String(number);
    if (unit) node.append(unit);
  }

  function animate(card) {
    const target = Number(card.dataset.countTo) || 0;
    const valueNode = card.querySelector(".anchor-value");
    if (reduced) {
      setValue(valueNode, target);
      return;
    }
    const duration = 900;
    const start = performance.now();
    function tick(now) {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(valueNode, Math.round(target * eased));
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animate(entry.target);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });
  cards.forEach((card) => observer.observe(card));
}

function initReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!items.length) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
  items.forEach((item) => observer.observe(item));
}

function initScrollSpy() {
  const sectionMap = { intro: "#intro", artifacts: "#artifacts", quiz: "#quiz" };
  const links = [...document.querySelectorAll(".main-nav a")].filter((anchor) =>
    anchor.getAttribute("href").startsWith("#"),
  );
  const sections = Object.keys(sectionMap)
    .map((id) => document.getElementById(id))
    .filter(Boolean);
  if (!sections.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((anchor) => {
          const active = anchor.getAttribute("href") === sectionMap[entry.target.id];
          anchor.classList.toggle("is-current", active);
        });
      });
    },
    { rootMargin: "-45% 0px -50% 0px" },
  );
  sections.forEach((section) => observer.observe(section));
}

function initReadingProgress() {
  const bar = document.querySelector("#reading-progress");
  if (!bar) return;
  let ticking = false;
  function update() {
    const documentElement = document.documentElement;
    const max = documentElement.scrollHeight - documentElement.clientHeight;
    const progress = max > 0 ? window.scrollY / max : 0;
    bar.style.transform = `scaleX(${progress})`;
    ticking = false;
  }
  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    },
    { passive: true },
  );
  update();
}

renderIntro();
renderArtifacts();
renderQuizIntro();
initCountUp();
initReveal();
initScrollSpy();
initReadingProgress();
