import React from 'react';
import Button from './button';
import { withRouter } from "react-router-dom";

const Item = (props) => {
  // handle item delete
  const handleDelete = (bucketlistId) => {
    console.log('c');
    fetch('http://127.0.0.1:5000/v1/bucketlists/' + props.bucketlistId + '/items/' + props.itemId, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('ACCESSTOKEN')
      }
    })
    .then(response => {
      return response.json()
    })
    .then(responseData => {
      // on successful delete: re-render ItemtView component
      props.history.push('/bucketlists/' + props.bucketlistId + '/items/');
    });
  }

  return (
    <div className="item">
      <span className="item_name">{props.itemName}</span>
      <span className="item_bucket">{props.itemBucket}</span>
      <span className="item_actions">
        <Button buttonText="Edit" className="edit_button" />
        <Button buttonText="Delete" className="delete_button" onClick={() => handleDelete(props.itemId)} />
      </span>
    </div>
  );
}

export default withRouter(Item);
