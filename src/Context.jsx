import React, {useState,useContext,useEffect, Children} from 'react'
import { useCallback } from 'react'

const URL = 'https://openlibrary.org/search.json?title='

const AppContext = React.createContext()

const AppProvider =({Children}) => {
    const [searchTerm,setsearchTerm] = useState('the lost world')
    const [books,setBooks] = useState([])
    const [Loading,setLoading] = useState(false)
    const [resultTitle,setresultTitle] = useState('')

    const fetchBook = useCallback (async() =>{
        setLoading(true)
        try{
            const response = await fetch(`${URL}${searchTerm}`)
            const data = await response.json()
            console.log(data)
            const {docs} = data
            console.log(docs)

            if(docs){
                const newBooks = docs.slice(0, 20).map((singlebook) =>{
                  const {key, author_name, cover_i, edition_count, first_published_year,title} = singlebook 

                  return{
                    id:key,
                    author:author_name,
                    cover_id:cover_i,
                    edition_count:edition_count,
                    first_published_year:first_published_year,
                    title:title
                  }               
                })

                setBooks(newBooks)

                if(newBooks.length >1){
                    setresultTitle('Your Search Results')
                }else{
                    setresultTitle('No Result Found !!')
                }
            }else{
                setBooks([])
                setresultTitle('No Result Found !!')
            }
            setLoading(false)
        }catch(error){
            console.log(error)
            setLoading(false)
        }
    },[searchTerm])

    useEffect (() =>{
        fetchBook()
    },[searchTerm,fetchBook])

    return(
        <AppContext.Provider value={{
            Loading,books,setsearchTerm,resultTitle,setresultTitle
        }}>
            {Children}
        </AppContext.Provider>
    )

}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export{AppContext, AppProvider}
