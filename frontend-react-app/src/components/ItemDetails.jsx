import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import fetchItemDetails from './redux/actions/itemActions';
import Navbar from './Navbar';
import '../styles/ItemDetails.css';

const ItemDetails = () => {
  const { itemId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const item = useSelector((state) => state.item);

  useEffect(() => {
    dispatch(fetchItemDetails(itemId));
  }, [dispatch, itemId]);

  const handleReserveClick = () => {
    navigate('/reservation');
  };

  return (
    <div className="item-main">
      <Navbar />
      {item && (
        <div className="main-details">
          <img className="item-img" src={item.image} alt={item.name} />
          <div className="details">
            <div className="item-name-desc">
              <h2>{item.name}</h2>
              <p>{item.description}</p>
            </div>
            <div className="item-numbers">
              <table>
                <tr className="tr-bg">
                  <td>Finance fee:</td>
                  <td className="cell-2">{item.finance_fee}</td>
                </tr>
                <tr>
                  <td>Option to purchase fee:</td>
                  <td className="cell-2">{item.finance_fee}</td>
                </tr>
                <tr className="tr-bg">
                  <td>Total amount payable:</td>
                  <td className="cell-2">{item.total_amount}</td>
                </tr>
                <tr>
                  <td>Duration:</td>
                  <td className="cell-2">{item.duration}</td>
                </tr>
              </table>
              <p className="item-apr">
                {item.apr}
                % APR Representative
              </p>
            </div>
            <a className="item-discover" href="/homepage">Discover more models</a>
            <button className="item-btn" onClick={handleReserveClick}>Reserve</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemDetails;
