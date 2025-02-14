import Input from '../components/Input'
import React from 'react'

const Price = ({handleCheckbox}) => {
  return (
    <>
    <div className="font-sans text-[20px] flex justify-center align-center mt-7">
    Price
  </div>
  <Input onchange={handleCheckbox} value="price" name="test2" title="$0 - $50" />
  <Input onchange={handleCheckbox} value="price" name="test2" title="$50 - $100"  />
  <Input onchange={handleCheckbox} value="price" name="test2" title="$150 - $200" />
  <Input onchange={handleCheckbox} value="price" name="test2" title="$250 - $300" />
  <Input onchange={handleCheckbox} value="price" name="test2" title="$350 - $400" />
  </>
  )
}

export default Price