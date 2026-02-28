function generateReport() {
    const output = document.getElementById('output');
    const checkBoxes = Array.from(document.querySelectorAll('thead tr th input'));
    const infoRows = Array.from(document.querySelectorAll('tbody tr'));
    let result = [];

    for(let i = 0; i < infoRows.length; i++){
        let currentInfo = {}
        for(let j = 0; j < checkBoxes.length; j++){
            if(checkBoxes[j].checked){
                currentInfo[checkBoxes[j].name] = infoRows[i].children[j].textContent;

            }
        }
       result.push(currentInfo);
    }
    output.textContent = JSON.stringify(result);
}