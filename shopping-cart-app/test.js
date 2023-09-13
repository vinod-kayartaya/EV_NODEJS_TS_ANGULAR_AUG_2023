let p1 = {
    name: 'Vinod',
    city: 'Bangalore',
    info: function(){
        setTimeout(() => {
            console.log(`${this.name} lives in ${this.city}`);
        }, 2000);
    }
}



p1.info()