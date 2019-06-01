import React from 'react';

//const Header = () => {
//  return <h2>This is header space</h2>
//}

class Header extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            keywords:'dummy',
            title:'Data given in state '
        }
    }

    inputChange(event){
        this.setState({keywords:event.target.value});
        this.props.newsSearch(event.target.value);
       // this.setState({title:event.target.value})
        console.log(event.target.value);
    }

render(){
    // const styles = {
    //     header:{
    //         background:'#038DB9'
    //     },
    //     logo:{
    //         color:'#fff',
    //         fontSize:'35px',
    //         textAlign:'Center'
    //     }

    // }
    return(
    // <header style={styles.header}>
    //     <div style={styles.logo}>LOGO</div>
        <header>
        <div className = "logo" onClick={()=>console.log('LOGO clicked')}>LOGO</div>    
       <input onChange={this.inputChange.bind(this)}/>
       <div>{this.state.title}</div>
       <div>{this.state.keywords}</div>
    </header>
    )
}
}

export default Header;