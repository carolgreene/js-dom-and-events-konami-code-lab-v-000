const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  let index = 0       //set index to 0

document.body.addEventListener('keydown', function(e) {
  const key = parseInt(e.detail || e.which);


  if (key === code[index])  {  //ck to see if key entered matches code at that index
    //debugger           **use debugger & hover over variables for values
    index++                    //increment index for next entry


    if (index === code.length) {      //ck to see if all entries have been made
        alert("Hurray!")                //alert message
        index = 0                     //reset index to 0 for next try

    } else {
    //alert('wrong entry, try again!')
      index = 0//reset index to 0 for next try
    }
  })
}

  init()                          //remember to call init()
