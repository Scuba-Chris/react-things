import React from 'react';


class DiveSiteForm extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            diveSiteName: '',
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleInputChange(event){

        this.setState({
            diveSiteName: event.target.value
        })
    }
    handleSubmit(event){
        event.preventDefault();
        this.props.onSubmit({siteName:this.state.diveSiteName})
        this.setState({
            diveSiteName: ''
        })
        console.log(event)
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                
                <label>
                    Dive site:
                    <input name='diveSiteName' type='text' value={this.state.diveSiteName} onChange={this.handleInputChange}/>
                </label>            
                <button>submit</button>
            </form>
        )
    }
}

function DiveSitesCreated(props){
    return <li><p>{props.site.siteName}</p></li>
}

class ListOfDiveSites extends React.Component{

    render(){
        return(
            <>
                <ul> {this.props.divesSites.map(site => <DiveSitesCreated key={site.id} site={site} onDelete={this.deleteHandler}/>)} </ul>
            </>
        )
    }
}

export {ListOfDiveSites, DiveSiteForm} 