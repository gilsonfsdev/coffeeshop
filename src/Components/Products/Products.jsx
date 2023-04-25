import React from 'react'
import Product from './Product'

const Products = () => {
  return (
    <section className='max-w-100max w-full my-0 mx-auto py-0 px-8 mb-64 grid grid-cols-4'>
      <Product product='1' title='Café Blend' roast='Torra Escura' stars='5' reviews='16' price='29,90'/>
      <Product product='2' title='Café Branco' roast='Torra Clara' stars='5' reviews='12' price='28,50'/>
      <Product product='3' title='Café Premium' roast='Torra Média' stars='5' reviews='8' price='32,90'/>
      <Product product='4' title='Café Latte' roast='Torra Clara' stars='5' reviews='7' price='25,00'/>
    </section>
  )
}

export default Products