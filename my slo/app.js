
let inputTxt = document.getElementById("input")
let addCommentButton = document.getElementById("button")
let showRealTimeComment = document.getElementById("txtComment")
let commentBox = document.getElementById("showTheComments");
let id
inputTxt.addEventListener("keyup", () => {
    showRealTimeComment.textContent = inputTxt.value
})
addCommentButton.addEventListener("click", () => {

    let commentTxt = inputTxt.value
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ comment: commentTxt })
    }).then((response) => {
        if (!response.ok)
            throw Error(`there is an error ${response.status}`)
        return response.json()
    }).then(data => {
        console.log("sending data" + JSON.stringify(data))
        createComment()
        showRealTimeComment.textContent = ""
        inputTxt.value = ""
        saveCommentInLocalStorage(commentTxt)
    }).catch((err) => {
        console.error(` error : ${err}`)
    });
})


function saveCommentInLocalStorage(commentTxt) {
    localStorage.setItem("comment", JSON.stringify(commentTxt));
}

function createComment() {
    let comment = document.createElement("div");
    comment.classList.add("comment");
    comment.innerText = inputTxt.value;

    commentBox.appendChild(comment);

}