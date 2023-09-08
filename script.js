// const wrapper = document.querySelector('.wrapper'),
//     qr = wrapper.querySelector('.form input'),
//     btnGenerate = wrapper.querySelector('.form button'),
//     generatedQR = wrapper.querySelector('.qr-code img')

// let preVal

// btnGenerate.addEventListener('click', () => {
//     let qrVal = qr.value.trim()
//     console.log(qrVal);
//     if (!qr || preVal === qrVal) return
//     preVal = qrVal
//     console.log(preVal);
//     btnGenerate.innerHTML = 'Generating QR Code...'
//     generatedQR.src = 'https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${qrVal}'
//     generatedQR.addEventListener('load', () => {
//         wrapper.classList.add('active')
//         btnGenerate.innerHTML = 'Generate QR Code'
//     })
// })

// qr.addEventListener('keyup', () => {
//     if (!qr.value.trim()) {
//         wrapper.classList.remove('active')
//         preVal = ''
//     }
// })


const endPoint = 'https://qr-code-by-api-ninjas.p.rapidapi.com/v1/qrcode?data=https%3A%2F%2Fapi-ninjas.com&format=png'

const wrapper = document.querySelector('.wrapper'),
    btnGenerate = wrapper.querySelector('.form button'),
    textInput = wrapper.querySelector('.form input').value.trim(),
    qrImage = wrapper.querySelector('.qr-code img')

btnGenerate.addEventListener('click', generateQRCode())

function generateQRCode() {

    fetch(endPoint, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-RapidAPI-Key': '8663e3afadmsh701a2cb8b81edf1p17e984jsn71ec0b2b243c',
            'X-RapidAPI-Host': 'qr-code-by-api-ninjas.p.rapidapi.com'
        },
        body: JSON.stringify({
            text: textInput
        })
    })
        .then(response => response.json())
        .then(data => {
            if (data.qr_code) {
                qrImage.src = data.qr_code;
            } else {
                alert('QR code generation failed.');
            }
        })
        .catch(error => console.error('Error:', error));
}