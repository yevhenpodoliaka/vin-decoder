import { Link,useLocation } from "react-router-dom";
import { ItemTitle,ItemTypeName,ItemDescription} from "./VariablesList.styled";
const VariablesList = ({ data }) => {
    const location = useLocation();
  return (
    <ul>
      {data?.map(({ DataType, Description, GroupName, ID, Name }) => (
        <li
          key={ID}
          style={{
            backgroundColor: '#f1f1f1',
            marginBottom: '8px',
            padding: '20px',
          }}
        >
          <Link to={`/variables/${ID}`} state={{ from: location }}>
            <ItemTitle>GroupName:{GroupName}</ItemTitle>
            <ItemTypeName>Name : {Name}</ItemTypeName>
            <ItemDescription dangerouslySetInnerHTML={{ __html: Description }} />

            
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default VariablesList