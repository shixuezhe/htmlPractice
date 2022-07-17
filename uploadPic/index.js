const dragArea = document.querySelector(".drag-area");
const dragHeader = document.querySelector("header");
const dragBtn = document.querySelector(".drag_btn");
const dragInput = document.querySelector(".drag_input");


dragBtn.onclick = () => {
    dragInput.click();
}

dragInput.addEventListener('change', (e) => {
    showPic(e.target.files[0]);
})

dragArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    dragHeader.textContent = "Release to Upload File";
    dragArea.classList.add("active");
})

dragArea.addEventListener('dragleave', (e) => {
    e.preventDefault();
    dragHeader.textContent = "Drag & Drop to Upload File";
    dragArea.classList.remove("active");
})

dragArea.addEventListener('drop', (e) => {
    e.preventDefault();
    let file1 = e.dataTransfer.files[0];
    showPic(file1);
    dragHeader.textContent = "Drag & Drop to Upload File";
})

function showPic(file){
    let fileType = file.type;
    let vaildTypes = ["image/jpeg", "image/jpg", "image/png"];
    if(vaildTypes.includes(fileType)){
        let fileReader  = new FileReader();
        fileReader.onload = function(e) {
            let fileUrl = this.result;
            let imgTag = `<img src="${fileUrl}">`
            dragArea.innerHTML = imgTag;
        }
        fileReader.readAsDataURL(file);
    } else {
        console.log(fileType);
        alert("只能上传图片类型");
        dragArea.classList.remove("active");
    }
}