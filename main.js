(async () => {
    let data = await fetch("https://incels.wiki/w/Gigachad").then(res => res.text());
    let characteristics = data.split("<ul>")[2].split("</ul>")[0].split("<li>");

    let infoUl = document.getElementById("info-ul");
    characteristics.forEach(elem => {
        let li = document.createElement("li");
        li.textContent = elem.replaceAll(/ *\<\/?[^>]*\> */g, " ");
        if (li.textContent) infoUl.append(li);
    })

})();