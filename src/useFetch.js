import { useState, useEffect } from "react";


const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setPending] = useState(true);
    const [error, setError] = useState(null)
    
    useEffect(()=>{

            const abortcount = new AbortController();

            setTimeout(()=>{
            fetch(url, {signal:abortcount.signal})
            .then(res => {               
                if(!res.ok){ // if the server res is false i.e not able to fetch the data, then it will throw error
                    throw Error('Could not fetch the data for that resource')
                }
                return res.json();
            })
            .then(data=>{
                setData(data);
                setPending(false);
                setError(null);
            })
            .catch(err => {
                if(err.name === 'AbortError'){
                    console.log('Fetch Aborted');
                }
                else{
                    setError(err.message);
                    setPending(false);
                }
                
            })
        }, 1000);

        return () => abortcount.abort();
        

    }, []);

    return {data, isPending, error}
}
 
export default useFetch;

//this is a custom hook, we can use it in any component we want to
// we will have to return the useState variable in the end

