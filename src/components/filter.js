/**
 * IMPORTS
 */
import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {api} from '../utility/api.js';
import * as actions from '../actions/filteractions.js';


/**
 * STYLES
 */
import './styles/filter.css';


/**
 * CODE
 */
function Filter () {
    // component dispatch
    const dispatch = useDispatch();

    // component country filter state
    const [country, setCountry] = useState(null);

    // component limit filter state
    const [limit, setLimit] = useState(null);

    // component locale filter state
    const [locale, setLocale] = useState(null);

    // component offset filter state
    const [offset, setOffset] = useState(null);

    // component timestamp filter state
    const [timestamp, setTimestamp] = useState(null);

    // component data state
    const [data, setData] = useState(null);

    // component has error state
    const [hasError, setHasError] = useState(false);

    // effect to be runned only once
    useEffect(() => {
        // function to fetch filter data
        async function fetchData() {
            const response = await api.get();
        
            // response status is not 200: error fetching data
            if (response.status !== 200) {
                setHasError(true)
            }
            // response status is 200: set data state
            else {
                setData(response.data.filters);
            }
        }
        
        // fetch filter data
        fetchData();
    }, []);

    // function to handle click on button
    function handleClick() {
        const filters = {country, limit, locale, offset, timestamp}

        //dispatching action
        dispatch(actions.setFilter(filters));
    }

    // function to handle country change
    function handleCountryChange(event) {
        event.preventDefault();
        
        if (event.target.value === 'Escolha um país') {
            setCountry(null);
            return
        }
        setCountry(event.target.value);
    }

    // function to handle limit change
    function handleLimitChange(event) {
        event.preventDefault();
        setLimit(event.target.value);
    }

    // function to handle locale change
    function handleLocaleChange(event) {
        event.preventDefault();

        if (event.target.value === 'Escolha uma localidade') {
            setLocale(null);
            return
        }
        setLocale(event.target.value);
    }

    // function to handle offset change
    function handleOffsetChange(event) {
        event.preventDefault();
        setOffset(event.target.value);
    }

    // function to handle timestamp change
    function handleTimestampChange(event) {
        event.preventDefault();
        setTimestamp(event.target.value + ':00');
    }

    return (
        <div className="filterblock">
            {hasError && <p>Erro ao carregar filtros</p>}
            {!hasError && data !== null && (
                <div>
                    <p>Filtros</p>
                    <div className="row">
                        <div className="group">
                            <label>País</label>
                            <select className="select"
                                    onChange={handleCountryChange}>
                                <option>Escolha um país</option>
                                {data[1].values.map(c => {
                                    return <option key={c.value}
                                                value={c.value}>{c.name}</option>
                                })}
                            </select>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="group">
                            <label>Localidade</label>
                            <select className="select"
                                    onChange={handleLocaleChange}>
                                <option>Escolha uma localidade</option>
                                {data[0].values.map(c => {
                                    return <option key={c.value}
                                                value={c.value}>{c.name}</option>
                                })}
                            </select>
                        </div>
                    </div>

                    <div className="nrow">
                        <div className="group">
                            <label>Quantidade</label>
                            <input className="numeric"
                                   max="50"
                                   min="1"
                                   name="limit"
                                   onChange={handleLimitChange}
                                   placeholder="1"
                                   type="number" />
                        </div>
                        <div className="group">
                            <label>Página</label>
                            <input className="numeric"
                                   min="1"
                                   name="offset"
                                   onChange={handleOffsetChange}
                                   placeholder="1"
                                   type="number"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="group">
                            <label>Data e Horário</label>
                            <input className="date"
                                   onChange={handleTimestampChange}
                                   type="datetime-local" />
                        </div>
                    </div>
                    <button className="filter" onClick={handleClick}>FILTRAR</button>
    
                </div>
                )}
        </div>
    )
}

/**
 * EXPORTS
 */
export {Filter};
