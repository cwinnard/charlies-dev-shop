const toggleMenu = display => (
    this.setState({ menuOpen: display })
);

const appDefaultState = {
    menuOpen: false,
    toggleMenu,
};

export default appDefaultState;
