// ==========================
// ELEMENTS
// ==========================

const topicContainer = document.getElementById("topicContainer");
const searchInput = document.getElementById("searchInput");

const popup = document.getElementById("popup");
const overlay = document.getElementById("overlay");
const popupText = document.getElementById("popupText");

const completedCount =
    document.getElementById("completedCount");

const remainingCount =
    document.getElementById("remainingCount");


// ==========================
// INITIALIZE
// ==========================

window.onload = () => {

    renderTopics(topics);

    updateStats();

};


// ==========================
// RENDER TOPICS
// ==========================

function renderTopics(topicList) {

    topicContainer.innerHTML = "";

    topicList.forEach(topic => {

        const checked =
            localStorage.getItem(
                `topic-${topic.id}`
            ) === "true";

        const favorite =
            localStorage.getItem(
                `favorite-${topic.id}`
            ) === "true";

        const card =
            document.createElement("div");

        card.className = "topic-card";

        card.innerHTML = `

        <div class="topic-left">

            <input
                type="checkbox"
                ${checked ? "checked" : ""}
                onchange="toggleComplete(${topic.id})"
            >

            <div
                class="topic-title"
                onclick="showPopup(
                    '${escapeQuotes(topic.title)}'
                )"
            >
                ${topic.id}. ${topic.title}
            </div>

        </div>

        <div class="topic-buttons">

            <button
                class="favorite-btn"
                onclick="toggleFavorite(${topic.id})"
            >
                ${favorite ? "★" : "☆"}
            </button>

            <button
                class="view-btn"
                onclick="openCode(${topic.id})"
            >
                View Code
            </button>

        </div>

        `;

        topicContainer.appendChild(card);

    });

}


// ==========================
// SEARCH
// ==========================

searchInput.addEventListener(
    "input",
    () => {

        const value =
            searchInput.value.toLowerCase();

        const filtered =
            topics.filter(topic => {

                return topic.title
                    .toLowerCase()
                    .includes(value);

            });

        renderTopics(filtered);

    }
);


// ==========================
// CHECKBOX
// ==========================

function toggleComplete(id) {

    const key = `topic-${id}`;

    const current =
        localStorage.getItem(key);

    if (current === "true") {

        localStorage.setItem(
            key,
            "false"
        );

    } else {

        localStorage.setItem(
            key,
            "true"
        );

    }

    updateStats();

}


// ==========================
// FAVORITES
// ==========================

function toggleFavorite(id) {

    const key =
        `favorite-${id}`;

    const current =
        localStorage.getItem(key);

    if (current === "true") {

        localStorage.setItem(
            key,
            "false"
        );

    } else {

        localStorage.setItem(
            key,
            "true"
        );

    }

    renderTopics(topics);

}


// ==========================
// POPUP
// ==========================

function showPopup(text) {

    popupText.innerText = text;

    popup.classList.remove("hidden");

    overlay.classList.remove("hidden");

}


function closePopup() {

    popup.classList.add("hidden");

    overlay.classList.add("hidden");

}


// Close popup on blur click

overlay.addEventListener(
    "click",
    closePopup
);


// ==========================
// VIEW CODE
// ==========================

function openCode(id) {

    window.open(
        `${id}.c`,
        "_blank"
    );

}


// ==========================
// STATS
// ==========================

function updateStats() {

    let completed = 0;

    topics.forEach(topic => {

        const value =
            localStorage.getItem(
                `topic-${topic.id}`
            );

        if (value === "true") {

            completed++;

        }

    });

    completedCount.innerText =
        completed;

    remainingCount.innerText =
        topics.length - completed;

}


// ==========================
// ESCAPE QUOTES
// ==========================

function escapeQuotes(str) {

    return str
        .replace(/'/g, "\\'")
        .replace(/"/g, "&quot;");

}


// ==========================
// EXTRA FEATURES
// ==========================

// CTRL + F focuses search

document.addEventListener(
    "keydown",
    (e) => {

        if (
            e.ctrlKey &&
            e.key === "f"
        ) {

            e.preventDefault();

            searchInput.focus();

        }

    }
);


// Scroll to top

window.addEventListener(
    "scroll",
    () => {

        if (
            window.scrollY > 500
        ) {

            document.title =
                "↑ Scroll Up";

        } else {

            document.title =
                "C Programming Assignment Portal";

        }

    }
);

window.addEventListener("load", () => {

    const notice =
        document.getElementById(
            "noticeOverlay"
        );

    const closeBtn =
        document.getElementById(
            "closeNotice"
        );

    if(
        localStorage.getItem(
            "noticeSeen"
        ) === "true"
    ){
        notice.style.display =
            "none";
    }

    closeBtn.onclick =
    function(){

        notice.style.display =
            "none";

        localStorage.setItem(
            "noticeSeen",
            "true"
        );

    };

});

// ==========================
// CONSOLE MESSAGE
// ==========================

console.log(
`
----------------------------------

C Programming Portal

Developer:
Mayukh Dey

Student of UEM Kolkata
Section : O
Roll : 32

GitHub:
https://github.com/About-Mayukh

----------------------------------
`
);