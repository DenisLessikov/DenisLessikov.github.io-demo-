// ===== НАСТРОЙКИ =====
// Мастер: M(имя, специализация, фото, описание). Фото: "img/anna.jpg" (пусто = заглушка)
const M = (name, role, photo, text) => ({ name, role, photo, text });
const T = "Здесь будет описание мастера: опыт, специализация.";
const CONFIG = {
  phone: "77000000000",      // телефон для кнопки «Позвонить» (в демо заглушка)
  timeZone: "Asia/Almaty",   // часовой пояс для «Открыто сейчас»
  hours: { open: 9, close: 20 },
  promo: "",   // "" скрывает; в таблице: строка с категорией _акция
  faq: [
    ["Как записаться?", "Выберите услуги на сайте и нажмите «Записаться»: заявка уйдёт администратору в WhatsApp. Можно также позвонить. Мы работаем по предварительной записи."],
    ["Сколько стоит услуга?", "Цены с пометкой «от» ориентировочные: точную стоимость мастер называет после консультации и зависит от длины и сложности работы."],
    ["Можно ли записаться к конкретному мастеру?", "Да, выберите мастера в форме записи или напишите его имя в комментарии."],
    ["Есть ли подарочные сертификаты?", "Да. Выберите сумму в разделе «Подарочный сертификат» и закажите в WhatsApp, приходить в салон за покупкой не нужно."],
    ["Как перенести или отменить запись?", "Напишите администратору в WhatsApp заранее, и мы подберём другое время."]
  ],
  whatsapp: "77000000000",   // номер салона для заявок (в демо заглушка, чтобы не писать им случайно)
  sheetUrl: "",              // ссылка на опубликованный CSV Google Таблицы; "" = список ниже
  branches: [
    { name: "ул. Магжана Жумабаева, 116", hours: "Ежедневно 9:00-20:00, по предварительной записи" },
    { name: "Второй филиал (адрес уточнить)", hours: "Часы работы уточнить" }
  ],
  certificates: [5000, 10000, 20000],
  masters: [                 // 16 мест: меняй строки, лишние можно удалить
    M("Мастер 1", "Специализация", "", T),
    M("Мастер 2", "Специализация", "", T),
    M("Мастер 3", "Специализация", "", T),
    M("Мастер 4", "Специализация", "", T),
    M("Мастер 5", "Специализация", "", T),
    M("Мастер 6", "Специализация", "", T),
    M("Мастер 7", "Специализация", "", T),
    M("Мастер 8", "Специализация", "", T),
    M("Мастер 9", "Специализация", "", T),
    M("Мастер 10", "Специализация", "", T),
    M("Мастер 11", "Специализация", "", T),
    M("Мастер 12", "Специализация", "", T),
    M("Мастер 13", "Специализация", "", T),
    M("Мастер 14", "Специализация", "", T),
    M("Мастер 15", "Специализация", "", T),
    M("Мастер 16", "Специализация", "", T)
  ],
  gallery: [],               // ["img/work1.jpg", ...] фото работ
  reviews: []                // ["img/reviews/1.jpg", ...] скриншоты отзывов
};
CONFIG.whatsapp = CONFIG.whatsapp.replace(/\D/g, "").replace(/^8(\d{10})$/, "7$1");

// Услуги: [категория, название, цена, 1 = цена «от», старая цена (необязательно)]
const SERVICES = [
  ["Комплексы", "Маникюр и педикюр с покрытием", 16500, 1],
  ["Комплексы", "Женская стрижка и укладка (короткие волосы)", 9500, 1],
  ["Комплексы", "Мужская стрижка и борода", 5000, 1],
  ["Женский зал", "Короткая женская стрижка", 5000, 0],
  ["Женский зал", "Каре", 6000, 0],
  ["Женский зал", "Стрижка ниже плеч, каскад", 7000, 1],
  ["Женский зал", "Чёлка", 1000, 0],
  ["Женский зал", "Мытьё и сушка, короткие волосы", 4000, 0],
  ["Женский зал", "Мытьё и сушка, длинные волосы", 5000, 0],
  ["Женский зал", "Укладка на короткие волосы", 4500, 1],
  ["Женский зал", "Укладка на длинные волосы", 6000, 1],
  ["Женский зал", "Причёска", 7000, 1],
  ["Окрашивание", "Сложные покраски (Airtouch, Balayage, Shatush)", 35000, 1],
  ["Окрашивание", "Покраска корней", 8000, 1],
  ["Окрашивание", "Мелирование", 15000, 1],
  ["Окрашивание", "Карвинг", 15000, 1],
  ["Окрашивание", "Boost Up", 15000, 1],
  ["Окрашивание", "Биозавивка", 20000, 1],
  ["Мужской зал", "Модельная стрижка", 4000, 0],
  ["Мужской зал", "Спортивная стрижка", 3000, 0],
  ["Мужской зал", "Стрижка наголо", 1500, 0],
  ["Мужской зал", "Фейд, кроп, андеркат", 4000, 1],
  ["Мужской зал", "Окантовка", 3500, 0],
  ["Мужской зал", "Борода", 1000, 1],
  ["Мужской зал", "Камуфляж седины", 4000, 1],
  ["Мужской зал", "Мужской маникюр", 3500, 0],
  ["Детские стрижки", "До 7 лет", 2500, 0],
  ["Детские стрижки", "7-11 лет", 3000, 0],
  ["Детские стрижки", "С 12 лет", 4000, 0],
  ["Маникюр и педикюр", "Классический маникюр", 4000, 1],
  ["Маникюр и педикюр", "Маникюр с покрытием гель-лак", 7000, 1],
  ["Маникюр и педикюр", "Наращивание ногтей", 10000, 1],
  ["Маникюр и педикюр", "Эстетический педикюр", 8500, 1],
  ["Маникюр и педикюр", "Педикюр с покрытием", 9500, 1],
  ["Брови", "Коррекция и покраска бровей", 4000, 1]
];

// ===== СОСТОЯНИЕ =====
const $ = (id) => document.getElementById(id);
const money = (n) => n.toLocaleString("ru-RU") + " ₸";
const label = (s) => (s.from ? "от " : "") + money(s.price);
const link2gis = "https://2gis.kz/petropavlovsk/search/" + encodeURIComponent("Стиль Магжана Жумабаева 116");
const wa = (text) => window.open(`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(text)}`, "_blank");

let items = SERVICES.map(([cat, name, price, from, old], i) => ({ i, cat, name, price, from: !!from, old: old || 0 }));
let cat = items[0].cat;
let cert = CONFIG.certificates[1] || CONFIG.certificates[0];
const picked = new Set();

// ===== GOOGLE ТАБЛИЦА (колонки: cat, name, price, from = да/нет) =====
function parseCSV(text) {
  const rows = []; let row = [], cell = "", q = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (q) { if (c === '"') { if (text[i + 1] === '"') { cell += '"'; i++; } else q = false; } else cell += c; }
    else if (c === '"') q = true;
    else if (c === ",") { row.push(cell); cell = ""; }
    else if (c === "\n") { row.push(cell); rows.push(row); row = []; cell = ""; }
    else if (c !== "\r") cell += c;
  }
  if (cell || row.length) { row.push(cell); rows.push(row); }
  const head = rows.shift().map(h => h.trim());
  return rows.filter(r => r.length > 1).map(r => Object.fromEntries(head.map((h, i) => [h, (r[i] || "").trim()])));
}

async function loadSheet() {
  try {
    const rows = parseCSV(await (await fetch(CONFIG.sheetUrl)).text());
    const promo = rows.find(r => r.cat === "_акция");
    if (promo) setPromo(promo.name);
    items = rows.filter(r => r.cat !== "_акция").map((r, i) => ({ i, cat: r.cat, name: r.name, price: Number(r.price) || 0, from: /^(да|1|yes)/i.test(r.from), old: Number(r.old) || 0 }));
    picked.clear();
  } catch (e) { /* остаётся запасной список */ }
}

// ===== ОТРИСОВКА =====
function drawServices() {
  const cats = [...new Set(items.map(s => s.cat))];
  if (!cats.includes(cat)) cat = cats[0];
  $("chips").innerHTML = cats.map(c => `<button type="button" class="chip" data-cat="${c}" aria-pressed="${c === cat}">${c}</button>`).join("");
  $("list").innerHTML = items.filter(s => s.cat === cat).map(s =>
    `<label class="row"><input type="checkbox" data-i="${s.i}" ${picked.has(s.i) ? "checked" : ""}><span>${s.name}</span><span class="p">${s.old ? `<s>${money(s.old)}</s>` : ""}${label(s)}</span></label>`).join("");
}

function drawCert() {
  $("certChips").innerHTML = CONFIG.certificates.map(v =>
    `<button type="button" class="chip" data-cert="${v}" aria-pressed="${v === cert}">${money(v)}</button>`).join("");
}

function chosen() { return items.filter(s => picked.has(s.i)); }

function drawBar() {
  const list = chosen();
  $("bar").hidden = !list.length;
  document.body.classList.toggle("has-bar", list.length > 0);
  $("barText").textContent = `Выбрано: ${list.length} · ориентировочно ${list.some(s => s.from) ? "от " : ""}${money(list.reduce((t, s) => t + s.price, 0))}`;
}

function drawStatic() {
  $("gallery").innerHTML = CONFIG.gallery.length
    ? CONFIG.gallery.map(s => `<img src="${s}" alt="Работа мастера салона Стиль" loading="lazy">`).join("")
    : [1, 2, 3, 4].map(() => `<div class="ph"><span>До</span><span>После</span></div>`).join("");
  $("reviewImgs").innerHTML = CONFIG.reviews.map(s => `<img src="${s}" alt="Отзыв клиента" loading="lazy">`).join("");
  $("reviewsLink").href = link2gis;
  $("branches").innerHTML = CONFIG.branches.map((b, n) =>
    `<div class="card"><span class="tag">Филиал ${n + 1}</span><h3>${b.name}</h3><p>${b.hours}</p><p><a href="${link2gis}" target="_blank" rel="noopener">Открыть в 2ГИС</a></p></div>`).join("");
  $("fBranch").innerHTML = CONFIG.branches.map(b => `<option>${b.name}</option>`).join("");
  $("masterList").innerHTML = CONFIG.masters.map(m =>
    `<article class="master"><div class="mph">${m.photo ? `<img src="${m.photo}" alt="${m.name}" loading="lazy">` : "Фото мастера"}</div><h3>${m.name}</h3><p>${m.role}</p>${m.text ? `<small>${m.text}</small>` : ""}</article>`).join("");
  $("fMaster").innerHTML = `<option>Любой мастер</option>` + CONFIG.masters.filter(m => !/^Мастер \d+$/.test(m.name)).map(m => `<option>${m.name}, ${m.role}</option>`).join("");
  $("fDate").min = new Date().toISOString().slice(0, 10);
}

// ===== СОБЫТИЯ =====
document.addEventListener("click", (e) => {
  const c = e.target.closest("[data-cat]"), v = e.target.closest("[data-cert]");
  if (c) { cat = c.dataset.cat; drawServices(); }
  if (v) { cert = Number(v.dataset.cert); drawCert(); }
});

$("list").addEventListener("change", (e) => {
  const i = Number(e.target.dataset.i);
  e.target.checked ? picked.add(i) : picked.delete(i);
  drawBar();
});

$("certBtn").addEventListener("click", () =>
  wa(`Здравствуйте! Хочу заказать подарочный сертификат на ${money(cert)}.`));

$("openBook").addEventListener("click", () => {
  $("chosen").innerHTML = chosen().map(s => `<li>${s.name}, ${label(s)}</li>`).join("");
  $("msg").textContent = "";
  $("dlg").showModal();
});
$("close").addEventListener("click", () => $("dlg").close());

$("send").addEventListener("click", () => {
  const name = $("fName").value.trim(), note = $("fNote").value.trim(), d = $("fDate").value;
  if (!name) return ($("msg").textContent = "Укажите, как к вам обращаться.");
  const text = [
    "Здравствуйте! Хочу записаться в салон «Стиль».",
    `Филиал: ${$("fBranch").value}`,
    $("fMaster").selectedIndex > 0 && `Мастер: ${$("fMaster").value}`,
    "Услуги:", ...chosen().map(s => `• ${s.name} (${label(s)})`),
    `Желаемая дата: ${d ? d.split("-").reverse().join(".") : "как можно скорее"}`,
    `Время: ${$("fTime").value}`,
    `Имя: ${name}`,
    note && `Комментарий: ${note}`
  ].filter(Boolean).join("\n");
  wa(text);
  $("msg").textContent = "Открываем WhatsApp: сообщение уже заполнено, остаётся нажать «Отправить».";
});

// Стрелки карусели мастеров
const slide = (dir) => {
  const card = document.querySelector(".master");
  $("masterList").scrollBy({ left: dir * (card.offsetWidth + 16), behavior: "smooth" });
};
$("mPrev").addEventListener("click", () => slide(-1));
$("mNext").addEventListener("click", () => slide(1));

// ===== АКЦИЯ, ЧАСЫ, ВОПРОСЫ, КНОПКИ СВЯЗИ =====
function setPromo(t) { $("promo").hidden = !t; $("promo").textContent = t || ""; }

function openNow() {
  const parts = new Intl.DateTimeFormat("ru-RU", { timeZone: CONFIG.timeZone, hour: "numeric", minute: "numeric", hour12: false }).formatToParts(new Date());
  const get = (t) => Number(parts.find(p => p.type === t).value);
  const now = (get("hour") % 24) + get("minute") / 60;
  const { open, close } = CONFIG.hours, isOpen = now >= open && now < close;
  $("openNow").classList.toggle("off", !isOpen);
  $("openNow").textContent = isOpen ? `Открыто сейчас, до ${close}:00` : `Сейчас закрыто, откроемся в ${open}:00`;
}

function drawExtras() {
  setPromo(CONFIG.promo);
  openNow();
  $("faqList").innerHTML = CONFIG.faq.map(([q, a]) => `<details><summary>${q}</summary><p>${a}</p></details>`).join("");
  $("fabWa").href = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent("Здравствуйте! Хочу записаться.")}`;
  $("fabTel").href = "tel:+" + CONFIG.phone.replace(/\D/g, "");
}

// ===== СТАРТ =====
drawStatic(); drawServices(); drawCert(); drawBar(); drawExtras();
if (CONFIG.sheetUrl) loadSheet().then(() => { drawServices(); drawBar(); });
