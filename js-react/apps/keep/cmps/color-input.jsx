export function ColorInput({handleStyleChange, isShown}){
    const colors =['#B4FF9F', '#F9FFA4', '#FFD59E', '#FFA1A1', '#D3E4CD', '#99A799', '#F2DDC1', '#E2C2B9' ]

    return <section className={`input-color-container ${!isShown ? 'hidden' : ''}`} >
        <div className="color-input" >
            {colors.map(color => <div className="item" key={color}
            style={{backgroundColor: color}}
            onClick={() => handleStyleChange(color)}>
            </div>)}
        </div>
    </section>
}