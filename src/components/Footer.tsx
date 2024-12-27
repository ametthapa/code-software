import React from 'react';

const App: React.FC = () => {
    return (
        <footer style={styles.footer}>
            <p>© 2024 <a href="/" style={styles.link}>Code-Software</a>. All rights reserved.</p>
        </footer>
    );
};

const styles: { [key: string]: React.CSSProperties } = {
    link: {
        textDecoration: 'none',
        color: '#4fc3f7',
        fontSize: '1.2rem',
        fontWeight: 'bold',
    },
    footer: {
        backgroundColor: '#1e3a5f',
        textAlign: 'center',
        fontSize: '0.9rem',
        paddingBottom: '20px',
        color: '#fff',
    },
};

export default App;
