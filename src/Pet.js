import React from 'react';

export default function Pet({ name, type, colour }){
 return (
   <div>
      <h1>{name}</h1>
      <h2>{type}</h2>
      <h2>{colour}</h2>
   </div>
 );
}
