import "./About.css"

const About = ({user}) => {

    return (        
        <div className="card mb-3" style={{'max-width' : '540px'}}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={user.img} class="img-fluid rounded-start" alt="pepe"/>
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{user.name} {user.lastname}</h5>
                    <p className="card-text"></p>
                    <p className="card-text"><small className="text-body-secondary">Le gusta CSS? {user.likesCss?"Si":"No"}</small></p>
                </div>
                </div>
            </div>
        </div>
    )
}

export { About }