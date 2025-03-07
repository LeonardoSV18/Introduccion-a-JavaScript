const MessageForm = document.querySelector("#Message-Form");

const handleUploadForm = (e) => {
    e.preventDefault();
    const UploadMessage = document.querySelector("#Message-Form input").value;
    const now = new Date();
    const currentDateTime = now.toLocaleString();
    addMessage(UploadMessage, currentDateTime);
}

const addMessage = (text, time) => {
    const container = document.querySelector(".CommentContainer");


    container.insertAdjacentHTML('beforeend', `
        <div class="CommentContainer">
        <div class="MSN">
            <h4>${text}</h4>
            <h6>${time}</h6>
            <button>Eliminar</button>
        </div>

    ` )

    const MSNs = Array.from(document.querySelectorAll(".MSN"));
    MSNs[MSNs.length - 1].children[2].addEventListener('click', (e) => deleteMSN(e));
}

const deleteMSN = (e) => {
    const clickedElement = e.target;
    clickedElement.parentElement.remove();

}


MessageForm.addEventListener('submit', (e) => handleUploadForm(e));
