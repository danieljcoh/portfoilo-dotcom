
//VARS
const shareButtons = document.querySelectorAll(".tile-share-btn")


//FUNCTIONS
async function copyText(e) {
    e.preventDefault()
    const link = this.getAttribute("link")
    try {
        await navigator.clipboard.writeText(link)
        alert("Copied the text: " + link)
    } catch (err) {
        console.error(err)
    }
}


//EVENT LISTENERS
shareButtons.forEach(shareButtons => shareButtons.addEventListener("click", copyText))