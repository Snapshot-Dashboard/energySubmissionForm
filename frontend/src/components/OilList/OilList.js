import Axios from 'axios'
import { useState, useEffect } from 'react'
import './OilList.css'

const OilList = ({ OilList }) => {
    const [OilData, setOilData] = useState([])

    const handleDelete = id => {
        Axios.delete(`http://localhost:4000/${id}`)
    }

    const handleEdit = id => {
        Axios.put(`http://localhost:4000/${id}`)
    }

    useEffect(() => {
        Axios.get('http://localhost:4000/api/oil')
            .then(res => setOilData(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className='ListData'>

            {renderListHeader()}

            <div className="OilList">
                {OilList.map(OilData => {
                    return (
                        <div key={Date.now()} className='OilCard'>
                            <div className="OilData">
                                {OilData.Category === 3 ? 'REG. GAS' : OilData.Category === 2 ? 'NAT. GAS' : OilData.Category === 1 ? 'NO-SPR' : OilData.Category === 0 ? 'SPR' : ''}
                            </div>
                            <div className="OilData">
                                {OilData.DateOfData}
                            </div>
                            <div className="OilData">
                                {OilData.Value}
                            </div>
                            <div className="OilData">
                                <button onClick={() => handleEdit(OilData._id)} className='CardButton'>Edit</button>
                                <button onClick={() => handleDelete(OilData._id)} className='CardButton'>Delete</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )

    function renderListHeader() {
        return (
            <>
                <div className="ListHeader">
                    <div className="ListHead">
                        Category
                    </div>
                    <div className="ListHead">
                        Date
                    </div>
                    <div className="ListHead">
                        Value
                    </div>
                    <div className="ListHead">
                    </div>
                </div>
            </>
        )
    }
}

export default OilList