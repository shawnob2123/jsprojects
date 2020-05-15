document.getElementById("hotelName").innerText = "DOM Hotel";
document.getElementById("slogan").innerText = "Where guests can CODE all night!";

let hotel = {
    availableRooms: [ [101, 102, 103, 104], [201, 202, 203, 204], [301, 302, 303], [401, 402], ],
    bookedRooms: [],
    roomTypes: ['Single', 'Double', 'King', 'Queen'],
    roomRates: [300, 350, 450, 550],

    completeBookedRoomsArrays: function() {
        for (let i = 0; i < this.availableRooms.length; i++) {
            this.bookedRooms.push( [] );
        }

    },

    bookSelectedRoom: function() {
        let selectedRoom = document.getElementById('availableSelect').value;
        for (let i = 0; i < this.availableRooms.length; i++ ) {
            for (let j = 0; j < this.availableRooms[i].length; j++ ) {

                if (selectedRoom == this.availableRooms[i][j]) {
                    this.bookedRooms[i].push(this.availableRooms[i].splice(this.availableRooms[i].indexOf(selectedRoom),1));
                }
                

            }        
        }

        this.updateAvailableRooms();
        this.updateBookedRooms();
        

    },

    updateAvailableRooms: function() {
        let dropdown = '<select id="availableSelect">';

        for (let i = 0; i < this.availableRooms.length; i++ ) {
            for (let j = 0; j < this.availableRooms[i].length; j++ ) {
                dropdown = dropdown + `<option value = '${this.availableRooms[i][j]}'>${this.availableRooms[i][j]}</option>`;

            }        
        }
        dropdown = dropdown + '</select>';
        document.getElementById('dropDownAvailable').innerHTML = dropdown;
        
    },

    updateBookedRooms: function() {
        let dropdown = '<select>';

        for (let i = 0; i < this.bookedRooms.length; i++ ) {
            for (let j = 0; j < this.bookedRooms[i].length; j++ ) {
                dropdown = dropdown + `<option value = '${this.bookedRooms[i][j]}'>${this.bookedRooms[i][j]}</option>`;

            }        
        }
        dropdown = dropdown + '</select>';
        document.getElementById('dropDownBooked').innerHTML = dropdown;
        
    }

}

hotel.updateAvailableRooms();
hotel.updateBookedRooms();
hotel.completeBookedRoomsArrays();

console.log(document.getElementById('dropDownAvailable').innerText);