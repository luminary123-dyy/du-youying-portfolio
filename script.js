const projectData = {
  travel: {
    kicker: "独立产品 · 小程序",
    title: "旅行猫猫",
    summary: "借鉴《旅行青蛙》的陪伴式体验，从产品构想到开发上线由我独立完成。产品已上线，但仍处于平台审核与认证阶段。",
    status: "审核 / 认证中",
    facts: [
      ["我的角色", "独立完成全流程"],
      ["当前用户", "约 7–8 人"],
      ["当前状态", "已上线，平台审核 / 认证中"],
      ["可体验内容", "小程序码与 1分40秒体验视频"]
    ],
    sections: [
      ["产品出发点", "以《旅行青蛙》为灵感，尝试把轻量陪伴体验做成一个真正可以进入和使用的小程序。作品集只展示已确认的灵感来源与交付事实，不把尚未验证的增长结论包装成成果。"],
      ["我完成的工作", ["独立负责产品构思与流程梳理", "独立完成实现与上线准备", "持续处理平台审核和认证问题", "通过真实用户的小范围使用观察产品是否可用"]],
      ["当前判断", "目前约 7–8 名用户，样本很小。它证明的是从想法到可运行产品的完整交付能力，而不是规模化增长。"]
    ],
    media: `
      <div class="case__media case__media--split">
        <figure><video controls playsinline preload="metadata" fetchpriority="high" poster="assets/travel-cat-poster.jpg" src="assets/travel-cat-demo.mp4">浏览器不支持视频播放。</video><figcaption>真实体验视频 · 1分40秒</figcaption></figure>
        <figure class="qr-frame"><img src="assets/travel-cat-qr.jpg" alt="旅行猫猫小程序码照片" width="1080" height="1920"><figcaption>微信扫码进入；平台仍在审核与认证阶段</figcaption></figure>
      </div>`
  },
  event: {
    kicker: "校园活动产品 · 产品负责人",
    title: "专交遇见你",
    summary: "服务每年 1000+ 参与者的校园活动小程序。参加活动需要使用产品；今年在时间约束下，大量沿用去年产品遗产并继续迭代。",
    status: "迭代开发中",
    facts: [
      ["我的角色", "产品负责人，负责整个产品"],
      ["使用规模", "每年活动参与人数 1000+"],
      ["团队规模", "12 人，含不负责开发的品牌策划成员"],
      ["交付方式", "基于往届产品遗产迭代"]
    ],
    sections: [
      ["真实约束", "这是一个活动必用的小程序，但今年时间有限。产品不是从零开发，而是在去年已有成果上继续推进；保留可复用资产，比为了“从零”叙事而重做更符合项目目标。"],
      ["我的工作", ["承担整体产品负责人职责", "围绕活动流程推进产品迭代", "协调开发与品牌策划等不同成员", "在时间限制下判断哪些遗产继续复用、哪些环节需要更新"]],
      ["作品集如何表述", "项目价值来自千人级真实使用场景和团队协作复杂度；不会把往届遗产写成个人从零产出，也不会把 12 人全部写成开发团队。"]
    ]
  },
  ziqiang: {
    kicker: "组织协作系统 · 项目负责人",
    title: "自强独立站",
    summary: "面向组织内部协作的 Hub 与管理端。作为产品部部长和项目负责人，我负责 Hub、管理端的 PRD、产品设计与 Demo；其他模块由团队成员负责。",
    status: "测试站验收问题修复中",
    facts: [
      ["我的角色", "产品部部长 / 项目负责人"],
      ["负责范围", "Hub、管理端 PRD / 产品设计 / Demo"],
      ["团队边界", "其他部分由其他成员负责"],
      ["当前状态", "测试站未正式上线，验收问题修复中"]
    ],
    sections: [
      ["需求架构", "PRD 将任务、项目、甘特、通知、动态、部门、换届、资料与知识等模块组织为统一 Hub，同时为成员、内容、报名、资料、权限与审计建立管理端。"],
      ["关键产品判断", ["用状态闭环约束任务从待办到验收", "用月 / 周甘特视图处理项目并行与同期冲突", "按角色与组织范围控制创建、查看和管理权限", "为学习助手要求回答关联资料来源", "把管理动作写入审计日志，避免不可追踪变更"]],
      ["项目边界", "测试站 studio.ziqiang.net.cn 尚未正式上线。当前仍在修复验收问题；公开作品集中不提供任何测试账号，也不展示成员名单或联系方式。"]
    ],
    media: `
      <div class="case__media case__media--split">
        <figure><img src="assets/ziqiang-gantt.png" alt="自强 Hub 甘特视图原型，已裁去用户信息" width="1155" height="376"><figcaption>跨项目甘特视图 · 原型局部</figcaption></figure>
        <figure><img src="assets/ziqiang-library.png" alt="自强 Hub 资料与影像模块原型，已裁去用户信息" width="1570" height="810"><figcaption>资料与影像模块 · 原型局部</figcaption></figure>
        <figure><img src="assets/ziqiang-admin.png" alt="自强管理端概览原型，已裁去用户信息" width="1200" height="635"><figcaption>管理端概览 · 原型局部</figcaption></figure>
        <figure><img src="assets/ziqiang-flow.png" alt="自强任务状态闭环流程图" width="829" height="220"><figcaption>任务状态闭环 · PRD 流程图</figcaption></figure>
      </div>
      <div class="case__links"><a class="case-link case-link--secondary" href="https://studio.ziqiang.net.cn" target="_blank" rel="noopener noreferrer">打开测试站</a></div>
      <p class="privacy-note">测试站仅用于查看公开入口；不提供账号，不展示成员隐私。</p>`
  },
  xinyuan: {
    kicker: "成员网站 · 独立开发",
    title: "珞珈心源成员网站",
    summary: "独立完成的响应式成员信息网站，支持搜索、部门筛选和成员详情浏览，约 50 人使用。",
    status: "已上线",
    statusClass: "case__status--live",
    facts: [
      ["我的角色", "独立开发 / 全部独立制作"],
      ["使用人数", "约 50 人"],
      ["产品形态", "响应式 Web 网站"],
      ["当前状态", "公开运行中"]
    ],
    sections: [
      ["产品目标", "把分散的成员介绍组织成一个可浏览、可搜索的成员名录，降低新成员认识组织与寻找同伴的成本。"],
      ["已实现体验", ["按部门筛选成员", "按姓名、兴趣或想做的事搜索", "查看成员的完整介绍与作品截图", "在手机与桌面端使用"]],
      ["隐私说明", "该项目链接本身是用户已公开部署的网站；本作品集不复制成员个人资料或照片，只提供项目级说明与跳转。"]
    ],
    links: [["打开运行网站", "https://luminary123-dyy.github.io/xinyuan-members/?v=33", "primary"]]
  },
  ulink: {
    kicker: "AI Agent 产品 · 唯一 PM",
    title: "ULink",
    summary: "作为团队唯一产品经理，独立撰写全部 PRD，负责完整产品规划、需求架构与产品方案。Demo 由其他成员制作，团队正在调试 AI Agent。",
    status: "AI Agent 调试中",
    facts: [
      ["我的角色", "团队唯一 PM"],
      ["我的产出", "全部 PRD"],
      ["负责范围", "产品规划、需求架构、产品方案"],
      ["协作边界", "Demo 由其他成员制作"]
    ],
    sections: [
      ["我的职责", "从产品视角定义问题、拆解需求并建立功能与流程架构，形成团队调试 AI Agent 时可以共同对齐的产品方案。"],
      ["团队协作", ["我负责全部 PRD 与产品决策表达", "其他成员负责 Demo 制作和技术实现", "当前工作重点是 AI Agent 调试", "不把团队 Demo 的开发工作归入个人产出"]],
      ["当前状态", "现有公开 Demo 可用于了解项目方向，但产品仍在开发调试中。当前 HTTPS 入口握手异常，保留可访问的 HTTP 测试入口并明确其测试属性。"]
    ],
    links: [["打开公共 Demo", "http://139-224-129-225.sslip.io/app/", "secondary"]]
  }
};

const dialog = document.querySelector("#case-dialog");
const caseContent = document.querySelector("#case-content");
const closeButton = document.querySelector(".dialog-close");
const cards = [...document.querySelectorAll(".project-card")];
const filters = [...document.querySelectorAll(".filter")];
const emptyState = document.querySelector("#empty-state");
let triggerElement = null;

function listOrParagraph(content) {
  if (Array.isArray(content)) {
    return `<ul>${content.map(item => `<li>${item}</li>`).join("")}</ul>`;
  }
  return `<p>${content}</p>`;
}

function renderCase(project) {
  const facts = project.facts.map(([label, value]) => `<div><dt>${label}</dt><dd>${value}</dd></div>`).join("");
  const sections = project.sections.map(([title, content]) => `
    <section class="case__section">
      <h3>${title}</h3>
      ${listOrParagraph(content)}
    </section>`).join("");
  const links = project.links ? `<div class="case__links">${project.links.map(([label, href, style]) => `
    <a class="case-link ${style === "secondary" ? "case-link--secondary" : ""}" href="${href}" target="_blank" rel="noopener noreferrer">${label}</a>`).join("")}</div>` : "";

  caseContent.innerHTML = `
    <header class="case__head">
      <p class="case__kicker">${project.kicker}</p>
      <h2 id="case-title">${project.title}</h2>
      <p class="case__summary">${project.summary}</p>
      <span class="case__status ${project.statusClass || ""}">${project.status}</span>
    </header>
    <div class="case__grid">
      <aside class="case__aside"><dl>${facts}</dl></aside>
      <div>${sections}${links}</div>
    </div>
    ${project.media || ""}`;
}

function openCase(key, trigger) {
  const project = projectData[key];
  if (!project) return;
  triggerElement = trigger;
  renderCase(project);
  document.body.classList.add("is-dialog-open");
  dialog.showModal();
  closeButton.focus();
}

function closeCase() {
  const playingVideo = dialog.querySelector("video");
  if (playingVideo) playingVideo.pause();
  dialog.close();
}

cards.forEach(card => {
  const button = card.querySelector(".project-card__button");
  button.addEventListener("click", () => openCase(card.dataset.project, button));
});

filters.forEach(filter => {
  filter.addEventListener("click", () => {
    const category = filter.dataset.filter;
    filters.forEach(item => {
      const active = item === filter;
      item.classList.toggle("is-active", active);
      item.setAttribute("aria-pressed", String(active));
    });
    let visibleCount = 0;
    cards.forEach(card => {
      const visible = category === "all" || card.dataset.category === category;
      card.hidden = !visible;
      if (visible) visibleCount += 1;
    });
    emptyState.hidden = visibleCount !== 0;
  });
});

closeButton.addEventListener("click", closeCase);
dialog.addEventListener("click", event => {
  if (event.target === dialog) closeCase();
});
dialog.addEventListener("close", () => {
  document.body.classList.remove("is-dialog-open");
  caseContent.replaceChildren();
  if (triggerElement) triggerElement.focus({ preventScroll: true });
});

