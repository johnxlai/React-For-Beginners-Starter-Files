import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  myInput = React.createRef();

  goToStore = (e) => {
    // 1.Stop the form
    e.preventDefault();

    //2. get the txt from that input
    const storeName = this.myInput.current.value;
    //3. Change trhe page to /store/whatever-they-entered
    this.props.history.push(`/store/${storeName}`);
  };
  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter a Store</h2>
        <input
          type="text"
          name=""
          id=""
          ref={this.myInput}
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button type="submit">Visit store</button>
      </form>
    );
  }
}

export default StorePicker;
