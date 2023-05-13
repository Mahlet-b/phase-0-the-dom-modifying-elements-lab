const mainElement = document.getElementById('main');
mainElement.remove();

const newHeader = document.createElement("h1");

newHeader.id = 'victory';
//newHeader.textContent = "victory";
document.body.appendChild(newHeader);
const YOUR_NAME = 'Mahlet Bekele'
newHeader.innerHTML = `{YOUR_NAME} is the champion`