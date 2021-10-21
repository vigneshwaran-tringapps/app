const inputField = (props)=>{

 return(
     <input
     type={props.type}
     placeholder={props.placeholder}
     onChange={props.change}
     value={props.value}
     className={props.className}
     >
     
     </input>
 )

};

export default inputField;