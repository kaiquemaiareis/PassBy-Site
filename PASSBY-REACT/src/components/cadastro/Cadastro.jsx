import React, {Component,useState} from 'react'
import  '../../main.css'
import Input from '../input/index'
import Botao from '../botao/index'
import { Navbar, Nav } from "react-bootstrap";
export default class Cadastro extends Component {

//cria construtor e recebe parametros
  constructor(props) {
    super(props);
    this.state = {
        nome:'',
        telefone:'',
        email: '',
        senha: '',
        confirmarSenha:'',
        authenticated: false
    }; 
  }
  handleSubmit=(x)=>{
    //desestrutura o state
    const { nome,email,telefone, senha,confirmarSenha } = this.state;
    // Verificar se o email e a senha não estão em branco\
    if (isNaN(telefone) || telefone == ''){
      alert ('O telefone precisa ser numérico')
      return false;
    }
    if (senha!==confirmarSenha){
      alert('Confirmar Senha direfente!')
      return false;
    }
    if (nome && email && telefone && senha) {
        // Salvar as credenciais no Local Storage
        localStorage.setItem('nome', nome);
        localStorage.setItem('email', email);
        localStorage.setItem('telefone', telefone);
        localStorage.setItem('senha', senha);

        alert('Conta criada com sucesso! Você pode fazer login agora.');
        window.location.href = '/Login';
    } else {
        alert('Por favor, preencha todos os campos.');
    }
  }
 handleChange = (e) => {
    var eName=e.target.name;
    var eValue=e.target.value;
    this.setState({ [eName]: eValue});
}
render() {
return (
  <div className='Container-center'>
    <div className='Container'>
      <form>
        <h1>Faça o seu Cadastro 👋</h1>
        <Input
          name='nome'
          placeholder='Digite o seu nome'
          onChange={this.handleChange}
          type='text'
        />
        <Input
          name='telefone'
          placeholder='Digite o seu telefone'
          onChange={this.handleChange}
          type='number'
        />
        <Input
          name='email'
          placeholder='Digite o seu e-mail'
          onChange={this.handleChange}
          type='email'
        />
        <Input
          name='senha'
          placeholder='Digite a sua senha'
          onChange={this.handleChange}
          type='password'
        />
        <Input
          name='confirmarSenha'
          placeholder='Confirme a sua senha'
          onChange={this.handleChange}
          type='password'
        />
        <Botao
          type='button'
          text='Efetuar Cadastro!'
          onClick={this.handleSubmit}
        />
        <div className='SubContainerSign'>  
          <p>Já possui conta?</p><Nav.Link className="NavLinks"  href="/Login">Vá para o Login👍</Nav.Link>
        </div>
        </form>
    </div>
    </div>
    
  )
}
}