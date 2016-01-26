import React from "react";

const PageContainer = React.createClass({

    render () {
        return (
            <div className="container-fluid">
                <div className="page-header">
                    <h1>{ this.props.title } <small>{ this.props.subtitle }</small></h1>
                    { this.props.menu }
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="panel panel-default">
                            <div className="panel-body">
                                { this.props.module }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

});

export default PageContainer;
