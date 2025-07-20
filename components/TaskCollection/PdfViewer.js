import React from 'react'

export default function PdfViewer({ filename }) {
    return (
        <iframe
            src={"/files/"+filename}
            width="100%"
            style={{ height: '50vh', border: 'none' }}
            title="File Viewer"
        />
    )
}
