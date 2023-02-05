import { useState, useEffect } from 'react';
import { modDiff } from './helper';

/**
 * Percentage difference formula:
    v1: value1
    v2: value2
    modSub: |v1-v2|
    temp: (v1+v2)/2
    Percentage Difference: (modSub/temp)*100

 */
const Difference = () => {
    const [perA, setPerA] = useState<number>(0);
    const [perB, setPerB] = useState<number>(0);
    const [perDiff, setPerDiff] = useState<number>(0);
    const [subDiff, setSubDiff] = useState<number>(0);

    useEffect(() => {
        if(!perA || !perB || perA < 0 || perB < 0) {
            setPerDiff(0);
            return;
        }
        const modDiffValue = modDiff(perA,perB);
        const diff = (modDiffValue/((perA+perB)/2))*100;
        setPerDiff(diff);
        setSubDiff(modDiffValue);
    }, [perA, perB]);

    const handleClear = () => {
        setPerA(0);
        setPerB(0);
        setPerDiff(0);
        setSubDiff(0);
    }
    
    return <>
        <h2>Percentage difference</h2> 
        <div>
            <button onClick={handleClear}>Clear</button>
        </div>
        <input value={perA} onChange={(e) => setPerA(parseFloat(e.target.value || '0'))} />        
        <input value={perB} onChange={(e) => setPerB(parseFloat(e.target.value || '0'))} />
        <div>Difference in percentages: <b>{perDiff}%</b></div>
        <div>Difference in value: <b> ₹ {subDiff.toLocaleString('en-IN')}</b></div>
    </>
}

export default Difference;