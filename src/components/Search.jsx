import React, {useState} from 'react'

const Search = ({ setHeroes }) => {

    const [search, setSearch] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        setHeroes(search)
    }
    return (
        <div className='row justify-content-center'>
            <div className='col-md-6'>
                 <form
                   onSubmit={handleSubmit}
                >   
                <div className="input-group mb-3 mt-3">
                    <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" className="form-control" placeholder="Superman" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                    <button className="btn btn-warning fw-bold" type="submit" id="button-addon2">Search</button>
                </div>
                </form>
            </div>
        </div>
    )
}

export default Search
