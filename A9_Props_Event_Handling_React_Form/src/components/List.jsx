import React from 'react'
import Card from './Card'

function List() {
    const users = [
        {Name: 'Nithit Lertcharoensombat', Job: 'Student', Hobby: 'Sleeping'},
        {Name: 'Ren Yae', Job: 'Samurai', Hobby: 'Pet fox'},
        {Name: 'Nagishiro Mito', Job: 'Mage', Hobby: 'Magic Study'},
        {Name: 'Satou Mio', Job: 'PA', Hobby: 'Reading book'}
    ]

    return (
        <div className="List">
            {users.map((item, index) => {
                return <Card newuser={item} key= {index}/>
            })}
        </div>
    )
}

export default List
