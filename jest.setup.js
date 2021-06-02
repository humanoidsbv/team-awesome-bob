const { configure } = require("enzyme");
const ReactAdapter = require("@wojtekmaj/enzyme-adapter-react-17");

configure({ adapter: new ReactAdapter() });
