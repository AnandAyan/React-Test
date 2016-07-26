var React=require('react');
var ReactDOM=require('react-dom');

var CommentBOX=React.createClass({
         render:function(){
             var hStyle = {
                 color: 'white'
             };
             return(<div className="commentBox">
             <h1 style={hStyle}>Hello,this si comment box</h1>
                 <CommentList/>
                 <CommentForm/>
             </div>)
         }
});
var CommentList=React.createClass({
    render:function(){
        return(
            <ul className="list-group">
                 <Comment user="Ayan">That's really looking nice</Comment>
            </ul>
        )
    }
});

var Comment=React.createClass({
      render:function(){
          return(
              <li className="list-group-item media-list">
                <h4 className="username">{this.props.user}</h4>
                <p>{this.props.children}</p>
              </li>
          )
      }
});

var CommentForm=React.createClass({
    render:function(){
        return(<div className="form-group">
                <div className="input-group">
                        <input type = "text" className = "form-control"/>
                        <span className = "input-group-btn">
                              <button className = "btn btn-primary" type = "button">
                                  Comment
                              </button>
                         </span>
                </div>
        </div>)
    }
});


ReactDOM.render(<CommentBOX/>,document.querySelector('#app'));