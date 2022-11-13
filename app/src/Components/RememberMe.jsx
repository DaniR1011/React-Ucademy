import React from 'react'

const RememberMe = () => {
    const [checkedOne, setCheckedOne] = React.useState(false);
  
    const handleChangeOne = () => {
      setCheckedOne(!checkedOne);
    };

    const Checkbox = ({ label, value, onChange }) => {
        return (
          <label>
            <input type="checkbox" checked={value} onChange={onChange} />
            {label}
          </label>
        );
      };

return (
    <div>
         <Checkbox label="Remember Me" value={checkedOne} onChange={handleChangeOne} />   
    </div>
)
}
export default RememberMe