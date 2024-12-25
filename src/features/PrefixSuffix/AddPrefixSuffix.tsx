import React, { useState } from 'react';

const AddPrefixSuffix: React.FC = () => {
    const [inputText, setInputText] = useState('');
    const [prefix, setPrefix] = useState('');
    const [suffix, setSuffix] = useState('');
    const [outputText, setOutputText] = useState('');

    const handleConvert = () => {
        const lines = inputText.split('\n');
        const transformedLines = lines.map(line => `${prefix}${line}${suffix}`);
        setOutputText(transformedLines.join('\n'));
    };

    const handleReset = () => {
        setInputText('');
        setPrefix('');
        setSuffix('');
        setOutputText('');
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(outputText);
        alert('Output copied to clipboard!');
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Add Prefix and Suffix</h1>
            <p style={styles.description}>This tool allows you to add a prefix and suffix to each line of text. Simply enter the text, specify the prefix and suffix, and click "Convert".</p>

            <textarea
                style={styles.textarea}
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Enter your text here..."
            />
            <div style={styles.inputsContainer}>
                <input
                    type="text"
                    style={styles.input}
                    value={prefix}
                    onChange={(e) => setPrefix(e.target.value)}
                    placeholder="Prefix"
                />
                <input
                    type="text"
                    style={styles.input}
                    value={suffix}
                    onChange={(e) => setSuffix(e.target.value)}
                    placeholder="Suffix"
                />
            </div>
            <div style={styles.buttonsContainer}>
                <button style={styles.button} onClick={handleConvert}>Convert</button>
                <button style={styles.resetButton} onClick={handleReset}>Reset</button>
            </div>
            <textarea
                style={styles.textarea}
                value={outputText}
                readOnly
                placeholder="Output will appear here..."
            />
            <button style={styles.copyButton} onClick={handleCopy}>Copy Output</button>
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
    textarea: {
        width: '80%',
        height: '150px',
        margin: '10px 0',
        padding: '10px',
        fontSize: '1rem',
        border: '1px solid #ccc',
        borderRadius: '5px',
        resize: 'vertical',
    },
    inputsContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '80%',
        margin: '10px 0',
    },
    input: {
        flex: 1,
        margin: '0 10px',
        padding: '10px',
        fontSize: '1rem',
        border: '1px solid #ccc',
        borderRadius: '5px',
    },
    buttonsContainer: {
        display: 'flex',
        gap: '10px',
        marginTop: '10px',
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
    resetButton: {
        padding: '10px 20px',
        fontSize: '1rem',
        border: 'none',
        borderRadius: '5px',
        backgroundColor: '#dc3545',
        color: '#fff',
        cursor: 'pointer',
    },
    copyButton: {
        padding: '10px 20px',
        fontSize: '1rem',
        margin: '10px 0',
        border: 'none',
        borderRadius: '5px',
        backgroundColor: '#28a745',
        color: '#fff',
        cursor: 'pointer',
    },
};

export default AddPrefixSuffix;
