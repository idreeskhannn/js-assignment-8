// alert("hello wolrd")

                 //////       chapter   43   to    48     ////////



                //////     question = 01


function showAlert() {
    alert('Button Clicked!');
}



 //////     question = 02


function showMessage(message) {
    alert(message);
}



 //////     question = 03


function deleteRow(button) {

    var row = button.parentNode.parentNode;
    

    row.parentNode.removeChild(row);
}



 //////     question = 04



var originalImage = "https://picsum.photos/300/200?random=1";
    var newImage = "https://picsum.photos/300/200?random=2";

    function changeImage() {
        document.getElementById("myImage").src = newImage;
    }

    function resetImage() {
        document.getElementById("myImage").src = originalImage;
    }






 //////     question = 05


    var counter = 0; 

    function increaseCounter() {
        counter++;
        updateCounterDisplay();
    }

    function decreaseCounter() {
        counter--;
        updateCounterDisplay();
    }

    function updateCounterDisplay() {
        document.getElementById("counterValue").textContent = counter;
    }