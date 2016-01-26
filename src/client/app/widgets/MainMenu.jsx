import React from "react";
import { ButtonGroup, Button, DropdownButton, MenuItem } from 'react-bootstrap';


const MainMenu = React.createClass({

    render () {

        let props = this.props;

        const topos = (options) => {
            return options.map(function (option, key) {
                if ( option.options && option.options.length ) {
                    return ( <DropdownMenu { ...props } key={ key } option={ option } /> );
                }
                return ( <Button key={ `top-menu-${key}` }>{ option.caption }</Button> );
            });
        };

        return (
            <ButtonGroup>{ topos(props.options) }</ButtonGroup>
        );
    }

});


const DropdownMenu = React.createClass({

    render () {

        let props = this.props;

        const menuItems = (options, menuKey) => {
            return options.map(function (option, key) {
                if ( option.divider ) {
                    return (<MenuItem key={ `top-menu-{menuKey}.${key}`} divider />);
                }
                return (
                    <MenuItem key={ `top-menu-{menuKey}.${key}`} eventKey={ key } active={ option.active } 
                        onClick={ props.onClick.bind(null, option) }>{ option.caption }</MenuItem>
                );
            });
        };

        return (
            <DropdownButton key={ `top-menu-${this.props.key}` } id={ `dropdown-basic-${props.key}` } bsStyle="default" 
                title={ props.option.caption }>
                { menuItems(props.option.options, props.key) }
            </DropdownButton>
        );
    }

});


export default MainMenu;
