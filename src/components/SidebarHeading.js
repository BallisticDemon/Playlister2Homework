import React from "react";

export default class SidebarHeading extends React.Component {
    handleClick = (event) => {
        const { createNewListCallback } = this.props;
        createNewListCallback();
    };
    render() {
        return (
            <div id="sidebar-heading">
                <input 
                    type="button" 
                    id="add-list-button" 
                    className="playlister-button" 
                    onClick={this.handleClick}
                    value="+" />
                Your Playlists
            </div>
        );
    }
}