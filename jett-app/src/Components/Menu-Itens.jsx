import Item from "../Data/Menu-Gerente.json"

export const MenuItens = () => {
    return (
        <ul className="insights">
            {
                Item.map((item, key) => (
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
    )
}

export default MenuItens;