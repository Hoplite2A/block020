// 1. Access the root element using JavaScript.
const divRoot = document.getElementById("root");

// 2. Create an h1 element with the name of a famous piece of art: Mona Lisa.
function createPainting() {
  const h1 = document.createElement("h1");
  h1.innerText = "MONA LISA";
}
createPainting();

// 3. Add (append) the h1 element to the root element.
divRoot.appendChild("h1");

// 4. Set the image asset and add thisLinks to an external site. image to the root element.
const imgAsset = document.createElement("img");
//? imgAsset.setAttribute("src", "https://drive.google.com/file/d/1A_VCH7UUCfnUVs-RxST7lgra_MdP62X8/view?pli=1");
imgAsset.src =
  "https://drive.google.com/file/d/1A_VCH7UUCfnUVs-RxST7lgra_MdP62X8/view?pli=1";
// OR
img.src = "./assets/monda_list.jpg";
divRoot.appendChild(imgAsset);

// 5. Add a p element description to the root element. Description should read: The Mona Lisa is a famous painting.
const paintingDescription = document.createElement("p");
p.innerText = "The Monda Lisa is a famous painting";
divRoot.appendChild(p);
