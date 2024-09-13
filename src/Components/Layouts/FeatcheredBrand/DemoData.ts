import brand1 from "../../../assets/Hero/"


type Tdata={
    name:string,
    photo:string,
   
}[]


const KeyboardBrandDAta:Tdata=[
    {
        name:"Discord TKL Keyboard",
        photo:keyboard1,
       
    },
    {
        name:"Hot Docs V-2",
        photo:keyboard2,
        
    }
]


const getKeyboardData=()=>{
    return KeyboardBrandDAta
}

export default getKeyboardData