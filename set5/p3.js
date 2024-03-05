
function copyToClipboard() {

    let copyText = document.getElementById("copyInput").value

    navigator.clipboard.writeText(copyText)

        .then(() => {
            alert(`your copied text :` + copyText)

        })
        .catch(() => {
            console.log(`some error`, err);
        })

}
