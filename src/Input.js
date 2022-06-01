//   import './App.css';
//   import React ,{useState}from 'react'


//   function GetInput() {

//  //  eslint-disable-next-line react-hooks/rules-of-hooks
//   const [data,setData]=useState(null)
//  //  eslint-disable-next-line react-hooks/rules-of-hooks
//   const [print,setPrint]=useState(false)
//     function getDataInput(val)
//     {
//       setData(val.target.value)
//       setPrint(false)
//       console.log(data)
//     }
//     return (
//       <div>
//        {
//          print?
//          <h1> {data}</h1>
//          :null
//        }
//       <input className="input_search"
//             type="text"
//             name=""
//             id=""
//             placeHolder="Inserisci titolo, autore, genere" onChange={getDataInput} />
//       <button onClick={()=>setPrint(true)} 
//       type="submit" 
//       className="button_search">Trova Libro</button>
//       </div>
//     );
//   }

//   export default GetInput;