import React from "react";
import { ButtonGroup, Button, DropdownButton, MenuItem } from 'react-bootstrap';


const MainMenu = React.createClass({

    render () {

        const topos = (options) => {
            return options.map(function (option, key) {
                if ( option.options && option.options.length ) {
                    return ( <DropdownMenu key={ key } option={ option } /> );
                }
                return ( <Button key={ `top-menu-${key}` }>{ option.caption }</Button> );
            });
        };

        return (
            <ButtonGroup>{ topos(this.props.options) }</ButtonGroup>
        );
    }

});


const DropdownMenu = React.createClass({

    render () {

        const menuItems = (options, menuKey) => {
            return options.map(function (option, key) {
                return (
                    <MenuItem key={ `top-menu-{menuKey}.${key}`} eventKey={ key }>{ option.caption }</MenuItem>
                );
            });
        };

        return (
            <DropdownButton key={ `top-menu-${this.props.key}` } id={ `dropdown-basic-${this.props.key}` } bsStyle="default" 
                title={ this.props.option.caption }>
                { menuItems(this.props.option.options, this.props.key) }
            </DropdownButton>
        );
    }

});


export default MainMenu;