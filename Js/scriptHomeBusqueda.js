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
    const query = document.getElementById("search-bar").value.trim();
    if (query) {
        window.location.href = `/${owlflix}/busqueda.html?search=${query}`;
    }
}

console.log(window.location.origin);