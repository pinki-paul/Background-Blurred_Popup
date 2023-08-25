const btnEl = document.querySelector(".btn");
const containerEl = document.querySelector(".container");
const popUpContainerEl = document.querySelector(".popup-container");
const closeIconEl = document.querySelector(".close-icon");


btnEl.addEventListener("click", ()=> {
    containerEl.classList.add("active");
    popUpContainerEl.classList.remove("active");
});

closeIconEl.addEventListener("click", ()=> {
    popUpContainerEl.classList.add("active");
    containerEl.classList.remove("active");
});
