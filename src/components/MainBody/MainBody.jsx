import React, { useState } from 'react';
import './MainBody.css';
import SavePage from '../pages/SavePage/Save.jsx';
import CompareVersion from '../pages/CompareVersionPage/CompareVersion.jsx';
import SubmitForReview from '../pages/SubmitForReviewPage/SubmitForReview.jsx';
import Comments from '../pages/CommentsPage/Comments.jsx';

function MainBody() {
  const [selected, setSelected] = useState(null);

  let content = null;
  if (selected === 'save') content = <SavePage />;
  else if (selected === 'compare') content = <CompareVersion />;
  else if (selected === 'submit') content = <SubmitForReview />;
  else if (selected === 'comments') content = <Comments />;

  return (
    <div>
      <div className='card-flow-container'>
        <button className='card' onClick={() => setSelected('save')}>Save</button>
        <span className="arrow">→</span>
        <button className='card' onClick={() => setSelected('compare')}>Compare Version</button>
        <span className="arrow">→</span>
        <button className='card' onClick={() => setSelected('submit')}>Submit for Review</button>
        <span className="arrow">→</span>
        <button className='card' onClick={() => setSelected('comments')}>Comments</button>
      </div>
      <div style={{ marginTop: '2rem' }}>
        {content}
      </div>
    </div>
  );
}
export default MainBody;