class Vehicle{
    constructor(type,model,{engine,power},fuel){
       this.type = type,
       this.nodel = model,
       this.parts = {
       engine,
       power,
       quality: engine * power
       }
       this.fuel = Number(fuel)
       
    }
    drive(fuelloss){ 
        return this.fuel -= fuelloss

    }

}
