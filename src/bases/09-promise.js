import { getHeroeById } from './bases/08-import';
import heroes from './data/heroes';


//promesas
// const promesa = new Promise((resolve, reject)=>{

//     setTimeout(()=>{
//         console.log('2 segundos despues');
//         resolve();

//         const p1 = getHeroeById(2);
//         resolve(p1);
//         reject('No se pudo encontrar el heroe');

//     }, 2000);

// });

// promesa.then((heroe)=>{
//     console.log('heroe',heroe);
// })

// .catch(err => console.warn(err));

const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject)=>{

    setTimeout(()=>{
               
        
                const p1 = getHeroeById(id);

                if(p1){
                    resolve(p1);
                }else{
                    reject('No se pudo encontrar el heroe');
                }
                
        
            }, 2000) 
});


}
getHeroeByIdAsync(5)
    // .then(heroe => console.log('Heroe',heroe))
    .then(console.log)
    // .catch(err => console.warn(err));
    .catch(console.warn);
    