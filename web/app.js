const halls = [
  {
    id: "origins",
    number: "01",
    name: "浪淘千古",
    subtitle: "发现 · 考古 · 城市根脉",
    lead: "从发现与考古认识出发，读懂盘龙城为何被称为“武汉城市之根”。",
    items: [
      {
        id: "bronze-yue",
        title: "铜钺",
        type: "青铜器",
        image: "assets/artifact_bronze_yue.jpg",
        alt: "盘龙城出土铜钺",
        meta: "李家嘴2号墓 · 商代前期 · 通高41.4厘米",
        summary:
          "铜钺器体呈梯形，弧刃外张，肩部与两侧开孔，器身装饰夔纹。大型钺既是兵器，也常与军事和礼仪权力相联系。",
        facts: [
          ["尺寸", "刃宽26.7厘米，通高41.4厘米。"],
          ["出土", "盘龙城遗址李家嘴2号墓。"],
          ["观察点", "梯形轮廓、弧形刃、穿孔与夔纹装饰。"],
        ],
        reading:
          "钺从工具、兵器发展为权力象征。它的尺寸、出土墓葬与工艺共同提示墓主人较高的社会地位。",
        source:
          "https://www.plcsmuseum.com.cn/Collection/Detail/1249cfbc-2b65-44da-9469-9b7adf1d3dc0",
      },
      {
        id: "bronze-mask",
        title: "铜面具",
        type: "青铜器",
        image: "assets/artifact_bronze_mask.jpg",
        alt: "盘龙城出土铜面具",
        meta: "盘龙城遗址采集 · 商代前期 · 宽19.2厘米",
        summary:
          "面具弧形凸起，圆眼、竖眉、双角上卷，额鼻相连，咧口造型鲜明。考古推测它可能与祭祀活动有关。",
        facts: [
          ["宽度", "19.2厘米。"],
          ["来源", "盘龙城遗址采集。"],
          ["观察点", "凸出眼珠、卷角、额鼻与咧口的组合。"],
        ],
        reading:
          "强烈的面部造型让抽象祭祀活动获得可视形象，也展示了商代青铜艺术对神态和空间的把握。",
        source:
          "https://www.plcsmuseum.com.cn/Collection/Detail/b29879bf-7a06-4c64-bff1-e29dd073bcdd",
      },
      {
        id: "pottery-fish",
        title: "陶鱼",
        type: "陶器",
        image: "assets/artifact_pottery_fish.jpg",
        alt: "盘龙城宫殿区出土陶鱼",
        meta: "宫殿区出土 · 商代前期 · 长14厘米",
        summary:
          "陶鱼长14厘米、宽4.7厘米，以朴素的陶塑捕捉动物轮廓，为理解商代先民的造型表达提供了生动材料。",
        facts: [
          ["尺寸", "长14厘米，宽4.7厘米，厚0.8厘米。"],
          ["出土", "盘龙城遗址宫殿区。"],
          ["材质", "陶质。"],
        ],
        reading:
          "日常生活不只是宏大建筑和礼器。小型动物塑像让城市的日常审美与自然观察进入展柜。",
        source:
          "https://www.plcsmuseum.com.cn/Collection/Detail/26ff268c-ba2c-4a57-ad0b-57239e22db69",
      },
      {
        id: "pottery-eagle",
        title: "陶鹰头",
        type: "陶器",
        image: "assets/artifact_pottery_eagle.jpg",
        alt: "盘龙城出土陶鹰头",
        meta: "盘龙城遗址采集 · 商代前期 · 通高4.6厘米",
        summary:
          "器物为泥质灰陶，鹰鼻下勾，闭口，双目呈圆窝状。虽然体量很小，头部特征却十分明确。",
        facts: [
          ["高度", "4.6厘米。"],
          ["材质", "泥质灰陶。"],
          ["观察点", "下勾鹰鼻、闭口与圆窝状双目。"],
        ],
        reading:
          "微小陶塑同样保存着先民的观察力与表达力，也说明动物形象进入了商代人的日常器物。",
        source:
          "https://www.plcsmuseum.com.cn/Collection/Detail/7aaab213-e575-4804-9716-6494eea193bb",
      },
    ],
  },
  {
    id: "life",
    number: "02",
    name: "故邑风物",
    subtitle: "生活 · 生产 · 青铜礼器",
    lead: "本厅集中展示城市生活、青铜工艺与礼器制度，四件经典文物均位于这里。",
    items: [
      {
        id: "big-ding",
        title: "青铜大圆鼎",
        type: "青铜器",
        classic: true,
        image: "assets/artifact_big_ding.jpg",
        alt: "盘龙城杨家湾11号墓出土青铜大圆鼎",
        meta: "杨家湾11号墓 · 商代前期 · 通高85厘米",
        summary:
          "大圆鼎通高85厘米，是目前我国所见年代最早、体量最大的青铜圆鼎，直观呈现盘龙城在长江流域青铜文明中的高度。",
        facts: [
          ["高度", "85厘米。"],
          ["出土", "盘龙城遗址杨家湾11号墓。"],
          ["观察点", "双立耳、圆鼓腹、三足与腹部兽面纹装饰。"],
        ],
        reading:
          "大型圆鼎既体现铸造能力，也关联祭祀与礼制。它的体量让盘龙城的区域中心地位具有可见的尺度。",
        source: "https://www.plcsmuseum.com.cn/News/Detail/PLSummary",
      },
      {
        id: "handled-gu",
        title: "铜带鋬觚形器",
        type: "青铜器",
        classic: true,
        image: "assets/artifact_bronze.jpg",
        alt: "盘龙城出土铜带鋬觚形器",
        meta: "杨家湾17号墓 · 商代前期 · 通高18.5厘米",
        summary:
          "器口近角，腹部装有兽面纹鋬把，又兼具觚、斝等酒器特征；它可能作为铜觚的替代品进入随葬礼器组合。",
        facts: [
          ["口径", "14厘米。"],
          ["容积", "约440毫升。"],
          ["工艺", "器身中空，腹部饰兽面纹，左右对称。"],
        ],
        reading:
          "与同墓出土的铜斝、铜爵共同观察，才能理解这件“唯一器形”在礼器组合中的位置。",
        source:
          "https://www.plcsmuseum.com.cn/Collection/Detail/90344bb9-8eb0-4ddc-b4d7-f12bf67b471b",
      },
      {
        id: "turquoise-gold",
        title: "绿松石镶金饰件",
        type: "金玉器",
        classic: true,
        image: "assets/artifact_turquoise.jpg",
        alt: "盘龙城出土绿松石镶金饰件",
        meta: "杨家湾17号墓 · 商代前期 · 残长约23厘米",
        summary:
          "兽面纹以496片绿松石构成主体，眉、目、牙等关键部位以金箔装饰，可能原本镶嵌在漆木器等有机质器物上。",
        facts: [
          ["构成", "可见金箔片5个、绿松石片496个。"],
          ["检测", "金箔含金量84.4%，含银量13.7%。"],
          ["意义", "中原商文化系统中年代最早、出土单位明确的金玉镶嵌饰品之一。"],
        ],
        reading:
          "材料、工艺与出土单位共同说明，盘龙城既吸收中原礼制，也拥有高水平的本地手工生产。",
        source:
          "https://www.plcsmuseum.com.cn/Collection/Detail/158a7ccf-fe97-434a-bd5d-4197cc7dca79",
      },
      {
        id: "jade-disc",
        title: "有领玉璧",
        type: "玉器",
        classic: true,
        image: "assets/artifact_jade_disc.jpg",
        alt: "盘龙城出土有领玉璧",
        meta: "小嘴3号墓 · 商代前期 · 直径22厘米",
        summary:
          "有领玉璧直径22厘米，孔缘形成明显凸起的圆领，是目前所见年代最早、体量最大的有领玉璧。",
        facts: [
          ["直径", "22厘米。"],
          ["出土", "盘龙城遗址小嘴3号墓。"],
          ["观察点", "凸起圆领、细密同心圆纹与玉材色泽。"],
        ],
        reading:
          "它既是高等级礼玉，也将盘龙城与商王朝的玉器制度联系起来，是理解区域交流的重要实物。",
        source: "https://www.plcsmuseum.com.cn/News/Detail/PLSummary",
      },
      {
        id: "bronze-yan",
        title: "铜甗",
        type: "青铜器",
        image: "assets/artifact_yan.jpg",
        alt: "盘龙城出土铜甗",
        meta: "李家嘴2号墓 · 商代前期 · 通高36厘米",
        summary:
          "甗是兼具蒸煮功能的青铜器。铜甗以器形与组合关系呈现商代饮食器具和青铜铸造技术。",
        facts: [
          ["口径", "22厘米。"],
          ["通高", "36厘米。"],
          ["出土", "盘龙城遗址李家嘴2号墓。"],
        ],
        reading:
          "从炊煮器进入礼器组合，可以观察青铜器如何同时承担生活功能和身份表达。",
        source:
          "https://www.plcsmuseum.com.cn/Collection/Detail/0075323a-3314-4301-8435-e217b8ff1bca",
      },
      {
        id: "bronze-jue",
        title: "铜爵",
        type: "青铜器",
        image: "assets/artifact_jue.jpg",
        alt: "盘龙城出土铜爵",
        meta: "李家嘴1号墓 · 商代前期 · 通高20.1厘米",
        summary:
          "铜爵是商代重要酒器。器形、底部尺寸与墓葬出土背景，共同帮助理解盘龙城的礼器组合。",
        facts: [
          ["底径", "5.9—7.8厘米。"],
          ["通高", "20.1厘米。"],
          ["出土", "盘龙城遗址李家嘴1号墓。"],
        ],
        reading:
          "爵、觚、斝等酒器常成组出土。单件器物的形制，需要放回组合中才能真正读懂。",
        source:
          "https://www.plcsmuseum.com.cn/Collection/Detail/942f4598-eac6-4767-9948-565a7621bb78",
      },
    ],
  },
  {
    id: "south",
    number: "03",
    name: "角立南土",
    subtitle: "礼制 · 交流 · 南土中心",
    lead: "把盘龙城放回商代文明网络，观察礼器、工艺与区域交流怎样汇合。",
    items: [
      {
        id: "bronze-zun",
        title: "兽面纹十字孔青铜尊",
        type: "青铜器",
        image: "assets/artifact_zun.jpg",
        alt: "盘龙城出土兽面纹十字孔青铜尊",
        meta: "王家嘴1号墓 · 商代前期 · 通高30.8厘米",
        summary:
          "青铜尊是商代重要礼器。器物形制、兽面纹和十字形孔共同反映铸造技术与礼制传统。",
        facts: [
          ["口径", "13.6厘米。"],
          ["出土", "盘龙城遗址王家嘴1号墓。"],
          ["观察点", "兽面纹布局、十字形孔与器物比例。"],
        ],
        reading:
          "从一件礼器可以同时阅读技术、审美和制度，也能看到盘龙城与更广阔商文化网络之间的联系。",
        source:
          "https://www.plcsmuseum.com.cn/Collection/Detail/7172f5a0-6f58-4c0e-b7bb-c35f7549d05a",
      },
      {
        id: "jade-ge",
        title: "玉戈",
        type: "玉器",
        image: "assets/artifact_jade_ge.jpg",
        alt: "盘龙城出土玉戈",
        meta: "杨家湾17号墓 · 商代前期 · 残长34厘米",
        summary:
          "玉戈是礼仪性兵器。出土时破碎散落，整理者依据土沁差异拼对修复，并推测完整长度约70厘米。",
        facts: [
          ["尺寸", "残长34厘米，宽12厘米。"],
          ["出土", "碎片见于墓葬腰坑、棺椁之间和棺内。"],
          ["身份线索", "大型玉戈在盘龙城较少见，暗示墓主人较高社会等级。"],
        ],
        reading:
          "打碎后下葬、再经考古拼对，让这件玉戈同时保存了使用史、埋藏史和修复史。",
        source:
          "https://www.plcsmuseum.com.cn/Collection/Detail/93adee4b-6d04-4db9-9768-b82c6bab9497",
      },
      {
        id: "jade-yue",
        title: "玉戚",
        type: "玉器",
        image: "assets/artifact_jade_yue.jpg",
        alt: "盘龙城出土玉戚",
        meta: "杨家湾17号墓 · 商代前期 · 长5.5厘米",
        summary:
          "玉戚是一种小型斧钺形礼器，器身左右对称，两侧各有3个齿棱，顶端与刃部呈弧形，整体近“风”字造型。",
        facts: [
          ["尺寸", "长5.5厘米，宽5厘米。"],
          ["特征", "两侧各有3个齿棱，局部带黄褐色土沁。"],
          ["意义", "非实用兵器，象征军事权力并用于礼仪活动。"],
        ],
        reading:
          "玉戚把兵器的形态转化为礼仪符号，显示墓葬主人与军事权力、宗教仪式之间的联系。",
        source:
          "https://www.plcsmuseum.com.cn/Collection/Detail/404eb262-2edb-4ee5-9867-bb8c5cd47889",
      },
    ],
  },
];

const flatArtifacts = halls.flatMap((hall) =>
  hall.items.map((item) => ({ hall, item })),
);
const hallMap = document.querySelector("#hall-map");
const artifactDialog = document.querySelector("#artifact-dialog");
const closeArtifact = document.querySelector("#close-artifact");
const modalImage = document.querySelector("#modal-image");
const modalBadge = document.querySelector("#modal-badge");
const modalHall = document.querySelector("#modal-hall");
const modalTitle = document.querySelector("#modal-title");
const modalMeta = document.querySelector("#modal-meta");
const modalSummary = document.querySelector("#modal-summary");
const modalFacts = document.querySelector("#modal-facts");
const modalReading = document.querySelector("#modal-reading");
const modalSourceLink = document.querySelector("#modal-source-link");
const modalCounter = document.querySelector("#modal-counter");
const previousArtifact = document.querySelector("#previous-artifact");
const nextArtifact = document.querySelector("#next-artifact");
const scriptDialog = document.querySelector("#script-dialog");
const openScript = document.querySelector("#open-script");
const closeScript = document.querySelector("#close-script");
const currentYear = document.querySelector("#current-year");

let activeArtifactIndex = 0;

function createHallRoom(hall) {
  const room = document.createElement("section");
  room.className = "hall-room";
  room.dataset.hall = hall.id;

  const header = document.createElement("header");
  header.className = "hall-room-header";
  const number = document.createElement("span");
  number.className = "hall-room-number";
  number.textContent = hall.number;
  const title = document.createElement("h2");
  title.className = "hall-room-title";
  title.textContent = hall.name;
  const subtitle = document.createElement("p");
  subtitle.className = "hall-room-subtitle";
  subtitle.textContent = hall.subtitle;
  header.append(number, title, subtitle);

  const lead = document.createElement("p");
  lead.className = "hall-room-lead";
  lead.textContent = hall.lead;

  const names = document.createElement("div");
  names.className = "artifact-names";
  hall.items.forEach((item) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "artifact-name";
    button.dataset.object = item.id;
    button.setAttribute("aria-label", `查看${item.title}的文物信息`);

    const itemTitle = document.createElement("span");
    itemTitle.className = "artifact-name-title";
    itemTitle.textContent = item.title;
    const itemMeta = document.createElement("span");
    itemMeta.className = "artifact-name-meta";
    itemMeta.textContent = `${item.type} · ${item.meta.split(" · ")[0]}`;
    const mark = document.createElement("span");
    mark.className = `artifact-name-mark ${item.classic ? "" : "is-object"}`;
    mark.textContent = item.classic ? "★ 经典" : "查看";
    button.append(itemTitle, itemMeta, mark);
    button.addEventListener("click", () => openArtifact(item.id));
    names.append(button);
  });

  room.append(header, lead, names);
  return room;
}

function renderHallMap() {
  hallMap.replaceChildren(...halls.map(createHallRoom));
}

function renderArtifactModal(index) {
  activeArtifactIndex = Math.max(0, Math.min(flatArtifacts.length - 1, index));
  const { hall, item } = flatArtifacts[activeArtifactIndex];
  modalImage.src = item.image;
  modalImage.alt = item.alt;
  modalBadge.textContent = item.classic ? "★ 经典文物" : item.type;
  modalHall.textContent = `${hall.number}展厅 · ${hall.name}`;
  modalTitle.textContent = item.title;
  modalMeta.textContent = item.meta;
  modalSummary.textContent = item.summary;
  modalReading.textContent = item.reading;
  modalSourceLink.href = item.source;
  modalCounter.textContent = `${activeArtifactIndex + 1} / ${flatArtifacts.length} · ${hall.name}`;

  modalFacts.replaceChildren();
  item.facts.forEach(([label, value]) => {
    const term = document.createElement("dt");
    term.textContent = label;
    const definition = document.createElement("dd");
    definition.textContent = value;
    modalFacts.append(term, definition);
  });

  previousArtifact.disabled = activeArtifactIndex === 0;
  nextArtifact.disabled = activeArtifactIndex === flatArtifacts.length - 1;
}

function openArtifact(objectId) {
  const index = flatArtifacts.findIndex(({ item }) => item.id === objectId);
  if (index < 0) return;
  renderArtifactModal(index);
  if (!artifactDialog.open) {
    artifactDialog.showModal();
  }
}

closeArtifact.addEventListener("click", () => artifactDialog.close());
previousArtifact.addEventListener("click", () =>
  renderArtifactModal(activeArtifactIndex - 1),
);
nextArtifact.addEventListener("click", () =>
  renderArtifactModal(activeArtifactIndex + 1),
);

artifactDialog.addEventListener("click", (event) => {
  if (event.target !== artifactDialog) return;
  const rect = artifactDialog.getBoundingClientRect();
  const outside =
    event.clientX < rect.left ||
    event.clientX > rect.right ||
    event.clientY < rect.top ||
    event.clientY > rect.bottom;
  if (outside) artifactDialog.close();
});

openScript.addEventListener("click", () => {
  if (typeof scriptDialog.showModal === "function") {
    scriptDialog.showModal();
  }
});
closeScript.addEventListener("click", () => scriptDialog.close());

scriptDialog.addEventListener("click", (event) => {
  if (event.target !== scriptDialog) return;
  const rect = scriptDialog.getBoundingClientRect();
  const outside =
    event.clientX < rect.left ||
    event.clientX > rect.right ||
    event.clientY < rect.top ||
    event.clientY > rect.bottom;
  if (outside) scriptDialog.close();
});

document.addEventListener("keydown", (event) => {
  if (!artifactDialog.open || event.altKey || event.ctrlKey || event.metaKey) {
    return;
  }
  if (event.key === "ArrowLeft" && activeArtifactIndex > 0) {
    renderArtifactModal(activeArtifactIndex - 1);
  }
  if (
    event.key === "ArrowRight" &&
    activeArtifactIndex < flatArtifacts.length - 1
  ) {
    renderArtifactModal(activeArtifactIndex + 1);
  }
});

currentYear.textContent = String(new Date().getFullYear());
renderHallMap();

// Bind after rendering the hall map.
document.querySelectorAll(".artifact-name").forEach((button) => {
  button.addEventListener("click", () => openArtifact(button.dataset.object));
});
