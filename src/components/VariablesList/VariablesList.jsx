import { Link,useLocation } from "react-router-dom";
const VariablesList = ({ data }) => {
    const location = useLocation();
  return (
      <ul>
        {data?.map(({ DataType, Description, GroupName, ID, Name }) => (
          <li
            key={ID}
            style={{ backgroundColor: '#f1f1f1', marginBottom: '8px' }}
          >
            <Link to={`/variables/${ID}`} state={{ from: location }}>
              <p>DataType : {DataType}</p>
              <div dangerouslySetInnerHTML={{ __html: Description }} />
              <p>GroupName:{GroupName}</p>
              <p>Name : {Name}</p>
            </Link>
          </li>
        ))}
      </ul>

  );
}

export default VariablesList