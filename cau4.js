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

let format = {
    "name": "Tên xe",
    "type": "Chủng loại",
    "seat": "Số chỗ ngồi",
    "price": "Giá thuê"
}

const wrap = document.getElementById('wrap');
// const fatherOfWrap = document.createElement('div')
// fatherOfWrap.classList.add('fatherOfWrap')

cars.forEach(car => {
    // ngang hang voi section
    const card = document.createElement('div')
    card.classList.add('item')

    // container
    const container = document.createElement('div')
    container.classList.add('container')

    // cac info can hien thi
    const nameInfo = document.createElement('div')
    nameInfo.classList.add('info')
    const typeInfo = document.createElement('div')
    typeInfo.classList.add('info')
    const seatInfo = document.createElement('div')
    seatInfo.classList.add('info')
    const priceInfo = document.createElement('div')
    priceInfo.classList.add('info')

    // hang tren hien thi theo format
    const nameFormat = document.createElement('b')
    nameFormat.textContent = format.name
    const typeFormat = document.createElement('b')
    typeFormat.textContent = format.type
    const seatFormat = document.createElement('b')
    seatFormat.textContent = format.seat
    const priceFormat = document.createElement('b')
    priceFormat.textContent = format.price

    const nameCar = document.createElement('p')
    nameCar.textContent = car.name

    const typeCar = document.createElement('p')
    typeCar.textContent = car.type

    const seatCar = document.createElement('p')
    seatCar.textContent = car.seat

    const priceCar = document.createElement('p')
    priceCar.textContent = car.price

    const imgCar = document.createElement('img')

    nameInfo.appendChild(nameFormat)
    nameInfo.appendChild(nameCar)

    typeInfo.appendChild(typeFormat)
    typeInfo.appendChild(typeCar)

    seatInfo.appendChild(seatFormat)
    seatInfo.appendChild(seatCar)

    priceInfo.appendChild(priceFormat)
    priceInfo.appendChild(priceCar)

    imgCar.src = car.img

    container.appendChild(nameInfo)
    container.appendChild(typeInfo)
    container.appendChild(seatInfo)
    container.appendChild(priceInfo)

    card.appendChild(imgCar)
    card.appendChild(container)

    wrap.appendChild(card)
    // fatherOfWrap.appendChild(wrap)
})


