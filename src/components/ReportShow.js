import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';


const ReportShow = () => {
  const reportsData = useSelector(state => (state.reports));

  const { reportId } = useParams();
  const report = reportsData[reportId]; // populate from Redux store

  return (
    <section>
      ID: {report.id}
      <br/>
      Understanding: {report.understanding}
      <br/>
      Improvement: {report.improvement}
      <br/>
      <Link to="/">Back to Report Index</Link>
    </section>
  );
}

export default ReportShow;