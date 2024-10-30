import axios from 'axios';
import React from 'react'

export default function ButtonDownload({ category, filename, title }) {
  const ROOT_API = process.env.NEXT_PUBLIC_API;
  const API_VERSION = process.env.NEXT_PUBLIC_API_VERSION;

  const handleDownload = async() => {
    try {
      const res = await axios.get(`${ROOT_API}/${API_VERSION}/download/${category}/${filename}`, {
        responseType: 'blob'
      });
      
      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', filename);
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
    } catch (err) {
      console.log(err);
    }
    
  };

  return (
    <button
      className='hover:underline'
      onClick={handleDownload}
    >
      {title || `unduh`}
    </button>
  )
}
