// Icon filter click effect
let filterIcon = document.querySelector('.filter-icon');
let filters = document.querySelector('.filters');

filterIcon.onclick = function () {
    this.classList.toggle('active');
    filters.classList.toggle('active');
}

// Create filters
let inputUserId = document.querySelector('input#userid');
let inputStatus = document.querySelector('input#status');
let inputs = document.querySelectorAll('.filter input');
let rowIDUsers = document.querySelectorAll('tr td:nth-child(2)');
let rowStatus = document.querySelectorAll('tr td:nth-child(4)');

for (let input of inputs) {
    input.onkeyup = function () {
        let input_IDUsers = inputUserId.value;
        let input_Status = inputStatus.value;
    
        if (input_IDUsers != "" || input_Status != "") {
            for (let i = 0; i < rowIDUsers.length; i++) {
                rowIDUsers[i].parentElement.style.display = "table-row"; // Reset rows

                if (input_IDUsers == rowIDUsers[i].textContent  && input_Status == rowStatus[i].textContent) {
                    rowIDUsers[i].parentElement.style.display = "table-row";
                }
                else if (input_IDUsers == ""  && input_Status == rowStatus[i].textContent){
                    rowIDUsers[i].parentElement.style.display = "table-row";
                }
                else if (input_IDUsers == rowIDUsers[i].textContent  && input_Status == ""){
                    rowIDUsers[i].parentElement.style.display = "table-row";
                }
                else {
                    rowIDUsers[i].parentElement.style.display = "none";
                }
            }
    
        } else {
            for (let j = 0; j < rowIDUsers.length; j++) {
                rowIDUsers[j].parentElement.style.display = "table-row";
            }
        }
    }
}
