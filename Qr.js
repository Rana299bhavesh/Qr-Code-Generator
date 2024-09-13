const qrinput = document.getElementById("Qr-input");
const qrimage = document.getElementById("Qr-image");
const qrbutton = document.getElementById("Qr-button");

qrbutton.addEventListener('click', () =>{
    const inputValue=qrinput.value;
    console.log(inputValue);

    if(!inputValue){
        alert('Plaese enter a valid URL');
        return;

    }else{
        qrimage.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;
        qrimage.alt= `QR code for ${inputValue}`;
    }

});