const display = document.querySelector('.display');
const buttons = document.querySelector('button');
const input = document.querySelector('input');

const BaseURL = 'https://quickchart.io/qr?text=';

const generateQRCode = async (text) => {
    const img = document.createElement('img');
    img.alt = 'QR Code';
    try{
        const response = await fetch(`${BaseURL}${text}`);
        if(!response.ok){
            throw new Error('Network response was not ok');
        }
        const data = await response.url;
        console.log(data);
       img.src = data;
        display.appendChild(img);
    }
    catch (error) {
        console.error('Error generating QR code:', error);
        display.textContent = 'Failed to generate QR code';
        return;
    }
}

buttons.addEventListener('click', () => {
    if(input.value.trim() === '') {
        display.textContent = 'Please enter a valid text';
        return;
    }
    else{
        display.textContent = '';
        generateQRCode(input.value);
        input.value = '';
    }

})