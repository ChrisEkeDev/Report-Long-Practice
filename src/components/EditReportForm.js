import { useParams } from 'react-router-dom';
import ReportForm from './ReportForm';
import { useSelector } from 'react-redux';

const EditReportForm = () => {
  const reportsData = useSelector(state => (state.reports));
  const { reportId } = useParams();
  const report = reportsData[reportId]; // populate from Redux store

  return (
    <ReportForm report={report} formType="Update Report" />
  );
}

export default EditReportForm;
