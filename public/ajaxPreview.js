setInterval(reload, 3000);
async function reload() {
    const currentUrl = window.location.href;
    console.log(currentUrl);

    const req = await fetch(currentUrl + "&ajax=1", {
        headers: { ajax: true },
    });
    const html = await req.text();
    document.querySelector("#__CONTENT").innerHTML = html;
}
