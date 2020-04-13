import React, { Component } from 'react';
import api from '../../services/api';

import './styles.css';

export default class Main extends Component {
    // State para o modo render acessar
    state = {
        todos: []
    }

    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async () => {
        const response = await api.get('/todos');

        this.setState({ todos: response.data })
    };

    render() {
        const { todos } = this.state;

        return (
            <div className="container">
                <table className="list-todos">
                    <tr>
                        <th>ID</th>
                        <th>Usuário ID</th>
                        <th>Título</th>
                        <th>Status</th>
                    </tr>
                    {todos.map(todo => (
                        <tr>
                            <td>{todo.id}</td>
                            <td>{todo.userId}</td>
                            <td>{todo.title}</td>
                            <td><span class={todo.completed ? 'complete' : 'pending' }>{todo.completed ? 'Completo' : 'Pendente' }</span></td>
                        </tr>
                    ))}
                </table>
            </div>
        )
    }
}
