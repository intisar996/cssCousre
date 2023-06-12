let inputName = document.querySelector('.inputName');
let inputDes = document.querySelector('.inputDes');
let inputTim = document.querySelector('.inputTim');
let inputday = document.querySelector('.inputday');
let submit = document.querySelector('.add');
let taskDiv = document.querySelector('.day')

let arrayTask = [];

// add task 
submit.onclick = function() {
    if((inputName.value && inputDes.value  && inputTim.value && inputDay.value && inputDay.value) !=="") {
        
    }
}







function addTaskToArray(taskText) {
    // Take Data
    const task = {
    id : Date.now(),
    title:taskText,
    completed: false,
    };
    // push task to array
    arrayOfTasks.push(task);
    // add task to page
    addElementsToPageFrom(arrayOfTasks);
    addDataToLocalStorageFrom(arrayOfTasks);
}

function addElementsToPageFrom(arrayOfTasks) {
    // empty tasks div
    taskDiv.innerHTML ="";
    // looping on Array Of Tasks 
    arrayOfTasks.array.forEach(task => {
        
        
    });


}








