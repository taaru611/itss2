import './EndButton.css';


function EndButton(props) {

  const goEnd = () => {
    props.parentCallback(true); 
  };

  return (
    <button onClick={goEnd} className='end-button'>
        Kết thúc
    </button>
  );
}


export default EndButton;