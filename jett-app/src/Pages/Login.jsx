/*eslint-disable*/
import { Link } from "react-router-dom";

export const Login = () => {
    return (
        <main className="login">
            <div className="userLogin">
                <div className="logo">
                    <i class='bx bxs-hot'></i>
                    <span>Jett Academias</span>
                </div>

                <form action="">
                    <span>
                        <i class='bx bxs-user'></i>
                        <input type="text" placeholder="User Name" name="userLogin" />
                    </span>

                    <span>
                        <i class='bx bxs-lock-alt'></i>
                        <input type="password" placeholder="Password" name="userLogin" />
                    </span>

                    <Link to="/Gerente"><input type="submit" name="" id="" className="button" /></Link>
                </form>
                <a href="">
                    Esqueceu sua senha?
                </a>
            </div>
        </main>
    )
}

export default Login;