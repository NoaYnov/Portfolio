function Redirect(link) {
    window.open(link, '_blank');

}

function ExtendToggle(element) {
    img = element.children[1];
    if (element.style.height == "800px")
        element.style.height = "200px",
        img.style.display = "none";
    else
    element.style.height = "800px",
    img.style.display = "flex";

    

    

}

