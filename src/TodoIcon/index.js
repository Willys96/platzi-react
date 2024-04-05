import React from "react";
import { ReactComponent as CheckSGV } from './check.svg'
import { ReactComponent as DeleteSVG } from './delete.svg'
import './TodoIcon.css'


const iconTypes = {
    "check": ( color ) => <CheckSGV className="Icon-svg" fill={ color }/>,
    "delete": ( color ) => <DeleteSVG className="Icon-svg" fill={ color }/>
};

function TodoIcon({ type, color, onClickIcon }) {
    
    return ( 
        <span 
            className={ `Icon-container   Icon-container-${type}` }
            onClick={ onClickIcon }
        >
            { 
                // type == "check"
                // ? <CheckSGV/>
                // : type == "delete"
                //     ? <DeleteSVG/>
                //     : '-'

                iconTypes[ type ]( color )
            }
        </span>
    );
}

export { TodoIcon };
