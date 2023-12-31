const select = document.querySelector("select");
const allLang = ["ru", "en", "it"];

select.addEventListener("change", changeURLLanguage);

function changeURLLanguage() {
  let lang = select.value;
  location.href = window.location.pathname + "#" + lang;
  location.reload();
}

function changeLanguage() {
  let hash = window.location.hash;
  hash = hash.substr(1);
  console.log(hash);
  if (!allLang.includes(hash)) {
    location.href = window.location.pathname + "#en";
    location.reload();
  }
  select.value = hash;

  document.querySelector("title").innerHTML = langArr["unit"][hash];

  for (let key in langArr) {
    let elem = [...document.querySelectorAll(".lng-" + key)];
    elem.forEach(function (item) {
      if (item) {
        item.innerHTML = langArr[key][hash];
      }
    });
  }
}

changeLanguage();
