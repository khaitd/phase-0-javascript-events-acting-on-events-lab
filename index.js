// Your code here
const dodger = document.getElementById('dodger');


// function moveDodgerLeft(){

//     document.addEventListener('keydown', (e) => {
       
//         const position = dodger.style.left.replace("px", "");
//         const newPosition = parseInt(position, 10);
//          if (left > 0 )   {
//         dodger.style.left = `${newPosition-1}px`
//          }
        
//     })
// }    

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }

moveDodgerLeft()


function moveDodgerRight(){
    document.addEventListener('keydown', (e) => {
        if (e.key == "ArrowRight"){
            const position = dodger.style.left.replace("px", "");
            const newPosition = parseInt(position, 10);

            dodger.style.left = `${newPosition+1}px`
        }
    })
}    

moveDodgerRight()