const userName = localStorage.getItem("userName");
const email = localStorage.getItem("email");
const tel = localStorage.getItem("tel");
const passwrd = localStorage.getItem("passwrd");
const userInfo = document.getElementById("iconhead");
const modul = document.getElementById("user-modul")
const createStory = document.getElementById("createnewcard")
const edidModul = document.getElementById("edit-modul"); 
const moduleIcon = document.getElementById("text-modul-all")
const maintxt = document.getElementById("maintxt") 
// відкриття інфо про користувача
userInfo.addEventListener("click", () =>{
    modul.style.display = "flex"
    const name = document.getElementById("name")
    const userEmail = document.getElementById("userEmail")
    const telnumber = document.getElementById("telnumber")
    name.innerHTML = `Your name: ${userName}`;
    userEmail.innerHTML = `Your email: ${email}`;
    telnumber.innerHTML = `Your phone number: ${tel}`;
})
const closeButton = document.getElementById("closebtn");
closeButton.addEventListener("click", () => {
    modul.style.display = "none";  
});
// відкрити модульне вікно для писання нові історії
const storyModul = document.getElementById("story-modul")
createStory.addEventListener("click", () => {
    mainName.value = "";
    dateInp.value = "";
    textArea.value = "";
    storyModul.style.display = "flex"
})
// закрити модульне вікно
const storyClose = document.getElementById("storyclose")
storyClose.addEventListener("click", () =>{
    const veryficat = confirm("Are you sure? Unsaved data will be deleted!")
    if(veryficat){
        storyModul.style.display = "none"
    }
})
// добавляти нові історії
const storiesContainer = document.getElementById("stor-con")
const mainName = document.getElementById("mainname")
const dateInp = document.getElementById("dateinp")
const textArea = document.getElementById("txtstory") 

// функція створення історій
const createCard = function(){
    const mainContainer = document.createElement("div")
    mainContainer.classList.add("stories")
    const storyhead = document.createElement("div")
    storyhead.classList.add("storyhead")
    const caption = document.createElement("h3")
    caption.textContent = mainName.value;
    const btns = document.createElement("div")
    //open btn
    const openBtn = document.createElement("button")
    openBtn.classList.add("btn");
    openBtn.classList.add("btn-outline-primary");
    const openIcon = document.createElement("i")
    openIcon.classList.add("fa-regular")
    openIcon.classList.add("fa-folder-open")
    const deleteBtn = document.createElement("button")
    //close btn
    deleteBtn.classList.add("btn");
    deleteBtn.classList.add("btn-outline-danger");
    const deleteIcon = document.createElement("i")
    deleteIcon.classList.add("fa-solid")
    deleteIcon.classList.add("fa-trash-can")
    //txt
    const txtStory = document.createElement("p")
    txtStory.classList.add("txtabout")
    txtStory.textContent = textArea.value;
    const data = document.createElement("div")
    data.classList.add("data")

    data.innerHTML = dateInp.value
    const storyText = textArea.value;
    txtStory.textContent = storyText;

    openBtn.appendChild(openIcon)
    deleteBtn.appendChild(deleteIcon)
    btns.appendChild(openBtn)
    btns.appendChild(deleteBtn)
    storyhead.appendChild(caption)
    storyhead.appendChild(btns)
    mainContainer.appendChild(storyhead)
    mainContainer.appendChild(txtStory)
    mainContainer.appendChild(data)
    storiesContainer.appendChild(mainContainer)

    const uniqueId = generateUniqueId(); 
    mainContainer.id = `story-${uniqueId}`;
    openBtn.dataset.storyId = uniqueId;
    function generateUniqueId() {
        return Math.random().toString(36).substring(2) + new Date().getTime().toString(36);
    }
    //видалити історію
    deleteBtn.addEventListener("click", () => {
        const sure = confirm("Are you sure? It will be delete forever")
        if(sure){storiesContainer.removeChild(mainContainer)}
          
    });
    // закрити історію
    const closeStory = document.getElementById("close")
    closeStory.addEventListener("click", () =>{
        moduleIcon.style.display = "none"
    })
    //відкрити історію
    const finishName = document.getElementById("finishname") 
    const finishDate = document.getElementById("finishdate")
    openBtn.addEventListener("click", () => {
        moduleIcon.style.display = "flex";
        const storyId = openBtn.dataset.storyId;
        const storyToOpen = document.getElementById(`story-${storyId}`);
        const storyCaption = storyToOpen.querySelector("h3");
        const storyDate = storyToOpen.querySelector(".data");
        const storyContent = storyToOpen.querySelector("p");
        finishName.textContent = `Caption: ${storyCaption.textContent}`;
        finishDate.textContent = `Date: ${storyDate.textContent}`;
        maintxt.textContent = storyContent.textContent;
    });
    const firstStory = storiesContainer.querySelector(".stories");
    storiesContainer.insertBefore(mainContainer, firstStory);
}
const storyAdd = document.getElementById("storyadd")
storyAdd.addEventListener("click", () =>{
    createCard()
    storyModul.style.display = "none"
})
// Видалення та відкриття початкової історії
const firstStoryDelete = document.getElementById("firststory-delete")
const firstStoryOpen = document.getElementById("firststory-open")
firstStoryDelete.addEventListener("click", () =>{
   const firstStoryStart  = document.querySelector(".firststory")
   const sure = confirm("Are you sure? It will be delete forever")
        if(sure){firstStoryStart.style.display = "none"}
   
})
firstStoryOpen.addEventListener("click", () =>{
    const finishName = document.getElementById("finishname") 
    const finishDate = document.getElementById("finishdate")
    const firstCaption = document.querySelector(".firstcaption")
    const firstDate = document.getElementById("firstdate")
    const firstStoryTxt = document.getElementById("firststory-txt")
    moduleIcon.style.display = "flex"
    finishName.textContent = `Caption: ${firstCaption.textContent}`
    finishDate.textContent = `Caption: ${firstDate.textContent}`
    maintxt.textContent = firstStoryTxt.textContent
    const closeStory = document.getElementById("close")
    closeStory.addEventListener("click", () =>{
        moduleIcon.style.display = "none"
    })
})
// додатки до хедера - дата
const currentTime = document.getElementById("currenttime")
function updateCurrentTime() {
    const now = new Date();
    const year = now.getFullYear();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const day = now.getDate();
    const month = now.getMonth() + 1; 

    const formattedDateTime = `${day}/${month}/${year} ${hours}:${minutes}`;
    currentTime.textContent = formattedDateTime;
}
setInterval(updateCurrentTime, 60000);
updateCurrentTime();
// пошук
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
searchInput.addEventListener("input", searchHistory);
function searchHistory() {
    const searchQuery = searchInput.value.toLowerCase();
    const stories = document.querySelectorAll(".stories");
    
    if (searchQuery.trim() === "") {
        stories.forEach(story => {
            story.style.display = "block";
        });
    } else {
        stories.forEach(story => {
            const caption = story.querySelector(".storyhead h3").textContent.toLowerCase();
            if (caption.includes(searchQuery)) {
                story.style.display = "block";
            } else {
                story.style.display = "none";
            }
        });
    }
}
searchButton.addEventListener("click", () => {
    searchHistory();
});
searchInput.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        searchHistory();
    }
});






 