import { useCallback, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

export function useQueryParams() {
    const [queries, setQueries] = useState({})
    const { search } = useLocation();

    const onDecodeParams = useCallback((params)=>{
        const replaceFirstCharanter = params.replace('?', '')
        const splitString = replaceFirstCharanter.split('&')
        const formattedQueries = {}
        splitString.forEach(query => {
            const[key,value] = query.split('=')
              Object.assign(formattedQueries,{
                [key]:value
            })
        });
        setQueries(formattedQueries)
    },[])

    useEffect(()=> {
        if(search.trim()){
            onDecodeParams(search)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[search])

    return queries
}

