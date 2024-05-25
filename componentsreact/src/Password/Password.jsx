import {useRef,useState,useCallback,useEffect} from 'react'









function Password() {
  const [length, setlength] = useState(8)
  const[numberAllowed,SetnumberAllowed]=useState(false)
  const[charAllowed,SetcharAllowed]=useState(false)
  const[Password,Setpassword]=useState("")
//   The useRef Hook allows you to persist values between renders.

// It can be used to store a mutable value that does not cause a re-render when updated.

// It can be used to access a DOM element directly.
  const passwordRef = useRef(null)
/*The React useCallback Hook returns a memoized callback function.

Think of memoization as caching a value so that it does not need to be recalculated.

This allows us to isolate resource intensive functions so that they will not automatically run on every render.

The useCallback Hook only runs when one of its dependencies update.

This can improve performance.*/
  const passwordgenerator = useCallback(()=>{
let str="QWERTYUIOPLKJHGFDSAZXCVBNMnmbvcxzasdfghjklpoiuytrewq"
let pass=""
if (numberAllowed) {
  str+="0123456789"
}
  
  if (charAllowed) {
    str+="!@#$%^&*+="
  }
  for (let i = 1; i <= length; i++) {
    let char = Math.floor(Math.random() * str.length + 1)
    pass += str.charAt(char)
    Setpassword(pass)
}
}, [length, numberAllowed, charAllowed, Setpassword])

const copyPasswordToClipboard = useCallback(() => {
  passwordRef.current?.select();
  passwordRef.current?.setSelectionRange(0, 999);
  window.navigator.clipboard.writeText(Password)
}, [Password])

useEffect(() => {
  passwordgenerator()
}, [length, numberAllowed, charAllowed, passwordgenerator])






  return (
    <>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={Password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
        />
        <button
             onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
        
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setlength(e.target.value)}}
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {
              SetnumberAllowed((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                SetcharAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">specialCharacters</label>
      </div>
    </div>
</div>


    </>
  )
}

export default Password