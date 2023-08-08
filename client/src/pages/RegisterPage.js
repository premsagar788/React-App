import { useState } from 'react';

export default function RegisterPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    async function register(ev) {
        ev.preventDefault();
        await fetch('http://localhost:4000/register', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: {'Content-Type': 'application/json'},
        });
    }


    return (
        <form onSubmit={register} className="register">
            <h1>Register</h1>
            <input type="text"
                value={username}
                onChange={ev => setUsername(ev.target.value) }
                placeholder="Enter username" />
            <input type="password"
                value={password}
                onChange={ev => setPassword(ev.target.value)}
                placeholder="Enter password" />
            <button>Register</button>
        </form>
    );
}