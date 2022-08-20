import{Component} from "react";



class Asset extends Component {

    constructor(props){
        super(props);
        this.state = {
        users: []
    }
}

componentDidMount(){
    fetch("/api/asset")
    .then (res => res.json())
    .then(users => {
        this.setState({users: users});
    })
}
    render(){
        return (
            <ul>
                {
                    this.state.map(user =>{
                        <li>Username : (user.hero)</li>
                    })
                }
            </ul>
        )
    }
}

export default Asset;