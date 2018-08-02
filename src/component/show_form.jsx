import React from 'react';

const ShowFormItem = ({update, brand, style, size, upcId, closeForm}) => {
  return(
    <div className="spot-options">
      <span onClick={closeForm} className="form-close">&times;</span>
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
        onClick={closeForm}
        className="button add-shoe"
        >Add Shoe</button>
    </div>
  );
};

export default ShowFormItem;
