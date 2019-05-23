import React from 'react';

const Ninjas=({ninjas})=>{
    console.log(ninjas);
        
    const ninjaList=ninjas.map(ninja=>{
        return (ninja.age>20)?(
        <div className="Ninja"key={ninja.id}>
            <div>name:{ninja.name}</div>
            <div>age: {ninja.age}</div>
            <div>Belt: {ninja.belt}</div>
        </div>
        ) : null;
    });
    return(
        <div className="Ninjas-list">
            {ninjaList}        
        </div>
    );
}

export default Ninjas;