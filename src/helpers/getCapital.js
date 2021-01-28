import getRandom from "./getRandom";

const getCapital = capitals =>{

    const rdn = getRandom(10)
    
    if(capitals[rdn] === '') {
        return getCapital(capitals)
    }
    
    return capitals[rdn]
    
}

export default getCapital