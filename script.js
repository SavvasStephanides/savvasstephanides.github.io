function slideProfiles(){
    var container = document.querySelector('.profiles-container');

    var mode = container.getAttribute("mode");

    container.setAttribute("mode", mode === "open" ? "closed" : "open");
}