import React from 'react';

class StorePicker extends React.Component {
    constructor(){
        super();
        this.goToStore = this.goToStore.bind(this);
        
    }
    goToStore(e){
        console.log("Going to Store");
        e.preventDefault();
    }
    render() {
        return (
            <form className="store-selector" onSubmit={this.goToStore}> 
                <h2>Please Enter a Store</h2>
                <input type="text" required placeholder="Store Name" />
                <button type="submit">Visit Store</button>
            </form>
        );
    }
}

export default StorePicker;