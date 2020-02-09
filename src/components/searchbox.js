import React from 'react' ;
import { Input } from 'antd';
import logo from '../img/logo.png'

const { Search } = Input;

const SearchBox = () => {
  return (
    <div>
      <Search
        placeholder="Chercher un article"

        style={{ width: 300 , padding :10 , left : 1100 }}
      />
<img src={logo} className="logo-image" />
    </div>
  )
}
export default SearchBox ;
