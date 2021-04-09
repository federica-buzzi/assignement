function ice_cream ()
{
    for (i = 1; i<100; i++){
        if (i%5===0 && i%3===0)
        {
            console.log("IceCream"); 
        }
        else if (i%3===0)
        {
            console.log("Ice");
        }
        else if (i%5===0)
        {
            console.log("Cream");
        }
        else{
            console.log(i); 
        }
    }
}

ice_cream(); 

