import { useState } from 'react'
import './InputCard.css'
import Axios from 'axios'
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'

const InputCard = ({ OilList, setOilList }) => {
    const [Category, setCategory] = useState('NO DATA')
    const [DateOfData, setDateOfData] = useState('')
    const [Value, setValue] = useState(0)

    const [Options] = useState(['SPR', 'NO-SPR', 'NATURAL GAS', 'REGIONAL GAS'])
    const [OptionSelected, setOptionSelected] = useState(0)

    const handleSubmit = () => {
        if (!Category || !DateOfData || !Value) return
        // Axios.post('http://localhost:4000/api/oil', { Category: OptionSelected, DateOfData, Value })
        setOilList([...OilList, { Category, DateOfData, Value }])
        setCategory('')
        setDateOfData('')
        setValue(0)
    }

    const handleCategory = (idx) => {
        setCategory(idx)
        setOptionSelected(idx)
    }

    return (
        <div className="InputCard">
            <h3>Category</h3>
            {renderSelector()}
            <h3>Date</h3>
            <input type="date" value={DateOfData} name='DateOfData' onChange={e => setDateOfData(e.target.value)} />
            <h3>Value</h3>
            <input type="number" value={Value} name='Value' onChange={e => setValue(e.target.value)} />
            <button className='DataInputButton' onClick={handleSubmit}>Add Data</button>
        </div>
    )

    function renderSelector() {
        return (
            <>
                <div className='Category'>
                    {Options.map((option, idx) => {
                        return (
                            <div key={option} className={idx === OptionSelected ? 'Option' : 'OptionNonActive'} >
                                <div className={idx === OptionSelected ? 'IconSelected' : 'Icon'}>
                                    <AiOutlineArrowRight />
                                </div>
                                <button onClick={() => handleCategory(idx)}>{option}</button>
                                <div className={idx === OptionSelected ? 'IconSelected' : 'Icon'}>
                                    <AiOutlineArrowLeft />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </>
        )
    }
}

export default InputCard