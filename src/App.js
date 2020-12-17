import React from 'react';
import Gallery  from "./components/Gallery/Gallery";
import  styles  from "./App.module.css";

import fetchData  from "./api";

class App extends React.Component{

    state ={
        data:{},
    }
    async componentDidMount(){
        const ImagesData= await fetchData();
        this.setState({data:ImagesData});
    }

    render(){
        const {data}=this.state;
        debugger;
        return(
            <div className={styles.container}>
                <Gallery data={data}/>
            </div>
        )
    }
}

export default App;