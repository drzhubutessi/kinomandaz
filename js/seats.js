const seatsCount = 80;
const seats = [];
const seatsContainer = document.getElementById('seatsContainer');

window.onload = () => {
    const a = 0;

    for (let i = 0; i < seatsCount; i++) {
        const btnSeat = document.createElement('button');
        btnSeat.innerText = i;
        btnSeat.classList.add('btn btn-danger buttonSeat');
        btnSeat.appendChild(seatsContainer);
    }
};