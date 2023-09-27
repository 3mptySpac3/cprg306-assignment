
import react from 'react';
import Link from 'next/link';
import MilkData from './milkData';
import MilkItems from './milkItems';


export default function Milk() {
  return(
    <div>
      <h1>Milk Products</h1>
      <ul>
        {milkData.map((item, index) => (
          <Item key={index} name={item.name} quantity={item.quantity} category={item.category} price={item.price}/>
        ))}
      </ul>
    </div>
  );
}