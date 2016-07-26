var React=require('react');
var ReactDOM=require('react-dom');

var data = [
    {id: 1, author: "Pete Hunt", text: "This is one comment"},
    {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
];
var CommentBOX=React.createClass({

         render:function(){
             var hStyle = {
                 color: 'white'
             };

             return(<div className="commentBox">
             <h1 style={hStyle}>Hello,this si comment box</h1>
                 <CommentList data={this.props.data}/>
                 <CommentForm/>
             </div>)
         }
});
var CommentList=React.createClass({
    render:function(){
        var CommentNode=this.props.data.map(function(comments) {
                  return(  <Comment key={comments.id} user={comments.author}>{comments.text}</Comment>);
            }
        );
        return(
            <ul className="list-group">
                {CommentNode}
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


ReactDOM.render(<CommentBOX data={data}/>,document.querySelector('#app'));