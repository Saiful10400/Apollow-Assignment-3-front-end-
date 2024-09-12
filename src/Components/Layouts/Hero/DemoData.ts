import keyboard1 from "../../../assets/Hero/keyboard1.webp"
import keyboard2 from "../../../assets/Hero/keyboard2.webp"

type Tdata={
    name:string,
    photo:string,
    status:string
}[]


const KeyboardDAta:Tdata=[
    {
        name:"Discord TKL Keyboard",
        photo:keyboard1,
        status: "On Sale!"
    },
    {
        name:"Hot Docs V-2",
        photo:keyboard2,
        status: "Hot Deal!"
    }
]


const getKeyboardData=()=>{
    return KeyboardDAta
}

export default getKeyboardData

