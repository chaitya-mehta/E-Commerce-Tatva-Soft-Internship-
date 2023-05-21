import React from 'react'
import "../App.css" 
export default function Search() {
  return (
    <div>
        <nav className="navbar bg-body-tertiary mt-3">
            <div className="container-fluid d-flex justify-content-center">
                <form className="d-flex w-50  " role="search">
                    <input className="form-control  me-2 mb-2" type="search" placeholder="What Are You Looking For.." aria-label="Search"/>
                    <button className="btn btn-outline-success me-2 mb-2 fa fa-search " type="submit">Search</button>
                    <button type="button" className="btn btn-outline-danger me-2 mb-2">Cancel</button>
                </form>
            </div>
        </nav>
    </div>
  )
}
