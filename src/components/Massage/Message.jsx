
const Message = ({ text }) => {
  return (
    <p style={{ backgroundColor: '#f1f1f1', padding: '8px' }}>
      <b>Message:</b> "{text}"
    </p>
  );
}

export default Message