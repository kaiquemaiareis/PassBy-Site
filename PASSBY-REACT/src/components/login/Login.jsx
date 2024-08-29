import React, {Component} from 'react'
import './Login.css'
import Botao from '../botao';
import Input from '../input';
import { Navbar, Nav } from "react-bootstrap";
export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            senha: '',
            authenticated: false
        };
    }

    componentDidMount() {
        // Verifique se o usuário está autenticado ao carregar o componente
        const isAuthenticated = sessionStorage.getItem('authenticated') === 'true';
        if (isAuthenticated) {
            this.setState({ authenticated: true });
        }
    }

    handleEmailChange = (e) => {
        this.setState({ email: e.target.value });
    }

    handleSenhaChange = (e) => {
        this.setState({ senha: e.target.value });
    }

    handleLogin = () => {
        // Simule a autenticação comparando com dados armazenados no Local Storage.
        const storedEmail = localStorage.getItem('email');
        const storedSenha = localStorage.getItem('senha');

        if (this.state.email === storedEmail && this.state.senha === storedSenha) {
            // Autenticação bem-sucedida
            this.setState({ authenticated: true });
            sessionStorage.setItem('authenticated', true)
            window.location.href = '/home'
        } else {
            // Autenticação falhou
            alert('Credenciais inválidas');
        }
    }

        
    render() {


        return(
            <div className= "login_body">
                <div className="login">
                    <h1>Login</h1>

                    <label htmlFor='email'>E-mail</label>
                    <Input 
                        id='email'
                        name='email'
                        placeholder='Digite o email'
                        type='email'
                        onChange = {this.handleEmailChange}
                        
                    />

                    <label htmlFor='senha'>Senha</label>
                    <Input 
                        id='senha'
                        name='senha'
                        placeholder='Digite a Senha'
                        type='password'
                        onChange = {this.handleSenhaChange}
                        
                    />
                    <p>&nbsp;</p>
                    <p>Não possui conta ?<Nav.Link className="NavLinks"  href="/cadastro">Criar conta</Nav.Link></p>
                    <Botao
                        className='entrarButton'
                        type='submit'
                        text='Entrar'   
                        onClick={this.handleLogin}
                    />
                </div>
            </div>
        )
    }
}
