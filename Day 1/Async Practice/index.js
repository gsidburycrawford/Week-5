function getRandomNumber() {
    return Promise(setTimeout(()=>{
        return Math.floor(Math.random() * 100);  
    }))
}

