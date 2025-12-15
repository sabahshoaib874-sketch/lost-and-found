/* =========================================================
   🔹 فتح وإغلاق القائمة الجانبية (Sidebar)
========================================================= */

const menuBtn = document.getElementById("btn-menu");
const sidebar = document.getElementById("sidebar");
const closeSidebar = document.getElementById("closeSidebar");

if (menuBtn && sidebar) {
    menuBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        sidebar.classList.add("open");
    });
}

if (closeSidebar) {
    closeSidebar.addEventListener("click", () => {
        sidebar.classList.remove("open");
    });
}

// إغلاق القائمة عند الضغط خارجها
document.addEventListener("click", (e) => {
    if (sidebar && !sidebar.contains(e.target) && e.target !== menuBtn) {
        sidebar.classList.remove("open");
    }
});


/* =========================================================
   🔔 زر الجرس — فتح وإغلاق صندوق التنبيهات
========================================================= */

const bellBtn = document.getElementById("btn-bell");
const notifBox = document.getElementById("notif-box");
const closeNotif = document.getElementById("close-notif");

if (bellBtn && notifBox) {

    bellBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        notifBox.style.display =
            notifBox.style.display === "block" ? "none" : "block";
    });

    if (closeNotif) {
        closeNotif.addEventListener("click", () => {
            notifBox.style.display = "none";
        });
    }

    document.addEventListener("click", (e) => {
        if (!notifBox.contains(e.target) && e.target !== bellBtn) {
            notifBox.style.display = "none";
        }
    });
}


/* =========================================================
   🔍 البحث في شريط البحث (Search Bar)
========================================================= */

const searchInput = document.querySelector(".nav-search-bar input");
const searchIcon = document.querySelector(".nav-search-icon");

if (searchIcon && searchInput) {
    searchIcon.addEventListener("click", () => {
        if (searchInput.value.trim() === "") {
            alert("يرجى كتابة كلمة للبحث");
        } else {
            alert("نتائج البحث عن: " + searchInput.value);
        }
    });
}
