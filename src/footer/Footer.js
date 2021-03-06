import React from 'react';

class Footer extends React.Component {
  render() {
    let contactArray = this.props.contactArray;
    let addresArray = this.props.addresArray;
    const city = Object.keys(addresArray).map(elem => addresArray[elem]);
    return (
      <footer>
        <div className="container-fluid row">
          <div className="col-3">
            {Object.keys(contactArray).map(elem => <p>{"Телефон города"} {elem} {contactArray[elem]}</p>)}
          </div>

            {Object.keys(addresArray).map(elem => 
              <div className="col-3">
                <p> {`Офис в городе:`} {addresArray[elem].city}{'\n'}</p>
                <p> {`Адрес офиса:`} {addresArray[elem].street}{'\n'}</p>
                <p> {`Номер дома/номер офиса:`} {addresArray[elem].numberOfHouse}{'\n'}</p>
              </div>
            )}

        </div>
      </footer>
    );
  }
}

export default Footer;