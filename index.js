import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-database.js";

const firebaseConfig = {
    databaseURL : "https://leads-tracker-app-58db7-default-rtdb.europe-west1.firebasedatabase.app/"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");;



function render(leads) {
    let listItems = "";

    for (let i = 0; i < leads.length; i++){
        listItems += `
            <li>
                <a href='${leads[i]}' target='_blank'>
                ${leads[i]}
                </a>
            </li>
        `;
    };
    
    ulEl.innerHTML = listItems;
};

deleteBtn.addEventListener("dblclick", function() {
    
});

inputBtn.addEventListener("click", function() {
    console.log(inputEl.value);
    inputEl.value = "";
});



