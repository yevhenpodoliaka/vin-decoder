
const VariablesDetailsList = ({data}) => {
  return (
    <ul>
      {data?.map(({ ElementName, Id, Name }) => (
        <li
          key={Id}
          style={{ backgroundColor: '#f1f1f1', marginBottom: '8px' }}
        >
          <p>ElementName : {ElementName} </p>
          <p>Name : {Name}</p>
        </li>
      ))}
    </ul>
  );
}

export default VariablesDetailsList