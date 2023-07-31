

export const MenuItens = ({ itens }) => {
    return (
        <div className="menu">
            <ul className="insights">
                {
                    itens.map((item, key) => (
                        <li key={key}>
                            <i className={item.icon}
                                style={
                                    {
                                        color: `${item.color}`,
                                        backgroundColor: `${item.backcolor}`
                                    }
                                }
                            ></i>
                            <span className="info">
                                <p>{item.title}</p>
                            </span>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default MenuItens;