import React from 'react'

export default function MySelect({defaultValue, options, value, onChange}) {
  return (
    <select 
        className="form-select me-3"
        value={value}
        onChange={(e) => onChange(e.target.value)}>
        
        <option disabled value="">{defaultValue}</option>
        {options.map(opt => (
        <option key={opt.value} value={opt.value}>{opt.name}</option>
        ))}
    </select>
  )
}
