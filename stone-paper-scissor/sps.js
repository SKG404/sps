let blocks = document.querySelectorAll(".block")
let winscro = document.querySelector("#N")
let userwin = document.querySelector("#U")
let user =0;
let cap =0;
let capwin = document.querySelector("#C")
let add1 = document.querySelector("#add1")
let add2 = document.querySelector("#add2")
console.log(add1)


blocks.forEach((block) => {
    block.addEventListener("click", function () {
        const user_slect = block.getAttribute("id");
        // console.log(user_slect);
        let c_pin = com_slect()
        vs(user_slect, c_pin)
    })
})


com_slect = function () {
    let arr = ["rock","paper", "scisser",]
    let n = Math.floor(Math.random() * 3);
    let comp_slect = arr[n]
    return (comp_slect)
    
}



function uerswin(win,user_slect,c_pin) {
    if (win == true) {
        console.log("you selec",user_slect)
        console.log("cap selec",c_pin)
        console.log("you win the round with",user_slect)
        winscro.innerText= "You Win"
        user++
        userwin.innerText= user
       
    }
    else if(win == false) {
        console.log("you selec",user_slect)
        console.log("cap selec",c_pin)
        console.log("you lose the round with ",c_pin)
        winscro.innerText= "You Lose!"
        cap++;
        capwin.innerText= cap
    }

    


}

vs = function (user_slect, c_pin) {

    if (user_slect === c_pin) {
        console.log("you selec",user_slect)
        console.log("cap selec",c_pin)
        console.log("the match is draw with ",user_slect)
        winscro.innerText= "Draw"
    }
    else {
        let win = true;
        if (user_slect === "rock")
        //c= seicsser = win
        //c- paper=lose
        {
            win = c_pin === "scisser" ? true : false;
        }
        else if (user_slect === "paper") {
            // c= scisser = lose
            // c= rock = win
            win = c_pin === "rock" ? true : false;
        }
        else if (user_slect === "scisser") {
            // c= rock = lose
            // c= paper = win
            win = c_pin ==="paper" ? true : false;
        }
        uerswin(win,user_slect,c_pin)
    }
} 

