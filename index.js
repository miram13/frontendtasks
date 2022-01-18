function validateform(){
    let x = document.forms["myForm"]["email"].value;
    if (x == ""){

        alert ("Name must be filled out");
        return false;
    }
}