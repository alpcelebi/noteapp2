import { Link } from 'react-router-dom'
import React from 'react'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthConext';

export default function Navbar() {
    const { logout, user } = useLogout();
    const { error } = useAuthContext();

    return (
        <header>
            <div className='container'>
                <Link to="/">
                    <h1>TYA NOTE-APP</h1>
                </Link>

                <nav>
                    {!user && <div>
                        <Link to="/login">Giriş</Link>
                        <Link to="/signup">Üye Ol</Link>
                    </div>}
                    {user && <div>
                        <span>{user.displayName}</span>&nbsp;
                        <button onClick={logout}>Çıkış</button>
                    </div>}
                    {error && <div className='error'>{error}</div>}
                </nav>
            </div>
        </header>
    );
}
