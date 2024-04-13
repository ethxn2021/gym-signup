//Wait for DOM to load before executing
window.onload=function(){
    //Elements
    const inputName = document.getElementById("inputName");
    const inputAge = document.getElementById("inputAge");
    const inputFeet = document.getElementById("inputFeet");
    const inputInches = document.getElementById("inputInches");
    const inputDate = document.getElementById("inputDate");
    const btnReset = document.getElementById("reset");
    const btnDisplay = document.getElementById("display");
    const table = document.getElementById("table");
    const entries = document.getElementById("entries");
    const list = document.getElementById("list");
    const getHeight = () => inputFeet.value + inputInches.value + `"`;
    table.style.visibility = "visible";

    //Display button on click function
    const input = [inputName, inputAge, getHeight, inputDate];

    btnDisplay.addEventListener('click', ()=>{
        //Validation
        if(inputName.value.length <= 0) {
            return alert("Please enter your name.");
        }
        if(!(inputAge.value >= 18 && inputAge.value <= 65)) {
            return alert("Age must be 18-65.");
        }
        if(inputDate.value.split("-")[0] != 2021) {
            return alert("Please select a year in 2021");
        }
        
        const trNew = document.createElement("tr");
        const btnContainer = document.createElement("td");
        const btnDelete = document.createElement("button");
        btnDelete.addEventListener('click', ()=>{
            trNew.remove();
            entries.innerText = Number(entries.innerText) - 1;
        });

        input.forEach(element => {
            const tdElement = document.createElement("td");
            tdElement.innerText = element.value || element();
            tdElement.style.textTransform = "capitalize";
            trNew.appendChild(tdElement);
        })

        entries.innerText = Number(entries.innerText) + 1;
        trNew.classList.add("Temp");
        list.appendChild(trNew);
        btnDelete.type = "button";
        btnDelete.innerText = "×";
        btnDelete.classList.add("Delete");
        trNew.appendChild(btnContainer);
        btnContainer.appendChild(btnDelete);
    });

    btnReset.addEventListener('click', ()=>{
        table.style.visibility = "hidden";
        document.querySelectorAll('.Temp').forEach(element => element.remove());
        entries.innerText = 0;
        inputName.value = "";
        inputAge.value = "";
        inputInches.value = `0"`;
        inputFeet.value = "4";
        inputDate.value = "";
    })
}