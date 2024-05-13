let cars = [{
    "name": "Toyota Innova G",
    "type": "MPV",
    "seat": 7,
    "img": "https://www.toyota.com.vn///VehicleImgs/innova/7603BF16575A3D76C8BC5C9B27044623.png",
    "price": "800.000VND/ngày"
}, {
    "name": "Toyota Fortuner",
    "type": "SUV",
    "seat": 7,
    "img": "https://www.toyota.com.vn///VehicleImgs/C79303DCA15A51907E509CDB70B57ACB.png",
    "price": "900.000VND/ngày"
}, {
    "name": "Hyundai i10",
    "type": "Sedan",
    "seat": 5,
    "img": "https://hyundai-api.thanhcong.vn/storage/uploads/product/bộ-xe-web-i10sedan.png",
    "price": "400.000VND/ngày"
}, {
    "name": "Hyundai Accent",
    "type": "Sedan",
    "seat": 5,
    "img": "https://hyundai-api.thanhcong.vn/storage/uploads/product/bộ-xe-web-accent.png",
    "price": "500.000VND/ngày"
}, {
    "name": "Toyota Veloz Cross",
    "type": "MPV",
    "seat": 7,
    "img": "https://www.toyota.com.vn///VehicleImgs/E04D28536A32F357A3937533753D252B.jpg",
    "price": "700.000VND/ngày"
}]

const container = document.getElementById('container');

cars.forEach(car => {
    const card = document.createElement('div')
    const name = document.createElement('h3')
    const type = document.createElement('p')
    const seat = document.createElement('p')
    const img = document.createElement('img')
    const price = document.createElement('p')

    name.textContent = car.name
    type.textContent = car.type
    seat.textContent = car.seat
    img.src = car.img
    price.textContent = car.price

    card.appendChild(name)
    card.appendChild(type)
    card.appendChild(seat)
    card.appendChild(img)
    card.appendChild(price)

    container.appendChild(card)
})

