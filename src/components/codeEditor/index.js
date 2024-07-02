// src/CodeEditor.js
import React, { useState } from 'react';
import Prism from 'prismjs';
import "prismjs/themes/prism-tomorrow.css";
import "../../../src/App.css";

const CodeEditor = () => {
    const [code, setCode] = useState('');

    const handleChange = (e) => {
        setCode(e.target.value);
    };

    return (
        <div className="code-editor">
            <textarea
                value={code}
                onChange={handleChange}
                className="code-input"
                spellCheck="false"
            />
            <pre className="code-output">
                <code
                    className="language-js"
                    dangerouslySetInnerHTML={{ __html: Prism.highlight(code, Prism.languages.javascript, 'javascript') }}
                />
            </pre>
        </div>
    );
};

export default CodeEditor;
