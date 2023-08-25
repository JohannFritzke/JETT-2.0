

export const Tabela_Financeiro = ({dados}) => {
    return (
        <div className="menu">
            <div className="table_panel">
                <table>
                    <tr>
                        <th>Nome</th>
                        <th>CPF</th>
                        <th>Validade</th>
                        <th>Valor</th>
                        <th>Status</th>
                    </tr>

                    {
                        dados.map((item, key) => (
                            <tr className={item.Status}>
                                <td>{item.Nome}</td>
                                <td>{item.CPF}</td>
                                <td>{item.Validade}</td>
                                <td>{item.Valor}</td>
                                <td>{item.Status}</td>
                            </tr>
                        ))
                    }
                </table>
            </div>
        </div>
    )
}


export default Tabela_Financeiro;