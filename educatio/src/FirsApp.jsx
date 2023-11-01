import PropTypes from "prop-types";

// const mensaje = ("arte")
// const arreglo = ("dibujo")
// const arreglo2 = [{nombre: "cindy",apellido:"hurtado"},{nombre: "petro"},{animal: "ballena", edad:"45"}]
// const aprendiz = {
// nombre:'valeria',
// apellido:'fernandez'
// }
// const numero1 = (3)
// const numero2 = (2)

// export const FirsApp = ()=> {
// return(
//     <>
//     <h1>Bienvenidos a mi aplicacion</h1>
//     <p>By valeria fernández</p>
//     <h1>{5 + 6}</h1>
//     <h1>{numero1}+{numero2}={numero1 + numero2}</h1>
//     <h1>{mensaje}</h1>
//     <h1>{arreglo}</h1>
//     <h1>{arreglo2[0].nombre}</h1>
//     <h1>{arreglo2[1].nombre}</h1>
//     <h1>{arreglo2[2].animal}</h1>
//     <h1>{arreglo2[2].edad}</h1>
//     <h1>{arreglo2[0].apellido}</h1>
//     <h1>{JSON.stringify(aprendiz)}</h1>
//     </>
// );
// }


export const Avatar = () =>{
    return(
        <img
        className="avatar"
        src="/src/img/candas.jpg"
        alt="valeria"
        width={100}
        height={100}
        />
    )
}

 const mensaje = () => {
    alert("Mensaje de prueba");
  };

export const FirsApp = (props)=> {
    const { name, age, birth } = props;

return(
    <>
    <h4>{name}</h4>
    <h4>{age}</h4>
    <h4>{birth}</h4>
    <button onClick={mensaje}>
        Aceptar
    </button>
    </>
);
}


// export const FirsApp = (props)=> {
//     console.log(props)
// return(
//     <>
//     <h1>propiedades</h1>
//     <h1>{props.title}</h1>
//     </>
// );
// }

// export const FirsApp = (name='valeria fernandez', age='18', birth='03/06/2005')=> {
// return(
//     <>
//     <h4>{name}</h4>
//     <h4>{age}</h4>
//     <h4>{birth}</h4>
//     </>
// );
// }

FirsApp.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    birth: PropTypes.string
}

FirsApp.defaultProps ={
    name:'nombre por defecto',
    age: 13,
    birth: '3 de junio'
}