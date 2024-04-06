import './TodoCounter.css';

const estilos = {
    backgroundColor: 'red'
};

function TodoCounter( { total, completed } ) {


    return ( 
        // <h1 style={ estilos }>   => estilos en línea mediante una variable
        // <h1 style={{             => estilos en línea directamente en el elemento
        //     fontSize: '24px',
        //     textAlign: 'center',
        //     margin: 0,
        //     padding: '48px',
        // }}>

        completed != total || total == 0
        ?
            <h1 className="TodoCounter">                          
                    Has completado <span>{ completed }</span> de <span>{ total }</span> TODOS
            </h1>
        :
            <h1 className="TodoCounter">                          
                Felicitades haz completados todos los TODOS pendientes!!!
            </h1>
        
    );
}

export { TodoCounter };