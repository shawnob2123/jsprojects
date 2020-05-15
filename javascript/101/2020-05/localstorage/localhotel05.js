let hotel = {
    hotelName: 'JS localStorage Hotel', 
    hotelMotto: 'Show Me The Data!',

    availableRooms: [['201', '202'], ['301', '302']],

}

let hotelMethods = {
    updateAvailableRoomsDom: function () {

        let htmlAvailableList = '<select>';
        for (let i = 0; i < liveHotel.availableRooms.length; i++) {
            for (let j = 0; j < liveHotel.availableRooms[i].length; j++) {
                htmlAvailableList = htmlAvailableList + `<option value='${liveHotel.availableRooms[i][j]}'>${liveHotel.availableRooms[i][j]}</option>`; //option value 
            }
        }
        htmlAvailableList = htmlAvailableList + `</select>`;
        document.getElementById('availableRoomsList').innerHTML = htmlAvailableList;
    }
        
}


localStorage.setItem('lsHotel', JSON.stringify(hotel)); //put hotel into local storage inside key lsHotel

let liveHotel = JSON.parse(localStorage.getItem('lsHotel')); // liveHotel = live data | use "parse" after stringify 

document.getElementById('name').innerText = liveHotel.hotelName;

hotelMethods.updateAvailableRoomsDom();