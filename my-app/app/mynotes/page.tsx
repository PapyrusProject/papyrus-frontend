'use client'
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './styles.css';


const modules = {
  toolbar: [
    [{ 'size': ['small', false, 'large', 'huge'] }],  
    ['bold', 'italic', 'underline', 'strike'],
    [{ 'color': [] }, { 'background': [] }],
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    [{ 'align': [] }],
    [{ 'header': '1' }, { 'header': '2' }, 'blockquote', 'code-block'],
    ['link', 'image', 'video']
  ]
};

export default function Page() {
  const [editorHtml, setEditorHtml] = useState('');

  const handleChange = () => {
    setEditorHtml('');
  };

  return (
   
      <div className="my-editor-container"> {/* adicionada uma classe para estilização */}
        <h1 className='title'>Papyrus.</h1>
        <ReactQuill value={editorHtml} onChange={handleChange} modules={modules} />
      </div>
    );
};

