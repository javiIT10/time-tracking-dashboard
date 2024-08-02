/* ======================================================================
                            VARIABLES
====================================================================== */
const articlesContainer = document.querySelector("#articlesContainer");
const btnDaily = document.querySelector("#daily");
const btnWeekly = document.querySelector("#weekly");
const btnMonthly = document.querySelector("#montly");

const cardStyles = {
  bg: "",
  src: "",
  alt: "",
};

/* ======================================================================
                            AL CARGAR EL DOCUMENTO
====================================================================== */
document.addEventListener("DOMContentLoaded", function () {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((element) => {
        const article = document.createElement("ARTICLE");
        article.classList.add(
          "relative",
          "h-[160px]",
          "rounded-xl",
          "xl:h-[245px]",
          "overflow-hidden"
        );
        consultarTitulo(element.title);
        article.innerHTML = `
          <header class="${cardStyles.bg} w-full absolute z-[-1] rounded-t-xl">
            <img
              src="${cardStyles.src}"
              alt="${cardStyles.alt}"
              class="rounded-t-xl ml-[230px] xl:ml-[160px]"
            />
          </header>
          <main
            class="w-full px-[23px] py-[30px] absolute top-[40px] xl:top-[46px] bg-dark-blue rounded-xl hover:bg-desaturated-blue cursor-pointer transition-colors">
            <div class="flex items-center justify-between">
              <p class="text-white font-medium leading-none">${element.title}</p>
              <img src="src/images/icon-ellipsis.svg" alt="icon-ellipsis" />
            </div>
            <div class="flex items-center justify-between mt-[12px] xl:mt-[35px] xl:flex-col xl:justify-start xl:items-start">
              <p class="text-[27px] xl:text-[46px] text-white font-light">
                ${element.timeframes.weekly.current}hrs
              </p>
              <p class="text-pale-blue leading-none">Last Week - ${element.timeframes.weekly.previous}hrs</p>
            </div>
          </main>`;

        articlesContainer.appendChild(article);
      });
    })
    .catch((error) => console.error("Error al cargar el archivo JSON:", error));
});

/* ======================================================================
                            EVENT LISTENERS
====================================================================== */
btnDaily.addEventListener("click", function (e) {
  e.preventDefault();

  limpiarHTML();

  btnDaily.classList.add("text-pale-blue");
  btnWeekly.classList.remove("text-pale-blue");
  btnWeekly.classList.add("text-desaturated-blue");
  btnMonthly.classList.remove("text-pale-blue");
  btnMonthly.classList.add("text-desaturated-blue");

  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((element) => {
        const article = document.createElement("ARTICLE");
        article.classList.add(
          "relative",
          "h-[160px]",
          "rounded-xl",
          "xl:h-[245px]",
          "overflow-hidden"
        );
        consultarTitulo(element.title);
        article.innerHTML = `
          <header class="${cardStyles.bg} w-full absolute z-[-1] rounded-t-xl">
            <img
              src="${cardStyles.src}"
              alt="${cardStyles.alt}"
              class="rounded-t-xl ml-[230px] xl:ml-[160px]"
            />
          </header>
          <main
            class="w-full px-[23px] py-[30px] absolute top-[40px] xl:top-[46px] bg-dark-blue rounded-xl hover:bg-desaturated-blue cursor-pointer transition-colors">
            <div class="flex items-center justify-between">
              <p class="text-white font-medium leading-none">${element.title}</p>
              <img src="src/images/icon-ellipsis.svg" alt="icon-ellipsis" />
            </div>
            <div class="flex items-center justify-between mt-[12px] xl:mt-[35px] xl:flex-col xl:justify-start xl:items-start">
              <p class="text-[27px] xl:text-[46px] text-white font-light">
                ${element.timeframes.daily.current}hrs
              </p>
              <p class="text-pale-blue leading-none">Last Week - ${element.timeframes.daily.previous}hrs</p>
            </div>
          </main>`;

        articlesContainer.appendChild(article);
      });
    })
    .catch((error) => console.error("Error al cargar el archivo JSON:", error));
});

btnWeekly.addEventListener("click", function (e) {
  e.preventDefault();

  limpiarHTML();

  btnWeekly.classList.add("text-pale-blue");
  btnDaily.classList.remove("text-pale-blue");
  btnDaily.classList.add("text-desaturated-blue");
  btnMonthly.classList.remove("text-pale-blue");
  btnMonthly.classList.add("text-desaturated-blue");

  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((element) => {
        const article = document.createElement("ARTICLE");
        article.classList.add(
          "relative",
          "h-[160px]",
          "rounded-xl",
          "xl:h-[245px]",
          "overflow-hidden"
        );
        consultarTitulo(element.title);
        article.innerHTML = `
          <header class="${cardStyles.bg} w-full absolute z-[-1] rounded-t-xl">
            <img
              src="${cardStyles.src}"
              alt="${cardStyles.alt}"
              class="rounded-t-xl ml-[230px] xl:ml-[160px]"
            />
          </header>
          <main
            class="w-full px-[23px] py-[30px] absolute top-[40px] xl:top-[46px] bg-dark-blue rounded-xl hover:bg-desaturated-blue cursor-pointer transition-colors">
            <div class="flex items-center justify-between">
              <p class="text-white font-medium leading-none">${element.title}</p>
              <img src="src/images/icon-ellipsis.svg" alt="icon-ellipsis" />
            </div>
            <div class="flex items-center justify-between mt-[12px] xl:mt-[35px] xl:flex-col xl:justify-start xl:items-start">
              <p class="text-[27px] xl:text-[46px] text-white font-light">
                ${element.timeframes.weekly.current}hrs
              </p>
              <p class="text-pale-blue leading-none">Last Week - ${element.timeframes.weekly.previous}hrs</p>
            </div>
          </main>`;

        articlesContainer.appendChild(article);
      });
    })
    .catch((error) => console.error("Error al cargar el archivo JSON:", error));
});

btnMonthly.addEventListener("click", function (e) {
  e.preventDefault();

  limpiarHTML();

  btnMonthly.classList.add("text-pale-blue");
  btnDaily.classList.remove("text-pale-blue");
  btnDaily.classList.add("text-desaturated-blue");
  btnWeekly.classList.remove("text-pale-blue");
  btnWeekly.classList.add("text-desaturated-blue");

  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((element) => {
        const article = document.createElement("ARTICLE");
        article.classList.add(
          "relative",
          "h-[160px]",
          "rounded-xl",
          "xl:h-[245px]",
          "overflow-hidden"
        );
        consultarTitulo(element.title);
        article.innerHTML = `
          <header class="${cardStyles.bg} w-full absolute z-[-1] rounded-t-xl">
            <img
              src="${cardStyles.src}"
              alt="${cardStyles.alt}"
              class="rounded-t-xl ml-[230px] xl:ml-[160px]"
            />
          </header>
          <main
            class="w-full px-[23px] py-[30px] absolute top-[40px] xl:top-[46px] bg-dark-blue rounded-xl hover:bg-desaturated-blue cursor-pointer transition-colors">
            <div class="flex items-center justify-between">
              <p class="text-white font-medium leading-none">${element.title}</p>
              <img src="src/images/icon-ellipsis.svg" alt="icon-ellipsis" />
            </div>
            <div class="flex items-center justify-between mt-[12px] xl:mt-[35px] xl:flex-col xl:justify-start xl:items-start">
              <p class="text-[27px] xl:text-[46px] text-white font-light">
                ${element.timeframes.monthly.current}hrs
              </p>
              <p class="text-pale-blue leading-none">Last Week - ${element.timeframes.monthly.previous}hrs</p>
            </div>
          </main>`;

        articlesContainer.appendChild(article);
      });
    })
    .catch((error) => console.error("Error al cargar el archivo JSON:", error));
});

/* ======================================================================
                            FUNCIONES
===================================================================== */

function consultarTitulo(title) {
  switch (title) {
    case "Work":
      cardStyles.bg = "bg-light-red-work";
      cardStyles.src = "src/images/icon-work.svg";
      cardStyles.alt = "icon-work";
      break;
    case "Play":
      cardStyles.bg = "bg-soft-blue-play";
      cardStyles.src = "src/images/icon-play.svg";
      cardStyles.alt = "icon-play";
      break;
    case "Study":
      cardStyles.bg = "bg-light-red-study";
      cardStyles.src = "src/images/icon-study.svg";
      cardStyles.alt = "icon-study";
      break;
    case "Exercise":
      cardStyles.bg = "bg-lime-green-exercise";
      cardStyles.src = "src/images/icon-exercise.svg";
      cardStyles.alt = "icon-exercise";
      break;
    case "Social":
      cardStyles.bg = "bg-violet-social";
      cardStyles.src = "src/images/icon-social.svg";
      cardStyles.alt = "icon-social";
      break;
    case "Self Care":
      cardStyles.bg = "bg-soft-orange-seftcare";
      cardStyles.src = "src/images/icon-self-care.svg";
      cardStyles.alt = "icon-sef-care";
      break;
  }
}

function limpiarHTML() {
  while (articlesContainer.firstChild) {
    articlesContainer.removeChild(articlesContainer.firstChild);
  }
}
