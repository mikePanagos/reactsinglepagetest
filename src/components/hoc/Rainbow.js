import React from 'react';

const Rainbow =(WrappedComponent)=>{


    const colours =['red','pink','blue','green','orange','yellow'];
    const randomColours=colours[Math.floor(Math.random()*5)];
    console.log(randomColours);
    
    const className=randomColours+"-text";
    return(props)=>{
        return(
            <div className={className}>
            <WrappedComponent {...props}/>
            </div>
        )
    }
}
export default Rainbow;
