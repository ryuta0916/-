
var simplemde = new SimpleMDE({
     element: document.getElementById("editor"),
     spellChecker: false,
 });


//HTMLプレビューにマークダウンする関数

const drawPreview = () =>{
    const html = SimpleMDE.prototype.markdown(simplemde.value());
    document.querySelector("#preview").innerHTML = html;

}

document.addEventListener("input",()=>{
    drawPreview();
});