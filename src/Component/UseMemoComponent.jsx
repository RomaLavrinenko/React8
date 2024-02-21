import { useCallback, useEffect, useMemo, useState } from "react";
import useFetch from "./useFetch";


const calculate = (count) =>{
    for(let i = 0; i<5000000000; i++){
        count+= 1;
    }
    return count
}

const UseMemoComponent = ({count}) =>{
    const [num,setNum] = useState(0);
    const [data] = useFetch("users");
    useEffect(()=>{
        console.log(data);
    },[data])
    const handleClick = useCallback(() =>{
        setNum(num+1);
    },[count]);

    const value = useMemo(()=>calculate(count),[num]);
    return(
        <>
            <button onClick={handleClick}>Update</button>
            <h3>{value}</h3>
        </>
    );
}

export default UseMemoComponent ;