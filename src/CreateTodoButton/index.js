import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton() {
    const onClickButton = () => {
        PaymentResponse.setOpenModal(true);
    };

    return (

        <button 
            className="CreateTodoButton"
            onClick={onClickButton}
        >
            +
        </button>

    );
}

export { CreateTodoButton };