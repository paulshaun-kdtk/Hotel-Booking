import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { fetchItemDetails } from './redux/actions/itemActions';
import { Sidebar } from './Sidebar'; // will be updated after sidebar is created

const ItemDetails = () => {
  const { itemId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const item = useSelector((state) => state.item);

  useEffect(() => {
    dispatch(fetchItemDetails(itemId));
  }, [dispatch, itemId]);

  const handleReserveClick = () => {
    history.push('/reservation');
  };

  return (
    <div>
      <Sidebar />
      <h2>Item Details</h2>
      {item && (
        <div>
          <img src={item.image} alt={item.name} />
          <h2>{item.name}</h2>
          <div className="details">
            <p>
              Finance fee:
              {item.finance_fee}
            </p>
            <p>
              Option to purchase fee:
              {item.finance_fee}
            </p>
            <p>
              Finance fee:
              {item.purchase_fee}
            </p>
            <p>
              Total amount payable:
              {item.total_amount}
            </p>
            <p>
              Duration:
              {item.duration}
            </p>
            <p>{item.apr}% APR Representative</p>
          </div>
          <button onClick={handleReserveClick}>Reserve</button>
        </div>
      )}
    </div>
  );
};

export default ItemDetails;
