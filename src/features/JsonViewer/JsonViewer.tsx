import React, { useState } from 'react';

const JSONViewer: React.FC = () => {
    const [inputText, setInputText] = useState('');
    const [formattedJSON, setFormattedJSON] = useState('');

    const handleFormatJSON = () => {
        try {
            const parsed = JSON.parse(inputText);
            setFormattedJSON(JSON.stringify(parsed, null, 4));
        } catch (e) {
            console.log(e);
            alert('Invalid JSON');
        }
    };

    const handleRemoveWhitespace = () => {
        try {
            const parsed = JSON.parse(inputText);
            setFormattedJSON(JSON.stringify(parsed));
        } catch (e) {
            console.log(e);
            alert('Invalid JSON');
        }
    };

    const handleClear = () => {
        setInputText('');
        setFormattedJSON('');
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>JSON Viewer</h1>
            <div style={styles.contentContainer}>
                <div style={styles.inputContainer}>
                    <div style={styles.buttonsContainer}>
                        <button style={styles.button} onClick={handleFormatJSON}>Format JSON</button>
                        <button style={styles.button} onClick={handleRemoveWhitespace}>Remove Whitespace</button>
                        <button style={styles.clearButton} onClick={handleClear}>Clear</button>
                    </div>
                    <textarea
                        style={styles.textarea}
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        placeholder="Enter your JSON here..."
                    />
                </div>
                <div style={styles.outputContainer}>
                    <textarea
                        style={styles.textarea}
                        value={formattedJSON}
                        readOnly
                        placeholder="Formatted JSON will appear here..."
                    />
                </div>
            </div>
        </div>
    );
};

const styles: { [key: string]: React.CSSProperties } = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f0f4f8',
        padding: '20px',
        boxSizing: 'border-box',
    },
    title: {
        fontSize: '1.5rem',
        marginBottom: '20px',
        color: '#333',
    },
    contentContainer: {
        display: 'flex',
        width: '100%',
        height: 'calc(100vh - 100px)',
    },
    inputContainer: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        padding: '10px',
        boxSizing: 'border-box',
    },
    outputContainer: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        padding: '10px',
        boxSizing: 'border-box',
        marginLeft: '10px',
    },
    buttonsContainer: {
        display: 'flex',
        gap: '10px',
        marginBottom: '10px',
    },
    button: {
        padding: '10px 20px',
        fontSize: '1rem',
        border: 'none',
        borderRadius: '5px',
        backgroundColor: '#007bff',
        color: '#fff',
        cursor: 'pointer',
    },
    clearButton: {
        padding: '10px 20px',
        fontSize: '1rem',
        border: 'none',
        borderRadius: '5px',
        backgroundColor: '#dc3545',
        color: '#fff',
        cursor: 'pointer',
    },
    textarea: {
        flex: 1,
        width: '100%',
        padding: '10px',
        fontSize: '1rem',
        border: '1px solid #ccc',
        borderRadius: '5px',
        resize: 'none',
    },
};

export default JSONViewer;