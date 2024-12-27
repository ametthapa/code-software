import React from 'react';

const tools = [
    { name: 'Add Prefix/Suffix', link: '/add-prefix-suffix' },
    { name: 'JSON Formatter', link: '/json-formatter' },
    // { name: 'Text Reverser', link: '/text-reverser' },
    // { name: 'Case Converter', link: '/case-converter' },
    // { name: 'Base64 Encoder/Decoder', link: '/base64-encoder-decoder' },
];

const App: React.FC = () => {
    return (
        <div style={styles.container}>
            <header style={styles.header}>
                <h1 style={styles.title}>Code-Software</h1>
                <p style={styles.subtitle}>Welcome to Code-Software, your hub for essential development and productivity tools. Simplify your workflow with our handy utilities.</p>
            </header>

            <main style={styles.main}>
                <ul style={styles.list}>
                    {tools.map((tool, index) => (
                        <li key={index} style={styles.listItem}>
                            <a href={tool.link} style={styles.link}>{tool.name}</a>
                        </li>
                    ))}
                </ul>
            </main>

            <footer style={styles.footer}>
                <p>© 2024 Code-Software. All rights reserved.</p>
            </footer>
        </div>
    );
};

const styles: { [key: string]: React.CSSProperties } = {
    container: {
        height: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#1e3a5f',
        color: '#fff',
        fontFamily: 'Arial, sans-serif',
        margin: '0',
        overflow: 'hidden',
    },
    header: {
        textAlign: 'center',
        marginTop: '20px',
    },
    title: {
        fontSize: '2.5rem',
        margin: '0',
    },
    subtitle: {
        fontSize: '1.2rem',
        marginTop: '10px',
    },
    main: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    list: {
        listStyleType: 'none',
        padding: '0',
        margin: '0',
    },
    listItem: {
        margin: '10px 0',
    },
    link: {
        textDecoration: 'none',
        color: '#4fc3f7',
        fontSize: '1.2rem',
        fontWeight: 'bold',
    },
    footer: {
        textAlign: 'center',
        fontSize: '0.9rem',
        marginBottom: '20px',
    },
};

export default App;
