class cat{
    nombre;
    tiredness = 5;
    hunger = 5;
    loneliness = 5;
    happiness = 5;

    constructor(nombre){
        this.nombre = nombre;
    }

    feed(){
        this.hunger -= 5;
        this.happiness = 5;
        this.tiredness +=2;
    }

    sleep(cantidad = 7){
        this.tiredness -= 7;
        this.happiness += 2;
        this.hunger += 1;
    }

    pet(cantidad = -3){
        this.loneliness -= 5;
        this.tiredness += 3;
        this.happiness += 2; 
    }

    status(){
        if(this.tiredness >= 7){
            console.log(this.nombre+" esta muy cansado");
        }else if(this.tiredness == 5){
            console.log(this.nombre+" esta cansado")
        }else{
            console.log(this.tiredness+" esta muy cansado");
        }
        
        if(this.hunger >= 7){
            console.log(this.nombre+" esta muy ambriento");
        }else if(this.hunger == 5){
            console.log(this.hunger+"esta ambirento");
        }else{
            console.log(this.hunger+" esta muy ambirento");
        }
        
        if(this.loneliness >= 7){
            console.log(this.nombre+" esta muy solo");
        }else if(this.loneliness == 5){
            console.log(this.loneliness+" esta solo");
        }else{
            console.log(this.loneliness+" esta muy solo");
        }
        
        if(this.happiness >= 7){
            console.log(this.nombre+" esta muy contento");
        }else if(this.happiness == 5){
            console.log(this.happiness+" esta contento");
        }else{
            console.log(this.happiness+" esta muy contento");
        }
    }


}

