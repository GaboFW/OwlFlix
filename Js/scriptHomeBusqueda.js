function $(id) {
    return document.getElementById(id);
}

$("search-button").addEventListener("click", cambiarHref());

$("search-bar").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        cambiarHref();
    }
});

function cambiarHref() {
    const query = $("search-bar").value.trim();
    const repo = "owlflix";

    if (query) {
        window.location.href = `/${repo}/busqueda.html?search=${query}`;
    }
}
