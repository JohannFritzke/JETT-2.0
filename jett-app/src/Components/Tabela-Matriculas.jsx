
import dados from "../Data/Matriculas Data/Tabela-Matriculas.json"

export const Tabela_Matriculas = () => {
    return (
        <div className="menu">
            <div className="table_panel">
                <table>
                    <tr>
                        <th>Nome</th>
                        <th>CPF</th>
                        <th>Telefone</th>
                        <th>CEP</th>
                        <th>Status</th>
                    </tr>

                    {
                        dados.map((item, key) => (
                            <tr className={item.Status}>
                                <td>{item.Nome}</td>
                                <td>{item.CPF}</td>
                                <td>{item.Telefone}</td>
                                <td>{item.CEP}</td>
                                <td>{item.Status}</td>
                            </tr>
                        ))
                    }
                </table>
            </div>
        </div>
    )
}


export default Tabela_Matriculas;