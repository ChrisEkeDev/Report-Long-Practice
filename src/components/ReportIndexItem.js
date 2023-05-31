import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteSingleReport } from '../store/reports';

const ReportIndexItem = ({ report }) => {
  const dispatch = useDispatch();


  const deleteReport = (id) => {
    // id.preventDefault();
    dispatch(deleteSingleReport(id))
  };

  return (
    <li>
      <Link to={`/reports/${report.id}`}>Report #{report.id}</Link>
      <Link to={`/reports/${report.id}/edit`}>Edit</Link>
      <button onClick={() => deleteReport(report.id)}>Delete</button>
    </li>
  );
};

export default ReportIndexItem;