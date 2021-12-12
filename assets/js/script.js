//variable declarations

//for getDate
const date = new Date;
var currentTime;
const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}

//for timeblocks
const timeSlots = [
    {
        written: '9AM',
        numeric: 9
    }, 
    {
        written: '10AM',
        numeric: 10
    },
    {
        written: '11AM',
        numeric: 11
    },
    {
        written: '12AM',
        numeric: 12
    },
    {
        written: '1PM',
        numeric: 13
    },
    {
        written: '2PM',
        numeric: 14
    },
    {
        written: '3PM',
        numeric: 15
    },
    {
        written: '4PM',
        numeric: 16
    },
    {
        written: '5PM',
        numeric: 17
    }];

var dateEl = document.getElementById('currentDay');
var containerEl = document.getElementById("container");


//functions

var getDate = function() {
    var currentDate = (date.toLocaleDateString(undefined, options));
    currentTime = date.toLocaleTimeString([], {hour: '2-digit', hour12: false});
    dateEl.textContent = currentDate;
    currentTime = parseInt(currentTime);
    console.log(currentTime);
    return currentTime;
}

var printTimeBlocks = function() {
    for(var i = 0; i < timeSlots.length; i++) {
        //run to check current time during loop
        getDate();

        //create sections
        var containerSections = document.createElement("div");
        containerSections.classList = "row d-flex flex-row";
        containerSections.id = "containerSections";
        containerEl.appendChild(containerSections);

        var blockEl = document.createElement('div');
        blockEl.classList = "time-block col-1";
        containerSections.appendChild(blockEl);

        var timeInSlot = document.createElement("p");
        timeInSlot.id = "timeInSlot"  + timeSlots.indexOf();
        timeInSlot.classList = "hour";
        timeInSlot.textContent = timeSlots[i].written;
        blockEl.appendChild(timeInSlot);

        var eventWritingSection = document.createElement("p");
        eventWritingSection.id = "eventWritingSection"  + timeSlots.indexOf();
        eventWritingSection.textContent = " ";
        eventWritingSection.classList = "past col-9";
        containerSections.appendChild(eventWritingSection);

        var eventWritingForm = document.createElement('form');
        eventWritingForm.id = "eventWritingForm";
        eventWritingForm.textContent = ' ';
        eventWritingForm.classList = 'eventWritingForm';
        eventWritingSection.appendChild(eventWritingForm);

        var saveButtonSlot = document.createElement("p");
        saveButtonSlot.id = "saveButtonSlot" + timeSlots.indexOf();
        saveButtonSlot.classList = "saveBtn col-1";
        containerSections.appendChild(saveButtonSlot);

        var saveButton = document.createElement("button");
        saveButton.id = "saveButton" + timeSlots.indexOf();
        saveButton.classList = "saveBtnKiddo";
        saveButton.innerHTML = "<span class='glyphicon glyphicon-floppy-save'></span>"
        saveButtonSlot.appendChild(saveButton);

        //check current time vs time of slot and add class
        if(currentTime === timeSlots[i].numeric){
            eventWritingSection.classList = "present col-9";
        }
        else if(currentTime < timeSlots[i].numeric){
            eventWritingSection.classList = "future col-9";
        }
        else if (currentTime > timeSlots[i].numeric){
            eventWritingSection.classList = "past col-9";
        }
    }

}

var editScheduleText = function () {
    formEl.textContent = window.prompt("Write your event here!")
  }


printTimeBlocks();

var formEl = document.querySelector('#eventWritingForm');

formEl.addEventListener("click", editScheduleText);