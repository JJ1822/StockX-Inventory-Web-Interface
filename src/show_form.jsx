import React from 'react';

const ShowFormItem = ({update, brand, style, size, upcId, closeModal}) => {
  console.log(this);
  return(
    <div className="spot-options">
      <input
        type="text"
        placeholder="Brand of Shoe"
        onChange={update('brand')}
        value={brand}
        />
      <input
        type="text"
        placeholder="Style of Shoe"
        onChange={update('style')}
        value={style}
        />
      <input
        type="text"
        placeholder="Size of Shoe"
        onChange={update('size')}
        value={size}
        />
      <input
        type="text"
        placeholder="UPC_ID"
        onChange={update('upc_id')}
        value={upcId}
        />
      <button
        onClick={closeModal}
        >Add Shoe</button>
    </div>
  );
};

export default ShowFormItem;
