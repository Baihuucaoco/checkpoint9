let menu = ["rau muo'n xaos toys", "thit cham nuoc mam", "Chigga"]

function manageMenu() {
    
    let userInput = prompt("Ban can gi?")
    if (userInput === "C") {
        let newDish = prompt("Nhap mon an ban muon them").split(",") 
        menu = menu.concat(newDish)
        localStorage.setItem('menu', JSON.stringify(menu))
        alert("Da them thanh cong!")
    }
    else if (userInput === "R"){
        let result = menu.join()
        alert(result);
    }else if (userInput === "U") {
        let updateFood = prompt("Nhap mon can doi")
        let index = menu.indexOf(updateFood)
        if (index !== -1) {
            let newDishes = prompt("Nhap ten mon moi")
            menu[index] = newDishes
            localStorage.setItem('menu', JSON.stringify(menu))
            alert("Doi thanh cong")
        }else{
            alert("Khong tim thay mon can thay doi")
        }
    }else if (userInput === "D"){
        let deleteFood = prompt("Nhap mon can xoa")
        let index = menu.indexOf(deleteFood)
        if (index !== -1) {
            menu.splice(index, 1)
            localStorage.setItem('menu', JSON.stringify(menu))
            alert("Xoa thanh cong, oke")
        }
        
    }
}
manageMenu();