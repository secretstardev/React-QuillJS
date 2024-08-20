import { useEffect } from 'react'
import './App.css'
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';

function App() {

  const { quill, quillRef } = useQuill();

  useEffect(() => {
    if (quill) {
      // Initialize any custom handlers or default content here
      quill.clipboard.dangerouslyPasteHTML('<p>Hello, Quill!</p>');
    }
  }, [quill]);

  return (
    <>
      <div style={{ width: 600, height: 400 }}>
        <div ref={quillRef} />
      </div>
    </>
  )
}

export default App
