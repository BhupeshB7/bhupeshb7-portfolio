import React from 'react'
// import './ErrorModal.css'
const ErrorModal = (props) => {
    return (
        <div>
            <div className="backdrop" onClick={props.onConfirm} />
            <div className="modal card" >
                <header className='header'>
                    <h2>{props.username}</h2>
                </header>
                <div className='content'>{props.email}</div>
                <footer className='actions'>
                    <button onClick={props.onConfirm}>
                        okay
                    </button>
                </footer>
            </div>
        </div>
    )
}

export default ErrorModal