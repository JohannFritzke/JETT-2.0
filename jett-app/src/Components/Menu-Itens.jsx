/*eslint-disable*/
import { Link } from "react-router-dom";

export const MenuItens = ({ itens }) => {
    return (
        <div className="menu">
            <ul className="insights">
                {
                    itens.map((item, key) => (

                        <Link to={`/Gerente${item.path}`}
                            style={{ textDecoration: 'none', color: 'var(--dark)' }}
                        >

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
                        </Link>
                    ))
                }
            </ul>
        </div>
    )
}

export default MenuItens;