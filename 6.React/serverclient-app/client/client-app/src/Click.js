function click({ onButtonclick, onResetClick } ) {
    return (
        <div>
            <button onClick={onButtonclick}>
                Click me
            </button>
            <button onClick={onResetClick}>
                Reset
            </button>
        </div>
    )
}

export default click;