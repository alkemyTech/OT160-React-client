import React, { useState } from 'react'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

export default function Pdfcontainer() {

    const [file, setFile] = useState('./pdf.pdf')
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setPageNumber(1);
    }

    function changePage(offSet) {
        setPageNumber(prevPageNumber => prevPageNumber + offSet);
    }

    function changePageBack() {
        changePage(-1)
    }

    function changePageNext() {
        changePage(+1)
    }


    return (
        <>
            <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={pageNumber} />
            </Document>
            <p>
                Page {pageNumber} of {numPages}
            </p>
            <div className='container_button'>
                {pageNumber > 1 &&
                    <button  onClick={changePageBack}>Previous Page</button>
                }
                {
                    pageNumber < numPages &&
                    <button onClick={changePageNext}>Next Page</button>

                }
            </div>
        </>

    )
}
