class Hotel {
  address = "";
  numOfRooms = 0;
  #minFloor = 5;
  #maxFloor = 10;
  rooms = [];
  constructor(address, numOfRooms) {
    this.address = address;
    this.numOfRooms = numOfRooms;
  }

  printAdvertisement() {
    console.log("****************************");
    console.log(this.address);
    console.log(`Our hotel has ${this.numOfRooms} Rooms`);
    console.log("****************************");
  }

  listBookedRooms() {
    console.log("****************************");
    console.log("Booked Rooms:");
    this.rooms.forEach(room => {
      if (room.isBooked) {
        room.print();
      }
    });
    console.log("****************************");
  }
}

class Room {
  floorNum;
  roomNum;
  price = 0;
  #isBooked = false;

  constructor(floorNum, roomNum, price) {
    this.floorNum = floorNum;
    this.roomNum = roomNum;
    this.price = price;
  }

  print() {
    console.log("----------------------");
    console.log(`Room: ${this.floorNum}${this.roomNum}, cost: ${this.price}`);
    console.log("----------------------");
  }
  book() {
    this.#isBooked = true;
  }
  get isBooked() {
    return this.#isBooked;
  }
}

class RoomWithView extends Room {
  view = "";
  numOfBeds = 0;
  constructor(floorNum, roomNum, price, view, numOfBeds) {
    super(floorNum, roomNum, price);
    this.numOfBeds = numOfBeds;
    this.view = view;
  }
  print() {
    console.log("----------------------");
    console.log(`Room: ${this.floorNum}${this.roomNum}, cost: ${this.price}`);
    console.log(`View: ${this.view}, Num of Beds: ${this.numOfBeds}`);
    console.log("----------------------");
  }
}

class SleepingRoom extends Room {
  personCapacity = 0;
  constructor(floorNum, roomNum, price, personCapacity) {
    super(floorNum, roomNum, price);
    this.personCapacity = personCapacity;
  }
}

const main = () => {
  const abcHotel = new Hotel("ABC Hotel\n Hebron - Wadi Altufah - 10St", 5);
  const r1 = new Room(5, 15, 200);
  const r2 = new RoomWithView(6, 14, 500, "Beach", 2);
  const r3 = new RoomWithView(6, 15, 300, "City", 1);
  const r4 = new SleepingRoom(7, 10, 250, 4);
  const r5 = new Room(5, 18, 280);
  abcHotel.rooms = [r1, r2, r3, r4, r5];
  // abcHotel.rooms.push(r6);

  abcHotel.printAdvertisement();
  abcHotel.listBookedRooms();
  r1.book();
  r4.book();
  abcHotel.rooms[1].book();
  abcHotel.listBookedRooms();
}

main();