'use client'
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './styles.css';
import { Html } from 'next/document';

const modules = {
  toolbar: [
    [{ 'font': [] }, { 'size': ['small', false, 'large', 'huge'] }],  // fonte e tamanho de fonte
    ['bold', 'italic', 'underline', 'strike'], // estilos
    [{ 'color': [] }, { 'background': [] }],  // cores de texto e fundo
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],  // listas
    [{ 'align': [] }],  // alinhamento
    [{ 'header': '1' }, { 'header': '2' }, 'blockquote', 'code-block'], // cabeçalhos e blocos de código
    ['link', 'image', 'video']  // links, imagens e vídeos
  ]
};

// mynotes/page.tsx
export default function Page() {
  const [editorHtml, setEditorHtml] = useState('');

  function handleChange() {
    setEditorHtml('');
  }

  return (
    <div className='my-editor-container'>
      <h1>Papyrus.</h1>
      <ReactQuill value={editorHtml} onChange={handleChange} modules={modules} />
    </div>
  );
};
