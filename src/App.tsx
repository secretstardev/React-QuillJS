import React, { useEffect } from 'react'
import './App.css'
import 'quill/dist/quill.snow.css';

function App() {

  const [quill, setQuill] = React.useState<any>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('react-quilljs').then(({ useQuill }) => {
        const { quill } = useQuill();
        setQuill(quill);

        if (quill) {
          quill.clipboard.dangerouslyPasteHTML('<p>Hello, Quill!</p>');
        }
      });
    }
  }, []);

  return (
    <>
      <div style={{ width: 600, height: 400 }}>
        <div ref={(el) => el && quill && quill.setContainer(el)} />
      </div>
    </>
  )
}

export default App
